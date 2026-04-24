# GIS - Geometria / Cálculo Espacial

- Suportadas pelos ENGINES: MyISAM, InnoDB e ARCHIVE
- Índice Recomendado SPATIAL INDEX (R-TREE). Obs: Para SPATIAL INDEX, o campo deve ser NOT NULL

- [Sumário](Summary.md)
- [Glossário](Glossary.md)
- [Tipo de Dados](DataTypes.md)
- [Funções](Functions.md)

## ⚠️ Observações importantes

- MariaDB não é tão completo quanto o PostGIS
- Algumas funções dependem da versão
- Sempre use índices espaciais (`SPATIAL INDEX`) pra performance

- [ST_GeomFromText](ST_GeomFromText.md)
- [ST_Point](ST_Point.md)
- [ST_LineStringFromText](ST_LineStringFromText.md)
- [ST_PolygonFromText](ST_PolygonFromText.md)
- [ST_AsText](ST_AsText.md)
- [ST_AsGeoJSON](ST_AsGeoJSON.md)
- [ST_AsBinary](ST_AsBinary.md)
- [ST_GeomFromGeoJSON](ST_GeomFromGeoJSON.md)
