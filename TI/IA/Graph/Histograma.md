# Histograma

O histograma é uma representação gráfica que ilustra a distribuição de um conjunto de dados, permitindo visualizar a frequência das variáveis em intervalos específicos.

Comumente utilizado em estatísticas e [análise de dados](https://www.alura.com.br/artigos/analise-de-dados), o histograma facilita a identificação de padrões e tendências, tornando-se uma ferramenta essencial para profissionais de diversas áreas, como ciência, economia e engenharia.

Pensando nisso, o objetivo desse artigo é refletir sobre o que é e para quê serve um histograma e, principalmente, explorar seus principais tipos. Vamos lá?

## O que é histograma?

Um histograma é uma espécie de gráfico de barras que demonstra uma distribuição de frequências. No histograma, a base de cada uma das barras representa uma classe e a altura representa a quantidade ou frequência absoluta com que o valor de cada classe ocorre. Ao mesmo tempo, ele pode ser utilizado como um indicador de dispersão de processos.

## Exemplo de histograma

Esse é um exemplo de histograma:

![histograma 02 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-02-22.png)

Quando você precisa apresentar ou tirar conclusões de um grande conjunto de dados e está trabalhando com conceitos envolvendo frequências, sejam absolutas ou relativas, o histograma é o melhor caminho a se tomar. Ele nos auxilia com a representação gráfica dos conjuntos de dados de forma mais amigável, tornando mais fácil a visualização de onde a maioria dos valores se concentram.

## Para que serve um histograma

É útil construir um histograma quando você deseja:

### Resumir grandes conjuntos de dados de forma visual

Muitas vezes quando utilizamos tabelas não é tão fácil tirar conclusões. Nós podemos facilitar nosso trabalho e ganhar muito mais tempo e eficiência utilizando um histograma.

### Comparar os resultados

É possível, com o auxílio do histograma, rapidamente comparar os resultados e, com o auxílio do eixo y, conhecer, se houver, quais colunas ultrapassaram os limites que você precisava ou não.

### Comunicar as informações graficamente

Tanto as pessoas da sua equipe, quanto os clientes, podem ver facilmente os valores que ocorrem com mais frequência. Quando você usa um histograma para resumir grandes conjuntos de dados ou para comparar resultados você está utilizando uma poderosa ferramenta de comunicação.

Assim que coletamos os dados, o primeiro passo que vamos dar é obter o melhor entendimento deles, já que nosso cérebro pode ter dificuldade para compreender um extenso conjunto de dados de forma automática. Dessa forma, nossa missão é deixar a visualização dos dados mais inteligível e explícita.

## Funções do histograma

É aqui que entra o **histograma**, pois permitirá a obtenção das seguintes informações sobre o nosso processo:

- **Centralidade:** qual é o centro da distribuição? Onde é esperado que esteja a maioria das observações?

- **Amplitude:** a distribuição normalmente contém observações entre quais valores? Qual é o ponto de máximo e o ponto de mínimo?

- **Simetria:** será que devemos esperar a mesma frequência de pontos com valor alto e com valor baixo? Será que o processo é simétrico ou valores mais altos são mais raros?

## Qual é o objetivo de um histograma

Os histogramas às vezes são confundidos com gráficos de barras. Um histograma é usado para dados contínuos, em que os intervalos de classe representam a extensão dos dados. Já um gráfico de barra é um gráfico de variáveis categóricas ou discretas. Alguns autores recomendam que os gráficos de barras tenham espaços entre os retângulos para esclarecer a diferença.

O objetivo de um histograma é ilustrar como uma determinada amostra de dados ou população está distribuída, dispondo as informações de modo a facilitar a visualização da distribuição dos dados. Ao mesmo tempo, ressalta a localização do valor central e da distribuição dos dados em torno deste valor central.

Agora que já vimos o que é um histograma, será que eles serão sempre iguais, de um único tipo?

A resposta é não. Temos diferentes tipos de histogramas, e conhecê-los melhor pode fazer com que você ganhe tempo e eficiência na sua análise. Vamos explorar os principais tipos aqui.

## Tipos de histograma

Aqui estão os principais tipos de histograma:

### Simétrico

Um histograma simétrico (ou unimodal) centraliza os dados na média (medida central) e possui características por meio da distribuição da média e do desvio padrão. Uma característica do histograma simétrico é conter a partir do centro do gráfico o maior número de dados. Em estatística, este modelo é chamado de normal e permite analisar o quanto outros dados se afastam desse modelo.

![histograma 03 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-03-13.png)

### Distorcido à direita

Um histograma é distorcido à direita quando a distribuição de dados indica a ocorrência de altos valores com baixa frequência. Este modelo também é comumente chamado de modelo com "cauda à direita", pois ele vai "afinando" conforme percorremos o eixo x, indicando que a frequência vai diminuindo.

![histograma 04 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-04-12.png)

Portanto, se você se deparar com um gráfico desse tipo, rapidamente vai ser capaz de identificar o comportamento dos dados.

### Distorcido à esquerda

Dessa vez vamos chamar o histograma de distorcido à esquerda quando a frequência dos dados está concentrada nos altos valores, do lado esquerdo, conforme percorremos o eixo x. Podemos, então, também chamá-lo de histograma com "cauda à esquerda", pelo mesmo motivo anterior, já que à esquerda formamos uma espécie de cauda devido à baixa frequência dos dados no início. Observa-se que há mais informações acima da média devido a falta de simetria.

![histograma 05 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-05-11.png)

### Bimodal

Vamos chamar o histograma de bimodal quando há o aparecimento de dois picos. Dessa forma sabemos que em dois momentos diferentes há uma concentração de frequência que se destaca.

![histograma 06 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-06-7.png)

### **Multimodal**

Um histograma é multimodal quando há o aparecimento de vários picos. Os picos vão nos indicar o maior número de ocorrências.

![histograma 07 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-07-5.png)

### **Platô (Achatado)**

Muito tem se falado atualmente do "efeito platô". Essa palavra, "platô", nos remete a um certo tipo de achatamento, de igualdade constante dos dados. Um histograma tem o formato Platô quando suas barras têm praticamente as mesmas alturas. Isto ocorre quando existem várias distribuições juntas com médias diferentes.

![histograma 08 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-08-2.png)

## **Histograma no Python com Seaborn**

Para plotarmos um histograma com [Python](https://www.alura.com.br/artigos/python) vamos utilizar a biblioteca Pandas dentro de um notebook no Google Collab.

![histograma 09 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-09-1.png)

Imprimimos somente o cabeçalho, para facilitar a visualização.

Agora, vamos plotar o histograma para visualizar melhor a distribuição dos salários na nossa base de dados, utilizando outra biblioteca do Python conhecida como **seaborn**. Temos a opção de usar o código **sns.histplot** para trabalharmos com o histograma.

![histograma 10 #inset](https://cdn-wcsm.alura.com.br/2025/04/img-10.png)

Só de olharmos para a imagem do histograma somos capazes de identificar, rapidamente, que ele é do tipo distorcido à direita ( ou com cauda à direita). Isso nos indica que a maior parte da concentração dos dados está no início da distribuição.

Analisando os dados então, temos uma rápida e fácil visualização da concentração dos salários, que estão na sua maioria entre $50.000 e $100.000 dólares anuais.

Agora nós conseguimos analisar visualmente o comportamento da distribuição da frequência. Isso vai te ajudar a ganhar tempo e qualidade na análise.

## Como aprender mais sobre histograma

Para curiosos(as):

Se quiser saber mais sobre esse tema você pode consultar a formação de Estatística com Python: <https://cursos.alura.com.br/formacao-estatistica-python>

E também o curso de Data Analysis: Previsões com Google Sheets: <https://cursos.alura.com.br/course/data-analysis-previsoes-google-sheets>

Para conhecer mais sobre a biblioteca do seaborn para gerar histogramas consulte essa [documentação](https://seaborn.pydata.org/generated/seaborn.histplot.html).
