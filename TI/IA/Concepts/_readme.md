# Conceitos Básicos

## Precisão e exatidão

A precisão de uma medida diz respeito à dispersão dos dados. Se os dados estão muito concentrados, i.e., possuem um pequeno desvio padrão, dizemos que a medição é precisa. Se temos a média e mediana dos dados próximas do fitting teórico (do que é estimado teoricamente), dizemos que a medida possui exatidão. O diagrama abaixo expressa a conjugação dessas grandezas.

![Precisão e exatidão](https://i.pinimg.com/originals/82/47/fd/8247fdd4e0e8b4ca0b86f55a64e1291e.jpg)

O melhor é que a medida seja exata e precisa. Porém, entre precisão e exatidão, a exatidão é mais importante, pois apenas a precisão pode significar que todos os dados estão adulterados. Na Biologia, a medição correta dos dados trás precisão para o processo (distribuição normal ou gaussiana), e a escolha correta da amostragem, como discutido na primeira aula de Bioestatística, trás exatidão para a medição.

Esta aula busca dar a vocês uma base de Bioestatística mais que suficiente para compreender os gráficos e análises feitas nas seletivas e Olimpíadas Internacionais de Biologia. Espero que, a partir desta, possam compreender melhor a leitura de dados e identificar pesquisas ou conclusões enviesadas. Também pode ser útil para aqueles que busquem competir em outras olimpíadas de ciências.

## Estatística

- **Média Aritmética**
  - **Definição**: Soma de todos os valores dividida pelo número de observações.
  - **Fórmula**:
    $$
    \bar{x} = \frac{\sum_{i=1}^n x_i}{n}
    $$
  - **Exemplo**: Para dados $[2, 4, 6]$, $\bar{x} = \frac{2+4+6}{3} = 4$.
  - **Aplicação**: Medir o valor "central" em dados simétricos.
  - **Limitação**: Sensível a outliers (ex: média de $[1, 2, 100]$ é 34,3).
- **Mediana**
  - **Definição**: Valor central quando os dados são ordenados (50º percentil).
  - **Cálculo**:
    - Se $n$ é ímpar:
      $$
      \text{Mediana} = x_{\frac{n+1}{2}}
      $$
    - Se $n$ é par:
      $$
      \text{Mediana} = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}
      $$
  - **Exemplo**: Dados $[3, 1, 5, 4, 2]$ ordenados: $[1, 2, 3, 4, 5]$. Mediana = 3.
  - **Aplicação**: Melhor que a média para dados assimétricos (ex: renda familiar).
- **Moda**
  - **Definição**: Valor mais frequente no conjunto de dados.
  - **Exemplo**: Em $[2, 3, 3, 5, 7]$, a moda é 3.
  - **Tipos**:
    - **Unimodal**: Uma moda.
    - **Bimodal**: Duas modas (ex: $[2, 2, 3, 3]$).
    - **Amodal**: Sem moda (ex: $[1, 2, 3, 4]$).
  - **Aplicação**: Identificar categorias dominantes (ex: cor mais vendida).
- **Amplitude**
  - **Definição**: Diferença entre o maior e o menor valor.
  - **Fórmula**:
    $$
    \text{Amplitude} = \max(x_i) - \min(x_i)
    $$
  - **Exemplo**: Dados $[10, 20, 30]$, amplitude = $30 - 10 = 20$.
  - **Aplicação**: Medir dispersão simples (mas ignora a distribuição).
- **Variância**
  - **Definição**: Média dos quadrados das diferenças em relação à média.
  - **Fórmula** (variância populacional):
    $$
    \sigma^2 = \frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n}
    $$
  - **Fórmula** (variância amostral):
    $$
    s^2 = \frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1}
    $$
  - **Exemplo**:  
    Dados $[2, 4, 6]$, $\bar{x}=4$  
    Variância amostral = $\frac{(2-4)^2 + (4-4)^2 + (6-4)^2}{2} = \frac{4 + 0 + 4}{2} = 4$
- **Desvio-Padrão**
  - **Definição**: Raiz quadrada da variância (medida de dispersão na mesma unidade dos dados).
  - **Fórmula** (populacional):
    $$
    \sigma = \sqrt{\sigma^2}
    $$
  - **Exemplo**: Variância amostral = 4 → Desvio-padrão amostral = $\sqrt{4} = 2$.
  - **Aplicação**: Comparar dispersão entre conjuntos de dados.
- **Coeficiente de Variação (CV)**
  - **Definição**: Razão entre desvio-padrão e média (medida relativa de dispersão).
  - **Fórmula**:
    $$
    CV = \frac{\sigma}{\bar{x}} \quad \text{ou} \quad CV = \frac{s}{\bar{x}} \times 100\%
    $$
  - **Exemplo**: Se $\bar{x} = 10$ e $s = 2$, $CV = \frac{2}{10} \times 100\% = 20\%$.
  - **Aplicação**: Comparar variabilidade entre grupos com médias diferentes (ex: risco em investimentos).
- **Percentis**
  - **Definição**: Valor abaixo do qual uma certa porcentagem dos dados se encontra.
    - $P_{50}$ : é chamado de mediana, pois determina metade dos elementos do conjunto e o valor deste quartil é justamente o termo médio da sequência de elementos ordenada do conjunto, i.e., sua mediana;
    - $P_{25}$: Valor que separa os 25% menores dados, é chamado quartil inferior, pois define um subconjunto que representa os primeiros $1/4$ elementos do conjunto, delimitando também 75 dos elementos acima deste percentil;
    - $P_{75}$: é chamado quartil superior, pois define um subconjunto que representa os primeiros $3/4$  elementos do conjunto, delimitando também 25  dos elementos acima deste percentil.
  - **Fórmula**:
      $$
      P_k = x_{\left\lceil \frac{k(n+1)}{100} \right\rceil}
      $$
  - Assim, chamamos:
    - 1º quartil = $Q1$ (quartil inferior)
        $$
        Q1 = x_{\left\lceil \frac{25(n+1)}{100} \right\rceil}
        $$
    - 2º quartil = $Q2$ (mediana)
        $$
        Q2 = x_{\left\lceil \frac{50(n+1)}{100} \right\rceil}
        $$
    - 3º quartil = $Q3$ (quartil superior)
        $$
        Q3 = x_{\left\lceil \frac{75(n+1)}{100} \right\rceil}
        $$
  - **Exemplo**: Dados ordenados $[1, 2, 3, 4, 5]$, Q1 (25º percentil) = 2.
- **Escore Padronizado (Z-Score)**
  - **Definição**: Quantos desvios padrão um valor está acima/abaixo da média.
  - **Fórmula**:
    $$
    Z = \frac{x - \bar{x}}{s}
    $$
  - **Exemplo**: Se $x = 12$, $\bar{x} = 10$, $s = 2$, então $Z = \frac{12 - 10}{2} = 1$.
  - **Aplicação**: Identificar outliers (valores com $|Z| > 3$) ou comparar dados de escalas diferentes.
- **[P-valor (Valor-p)](p_valor.md)**
  - **Definição**: O **p-valor** O p-valor é a probabilidade de obter os resultados observados, ou resultados mais extremos, assumindo que a hipótese nula é verdadeira.
  - **Interpretação**:
    - $p-valor ≤ 0.05$: Rejeita a hipótese($H_0$) nula, indicando que o resultado é estatisticamente significativo.
    - $p-valor > 0.05$: Não rejeita a hipótese($H_0$) nula, indicando que o resultado pode ser devido ao acaso.Interpretação:
  - **Fórmula genérica**:
    $$
    p = P(\text{Teste estatístico} \geq \text{Valor observado} \mid H_0)
    $$

| **Medida**                  | **Resumo de Aplicações**                     |
| --------------------------- | -------------------------------------------- |
| **Média**                   | Dados simétricos, sem outliers.              |
| **Mediana**                 | Dados assimétricos ou com outliers.          |
| **Moda**                    | Dados categóricos ou para identificar picos. |
| **Amplitude**               | Dispersão rápida (mas superficial).          |
| **Desvio-Padrão**           | Dispersão absoluta em mesma unidade.         |
| **Coeficiente de Variação** | Comparar dispersão entre grupos.             |
| **Percentis**               | Analisar distribuição (ex: Q1, Q3, IQR).     |
| **Z-Score**                 | Padronizar dados ou detectar outliers.       |
| **P-valor**                 | Obter resultados extremos.                   |

![exemplo](https://i0.wp.com/noic.com.br/wp-content/uploads/2024/08/moda-media-e-mediana.jpg?resize=300%2C223&ssl=1)

### Relacionamento entre Z-Score e P-Valor

A técnica do Z-score e do p-valor são ferramentas estatísticas usadas para avaliar dados e determinar se uma observação se distancia significativamente da média (Z-score) e para avaliar a probabilidade de uma observação tão extrema ocorrer se a hipótese nula for verdadeira (p-valor).

Um Z-score extremo (muito acima ou muito abaixo da média) geralmente está associado a um p-valor pequeno (indicando que a observação é estatisticamente significativa).  
O p-valor é calculado com base no Z-score e na distribuição normal padrão.

### Para o Desvio-padrão

O $n−1$  surge devido à correção de Bessel, pois o valor $n$  é enviesado, porém não nos cabe aprofundar nisto agora. O desvio padrão pode ser representado em um gráfico por barras verticais ou horizontais saindo de cada ponto (medição), como no exemplo abaixo:

![e1](https://i0.wp.com/noic.com.br/wp-content/uploads/2024/08/grafico-de-erros.jpg?resize=768%2C349&ssl=1)
![e2](https://i0.wp.com/noic.com.br/wp-content/uploads/2024/08/Captura-de-tela-2024-08-08-201935.png?w=582&ssl=1)
