# Inequações Modulares

## Propriedades

- **Para $a \ge 0$**
  - **Menor que** ($|x| < a$): Significa que a distância de $x$ até a origem é menor que $a$. Portanto, $x$ está entre $-a$ e $a$.
    $|x| < a \iff -a < x < a$

  - **Maior que** ($|x| > a$): Significa que a distância de $x$ até a origem é maior que $a$. Portanto, $x$ está à esquerda de $-a$ ou à direita de $a$.
    $|x| > a \iff x < -a \text{ ou } x > a$

- **Para $a < 0$ (Casos Especiais e Cuidados)**
  - $|x| < -3 \implies S = \emptyset$ (Vazio, pois um módulo nunca é menor que um número negativo).
  - $|x| > -3 \implies S = \mathbb{R}$ (Universal, pois qualquer módulo é sempre maior ou igual a zero, logo, maior que qualquer negativo).

## Representação Visual

Abaixo estão as ilustrações geométricas dessas propriedades na reta numérica.

### Caso 1: $|x| \le a$ (Intervalo Fechado)

O conjunto solução é o segmento entre $-a$ e $a$, incluindo as extremidades.

$$
|x| \le a \iff -a \le x \le a
$$

```text
=================================================●----------- (x ≤ a)
-∞                                               a         +∞
-------------●=============================================== (x ≥ -a)
-∞          -a                                             +∞
-------------●================●==================●----------- (-a ≤ x ≤ a)
-∞          -a                0                  a         +∞ (x ≤ a ∩ x ≥ -a)
```

<svg viewBox="0 0 600 120">
  <line x1="50" y1="60" x2="550" y2="60" stroke="#4A5568" stroke-width="2" marker-end="url(#arrow)" />
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A5568"/>
    </marker>
  </defs>

  <circle cx="300" cy="60" r="3" fill="#718096" />
  <text x="300" y="85" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#718096">0</text>

  <line x1="180" y1="60" x2="420" y2="60" stroke="#3182CE" stroke-width="6" />
  
  <circle cx="180" cy="60" r="6" fill="#3182CE" />
  <text x="180" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2B6CB0">-a</text>

  <circle cx="420" cy="60" r="6" fill="#3182CE" />
  <text x="420" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2B6CB0">a</text>

  <text x="300" y="25" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#2D3748">Solução de |x| ≤ a</text>
</svg>

### Caso 2: $|x| \ge a$ (Intervalos Afastados)

O conjunto solução aponta para as extremidades infinitas, partindo de $-a$ para a esquerda e de $a$ para a direita.

$$
|x| \ge a \iff x \le -a \text{ ou } x \ge a
$$

```text
-------------------------------------------------●=========== (x ≥ a)
-∞                                               a         +∞
=============●----------------------------------------------- (x ≤ -a)
-∞          -a                                             +∞
=============●----------------○------------------●=========== (x ≤ -a ∪ x ≥ a)
-∞          -a                0                  a         +∞
```

<svg viewBox="0 0 600 120">
  <line x1="50" y1="60" x2="550" y2="60" stroke="#4A5568" stroke-width="2" />

  <circle cx="300" cy="60" r="3" fill="#718096" />
  <text x="300" y="85" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#718096">0</text>

  <line x1="50" y1="60" x2="180" y2="60" stroke="#E53E3E" stroke-width="6" />
  <line x1="420" y1="60" x2="550" y2="60" stroke="#E53E3E" stroke-width="6" />
  
  <circle cx="180" cy="60" r="6" fill="#E53E3E" />
  <text x="180" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#9B2C2C">-a</text>

  <circle cx="420" cy="60" r="6" fill="#E53E3E" />
  <text x="420" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#9B2C2C">a</text>

  <text x="300" y="25" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="#2D3748">Solução de |x| ≥ a</text>
</svg>

## Métodos de Resolução (Passo a Passo)

### Exemplo 1: $|2x - 3| < 5$

Aplicando a **Propriedade 1**:

1. Desmonte o módulo transformando em uma inequação simultânea ou em duas inequações separadas:
   - simultânea: $-5 < 2x - 3 < 5$
   - separadas: $2x - 3 < 5 \quad \cap \quad 2x - 3 > -5$ ($\cap$ representa a conjunção "e" por se tratar de <)
2. Resolva as inequações:
   - simultânea:
     $$
      -5 < 2x - 3 < 5\\
      -5 + 3 < 2x < 5 + 3\\
      -2 < 2x < 8\\
      -2/2 < x < 8/2\\
      -1 < x < 4
     $$
   - separadas:

     | $$2x-3<5\\2x<8\\ x<8/2\\ x<4$$ | $$2x-3>-5\\2x>-2\\ x>-2/2\\ x>-1$$ |
     | ------------------------------ | ---------------------------------- |

     $x<4 \cap x>-1$
3. Esboço do varal:

   ```text
      --------------------○========================================= (x > -1)
      -∞                 -1                                       +∞
      =========================================○-------------------- (x < 4)
      -∞                 -1                    4                  +∞
      --------------------○=======●============○-------------------- (-1 < x < 4)
      -∞                 -1       0            4                  +∞ (x < 4 ∩ x > −1)
   ```
4. Solução:
   - $S = \{x \in \mathbb{R} \mid -1 < x < 4\}$
   - $S = ]-1, 4[$
   - $S = (-1, 4)$

### Exemplo 2: $|3x + 2| \ge 8$

Aplicando a **Propriedade 2**:

1. Separe em dois casos distintos unidos pela conjunção "ou":
   $3x + 2 \le -8 \quad \cup \quad 3x + 2 \ge 8$
2. Resolva as inequações:

   | $$3x \le -10\\ x \le -\frac{10}{3}\\ \approx -3.33$$ | $$3x \ge 6\\x \ge 2$$ |
   | ---------------------------------------------------- | --------------------- |

3. Esboço do varal:

   ```text
      ====================●----------------------------------------- (x ≤ -10/3)
      -∞                -10/3                                     +∞ 
      -----------------------------------------●==================== (x ≥ 2)
      -∞                                       2                  +∞ 
      ====================●-------○------------●==================== (x ≤ -10/3 ∪ x ≥ 2)
      -∞                -10/3     0            2                  +∞ 
   ```

4. Solução:
   - $S = \{x \in \mathbb{R} \mid x \le -\frac{10}{3} \text{ ou } x \ge 2\}$
   - $S = ]-\infty, -\frac{10}{3}] \cup [2, +\infty[$
   - $S = (-\infty, -\frac{10}{3}] \cup [2, +\infty)$
