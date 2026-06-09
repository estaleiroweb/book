-- PostgreSQL dollar quoted string
SELECT $$
Texto multilinha
com 'aspas'
e /* comentários */
$$;

SELECT $tag$
Texto com delimitador nomeado
$tag$;

-- String escapada PostgreSQL
SELECT E'linha1\nlinha2\tcoluna';

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

-- PostgreSQL variable style inside plpgsql
DO $$
DECLARE
    v_id INTEGER := 1;
BEGIN
    RAISE NOTICE 'ID=%', v_id;
END;
$$;
