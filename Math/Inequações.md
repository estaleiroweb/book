# Inequações

Uma **inequação** é uma expressão matemática que compara valores utilizando:

| Símbolo | Significado      |
| ------- | ---------------- |
| `<`     | Menor que        |
| `≤`     | Menor ou igual a |
| `>`     | Maior que        |
| `≥`     | Maior ou igual a |

Exemplos:

$$
x + 3 > 5 \\
\quad \text{(Inequação linear)} \\
\,\\
x^2 - 5x + 6 ≤ 0\\
\quad \text{(Inequação quadrática)}
$$

O objetivo é determinar os valores de `x` que tornam a inequação verdadeira.

## Resumo das Notações de Intervalos

### Notação Matemática Padrão

| Internacional       | Somente Colchetes   | Definição por Propriedade                   | Inequação              |
| ------------------- | ------------------- | ------------------------------------------- | ---------------------- |
| $(a,b)$             | $]a,b[$             | $\{ x \in \mathbb{R} \mid a < x < b \}$     | $a < x < b$            |
| $[a,b]$             | $[a,b]$             | $\{ x \in \mathbb{R} \mid a \le x \le b \}$ | $a \le x \le b$        |
| $(a,b]$             | $]a,b]$             | $\{ x \in \mathbb{R} \mid a < x \le b \}$   | $a < x \le b$          |
| $[a,b)$             | $[a,b[$             | $\{ x \in \mathbb{R} \mid a \le x < b \}$   | $a \le x < b$          |
| $(-\infty,a)$       | $]-\infty,a[$       | $\{ x \in \mathbb{R} \mid x < a \}$         | $x < a$                |
| $(-\infty,a]$       | $]-\infty,a]$       | $\{ x \in \mathbb{R} \mid x \le a \}$       | $x \le a$              |
| $(a,+\infty)$       | $]a,+\infty[$       | $\{ x \in \mathbb{R} \mid x > a \}$         | $x > a$                |
| $[a,+\infty)$       | $[a,+\infty[$       | $\{ x \in \mathbb{R} \mid x \ge a \}$       | $x \ge a$              |
| $(-\infty,+\infty)$ | $]-\infty,+\infty[$ | $\{ x \in \mathbb{R} \}$                    | Todos os números reais |
| $\emptyset$         | $\emptyset$         | $\emptyset$                                 | sem solução            |

**Convenção:**

- `(` ou `)` → extremo **não pertence** ao intervalo.
- `[` ou `]` → extremo **pertence** ao intervalo.
- `]` ou `[` → O mesmo que `(` ou `)`.
- `±∞` nunca pertencem ao conjunto, portanto sempre aparecem com parênteses.

### Uniões de Intervalos

| Inequação               | Padrão                        | Somente Colchetes  |
| ----------------------- | ----------------------------- | ------------------ |
| $x < -2$ ou $x > 3$     | $(-\infty,-2)\cup(3,+\infty)$ | $]-∞,-2[ ∪ ]3,+∞[$ |
| $x \le -2$ ou $x > 3$   | $(-\infty,-2]\cup(3,+\infty)$ | $]-∞,-2] ∪ ]3,+∞[$ |
| $x < -2$ ou $x \ge 3$   | $(-\infty,-2)\cup[3,+\infty)$ | $]-∞,-2[ ∪ [3,+∞[$ |
| $x \le -2$ ou $x \ge 3$ | $(-\infty,-2]\cup[3,+\infty)$ | $]-∞,-2] ∪ [3,+∞[$ |

**Regra prática:**

```text
Incluído  -> [ ou ]
Excluído  -> ( ou )   (notação padrão)
Excluído  -> ] ou [   (notação somente colchetes)

+∞ e -∞ nunca pertencem ao conjunto.
```

## Links

- [Inequações 1o Grau](<Inequações 1o Grau.md>)
- [Inequações 2o Grau](<Inequações 2o Grau.md>)
- [Inequações Racionais](<Inequações Racional.md>)
