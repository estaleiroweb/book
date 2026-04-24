# Correlação de Pearson

https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

A **Correlação de Pearson** ($r$) mede a **relação linear** entre duas variáveis quantitativas.
Ela varia de **-1** (correlação negativa perfeita) a **1** (correlação positiva perfeita), com **0** indicando ausência de relação linear.

É essencial para explorar relações lineares, mas requer cuidados com suposições e interpretação. Use-a junto com gráficos (e.g., scatter plots) e considere técnicas como **Spearman** para relações não lineares.

## **2. Fórmula**

A fórmula para calcular $r$ é:

$$
r = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^n (x_i - \bar{x})^2} \cdot \sqrt{\sum_{i=1}^n (y_i - \bar{y})^2}}
$$

Ou, de forma simplificada:

$$
r = \frac{\text{Covariância}(X, Y)}{\sigma_X \cdot \sigma_Y}
$$

Onde:
- $\bar{x}$ e $\bar{y}$: Médias de $X$ e $Y$.
- $\sigma_X$ e $\sigma_Y$: Desvios padrão de $X$ e $Y$.
- $\text{Covariância}(X, Y) = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})$.

## **3. Interpretação**

- correlação **Forte**: $0.8 ≤ |r| ≤ 1.0$
- correlação **Moderada**: $0.5 ≤ |r| < 0.8$
- correlação **Fraca**: $0.3 ≤ |r| < 0.5$
- correlação **Desprezível**: $0.0 ≤ |r| < 0.3$
- correlação **Perfeita**: $|r|=1.0$
- correlação **Nula**: $r=0.0$
- Correlação **Positiva**: $0 < r < 1$
- Correlação **Negativa**: $-1 < r < 0$

![Pearson](https://upload.wikimedia.org/wikipedia/commons/d/d4/Correlation_examples2.svg)

## **4. Teste de Hipótese**

Para verificar se a correlação é estatisticamente significativa:
- **Hipótese nula ($H_0$)**: $r = 0$ (não há correlação).
- **Estatística $t$** (teste t de Student):

$$
t = r \cdot \sqrt{\frac{n - 2}{1 - r^2}}
$$

- **Graus de liberdade**: $\text{gl} = n - 2$.
- Se $p$-valor < $\alpha$ (e.g., 0.05), rejeita-se $H_0$.

## **5. Aplicações**

- **Ciências Sociais**: Relacionar renda e escolaridade.
- **Medicina**: Analisar associação entre dose de medicamento e efeito.
- **Finanças**: Estudar correlação entre ações de empresas.

## **6. Suposições**

1. **Linearidade**: A relação entre $X$ e $Y$ deve ser linear.
2. **Homoscedasticidade**: Variância constante dos resíduos.
3. **Normalidade**: $X$ e $Y$ devem seguir distribuição normal (aproximadamente).

## **7. Limitações**

- **Sensível a outliers**: Um único outlier pode distorcer $r$.
- **Não captura relações não lineares**: Ex: $Y = X^2$ pode ter $r = 0$, mesmo com relação clara.
- **Correlação ≠ Causalidade**: Não implica que uma variável cause a outra.

## **8. Exemplo Prático**

**Dados**:

| $X$ | $Y$ |
|---------|---------|
| 1       | 2       |
| 2       | 4       |
| 3       | 5       |
| 4       | 4       |
| 5       | 6       |

**Cálculo**:
1. Médias: $\bar{x} = 3$, $\bar{y} = 4.2$.
2. Covariância:
   $$
   \text{Cov}(X,Y) = \frac{(1-3)(2-4.2) + \cdots + (5-3)(6-4.2)}{4} = 2.25
   $$
3. Desvios padrão: $\sigma_X = 1.58$, $\sigma_Y = 1.64$.
4. Correlação:
   $$
   r = \frac{2.25}{1.58 \cdot 1.64} \approx 0.87
   $$

**Interpretação**: Correlação positiva forte ($r = 0.87$).
