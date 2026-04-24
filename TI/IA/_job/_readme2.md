# Readme 2

- Percepton=Neorônio
- Gradiente Descendente: Minimizar a função de Perda (LOSS)
- Evitar Taxa de Aprendizado Muito Alta ou Muito Baixa
- Vanishing Gradient e Exploding Gradient: Extremos muito Altos
- Dropout: remove neurônios para evitar o super ajuste ou overfitting
- Batch normalization
- Funções de Ativação = NãoLinearidade na saída dos Modelos (Retirar vícios)
  
  | Função               | Intervalo de Saída  | Vanishing Gradient?     | Aplicabilidade        |
  | -------------------- | ------------------- | ----------------------- | --------------------- |
  | Sigmoide             | $(0,1)$             | Sim                     | Saída binária         |
  | Tangente Hiperbólica | $(-1,1)$            | Sim(menos que Sigmoide) | Camadas ocultas       |
  | ReLU                 | $(0,+\infty)$       | Não                     | Camadas ocultas       |
  | LEAKY ReLU           | $(-\infty,+\infty)$ | Não                     | Alternativa para ReLU |

Rede Neural:
1. Camada
   1. Entrada
   2. Ocultas
      1. Densas: Conexão dos Dados
      2. Dropout: Elimina Dados Irrelevantes. Remove neurônios para evitar o super ajuste ou overfitting
      3. Batch normalization: Limpeza dos Dados
   3. Saída
2. Reguladores
   1. Overfitting: Modelo Excessivamente Ajutado
3. Otimizador
   1. SGD: Simples e Lento
   2. Adam: Rápido e Eficiente
   3. RMSprop: Dados Estacionários

CNN:
- Esquemas de Grade:
  - Contorno
  - Profundidade
  - Textura
  - Froma
- Camadas:
  - Convulucional: extrai as características da Imagem
  - Pooling: Dimensiona a Imagem
  - Densa: Classifica a Imagem

Dados Anômalos: End of Tail
![Dados Anômalos: End of Tail](https://www.researchgate.net/profile/Juyang-Weng/publication/233485208/figure/fig3/AS:299978489647118@1448531853765/Tail-probability-of-Gaussian-distribution-and-its-triangular-approximation-The-scaled.png)

- SVM:
  - Comparação Min-Max Scaling
    ![SVM](https://www.baeldung.com/wp-content/uploads/sites/4/2021/03/svm-all.png)
      $$
      X \text{normalizado}=\frac{X - X_{min}}{X_{max} - X_{min}}= 0 \sim 1
      $$
    - MinMaxScaller
    - StandardScaller
    - RobustScaller
  - Padronização (Standardization)
    $$
    X \text{padronizado}=\frac{X - \text{média}}{\text{desvio-padrão}}
    $$
    ![Standardization](https://miro.medium.com/v2/resize:fit:720/format:webp/1*K5gniq8q23lW8uCYka6Y5g.png)
  - Robust Scaling: Valores Extremos, Algorítimos que não depedem de Escala
    $$
    X \text{normalizado} = \frac{X - \text{mediana}}{IQR}
    $$

    IQR: Intervalo Interquartil

  - One-Hot Encoding
    ::::: container
    :::: row
    ::: col

    |               Cor               |
    | :-----------------------------: |
    | **Vermelho**{style="color:red"} |
    | **Verde**{style="color:green"}  |
    |  **Azul**{style="color:blue"}   |
    | **Vermelho**{style="color:red"} |

    :::
    ::: col

    |         Vermelho         |           Azul            |           Verde            |
    | :----------------------: | :-----------------------: | :------------------------: |
    | **1**{style="color:red"} |           **0**           |           **0**            |
    |          **0**           |           **0**           | **1**{style="color:green"} |
    |          **0**           | **1**{style="color:blue"} |           **0**            |
    | **1**{style="color:red"} |           **0**           |           **0**            |

    :::
    ::::
    :::::

    ::::: container
    :::: row
    ::: col

    |               Cor               |
    | :-----------------------------: |
    | **Verde**{style="color:green"}  |
    | **Vermelho**{style="color:red"} |
    |            **Preto**            |
    | **Verde**{style="color:green"}  |

    :::
    ::: col

    |         Enconding          |
    | :------------------------: |
    | **2**{style="color:green"} |
    |  **1**{style="color:red"}  |
    |           **1**            |
    | **2**{style="color:green"} |

    :::
    ::::
    :::::

<style>
.cl{
    width:100px;
    height: 25px;
    text-align:center;
    vertical-align:middle;
    background-color:#00000000;
    color:black;
    border:2px solid black!important;
    border-radius: 5px!important;
}
.cl1{border-color: #9cdbfc!important;}
.cl2{border-color: #d4aa00!important;}
.cl3{border-color: #6a2aff!important;}
.cl4{border-color: #9e2203!important;}
</style>
- Target Leakage
- PCA: Redução de dimencionalidade
- Menos Overfiting=Perder a capacidade de generalização de dados novos
- Mitigação de Colenearidade
  
  | Método           | Risco de Reidentificação       | Estatísticas de Características | Correlações de Características | Desempenho de Machine Learning |
  | ---------------- | ------------------------------ | ------------------------------- | ------------------------------ | ------------------------------ |
  | Dados Sintéticos | [[Nenhum]]{class="cl cl1"}     | [[Alto]]{class="cl cl1"}        | [[Alto]]{class="cl cl1"}       | [[Alto]]{class="cl cl1"}       |
  | Randomização     | [[Alto]]{class="cl cl2"}       | [[Médio]]{class="cl cl3"}       | [[Baixo]]{class="cl cl2"}      | [[Baixo]]{class="cl cl2"}      |
  | Permutação       | [[Alto]]{class="cl cl2"}       | [[Alto]]{class="cl cl1"}        | [[Muito Alto]]{class="cl cl4"} | [[Muito Alto]]{class="cl cl4"} |
  | Generalização    | [[Baixo]]{class="cl cl3"}      | [[Baixo]]{class="cl cl2"}       | [[Baixo]]{class="cl cl2"}      | [[Baixo]]{class="cl cl2"}      |
  | Pseudonimização  | [[Muito Alto]]{class="cl cl4"} | [[Alto]]{class="cl cl1"}        | [[Alto]]{class="cl cl1"}       | [[Alto]]{class="cl cl1"}       |
