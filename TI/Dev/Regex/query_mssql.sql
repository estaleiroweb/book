-- SQL Server Unicode String
SELECT N'Texto Unicode';

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
