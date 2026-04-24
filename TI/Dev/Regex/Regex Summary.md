# Regex Summary

| Special wildcard        | Group      | Function                   | Similar                                 | Support                                                                                                            | Example                      |
| ----------------------- | ---------- | -------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `example`               | literal    | literal text match         |                                         | all                                                                                                                | `example`                    |
| `[]`                    | list       | allowed characters         |                                         | all                                                                                                                | `[abc]`                      |
| `]`[^]` ,               | list       | denied characters          |                                         | all                                                                                                                | `0[^0-, 9]`                  |
| `[[:upper:]]`           | list POSIX | uppercase letters          | `[A-Z]`                                 | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:upper:]]+`               |
| `[[:lower:]]`           | list POSIX | lowercase letters          | `[a-z]`                                 | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:lower:]]+`               |
| `[[:alpha:]]`           | list POSIX | alphabetic letters         | `[A-Za-z]`                              | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:alpha:]]+`               |
| `[[:alnum:]]`           | list POSIX | alphanumeric               | `[A-Za-z0-9]`                           | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:alnum:]]+`               |
| `[[:digit:]]`           | list POSIX | digits                     | `[0-9]`                                 | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:digit:]]+`               |
| `[[:xdigit:]]`          | list POSIX | hexadecimal                | `[0-9A-Fa-f]`                           | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:xdigit:]]+`              |
| `[[:punct:]]`           | list POSIX | punctuation                | ``[!"#$%&'()*+,.\/:;<=>?@[\]^_{│}~`-]`` | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:punct:]]`                |
| `[[:blank:]]`           | list POSIX | space and TAB              | `[ \t]`                                 | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:blank:]]+`               |
| `[[:space:]]`           | list POSIX | whitespace                 | `[ \t\n\r\f\v]`                         | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:space:]]+`               |
| `[[:cntrl:]]`           | list POSIX | control chars              |                                         | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:cntrl:]]`                |
| `[[:graph:]]`           | list POSIX | printable except space     | `[^ \t\n\r\f\v]`                        | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:graph:]]+`               |
| `[[:print:]]`           | list POSIX | printable including space  | `[^\t\n\r\f\v]`                         | grep[^grep], sed[^sed], awk[^awk], gawk[^gawk], mawk[^mawk], ed[^ed]                                               | `[[:print:]]+`               |
| `.`                     | wildcard   | any char except newline    |                                         | all                                                                                                                | `a.b`                        |
| `\n`                    | wildcard   | line feed                  |                                         | all                                                                                                                | `\n`                         |
| `\r`                    | wildcard   | carriage return            |                                         | all                                                                                                                | `\r`                         |
| `\t`                    | wildcard   | horizontal tab             |                                         | all                                                                                                                | `\t`                         |
| `\v`                    | wildcard   | vertical tab               |                                         | mos                                                                                                                | `\v`                         |
| `\f`                    | wildcard   | form feed                  |                                         | mos                                                                                                                | `\f`                         |
| `\e`                    | wildcard   | escape char                |                                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\e`                         |
| `\h`                    | wildcard   | horizontal whitespace      | `[[:alpha]_]\b`                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\h+`                        |
| `\H`                    | wildcard   | non horizontal whitespace  | `[:[^[:a, lpha:]_]\b`                   | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\H+`                        |
| `\a`                    | wildcard   | alert (bell)               |                                         | perl[^perl], php[^php], python[^python]                                                                            | `\a`                         |
| `\b`                    | wildcard   | backspace (inside list)    |                                         | mos                                                                                                                | `[\b]`                       |
| `\s`                    | wildcard   | whitespace                 | `[[:space:]]`                           | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet], golang[^golang], rust[^rust]                | `\s+`                        |
| `\S`                    | wildcard   | non-whitespace             |                                         | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet], golang[^golang], rust[^rust]                | `\S+`                        |
| `\d`                    | wildcard   | digits                     | `[0-9]`                                 | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet], golang[^golang], rust[^rust], ecmas[^ecmas] | `\d+`                        |
| `\D`                    | wildcard   | non-digits                 |                                         | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet], golang[^golang], rust[^rust], ecmas[^ecmas] | `\D+`                        |
| `\w`                    | wildcard   | word chars                 | `[A-Za-z0-9_]`                          | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet], golang[^golang], rust[^rust], ecmas[^ecmas] | `\w+`                        |
| `\W`                    | wildcard   | non-word chars             |                                         | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet], golang[^golang], rust[^rust], ecmas[^ecmas] | `\W+`                        |
| `\R`                    | wildcard   | any newline sequence       | `(\r\n│\n│\r)`                          | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\R`                         |
| `{n,m}`                 | quantifier | greedy range               |                                         | all                                                                                                                | `a{2,5}`                     |
| `{n,}`                  | quantifier | greedy minimum             |                                         | all                                                                                                                | `a{3,}`                      |
| `{,m}`                  | quantifier | greedy maximum             | `{0,m}`                                 | all                                                                                                                | `a{3,}`                      |
| `{n}`                   | quantifier | greedy exactly             |                                         | all                                                                                                                | `a{3,}`                      |
| `?`                     | quantifier | greedy optional greedy     | `{0,1}`                                 | all                                                                                                                | `colou?r`                    |
| `*`                     | quantifier | greedy zero or more greedy | `{0,}`                                  | all                                                                                                                | `a*`                         |
| `+`                     | quantifier | one or more greedy         | `{1,}`                                  | all                                                                                                                | `a+`                         |
| [[quantifier]]`?`       | quantifier | lazy                       |                                         | perl[^perl], php[^php], python[^python], java[^java], ecmas[^ecmas]                                                | `a??`, `a*?` `a+?`, `a{3,}?` |
| `│`                     | or         | logical OR                 |                                         | all                                                                                                                | `cat│dog`                    |
| `^`                     | anchor     | start of line              |                                         | all                                                                                                                | `^abc`                       |
| `$`                     | anchor     | end of line                |                                         | all                                                                                                                | `abc$`                       |
| `\A`                    | anchor     | start of text              |                                         | perl[^perl], php[^php], python[^python], pcre[^pcre]                                                               | `\Aabc`                      |
| `\Z`                    | anchor     | end of text                |                                         | perl[^perl], php[^php], python[^python], pcre[^pcre]                                                               | `abc\Z`                      |
| `\b`                    | anchor     | word boundary              |                                         | perl[^perl], php[^php], python[^python], java[^java], ecmas[^ecmas]                                                | `\bword\b`                   |
| `\B`                    | anchor     | non word boundary          |                                         | perl[^perl], php[^php], python[^python], java[^java], ecmas[^ecmas]                                                | `\Bend`                      |
| `\G`                    | anchor     | end of previous match      |                                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\G\d+`                      |
| `\\`                    | escape     | escape char                |                                         | all                                                                                                                | `\\.`                        |
| `[*]`                   | escape     | literal `*`                |                                         | all                                                                                                                | `[*]`                        |
| `(er)`                  | grouping   | capture group              |                                         | all                                                                                                                | `(abc)+`                     |
| `(?:er)`                | grouping   | non capture                |                                         | perl[^perl], php[^php], python[^python], java[^java], ecmas[^ecmas]                                                | `(?:abc)+`                   |
| `(?<id>er)`             | grouping   | named group                |                                         | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet]                                              | `(?<name>\w+)`               |
| `(?=er)`                | grouping   | positive lookahead         |                                         | perl[^perl], php[^php], python[^python], java[^java], ecmas[^ecmas]                                                | `\d(?=px)`                   |
| `(?!er)`                | grouping   | negative lookahead         |                                         | perl[^perl], php[^php], python[^python], java[^java], ecmas[^ecmas]                                                | `\d(?!px)`                   |
| `(?<=er)`               | grouping   | positive lookbehind        |                                         | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet]                                              | `(?<=\$)\d+`                 |
| `(?<!er)`               | grouping   | negative lookbehind        |                                         | perl[^perl], php[^php], python[^python], java[^java], dotnet[^dotnet]                                              | `(?<!\$)\d+`                 |
| `\1`..`\8`              | grouping   | backreference              |                                         | all                                                                                                                | `(\w+)\s\1`                  |
| `$0`..`$9`              | grouping   | replace reference          |                                         | most                                                                                                               | `$1`                         |
| `\Q`                    | grouping   | escape until `\E`          |                                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\Q1+1\E`                    |
| `\E`                    | grouping   | end modifier               |                                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `\Uabc\E`                    |
| `(?#comment)`           | others     | comment                    |                                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `(?#note)`                   |
| `(?modifier)`           | others     | flags                      | `(?i)`                                  | perl[^perl], php[^php], python[^python], java[^java]                                                               | `(?i)abc`                    |
| `(?(condition)erT│erF)` | others     | conditional                |                                         | perl[^perl], php[^php], pcre[^pcre]                                                                                | `(macth[0-3])(?(1)yes│no)`   |
| `(?{code})`             | others     | perl code                  |                                         | perl[^perl]                                                                                                        | `(?{print})`                 |
| `\l`                    | replace    | lowercase next char        |                                         | perl[^perl], php[^php]                                                                                             | `\l\1`                       |
| `\u`                    | replace    | uppercase next char        |                                         | perl[^perl], php[^php]                                                                                             | `\u\1`                       |
| `\L`                    | replace    | lowercase until `\E`       |                                         | perl[^perl], php[^php]                                                                                             | `\L\1\E`                     |
| `\U`                    | replace    | uppercase until `\E`       |                                         | perl[^perl], php[^php]                                                                                             | `\U\1\E`                     |

**Escaping**:

- `.`, `?`, `*`, `+`, `$`, `^`, `│`, `(`, `)`, `[`, `{`, `}` = `\`[[Meta Char]] or `[`[[Meta Char]]`]`
- `]`, `\` = `\`[[Meta Char]]

| flag | name            | Descr                                                              |
| ---- | --------------- | ------------------------------------------------------------------ |
| `i`  | insensitive     | Case insensitive match                                             |
| `m`  | multi-line      | ^ and $ match start/end of line (trata o texto como multilinha)    |
| `s`  | single-line     | Dot matches newline (trata o texto como uma única linha)           |
| `x`  | extended        | Ignore whitespace (permite inclusão de espaços e comentários)      |
| `L`  | location        | levar em conta a localização do sistema (somente Python).          |
| `g`  | global          | Don't return after first match                                     |
| `u`  | unicode         | Match with full unicode                                            |
| `U`  | ungreedy        | Make quantifiers lazy                                              |
| `D`  | dollar-end-only | $ matches only end of pattern                                      |
| `A`  | anchored        | Anchor to start of pattern, or at the end of the most recent match |
| `J`  | jchanged        | Allow duplicate subpattern names                                   |

---

| meta          | exemplo | precedência |
| ------------- | ------- | ----------- |
| quantificador | `ab+`   | maior       |
| concatenação  | `ab`    | média       |
| ou            | `ab│c`  | menor       |

---

| classe POSIX   | similar                        | significa               |
| -------------- | ------------------------------ | ----------------------- |
| `[[:upper:]]`  | `[A-Z]`                        | letras maiúsculas       |
| `[[:lower:]]`  | `[a-z]`                        | letras minúsculas       |
| `[[:alpha:]]`  | `[A-Za-z]`                     | maiúsculas e minúsculas |
| `[[:alnum:]]`  | ``[A-Za-zÀ-üÀ-ü0-9]`           | letras e números        |
| `[[:digit:]]`  | `[0-9]`                        | números                 |
| `[[:xdigit:]]` | `[0-9A-Fa-f]`                  | números hexadecimais    |
| `[[:punct:]]`  | `[,.;/?!@#$%¨&*()[\]{}<>:=_-]` | caracteres de pontuação |
| `[[:blank:]]`  | `[ \t]`                        | espaço em branco e TAB  |
| `[[:space:]]`  | `[ \t\n\r\f\v]`                | caracteres brancos      |
| `[[:cntrl:]]`  | -                              | caracteres de controle  |
| `[[:graph:]]`  | `[^ \t\n\r\f\v]`               | caracteres imprimíveis  |
| `[[:print:]]`  | `[^\t\n\r\f\v]`                | imprimíveis e o espaço  |

---

| prog                | opc  | mais | chaves  | borda  | ou   | grupo  |
| ------------------- | ---- | ---- | ------- | ------ | ---- | ------ |
| emacs[^ecmas]       | `?`  | `+`  | `-`     | `\b`   | `\│` | `\(\)` |
| javascript[^ecmas]  | `?`  | `+`  | `{,}`   | `\b`   | `│`  | `()`   |
| awk[^awk]           | `?`  | `+`  | `-`     | `-`    | `│`  | `()`   |
| egrep[^egrep]       | `?`  | `+`  | `{,}`   | `\b`   | │    | `()`   |
| expect[^expect]     | `?`  | `+`  | `-`     | `-`    | `│`  | `()`   |
| find[^find]         | `?`  | `+`  | `-`     | `\b`   | `\│` | `\(\)` |
| gawk[^gawk]         | `?`  | `+`  | `{,}`   | `\<\>` | `│`  | `()`   |
| lex[^lex]           | `?`  | `+`  | `{,}`   | `-`    | `│`  | `()`   |
| mawk[^mawk]         | `?`  | `+`  | `-`     | `-`    | `│`  | `()`   |
| perl[^perl]         | `?`  | `+`  | `{,}`   | `\b`   | `│`  | `()`   |
| php[^php]           | `?`  | `+`  | `{,}`   | `\b`   | `│`  | `()`   |
| python[^python]     | `?`  | `+`  | `{,}`   | `\b`   | `│`  | `()`   |
| tcl[^tcl]           | `?`  | `+`  | -       | `-`    | `│`  | `()`   |
| vbscript[^vbscript] | `?`  | `+`  | `{,}`   | `\b`   | `│`  | `()`   |
| ed[^ed]             | `\?` | `\+` | `\{,\}` | `\b`   | `\│` | `\(\)` |
| grep[^grep]         | `\?` | `\+` | `\{,\}` | `\b`   | `\│` | `\(\)` |
| sed[^sed]           | `\?` | `\+` | `\{,\}` | `\<\>` | `\│` | `\(\)` |
| vim[^vim]           | `\=` | `\+` | `\{,}`  | `\<\>` | `\│` | `\(\)` |
| Rust[^rust]         |      |      |         |        |      |        |
| Java[^java]         |      |      |         |        |      |        |
| Golang[^golang]     |      |      |         |        |      |        |
| .Net7.0[^dotnet]    |      |      |         |        |      |        |
| PCRE(Legacy)[^pcre] |      |      |         |        |      |        |

> NOTA1: `.` `*` `[]` `[^]` `^` `$` e `\` são iguais pra todos

[^php]: Suport PCRE2 PHP
[^python]: Suport Python Language
[^ecmas]: Suport ECMASsript - Javacript
[^awk]: Suport awk Linux
[^egrep]: Suport egrep Linux
[^expect]: Suport expect Language
[^find]: Suport find Linux
[^gawk]: Suport gawk Linux
[^lex]: Suport lex Linux
[^mawk]: Suport mawk Linux
[^perl]: Suport perl Language
[^tcl]: Suport tcl Language
[^vbscript]: Suport vbscript Language
[^ed]: Suport ed Linux
[^grep]: Suport grep Linux
[^sed]: Suport sed Linux
[^vim]: Suport vim Linux
[^rust]: Suport rust Language
[^java]: Suport java Language
[^golang]: Suport golang Language
[^dotnet]: Suport .Net7.0(C#) Language
[^pcre]: Suport PCRE Legacy

## Exemplos

Comentários/texto in/multi-line:

```regex
/(?:(["'`]|["']{3})|(\/\*)|([\/-]{2,}|#))(.*?)(?(1)\1|(?(2)\*\/|(?(3)\R)))/gs

   /
   (?:
      (["'`]|["']{3})|
      (\/\*)|
      ([\/-]{2,}|#)
   )

   (.*?)
   
   (?(1)\1|
   (?(2)\*\/|
   (?(3)\R)))
   /gsx
```

Blocos de código/arrays/list/dict {}, (), [], begin-end

```regex
/(?:(\{)|(\()|(\[)|(begin)|(do))(.*?)(?(1)\}|(?(2)\)|(?(3)\]|(?(4)end|(?(5)end(?:\s+do)?)))))/gsi

   /
   (?:
      (\{)|
      (\()|
      (\[)|
      (begin)|
      (do)
   )

   (.*?)
   
   (?(1)\}|
   (?(2)\)|
   (?(3)\]|
   (?(4)end|
   (?(5)end(?:\s+do)?)))))
   /gsix
```
