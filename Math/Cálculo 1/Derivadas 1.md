# Derivadas

$$
f(x) = ax + b \quad (a \neq 0)
$$

- (a): coeficiente angular (inclinação da reta)
  - Representa o Tangente da inclinação da reta
  - Declividade
  - Taxa de variação de $y$ em relação a $x$ (razão)
  - $a = \frac{\Delta y}{\Delta x}$
  - $a = \tan{\alpha}$
  - $a = \frac{y-y_0}{x-x_0}$
  ![a](https://blog-hlg.professorferretto.dev.br/wp-content/uploads/2020/02/coeficiente-angular-positivo.jpg)
  ![a](https://blog-hlg.professorferretto.dev.br/wp-content/uploads/2020/02/coeficiente-angular-negativo-.jpg)
  ![a](https://blog-hlg.professorferretto.dev.br/wp-content/uploads/2020/02/coeficiente-angular-pela-tangente-do-angulo.png)
- (b): coeficiente linear ou ordenada (onde corta o eixo Y ou “altura inicial”)

  <img width="200px" src="https://static.preparaenem.com/2022/12/coeficiente-linear.jpg" />

Inclinação: $\alpha$

<table><tr><td>

$$
a = \tan{\alpha} =
\frac{\Delta y}{\Delta x} =
\frac{y-y_0}{x-x_0}\\
\text{logo...}\\
a=\tan{(45\degree)}=1
$$

</td><td>

![g](https://blog-hlg.professorferretto.dev.br/wp-content/uploads/2020/02/reta-com-angulo-de-inclinacao-em-destaque.jpg)

</td></tr></table>

## Equacionando

Temos:

- $P$: Ponto em que a reta passa
- $a$ ou $m$: coeficiente angular

<table><tr><td>

$$
P(x_1,y_1)\\
a(x-x_1)=(y-y_1)
$$

ou

$$
P(x,y_0)\\
y-y0=m(x-x_0)
$$

</td><td>

![a](https://blog-hlg.professorferretto.dev.br/wp-content/uploads/2020/02/terceiro-passo-para-obter-a-taxa-de-variacao.jpg)

</td></tr></table>

### Reta Tangente

A reta tangente a uma curva em um ponto é a reta que melhor aproxima a curva localmente, "tocando-a" apenas naquele ponto. Ela possui a mesma direção e inclinação da curva no ponto de tangência. O coeficiente angular da reta tangente é dado pela derivada da função no ponto, $m=f`(x_0)$

<table><tr><td>

![r](https://br.neurochispas.com/wp-content/uploads/2022/09/Diagrama-da-equacao-da-reta-tangente-a-uma-curva-em-um-ponto-P-600x373.png)

</td><td>

![r](https://br.neurochispas.com/wp-content/uploads/2022/09/Diagrama-da-equacao-da-normal-a-uma-curva-em-um-ponto-P-1.png)

</td></tr></table>

Porque usar reta tangente:

- Para estudar curvas pois é mais simples
- Se parece com a curva na proximidade do ponto $P$
- A reta tangente e a curva tem um ponto em comum (ao menos)
- Nenhuma outra reta é mais parecida com a curva na vizinhança do ponto do que a reta tangente

### Regras de Derivação

| $F$       | $F´$        |
| --------- | ----------- |
| $K \in R$ | 0           |
| $ax$      | $a$         |
| $ax^n$    | $nax^{n-1}$ |

> Vértices: $f`(x)=0$

Prática:

Como deteminar o vértice da parábula:

<table><tr><td>

$$
\text{Função} f(x)=ax^2+bx+c \\
\text{Derivada} f`(x)=2ax+b \\
\text{Vértice} f`(x)=0  \rightarrow \\
\text{logo...}\\
2ax+b=0 \\
x=\frac{-b}{2a}
$$

</td><td>

![v](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyxTK0ohEIJQ1MsXQdlOBdNU0xK778rHhkTaj96SIBfxRKl6z9kksnB7xyBkv7gtrfc76a9xHaaaGyJKSnCidSP3KXlwnRxq-RJr7ooT9ZPUO7xlg2KvohtgcaTBJwuQxbgBIIEVHGuc8/s1600/der-10a.bmp)

</td></tr></table>

### Função

Uma função em cálculo é uma regra que relaciona todos elemento do Conjunto $A$ (Domínio), uma única vez, ao Conjunto $B$ (Contradomínio).

**Regras**:

- Todos elementos do Conjunto de $A$ tem de ter apenas uma ligação
- Conjunto de $B$ pode receber nenhuma ou vários segmentos

| É função                                                                 | Não é função                                                                      |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| ![f](https://s2.static.brasilescola.uol.com.br/be/2021/11/exemplo-1.jpg) | : ![nf](https://s5.static.brasilescola.uol.com.br/be/2020/05/nao-sao-funcoes.jpg) |

**Conceitos**:

- **Função**: Conjunto $f$ dos segmentos $A \rightarrow B$. Em um gráfico, é a linha/curva representada por $f(x)=y$.
  - Notação: $f: A \rightarrow B \text{ ou } f(x)=y$
  - Ex acima: $f(x)=\{(1,0),(2,2),(3,2),(4,-1)\}$
- **Domínio**: Conjunto de $A$ de que parte a ligação onde temos os valores de $x$ da função. Eixo $x$ das coordenadas/abscissas em um gráfico.
  - Notação: $D_f=A \rightarrow \text{Dominio de } f$
  - Ex acima: $A=\{1,2,3,4\}$
- **Contradomínio**: Conjunto de $B$ que recebe a ligação onde temos os valores de $y$ da função. Eixo $y$ das ordenadas em um gráfico.
  - Notação: $CD_f=B \rightarrow \text{Contradomínio de } f$
  - Ex acima: $B=\{0,0,3,-1\}$
- **Imagem**: É um subconjunto de $B dos que recebem ligação de $A$.
  - Notação: $Im_f=B \rightarrow \text{Imagem de } f$
  - Ex acima: $Im_f=\{0,2,-1\}$

|                                                     |                                                                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Representação<br>Domínio<br>Contradomínio<br>Imagem | ![c](https://www.infoescola.com/wp-content/uploads/2021/09/dominio-contradominio-imagem-600x478.jpg) |

---

| Tipo Função     | Notação                             | Descrição                                                                                                                            | Conjunto                                                                                            | Gráfico                                                                                                 |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Real            | $f:A \rightarrow B$, $x,y \in R$    | todos $y$ estão disponíveis para se conectar                                                                                         | ![c](https://s2.static.brasilescola.uol.com.br/be/2021/11/exemplo-1.jpg)                            | ![g](https://s3.static.brasilescola.uol.com.br/be/2022/06/grafico-funcao-nao-bijetora.jpg)              |
| Sobrejetora     | $Im_f=CD_f$                         | todos elementos de $B$ tem segmento                                                                                                  | ![c](https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/02/diagrama-funcao-sobrejetora.jpg) | ![g](https://static.preparaenem.com/2022/07/representacao-grafico-sobrejetora.jpg)                      |
| Injetora        | $f(x_1)=f(x_2) \rightarrow x_1=x_2$ | quando existe um único valor de $x$ tal que $f(x) = y$ considerando um elemento $y$ pertencente à imagem da função                   | ![c](https://s1.static.brasilescola.uol.com.br/be/2020/05/funcao-injetora.jpg)                      | ![g](https://s4.static.brasilescola.uol.com.br/be/2021/04/5-grafico-de-funcao-injetora-exponencial.jpg) |
| Bijetora        | $Im_f=CD_f \And x_1=x_2$            | injetora e sobrejetora simultaneamente                                                                                               | ![c](https://s2.static.brasilescola.uol.com.br/be/2022/06/diagrama-conjuntos.png)                   | ![g](https://s5.static.brasilescola.uol.com.br/be/2022/06/grafico-funcao-bijetora.png)                  |
| Inversa `*`     | $f^{-1}: B \rightarrow A$           | somente bijetoras. $P(x,y) \rightarrow P^{-1}(y,x)$                                                                                  | ![c](https://www.dicasdecalculo.com.br/wp-content/uploads/2016/08/Fun%C3%A7ao-Inversa.jpg)          | ![g](https://clubes.obmep.org.br/blog/wp-content/uploads/2023/11/func058_1.png)                         |
| composta        | $(f \circ g)(x) = f(g(x))$          | associada com a ideia de atalho de 3 para 2 conjuntos                                                                                | ![c](https://s3.static.brasilescola.uol.com.br/be/2020/05/1-funcao-composta.jpg)                    |                                                                                                         |
| par             | $f(x) = f(-x), \forall x \in A$     |                                                                                                                                      |                                                                                                     |                                                                                                         |
| ímpar           | $f(-x) = -f(x), \forall x \in A$    |                                                                                                                                      |                                                                                                     |                                                                                                         |
| crescente       | $x_1>x_2 \rightarrow f(x_1)>f(x_2)$ | Uma função f é crescente em um intervalo se, e somente se, à medida que os elementos do domínio crescem, suas imagens também crescem |                                                                                                     | ![g](https://s4.static.brasilescola.uol.com.br/be/2020/05/1-funcao-crescente.jpg)                       |
| decrescente     | $x_1>x_2 \rightarrow f(x_1)<f(x_2)$ | Uma função f é decrescente em um intervalo se, e somente se, à medida que os elementos do domínio crescem, suas imagens decrescem    |                                                                                                     | ![g](https://s5.static.brasilescola.uol.com.br/be/2020/05/1-funcao-decrescente.jpg)                     |
| constante       | $x_1=x_2 \rightarrow f(x_1)=f(x_2)$ | função é constante quando, para qualquer valor                                                                                       |                                                                                                     | ![g](https://s3.static.brasilescola.uol.com.br/be/2020/05/1-funcao-constante.jpg)                       |
| afim            | $f(x) = ax + b$                     | Equação do 1o Grau                                                                                                                   |                                                                                                     | ![g](https://s2.static.brasilescola.uol.com.br/be/2020/05/1-funcao-afim.jpg)                            |
| quadrática      | $f(x) = ax^2 + bx + c$              | Equação do 2o Grau                                                                                                                   |                                                                                                     | ![g](https://s4.static.brasilescola.uol.com.br/be/2020/05/1-funcao-quadratica.jpg)                      |
| modular         | $f(x) = │x│$                        | variável x encontra-se dentro do módulo                                                                                              |                                                                                                     | ![g](https://s2.static.brasilescola.uol.com.br/be/2020/05/1-funcao-modular.jpg)                         |
| exponencial     | $f(x) = a^x$                        | apresenta a variável x no expoente                                                                                                   |                                                                                                     | ![g](https://s2.static.brasilescola.uol.com.br/be/2020/05/1-funcao-exponencial.jpg)                     |
| logarítmica     | $f(x) = \log_{a}{x}$                | variável no logaritmando                                                                                                             |                                                                                                     | ![g](https://s2.static.brasilescola.uol.com.br/be/2020/05/1-funcao-logaritmica.jpg)                     |
| trigonométricas | $f(x) = \sin(x)$                    | variável x envolvendo as razões trigonométricas                                                                                      |                                                                                                     | ![g](https://s2.static.brasilescola.uol.com.br/be/2020/05/1-funcao-seno.jpg)                            |
| raiz            | $f(x) = \sqrt{x}$                   | variável no interior da raiz                                                                                                         |                                                                                                     | ![g](https://s5.static.brasilescola.uol.com.br/be/2020/05/1-funcao-raiz.jpg)                            |

#### Função Inversa

**Passos**:

1. **Definir $y$**: Na $f(x)$, substituir $f(x)$ por $y$
2. **Swap entre $x$ e $y$**: Troque todos $x$ por $y$ e todos $y$ por $x$
3. **Isole o $y$**: Simplifique a expresão isolando $y$
4. **Definir $f^{-1}(x)$**: substituir $y$ por $f^{-1}(x)$
5. **Uso da Inversa**: $f(x)=y \rightarrow $f^{-1}(y)=x$

**Exemplo**:

- Temos: $f(x)=6x+5$
  1. Passo: $y=6x+5$
  2. Passo: $x=6y+5
  3. Passo: $y=\frac{x-5}{6}$
  4. Passo: $f^{-1}(x)=\frac{x-5}{6}$
  5. Passo:
     - $f(2)=6x+5=17 \rightarrow P(2,17)$
     - $f^{-1}(17)=\frac{17-5}{6}=2 \rightarrow P^{-1}(17,2)$
- Temos: $f(x)=5^{3x-1}$
  1. Passo: $y=5^{3x-1}$
  2. Passo: $x=5^{3y-1}$
  3. Passo: $y=\frac{\log_{5}{x} +1}{3}$
  4. Passo: $f^{-1}(x)=\frac{1+\log_{5}{x}}{3}$
  5. Passo:
     - $f(x)=5^{3x-1} \rightarrow P(00000)$
     - $f^{-1}(x)=\frac{1+\log_{5}{x}}{3} \rightarrow P(00000)$

#### Função Composta

Substitua a função mais próxima de $x$ pelo valor dela e na equação também

**Exemplo**:

- Temos:
  - $f(x)=\sec x$
  - $g(x)=2^x$
- Para: $f(g(x))$
  - $f(2^x) = \sec (2^x)$
      ```mermaid
      flowchart LR
         x -->|g| g[2^x] -->|f| f["sec(2^x)"]
       ```
- Para $g(f(x))$
  - $g(\sec x)=2^{\sec x}$
      ```mermaid
      flowchart LR
         x -->|f| s[sec x] -->|g| g["2(^sec x)"]
       ```
- Para $f(f(x))$
  - $f(\sec x)=\sec (\sec x)$
- Para $g(g(x))$
  - $g(2^x)=2^{2^x}$

---

[](https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/02/grafico-funcao-sobrejetora.jpg)

## Vídeos

- <https://www.youtube.com/watch?v=kYIc8JUx3Xo>
- <https://www.youtube.com/watch?v=Gsmtz0e4XbU&list=PLizISvNdCrxxu2TTd7vdC1Biiyh3UJkMV>
