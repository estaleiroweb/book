# hashicorp-key-management Lib

O plugin **MariaDB-hashicorp-key-management** permite que o MariaDB utilize o **HashiCorp Vault** como um Sistema de Gerenciamento de Chaves (KMS) para gerenciar chaves de criptografia, especialmente para **Criptografia Transparente de Dados (TDE)**. Ele é usado para armazenar e recuperar chaves de criptografia de forma segura, protegendo dados em repouso (como tabelas InnoDB e logs binários). Abaixo estão exemplos práticos de como usar o plugin `MariaDB-hashicorp-key-management`, focando na configuração e uso para TDE no MariaDB.

## Pré-requisitos

1. **HashiCorp Vault**: Um servidor Vault (versão open-source ou enterprise) deve estar instalado e em execução. Veja instruções em [Instalar Vault](https://www.vaultproject.io/docs/install).
2. **Versão do MariaDB**: O plugin é compatível com MariaDB 10.4 ou superior (edições Enterprise ou Community, com possível variação na Community).
3. **Instalação do Plugin**:
   - **Debian/Ubuntu**:
     ```bash
     sudo apt install mariadb-plugin-hashicorp-key-management
     ```
   - **CentOS/RHEL**:
     ```bash
     sudo yum install MariaDB-hashicorp-key-management
     ```
     Exemplo de saída para CentOS/RHEL:
     ```text
     Installing: MariaDB-hashicorp-key-management x86_64 10.5.9_6-1.el7_9 mariadb-es-main 31 k
     ```
4. **Dependências**: Certifique-se de que `libcurl` e um parser JSON (via serviço JSON do MariaDB) estão disponíveis, pois o plugin usa HTTPS para se comunicar com o Vault.
5. **Configuração do Vault**: O servidor Vault deve estar configurado com um motor de segredos key-value (versão 2 para suporte a versionamento de chaves) e um token válido para autenticação.
6. **Rede**: O servidor MariaDB deve conseguir se comunicar com o servidor Vault (ex.: porta 8200 aberta).

## Exemplos de Uso

### 1. **Configurando o HashiCorp Vault**

Antes de usar o plugin, configure um servidor Vault com um motor de segredos key-value para armazenar chaves de criptografia.

**Exemplo: Configurar Vault e criar uma chave**:

1. Inicie o servidor Vault em modo de desenvolvimento (apenas para testes, não para produção):
   ```bash
   vault server -dev
   ```
   - **Nota**: Em produção, use uma configuração segura com chaves de desbloqueio e evite o modo de desenvolvimento.

2. Defina a variável de ambiente para o endereço do Vault:
   ```bash
   export VAULT_ADDR='http://127.0.0.1:8200'
   ```

3. Habilite o motor de segredos key-value (versão 2):
   ```bash
   vault kv enable-versioning secret/
   ```

4. Crie uma chave de criptografia (ex.: 32 bytes para criptografia AES):
   ```bash
   vault kv put secret/mariadb_key data=$(openssl rand -base64 32)
   ```
   - **Explicação**: A chave é armazenada como um segredo chamado `mariadb_key` com um campo `data` contendo uma chave de 32 bytes codificada em base64, adequada para criptografia AES do InnoDB.

5. Obtenha o token do Vault (no modo de desenvolvimento, ele é exibido na inicialização; em produção, gere um token com políticas apropriadas).

### 2. **Habilitando o Plugin no MariaDB**

Carregue o plugin `hashicorp_key_management` e configure-o para se conectar ao servidor Vault.

**Exemplo: Configurar o plugin no MariaDB**:

1. Edite o arquivo de configuração do MariaDB (ex.: `/etc/mysql/mariadb.cnf`):
   ```ini
   [mariadb]
   plugin_load_add = hashicorp_key_management.so
   loose-hashicorp-key-management = ON
   loose-hashicorp-key-management-vault-url = "http://127.0.0.1:8200/v1/secret"
   loose-hashicorp-key-management-token = "seu-token-vault"
   loose-hashicorp-key-management-caching-enabled = ON
   loose-hashicorp-key-management-cache-timeout = 31556952000  # 1 ano em milissegundos
   loose-hashicorp-key-management-use-cache-on-timeout = ON
   innodb_encrypt_tables = ON
   innodb_encrypt_log = ON
   innodb_encrypt_temporary_tables = ON
   innodb_encryption_threads = 4
   innodb_encryption_rotate_key_age = 1
   ```
   - **Explicações**:
     - `plugin_load_add`: Carrega o plugin na inicialização.
     - `loose-hashicorp-key-management-vault-url`: Especifica o endpoint do motor de segredos key-value do Vault.
     - `loose-hashicorp-key-management-token`: Token do Vault para autenticação.
     - `caching-enabled` e `cache-timeout`: Habilita o cache de chaves para reduzir requisições ao Vault (1 ano para desempenho).
     - `innodb_encrypt_*`: Ativa TDE para tabelas InnoDB, logs e tabelas temporárias.

2. Reinicie o servidor MariaDB:
   ```bash
   sudo systemctl restart mariadb
   ```

3. Verifique se o plugin está ativo:
   ```sql
   SHOW PLUGINS;
   ```
   Saída esperada inclui:
   ```text
   | hashicorp_key_management | ACTIVE | ENCRYPTION | hashicorp_key_management.so | GPL |
   ```

### 3. **Habilitando TDE em uma Tabela**

Use o plugin para criptografar uma tabela InnoDB específica com uma chave armazenada no Vault.

**Exemplo: Criar uma tabela criptografada**:

```sql
CREATE TABLE testdb.employee (
    id INT PRIMARY KEY,
    name VARCHAR(100)
) ENGINE=InnoDB ENCRYPTION='Y';
```

- **Explicação**: A opção `ENCRYPTION='Y'` ativa a TDE para a tabela, usando a chave recuperada do Vault (ID de chave 1 por padrão para dados do sistema).
- **Verificação**: Confirme se a tabela está criptografada:
  ```sql
  SELECT TABLE_NAME, CREATE_OPTIONS FROM information_schema.tables WHERE TABLE_SCHEMA='testdb';
  ```
  Saída esperada:
  ```text
  | TABLE_NAME | CREATE_OPTIONS   |
  |------------|------------------|
  | employee   | ENCRYPTION="Y"   |
  ```

### 4. **Rotação de Chaves**

O plugin suporta rotação de chaves, criando novas versões de chaves no Vault para aumentar a segurança.

**Exemplo: Rotacionar uma chave no Vault**:

1. Crie uma nova versão da chave no Vault:
   ```bash
   vault kv put secret/mariadb_key data=$(openssl rand -base64 32)
   ```
   - Isso atualiza a chave com uma nova versão.

2. Acione a re-criptografia no MariaDB (o InnoDB re-criptografa páginas em segundo plano):
   ```sql
   ALTER TABLE testdb.employee ENCRYPTION='Y';
   ```
   - **Nota**: O InnoDB usa threads de criptografia em segundo plano para re-criptografar dados com a nova versão da chave, controladas por `innodb_encryption_threads`.

3. Verifique a versão da chave no Vault:
   ```bash
   vault kv get secret/mariadb_key
   ```

### 5. **Usando com Galera Cluster**

Em um cluster Galera, o plugin pode gerenciar chaves de criptografia em vários nós.

**Exemplo: Configurar TDE em um cluster Galera**:

1. Certifique-se de que todos os nós têm o plugin `MariaDB-hashicorp-key-management` instalado e configurado com as mesmas configurações do Vault no `mariadb.cnf`.
2. Ative a TDE para o cluster:
   ```ini
   [mariadb]
   plugin_load_add = hashicorp_key_management.so
   loose-hashicorp-key-management = ON
   loose-hashicorp-key-management-vault-url = "http://servidor-vault:8200/v1/secret"
   loose-hashicorp-key-management-token = "seu-token-vault"
   innodb_encrypt_tables = ON
   ```
3. Reinicie todos os nós:
   ```bash
   sudo systemctl restart mariadb
   ```
4. Crie ou altere tabelas com criptografia, como no Exemplo 3.
5. Verifique a criptografia nos nós:
   ```sql
   SELECT TABLE_NAME, CREATE_OPTIONS FROM information_schema.tables WHERE TABLE_SCHEMA='testdb';
   ```

- **Nota**: Se mudar de outro plugin de gerenciamento de chaves (ex.: File Key Management), descriptografe e re-criptografe os dados para evitar erros como `InnoDB: Failed to read page ... decrypt failed`.

### 6. **Integração com Securosys HSM**

O plugin pode ser integrado a um Módulo de Segurança de Hardware (HSM) via Vault para maior segurança.

**Exemplo: Configurar com Securosys HSM**:

1. Configure o Vault com o motor de segredos Securosys:
   ```bash
   vault write securosys-hsm/keys/rsa/mariadb_encryption_key keyLabel="MariaDBEncryptionKey" keySize=4096 attributes='{"decrypt": true}'
   ```
2. Atualize a configuração do MariaDB:
   ```ini
   [mariadb]
   plugin_load_add = hashicorp_key_management.so
   loose-hashicorp-key-management-vault-url = "https://servidor-vault:8200/v1/securosys-hsm/integrations/mariadb/mariadb_secret/?key_name=mariadb_encryption_key&cipher_algorithm=RSA"
   loose-hashicorp-key-management-token = "root"
   loose-hashicorp-key-management-check-kv-version = "off"
   loose-hashicorp-key-management-timeout = 3000
   loose-hashicorp-key-management-use-cache-on-timeout = "on"
   loose-hashicorp-key-management-caching-enabled = "on"
   loose-hashicorp-key-management-cache-timeout = 31556952000
   ```

3. Reinicie o MariaDB e verifique o plugin como no Exemplo 2.

## Notas Importantes

- **Segurança**: O plugin requer uma conexão HTTPS segura com o Vault. Use certificados (ex.: `vault_ca.crt`) em produção. Evite o modo de desenvolvimento para produção devido à insegurança.
- **Tamanho da Chave**: Para criptografia AES, a chave deve ter 32 bytes (ex.: `openssl rand -base64 32`) para evitar erros do InnoDB.
- **Cache**: Habilite o cache (`loose-hashicorp-key-management-caching-enabled`) para melhorar o desempenho, reduzindo requisições ao Vault. Defina um `cache-timeout` longo (ex.: 1 ano) para produção.
- **Solução de Problemas**: Se ocorrerem erros (ex.: `decrypt failed`), verifique se a chave no Vault corresponde ao algoritmo de criptografia (ex.: AES-CBC para HashiCorp vs. AES-CTR para File Key Management) e re-criptografe os dados se mudar de plugin.
- **Documentação**: Veja mais detalhes em [HashiCorp Vault e MariaDB](https://mariadb.com/kb/en/hashicorp-vault-and-mariadb/) e [Plugin HashiCorp Key Management](https://mariadb.com/kb/en/hashicorp-key-management-plugin/).
