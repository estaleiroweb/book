# Tipo de Dados

| Tipo de Dados          | Descrição                                           | Exemplo                                           | Aplicações práticas                                     |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------- |
| **POINT**              | Um único ponto (X Y) → (lon lat)                    | `POINT(-44.0 -19.9)`                              | GPS, localização de usuário, sensores                   |
| **LINESTRING**         | Linha formada por vários pontos conectados          | `LINESTRING(0 0, 1 1, 2 2)`                       | Rotas, trajetos, ruas                                   |
| **POLYGON**            | Área fechada (último ponto igual ao primeiro)       | `POLYGON((0 0, 0 5, 5 5, 5 0, 0 0))`              | Terrenos, regiões, mapas                                |
| **MULTIPOINT**         | Conjunto de pontos                                  | `MULTIPOINT((1 1),(2 2))`                         | Vários locais (ex: lojas)                               |
| **MULTILINESTRING**    | Conjunto de linhas                                  | `MULTILINESTRING((0 0,1 1),(2 2,3 3))`            | Redes de ruas, rios                                     |
| **MULTIPOLYGON**       | Conjunto de polígonos                               | `MULTIPOLYGON(((...)),((...)))`                   | Países com ilhas, áreas complexas                       |
| **GEOMETRYCOLLECTION** | Mistura de vários tipos Acima                       | `GEOMETRYCOLLECTION(POINT(...), LINESTRING(...))` | Dados heterogêneos                                      |
| **GEOMETRY**           | Tipo genérico que armazena qualquer geometria acima |                                                   | Quando você não sabe o tipo exato ou quer flexibilidade |
