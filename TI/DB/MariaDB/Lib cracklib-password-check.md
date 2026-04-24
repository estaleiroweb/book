# cracklib-password-check Lib

O **MariaDB-cracklib-password-check** é um plugin de validação de senhas para MariaDB que utiliza a biblioteca **CrackLib** para aplicar políticas de senhas fortes, verificando a força de novas senhas. Ele garante que as senhas não sejam fracas, fáceis de adivinhar ou baseadas em padrões comuns, como palavras de dicionário, nomes de usuário ou variações simples. Abaixo, você encontrará exemplos práticos de como usar este plugin, com base em sua funcionalidade e configuração.

## Pré-requisitos

1. **Instalação**: O plugin está disponível em pacotes MariaDB a partir da versão 10.1.2, mas requer a biblioteca CrackLib (versão 2.9.0 ou superior). Instale o pacote:
   - **Debian/Ubuntu**:
     ```bash
     sudo apt-get install mariadb-plugin-cracklib-password-check
     ```
   - **RHEL/CentOS/Fedora**:
     ```bash
     sudo dnf install MariaDB-cracklib-password-check
     ```
   - **SLES/OpenSUSE**:
     ```bash
     sudo zypper install MariaDB-cracklib-password-check
     ```
   - Verifique se a biblioteca CrackLib está instalada (ex.: `libcrack2` no Debian/Ubuntu).

2. **Configuração do SELinux** (se aplicável): Em sistemas com SELinux em modo `enforcing`, o MariaDB pode não ter acesso ao dicionário padrão (`/usr/share/cracklib/pw_dict`). Crie uma política SELinux para permitir o acesso:
   ```bash
   sudo semanage fcontext -a -t mysqld_t "/usr/share/cracklib(/.*)?"
   sudo restorecon -R -v /usr/share/cracklib
   ```

3. **Dicionário CrackLib**: O plugin usa um dicionário padrão (ex.: `/usr/share/cracklib/pw_dict`). Você pode personalizá-lo editando o arquivo ou configurando um dicionário alternativo via a variável `cracklib_password_check_dictionary`.

## Exemplos de Uso

### 1. **Habilitando o Plugin**

O plugin não é ativado por padrão. Você pode carregá-lo dinamicamente ou configurá-lo para carregar ao iniciar o servidor.

**Exemplo: Carregar dinamicamente**:

```sql
INSTALL SONAME 'cracklib_password_check';
```

- **Verificação**: Confirme que o plugin está ativo:
```sql
SELECT * FROM information_schema.plugins WHERE plugin_name = 'cracklib_password_check';
```

**Exemplo: Configurar para carregar na inicialização**:

Edite o arquivo de configuração do MariaDB (ex.: `/etc/mysql/mariadb.cnf`):
```ini
[mariadb]
plugin_load_add = cracklib_password_check
```

Reinicie o servidor:
```bash
sudo systemctl restart mariadb
```

### 2. **Criando um Usuário com Validação de Senha**

O plugin valida senhas ao criar ou alterar usuários, rejeitando senhas fracas.

**Exemplo: Criar usuário com senha fraca**:

```sql
CREATE USER 'teste'@'localhost' IDENTIFIED BY 'password';
```

- **Resultado**: Se a senha for fraca (ex.: baseada em palavras comuns), você verá um erro:
  ```text
  ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
  ```
- **Detalhes do erro**: Verifique a mensagem específica:
  ```sql
  SHOW WARNINGS;
  ```
  Exemplo de saída:
  ```text
  +---------+------+----------------------------------------------------------------+
  | Level   | Code | Message                                                        |
  +---------+------+----------------------------------------------------------------+
  | Warning | 1819 | cracklib: it is based on a dictionary word                     |
  | Error   | 1819 | Your password does not satisfy the current policy requirements |
  +---------+------+----------------------------------------------------------------+
  ```

**Exemplo: Criar usuário com senha forte**:

```sql
CREATE USER 'teste'@'localhost' IDENTIFIED BY 'S3nh@F0rt3!2025';
```
- **Resultado**: A senha será aceita se atender aos critérios do CrackLib (não baseada em dicionário, username, ou padrões simples).

### 3. **Alterando uma Senha com Validação**

O plugin também valida senhas ao usar o comando `SET PASSWORD`.

**Exemplo: Alterar senha para uma fraca**:

```sql
SET PASSWORD FOR 'teste'@'localhost' = 'abc123';
```
- **Resultado**:
  ```text
  ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
  ```
- **Verificação**:
  ```sql
  SHOW WARNINGS;
  ```
  Saída:
  ```text
  +---------+------+----------------------------------------------------------------+
  | Level   | Code | Message                                                        |
  +---------+------+----------------------------------------------------------------+
  | Warning | 1819 | cracklib: it is too short                                      |
  | Error   | 1819 | Your password does not satisfy the current policy requirements |
  +---------+------+----------------------------------------------------------------+
  ```

**Exemplo: Alterar para uma senha forte**:

```sql
SET PASSWORD FOR 'teste'@'localhost' = 'C0mpl3x@S3nh@!2025';
```
- **Resultado**: A senha será aceita.

### 4. **Ignorando Validação com Hashes**

Se `strict_password_validation` estiver desativado (padrão é `ON`), você pode definir senhas como hashes, contornando a validação.

**Exemplo: Definir senha como hash**:

```sql
SET GLOBAL strict_password_validation = OFF;
CREATE USER 'teste'@'localhost' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';
```
- **Como funciona**: A senha é definida diretamente como um hash, sem validação pelo CrackLib.

**Nota**: Reative a validação após o procedimento::

```sql
SET GLOBAL strict_password_validation = ON;
```

### 5. **Personalizando o Dicionário CrackLib**

Você pode usar um dicionário personalizado para validação de senhas.

**Exemplo: Configurar dicionário alternativo**:

Edite o arquivo de configuração (`/etc/mysql/mariadb.cnf`):
```ini
[mariadb]
cracklib_password_check_dictionary=/path/to/custom/dictionary
```

Crie um dicionário personalizado:
```bash
echo "proibida" > /path/to/custom/dictionary
sudo create_cracklib_dict /path/to/custom/dictionary
```

Reinicie o MariaDB:
```bash
sudo systemctl restart mariadb
```

**Teste**::

```sql
CREATE USER 'teste'@'localhost' IDENTIFIED BY 'proibida';
```
- **Resultado**:
  ```text
  ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
  ```
- **Verificação**:
  ```sql
  SHOW WARNINGS;
  ```
  Saída:
  ```text
  +---------+------+----------------------------------------------------------------+
  | Level   | Code | Message                                                        |
  +---------+------+----------------------------------------------------------------+
  | Warning | 1819 | cracklib: it is based on a dictionary word                     |
  | Error   | 1819 | Your password does not satisfy the current policy requirements |
  +---------+------+----------------------------------------------------------------+
  ```

### 6. **Desativando o Plugin**

Se necessário, você pode desativar o plugin dinamicamente.

**Exemplo: Desinstalar o plugin**:

```sql
UNINSTALL SONAME 'cracklib_password_check';
```

- **Alternativa**: Para evitar o carregamento na inicialização, remova a linha `plugin_load_add = cracklib_password_check` do arquivo de configuração e reinicie o MariaDB.

## Notas Importantes

- **Compatibilidade**: Antes do MariaDB 10.4, o plugin `cracklib_password_check` é incompatível com o plugin de autenticação PAM.[](https://docs.w3cub.com/mariadb/cracklib_password_check/)
- **Requisitos de Sistema**: O plugin requer CrackLib 2.9.0 ou superior, não disponível em versões antigas como Debian 7 ou CentOS 6.[](https://mariadb.com/docs/server/reference/plugins/password-validation-plugins/cracklib-password-check-plugin)
- **Erros Comuns**: Se você encontrar erros como `cracklib: error loading dictionary` em sistemas com SELinux, ajuste as permissões conforme descrito nos pré-requisitos.[](https://mariadb.com/kb/en/cracklib-password-check-plugin/%2Bsimple/dash/)
- **Dicionário Padrão**: O dicionário padrão é geralmente `/usr/share/cracklib/pw_dict`. Você pode adicionar palavras ao dicionário para reforçar a validação.[](https://vettabase.com/enforcing-strong-passwords-for-mariadb-users/)
- **Documentação**: Consulte a documentação oficial para mais detalhes: [Cracklib Password Check Plugin](https://mariadb.com/kb/en/cracklib-password-check-plugin/).[](https://mariadb.com/docs/server/reference/plugins/password-validation-plugins/cracklib-password-check-plugin)
