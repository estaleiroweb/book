# see

<https://mariadb.com/kb/en/window-functions/>
<https://mariadb.com/kb/en/special-functions/>

```sql
SELECT 
    RANK() OVER (PARTITION BY Nome ORDER BY Matricula DESC) AS v_rank, 
    DENSE_RANK() OVER (PARTITION BY Nome ORDER BY Matricula DESC) AS v_dense_rank, 
    ROW_NUMBER() OVER (PARTITION BY Nome ORDER BY Nome DESC) AS v_row_num, 
    a.* 
FROM test.Aluno a;



SELECT 
    LAG(Nome,1) OVER (ORDER BY Nome) l,
    a.*
    /*
    pk, LAG(pk) OVER (ORDER BY pk) AS l,
    LAG(pk,1) OVER (ORDER BY pk) AS l1,
    LAG(pk,2) OVER (ORDER BY pk) AS l2,
    LAG(pk,0) OVER (ORDER BY pk) AS l0,
    LAG(pk,-1) OVER (ORDER BY pk) AS lm1,
    LAG(pk,-2) OVER (ORDER BY pk) AS lm2 
  */
FROM test.Aluno a;



SELECT 
    pk, FIRST_VALUE(pk) OVER (ORDER BY pk) AS first_asc,
    LAST_VALUE(pk) OVER (ORDER BY pk) AS last_asc,
    FIRST_VALUE(pk) OVER (ORDER BY pk DESC) AS first_desc,
    LAST_VALUE(pk) OVER (ORDER BY pk DESC) AS last_desc
FROM t1
ORDER BY pk DESC;


SELECT 
    pk, LEAD(pk) OVER (ORDER BY pk) AS l,
    LEAD(pk,1) OVER (ORDER BY pk) AS l1,
    LEAD(pk,2) OVER (ORDER BY pk) AS l2,
    LEAD(pk,0) OVER (ORDER BY pk) AS l0,
    LEAD(pk,-1) OVER (ORDER BY pk) AS lm1,
    LEAD(pk,-2) OVER (ORDER BY pk) AS lm2 
FROM t1;

```
