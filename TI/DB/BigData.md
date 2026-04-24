# BigData

## IBGE

| Descr                          | Link                                                                                                                                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Microsoft - Git                | <https://github.com/Microsoft/sql-server-samples/releases/tag/wide-world-importers-v1.0>                                             |
| Legislativo - Dadosaberto      | <https://dadosabertos.camara.leg.br/swagger/api/html#staticfile>                                                                     |
| Mockaroo - Data generator      | <https://www.mockaroo.com/>                                                                                                          |
| Mockaroo - Git                 | <https://github.com/mockaroo/mockaroo-enterprise>                                                                                    |
| Kaggle - Jupyter               | <https://www.kaggle.com/>                                                                                                            |
| World Bank Open Data           | <https://data.worldbank.org/>                                                                                                        |
| World Bank Open Data           | <https://data.world/brianray/enron-email-dataset>                                                                                    |
| Global Health Observatory Data | <https://www.who.int/data/gho/>                                                                                                      |
| Google Public Data Explorer    | <https://www.google.com/publicdata/directory>                                                                                        |
| Registry of Open Data on AWS   | <https://registry.opendata.aws/>                                                                                                     |
| US Census Bureau               | <https://www.census.gov/data.html>                                                                                                   |
| IBGE                           | <https://www.ibge.gov.br/>                                                                                                           |
| IBGE                           | <https://servicodados.ibge.gov.br/api/v1/pesquisas/11/indicadores/5>                                                                 |
| IBGE                           | <https://servicodados.ibge.gov.br/api/v1/pesquisas/11/periodos/2010/indicadores/5.1/resultados/>*                                    |
| IBGE                           | <https://servicodados.ibge.gov.br/api/docs>                                                                                          |
| GOV.BR                         | <https://dados.gov.br/>                                                                                                              |
| GOV.BR - INPI                  | <https://www.gov.br/inpi/pt-br>                                                                                                      |
| GOV.BR - PRF                   | <https://www.gov.br/prf/pt-br>                                                                                                       |
| GOV.BR - Receita Federal       | <https://www.gov.br/receitafederal/pt-br>                                                                                            |
| GOV.BR - Portal Transparência  | <https://www.portaltransparencia.gov.br/download-de-dados>                                                                           |
| GOV.BR - Sidra                 | <https://apisidra.ibge.gov.br/values/t/793/n6/all/h/n?formato=json>                                                                  |
| GOV.BR - Sidra - População     | <https://apisidra.ibge.gov.br/>                                                                                                      |
| GOV.BR - Sidra - População     | <https://apisidra.ibge.gov.br/home/ajuda>                                                                                            |
| GOV.BR - Sidra - População     | <http://api.sidra.ibge.gov.br/values/t/793/g/2/v/all/p/all?formato=json>                                                             |
| GOV.BR - Sidra - População     | <http://api.sidra.ibge.gov.br/values>                                                                                                |
| GOV.BR                         | <https://dados.gov.br/dataset?res_format=JSON&license_id=other-pd&organization=instituto-brasileiro-de-geografia-e-estatistica-ibge> |
| Junta Comercial MG             | <https://www.jucemg.mg.gov.br/>                                                                                                      |

## Sidra

| Paramater             | Supparameter                   | Description                                                                                                                                                    |
| --------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /t(tabela)            |                                | tabela                                                                                                                                                         |
|                       | /t/793                         |                                                                                                                                                                |
| /g(???????)           |                                |                                                                                                                                                                |
|                       | /g/2                           |                                                                                                                                                                |
| /v(variáveis)         |                                | variáveis desejadas                                                                                                                                            |
|                       | /v/all                         |                                                                                                                                                                |
|                       | /v/63,69                       |                                                                                                                                                                |
|                       | /v/allxp                       |                                                                                                                                                                |
| /p(período)           |                                | periodo  (meses=AAAAMM, anos=AAAA etc.) ex:                                                                                                                    |
|                       | /p/all                         |                                                                                                                                                                |
|                       | /p/2008,2010-2012              |                                                                                                                                                                |
|                       | /p/201101-201112,201204,201208 |                                                                                                                                                                |
|                       | /p/all                         |                                                                                                                                                                |
|                       | /p/first                       |                                                                                                                                                                |
|                       | /p/last 12                     |                                                                                                                                                                |
| /n(nível territorial) |                                | nível territorial                                                                                                                                              |
|                       | /n1/all                        | Brasil                                                                                                                                                         |
|                       | /n2/all                        | Grande Região                                                                                                                                                  |
|                       | /n3/all                        | Unidade da Federação                                                                                                                                           |
|                       | /n6/all                        | Município                                                                                                                                                      |
|                       | /n6/3304557,3550308            | especifica os municípios do Rio de Janeiro e São Paulo.                                                                                                        |
|                       | /n3/in n2 3,4                  | especifica as Unidades da Federação contidas nas Grandes Regiões Sudeste e Sul.                                                                                |
|                       | /n6/in n3 11,12                | especifica os municípios contidos nas Unidades da Federação Rondônia e Acre.                                                                                   |
|                       | /n1/1/n2/1/n3/in n2 1          | especifica Brasil (n1/1) seguido pela Grande Região Norte (n2/1) e pelas Unidades da Federação contidas na Grandes Região Norte.                               |
| /c(classificação)     |                                | para especificar as classificações da tabela e suas categorias desejadas.                                                                                      |
|                       | /c1                            | Situação do domicílio                                                                                                                                          |
|                       | /c2                            | Sexo                                                                                                                                                           |
|                       | /c81                           | Produto da lavoura temporária                                                                                                                                  |
|                       | /c81/2692,2702,2694 2695       | especifica os produtos da lavoura temporária arroz, feijão e (batata doce + batata inglesa)                                                                    |
| /f(formato)           |                                | para especificar a formatação do resultado, i.e., que tipo de descritor de cada uma das dimensões da tabela comporá o resultado recebido.                      |
|                       |                                | Cada um dos diferentes descritores (metadados) permite identificar um valor recebido.                                                                          |
|                       | /f/c                           | para receber apenas os códigos dos descritores.                                                                                                                |
|                       | /f/n                           | para receber apenas os nomes dos descritores.                                                                                                                  |
|                       | /f/u                           | para receber o código e o nome das unidades terrritoriais consultadas e o nome dos demais descritores.                                                         |
|                       | /f/a                           | para receber os códigos e os nomes dos descritores (valor default, caso o parâmetro f não seja especificado).                                                  |
| /d(casas decimais)    |                                | para especificar com quantas casas decimais serão formatados os valores.                                                                                       |
|                       | /d/s                           | para formatar os valores com o nro. de casas decimais padrão definido pelo Sidra para cada variável (valor default, caso o parâmetro d não seja especificado). |
|                       | /d/m                           | para formatar os valores com o nro. de casas decimais máximo disponível para cada variável (maior precisão).                                                   |
|                       | /d/0 a /d/9                    | para formatar os valores com um nro. fixo de casas decimais, entre 0 e 9.                                                                                      |
| /h(resultado)         |                                | para especificar se o resultado recebido será precedido por um registro de cabeçalho (header).                                                                 |
|                       |                                | O registro de header permite identificar o código e/ou o nome de cada uma das dimensões da tabela que compõem o resultado recebido.                            |
|                       | /h/y                           | para receber o header (valor default, caso o parâmetro h não seja especificado).                                                                               |
|                       | /h/n                           | para não receber o header.                                                                                                                                     |
| /u/y                  | /u/y                           | que informa que devem ser consideradas as unidades territoriais extintas                                                                                       |

- ?formato=json
- População csv
- <https://sidra.ibge.gov.br/geratabela?format=us.csv&name=populacao.csv&terr=NCS&rank=-&query=t/793/n1/all/n6/all/v/all/p/all/l/v,p,t>

## Outros

1. **DataSUS**: O Departamento de Informática do SUS oferece a API de Dados Abertos, disponibilizando informações de saúde pública no Brasil.
   - API: [https://apidadosabertos.saude.gov.br/](https://apidadosabertos.saude.gov.br/)
   - Documentação e serviços adicionais podem ser encontrados no Portal de Serviços do DataSUS.
     - Portal de Serviços: [https://servicos-datasus.saude.gov.br/](https://servicos-datasus.saude.gov.br/)

2. **Portal da Transparência**: A Controladoria-Geral da União disponibiliza uma API para acesso aos dados do Portal da Transparência, permitindo consultas programáticas sobre gastos públicos, convênios, entre outros.
   - API: [https://portaldatransparencia.gov.br/api-de-dados](https://portaldatransparencia.gov.br/api-de-dados)
   - Exemplos de uso e documentação adicional estão disponíveis para auxiliar na integração.
     - Exemplos de uso: [https://portaldatransparencia.gov.br/pagina-interna/603579-api-de-dados-exemplos-de-uso](https://portaldatransparencia.gov.br/pagina-interna/603579-api-de-dados-exemplos-de-uso)

3. **IBGE**: O Instituto Brasileiro de Geografia e Estatística oferece diversas APIs para acesso a dados estatísticos e geográficos do Brasil.
   - API de Pesquisas: [https://servicodados.ibge.gov.br/api/docs/pesquisas](https://servicodados.ibge.gov.br/api/docs/pesquisas)
   - Outras APIs e documentação podem ser encontradas no Portal de Serviços do IBGE.
     - Portal de Serviços: [https://servicodados.ibge.gov.br/api/docs/](https://servicodados.ibge.gov.br/api/docs/)

4. **INEP**: O Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira disponibiliza dados abertos sobre educação no Brasil.
   - API: [https://github.com/inepdadosabertos/api](https://github.com/inepdadosabertos/api)
   - A documentação detalhada está disponível no repositório oficial do GitHub.

5. **MEC**: O Ministério da Educação oferece dados abertos através de seu portal, abrangendo informações sobre instituições de ensino, cursos, entre outros.
   - Portal de Dados Abertos: [https://dados.gov.br/organization/ministerio-da-educacao-mec](https://dados.gov.br/organization/ministerio-da-educacao-mec)
   - A documentação das APIs pode ser acessada diretamente no portal.

6. **MCTI**: O Ministério da Ciência, Tecnologia e Inovação disponibiliza conjuntos de dados abertos relacionados às suas áreas de atuação.
   - Portal de Dados Abertos: [https://www.gov.br/mcti/pt-br/acesso-a-informacao/dados-abertos/dados-abertos](https://www.gov.br/mcti/pt-br/acesso-a-informacao/dados-abertos/dados-abertos)
   - As informações sobre as APIs disponíveis podem ser encontradas no portal.

7. **MCTIC**: O Ministério da Ciência, Tecnologia, Inovações e Comunicações foi desmembrado, originando o MCTI e o Ministério das Comunicações. Os dados anteriormente sob o MCTIC podem ser encontrados nos respectivos ministérios atuais.
   - MCTI: [https://www.gov.br/mcti/](https://www.gov.br/mcti/)
   - Ministério das Comunicações: [https://www.gov.br/mcom/](https://www.gov.br/mcom/)

Além disso, o Catálogo de APIs Governamentais é uma iniciativa do Programa Conecta gov.br, que reúne diversas APIs de órgãos do governo brasileiro, facilitando a integração e o acesso a dados públicos.

- Catálogo de APIs: [https://www.gov.br/conecta/catalogo/](https://www.gov.br/conecta/catalogo/)

Para uma visão geral e acesso a diversos conjuntos de dados abertos do governo brasileiro, o Portal Brasileiro de Dados Abertos é uma fonte valiosa.

- Portal de Dados Abertos: [https://dados.gov.br/](https://dados.gov.br/)
