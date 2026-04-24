# GSSAPI Lib

O pacote **MariaDB-gssapi-server** fornece um plugin de autenticação para o MariaDB que utiliza o **GSSAPI** (Generic Security Services Application Program Interface), permitindo autenticação segura em ambientes que usam sistemas como **Kerberos**. Ele é particularmente útil em redes corporativas onde a autenticação centralizada é necessária. O plugin suporta autenticação de usuários sem a necessidade de armazenar senhas diretamente no banco, delegando a verificação ao sistema de autenticação subjacente (como um servidor Kerberos).

Abaixo estão exemplos práticos de como usar o **MariaDB-gssapi-server** para configurar autenticação baseada em GSSAPI/Kerberos no MariaDB.

## Pré-requisitos

1. **Kerberos configurado**: Um servidor Kerberos (ex.: MIT Kerberos ou Active Directory) deve estar configurado, com um principal para o serviço MariaDB (ex.: `mysql/servidor@REALM`).
2. **Pacote instalado**: O pacote `MariaDB-gssapi-server` deve estar instalado (ex.: `sudo apt install mariadb-plugin-gssapi-server` no Debian/Ubuntu).
3. **Bibliotecas GSSAPI**: Bibliotecas como `libkrb5` ou equivalentes devem estar disponíveis no sistema.
4. **Configuração do servidor MariaDB**: O plugin deve ser carregado, e o servidor deve estar configurado para usar GSSAPI.

## 1. **Habilitando o Plugin GSSAPI no MariaDB**

Para usar o plugin, você precisa carregá-lo no servidor MariaDB.

**Exemplo: Carregar o plugin**:

```sql
INSTALL SONAME 'auth_gssapi';
```

- **Verificação**: Confirme que o plugin está carregado:
```sql
SELECT * FROM information_schema.plugins WHERE plugin_name = 'gssapi';
```

- **Como funciona**: O plugin `auth_gssapi` permite que o MariaDB use GSSAPI para autenticar usuários com credenciais Kerberos.

## 2. **Configurando um Usuário com Autenticação GSSAPI**

Crie um usuário no MariaDB que será autenticado via GSSAPI.

**Exemplo: Criar usuário com GSSAPI**:

```sql
CREATE USER 'usuario'@'localhost' IDENTIFIED VIA gssapi;
```

- **Explicação**:
  - `IDENTIFIED VIA gssapi`: Especifica que o usuário será autenticado usando o plugin GSSAPI.
  - `usuario`: Deve corresponder ao principal Kerberos do usuário (ex.: `usuario@REALM`).

- **Conexão**:
```bash
mysql -u usuario --host=localhost
```

- **Como funciona**: O cliente MariaDB usa as credenciais Kerberos do usuário (obtidas via `kinit`) para autenticar no servidor, sem necessidade de senha explícita.

## 3. **Configuração com Kerberos em um Ambiente Corporativo**

Em um ambiente com Kerberos (ex.: Active Directory), configure o servidor MariaDB para autenticar usuários via GSSAPI.

**Exemplo: Configuração do Kerberos**:

1. **Crie um principal Kerberos para o MariaDB**:
   No servidor Kerberos, adicione um principal para o serviço MariaDB:
   ```bash
   kadmin -q "addprinc -randkey mysql/servidor.dominio.com@REALM"
   ```

2. **Exporte o keytab**:
   Crie um arquivo keytab para o MariaDB:
   ```bash
   kadmin -q "ktadd -k /etc/mysql/mysql.keytab mysql/servidor.dominio.com@REALM"
   ```

3. **Configure o MariaDB**:
   Edite o arquivo de configuração do MariaDB (ex.: `/etc/mysql/mariadb.cnf`) para incluir o caminho do keytab:
   ```ini
   [mysqld]
   gssapi-keytab-path=/etc/mysql/mysql.keytab
   gssapi-principal-name=mysql/servidor.dominio.com@REALM
   ```

4. **Reinicie o MariaDB**:
   ```bash
   sudo systemctl restart mariadb
   ```

5. **Crie o usuário no MariaDB**:
   ```sql
   CREATE USER 'usuario@REALM'@'%' IDENTIFIED VIA gssapi;
   GRANT ALL PRIVILEGES ON banco.* TO 'usuario@REALM'@'%';
   ```

6. **Teste a conexão**:
   No cliente, obtenha um ticket Kerberos:
   ```bash
   kinit usuario@REALM
   ```
   Conecte-se ao MariaDB:
   ```bash
   mysql -u usuario@REALM -h servidor.dominio.com
   ```

- **Como funciona**: O cliente usa o ticket Kerberos para autenticar no servidor MariaDB via GSSAPI, sem necessidade de senha.

## 4. **Uso com Clientes Específicos**

O plugin GSSAPI também pode ser usado com ferramentas cliente que suportam GSSAPI, como o cliente `mysql` ou conectores em linguagens como Python.

**Exemplo: Conexão via Python com `mysql-connector-python`**:

```python
import mysql.connector

config = {
    'host': 'servidor.dominio.com',
    'user': 'usuario@REALM',
    'database': 'teste',
    'auth_plugin': 'gssapi'
}

conn = mysql.connector.connect(**config)
cursor = conn.cursor()
cursor.execute("SELECT 1")
print(cursor.fetchall())
cursor.close()
conn.close()
```

- **Pré-requisito**: O cliente deve ter um ticket Kerberos válido (`kinit usuario@REALM`) e o pacote `MariaDB-shared` instalado para fornecer as bibliotecas necessárias.
- **Como funciona**: O conector usa as bibliotecas GSSAPI para autenticar com o servidor MariaDB.

## 5. **Uso em Scripts de Automação**

Você pode integrar a autenticação GSSAPI em scripts para automação, como backups ou consultas programadas.

**Exemplo: Script de Backup com `mysqldump`**:

```bash
#!/bin/bash
kinit -k -t /etc/mysql/mysql.keytab mysql/servidor.dominio.com@REALM
mysqldump -u usuario@REALM -h servidor.dominio.com --databases teste > backup.sql
```

- **Como funciona**: O script usa `kinit` para obter um ticket Kerberos e, em seguida, executa o `mysqldump` com autenticação GSSAPI.
- **Pré-requisito**: O pacote `MariaDB-shared` e `MariaDB-gssapi-server` devem estar instalados.

## Notas Importantes

- **Instalação**: Instale o pacote com `sudo apt install mariadb-plugin-gssapi-server` (Debian/Ubuntu) ou `sudo dnf install MariaDB-gssapi-server` (Red Hat/CentOS).
- **Configuração do Kerberos**: Certifique-se de que o arquivo `/etc/krb5.conf` está configurado corretamente com o domínio e realm do Kerberos.
- **Segurança**: O GSSAPI é ideal para ambientes onde a autenticação centralizada é necessária, como em redes corporativas com Active Directory.
- **Compatibilidade**: Disponível desde o MariaDB 10.1. Verifique a versão do seu servidor com `SELECT VERSION();`.
- **Depuração**: Se a autenticação falhar, verifique os logs do MariaDB (`/var/log/mysql/error.log`) e do Kerberos para erros relacionados a tickets ou principals.
