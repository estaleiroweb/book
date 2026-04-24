# Engine S3

O **MariaDB-s3-engine** é um motor de armazenamento de **somente leitura** introduzido no MariaDB 10.5.4, que permite arquivar tabelas do MariaDB diretamente no **Amazon S3** ou em qualquer armazenamento em nuvem pública ou privada compatível com a API S3 (como MinIO). Ele é ideal para arquivamento de dados históricos que não precisam ser modificados, mas devem permanecer acessíveis para consulta, reduzindo custos de armazenamento em comparação com discos locais. Abaixo estão exemplos práticos de como usar o `MariaDB-s3-engine` em português, com base em sua funcionalidade e configuração.

## Pré-requisitos

1. **Versão do MariaDB**: O suporte ao S3 está disponível a partir do MariaDB 10.5.4. A partir do MariaDB 10.5.7, o motor é considerado de maturidade **gamma** (estável o suficiente para uso geral).
2. **Instalação do Plugin**:
   - **Debian/Ubuntu**:
     ```bash
     sudo apt install mariadb-plugin-s3
     ```
   - **CentOS/RHEL**:
     ```bash
     sudo yum install MariaDB-s3-engine
     ```
   - Isso instala o plugin e dependências necessárias, como `libmarias3`.
3. **Configuração do S3**:
   - Um bucket S3 deve estar configurado no Amazon S3 ou em um serviço compatível (ex.: MinIO).
   - Credenciais (chave de acesso e chave secreta) e a região do S3 devem estar disponíveis.
4. **Configuração do MariaDB**: Edite o arquivo de configuração (ex.: `/etc/mysql/mariadb.conf.d/50-server.cnf`):
   ```ini
   [mysqld]
   plugin_load_add=ha_s3
   s3_access_key=SEU_ACCESS_KEY
   s3_secret_key=SEU_SECRET_KEY
   s3_bucket=SEU_BUCKET
   s3_region=us-east-1
   s3_block_size=4194304  # 4MB, padrão
   s3_pagecache_buffer_size=134217728  # 128MB, padrão
   ```
   - **Nota**: Por segurança, crie um par de chaves AWS específico para o plugin com permissões limitadas (ex.: apenas acesso ao bucket).
5. **Reiniciar o MariaDB**:
   ```bash
   sudo systemctl restart mariadb
   ```
6. **SELinux (se aplicável)**: Se o SELinux estiver em modo `enforcing`, permita a conexão de rede:
   ```bash
   sudo setsebool -P httpd_can_network_connect 1
   ```

## Exemplos de Uso

### 1. **Habilitando o Plugin S3**

Carregue o plugin `ha_s3` para ativar o motor de armazenamento S3.

**Exemplo: Carregar o plugin**:

```sql
INSTALL SONAME 'ha_s3';
```

- **Verificação**: Confirme que o plugin está ativo:
  ```sql
  SELECT plugin_name, plugin_status FROM information_schema.plugins WHERE plugin_name = 'S3';
  ```
  Saída esperada:
  ```text
  +-------------+---------------+
  | plugin_name | plugin_status |
  +-------------+---------------+
  | S3          | ACTIVE        |
  +-------------+---------------+
  ```

- **Nota**: Em versões anteriores ao MariaDB 10.5.7, o plugin é de maturidade **alpha**, então defina `plugin_maturity=alpha` no arquivo de configuração para carregá-lo:
  ```ini
  [mysqld]
  plugin_maturity=alpha
  ```

### 2. **Criando uma Tabela S3**

Crie uma tabela diretamente com o motor S3 ou converta uma tabela existente.

**Exemplo: Criar uma nova tabela S3**:

```sql
CREATE TABLE testdb.arquivo_historico (
    id INT PRIMARY KEY,
    nome VARCHAR(255),
    data_registro DATE
) ENGINE=S3 COMPRESSION_ALGORITHM=zlib;
```

- **Explicação**:
  - `ENGINE=S3`: Especifica o motor S3.
  - `COMPRESSION_ALGORITHM=zlib`: Usa compressão zlib para reduzir o tamanho dos dados transferidos do S3, melhorando a performance.
- **Verificação**:
  ```sql
  SHOW TABLES IN testdb;
  ```
  Saída:
  ```text
  +------------------+
  | Tables_in_testdb |
  +------------------+
  | arquivo_historico|
  +------------------+
  ```

### 3. **Convertendo uma Tabela InnoDB para S3**

Converta uma tabela existente (ex.: InnoDB) para o motor S3 para arquivamento.

**Exemplo: Converter tabela para S3**:

1. Crie uma tabela InnoDB com dados:
   ```sql
   CREATE TABLE testdb.vendas (
       id INT PRIMARY KEY,
       produto VARCHAR(100),
       valor DECIMAL(10,2),
       data_venda DATE
   ) ENGINE=InnoDB;

   INSERT INTO testdb.vendas (id, produto, valor, data_venda) VALUES
       (1, 'Notebook', 3500.00, '2023-01-15'),
       (2, 'Smartphone', 1200.00, '2023-02-20');
   ```

2. Converta a tabela para S3:
   ```sql
   ALTER TABLE testdb.vendas ENGINE=S3;
   ```

- **Explicação**: O comando `ALTER TABLE` move os dados da tabela para o bucket S3 configurado, tornando-a somente leitura. O arquivo `.ibd` local é removido, e os dados são armazenados no S3.
- **Verificação**: Confirme que a tabela está no S3:
  ```sql
  SELECT TABLE_NAME, ENGINE FROM information_schema.tables WHERE TABLE_SCHEMA='testdb';
  ```
  Saída:
  ```text
  | TABLE_NAME | ENGINE |
  |------------|--------|
  | vendas     | S3     |
  ```

### 4. **Consultando Dados no S3**

Tabelas S3 são acessíveis para consultas SELECT, mas não para operações de escrita (INSERT, UPDATE, DELETE).

**Exemplo: Consultar tabela S3**:

```sql
SELECT * FROM testdb.vendas WHERE data_venda >= '2023-01-01';
```

- **Explicação**: O MariaDB baixa os dados do S3 para a cache local (controlada por `s3_pagecache_buffer_size`) e executa a consulta. A primeira consulta pode ser mais lenta devido à latência de rede, mas consultas subsequentes são mais rápidas se os dados estiverem em cache.
- **Otimização**: Aumente o cache para melhorar a performance:
  ```sql
  SET GLOBAL s3_pagecache_buffer_size=268435456; -- 256MB
  ```

### 5. **Usando Descoberta Automática (Discovery)**

O motor S3 suporta **descoberta automática**, permitindo que tabelas armazenadas no S3 sejam reconhecidas automaticamente pelo MariaDB.

**Exemplo: Descobrir tabelas S3**:

1. Suponha que outra instância do MariaDB criou uma tabela S3 no mesmo bucket. Configure outro servidor MariaDB com acesso ao mesmo bucket S3.
2. Liste as tabelas disponíveis:
   ```sql
   SHOW TABLES IN testdb;
   ```
   - As tabelas no bucket S3 aparecerão automaticamente, mesmo sem um arquivo `.frm` local.
3. Execute uma consulta:
   ```sql
   SELECT * FROM testdb.vendas;
   ```
   - O arquivo `.frm` será copiado do S3 para o armazenamento local na primeira consulta, acelerando acessos futuros.

- **Nota**: Se a definição da tabela mudar no S3, execute `FLUSH TABLES` para atualizar o cache local:
  ```sql
  FLUSH TABLES testdb.vendas;
  ```

### 6. **Backup de Tabelas S3 com mariadb-dump**

O `mariadb-dump` pode exportar tabelas S3, mas requer a opção `--copy-s3-tables` para incluir dados.

**Exemplo: Exportar tabela S3**:

```bash
mariadb-dump --user=admin --password=senha --copy-s3-tables testdb vendas > vendas.sql
```

- **Explicação**: O comando gera um arquivo SQL com:
  - Um `CREATE TABLE` para uma tabela Aria equivalente.
  - Os dados da tabela.
  - Um `ALTER TABLE ... ENGINE=S3` para restaurar o motor S3.
- **Restauração**:
  ```bash
  mariadb < vendas.sql
  ```

### 7. **Testando Performance com Compressão**

O S3 suporta compressão para reduzir o tráfego de dados.

**Exemplo: Criar tabela com compressão**:

```sql
CREATE TABLE testdb.logs (
    id BIGINT PRIMARY KEY,
    evento VARCHAR(255),
    timestamp DATETIME
) ENGINE=S3 COMPRESSION_ALGORITHM=zlib S3_BLOCK_SIZE=2097152; -- 2MB
```

- **Explicação**:
  - `COMPRESSION_ALGORITHM=zlib`: Reduz o tamanho dos dados transferidos.
  - `S3_BLOCK_SIZE=2097152`: Define um tamanho de bloco menor (2MB) para otimizar consultas menores.
- **Verificação de Performance**:
  ```sql
  SELECT COUNT(*) FROM testdb.logs;
  ```
  - Execute a consulta duas vezes para comparar o desempenho com e sem cache. A segunda execução será mais rápida se os dados estiverem em cache.

## Notas Importantes

- **Somente Leitura**: O S3 é um motor de somente leitura. Para atualizar dados, converta a tabela para InnoDB ou Aria, modifique-a e reconverta para S3:
  ```sql
  ALTER TABLE testdb.vendas ENGINE=InnoDB;
  UPDATE testdb.vendas SET valor = valor + 100;
  ALTER TABLE testdb.vendas ENGINE=S3;
  ```
- **Performance**:
  - Aumente `s3_pagecache_buffer_size` para melhorar o desempenho de leitura.
  - Use `COMPRESSION_ALGORITHM=zlib` para reduzir a transferência de dados.
  - A latência de rede pode impactar consultas iniciais; otimize a conexão com o S3 (ex.: use a mesma região).
- **Replicação**: Replicação de tabelas S3 para réplicas que usam o mesmo bucket S3 não é suportada diretamente. A réplica pode parar com erros em `ALTER TABLE ... ENGINE=S3`. Use `s3_replicate_alter_as_create_select=1` para contornar isso.
- **Depuração**: Se houver erros (ex.: `ERROR 3 (HY000)`), verifique as credenciais S3, permissões do bucket, ou configurações do SELinux.
- **Documentação**: Consulte [Using the S3 Storage Engine](https://mariadb.com/kb/en/using-the-s3-storage-engine/) para mais detalhes.[](https://mariadb.com/kb/en/using-the-s3-storage-engine/)
