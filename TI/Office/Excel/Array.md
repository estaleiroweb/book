# Excel - Arrays

> Tradução de comandos: <https://www.doutoresdoexcel.com.br/traducao-de-formulas-excel/>

!!! info Referência
    
    - Referenciando uma célula que contém array `=[CELULA]#`
      > Ex: `=A1#`
    - Referenciando a células `=[CELULA_ini]:[CELULA_fim]`
      > Ex: `=A1:C10`

!!! info Constuindo Arrays

    - Linhas: `={1;2;3;4}`
      
      | C1  |
      | --- |
      | 1   |
      | 2   |
      | 3   |
      | 4   |

    - Colunas: `={1\2\3\4}`
      
      | c1  | c2  | c3  | c4  |
      | --- | --- | --- | --- |
      | 1   | 2   | 3   | 4   |
      
    - Matriz: `={1\2\3\4;5\6\7\8}`
      
      | c1  | c2  | c3  | c4  |
      | --- | --- | --- | --- |
      | 1   | 2   | 3   | 4   |
      | 5   | 6   | 7   | 8   |
      
!!! danger Onde não funciona

    Em objetos de Tabela (Table), Tabela Dinâmica (Pivot Table) ou Conexões (Conections) 
    o array não é populado ficando o erro `#SPILL!`

    Nestes casos pode ser usado o Poer Query

Aqui está uma lista de funções no Excel que trabalham com arrays, incluindo a sintaxe e uma breve explicação de cada uma:

1. **SORT**  
    **Sintaxe**: `SORT(array; [sort_index]; [sort_order]; [by_col])`  
    **Descrição**: Ordena o conteúdo de um array.  
    - `array`: O intervalo a ser ordenado.  
    - `sort_index`: A coluna ou linha pela qual classificar (opcional).  
    - `sort_order`: 1 para crescente, -1 para decrescente (opcional).  
    - `by_col`: TRUE para ordenar por colunas, FALSE para ordenar por linhas (opcional).

    **Exemplo**: 
    ```excel
    =SORT(A1#;;-1)
    ```

2. **UNIQUE**  
    **Sintaxe**: `UNIQUE(array; [by_col]; [exactly_once])`  
    **Descrição**: Retorna valores únicos de um array.  
    - `array`: O intervalo de dados.  
    - `by_col`: TRUE para avaliar valores por coluna, FALSE para linha (opcional).  
    - `exactly_once`: TRUE para retornar apenas valores que aparecem exatamente uma vez (opcional).

    **Exemplo**:
    ```excel
    =UNIQUE(A1#)
    ```

3. **TEXTSPLIT**  
    **Sintaxe**: `TEXTSPLIT(text; col_delimiter; [row_delimiter]; [ignore_empty]; [match_mode])`  
    **Descrição**: Divide um texto em um array com base em delimitadores.  
    - `text`: O texto a ser dividido.  
    - `col_delimiter`: Delimitador para colunas.  
    - `row_delimiter`: Delimitador para linhas (opcional).
    
    **Exemplo**: 
    ```excel
    =TEXTSPLIT("Dividindo as Colunas";" ")
    ```

4. **COUNTA**  
    **Sintaxe**: `COUNTA(value1; [value2]; ...)`  
    **Descrição**: Conta o número de células não vazias em um intervalo.  
    - `value1`: O primeiro intervalo ou valor.  
    - `value2`: Valores adicionais (opcional).

    **Exemplo**: 
    ```excel
    =COUNTA(A1#)
    ```

5. **INDEX**  
    **Sintaxe**: `INDEX(array; row_num; [column_num])`  
    **Descrição**: Retorna o valor de uma célula dentro de um array.  
    - `array`: O intervalo de dados.  
    - `row_num`: O número da linha a ser retornada.  
    - `column_num`: O número da coluna a ser retornada (opcional).

    **Exemplo**: 
    ```excel
    =INDEX(A1#;COUNTA(A1#))
    ```

6. **LARGE**  
    **Sintaxe**: `LARGE(array; k)`  
    **Descrição**: Retorna o k-ésimo maior valor de um array.  
    - `array`: O intervalo de dados.  
    - `k`: A posição do valor que você deseja (por exemplo, 1º, 2º maior).

    **Exemplo**: 
    ```excel
    =LARGE(A1#;SEQUENCE(5))
    ```

7. **SMALL**  
    **Sintaxe**: `SMALL(array; k)`  
    **Descrição**: Retorna o k-ésimo menor valor de um array.  
    - `array`: O intervalo de dados.  
    - `k`: A posição do valor que você deseja (por exemplo, 1º, 2º menor).

    **Exemplo**: 
    ```excel
    =SMALL(A1#;SEQUENCE(5))
    ```

8. **FILTER**  
    **Sintaxe**: `FILTER(array; include; [if_empty])`  
    **Descrição**: Filtra um array com base em uma condição.  
    - `array`: O intervalo de dados.  
    - `include`: A condição que o filtro deve atender.  
    - `if_empty`: Valor retornado se nenhum dado corresponder ao filtro (opcional).

    **Exemplo**: 
    ```excel
    =FILTER(A1#;(B1#>20000))+2
    ```

9. **SEQUENCE**  
    **Sintaxe**: `SEQUENCE(rows; [columns]; [start]; [step])`  
    **Descrição**: Gera um array de números sequenciais.  
    - `rows`: O número de linhas a serem geradas.  
    - `columns`: O número de colunas a serem geradas (opcional).  
    - `start`: O número inicial (opcional).  
    - `step`: O incremento entre os números (opcional).

    **Exemplo**: 
    ```excel
    =SEQUENCE(5)
    ```

10. **TRANSPOSE**  
    **Sintaxe**: `TRANSPOSE(array)`  
    **Descrição**: Transpõe as linhas e colunas de um array.  
    - `array`: O intervalo de dados a ser transposto.
    
    **Exemplo**: 
    ```excel
    =TRANSPOSE(A1#)
    ```

11. **MMULT**  
    **Sintaxe**: `MMULT(array1; array2)`  
    **Descrição**: Retorna o produto matricial de dois arrays.  
    - `array1`: O primeiro array (matriz).  
    - `array2`: O segundo array (matriz).
    
    **Exemplo**: 
    ```excel
    =MMULT(A1:B2;A4:B5)
    ```

12. **XMATCH**  
    **Sintaxe**: `XMATCH(lookup_value; lookup_array; [match_mode]; [search_mode])`  
    **Descrição**: Retorna a posição de um valor em um array.  
    - `lookup_value`: O valor a ser procurado.  
    - `lookup_array`: O intervalo de dados onde procurar.  
    - `match_mode`: Tipo de correspondência: exata ou aproximação (opcional).  
    - `search_mode`: Ordem de pesquisa (opcional).

    **Exemplo**:
    ```excel
    =INDEX(A2:A54;XMATCH(P2;O2#))
    ```

13. **RANDARRAY**  
    **Sintaxe**: `RANDARRAY([rows]; [columns]; [min]; [max]; [whole_number])`  
    **Descrição**: Gera uma matriz de números aleatórios.  
    - `rows`: Número de linhas a serem geradas (opcional).  
    - `columns`: Número de colunas a serem geradas (opcional).  
    - `min`: O valor mínimo (opcional).  
    - `max`: O valor máximo (opcional).  
    - `whole_number`: TRUE para gerar inteiros (opcional).

    **Exemplo**:
    ```excel
    =RANDARRAY(3;2)
    ```

14. **SORTBY**  
    **Sintaxe**: `SORTBY(array; by_array1; [sort_order1]; ...)`  
    **Descrição**: Ordena um array com base em outro array.  
    - `array`: O intervalo a ser ordenado.  
    - `by_array1`: O intervalo pelo qual classificar.  
    - `sort_order1`: 1 para crescente, -1 para decrescente (opcional).

    **Exemplo**:
    ```excel
    =SORTBY(A1#;B1#)
    ```

15. **OFFSET**  
    **Sintaxe**: `OFFSET(reference; rows; cols; [height]; [width])`  
    **Descrição**: Retorna um intervalo deslocado de uma referência.  
    - `reference`: A célula ou intervalo inicial.  
    - `rows`: O número de linhas para deslocar.  
    - `cols`: O número de colunas para deslocar.  
    - `height`: Altura do intervalo (opcional).  
    - `width`: Largura do intervalo (opcional).

    **Exemplo**:
    ```excel
    =OFFSET(A1;;;2;2)
    ```

16. **ARRAYTOTEXT**  
    **Sintaxe**: `ARRAYTOTEXT(array; [format])`  
    **Descrição**: Converte um array em texto.  
    - `array`: O intervalo de dados.  
    - `format`: 0 para formato conciso, 1 para formato completo (opcional).
      - 0: Padrão, saída com aspas para textos e sem aspas para números (padrão).
      - 1: Exibe o array em um formato mais legível, incluindo todos os valores com aspas e preservando o formato.

    **Exemplo**:

    |     | A   | B            |
    | --- | --- | ------------ |
    | #1  | 1   | Caixa de Som |
    | #2  | 2   | Chip         |
    | #3  | 3   | Smartwatch   |

    ```excel
    =ARRAYTOTEXT(A1:B3; 0)
    ```
    > `1; Caixa de Som; 2; Chip; 3; Smartwatch`

    ```excel
    =ARRAYTOTEXT(A1:B3; 1)
    ```
    > `{1\"Caixa de Som";2\"Chip";3\"Smartwatch"}`

17. **ISNUMBER**  
    **Sintaxe**: `ISNUMBER(value)`  
    **Descrição**: Verifica se um valor é numérico e retorna TRUE ou FALSE.  
    - `value`: O valor a ser verificado.

    **Exemplo**:
    ```excel
    =ISNUMBER(A1#)
    ```

18. **PRODUCT**  
    **Sintaxe**: `PRODUCT(number1; [number2]; ...)`  
    **Descrição**: Retorna o produto de um array de números.  
    - `number1`: O primeiro número ou intervalo.  
    - `number2`: Valores adicionais (opcional).

    **Exemplo**:
    ```excel
    =PRODUCT(A1#)
    ```

19. **CHOOSE**  
    **Sintaxe**: `CHOOSE(index_num; value1; [value2]; ...)`  
    **Descrição**: Retorna um valor de uma lista com base no índice.  
    - `index_num`: O índice que especifica qual valor escolher.  
    - `value1`: O primeiro valor.  
    - `value2`: Valores adicionais (opcional).

    **Exemplo**:
    ```excel
    =CHOOSE(1;A1,A2)
    ```

20. **IF**  
    **Sintaxe**: `IF(logical_test; value_if_true; value_if_false)`  
    **Descrição**: Retorna um valor se a condição for TRUE, outro valor se for FALSE.  
    - `logical_test`: A condição a ser avaliada.  
    - `value_if_true`: Valor se a condição for verdadeira.  
    - `value_if_false`: Valor se a condição for falsa.

    **Exemplo**:
    ```excel
    =IF(N3:N19>2000;1;0)
    ```

21. **TEXTJOIN**  
    **Sintaxe**: `TEXTJOIN(delimiter; ignore_empty; text1; [text2]; ...)`  
    **Descrição**: Combina texto de várias células em uma só, com um delimitador especificado.  
    - `delimiter`: O separador entre os textos combinados.  
    - `ignore_empty`: TRUE para ignorar células vazias, FALSE para incluí-las.  
    - `text1, text2, ...`: Os textos a serem concatenados.

    **Exemplo**: Combina os textos das células A1 a A5, separando-os com uma vírgula e um espaço, ignorando células vazias.
    ```excel
    =TEXTJOIN(", "; TRUE; A1:A5)
    ```

22. **COUNTIF**  
    **Sintaxe**: `COUNTIF(range; criteria)`  
    **Descrição**: Conta o número de células em um intervalo que atendem a um critério.  
    - `range`: O intervalo de células a ser avaliado.  
    - `criteria`: O critério a ser aplicado.

    **Exemplo**: Conta o número de células no intervalo A1:A10 cujo valor é maior que 5.
    ```excel
    =COUNTIF(A1:A10; ">5")
    ```

23. **CHOOSEROWS**  
    **Sintaxe**: `CHOOSEROWS(array; row_num1; [row_num2]; ...)`  
    **Descrição**: Retorna linhas específicas de um array.  
    - `array`: O intervalo de dados.  
    - `row_num1, row_num2, ...`: O número das linhas a serem retornadas.

    **Exemplo**: Retorna a primeira e a terceira linha do intervalo A1:C5.
    ```excel
    =CHOOSEROWS(A1:C5; 1; 3)
    ```

24. **ROWS**  
    **Sintaxe**: `ROWS(array)`  
    **Descrição**: Retorna o número de linhas em um array ou intervalo.  
    - `array`: O intervalo de dados.

    **Exemplo**: Retorna 5, pois o intervalo A1:C5 tem 5 linhas.
    ```excel
    =ROWS(A1:C5)
    ```

25. **COLUMNS**  
    **Sintaxe**: `COLUMNS(array)`  
    **Descrição**: Retorna o número de colunas em um array ou intervalo.  
    - `array`: O intervalo de dados.

    **Exemplo**: Retorna 3, pois o intervalo A1:C5 tem 3 colunas.
    ```excel
    =COLUMNS(A1:C5)
    ```

26. **TOCOL**  
    **Sintaxe**: `TOCOL(array; [ignore])`  
    **Descrição**: Converte um array em uma única coluna.  
    - `array`: O intervalo de dados.  
    - `ignore`: Especifica se deve ignorar valores vazios (opcional).

    **Exemplo**: Converte o intervalo A1:C3 em uma única coluna.
    ```excel
    =TOCOL(A1:C3)
    ```

27. **WRAPCOLS**  
    **Sintaxe**: `WRAPCOLS(array; wrap_count)`  
    **Descrição**: Converte um array em várias colunas, com base no número especificado de elementos por coluna.  
    - `array`: O intervalo de dados.  
    - `wrap_count`: O número de elementos por coluna.

    **Exemplo**: Converte o intervalo A1:A10 em colunas, com 3 elementos por coluna.
    ```excel
    =WRAPCOLS(A1:A10; 3)
    ```

28. **XLOOKUP**  
    **Sintaxe**: `XLOOKUP(lookup_value; lookup_array; return_array; [if_not_found]; [match_mode]; [search_mode])`  
    **Descrição**: Procura por um valor em um intervalo e retorna um valor correspondente de outro intervalo.  
    - `lookup_value`: O valor a ser procurado.  
    - `lookup_array`: O intervalo onde buscar o valor.  
    - `return_array`: O intervalo de onde retornar o valor correspondente.  
    - `if_not_found`: Valor retornado se não for encontrado (opcional).  
    - `match_mode`: Tipo de correspondência (exata ou aproximada, opcional).  
    - `search_mode`: Ordem de pesquisa (opcional).

    **Exemplo**: Procura "Produto1" no intervalo A1:A10 e retorna o valor correspondente do intervalo B1:B10.
    ```excel
    =XLOOKUP("Produto1"; A1:A10; B1:B10)
    ```

29. **VLOOKUP**  
    **Sintaxe**: `VLOOKUP(lookup_value; table_array; col_index_num; [range_lookup])`  
    **Descrição**: Procura um valor na primeira coluna de um intervalo e retorna um valor de outra coluna na mesma linha.  
    - `lookup_value`: O valor a ser procurado.  
    - `table_array`: O intervalo de dados.  
    - `col_index_num`: O número da coluna a ser retornado.  
    - `range_lookup`: TRUE para correspondência aproximada, FALSE para exata (opcional).

    **Exemplo**: Procura "Produto1" no intervalo A1:A10 e retorna o valor da 3ª coluna correspondente.
    ```excel
    =VLOOKUP("Produto1"; A1:C10; 3; FALSE)
    ```

30. **HLOOKUP**  
    **Sintaxe**: `HLOOKUP(lookup_value; table_array; row_index_num; [range_lookup])`  
    **Descrição**: Procura um valor na primeira linha de um intervalo e retorna um valor de outra linha na mesma coluna.  
    - `lookup_value`: O valor a ser procurado.  
    - `table_array`: O intervalo de dados.  
    - `row_index_num`: O número da linha a ser retornada.  
    - `range_lookup`: TRUE para correspondência aproximada, FALSE para exata (opcional).
    **Exemplo**: Procura "Janeiro" na primeira linha do intervalo A1:E5 e retorna o valor da 3ª linha correspondente.
    ```excel
    =HLOOKUP("Janeiro"; A1:E5; 3; FALSE)
    ```

31. **LOOKUP**  
    **Sintaxe**: `LOOKUP(lookup_value; lookup_vector; [result_vector])`  
    **Descrição**: Procura um valor em um intervalo e retorna um valor de outro intervalo (ou da mesma linha).  
    - `lookup_value`: O valor a ser procurado.  
    - `lookup_vector`: O intervalo onde buscar o valor.  
    - `result_vector`: O intervalo de onde retornar o valor correspondente (opcional).

    **Exemplo**: Procura o valor mais próximo de 10 no intervalo A1:A10 e retorna o valor correspondente de B1:B10.
    ```excel
    =LOOKUP(10; A1:A10; B1:B10)
    ```

32. **FILTERXML**  
    **Sintaxe**: `FILTERXML(xml_data; xpath)`
    **Descrição**: Extrai dados de uma string XML usando uma expressão XPath. Se o XPath resultar em múltiplos nós, o **FILTERXML** retornará esses valores como um array.
    - `xml_data`: A string XML de onde os dados serão extraídos.
    - `xpath`: A expressão XPath usada para selecionar os dados.

    **Exemplo**:  
    Vamos supor que você tenha uma string XML na célula `A1` como:

    ```xml
    <root>
    <item>Apple</item>
    <item>Banana</item>
    <item>Orange</item>
    </root>
    ```

    Para extrair todos os elementos `<item>`, podemos usar a função **FILTERXML**:

    ```excel
    =FILTERXML(A1; "//item")
    ```
    > `Apple`
    >
    > `Banana`
    >
    > `Orange`

    Se você quiser usar esses valores em outras fórmulas que aceitam arrays, como por exemplo `TEXTJOIN`:

    ```excel
    =TEXTJOIN(", "; TRUE; FILTERXML(A1; "//item"))
    ```
    > `Apple, Banana, Orange`

33. **GROUPBY**  
    **Sintaxe**: `GROUPBY(array; group_by_column; [aggregate_column1]; [aggregate_column2]; ...)`  
    **Descrição**: Agrupa dados em um array com base em uma ou mais colunas e aplica funções agregadas nos dados agrupados. Retorna uma tabela que resume os dados.

    - `array`: O intervalo ou array de dados que você deseja agrupar.
    - `group_by_column`: A coluna que você deseja usar para agrupar os dados.
    - `aggregate_column`: Colunas adicionais cujos valores você deseja agregar (ex: soma, média, contagem).

    **Exemplo**:  
    Suponha que você tenha uma tabela de vendas nas células `A1:C4`:

    | Produto | Vendedor | Vendas |
    |---------|----------|--------|
    | Maçã   | Ana      | 10     |
    | Banana | Ana      | 20     |
    | Maçã   | João     | 15     |
    | Banana | João     | 25     |

    Para agrupar as vendas por vendedor e somar as vendas, você pode usar:

    ```excel
    =GROUPBY(A1:C4; B1:B4; SUM(C1:C4))
    ```

    Isso retornará uma tabela com o total de vendas por vendedor.

34. **PIVOTBY**  
    **Sintaxe**: `PIVOTBY(array; rows; columns; [values]; [aggregate_function])`  
    **Descrição**: Cria uma tabela dinâmica a partir de um array, permitindo agregar dados em múltiplas dimensões.

    - `array`: O intervalo ou array que você deseja resumir.
    - `rows`: As colunas que você deseja usar como linhas na tabela dinâmica.
    - `columns`: As colunas que você deseja usar como colunas na tabela dinâmica.
    - `values`: Os valores que você deseja agregar.
    - `aggregate_function`: A função que você deseja aplicar aos valores agregados (opcional, padrão é SOMA).

    **Exemplo**:  
    Usando a mesma tabela de vendas:

    ```excel
    =PIVOTBY(A1:C4; B1:B4; A1:A4; C1:C4; SUM)
    ```

    Isso criará uma tabela onde as linhas são os vendedores, as colunas são os produtos, e as células mostram o total de vendas.

35. **LET**  
    **Sintaxe**: `LET(name1; value1; [name2]; [value2]; ...; calculation)`  
    **Descrição**: A função **LET** permite que você atribua nomes a cálculos intermediários, melhorando a legibilidade e o desempenho. 

    - `name`: O nome a ser atribuído.
    - `value`: O valor que será atribuído ao nome.
    - `calculation`: O cálculo final que usa os nomes definidos.

    **Exemplo**:  
    Se você quiser calcular a média de uma série de números e usar essa média em outras operações:

    ```excel
    =LET(x; A1:A10; média; AVERAGE(x); média * 2)
    ```
