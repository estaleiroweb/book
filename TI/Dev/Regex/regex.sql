SET @content='MariaDB 10.X é poderoso. exemplo@dominio.com';

SELECT 'REGEXP' cmd, @re:='[!=-]+' re, null repl, @content REGEXP @re result UNION ALL
SELECT 'NOT REGEXP' cmd, @re:='[!=-]+' re, null repl, @content NOT REGEXP @re result UNION ALL
SELECT 'INSTR' cmd, @re:='[!=-]+' re, null repl, REGEXP_INSTR(@content, @re) result UNION ALL
SELECT 'INSTR', @re:='[0-9]+', null repl, REGEXP_INSTR(@content, @re) ret UNION ALL
SELECT 'SUBSTR', @re:='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}', null repl, REGEXP_SUBSTR(@content, @re) ret UNION ALL
SELECT 'REPLACE' cmd, @re:='[0-9]+' re, @repl:='X' repl, REGEXP_REPLACE(@content, @re, @repl) result UNION ALL
SELECT 'REPLACE' cmd, @re:='([0-9]+)' re, @repl:='_\\1_' repl, REGEXP_REPLACE(@content, @re, @repl) result;

-- ---------------------------------------------------------------------------------------------------------

DECLARE content VARCHAR2(1000);
BEGIN
    content := 'Oracle é poderoso. exemplo@dominio.com';

    SELECT 'REGEXP_LIKE' cmd, '[!=-]+' re, NULL repl, CASE WHEN REGEXP_LIKE(content, '[!=-]+') THEN 1 ELSE 0 END result FROM dual UNION ALL
    SELECT 'NOT REGEXP_LIKE' cmd, '[!=-]+' re, NULL repl, CASE WHEN NOT REGEXP_LIKE(content, '[!=-]+') THEN 1 ELSE 0 END result FROM dual UNION ALL
    SELECT 'INSTR' cmd, '[!=-]+' re, NULL repl, REGEXP_INSTR(content, '[!=-]+') result FROM dual UNION ALL
    SELECT 'INSTR' cmd, '[0-9]+' re, NULL repl, REGEXP_INSTR(content, '[0-9]+') result FROM dual UNION ALL
    SELECT 'SUBSTR' cmd, '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}' re, NULL repl, REGEXP_SUBSTR(content, '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}') result FROM dual UNION ALL
    SELECT 'REPLACE' cmd, '[0-9]+' re, 'X' repl, REGEXP_REPLACE(content, '[0-9]+', 'X') result FROM dual UNION ALL
    SELECT 'REPLACE' cmd, '([0-9]+)' re, '_\1_' repl, REGEXP_REPLACE(content, '([0-9]+)', '_\1_') result FROM dual;
END;

-- ---------------------------------------------------------------------------------------------------------

DECLARE @content NVARCHAR(1000) = 'MSSQL é poderoso. exemplo@dominio.com';

SELECT 'LIKE' AS cmd, '[!=-]+' AS re, NULL AS repl, CASE WHEN @content LIKE '%[!=-]%' THEN 1 ELSE 0 END AS result UNION ALL
SELECT 'NOT LIKE' AS cmd, '[!=-]+' AS re, NULL AS repl, CASE WHEN @content NOT LIKE '%[!=-]%' THEN 1 ELSE 0 END AS result UNION ALL
SELECT 'PATINDEX' AS cmd, '[0-9]+' AS re, NULL AS repl, PATINDEX('%[0-9]%', @content) AS result UNION ALL
SELECT 'CHARINDEX' AS cmd, '0' AS re, NULL AS repl, CHARINDEX('0', @content) AS result
