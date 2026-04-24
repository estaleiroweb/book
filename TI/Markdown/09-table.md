# Tabelas

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Alinhamento

Você pode alinhar o texto nas colunas à esquerda, à direita ou ao centro adicionando dois pontos ( :) à esquerda, à direita ou em ambos os lados dos hifens dentro da linha de cabeçalho.

| Syntax        | Description |      Test Text |
| :------------ | :---------: | -------------: |
| Header        |    Title    |   Here is this |
| Paragraph     |    Text     |         n more |
| [ ] chexk box | nas tabelas | são permitidos |
| [x] chexk box | nas tabelas | são permitidos |
| [ ] chexk box | nas tabelas | são permitidos |


## Cabeçalho

[Title table]

|      |   x1 |    y1 |   x2 |   y2 |   x3 |    y3 |   x4 |    y4 |
| ---: | ---: | ----: | ---: | ---: | ---: | ----: | ---: | ----: |
|    1 |   10 |  8.04 |   10 | 9.14 |   10 |  7.46 |    8 |  6.58 |
|    2 |    8 |  6.95 |    8 | 8.14 |    8 |  6.77 |    8 |  5.76 |
|    3 |   13 |  7.58 |   13 | 8.74 |   13 | 12.74 |    8 |  7.71 |
|    4 |    9 |  8.81 |    9 | 8.77 |    9 |  7.11 |    8 |  8.84 |
|    5 |   11 |  8.33 |   11 | 9.26 |   11 |  7.81 |    8 |  8.47 |
|    6 |   14 |  9.96 |   14 | 8.10 |   14 |  8.84 |    8 |  7.04 |
|    7 |    6 |  7.24 |    6 | 6.13 |    6 |  6.08 |    8 |  5.25 |
|    8 |    4 |  4.26 |    4 | 3.10 |    4 |  5.39 |   19 | 12.50 |
|    9 |   12 | 10.84 |   12 | 9.13 |   12 |  8.15 |    8 |  5.56 |
|   10 |    7 |  4.82 |    7 | 7.26 |    7 |  6.42 |    8 |  7.91 |
|   11 |    5 |  5.68 |    5 | 4.74 |    5 |  5.73 |    8 |  6.89 |

## Tabela Complicada

|              |          Grouping                  ||         Grouping 2                       ||  Not Grouped   |
| First Header |   Second Header    |   Third Header |       Forth Header        | Fifth Header  | Sixth Header   |
| ------------ | :----------------: | -------------: | :-----------------------: | :-----------: | -------------- |
| Tall Cell    |    *Long Cell*     |                |     *Long Long Cell*      |               |                |
| ^^           |      **Bold**      |  1. first item |         *Italic*          | 3. third item | + first point  |
| ^^           |                    | 1. second item |                           | 1. forth item | + second point |
| New section  |        More        |           Data |       ... - -- ---        |               |                |
| And more     | With an escaped \| |                | "Try 'quotes' in quotes " |               |                |

[Footer table]

## Tabela Aninhada

| Field                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Optional | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| manual_entry_indicator | no: is not is allow manual entry <br /> yes: is manual entry enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | yes      | no      |
| amounts                | json object containing all transaction amounts <br /> <br /> <table> <tr> <td> Subfield </td> <td> Description </td> <td> Optional </td> <td> Default </td> </tr> <tr> <td> tip </td>  <td> transaction tip amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> total </td> <td> equal to Base  Amount + Base amount for  Reduced State Tax + City Tax + State Tax + Reduced State Tax + Tip or Cash back </td> <td> no </td> <td> NA </td> </tr> <tr> <td> cashback </td> <td> cash back amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> state_tax </td> <td> State tax amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> city_tax </td> <td> City tax amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> reduced_tax </td> <td> Reduced state tax amount </td> <td> yes </td> <td> NA </td> </tr> <tr> <td> base_reduced_tax </td> <td> Reduced state tax base amount </td> <td> yes </td> <td> NA </td> </tr> </table> | no       | NA      |
