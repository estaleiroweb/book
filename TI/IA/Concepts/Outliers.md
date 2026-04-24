# Outliers

A detecção de outliers é essencial para garantir a qualidade dos dados e a robustez dos modelos. Escolha o método com base na natureza dos dados (univariados/multivariados, distribuição) e no contexto do problema. Sempre valide os resultados com domain knowledge!

![outlier1](https://i0.wp.com/noic.com.br/wp-content/uploads/2024/08/boxplot.png?resize=768%2C516&ssl=1)

![outlier2](https://i0.wp.com/noic.com.br/wp-content/uploads/2024/08/outliers.jpg?resize=768%2C360&ssl=1)

![outlier3](https://i0.wp.com/noic.com.br/wp-content/uploads/2024/08/outliers-gaussiana.jpg?resize=768%2C498&ssl=1)

## 1. O que são Outliers?

**Definição**: Pontos de dados que se desviam significativamente da distribuição geral do conjunto de dados.
**Impacto**: Podem distorcer análises estatísticas e prejudicar modelos de Machine Learning.

## 2. Métodos de Detecção

- Método Supervisionado
  - Z-score
  - Intervalo Interquartil (IQR)
  - K-Nearest Neighbors (KNN)
  - Árvore de Decisão
  - Floresta Aleatória
  - Máquina de Vetores de Suporte (SVM)
- Método Semisupervisionado
  - Agrupamento (Clustering)
- Método Não Supervisionado
  - K-Means
  - DBSCAN
  - Floresta de Isolamento
  - Autoencoder

---

- Métodos Estatísticos
  - **Z-Score**:
    - **Fórmula**:
      $$
      Z = \frac{x - \mu}{\sigma}
      $$
      Onde \( \mu \) = média e \( \sigma \) = desvio padrão.
    - **Regra**: Valores com \( |Z| > 3 \) são considerados outliers.
    - **Aplicação**: Dados normalmente distribuídos.
  - **Intervalo Interquartil (IQR)**:
    - **Fórmula**:
      $$
      \text{IQR} = Q3 - Q1
      $$
      Outliers: \( x < Q1 - 1.5 \cdot \text{IQR} \) ou \( x > Q3 + 1.5 \cdot \text{IQR} \).
    - **Aplicação**: Dados não normais ou assimétricos.
- Métodos Baseados em Machine Learning**
  - Isolation Forest
  - DBSCAN (Density-Based Spatial Clustering)
- Métodos Baseados em Distância
  - K-NN (K-Vizinhos Mais Próximos)/KNN (K-Nearest Neighbors)
  - **LOF (Local Outlier Factor)**:
    - **Funcionamento**: Compara a densidade local de um ponto com a de seus vizinhos.
    - **Saída**: Pontos com LOF \( \gg 1 \) são outliers.

## 3. Visualização para Detecção

- **[Box Plot](Graph_BoxPlot.md)**: Mostra quartis e outliers (pontos além dos "bigodes").
- **[Scatter Plot](Graph_ScatterPlot.md)**: Útil para identificar outliers em 2D.
- **[Histograma](Graph_Histograma.md)**: Revela caudas longas ou picos incomuns.

## 4. Quando Usar Cada Método?

| **Método**          | **Cenário**                                  |
|----------------------|---------------------------------------------|
| **Z-Score**          | Dados normais e univariados.                |
| **IQR**              | Dados assimétricos ou com distribuição desconhecida. |
| **Isolation Forest** | Dados multivariados e de alta dimensão.     |
| **DBSCAN**           | Dados espaciais ou com clusters naturais.   |
| **LOF**              | Quando outliers estão em regiões de baixa densidade. |

## 5. Desafios

- **Falsos positivos**: Métodos podem classificar dados raros, porém válidos, como outliers.
- **Dados multivariados**: Outliers podem não ser detectados em análises univariadas.
- **Escolha de hiperparâmetros**: Ex: `contamination` no Isolation Forest ou `eps` no DBSCAN.

## 6. Quando Remover Outliers?

- **Remova**: Se forem erros de medição ou irrelevantes (ex: idade = 200 anos).
- **Mantenha**: Se representarem eventos críticos (ex: fraudes, falhas raras).

## 7. Ferramentas Úteis Python

- `scikit-learn`
- `pyod` (especializada em outliers)
- `seaborn` (visualização).
