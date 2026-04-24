# CREATE FUNCTION

https://mariadb.com/kb/en/create-function/

!!! info Syntax

        CREATE [OR REPLACE]
            [DEFINER = {user | CURRENT_USER | role | CURRENT_ROLE }]
            [AGGREGATE] FUNCTION [IF NOT EXISTS] func_name ([func_parameter[,...]])
            RETURNS type
            [characteristic ...]
            RETURN func_body


        func_parameter:
            [ IN | OUT | INOUT | IN OUT ]  param_name type


        type:
            Any valid MariaDB data type


        characteristic:
            LANGUAGE SQL
        | [NOT] DETERMINISTIC
        | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
        | SQL SECURITY { DEFINER | INVOKER }
        | COMMENT 'string'


        func_body:
            Valid SQL procedure statement

## IN | OUT | INOUT | IN OUT

!!! warning MariaDB starting with [10.8.0](https://mariadb.com/kb/en/mariadb-1080-release-notes/)

    Os qualificadores de parâmetro de função para `IN`, `OUT`, `INOUT`, e `IN OUT` foram adicionados em uma versão prévia 10.8.0. 
    Antes da versão 10.8.0, os quantificadores eram suportados apenas em procedimentos.INOUTINOUTIN OUT

`OUT`, `INOUT` e seu equivalente `IN OUT`, só são válidos se chamados de `SET` e não  `SELECT`. Esses quantificadores são especialmente úteis para criar funções com mais de um valor retornado. Isso permite que as funções sejam mais complexas e aninhadas.

```sql
DELIMITER $$
CREATE FUNCTION add_func3(IN a INT, IN b INT, OUT c INT) RETURNS INT
BEGIN
  SET c = 100;
  RETURN a + b;
END;
$$
DELIMITER ;

SET @a = 2;
SET @b = 3;
SET @c = 0;
SET @res= add_func3(@a, @b, @c);

SELECT add_func3(@a, @b, @c);
ERROR 4186 (HY000): OUT or INOUT argument 3 for function add_func3 is not allowed here

DELIMITER $$
CREATE FUNCTION add_func4(IN a INT, IN b INT, d INT) RETURNS INT
BEGIN
  DECLARE c, res INT;
  SET res = add_func3(a, b, c) + d;
  if (c > 99) then
    return  3;
  else
    return res;
  end if;
END;
$$

DELIMITER ;

SELECT add_func4(1,2,3);
```

```text
+------------------+
| add_func4(1,2,3) |
+------------------+
|                3 |
+------------------+
```

### AGGREGATE

Também é possível criar funções agregadas armazenadas. Consulte [Funções de agregação armazenadas](https://mariadb.com/kb/en/stored-aggregate-functions/) para obter detalhes.

### RETURNS

A cláusula `RETURNS` especifica o tipo de retorno da função. `NULL` são permitidos com todos os tipos de retorno.

O que acontece se a cláusula `RETURN` retornar um valor de um tipo diferente? Depende do [SQL_MODE](https://mariadb.com/kb/en/sql-mode/) em vigor no momento da criação da função.

Se o SQL_MODE for estrito (sinalizadores STRICT_ALL_TABLES ou STRICT_TRANS_TABLES forem especificados), um erro 1366 será produzido.

Caso contrário, o valor será forçado para o tipo adequado. Por exemplo, se uma função especifica um valor `ENUM` ou `SET` na cláusula `RETURNS`, mas a cláusula `RETURN` retorna um inteiro, o valor retornado da função é a cadeia de caracteres para o membro correspondente do conjunto `ENUM` de membros `SET`.

O MariaDB armazena a configuração da variável de sistema SQL_MODE que está em vigor no nível de hora em que uma rotina é criada e sempre executa a rotina com essa configuração em force, independentemente do modo SQL do servidor em vigor quando a rotina é chamada.

### LANGUAGE SQL

If you declare a non-deterministic function as `DETERMINISTIC`, you may get incorrect results. If you declare a deterministic function as `NOT DETERMINISTIC`, in some cases the queries will be slower.

`LANGUAGE SQL` é uma cláusula SQL padrão e pode ser usada no MariaDB para portabilidade. No entanto, essa cláusula não tem significado, porque SQL é a única linguagem suportada para funções armazenadas.

Uma função é determinística se puder produzir apenas um resultado para uma determinada lista de parâmetros. Se o resultado puder ser afetado por dados armazenados, variáveis de servidor, números aleatórios ou qualquer valor que não seja passado explicitamente, a função não será determinística. Além disso, uma função é não determinística se usar funções não determinísticas como [NOW()](https://mariadb.com/kb/en/now/) ou [CURRENT_TIMESTAMP().](https://mariadb.com/kb/en/current_user/) O otimizador pode escolher um plano de execução mais rápido se souber que a função é determinística. Nesses casos, você deve declarar a rotina usando a palavra-chave `DETERMINISTIC`. Se você quiser declarar explicitamente que a função não é determinística (que é o padrão), você pode usar as palavras-chave `NOT DETERMINISTIC`.

Se você declarar uma função não determinística como `DETERMINISTIC`, poderá obter resultados incorretos. Se você declarar uma função determinística como `NOT DETERMINISTIC`, em alguns casos, as consultas serão mais lentas.

### OR REPLACE

Se a cláusula opcional `OR REPLACE` for usada, ela atuará como um atalho para:

```sql
DROP FUNCTION IF EXISTS function_name;
CREATE FUNCTION function_name ...;
```

com a exceção de que quaisquer [privilégios](https://mariadb.com/kb/en/stored-routine-privileges/) existentes para a função não são descartados.

### IF NOT EXISTS

Se a cláusula `IF NOT EXISTS` for usada, o MariaDB retornará um aviso em vez de um erro se a função já existir. Não pode ser usado em conjunto com `OR REPLACE`.

### \[NOT\] DETERMINISTIC

A cláusula `[NOT] DETERMINISTIC` também afeta o [log binário](https://mariadb.com/kb/en/binary-log/), pois o formato `STATEMENT` não pode ser usado para armazenar ou replicar instruções não determinísticas.

 are informative clauses that tell the server what the function does. MariaDB does not check in any way whether the specified clause is correct. If none of these clauses are specified, `CONTAINS SQL` is used by default.

`CONTAINS SQL`, `NO SQL`, `READS SQL DATA`, e `MODIFIES SQL DATA` são cláusulas informativas que informam ao servidor o que a função faz. O MariaDB não verifica de forma alguma se a cláusula especificada está correta. Se nenhuma dessas cláusulas for especificada, será usado por padrão `CONTAINS SQL`.

!!! info MODIFIES SQL DATA

    Significa que a função contém instruções que podem modificar dados armazenados em bancos de dados. Isso acontece se a função contiver instruções como [DELETE,](https://mariadb.com/kb/en/delete/) [UPDATE,](https://mariadb.com/kb/en/update/) [INSERT,](https://mariadb.com/kb/en/insert/) [REPLACE](https://mariadb.com/kb/en/replace/) ou DDL.

!!! info READS SQL DATA

    Significa que a função lê dados armazenados em bancos de dados, mas não modifica nenhum dado. Isso acontece se instruções [SELECT](https://mariadb.com/kb/en/select/) forem usadas, mas nenhuma operação de gravação for executada.

!!! info CONTAINS SQL

    Significa que a função contém pelo menos uma instrução SQL, mas não lê ou grava nenhum dado armazenado em um banco de dados. Exemplos incluem [SET](https://mariadb.com/kb/en/set/) ou [DO.](https://mariadb.com/kb/en/do/)
    
!!! info NO SQL

    Não significa nada, porque o MariaDB atualmente não suporta nenhuma linguagem diferente do SQL.

### Oracle Mode

Um subconjunto da linguagem PL/SQL da Oracle é suportado, além da sintaxe tradicional do MariaDB baseada em SQL/PSM. Consulte [Modo Oracle](https://mariadb.com/kb/en/sql_modeoracle-from-mariadb-103/#stored-procedures-and-stored-functions) para obter detalhes sobre as alterações ao executar o modo Oracle.

## Security

Você deve ter o privilégio [EXECUTE](https://mariadb.com/kb/en/grant/#function-privileges) em uma função para chamá-la. O MariaDB concede automaticamente os privilégios `EXECUTE` e `ALTER ROUTINE` ao conta que chamou `CREATE FUNCTION`, mesmo que a cláusula `DEFINER` tenha sido usada.

Cada função tem uma conta associada como definidor. Por padrão, o definidor é a conta que criou a função. Use a cláusula `DEFINER` para especificar uma conta diferente como o definidor. Você deve ter o privilégio [SUPER](https://mariadb.com/kb/en/grant/#super) ou, no [MariaDB 10.5.2](https://mariadb.com/kb/en/mariadb-1052-release-notes/), o privilégio [SET USER](https://mariadb.com/kb/en/grant/#set-user), para usar a cláusula `DEFINER`. Consulte [Nomes de conta](https://mariadb.com/kb/en/create-user/#account-names) para obter detalhes sobre como especificar contas.

A cláusula `SQL SECURITY` especifica quais privilégios são usados quando uma função é chamada. Se `SQL SECURITY` for `INVOKER`, o corpo da função será avaliado usando os privilégios do usuário que chama a função. Se `SQL SECURITY` for `DEFINER`, o corpo da função é sempre avaliado usando os privilégios da conta do definidor. `DEFINER` é o padrão.

Isso permite que você crie funções que concedem acesso limitado a determinados dados. Por exemplo, digamos Você tem uma tabela que armazena algumas informações de funcionários e que concedeu privilégios `SELECT` [apenas em determinadas colunas](https://mariadb.com/kb/en/grant/#column-privileges) à conta de usuário `roger`.

```sql
CREATE TABLE employees (name TINYTEXT, dept TINYTEXT, salary INT);
GRANT SELECT (name, dept) ON employees TO roger;
```

Para permitir que o usuário obtenha o salário máximo de um departamento, defina uma função e conceda O privilégio:`EXECUTE`

```sql
CREATE FUNCTION max_salary (dept TINYTEXT) RETURNS INT RETURN
  (SELECT MAX(salary) FROM employees WHERE employees.dept \= dept);
GRANT EXECUTE ON FUNCTION max_salary TO roger;
```

Since `SQL SECURITY` defaults to `DEFINER`, whenever the user `roger` calls this function, the subselect will execute with your privileges. As long as you have privileges to select the salary of each employee, the caller of the function will be able to get the maximum salary for each department without being able to see individual salaries.

Como `SQL SECURITY` o padrão é `DEFINER`, sempre que o usuário `roger` chamar esta função, a subseleção será executada com seus privilégios. Contanto que você tenha privilégios para selecione o salário de cada funcionário, o chamador da função poderá obter o máximo salário para cada departamento sem poder ver os salários individuais.

## Character sets and collations

Os tipos de retorno de função podem ser declarados para usar qualquer [conjunto de caracteres e ordenação válidos](https://mariadb.com/kb/en/character-sets/). Se usado, o atributo COLLATE precisa ser precedido por um atributo CHARACTER SET.

Se o conjunto de caracteres e a ordenação não forem definidos especificamente na instrução, os padrões do banco de dados no momento da criação serão usados. Se os padrões do banco de dados forem alterados posteriormente, o conjunto/agrupamento de caracteres da função armazenada não será alterado ao mesmo tempo; A função armazenada precisa ser descartada e recriada para garantir que o mesmo conjunto de caracteres/agrupamento do banco de dados seja usado.

Conjunto de caracteres e agrupamento:

```sql
CREATE FUNCTION hello2 (s CHAR(20))
  RETURNS CHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_bin' DETERMINISTIC
  RETURN CONCAT('Hello, ',s,'!');
```

## Examples

A função de exemplo a seguir usa um parâmetro, executa uma operação usando uma função SQL e retorna o resultado.

```sql
CREATE FUNCTION hello (s CHAR(20))
    RETURNS CHAR(50) DETERMINISTIC
    RETURN CONCAT('Hello, ',s,'!');

SELECT hello('world');
```

```text
+----------------+
| hello('world') |
+----------------+
| Hello, world!  |
+----------------+
```

Você pode usar uma instrução composta em uma função para manipular dados com instruções como `INSERT` e `UPDATE`. O exemplo a seguir cria uma função de contador que usa uma tabela temporária para armazenar o valor atual. Como a instrução composta contém instruções terminadas com ponto e vírgula, você deve primeiro alterar a instrução delimitador `DELIMITER` com a instrução para permitir que o ponto-e-vírgula seja usado no corpo da função. Consulte [Delimitadores no cliente mariadb](https://mariadb.com/kb/en/delimiters/) para obter mais informações.

```sql
CREATE TEMPORARY TABLE counter (c INT);
INSERT INTO counter VALUES (0);
DELIMITER //
CREATE FUNCTION counter () RETURNS INT
  BEGIN
    UPDATE counter SET c \= c + 1;
    RETURN (SELECT c FROM counter LIMIT 1);
  END //
DELIMITER ;
```
