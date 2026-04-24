## P-valor (Valor-p)

### 1. Definição

O **p-valor** é a probabilidade de obter resultados tão ou mais extremos que os observados em um teste estatístico, **assumindo que a hipótese nula ($H_0$) é verdadeira**. Ele quantifica a evidência contra $H_0$:
- **P-valor baixo**: Forte evidência contra $H_0$ (sugere rejeitar $H_0$).
- **P-valor alto**: Pouca evidência contra $H_0$ (não rejeitar $H_0$).

![P-valor](https://calmariatempestade.wordpress.com/wp-content/uploads/2021/03/p-value_nhst.jpeg)

### 2. Interpretação

- **Comparação com o nível de significância ($\alpha$)**:
  - Se $p \leq \alpha$ (ex: 0,05), rejeita-se $H_0$.
  - Se $p > \alpha$, não há evidência suficiente para rejeitar $H_0$.
- **Exemplo**:
  - $p = 0,03$ e $\alpha = 0,05$ → Rejeita $H_0$.
  - $p = 0,12$ → Não rejeita $H_0$.

### 3. Exemplo Prático

**Contexto**: Teste se uma moeda é justa ($H_0: p = 0,5$) vs. tendenciosa ($H_1: p \neq 0,5$).
- **Experimento**: 10 lançamentos, 9 caras.
- **Cálculo do p-valor**: Probabilidade de obter **9 ou 10 caras** (resultados extremos) se a moeda for justa.
  $$
  P(X \geq 9) = \binom{10}{9}(0,5)^9(0,5)^1 + \binom{10}{10}(0,5)^{10} \approx 0,0107
  $$
- **Conclusão**: $p = 0,0107$ < 0,05 → Rejeita $H_0$ (moeda provavelmente tendenciosa).

### 4. Equívios Comuns

1. **Não é a probabilidade de $H_0$ ser verdadeira**:
   - O p-valor mede a probabilidade dos dados **dado $H_0$**, não a probabilidade de $H_0$ dado os dados.
2. **Não mede o tamanho do efeito**:
   - Um p-valor pequeno não significa que o efeito seja grande ou relevante (ex: em grandes amostras, efeitos mínimos podem ter $p < 0,05$).
3. **Não prova $H_1$**:
   - Rejeitar $H_0$ não confirma $H_1$; apenas indica que os dados são incompatíveis com $H_0$.

### 5. Limitações

- **Depende do tamanho amostral**: Amostras grandes podem gerar p-valores significativos para efeitos irrelevantes.
- **Não considera viés ou confundidores**: Resultados significativos podem ser falsos se houver problemas no desenho do estudo.
- **Não é uma medida de probabilidade direta**: Não responde "Qual a chance de $H_0$ ser verdadeira?".

### 6. Cálculo do P-valor

Depende do **teste estatístico** e da **distribuição sob $H_0$**:
- **Teste t**: Compara a estatística $t$ à distribuição t-Student.
- **Teste qui-quadrado**: Usa a distribuição qui-quadrado.
- **Teste exato de Fisher**: Usa hipergeometricidade.  
  ![Fisher](https://calmariatempestade.wordpress.com/wp-content/uploads/2021/02/figura-002.jpg)

**Fórmula genérica**:
$$
p = P(\text{Teste estatístico} \geq \text{Valor observado} \mid H_0)
$$

### 7. Boas Práticas

1. **Defina $\alpha$ antes do experimento** (ex: 0,05 ou 0,01).
2. **Relate o p-valor exato** (não apenas "p < 0,05").
3. **Combine com intervalos de confiança** para entender a magnitude do efeito.
4. **Evite "p-hacking"**: Não teste múltiplas hipóteses sem ajustar $\alpha$.

### 8. Alternativas Complementares

- **Intervalos de Confiança**: Mostram a precisão da estimativa.
- **Tamanho do Efeito** (ex: Cohen’s $d$): Mede a relevância prática.
- **Análise Bayesiana**: Calcula probabilidades diretamente sobre hipóteses.

## Exemplo de Aplicação

**Teste A/B**:
- **Hipótese**: Nova versão de um site ($B$) tem taxa de conversão maior que a atual ($A$).
- **Resultado**: $p = 0,04$ (com $\alpha = 0,05$).
- **Conclusão**: Rejeita-se $H_0$ (a diferença é estatisticamente significativa).

## Resumo

| **Aspecto**       | **Descrição**                               |
| ----------------- | ------------------------------------------- |
| **O que é**       | Probabilidade de dados extremos sob $H_0$.  |
| **Interpretação** | Rejeitar $H_0$ se $p \leq \alpha$.          |
| **Limitações**    | Sensível a tamanho amostral e viés.         |
| **Alternativas**  | Intervalos de confiança, análise Bayesiana. |
