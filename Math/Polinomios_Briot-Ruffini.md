# Método Briot-Ruffini (Divisão de Polinômios)

É uma forma rápida de fazer:

$$
\frac{\text{polinômio}}{(x - r)}
$$

- Serve para:
  - verificar se (r) é raiz
  - fatorar polinômios
  - reduzir grau (ex: 3 → 2)

## Estrutura do método

Exemplo genérico:

- Para $ax^3 + bx^2 + cx + d$ Você monta:

  ```text
  r | a    b        c       | d
  -------------------------------------
    | A=a  B=A*r+b  C=B*r+c | D=C*r+d=0
  ```
  - Resulta em $Ax^2 + Bx + C = 0$

- Para $ax^4 + bx^3 + cx^2 + dx + e$ Você monta:

  ```text
  r | a    b        c        d        e
  --------------------------------------------
    | A=a  B=A*r+b  C=B*r+c  D=C*r+d  E=D*r+e0
  ```
  - Resulta em $Ax^3 + Bx^2 + Cx + D = 0$

## Passos para resolver

**Exemplo 1**: $x^3 - 6x^2 + 11x - 6 = 0$

1. testar multiplos do último termo $-6$
   - $PR_I$ possíveis raizes inteiras do polinômino
   - $PR_I \in \text{M}{(-6)} = \{\pm1,\pm2,\pm3,\pm6\}$
   - Testando -1:
     - $(-1)^3-6(-1)^2+11(-1)-6$
     - $-1-6-11-6\neq0$
   - Testando 1:
     - $(1)^3-6(1)^2+11(1)-6$
     - $1-6+11-6=0$
     - $r = 1$ → **funciona e PODE ser raiz** ✅
2. Ruffini

   |  $x^3$  | $a=(1)$ |  $b=(-6)$   |  $c=(11)$   |  $d=(-6)$  |
   | :-----: | :-----: | :---------: | :---------: | :--------: |
   | $r=(1)$ |         | $1*1=(+1)$  | $-5*1=(-5)$ | $6*1=(+6)$ |
   |   $x^2$ |  $(1)$  | $-6+1=(-5)$ | $11-5=(6)$  | $-6+6=(0)$ |
   |    ^^   | $1x^2$  |    $-5x$    |    $+6$     |    $=0$✅  |

   - $x_1 = 1$ → **Testado. É raiz** ✅
   - $(x - 1)(x^2 - 5x + 6) = 0$
   - $x^2 - 5x + 6 = 0$
3. resolver
   - $\Delta=(-5)^2-4(1)(6)=25-25=1$
   - Bhaskara: $x=\frac{-(-5)\pm\sqrt{1}}{2(1)}=\frac{5\pm1}{2}$
     - $x_2=\frac{5-1}{2}=2$
     - $x_3=\frac{5+1}{2}=3$
4. resposta
   - $x_1=1, x_2=2, x_3=3$

---

**Exemplo 1**: $x^3 + 2x^2 - x - 2 = 0$

1. testar multiplos do último termo $-2$
   - $PR_I$ possíveis raizes inteiras do polinômino
   - $PR_I \in \text{M}{(-2)} = \{\pm1,\pm2\}$
   - Testando -1:
     - $(-1)^3+2(-1)^2-1(-1)-2$
     - $-1+2+1-2\neq0$
   - Testando 1:
     - $(1)^3+2(1)^2-1(1)-2$
     - $1+2-1-2=0$
     - $x_1 = 1$ → **funciona e PODE ser raiz** ✅
2. Ruffini

   | $r=1$ | 1 | 2 | -1 | -2 |
   | :---: | - | - | -- | -- |
   |       | 1 | 3 | 2  | 0  |

   - $x_1 = 1$ → **Testado. É raiz** ✅
   - $(x - 1)(x^2 + 3x + 2) = 0$
   - $x^2 + 3x + 2 = 0$
3. resolver
   - $\Delta=(3)^2-4(1)(2)=9-8=1$
   - Bhaskara: $x=\frac{-(3)\pm\sqrt{1}}{2(1)}=\frac{-3\pm1}{2}$
     - $x_2=\frac{-3-1}{2}=-2$
     - $x_3=\frac{-3+1}{2}=-1$
4. resposta
   - $x_1=1, x_2=-2, x_3=-1$

---

**Exemplo 1**: $x^3 - 4x^2 + x + 6 = 0$

1. testar multiplos do último termo $+6$
   - $PR_I$ possíveis raizes inteiras do polinômino
   - $PR_I \in \text{M}{(+6)} = \{\pm1,\pm2\}$
   - Testando -1:
     - $(-1)^3-4(-1)^2+1(-1)+6$
     - $-1-4-1+6=0$ → **funciona e PODE ser raiz** ✅
2. Ruffini

   | $r=-1$ | 1 | -4 | 1 | 6 |
   | :----: | - | -- | - | - |
   |        | 1 | -5 | 6 | 0 |

   - $x_1 = -1$ → **Testado. É raiz** ✅
   - $(x + 1)(x^2 - 5x + 6) = 0$
   - $x^2 - 5x + 6 = 0$
3. resolver
   - $\Delta=(-5)^2-4(1)(6)=25-24=1$
   - Bhaskara: $x=\frac{-(-5)\pm\sqrt{1}}{2(1)}=\frac{5\pm1}{2}$
     - $x_2=\frac{5-1}{2}=2$
     - $x_3=\frac{5+1}{2}=3$
4. resposta
   - $x_1=-1, x_2=2, x_3=3$

---

**Exemplo 1**: $x^3 - 3x^2 + 3x - 1 = 0$

1. testar multiplos do último termo $-1$
   - $PR_I$ possíveis raizes inteiras do polinômino
   - $PR_I \in \text{M}{(-1)} = \{\pm1\}$
   - Testando -1:
     - $(-1)^3-3(-1)^2+3(-1)-1$
     - $-1+3-3-1\neq0$
   - Testando 1:
     - $(1)^3-3(1)^2+3(1)-1$
     - $1-3+3-1=0$ → **funciona e PODE ser raiz** ✅
2. Ruffini

   | $r=1$ | 1 | -3 | 3 | -1 |
   | :---: | - | -- | - | -- |
   |       | 1 | -2 | 1 | 0  |

   - $x_1 = 1$ → **Testado. É raiz** ✅
   - $(x - 1)(x^2 - 2x + 1) = 0$
   - $x^2 - 2x + 1 = 0$
3. resolver
   - $\Delta=(-2)^2-4(1)(1)=4-4=0$
   - Bhaskara: $x=\frac{-(-2)\pm\sqrt{0}}{2(1)}=\frac{2\pm0}{2}$
     - $x_2=\frac{2}{2}=1$
4. resposta
   - $x_1=1, x_2=1, x_3=1$  **raiz tripla**

## ⚠️ ERROS COMUNS

- ❌ esquecer termos → sempre complete:
  [
  x^3 + 0x^2 + 2x + 1
  $$

- ❌ usar divisor errado
  → se raiz é 2, divisor é (x - 2)

- ❌ erro de sinal (MUITO comum)

## DICA DE OURO

👉 Ruffini só funciona direto com:
$$
(x - r)
$$

Se for:
$$
(2x - 1)
$$
👉 não funciona direto

## 🚀 RESUMO FINAL

1. Teste raízes possíveis
2. Monte a tabela
3. Faça:

   - desce
   - multiplica
   - soma
4. Se resto = 0 → achou raiz
5. Repita até fatorar tudo

Exemplo:

Serve para dividir polinômio por ($x - r$)

Ex:
$$
x^3 - 6x^2 + 11x - 6 = 0
$$

Testando (x = 1):

Ruffini → sobra 0 ⇒ é raiz

Resultado:
$$
(x - 1)(x^2 - 5x + 6)
$$

Agora resolve o 2º grau:
$$
(x - 1)(x - 2)(x - 3)
$$

- Raízes: 1, 2, 3
