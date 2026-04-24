# Shared Lib

O pacote **MariaDB-shared** contém as bibliotecas compartilhadas (shared libraries) necessárias para o funcionamento de clientes e servidores do MariaDB, bem como para aplicações que se conectam ao banco de dados. Essas bibliotecas fornecem funções essenciais para comunicação com o servidor MariaDB, como conectores para linguagens de programação ou ferramentas cliente. Abaixo estão exemplos práticos de uso do `MariaDB-shared` em diferentes contextos:

## 1. **Uso em Aplicações Cliente**

As bibliotecas do `MariaDB-shared` são usadas por ferramentas como o cliente `mysql` ou aplicações que utilizam conectores MariaDB/MySQL (ex.: `libmysqlclient`).

**Exemplo: Conexão via linha de comando**
Quando você instala o pacote `MariaDB-shared` em um sistema Linux e executa o comando `mysql` para se conectar ao servidor MariaDB, as bibliotecas compartilhadas são usadas para gerenciar a comunicação com o banco.

```bash
mysql -u usuario -p -h localhost -e "SELECT 1;"
```

- **Como funciona**: O comando `mysql` depende das bibliotecas em `MariaDB-shared` para estabelecer a conexão, autenticar e executar consultas.
- **Pré-requisito**: O pacote `MariaDB-shared` deve estar instalado (ex.: `sudo apt install mariadb-shared` no Debian/Ubuntu).

## 2. **Uso em Aplicações com Conectores**

Aplicações em linguagens como C, Python, ou PHP usam as bibliotecas do `MariaDB-shared` para interagir com o banco de dados.

**Exemplo: Conexão via Python com `mysql-connector-python`**
```python
import mysql.connector

# Conectar ao MariaDB usando a biblioteca compartilhada
conexao = mysql.connector.connect(
    host="localhost",
    user="usuario",
    password="senha",
    database="teste"
)

cursor = conexao.cursor()
cursor.execute("SELECT * FROM exemplo_tabela")
for row in cursor.fetchall():
    print(row)
cursor.close()
conexao.close()
```

- **Como funciona**: O conector Python (`mysql-connector-python`) depende das bibliotecas em `MariaDB-shared` para comunicação com o servidor MariaDB.
- **Pré-requisito**: Instale o pacote `MariaDB-shared` e o conector Python (`pip install mysql-connector-python`).

## 3. **Uso em Desenvolvimento de Aplicações C**

Desenvolvedores que criam aplicações em C/C++ podem usar a biblioteca `libmysqlclient` (parte do `MariaDB-shared`) para interagir com o banco.

**Exemplo: Programa em C**:

```c
#include <mysql.h>
#include <stdio.h>

int main() {
    MYSQL *conn = mysql_init(NULL);
    if (conn == NULL) {
        printf("Erro ao inicializar: %s\n", mysql_error(conn));
        return 1;
    }

    if (mysql_real_connect(conn, "localhost", "usuario", "senha", "teste", 0, NULL, 0) == NULL) {
        printf("Erro ao conectar: %s\n", mysql_error(conn));
        mysql_close(conn);
        return 1;
    }

    if (mysql_query(conn, "SELECT * FROM exemplo_tabela")) {
        printf("Erro na consulta: %s\n", mysql_error(conn));
        mysql_close(conn);
        return 1;
    }

    MYSQL_RES *result = mysql_store_result(conn);
    MYSQL_ROW row;
    while ((row = mysql_fetch_row(result))) {
        printf("%s\n", row[0]);
    }

    mysql_free_result(result);
    mysql_close(conn);
    return 0;
}
```

- **Compilação**:
```bash
gcc -o exemplo exemplo.c -I/usr/include/mysql -L/usr/lib/mysql -lmysqlclient
```

- **Como funciona**: O programa usa `libmysqlclient` (fornecida pelo `MariaDB-shared`) para conectar e executar consultas no MariaDB.
- **Pré-requisito**: O pacote `MariaDB-shared` deve estar instalado, geralmente em `/usr/lib/mysql` ou similar.

## 4. **Uso em Ferramentas de Backup**

Ferramentas como `mariabackup` ou `mysqldump` dependem das bibliotecas compartilhadas para se comunicar com o servidor MariaDB.

**Exemplo: Backup com mysqldump**:

```bash
mysqldump -u usuario -p --databases teste > backup.sql
```

- **Como funciona**: O `mysqldump` usa as bibliotecas do `MariaDB-shared` para autenticar e extrair dados do servidor.
- **Pré-requisito**: O pacote `MariaDB-shared` deve estar instalado no sistema.

## 5. **Uso em Ambientes com Múltiplos Componentes**

Em servidores onde vários componentes do MariaDB (como servidor, cliente, ou plugins) estão instalados, o `MariaDB-shared` garante que as bibliotecas comuns estejam disponíveis, evitando conflitos de versão.

**Exemplo: Configuração de um servidor web com PHP**
Se você usa PHP com o módulo `php-mysql` para conectar ao MariaDB, o `MariaDB-shared` fornece as bibliotecas necessárias.

```php
<?php
$conn = new mysqli("localhost", "usuario", "senha", "teste");
if ($conn->connect_error) {
    die("Erro: " . $conn->connect_error);
}
$result = $conn->query("SELECT * FROM exemplo_tabela");
while ($row = $result->fetch_assoc()) {
    echo $row["coluna"] . "<br>";
}
$conn->close();
?>
```

- **Pré-requisito**: Instale `MariaDB-shared` e o módulo PHP (`sudo apt install php-mysql` no Debian/Ubuntu).

## Notas Importantes

- **Instalação**: Em sistemas baseados em Debian/Ubuntu, instale com `sudo apt install mariadb-shared`. Em sistemas Red Hat/CentOS, use `sudo yum install MariaDB-shared` ou `sudo dnf install MariaDB-shared`.
- **Dependências**: Muitas ferramentas e conectores (como ODBC, JDBC, ou aplicações personalizadas) exigem o `MariaDB-shared` para funcionar corretamente.
- **Verificação**: Para confirmar a presença das bibliotecas, verifique em `/usr/lib` ou `/usr/lib64` (ex.: `ls /usr/lib/mysql/libmysqlclient.so`).
- **Compatibilidade**: Certifique-se de que a versão do `MariaDB-shared` corresponde à versão do servidor MariaDB para evitar problemas de compatibilidade.
