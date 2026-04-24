# Test Lib

O pacote **MariaDB-test** contém ferramentas e dados de teste para validar a funcionalidade do MariaDB, incluindo scripts, casos de teste e suítes para verificar a instalação, configuração e operação do servidor de banco de dados. Ele é projetado para desenvolvedores, administradores de banco de dados e equipes de controle de qualidade (QA) que desejam testar o comportamento do MariaDB em diferentes cenários. Abaixo estão exemplos práticos de como usar o `MariaDB-test` em português, com foco em sua aplicação para testes e validação.

## Pré-requisitos

1. **Instalação do Pacote**:
   - **Debian/Ubuntu**:
     ```bash
     sudo apt install mariadb-test
     ```
   - **CentOS/RHEL**:
     ```bash
     sudo yum install MariaDB-test
     ```
   - Isso instala o pacote `MariaDB-test`, que inclui a suíte de testes MySQL (Mysqltest) e os arquivos de teste localizados em `/usr/share/mysql/mysql-test` ou similar.
2. **Permissões**: O usuário executando os testes deve ter permissões para acessar o diretório de testes e iniciar instâncias do MariaDB.
3. **MariaDB Instalado**: Um servidor MariaDB funcional deve estar instalado e configurado, com as credenciais necessárias (ex.: usuário `root`).
4. **Dependências**: Certifique-se de que o Perl está instalado, pois muitos scripts de teste dependem dele (`sudo apt install perl` ou `sudo yum install perl`).

## Exemplos de Uso

### 1. **Executando a Suíte de Testes Completa**

O `MariaDB-test` inclui a suíte de testes Mysqltest, que executa uma série de casos de teste para validar funcionalidades do MariaDB.

**Exemplo: Rodar todos os testes**:

1. Navegue até o diretório de testes:
   ```bash
   cd /usr/share/mysql/mysql-test
   ```
2. Execute a suíte de testes completa:
   ```bash
   ./mtr --suite=main
   ```
   - **Explicação**:
     - `mtr` (Mysqltest Runner) é o script principal para executar testes.
     - `--suite=main` executa a suíte principal de testes, que cobre funcionalidades básicas do MariaDB.
   - **Saída**: Você verá logs detalhando cada teste, com resultados como `pass`, `fail`, ou `skipped`. Exemplo:
     ```text
     main.create_table_like               [ pass ]      12
     main.create_table_like2              [ pass ]      15
     main.cte                             [ pass ]      22
     ...
     Completed: All 1234 tests were successful.
     ```

- **Nota**: Para executar como usuário não-root, use a opção `--mem` para evitar conflitos de permissões:
  ```bash
  ./mtr --mem --suite=main
  ```

### 2. **Executando um Teste Específico**

Você pode executar um teste individual para validar uma funcionalidade específica.

**Exemplo: Testar a funcionalidade de índices**:

1. Liste os testes disponíveis no diretório `t/`:
   ```bash
   ls /usr/share/mysql/mysql-test/t/
   ```
   Exemplo de saída:
   ```text
   index.test  select.test  create.test  ...
   ```
2. Execute um teste específico (ex.: `index.test`):
   ```bash
   ./mtr --suite=main index
   ```
   - **Explicação**: Isso executa apenas o teste `index.test`, que valida operações relacionadas a índices, como criação e uso em consultas.
   - **Saída**: Resultados detalhados do teste, como:
     ```text
     main.index                           [ pass ]      10
     Completed: All 1 tests were successful.
     ```

### 3. **Testando uma Configuração Específica**

Use o `MariaDB-test` para testar configurações personalizadas do MariaDB, como parâmetros do servidor.

**Exemplo: Testar o motor InnoDB**:

1. Crie um arquivo de configuração personalizado (ex.: `my-test.cnf`):
   ```ini
   [mysqld]
   default_storage_engine=InnoDB
   innodb_buffer_pool_size=256M
   ```
2. Execute a suíte de testes com a configuração:
   ```bash
   ./mtr --mysqld=--defaults-file=/path/to/my-test.cnf --suite=innodb
   ```
   - **Explicação**: A opção `--mysqld=--defaults-file` aplica a configuração personalizada, e `--suite=innodb` executa testes específicos do motor InnoDB.
   - **Saída**: Resultados dos testes relacionados ao InnoDB, como:
     ```text
     innodb.create_table                   [ pass ]      18
     innodb.index                         [ pass ]      25
     ...
     Completed: All 245 tests were successful.
     ```

### 4. **Criando um Teste Personalizado**

Você pode criar seus próprios casos de teste usando a linguagem do Mysqltest.

**Exemplo: Criar um teste personalizado**:

1. Crie um arquivo de teste (ex.: `t/meu_teste.test`):
   ```sql
   --echo Iniciando teste personalizado
   CREATE TABLE testdb.tabela_teste (id INT PRIMARY KEY, nome VARCHAR(50));
   INSERT INTO testdb.tabela_teste VALUES (1, 'Teste 1'), (2, 'Teste 2');
   SELECT * FROM testdb.tabela_teste;
   DROP TABLE testdb.tabela_teste;
   --echo Teste concluído
   ```
2. Execute o teste:
   ```bash
   cd /usr/share/mysql/mysql-test
   ./mtr --suite=main meu_teste
   ```
   - **Explicação**: O arquivo `.test` contém comandos SQL e diretivas do Mysqltest (como `--echo`). O teste cria uma tabela, insere dados, consulta e a remove.
   - **Saída**:
     ```text
     Iniciando teste personalizado
     id    nome
     1     Teste 1
     2     Teste 2
     Teste concluído
     main.meu_teste                       [ pass ]      8
     ```

### 5. **Testando Replicação**

Use a suíte de testes para validar a configuração de replicação.

**Exemplo: Testar replicação mestre-réplica**:

1. Configure dois servidores MariaDB (mestre e réplica) em sua máquina ou em máquinas separadas, com `server-id` diferentes:
   - Mestre (`/etc/my.cnf`):
     ```ini
     [mysqld]
     server-id=1
     log-bin=mariadb-bin
     ```
   - Réplica:
     ```ini
     [mysqld]
     server-id=2
     ```
2. Execute a suíte de testes de replicação:
   ```bash
   cd /usr/share/mysql/mysql-test
   ./mtr --suite=rpl
   ```
   - **Explicação**: A suíte `rpl` testa cenários de replicação, como consistência de dados entre mestre e réplica.
   - **Saída**:
     ```text
     rpl.rpl_binlog_format                [ pass ]      30
     rpl.rpl_master_pos_wait              [ pass ]      15
     ...
     Completed: All 150 tests were successful.
     ```

- **Nota**: Use a opção `--mysqld=--server-id=1` para testes locais com múltiplas instâncias:
  ```bash
  ./mtr --suite=rpl --mysqld=--server-id=1
  ```

### 6. **Gerando Relatórios de Testes**

Gere relatórios detalhados para análise de falhas ou validação.

**Exemplo: Gerar relatório em formato HTML**:

1. Execute os testes com a opção `--report`:
   ```bash
   ./mtr --suite=main --report-features > test_report.html
   ```
   - **Explicação**: Isso gera um relatório HTML com detalhes sobre os testes executados, útil para auditorias ou depuração.
2. Abra o arquivo `test_report.html` em um navegador para visualizar os resultados.

## Notas Importantes

- **Localização dos Testes**: Os arquivos de teste estão em `/usr/share/mysql/mysql-test`, com subdiretórios como `t/` (testes) e `r/` (resultados esperados).
- **Uso de Memória**: A opção `--mem` cria um ambiente de teste em memória, útil para evitar conflitos de permissões em sistemas compartilhados.
- **Depuração de Falhas**: Se um teste falhar, verifique os logs em `mysql-test/var/log/`. Por exemplo:
  ```bash
  cat mysql-test/var/log/main.index/warnings.log
  ```
- **Personalização**: Adicione novos testes ao diretório `t/` ou modifique suítes existentes para testar funcionalidades específicas.
- **Documentação**: Consulte [MariaDB Testing](https://mariadb.com/kb/en/mysqltest/) para mais detalhes sobre o Mysqltest e suas diretivas.
