# Equações do 3º Grau (cúbica)

$$
f(x) = ax^3 + bx^2 + cx + d \quad (a \neq 0)
$$

- Tem 3 raízes
  - reais
  - complexas
  - repetidas/Múltiplas
- Sempre tem **pelo menos 1 raiz real**
  - 3 reais
  - ou 1 real + 2 complexas
- Pode cortar o eixo X
  - **1 ou 3 vezes**
  - **1** e encostar
- Gráfico vai de **-∞ → +∞** (ou o contrário, dependendo do sinal de (a))
- Curva em formato de “S”

## Como resolver

Métodos:

1. [Fatoração direta](Polinomios_Fatora.md)
2. [Briot-Ruffini](Polinomios_Briot-Ruffini.md) (mais usado)
3. [Teorema das raízes racionais](Polinomios_Teorema-raizes-racionais.md)
4. [Redução para 2º grau](Polinomios_reducao.md)
5. [Fórmula de Cardano](Polinomios_Cardano.md) (teórico)

Passo-Passo padrão:

1. Testar raízes simples
   - ±1, ±2, ±3…
2. Usar Ruffini Se achar uma raiz:
   - reduz grau
3. Resolver o resto
   - grau 2 → Bhaskara
   - grau 1 → direto

## Gráfico

- Muito útil para:
  - estimar raízes
  - ver quantas soluções reais existem

## Multiplicidade de raiz

Ex: $(x - 2)^2(x + 1)$

- $x_1 = 2, x_2 = 2$ → multiplicidade 2
- $x_3 = -1$ → multiplicidade 1

- No gráfico multiplicidade:
  - par → toca o eixo $(x - 2)^2$
  - ímpar → cruza $(x - 2)^3$

## Relações importantes (Viète)

Para cúbica:

$$
x_1 + x_2 + x_3 = -\frac{b}{a}
$$

$$
x_1x_2 + x_1x_3 + x_2x_3 = \frac{c}{a}
$$

$$
x_1x_2x_3 = -\frac{d}{a}
$$

## Como interpretar uma equação olhando o gráfico

Casos de gráfico:

1. **cruza 3 vezes**: 3 raízes reais
2. **cruza 1 vez**: 1 raiz real + 2 complexas
3. **toca o eixo**: 1 raiz real + raiz repetida
