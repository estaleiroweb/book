# Getometria

## 1. Shapely (A "Engine" de Geometria)

O **Shapely** é a biblioteca fundamental. Ele é baseado na biblioteca C++ **GEOS** (a mesma que alimenta o PostGIS do PostgreSQL).
- **Vantagem:** É extremamente poderoso para manipulação de geometrias no plano cartesiano.
- **Funções que você usaria:** `polygonize` (para o seu caso de transformar linhas em polígonos), `buffer`, `intersection`, `union`, `simplify`.
- **Exemplo para o seu problema:**
  ```python
  from shapely.geometry import LineString, Polygon
  from shapely.ops import polygonize

  line1 = LineString([(0, 0), (1, 1)])
  line2 = LineString([(1, 1), (0, 0)]) # Linhas que se fecham
  
  # Cria polígonos a partir de quaisquer linhas que formem um ciclo
  polygons = list(polygonize([line1, line2]))
  ```

## 2. GeoPandas (O "Excel" Espacial)

Se você tem muitos dados (como a sua tabela `tb_isopletas`), o **GeoPandas** é a escolha certa. Ele estende o Pandas para aceitar colunas de geometria.
- **Vantagem:** Permite ler diretamente do MariaDB, processar milhões de linhas em Python e devolver para o banco ou gerar um mapa.
- **Integração:** Você pode usar `geopandas.read_postgis` (que também funciona com MariaDB via SQLAlchemy) para trazer as coordenadas já como objetos geométricos.

## 3. PyProj (Tratamento de Coordenadas)

Diferente do MariaDB, que às vezes se confunde com cálculos de graus vs. metros, o **PyProj** serve para converter coordenadas. Se você precisar calcular a área real de uma isopleta em $km^2$ (e não em "graus quadrados"), você usará esta lib.

## Comparativo: MariaDB vs. Python (Shapely/GeoPandas)

| Recurso                 | MariaDB (Spatial)                | Python (Shapely/GeoPandas)                  |
| :---------------------- | :------------------------------- | :------------------------------------------ |
| **Foco**                | Armazenamento e filtros rápidos. | Processamento e análise pesada.             |
| **Linha para Polígono** | Complexo (exige SQL manual/WKT). | Nativo (`polygonize`).                      |
| **Validação**           | Básica.                          | Avançada (corrige geometrias inválidas).    |
| **Performance**         | Rápido para indexação (R-Tree).  | Rápido para cálculos matemáticos em massa.  |
| **Visualização**        | Nenhuma (texto/binário).         | Excelente (integra com Matplotlib/Leaflet). |

## Recomendação

**O fluxo ideal seria:**
1. Use o **MariaDB** para buscar apenas os dados necessários (usando `ST_Intersects` no `WHERE`, por exemplo).
2. Traga os dados para o **Python** usando **GeoPandas**.
3. Use o **Shapely** para realizar as operações de construção de polígonos e limpeza.
4. Se precisar, salve o resultado final de volta no MariaDB.
