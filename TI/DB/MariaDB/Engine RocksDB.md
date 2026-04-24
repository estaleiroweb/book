# Engine RocksDB

## Pré-requisitos

1. **Versão do MariaDB**: O suporte ao RocksDB está disponível a partir do MariaDB 10.2.5 (estável desde 10.2.16).[](https://en.wikipedia.org/wiki/RocksDB)
2. **Instalação do Plugin**:
   - **Debian/Ubuntu**:
     ```bash
     sudo apt install mariadb-plugin-rocksdb
     ```
   - **CentOS/RHEL**:
     ```bash
     sudo yum install MariaDB-rocksdb-engine
     ```
     Exemplo de saída:
     ```text
     Installing: MariaDB-rocksdb-engine x86_64 10.3.15-1.el7.centos mariadb 4.4 M
     Installing for dependencies: libzstd x86_64 1.3.4-1.el7 mariadb 211 k
     snappy x86_64 1.1.0-3.el7 base 40 k
     ```
   - Isso instala o plugin e dependências como `libzstd` e `snappy`.[](https://severalnines.com/blog/using-myrocks-storage-engine-mariadb-server/)
3. **Habilitar o Plugin**: Adicione ao arquivo de configuração do MariaDB (ex.: `/etc/my.cnf` ou `/etc/mysql/mariadb.conf.d/50-server.cnf`):
   ```ini
   [mysqld]
   plugin_load_add=ha_rocksdb
   default-storage-engine=rocksdb
   ```
4. **Reiniciar o MariaDB**:
   ```bash
   sudo systemctl restart mariadb
   ```
5. **Verificar Suporte**:
   ```sql
   SHOW ENGINES;
   ```
   Procure por `RocksDB` na saída, com `Support` definido como `YES` ou `DEFAULT`.[](https://minervadb.xyz/step-by-step-guide-to-installing-and-configuring-rocksdb-with-mariadb-for-enhanced-performance/)

## Exemplos de Uso

### 1. **Criando uma Tabela com RocksDB**

Crie uma tabela que usa o motor RocksDB para armazenar dados.

**Exemplo: Criar uma tabela RocksDB**:

```sql
CREATE TABLE testdb.clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255)
) ENGINE=RocksDB;
```

- **Explicação**: A opção `ENGINE=RocksDB` especifica que a tabela usará o motor RocksDB. O RocksDB é ideal para dados chave-valor com alta eficiência de escrita e compactação.[](https://minervadb.xyz/step-by-step-guide-to-installing-and-configuring-rocksdb-with-mariadb-for-enhanced-performance/)
- **Verificação**:
  ```sql
  SELECT TABLE_NAME, ENGINE FROM information_schema.tables WHERE TABLE_SCHEMA='testdb';
  ```
  Saída esperada:
  ```text
  | TABLE_NAME | ENGINE   |
  |------------|----------|
  | clientes   | ROCKSDB  |
  ```

### 2. **Inserindo e Consultando Dados**

Use a tabela RocksDB como qualquer outra tabela MariaDB, aproveitando sua eficiência para escritas pesadas.

**Exemplo: Inserir e consultar dados**:

```sql
-- Inserir dados
INSERT INTO testdb.clientes (nome, email) VALUES
    ('João Silva', 'joao@exemplo.com'),
    ('Maria Souza', 'maria@exemplo.com');

-- Consultar dados
SELECT * FROM testdb.clientes;
```

- **Explicação**: O RocksDB armazena dados diretamente no nível mais baixo da árvore LSM, evitando sobrecarga de compactação para cargas rápidas. Isso é útil para aplicações com muitas inserções, como logs de eventos.[](http://myrocks.io/)

### 3. **Otimizando Configurações do RocksDB**

O RocksDB permite ajustar configurações para otimizar desempenho, especialmente para cargas de trabalho específicas.

**Exemplo: Configurar parâmetros no MariaDB**:

Edite o arquivo de configuração (`/etc/my.cnf` ou similar):
```ini
[mysqld]
rocksdb_max_open_files=-1  # Permite número ilimitado de arquivos abertos
rocksdb_base_background_compactions=1  # Define compactações de fundo
rocksdb_max_background_compactions=1  # Limita compactações simultâneas
rocksdb_max_total_wal_size=4G  # Tamanho máximo do WAL (log de escrita)
rocksdb_block_cache_size=512M  # Tamanho do cache de blocos
```

- **Explicação**:
  - `rocksdb_max_open_files=-1`: Evita limites de arquivos abertos, útil para grandes bases de dados.
  - `rocksdb_max_total_wal_size=4G`: Controla o tamanho do Write-Ahead Log (WAL) para balancear desempenho e recuperação.
  - **Reiniciar o MariaDB** após alterações:
    ```bash
    sudo systemctl restart mariadb
    ```
- **Verificação**: Veja estatísticas do cache de blocos:
  ```sql
  SHOW ENGINE ROCKSDB STATUS;
  ```
  Ou verifique o uso do cache:
  ```sql
  SELECT * FROM information_schema.ROCKSDB_DBSTATS WHERE STAT_TYPE='DB_BLOCK_CACHE_USAGE';
  ```

### 4. **Carga em Lote (Bulk Load)**

O RocksDB é otimizado para cargas de dados em massa, com menos sobrecarga de compactação.

**Exemplo: Carregar dados em massa**:

1. Habilite o modo de carga em massa:
   ```sql
   SET SESSION rocksdb_bulk_load=1;
   ```
2. Insira grandes quantidades de dados:
   ```sql
   INSERT INTO testdb.clientes (nome, email)
   SELECT CONCAT('Cliente', n), CONCAT('cliente', n, '@exemplo.com')
   FROM (SELECT a.N + b.N * 10 + c.N * 100 + 1 AS n
         FROM (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
               UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
              (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
               UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
              (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
               UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c) numbers
   LIMIT 1000;
   ```
3. Desative o modo de carga em massa:
   ```sql
   SET SESSION rocksdb_bulk_load=0;
   ```

- **Explicação**: O modo `rocksdb_bulk_load=1` desativa verificações de unicidade e habilita `rocksdb_commit_in_the_middle`, reduzindo sobrecarga para inserções em massa. Isso é ideal para carregar logs ou dados de IoT.[](https://runebook.dev/es/docs/mariadb/myrocks-system-variables/index)

### 5. **Replicação com MyRocks**

O MyRocks suporta replicação otimizada, eliminando leituras aleatórias para chaves primárias em replicação baseada em linhas.

**Exemplo: Configurar replicação**:

1. No servidor principal, configure o log binário:
   ```ini
   [mysqld]
   log-bin=mariadb-bin
   server-id=1
   rocksdb_two_phase_commit=1  # Habilita commit em duas fases para consistência
   ```
2. No servidor réplica, configure:
   ```ini
   [mysqld]
   server-id=2
   read_only=1
   rocksdb_read_free_rpl=1  # Habilita replicação sem leitura para chaves primárias
   ```
3. Sincronize os servidores e inicie a replicação:
   ```sql
   CHANGE MASTER TO MASTER_HOST='principal', MASTER_USER='replica_user', MASTER_PASSWORD='senha', MASTER_LOG_FILE='mariadb-bin.000001', MASTER_LOG_POS=4;
   START SLAVE;
   ```

- **Explicação**: O `rocksdb_read_free_rpl=1` elimina leituras aleatórias durante a replicação, melhorando o desempenho em réplicas. Isso é útil para aplicações de alta carga, como comércio eletrônico.[](http://myrocks.io/)

### 6. **Monitoramento de Desempenho**

Monitore o desempenho do RocksDB para otimizar configurações.

**Exemplo: Verificar métricas do RocksDB**:

```sql
SELECT * FROM information_schema.ROCKSDB_DBSTATS WHERE STAT_TYPE LIKE 'rocksdb%';
```

- **Explicação**: Isso mostra métricas como `rocksdbBytesCopied`, `rocksdbGetLatency`, e `rocksdbTotalCompactionLatencyMs`, úteis para depurar lentidão.[](https://docs.databricks.com/gcp/pt/structured-streaming/rocksdb-state-store)
- **Ferramentas**: Use `mytop` ou `mariadb-top` para monitoramento em tempo real.[](https://minervadb.xyz/step-by-step-guide-to-installing-and-configuring-rocksdb-with-mariadb-for-enhanced-performance/)

## Notas Importantes

- **Casos de Uso**: O RocksDB é ideal para cargas de trabalho com escrita intensiva, como logs de eventos, dados de sensores IoT, ou aplicações de comércio eletrônico com grandes volumes de transações.[](https://guialinux.com.br/conhecendo-o-sistema-de-gerenciamento-de-banco-de-dados-mariadb/)
- **Limitações**:
  - Não suporta chaves estrangeiras ou índices de texto completo, ao contrário do InnoDB.[](https://categoriaoutros.com.br/?p=7814)
  - Melhor para SSDs devido à sua otimização para I/O rápido.[](https://www.mankier.com/package/mariadb-rocksdb-engine)
- **Compactação**: O RocksDB oferece 2x melhor compactação que o InnoDB comprimido, reduzindo o uso de espaço em disco.[](http://myrocks.io/)
- **Documentação**: Consulte [MariaDB MyRocks](https://mariadb.com/kb/en/myrocks/) para detalhes adicionais.
- **Aviso**: O cPanel não oferece suporte oficial ao MyRocks, então testes cuidadosos são recomendados em ambientes críticos.[](https://support.cpanel.net/hc/en-us/articles/4403265852695-How-to-set-up-the-RocksDB-storage-engine-with-MySQL-and-MariaDB)
