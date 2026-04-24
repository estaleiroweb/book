# Scatter Plot

https://en.wikipedia.org/wiki/Scatter_plot

## O que é um gráfico de dispersão?

Um diagrama de dispersão (também conhecido como diagrama de dispersão) usa pontos para representar valores para duas variáveis ​​numéricas diferentes. A posição de cada ponto nos eixos horizontal e vertical indica valores para um ponto de dados individual. Os diagramas de dispersão são usados ​​para observar relações entre variáveis.

![Exemplo de gráfico de dispersão representando a altura das árvores em relação aos seus diâmetros.](https://wac-cdn.atlassian.com/dam/jcr:ec88db6d-cf1f-450e-8557-d24c3ef15a39/scatter-plot-example-1.png?cdnVersion=2744)

O gráfico de dispersão acima mostra os diâmetros e alturas de uma amostra de árvores fictícias. Cada ponto representa uma única árvore; a posição horizontal de cada ponto indica o diâmetro da árvore (em centímetros) e a posição vertical indica a altura da árvore (em metros). No gráfico, podemos observar uma correlação positiva geralmente estreita entre o diâmetro de uma árvore e sua altura. Também podemos observar um ponto atípico, uma árvore com diâmetro muito maior que as demais. Essa árvore parece bastante baixa para sua circunferência, o que pode justificar uma investigação mais aprofundada.

## Quando você deve usar um gráfico de dispersão

Os principais usos dos gráficos de dispersão são observar e mostrar relações entre duas variáveis ​​numéricas. Os pontos em um gráfico de dispersão não apenas relatam os valores de pontos de dados individuais, mas também padrões quando os dados são considerados como um todo.

A identificação de relações correlacionais é comum em gráficos de dispersão. Nesses casos, queremos saber, se recebêssemos um valor horizontal específico, qual seria uma boa previsão para o valor vertical. Frequentemente, você verá a variável no eixo horizontal denotada como variável independente e a variável no eixo vertical, como variável dependente. As relações entre variáveis ​​podem ser descritas de várias maneiras: positivas ou negativas, fortes ou fracas, lineares ou não lineares.

![Quatro exemplos de gráficos de dispersão mostrando diferentes tipos de relacionamentos entre variáveis.](https://wac-cdn.atlassian.com/dam/jcr:6a10e325-fdfb-41a2-96da-a66e29b99847/scatter-plot-example-2.png?cdnVersion=2744)

Um gráfico de dispersão também pode ser útil para identificar outros padrões nos dados. Podemos dividir os pontos de dados em grupos com base na proximidade dos conjuntos de pontos. Os gráficos de dispersão também podem mostrar se há lacunas inesperadas nos dados e se há pontos discrepantes. Isso pode ser útil se quisermos segmentar os dados em diferentes partes, como no desenvolvimento de personas de usuários.

![Exemplos de gráficos de dispersão mostrando grupos de dados, lacunas nos dados e valores discrepantes](https://wac-cdn.atlassian.com/dam/jcr:39a83cf4-957d-4b04-a4bc-c36c828967e3/scatter-plot-example-3.png?cdnVersion=2744)

### Exemplo de estrutura de dados

| #### DIÂMETRO | #### ALTURA |  |
| --- |  --- |  --- |
| 4.20 | 3.14 |  |
| --- |  --- |  --- |
| 5,55 | 3,87 |  |
| 3,33 | 2,84 |  |
| 6,91 | 4,34 |  |
| ... | ... |  |

Para criar um gráfico de dispersão, precisamos selecionar duas colunas de uma tabela de dados, uma para cada dimensão do gráfico. Cada linha da tabela se tornará um único ponto no gráfico, com posição de acordo com os valores das colunas.

## Problemas comuns ao usar gráficos de dispersão

### Sobreposição de plotagem

Quando temos muitos pontos de dados para plotar, isso pode levar ao problema de sobreposição de pontos. A sobreposição de pontos de dados ocorre quando os pontos de dados se sobrepõem a tal ponto que temos dificuldade em visualizar as relações entre pontos e variáveis. Pode ser difícil determinar a densidade dos pontos de dados quando muitos deles estão em uma área pequena.

Existem algumas maneiras comuns de atenuar esse problema. Uma alternativa é amostrar apenas um subconjunto de pontos de dados: uma seleção aleatória de pontos ainda deve fornecer uma ideia geral dos padrões nos dados completos. Também podemos alterar a forma dos pontos, adicionando transparência para permitir que as sobreposições sejam visíveis ou reduzindo o tamanho dos pontos para que ocorram menos sobreposições. Como uma terceira opção, podemos até escolher um tipo de gráfico diferente, como o  [mapa de calor](https://www.atlassian.com/data/charts/heatmap-complete-guide) , em que a cor indica o número de pontos em cada caixa. Mapas de calor, neste caso de uso, também são conhecidos como histogramas 2D.

![Exemplos de sobreplotagem resolvidos devido à amostragem, transparência ou um tipo de gráfico diferente](https://wac-cdn.atlassian.com/dam/jcr:cb351fea-bde3-4f20-8336-dfe21de36d95/scatter-plot-common-issues-1.png?cdnVersion=2744)

### Interpretando correlação como causalidade

Este não é tanto um problema com a criação de um gráfico de dispersão, mas sim com sua interpretação. O simples fato de observarmos uma relação entre duas variáveis ​​em um gráfico de dispersão não significa que mudanças em uma variável sejam responsáveis ​​por mudanças na outra. Isso dá origem à frase comum em estatística de que  [correlação não implica causalidade](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation) . É possível que a relação observada seja motivada por uma terceira variável que afete ambas as variáveis ​​plotadas, que o nexo causal seja invertido ou que o padrão seja simplesmente coincidente.

Por exemplo, seria errado analisar as estatísticas municipais quanto à quantidade de áreas verdes e ao número de crimes cometidos e concluir que uma causa a outra. Isso pode ignorar o fato de que cidades maiores, com mais pessoas, tendem a ter mais de ambos, e que ambos estão simplesmente correlacionados por esse e outros fatores. Se for necessário estabelecer um nexo causal, análises adicionais para controlar ou levar em conta outros potenciais efeitos variáveis ​​precisam ser realizadas, a fim de descartar outras possíveis explicações.

## Opções comuns de gráfico de dispersão

### Adicionar uma linha de tendência

Quando um gráfico de dispersão é usado para analisar uma relação preditiva ou correlacional entre variáveis, é comum adicionar uma linha de tendência ao gráfico, mostrando o melhor ajuste matemático aos dados. Isso pode fornecer um sinal adicional sobre a força da relação entre as duas variáveis ​​e se há algum ponto incomum que esteja afetando o cálculo da linha de tendência.

![Diagrama de dispersão de alturas e diâmetros de árvores com uma linha de tendência linear de melhor ajuste através dos pontos](https://wac-cdn.atlassian.com/dam/jcr:f8fa3f04-1ccf-4140-8a5a-0cb4b15ac92f/scatter-plot-options-1.png?cdnVersion=2744)

### Terceira variável categórica

Uma modificação comum do gráfico de dispersão básico é a adição de uma terceira variável. Os valores da terceira variável podem ser codificados modificando a forma como os pontos são plotados. Para uma terceira variável que indica valores categóricos (como região geográfica ou gênero), a codificação mais comum é por meio da cor do ponto. Atribuir a cada ponto uma tonalidade distinta facilita a identificação da pertença de cada ponto a um grupo específico.

![Gráfico de dispersão de alturas e diâmetros de árvores coloridos por tipo de árvore](https://wac-cdn.atlassian.com/dam/jcr:8e5b70ef-f66e-49f9-917c-6f6f7d5b37b5/scatter-plot-options-2.png?cdnVersion=2744)

A coloração dos pontos por tipo de árvore mostra que as Fersons (amarelas) são geralmente mais largas que as Miltons (azuis), mas também mais curtas para o mesmo diâmetro.

Outra opção que às vezes é vista para a codificação de terceira variável é a forma. Um problema potencial com a forma é que diferentes formas podem ter tamanhos e áreas de superfície diferentes, o que pode afetar a forma como os grupos são percebidos. No entanto, em certos casos em que a cor não pode ser usada (como em textos impressos), a forma pode ser a melhor opção para distinguir entre grupos.

![Um quadrado ou círculo parece menor que um triângulo ou uma cruz impressos com a mesma quantidade de área.](https://wac-cdn.atlassian.com/dam/jcr:3e6a4d73-b1d3-4c96-a807-23e5afdf40b4/symbol-size-scaling.png?cdnVersion=2744)

As formas acima foram dimensionadas para usar a mesma quantidade de tinta.

### Terceira variável numérica

Para terceiras variáveis ​​com valores numéricos, uma codificação comum consiste na alteração do tamanho do ponto. Um gráfico de dispersão com tamanho de ponto baseado em uma terceira variável, na verdade, tem um nome diferente:  [gráfico de bolhas](https://www.atlassian.com/data/charts/bubble-chart-complete-guide) . Pontos maiores indicam valores mais altos. Uma discussão mais detalhada sobre como os gráficos de bolhas devem ser construídos pode ser lida em seu próprio artigo.

![Gráfico de bolhas genérico onde uma relação positiva moderada é mostrada, mas bolhas maiores também tendem a ter posições mais altas.](https://wac-cdn.atlassian.com/dam/jcr:29e04dca-f440-4129-a94b-329f64aca61b/bubble-chart-example.png?cdnVersion=2744)

A matiz também pode ser usada para representar valores numéricos como outra alternativa. Em vez de usar cores distintas para pontos, como no caso categórico, queremos usar uma sequência contínua de cores, de modo que, por exemplo, cores mais escuras indiquem valores mais altos. Observe que, tanto para tamanho quanto para cor, uma legenda é importante para a interpretação da terceira variável, visto que nossos olhos são muito menos capazes de discernir tamanho e cor tão facilmente quanto a posição.

![Gráfico de dispersão com pontos coloridos por uma terceira variável, equivalente ao gráfico de bolhas acima.](https://wac-cdn.atlassian.com/dam/jcr:295b8ace-5a17-4536-9cc4-691fb0483214/scatter-plot-options-3.png?cdnVersion=2744)

### Destaque usando anotações e cores

Se você quiser usar um gráfico de dispersão para apresentar insights, pode ser uma boa ideia destacar pontos de interesse específicos por meio de anotações e cores. A dessaturação de pontos sem importância destaca os pontos restantes e fornece uma referência para comparação.

![Gráfico de dispersão dos pontos marcados pelos times da NFL na temporada 2018/19, destacando os times do Super Bowl NE e LAR.](https://wac-cdn.atlassian.com/dam/jcr:08abf804-b9a4-4dd0-a338-18f4365c480b/nfl-points-per-game-2018.png?cdnVersion=2744)

## Parcelas relacionadas

### Mapa de dispersão

Quando as duas variáveis ​​em um gráfico de dispersão são coordenadas geográficas -- latitude e longitude -- podemos sobrepor os pontos em um mapa para obter um mapa de dispersão (também conhecido como mapa de pontos). Isso pode ser conveniente quando o contexto geográfico é útil para extrair insights específicos e pode ser combinado com outras codificações de terceira variável, como tamanho do ponto e cor.

![Trecho do mapa da cólera de John Snow de 1854 com pontos coloridos indicando a localização das bombas de água.](https://wac-cdn.atlassian.com/dam/jcr:f4e2f9ee-6f23-42e2-843a-12b815abfa3d/snow-cholera-map.jpg?cdnVersion=2744)

Um exemplo famoso de mapa de dispersão é o mapa de surto de cólera de John Snow, de 1854, que mostra que os casos de cólera (barras pretas) estavam concentrados em uma bomba d'água específica na Broad Street (ponto central). Original: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Snow-cholera-map-1.jpg)

### Mapa de calor

Como observado acima, um  [mapa de calor](https://www.atlassian.com/data/charts/heatmap-complete-guide)  pode ser uma boa alternativa ao gráfico de dispersão quando há muitos pontos de dados a serem plotados e sua densidade causa problemas de sobreposição. No entanto, o mapa de calor também pode ser usado de forma semelhante para mostrar relações entre variáveis ​​quando uma ou ambas as variáveis ​​não são contínuas e numéricas. Se tentarmos representar valores discretos com um gráfico de dispersão, todos os pontos de um único nível estarão em uma linha reta. Os mapas de calor podem superar essa sobreposição por meio da categorização de valores em caixas de contagens.

![Mapa de calor mostrando a precipitação diária por mês para Seattle, 1998-2018](https://wac-cdn.atlassian.com/dam/jcr:8eec0cad-3c38-44f9-8634-88d266cb00cc/seattle-precip-heatmap.png?cdnVersion=2744)

### Gráfico de dispersão conectado

Se a terceira variável que queremos adicionar a um gráfico de dispersão indicar registros de tempo, um tipo de gráfico que podemos escolher é o gráfico de dispersão conectado. Em vez de modificar a forma dos pontos para indicar a data, usamos segmentos de linha para conectar as observações em ordem. Isso pode facilitar a visualização de como as duas variáveis ​​principais não apenas se relacionam, mas também como essa relação muda ao longo do tempo. Se o eixo horizontal também corresponder ao tempo, todos os segmentos de linha conectarão os pontos consistentemente da esquerda para a direita, e teremos um  [gráfico de linhas](https://www.atlassian.com/data/charts/line-chart-complete-guide) básico .

![Diagrama de dispersão genérico conectado mostrando a progressão diária do valor em dois eixos através de pontos conectados por linhas](https://wac-cdn.atlassian.com/dam/jcr:20e7b49f-b83d-42c7-b995-b1c85cb5bf57/connected-scatter-plot-example.png?cdnVersion=2744)

## Ferramentas de visualização

O gráfico de dispersão é um tipo de gráfico básico que pode ser criado por qualquer ferramenta ou solução de visualização. O cálculo de uma linha de tendência linear básica também é uma opção bastante comum, assim como a coloração de pontos de acordo com os níveis de uma terceira variável categórica. Outras opções, como linhas de tendência não lineares e a codificação de valores de terceira variável por formato, no entanto, não são tão comuns. Mesmo sem essas opções, o gráfico de dispersão pode ser um tipo de gráfico valioso para usar quando você precisa investigar a relação entre variáveis ​​numéricas em seus dados.

O gráfico de dispersão é um dos muitos tipos de gráficos que podem ser usados ​​para visualizar dados. Saiba mais em nossos artigos sobre [tipos essenciais de gráficos](https://www.atlassian.com/data/charts/essential-chart-types-for-data-visualization), [como escolher um tipo de visualização de dados](https://www.atlassian.com/data/charts/how-to-choose-data-visualization), ou navegando pela coleção completa de [artigos na categoria gráficos](https://www.atlassian.com/data/charts).
