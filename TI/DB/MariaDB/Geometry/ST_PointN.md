# ST_PointN

A função `ST_POINTN` (sinônimo: `POINTN`) é uma **função de propriedade de LineString**. Ela retorna o **N-ésimo ponto** (vértice) de uma `LINESTRING` ou `MULTILINESTRING`.

É extremamente útil para:

- Extrair pontos específicos de uma linha (início, fim, pontos intermediários).
- Processar rotas, trajetos ou polilinhas.
- Combinada com `ST_NumPoints`, `ST_StartPoint`, `ST_EndPoint`, `ST_X` e `ST_Y`.
- Manipular geometrias lineares em rotas, redes viárias, etc.

## Sintaxe oficial (MariaDB)

```sql
ST_POINTN(ls, N)
POINTN(ls, N)                  -- sinônimo
```

- **Parâmetros**:
  - `ls`: Uma geometria do tipo `LINESTRING` (ou `MULTILINESTRING` em alguns casos, mas o comportamento é mais previsível com LineString simples).
  - `N`: Índice do ponto desejado (**1-based** — começa em 1).

- **Retorno**:
  - Um `POINT` com as coordenadas do N-ésimo vértice.
  - Retorna `NULL` se:
    - A geometria não for LineString (ou equivalente).
    - O índice `N` for inválido (menor que 1 ou maior que o número de pontos).
    - A entrada for `NULL` ou geometria inválida.

**Índice negativo**: Não é suportado oficialmente no MariaDB (diferente de algumas implementações como Redshift). Use índice positivo.

## Funções relacionadas úteis

- `ST_NumPoints(ls)` → Retorna a quantidade total de pontos na LineString.
- `ST_StartPoint(ls)` → Equivalente a `ST_PointN(ls, 1)`.
- `ST_EndPoint(ls)`   → Equivalente a `ST_PointN(ls, ST_NumPoints(ls))`.
- `ST_X(p)` e `ST_Y(p)` → Extrair coordenada X ou Y do ponto retornado.

## Exemplos práticos

```sql
-- 1. Extrair pontos de uma linha
SET @linha = ST_GEOMFROMTEXT('LINESTRING(0 0, 10 5, 20 0, 30 10)');

SELECT ST_ASWKT(ST_POINTN(@linha, 1)) AS primeiro;     -- POINT(0 0)
SELECT ST_ASWKT(ST_POINTN(@linha, 2)) AS segundo;      -- POINT(10 5)
SELECT ST_ASWKT(ST_POINTN(@linha, 4)) AS ultimo;       -- POINT(30 10)

-- 2. Verificar quantidade de pontos antes
SELECT ST_NumPoints(@linha);                           -- 4

-- 3. Extrair coordenadas X e Y
SELECT 
  ST_X(ST_POINTN(@linha, 2)) AS x,
  ST_Y(ST_POINTN(@linha, 2)) AS y;                     -- x=10, y=5

-- 4. Exemplo com rota real (lat/long)
SET @rota = ST_GEOMFROMTEXT('LINESTRING(-46.6333 -23.5505, -43.1729 -22.9068, -47.9292 -15.7801)', 4326);
SELECT ST_ASWKT(ST_POINTN(@rota, 1)) AS origem;        -- São Paulo
SELECT ST_ASWKT(ST_POINTN(@rota, 3)) AS destino;       -- Brasília
```

## Limitações e boas práticas no MariaDB

- Funciona **principalmente com LINESTRING**. Para `MULTILINESTRING`, o comportamento pode variar (teste sempre).
- Índice **1-based** (1 = primeiro ponto, não 0).
- Se `N` for inválido → retorna `NULL` (sem erro).
- Geometrias inválidas ou vazias → resultado `NULL`.
- Performance: Extremamente rápida (acesso direto ao array de pontos).
- Dica comum: Para obter o envelope (bounding box) de um polígono e extrair cantos:
  ```sql
  SET @poly = ...;
  SET @env = ST_ExteriorRing(ST_Envelope(@poly));
  SELECT ST_X(ST_PointN(@env, 1)) AS min_x;   -- canto inferior esquerdo
  ```

## Comparação com funções semelhantes

| Função        | O que retorna              | Índice  | Uso principal                        |
| ------------- | -------------------------- | ------- | ------------------------------------ |
| ST_POINTN     | Qualquer ponto N           | 1-based | Acesso direto a vértices específicos |
| ST_StartPoint | Sempre o primeiro ponto    | -       | Início da linha                      |
| ST_EndPoint   | Sempre o último ponto      | -       | Fim da linha                         |
| ST_NumPoints  | Quantidade total de pontos | -       | Saber o tamanho da linha             |

## Representações visuais

Aqui estão diagramas educativos que mostram o funcionamento da função:

![ST_POINTN](imgs/ST_POINTN01.png)

![ST_POINTN](imgs/ST_POINTN02.png)
