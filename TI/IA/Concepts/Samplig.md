# **Oversampling e Undersampling**

São técnicas de **balanceamento de classes** usadas em problemas de classificação com **dados desbalanceados** (quando uma classe é muito mais frequente que outra). Seu objetivo é melhorar o desempenho de modelos de Machine Learning, evitando viés em favor da classe majoritária.

- **Oversamplig**: Aumento da classe minoritária
- **Undersamplig**: Diminuição da classe majoritária

## **1. Oversampling**

- **Objetivo**: Aumentar a quantidade de exemplos da **classe minoritária** para equilibrar a distribuição das classes.
- **Como funciona**: Gera novos dados sintéticos ou replica exemplos existentes da classe minoritária.

**Métodos Comuns**:

1. **Random Oversampling**:
   - Duplica aleatoriamente exemplos da classe minoritária.
   - **Risco**: Pode causar *overfitting* (modelo memoriza exemplos repetidos).

2. **SMOTE (Synthetic Minority Over-sampling Technique)**:
   - Cria amostras sintéticas interpolando entre exemplos próximos da classe minoritária.
   - **Exemplo**: Se dois pontos da classe minoritária são \( A \) e \( B \), gera um novo ponto no segmento \( AB \).

3. **ADASYN (Adaptive Synthetic Sampling)**:
   - Similar ao SMOTE, mas foca em regiões onde a classe minoritária é mais escassa.

**Aplicações**:

- Quando a classe minoritária tem **poucos dados** (e.g., diagnóstico de doenças raras).
- Problemas onde erros na classe minoritária são críticos (e.g., detecção de fraudes).

## **2. Undersampling**

- **Objetivo**: Reduzir a quantidade de exemplos da **classe majoritária** para equilibrar a distribuição.
- **Como funciona**: Remove exemplos da classe majoritária, mantendo apenas os mais relevantes.

**Métodos Comuns**:

1. **Random Undersampling**:
   - Remove aleatoriamente exemplos da classe majoritária.
   - **Risco**: Pode perder informações importantes.

2. **Tomek Links**:
   - Remove exemplos da classe majoritária que estão próximos a exemplos da classe minoritária (elimina "casos ambíguos").

3. **Cluster Centroids**:
   - Agrupa a classe majoritária em clusters e substitui cada cluster por seu centroide.

**Aplicações**:

- Quando a classe majoritária tem **muitos dados redundantes**.
- Problemas com **grandes volumes de dados** (undersampling reduz custo computacional).

## **Quando Usar?**

| **Critério**               | **Oversampling**          | **Undersampling**          |
|----------------------------|---------------------------|----------------------------|
| **Tamanho do dataset**      | Ideal para datasets pequenos | Ideal para datasets grandes |
| **Risco de overfitting**    | Alto (se replicar dados)  | Baixo                      |
| **Preservação de dados**    | Mantém todos os dados      | Descarta dados             |

## **Exemplo Prático**

**Problema**: Classificação de transações financeiras (99% legítimas vs. 1% fraudulentas).
- **Oversampling**: Gera transações sintéticas fraudulentas (via SMOTE) para treinar o modelo a reconhecer padrões de fraude.
- **Undersampling**: Remove transações legítimas redundantes para focar em casos mais representativos.

## **Vantagens e Desvantagens**

| **Técnica**     | **Vantagens**                          | **Desvantagens**                          |
|------------------|----------------------------------------|--------------------------------------------|
| **Oversampling** | Mantém todos os dados originais        | Pode causar overfitting (se mal aplicado) |
| **Undersampling**| Reduz custo computacional              | Perde informações da classe majoritária   |

## **Técnicas Híbridas**

- **SMOTE + Tomek Links**: Combina geração de dados sintéticos (oversampling) com limpeza de ruídos (undersampling).
- **SMOTE-ENN**: Usa SMOTE seguido de *Edited Nearest Neighbors* para remover exemplos ambíguos.

## **Ferramentas**

- **Python**: Biblioteca `imbalanced-learn` (implementa SMOTE, ADASYN, Tomek Links, etc.).
- **Exemplo de código**:
  ```python
  from imblearn.over_sampling import SMOTE

  smote = SMOTE(sampling_strategy='minority')
  X_resampled, y_resampled = smote.fit_resample(X, y)
  ```

## **Conclusão**

- Use **oversampling** quando a classe minoritária é pequena e crítica.
- Use **undersampling** quando a classe majoritária tem redundância e o custo computacional é alto.
- Em muitos casos, combinar ambas ou usar validação cruzada estratificada pode ser a melhor abordagem.
