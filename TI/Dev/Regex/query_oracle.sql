-- Oracle q-string
SELECT q'[Texto com 'aspas' sem escape]' FROM dual;

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

-- MERGE (Oracle / SQL Server)
MERGE INTO employees t
USING employees_backup s
ON (t.id = s.id)
WHEN MATCHED THEN
    UPDATE SET t.salary = s.salary
WHEN NOT MATCHED THEN
    INSERT (id, name, salary)
    VALUES (s.id, s.name, s.salary);

-- Oracle hint
SELECT /*+ FULL(employees) */
       *
FROM employees;
