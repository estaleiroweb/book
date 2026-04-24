# Métricas

Em Inteligência Artificial e Machine Learning, as métricas de avaliação são cruciais para entender o desempenho de um modelo. Elas nos permitem quantificar o quão bem o modelo está realizando a tarefa para a qual foi treinado. Abaixo estão as principais métricas de avaliação, seus conceitos, fórmulas em LaTeX e exemplos para cenários de classificação e regressão.

## Métricas de Classificação

Para métricas de classificação, é útil entender os conceitos de Verdadeiro Positivo (TP|VP), Verdadeiro Negativo (TN|VN), Falso Positivo (FP) e Falso Negativo (FN).

- **TP-Verdadeiro Positivo:** O modelo previu corretamente a classe positiva.
- **TN-Verdadeiro Negativo:** O modelo previu corretamente a classe negativa.
- **FP-Falso Positivo:** O modelo previu a classe positiva, mas a classe real era negativa (erro tipo I).
- **FN-Falso Negativo:** O modelo previu a classe negativa, mas a classe real era positiva (erro tipo II).

### 1. Acurácia (Accuracy)

- **Conceito:** A acurácia mede a proporção de previsões corretas em relação ao número total de previsões. É uma métrica intuitiva, mas pode ser enganosa em conjuntos de dados desequilibrados.
- **Fórmula:**
    $$
    \text{Acurácia} = \frac{\text{Previsões Corretas}}{\text{Total de Previsões}}
    $$
    $$
    \text{Acurácia} = \frac{TP + TN}{TP + TN + FP + FN}
    $$
- **Exemplo:** Imagine um modelo que classifica e-mails como "spam" ou "não spam". Se de 100 e-mails, ele acerta 90, sendo 80 spams corretamente identificados e 10 não spams corretamente identificados, a acurácia é $(80+10)/100 = 0.9$ ou 90%.

### 2. Precisão (Precision)

- **Conceito:** A precisão (também conhecida como Valor Preditivo Positivo) mede a proporção de previsões positivas corretas em relação ao total de previsões positivas feitas pelo modelo. É útil quando o custo de um Falso Positivo é alto.
- **Fórmula:**
    $$
    \text{Precisão} = \frac{TP}{TP + FP}
    $$
- **Exemplo:** No exemplo do spam, se o modelo identificou 80 spams corretamente (TP) e identificou 5 não spams como spam (FP), a precisão para a classe "spam" é $80 / (80 + 5) = 0.941$.

### 3. Recall (Revocação/Sensibilidade)

- **Conceito:** O recall (também conhecido como Sensibilidade ou Taxa de Verdadeiro Positivo) mede a proporção de previsões positivas corretas em relação a todas as instâncias positivas reais. É útil quando o custo de um Falso Negativo é alto.
- **Fórmula:**
    $$
    \text{Recall} = \frac{TP}{TP + FN}
    $$
- **Exemplo:** Se de 100 e-mails que *realmente* são spam, o modelo identificou 80 corretamente (TP) e 20 não foram identificados (FN), o recall para a classe "spam" é $80 / (80 + 20) = 0.8$.

### 4. F1-Score

- **Conceito:** O F1-Score é a média harmônica da precisão e do recall. Ele busca um equilíbrio entre as duas métricas e é particularmente útil quando há um desequilíbrio de classes.
- **Fórmula:**
    $$
    \text{F1-Score} = 2 \times \frac{\text{Precisão} \times \text{Recall}}{\text{Precisão} + \text{Recall}}
    $$
- **Exemplo:** Usando os valores de precisão (0.941) e recall (0.8) do exemplo anterior para a classe "spam", o F1-Score seria $2 \times (0.941 \times 0.8) / (0.941 + 0.8) \approx 0.865$.

### 5. Especificidade (Specificity)

- **Conceito:** A especificidade (também conhecida como Taxa de Verdadeiro Negativo) mede a proporção de previsões negativas corretas em relação a todas as instâncias negativas reais.
- **Fórmula:**
    $$
    \text{Especificidade} = \frac{TN}{TN + FP}
    $$
- **Exemplo:** Se de 50 e-mails que *realmente* não são spam, o modelo identificou 45 corretamente como não spam (TN) e 5 como spam (FP), a especificidade é $45 / (45 + 5) = 0.9$.

### 6. Curva AUC-ROC

- **Conceito:**
  - Separar TP de FP
    - >=1 -> Ótimo
    - 0.5 -> Aleatório
    - <=0.5 -> Ruim
  - **Curva ROC (Receiver Operating Characteristic):** É um gráfico que mostra o desempenho de um modelo de classificação em todos os limiares de classificação. Ele plota a Taxa de Verdadeiro Positivo (Recall) contra a Taxa de Falso Positivo (1 - Especificidade).
  - **AUC (Area Under the Curve):** É a área sob a curva ROC. Um AUC de 1.0 representa um classificador perfeito, enquanto um AUC de 0.5 representa um classificador aleatório. O AUC é uma métrica robusta para avaliar o desempenho geral do modelo, especialmente em conjuntos de dados desequilibrados.
- **Fórmula:** Não há uma fórmula única simples para AUC, pois ela é calculada pela integral da curva ROC.
    $$
    \text{AUC} = \int_0^1 \text{Recall}( \text{FPR}^{-1}(t) ) dt
    $$
    Onde FPR é a Taxa de Falso Positivo.
- **Exemplo:** Em um problema de detecção de doenças, um AUC de 0.9 indica que o modelo tem uma alta probabilidade de distinguir corretamente entre pacientes doentes e saudáveis.

### 7. Log Loss (Perda Logarítmica) / Perda de Entropia Cruzada

- **Conceito:** A Log Loss mede o desempenho de um modelo de classificação onde a saída da previsão é uma probabilidade entre 0 e 1. Ela penaliza as previsões erradas com alta confiança e é mais sensível do que a acurácia para previsões de probabilidade. Uma Log Loss menor indica um modelo melhor.
- **Fórmula:** Para classificação binária:
    $$
    \text{Log Loss} = - \frac{1}{N} \sum_{i=1}^{N} [y_i \log(p_i) + (1 - y_i) \log(1 - p_i)]
    $$
    Onde $N$ é o número de amostras, $y_i$ é a classe real (0 ou 1) e $p_i$ é a probabilidade prevista para a classe 1.
- **Exemplo:** Se um modelo prevê uma probabilidade de 0.9 para uma classe que é realmente 1, a contribuição para a Log Loss é $-\log(0.9)$. Se ele prevê 0.1 para uma classe que é realmente 1, a contribuição é $-\log(0.1)$, que é muito maior.

## Métricas de Regressão

Para problemas de regressão, o objetivo é prever um valor contínuo. As métricas avaliam a diferença entre os valores previstos e os valores reais.

### 1. Erro Absoluto Médio (MAE - Mean Absolute Error)

- **Conceito:** O MAE mede a média das diferenças absolutas entre os valores previstos e os valores reais. É uma métrica que fornece uma medida direta da magnitude dos erros, sem considerar a direção.
- **Fórmula:**
    $$
    \text{MAE} = \frac{1}{N} \sum_{i=1}^{N} |y_i - \hat{y}_i|
    $$
    Onde $N$ é o número de amostras, $y_i$ é o valor real e $\hat{y}_i$ é o valor previsto.
- **Exemplo:** Se você está prevendo preços de casas e um modelo erra em $10.000 para uma casa, $20.000 para outra, o MAE seria a média desses erros absolutos.

### 2. Erro Quadrático Médio (MSE - Mean Squared Error)

- **Conceito:** O MSE mede a média dos quadrados das diferenças entre os valores previstos e os valores reais. Ele penaliza erros maiores mais significativamente do que erros menores devido à quadratura.
- **Fórmula:**
    $$
    \text{MSE} = \frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2
    $$
    Onde $N$ é o número de amostras, $y_i$ é o valor real e $\hat{y}_i$ é o valor previsto.
- **Exemplo:** No exemplo dos preços de casas, se o modelo errou em $10.000 para uma e $20.000 para outra, o MSE seria $$(10000^2 + 20000^2)/2 = (100000000 + 400000000)/2 = 250000000$.

### 3. Raiz do Erro Quadrático Médio (RMSE - Root Mean Squared Error)

- **Conceito:** O RMSE é a raiz quadrada do MSE. Ele é interpretável na mesma unidade da variável de resposta, tornando-o mais fácil de entender do que o MSE. Assim como o MSE, ele penaliza erros maiores.
- **Fórmula:**
    $$
    \text{RMSE} = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (y_i - \hat{y}_i)^2}
    $$
    Onde $N$ é o número de amostras, $y_i$ é o valor real e $\hat{y}_i$ é o valor previsto.
- **Exemplo:** No exemplo anterior, o RMSE seria $\sqrt{250000000} \approx 15811.39$.

### 4. Coeficiente de Determinação (R-quadrado ou R²)

- **Conceito:** O R² mede a proporção da variância na variável dependente que é previsível a partir das variáveis independentes. Ele varia de 0 a 1, onde 1 indica que o modelo explica toda a variância da variável dependente, e 0 indica que o modelo não explica nenhuma variância. Valores negativos podem ocorrer se o modelo for pior que um modelo de linha de base que sempre prevê a média.
- **Fórmula:**
    $$
    R^2 = 1 - \frac{\sum_{i=1}^{N} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{N} (y_i - \bar{y})^2}
    $$
    Onde $N$ é o número de amostras, $y_i$ é o valor real, $\hat{y}_i$ é o valor previsto e $\bar{y}$ é a média dos valores reais.
- **Exemplo:** Um R² de 0.85 em um modelo de previsão de vendas indica que 85% da variabilidade nas vendas pode ser explicada pelo modelo.
