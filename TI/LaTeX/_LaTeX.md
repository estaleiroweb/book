# TeX and LaTeX

- <https://en.wikibooks.org/wiki/LaTeX/Mathematics>

To Math Formulas

~~~html
<script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default"></script>
~~~

## Formulas

- Marks
  - Inline: \$ ... \$
    - Example: $f(x,y) = \sin(x+y)$, $E=mc^2$
  - Equantions: \$\$ ... \$\$
    - Example:
$$f(x,y) = \sin(x+y)$$
$$
E=mc^2,
x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2b}
$$
- Styles
  - Normal: $\sum$, $\lim$
  - Display Style: $\displaystyle \sum$, $\displaystyle \lim$
  - Force: \everymath{\displaystyle}

Examples:

- Expressions: $\forall x \in X, \quad \exists y \leq \epsilon$
- Integrals: $\int_0^\infty \mathrm{e}^{-x},\mathrm{d}x$
- Limits: $\lim\limits_{x \to \infty} \exp(-x) = 0$
- Sums:
  - $\sum_{i=1}^{10} t_i$
  - $\sum_{\substack{0 < i < m \| 0 < j < n}} P(i, j)$
- Equations: \begin{equation} formula \end{equation}

$$
\begin{equation}
 C^i_j = {\textstyle \sum_k} A^i_k B^k_j
\end{equation}
$$

$$
\begin{equation}
 C^i_j = {\textstyle \sum_k} A^i_k B^k_j
\end{equation}
$$

- New Command: \newcommand{\command}[num arguments]{formula}
$$
\newcommand{\tsum}[1]{{\textstyle \sum_{#1}}}
\newcommand{\rfrac}[2]{{}^{#1}\!/_{#2}}
\tsum{7} + \tsum{9} + \rfrac{3}{7} +
x^{\rfrac{1}{2}}
$$

$$
\cfrac{1}{\cfrac{1}{2}} +
\frac{1}{\frac{1}{2}} +
\tsum{7} + \tsum{9} + \rfrac{3}{7} + \sfrac{1}{2}
$$

$$
\DeclareMathOperator\cis{cis}

$$
\begin{equation}
 C^i_j = {\textstyle \sum_k} A^i_k B^k_j
\end{equation}

- New Command: \newcommand{\command}[num arguments]{formula}

$$
\newcommand{\tsum}[1]{{\textstyle \sum_{#1}}}
\newcommand{\rfrac}[2]{{}^{#1}\!/_{#2}}
\tsum{7} + \tsum{9} + \rfrac{3}{7} +
x^{\rfrac{1}{2}}
$$

$$
\begin{equation}
 C^i_j = {\textstyle \sum_k} A^i_k B^k_j
\end{equation}
$$

## Links

- Doc
  - <https://en.wikibooks.org/wiki/LaTeX/Mathematics#List_of_mathematical_symbols>
- Math Formulas
  - <https://csrgxtu.github.io/2015/03/20/Writing-Mathematic-Fomulars-in-Markdown/>
  - <https://en.wikibooks.org/wiki/LaTeX/Mathematics#Manually_Specifying_Formula_Style>
  - <https://ajustetecnico.github.io/blog/2018/09/18/equacoes-markdown/#:~:text=A%20boa%20not%C3%ADcia%20%C3%A9%20que,forma%20de%20um%20bloco%20separado>
  - <https://github.blog/2022-05-19-math-support-in-markdown/>
