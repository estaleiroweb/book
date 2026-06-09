-- Comentário de linha ANSI

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
    id          INTEGER PRIMARY KEY,
    name        VARCHAR(100),
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

-- Comentário no final da linha
SELECT * FROM employees; -- comentário

SELECT '/* isto não é comentário */';

SELECT '-- isto também não é comentário';

SELECT '; dentro da string';

SELECT 'GO dentro da string';

SELECT '$$ dentro da string';

SELECT 'DELIMITER $$ dentro da string';

SELECT 'algo escapado \' com aspas \"'

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
