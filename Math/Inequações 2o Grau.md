# Inequações de 2º Grau (Quadráticas)

Uma inequação do 2º grau é qualquer expressão matemática que pode ser reduzida a uma das seguintes formas:

**Forma Geral**:

$$
ax^2 + bx + c < 0\\
ax^2 + bx + c \le 0\\
ax^2 + bx + c > 0\\
ax^2 + bx + c \ge 0
$$

Onde $a, b, c \in \mathbb{R}$ e $a \neq 0$.

Resolver essas inequações consiste em identificar para quais valores de $x$ a função quadrática $f(x) = ax^2 + bx + c$
assume valores positivos, negativos ou nulos.

## O Discriminante ($\Delta$), a Concavidade ($a$) e $f(x)$

O comportamento da parábola e a quantidade de interseções com o eixo $x$ dependem diretamente do sinal de $a$ e do valor do discriminante $\Delta = b^2 - 4ac$.

- **Sinal de $a$ (Concavidade):**

  | Sinal de $a$         | Concavidade | Boca                            | Representação                                           |
  | -------------------- | ----------- | ------------------------------- | ------------------------------------------------------- |
  | $a > 0$ ou $a \ge 0$ | p/ cima     | Feliz :slightly_smiling_face:   | <img src="imgs/inequacao_2grau_AP.svg" width="200px" /> |
  | $a < 0$ ou $a \le 0$ | p/ baixo    | Triste :slightly_frowning_face: | <img src="imgs/inequacao_2grau_AN.svg" width="200px" /> |
  
- **Valor de $\Delta$ (Interseção com o eixo $x$ idêntico a equação do 2º grau):**

  | Valor de $\Delta$ | Raízes Reais          | Comportamento da Curva                   |
  | ----------------- | --------------------- | ---------------------------------------- |
  | $\Delta > 0$      | 2 ($x_1 \neq x_2$)    | A curva cruza o eixo $x$ em dois pontos. |
  | $\Delta = 0$      | 1 ($x_1 = x_2$)       | A curva apenas tangencia o eixo $x$.     |
  | $\Delta < 0$      | 0 ($x = \varnothing$) | A curva não toca o eixo $x$.             |

- **Sinal de $f(x)$ (Inclui Zero ou não):**

  | Sinal de $f(x)$              | Marcador  | Raízes                   |
  | ---------------------------- | --------- | ------------------------ |
  | $f(x) > 0$ ou $f(x) < 0$     | ○ Aberto  | não pertencem à solução. |
  | $f(x) \ge 0$ ou $f(x) \le 0$ | ● Fechado | pertencem à solução.     |

- **Sinal de $f(x)$ (Positivo ou Negativo):**

  | Sinal de $f(x)$            | Solução                               | $f(x) \subset 0$                                          | $f(x) \not\subset 0$                                      |
  | -------------------------- | ------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
  | $f(x) > 0$ ou $f(x) \ge 0$ | Valores acima do eixo $x$ (Positivo)  | <img src="imgs/inequacao_2grau_fxP0.svg" width="200px" /> | <img src="imgs/inequacao_2grau_fxP1.svg" width="200px" /> |
  | $f(x) < 0$ ou $f(x) \le 0$ | Valores abaixo do eixo $x$ (Negativo) | <img src="imgs/inequacao_2grau_fxN0.svg" width="200px" /> | <img src="imgs/inequacao_2grau_fxN1.svg" width="200px" /> |

- **Resumo dos Cenários**:

  |              | $a>0, f(x) \neq 0$                                      | $a>0, f(x) \le\ge 0$                                    | $a<0, f(x) \neq 0$                                      | $a<0, f(x) \le\ge 0$                                    |
  | ------------ | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
  | $\Delta > 0$ | <img src="imgs/inequacao_2grau_01.svg" width="200px" /> | <img src="imgs/inequacao_2grau_07.svg" width="200px" /> | <img src="imgs/inequacao_2grau_04.svg" width="200px" /> | <img src="imgs/inequacao_2grau_09.svg" width="200px" /> |
  | $\Delta = 0$ | <img src="imgs/inequacao_2grau_02.svg" width="200px" /> | <img src="imgs/inequacao_2grau_08.svg" width="200px" /> | <img src="imgs/inequacao_2grau_05.svg" width="200px" /> | <img src="imgs/inequacao_2grau_10.svg" width="200px" /> |
  | $\Delta < 0$ | <img src="imgs/inequacao_2grau_03.svg" width="200px" /> | <img src="imgs/inequacao_2grau_03.svg" width="200px" /> | <img src="imgs/inequacao_2grau_06.svg" width="200px" /> | <img src="imgs/inequacao_2grau_06.svg" width="200px" /> |

## Passo a Passo para Resolução

Para mapear e resolver qualquer inequação do segundo grau, siga este fluxo analítico estruturado:

1. **Organização**: Garanta que todos os termos estejam de um lado da desigualdade, deixando o outro lado igual a zero (ex: $ax^2 + bx + c \ge 0$).
   $$
   ax^2 + bx \ge -c\\
   \text{Reorganizando} \\
   ax^2 + bx + c \ge 0
   $$
2. **Encontrar as Raízes**: Transforme temporariamente a inequação em uma equação de 2º grau ($ax^2 + bx + c = 0$) e calcule as raízes utilizando a fórmula de Bhaskara ou relações de Soma e Produto.
   $$
   ax^2 + bx + c = 0\\
   \Delta = b^2 - 4ac\\
   x = \frac{-b \pm \sqrt{\Delta}}{2a}
   $$
3. **Identificar a Concavidade**: Verifique o sinal do coeficiente $a$.
   - $a>0$ <img src="imgs/inequacao_2grau_AP.svg" width="200px" />
   - $a<0$ <img src="imgs/inequacao_2grau_AN.svg" width="200px" />
4. **Desenhar o Esboço do Varal**: Trace uma linha reta representando o eixo $x$, posicione as raízes encontradas e desenhe o comportamento da parábola.
   - Veja em cenários
5. **Definir o Intervalo da Solução**: Baseado no sinal pedido pela inequação original ($>$, $\ge$, $<$ ou $\le$), selecione o conjunto de intervalos corretos que respondem ao problema.
   - Veja em cenários

> **Atenção aos Sinais de Inclusão ($\le$ ou $\ge$):** > Lembre-se de utilizar **bolas cheias** (intervalo fechado) nos pontos críticos se a inequação incluir a igualdade, e **bolas vazias** (intervalo aberto) caso use desigualdades estritas ($<$ ou $>$).

## Cenários

Gráficos Vetoriais, Estudo de Sinais com exemplos práticos para cada cenário de $a$ e $\Delta$.

### Caso A: $a > 0$ e $\Delta > 0$ e ($f(x) > 0$ ou $f(x) \ge 0$)

|      $f(x)>0$      |     $f(x) \ge 0$     |
| :----------------: | :------------------: |
| $x^2 - 4x + 3 > 0$ | $x^2 - 4x + 3 \ge 0$ |

1. Organização: OK
2. Encontrar as Raízes ($\Delta > 0$: Duas Raízes Reais Distintas)
   - Transformando em equação: $x^2 - 4x + 3 = 0$
   - Fatorando: $(x - 1)(x - 3) = 0$
   - Raízes:
     - $x_1 = 1$
     - $x_2 = 3$
3. Identificar a Concavidade: $a > 0$ (parábola voltada para cima)
   <img src="imgs/inequacao_2grau_AP.svg" width="200px" />
5. Desenhar o Esboço do Varal: A parábola cruza o eixo $x$ em $x_1 = 1$ e $x_2 = 3$.
   - $f(x) > 0$: Sinal Positivo (Valores Acima do Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP1.svg" width="200px" />
   - $f(x) \ge 0$: Sinal Positivo ou Zero (Valores Acima do Eixo $x$ ou no Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP0.svg" width="200px" />
6. Definir o Intervalo da Solução:
   - O sinal da inequação $f(x)$ é positivo (Valores acima do eixo $x$), logo:
     - Para $f(x) > 0$ (não inclui Zero, raízes não pertencem à solução):
       - $]-\infty, 1[ \cup ]3, +\infty[$
       - $\{x \in \mathbb{R} \mid x < 1 \text{ ou } x > 3\}$
       - ![e](imgs/inequacao_2grau_caseA1.svg)
     - Para $f(x) \ge 0$ (inclui Zero, raízes pertencem à solução):
       - $]-\infty, 1] \cup [3, +\infty[$
       - $\{x \in \mathbb{R} \mid x \le 1 \text{ ou } x \ge 3\}$
       - ![e](imgs/inequacao_2grau_caseA2.svg)

### Caso B: $a > 0$ e $\Delta > 0$ e ($f(x) < 0$ ou $f(x) \le 0$)

|      $f(x)<0$      |     $f(x) \le 0$     |
| :----------------: | :------------------: |
| $x^2 - 6x + 5 < 0$ | $x^2 - 6x + 5 \le 0$ |

1. Organização: OK
2. Encontrar as Raízes ($\Delta > 0$: Duas Raízes Reais Distintas)
   - Transformando em equação: $x^2 - 6x + 5 = 0$
   - Fatorando: $(x - 1)(x - 5) = 0$ ou ...
     - $x_1 = 1$
     - $x_2 = 5$
   - Baskara:
     - $\Delta = (-6)^2 - 4 \cdot 1 \cdot 5 = 36 - 20 = 16$
     - $x_1 = \frac{6 - \sqrt{16}}{2} = \frac{6 - 4}{2} = 1$
     - $x_2 = \frac{6 + \sqrt{16}}{2} = \frac{6 + 4}{2} = 5$
3. Identificar a Concavidade: $a > 0$ (parábola voltada para cima)
   <img src="imgs/inequacao_2grau_AP.svg" width="200px" />
4. Desenhar o Esboço do Varal: A parábola cruza o eixo $x$ em $x_1 = 1$ e $x_2 = 5$.
   - $f(x) < 0$: Sinal Negativo (Valores Abaixo do Eixo $x$)
     <img src="imgs/inequacao_2grau_fxN1.svg" width="200px" />
   - $f(x) \le 0$: Sinal Negativo ou Zero (Valores Abaixo do Eixo $x$ ou no Eixo $x$)
     <img src="imgs/inequacao_2grau_fxN0.svg" width="200px" />
5. Definir o Intervalo da Solução:
   - O sinal da inequação $f(x)$ é negativo (Valores abaixo do eixo $x$), logo:
     - Para $f(x) < 0$ (não inclui Zero, raízes não pertencem à solução):
       - $]1, 5[$
       - $\{x \in \mathbb{R} \mid 1 < x < 5\}$
       - ![e](imgs/inequacao_2grau_caseB1.svg)
     - Para $f(x) \ge 0$ (inclui Zero, raízes pertencem à solução):
       - $]-\infty, 1] \cup [5, +\infty[$
       - $\{x \in \mathbb{R} \mid x \le 1 \text{ ou } x \ge 5\}$
       - ![e](imgs/inequacao_2grau_caseB2.svg)

### Caso C: $a < 0$ e $\Delta > 0$ e ($f(x) > 0$ ou $f(x) \ge 0$)

|      $f(x)>0$       |     $f(x) \ge 0$      |
| :-----------------: | :-------------------: |
| $-x^2 + 4x - 3 > 0$ | $-x^2 + 4x - 3 \ge 0$ |

1. Organização: OK
2. Encontrar as Raízes ($\Delta > 0$: Duas Raízes Reais Distintas)
   - Transformando em equação:
   - $-x^2 + 4x - 3 = 0 \Rightarrow x^2 - 4x + 3 = 0$
   - Fatorando: $(x - 1)(x - 3) = 0$
   - Raízes:
     - $x_1 = 1$
     - $x_2 = 3$
3. Identificar a Concavidade: $a < 0$ (parábola voltada para baixo)
   <img src="imgs/inequacao_2grau_AN.svg" width="200px" />
4. Desenhar o Esboço do Varal: A parábola cruza o eixo $x$ em $x_1 = 1$ e $x_2 = 3$.
   - $f(x) > 0$: Sinal Positivo (Valores Acima do Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP1.svg" width="200px" />
5. Definir o Intervalo da Solução:
   - O sinal da inequação $f(x)$ é positivo (Valores acima do eixo $x$), logo:
     - Para $f(x) > 0$ (não inclui Zero, raízes não pertencem à solução):
       - $\varnothing$
       - $\{x \in \mathbb{R} \mid \text{sem solução}\}$
       - ![e](imgs/inequacao_2grau_caseC1.svg)
     - Para $f(x) \ge 0$ (inclui Zero, raízes pertencem à solução):
       - $\{1, 3\}$
       - $\{x \in \mathbb{R} \mid x = 1 \text{ ou } x = 3\}$
       - ![e](imgs/inequacao_2grau_caseC2.svg)

### Caso D: $a < 0$ e $\Delta = 0$ e ($f(x) > 0$ ou $f(x) \ge 0$)

|      $f(x)>0$       |     $f(x) \ge 0$      |
| :-----------------: | :-------------------: |
| $-x^2 + 4x - 4 > 0$ | $-x^2 + 4x - 4 \ge 0$ |

1. Organização: OK
2. Encontrar as Raízes ($\Delta = 0$: Uma Raiz Real Repetida)
   - Transformando em equação: $-x^2 + 4x - 4 = 0$
   - Fatorando: $-(x^2 - 4x + 4) = 0 \Rightarrow -(x - 2)^2 = 0$
   - Raízes:
     - $x_1 = x_2 = 2$
3. Identificar a Concavidade: $a < 0$ (parábola voltada para baixo)
   <img src="imgs/inequacao_2grau_AN.svg" width="200px" />
4. Desenhar o Esboço do Varal: A parábola tangencia o eixo $x$ em $x_1 = x_2 = 2$.
   - $f(x) > 0$: Sinal Positivo (Valores Acima do Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP1.svg" width="200px" />
   - $f(x) \ge 0$: Sinal Positivo ou Zero (Valores Acima do Eixo $x$ ou no Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP0.svg" width="200px" />
5. Definir o Intervalo da Solução:
   - O sinal da inequação $f(x)$ é positivo (Valores acima do eixo $x$), logo:
     - Para $f(x) > 0$ (não inclui Zero, raízes não pertencem à solução):
       - $\varnothing$
       - $\{x \in \mathbb{R} \mid \text{sem solução}\}$
       - ![e](imgs/inequacao_2grau_05.svg)
     - Para $f(x) \ge 0$ (inclui Zero, raízes pertencem à solução):
       - $\{2\}$
       - $\{x \in \mathbb{R} \mid x = 2\}$
       - ![e](imgs/inequacao_2grau_10.svg)

### Caso E: $a < 0$ e $\Delta < 0$ e ($f(x) > 0$ ou $f(x) \ge 0$)

|       $f(x)>0$       |      $f(x) \ge 0$      |
| :------------------: | :--------------------: |
| $-2x^2 + 5x - 6 > 0$ | $-2x^2 + 5x - 6 \ge 0$ |

1. Organização: OK
2. Encontrar as Raízes ($\Delta < 0$: Nenhuma Raiz Real)
   - Transformando em equação: $-2x^2 + 5x - 6 = 0$
   - Fatorando: $-2x^2 + 5x - 6 = 0 \Rightarrow 2x^2 - 5x + 6 = 0$
   - Baskara:
     - $\Delta = (-5)^2 - 4 \cdot 2 \cdot 6 = 25 - 48 = -23 < 0$
     - Não há raízes reais.
3. Identificar a Concavidade: $a < 0$ (parábola voltada para baixo)
   <img src="imgs/inequacao_2grau_AN.svg" width="200px" />
4. Desenhar o Esboço do Varal: A parábola não cruza o eixo $x$.
   - $f(x) > 0$: Sinal Positivo (Valores Acima do Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP1.svg" width="200px" />
   - $f(x) \ge 0$: Sinal Positivo ou Zero (Valores Acima do Eixo $x$ ou no Eixo $x$)
     <img src="imgs/inequacao_2grau_fxP0.svg" width="200px" />
5. Definir o Intervalo da Solução:
   - Por se tratar de uma inequação sem raízes reais
     - a parábola não cruza o eixo $x$ não incorporando pontos de interseção
   - Com $a<0$, a boca para baixo
     - a curva permanece inteiramente abaixo do eixo $x$ (sinal negativo)
   - O sinal da inequação $f(x)$ é positivo (Valores acima do eixo $x$)
     - Não há valores acima do eixo $x$ para $f(x)$, logo:
       - $S=\varnothing$
       - $\{x \in \mathbb{R} \mid \text{sem solução}\}$
       - <img src="imgs/inequacao_2grau_fxP0.svg" width="200px" /> $\not\subset$ <img src="imgs/inequacao_2grau_06.svg" width="200px" />
