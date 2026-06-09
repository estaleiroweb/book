# Comentário de linha MySQL

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

-- MySQL optimizer hint
SELECT /*+ MAX_EXECUTION_TIME(1000) */
       *
FROM employees;
