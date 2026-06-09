SELECT 'algo escapado \' com aspas \"'
SELECT 'algo esca''pado \' com aspas \"'
SELECT 'algo esca\'''pado \' com aspas \"'
-- Comentário de linha ANSI

# Comentário de linha MySQL

/*
 * Comentário multilinha ANSI
 */

/*!40101 SET NAMES utf8 */;

/*
    Comentário contendo:
    -- comentário interno
    'string interna'
*/

CREATE TABLE employees (
    id          INTEGER PRIMARY KEY, -- Comentário
    name        VARCHAR(100), # comentário
    salary      DECIMAL(10,2),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees(id, name, salary)
VALUES
(
    1,
    'John Doe',
    1234.56
);

INSERT INTO employees(id, name, salary)
VALUES
(
    2,
    'O''Brien',
    2500.00
);

INSERT INTO employees(id, name, salary)
VALUES
(
    3,
    'Texto com -- comentário falso',
    3000.00
);

INSERT INTO employees(id, name, salary)
VALUES
(
    4,
    'Texto com /* comentário falso */',
    4000.00
);

INSERT INTO employees(id, name, salary)
VALUES
(
    5,
    'Linha 1
Linha 2
Linha 3',
    5000.00
);

SELECT
    e.id,
    e.name,
    UPPER(e.name) AS upper_name,
    COALESCE(e.salary, 0) AS salary
FROM employees e
LEFT JOIN departments d
    ON d.id = e.id
WHERE e.salary > 1000
ORDER BY e.name;

-- Oracle q-string
SELECT q'[Texto com 'aspas' sem escape]' FROM dual;

-- PostgreSQL dollar quoted string
SELECT $$
Texto multilinha
com 'aspas'
e /* comentários */
$$;

SELECT $tag$
Texto com delimitador nomeado
$tag$;

-- SQL Server Unicode String
SELECT N'Texto Unicode';

-- String escapada PostgreSQL
SELECT E'linha1\nlinha2\tcoluna';

-- Oracle PL/SQL
DECLARE
    v_name VARCHAR2(100);
BEGIN
    SELECT name
      INTO v_name
      FROM employees
     WHERE id = 1;

    DBMS_OUTPUT.PUT_LINE(v_name);
END;
/

-- Oracle Procedure
CREATE OR REPLACE PROCEDURE proc_test
IS
BEGIN
    NULL;
END;
/

-- SQL Server Procedure
GO

CREATE PROCEDURE proc_mssql
AS
BEGIN
    SET NOCOUNT ON;

    SELECT GETDATE();

    PRINT 'Teste';
END
GO

-- PostgreSQL Function
CREATE OR REPLACE FUNCTION fn_pg()
RETURNS TEXT
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_text TEXT;
BEGIN
    v_text := 'teste';

    RETURN v_text;
END;
$BODY$;

-- MySQL Procedure
DELIMITER $$

CREATE PROCEDURE proc_mysql()
BEGIN

    DECLARE v_total INT DEFAULT 0;

    SELECT COUNT(*)
      INTO v_total
      FROM employees;

    SELECT v_total;

END$$

DELIMITER ;

-- Common Table Expression
WITH employee_cte AS
(
    SELECT *
      FROM employees
)
SELECT *
  FROM employee_cte;

-- Subquery
SELECT *
FROM employees e
WHERE EXISTS
(
    SELECT 1
      FROM departments d
     WHERE d.id = e.id
);

-- MERGE (Oracle / SQL Server)
MERGE INTO employees t
USING employees_backup s
ON (t.id = s.id)
WHEN MATCHED THEN
    UPDATE SET t.salary = s.salary
WHEN NOT MATCHED THEN
    INSERT (id, name, salary)
    VALUES (s.id, s.name, s.salary);

-- SQL Server variable
DECLARE @id INT = 1;
DECLARE @name NVARCHAR(100);

SELECT @name = name
FROM employees
WHERE id = @id;

-- PostgreSQL variable style inside plpgsql
DO $$
DECLARE
    v_id INTEGER := 1;
BEGIN
    RAISE NOTICE 'ID=%', v_id;
END;
$$;

-- Oracle hint
SELECT /*+ FULL(employees) */
       *
FROM employees;

-- MySQL optimizer hint
SELECT /*+ MAX_EXECUTION_TIME(1000) */
       *
FROM employees;

-- Comentário no final da linha
SELECT * FROM employees; -- comentário
SELECT '/* isto não é comentário */';
SELECT '-- isto também não é comentário';
SELECT '; dentro da string';
SELECT 'GO dentro da string';
SELECT '$$ dentro da string';
SELECT 'DELIMITER $$ dentro da string';

-- JSON
SELECT
'{
    "name": "John",
    "sql": "SELECT * FROM employees;"
}';

-- XML
SELECT
'<root>
    <item>teste</item>
</root>';

DROP TABLE employees;