# Logaritmos

## 1. Definição de logaritmo

$$
\log_a b = x \quad \Leftrightarrow \quad a^x = b
$$

- (a): base ( $a > 0$, $a \neq 1$ )
- (b): logaritmando ( $b > 0$ )
- (x): resultado

![img](https://static.todamateria.com.br/upload/lo/ga/logaritmodefinicao.jpg)

## Exemplos básicos

$$
\log_2 8 = 3 \quad (2^3 = 8)
$$

$$
\log_{10} 100 = 2
$$

## Condições de existência

👉 Para existir:

- base $a > 0$
- base $a \neq 1$
- logaritmando $b > 0$

## Tipos de logaritmo

- Logaritmo decimal: $\log x = \log_{10} x$
- Logaritmo natural: $\ln x = \log_e x$
  - $e \approx 2{,}718$

## Propriedades

- Produto: $\log_a (xy) = \log_a x + \log_a y$
- Quociente: $\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$
- Potência: $\log_a (x^n) = n \log_a x$
- Raiz: $\log_a \sqrt[n]{x} = \frac{1}{n} \log_a x$
- Propriedades especiais
  - $\log_a 1 = 0$
  - $\log_a a = 1$
- Mudança de base
  - $\log_a b = \frac{\log b}{\log a}$
  - $\log_a b = \frac{\ln b}{\ln a}$
- Inversão com exponencial
  - $a^{\log_a x} = x$
  - $\log_a (a^x) = x$

## Exemplo de Equações logarítmicas

1.
   - $\log_2 x = 3$
   - $x = 2^3 = 8$
2.
   - $\log(x - 1) = 2$
   - $x - 1 = 100 \Rightarrow x = 101$
     - ⚠️ Verificar domínio: $x > 1$

## Caso de Inequações logarítmicas

1. base > 1
   - $\log_2 x > 3 \Rightarrow x > 8$ (mantém o sinal)
2. 0 < base < 1
   - $\log_{1/2} x > 2 \Rightarrow x < \frac{1}{4}$ (inverte o sinal)

## Crescimento

- (a > 1): crescente 📈
- (0 < a < 1): decrescente 📉

## Estratégias de resolução

1. Transformar em exponencial
2. Usar propriedades
3. Igualar logaritmos
4. Verificar domínio

## Erros comuns

- ❌ $\log(x + y) = \log x + \log y$ → ERRADO
- ❌ $\log_a (x - y) = \log x - \log y$ → ERRADO
- ❌ esquecer domínio (muito comum!)

## Comparação com exponencial

| Exponencial   | Logaritmo       |
| ------------- | --------------- |
| $a^x = b$     | $\log_a b = x$  |
| cresce rápido | cresce lento    |
| domínio ℝ     | domínio $x > 0$ |

## Aplicações

- juros compostos 💰
- crescimento populacional
- pH (química)
- escala Richter (terremotos)
