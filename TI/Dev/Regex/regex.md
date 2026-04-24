# Expressões Regulares - RegEx

Sintaxe:

`[Âncora]<Representantes|Lista|Grupo>[Quantificadores][Âncora]`

## Introdução

- **O que são Expressões Regulares (Regex)?**
  - Definição e propósito: padrões para combinar e manipular texto.
  - Aplicações: validação de dados, busca e substituição de texto, análise de logs, etc.
- **Por que aprender Regex?**
  - Automatização de tarefas repetitivas.
  - Aumento da produtividade.
  - Habilidade poderosa para manipulação de texto.
- **Ferramentas e ambientes de teste:**
  - [regex101.com](https://regex101.com/)
  - [regexr.com](https://regexr.com/)
  - Editores de texto com suporte a Regex (VS Code, Sublime Text, etc.)
  - Guia Prático: <https://aurelio.net/regex/guia/>
- **Algumas lingagens ou progrmas para usar ER:**  
  [[PCRE]]: Perl Compatible Regular Expressions - (Perl, PHP, etc)  
  [[ECMAScript]]: JavaScript, JScript, ActionScript  
  [[Python]]: Python  
  [[sed]]: Linux sed command  
  [[awk]]: Linux awk command  
  [[grep]]: Linux grep command  
  [[if]]: Linux if command  
  [[vi]]: Linux vi command  
  [[vscode]]: Linux VSCode command  
  [[np++]]: Linux NotePad++ command  
  [[libre]]: Linux LibreOffice command  
  [[word]]: Linux Word command  
  [[sql]]: Linux Word command  

## Conceitos

- Correspondência exata de caracteres.
- Exemplo: "texto" corresponde a "texto".

!!! info Resumo dos Tokens Básicos
    Caracteres especiais com significados específicos.

    | Token | Desc                |
    | ----- | ------------------- |
    | `.`   | ponto               |
    | `?`   | opcional            |
    | `*`   | asterisco           |
    | `+`   | mais                |
    | `[]`  | lista               |
    | `[^]` | lista negada        |
    | `{}`  | chaves              |
    | `()`  | grupo               |
    | `^`   | circunflexo (start) |
    | `$`   | cifrão (end)        |
    | `\b`  | borda               |
    | `\\`  | escape              |
    | `\|`  | ou                  |
    | `\1`  | retrovisor          |

!!! info Classe Representantes: Single Token
    | Token   | Desc                                        |
    | ------- | ------------------------------------------- |
    | `.`     | **corresponde a qualquer caractere**        |
    | literal | Qualquer caracter que não seja token básico |

!!! info Classe Representantes: List Sequence:
    | List     | Desc                                                                                    |
    | -------- | --------------------------------------------------------------------------------------- |
    | `[abc]`  | **Lista Exigente. corresponde a qualquer caractere dentro dos colchetes.**              |
    | `[a-z]`  | **Lista Exigente. corresponde a qualquer caractere de "a" a "z".**                      |
    | `[0-9]`  | **Lista Exigente. corresponde a qualquer dígito.**                                      |
    | `[^abc]` | **Lista negada. corresponde a qualquer caractere que não esteja dentro dos colchetes.** |

!!! info Classe Quantificadores: Greedy (gulosos):
    | Quant   | Desc                         |
    | ------- | ---------------------------- |
    | `?`     | **zero ou uma ocorrência**   |
    | `*`     | **zero ou mais ocorrências** |
    | `+`     | **uma ou mais ocorrências**  |
    | `{n}`   | **exatamente n ocorrências** |
    | `{n,}`  | **n ou mais ocorrências**    |
    | `{n,m}` | **entre n e m ocorrências**  |

!!! info Classe Representantes: Atomics Tokens:
    | Token | Desc                               |
    | ----- | ---------------------------------- |
    | `\n`  | **newline, linha nova**            |
    | `\r`  | **carriage ret, retorno de carro** |
    | `\t`  | **htab, tabulação horizontal**     |
    | `\a`  | alert, alerta (bipe)               |
    | `\b`  | backspace, caractere Backspace     |
    | `\e`  | escape, caractere Esc              |
    | `\f`  | form feed, alimentação             |
    | `\v`  | vtab, tabulação vertical           |
    | `\0`  | caracter NULL                      |

!!! info Classe Representantes: Meta Escape:
    - `\`: escape, `\.` torna literal o caractere `.`

!!! info Classe Representantes: POSIX Sequence:
    | POSIX        | Seq.List         | Desc                   |
    | ------------ | ---------------- | ---------------------- |
    | `[:upper:]`  | `[A-Z]`          | letras maiúsculas      |
    | `[:lower:]`  | `[a-z]`          | letras minúsculas      |
    | `[:alpha:]`  | `[A-Za-z]`       | maiúsculas/minúsculas  |
    | `[:alnum:]`  | `[A-Za-z0-9]`    | letras e números       |
    | `[:digit:]`  | `[0-9]`          | números                |
    | `[:xdigit:]` | `[0-9A-Fa-f]`    | números hexadecimais   |
    | `[:punct:]`  | `[.,!?:...]`     | sinais de pontuação    |
    | `[:blank:]`  | `[ \t]`          | espaço e TAB           |
    | `[:space:]`  | `[ \t\n\r\f\v]`  | caracteres brancos     |
    | `[:cntrl:]`  | `-`              | caracteres de controle |
    | `[:graph:]`  | `[^ \t\n\r\f\v]` | caracteres imprimíveis |
    | `[:print:]`  | `[^\t\n\r\f\v]`  | imprimíveis e o espaço |

    > Uso sempre com listas `[]`, exemplo `[[:upper:][:digit:]]`

!!! info Classe Representantes: Meta Sequence (Alias):
    | Token | POSIX           | Seq.List         | Desc           |
    | ----- | --------------- | ---------------- | -------------- |
    | `\d`  | `[[:digit:]]`   | `[0-9]`          | dígito         |
    | `\D`  | `[^[:digit:]]`  | `[^0-9]`         | não-dígito     |
    | `\w`  | `[[:alnum:]_]`  | `[A-Za-z0-9_]`   | palavra        |
    | `\W`  | `[^[:alnum:]_]` | `[^A-Za-z0-9_]`  | não-palavra    |
    | `\s`  | `[[:space:]]`   | `[ \t\n\r\f\v]`  | branco         |
    | `\S`  | `[^[:space:]]`  | `[^ \t\n\r\f\v]` | não-branco     |
    | `\a`  | `[[:alpha:]]`   | `[A-Za-z]`       | alfabeto       |
    | `\A`  | `[^[:alpha:]]`  | `[^A-Za-z]`      | não-alfabeto   |
    | `\l`  | `[[:lower:]]`   | `[a-z]`          | minúsculas     |
    | `\L`  | `[^[:lower:]]`  | `[^a-z]`         | não-minúsculas |
    | `\u`  | `[[:upper:]]`   | `[A-Z]`          | maiúsculas     |
    | `\U`  | `[^[:upper:]]`  | `[^A-Z]`         | não-maiúsculas |

!!! info Classe Quantificadores: non-Greedy (não gulosos):
    | Quant    | Desc                     |
    | -------- | ------------------------ |
    | `??`     | zero ou uma ocorrência   |
    | `*?`     | zero ou mais ocorrências |
    | `+?`     | uma ou mais ocorrências  |
    | `{n}?`   | exatamente n ocorrências |
    | `{n,}?`  | n ou mais ocorrências    |
    | `{n,m}?` | entre n e m ocorrências  |

    Basicamente é o quantificador guloso seguido de ?

    Captura somente se não tiver outra chave 

!!! info Âncoras:
    | Anchor | Desc                      |
    | ------ | ------------------------- |
    | `^`    | **início da linha**       |
    | `$`    | **fim da linha**          |
    | `\b`   | **limite de palavra**     |
    | `\B`   | não-borda                 |
    | `\A`   | início do texto           |
    | `\Z`   | fim do texto              |
    | `\E`   | fim da modificação        |
    | `\G`   | fim do casamento anterior |

!!! info Grupos de captura e Backreferences(Retrovisores):
    - `()`: agrupa caracteres e captura o texto correspondente.
    - `\1...\9`: retrovisor, texto casado nos grupos 1...9
    - Referência a grupos capturados: `\1`, `\2`, etc.

!!! info Grupos Avançados:
    - `(?:RE)`: Agrupa sem captura (sem retrovisor)
    - identificando: Agrupa para captura e acrescenta um nome `identificador`
      - `(?<identificador>...)`: [[PCRE]] [[ECMAScript]] [[vscode]] [[np++]]
      - `(?P<identificador>...)`: [[PCRE]] [[Python]]
    - `(?modificador)`: Pode-se "configurar" uma parte da RE precedendo-a com esta construção, e modificador pode ser um único caractere
    - `(?#comment)`: Produz um comentário ignorado pelo robô. Não agrupa nem captura
    - `(?(condição)RE-sim|RE-não)`: A condição geralmente é um número, que referencia a um grupo prévio.
      - Ex: `(\().*?(?(1)\))` procurar entre parenteses
      - Ex: `(\().*?(?(1)\))|(\[).*?(?(2)\])` idem acima ou quochetes
      - Ex: `(\().*?(?(1)\))|(\[).*?(?(2)\])|(['"]).*?(?(3)\3)` idem acima ou aspas simples/duplas
    - `(?{código})`: códigos Perl
  
      ```perl
      $_ = 'a' x 8;
      m<
      (?{ $cnt = 0 })             #inicializa
      (
      a
          (?{
          local $cnt = $cnt + 1; #incrementa
          })
      )*
      aaaa
      (?{ $res = $cnt })  # se ok, copia para
                          # uma var não-local
      >x;
      ```

!!! info Lookarounds:
    | Lookarounds    | Desc                |
    | -------------- | ------------------- |
    | `REref(?=RE)`  | lookahead positivo  |
    | `REref(?!RE)`  | lookahead negativo  |
    | `(?<=RE)REref` | lookbehind positivo |
    | `(?<!RE)REref` | lookbehind negativo |

    Espia RE posterior/anterior à REref caso positivo/negativo para aceitar REref

!!! info Alternância:
    - `|`: corresponde a uma ou outra expressão.
    - Exemplo: "gato|cachorro" corresponde a "gato" ou "cachorro".

!!! info Representantes Alias Avançados:
    | Alias | Desc                                        |
    | ----- | ------------------------------------------- |
    | `\h`  | `[[\|alpha]_]`     = cabeça de palavra      |
    | `\H`  | `[^[\|alpha\|]_]`   = não-cabeça de palavra |
    | `\o`  | `[0-7]`           = número octal            |
    | `\O`  | `[^0-7]`          = não-número octal        |
    | `\l`  | torna minúscula                             |
    | `\L`  | torna minúscula até \E                      |
    | `\u`  | torna maiúscula                             |
    | `\U`  | torna maiúscula até \E                      |
    | `\Q`  | escapa até \E                               |

!!! info Modificadores:
    São adicionados fora da RE `/RE/Modificadores`, com grupo `(?Modificadores)` ou funções específicas

    - Comuns:
      - `i` (Case-Insensitive):
          * Torna a correspondência insensível a maiúsculas e minúsculas.
          * Exemplo: `/padrão/i` corresponderá a "Padrão", "padrão" e "PADRÃO".
      - `g` (Global):
          * Encontra todas as ocorrências do padrão em vez de parar na primeira.
          * Essencial para substituir todas as instâncias de um texto.
      - `m` (Multiline):
          * Permite que os âncoras `^` e `$` correspondam ao início e fim de cada linha dentro de uma string de várias linhas, em vez de apenas o início e o fim da string inteira.
      - `s` (Dotall):
          * Faz com que o metacaractere `.` corresponda a qualquer caractere, incluindo novas linhas.
          * Útil para padrões que abrangem várias linhas.
    - PCRE/PCRE2(PHP|PERL):
        - `x` (Extended): Permite espaços em branco e comentários em expressões regulares para melhor legibilidade.
        - `A` (Anchored): Força o padrão a corresponder apenas no início da string.
        - `D` (Dollar end only): Força o $ a corresponder apenas no final da string.
        - `U` (Ungreedy): Inverte a ganância dos quantificadores, tornando-os não gulosos por padrão.
        - `u` (UTF-8): Habilita o suporte a caracteres UTF-8.
    - ECMAScript (JavaScript):
        - `y` (Sticky): Corresponde apenas a partir da posição `lastIndex` da string.
        - `u` (Unicode): Habilita o suporte completo a Unicode.
    - Python:
        - `re.IGNORECASE` ou `re.I`: Equivalente a `i`.
        - `re.MULTILINE` ou `re.M`: Equivalente a `m`.
        - `re.DOTALL` ou `re.S`: Equivalente a `s`.
        - `re.VERBOSE` ou `re.X`: Equivalente a `x`.
        - `re.ASCII` ou `re.A`: Faz com que `\w`, `\b`, `\s` e `\d` correspondam apenas a caracteres ASCII.
    - Linux (grep):
        - `-i`: Equivalente a `i`.
        - `-o`: Exibe apenas a parte da linha que corresponde ao padrão.
        - `-v`: Inverte a correspondência, exibindo linhas que *não* correspondem ao padrão.
        - `-r`: Busca recursivamente em diretórios.
        - `-E`: Habilita expressões regulares estendidas (ERE), que oferecem mais metacaracteres.
        - `-P`: Habilita expressões regulares compatíveis com Perl (PCRE).

      > A disponibilidade e o comportamento exato dos modificadores podem variar ligeiramente entre as versões de cada motor de regex.
      >
      > Muitas linguagens de programação permitem combinar vários modificadores em uma única expressão regular. Por exemplo, em Python, você pode usar `re.IGNORECASE | re.MULTILINE`.

!!! info Precedência:
    - maior: `ab+` quantificador
    - média: `ab` concatenação
    - menor: `ab|c` ou

## Perigos

- O que funciona em uma plataforma pode não funcionar em outra
- Negação de palavra
- Escape com aspas simples/dupla/formatado
- Comportamentos diferentes ex: gulosos/não gulosos

## Exemplos

Um passo de cada vez.

Comece simples e vá substituindo os termos

!!! info data `dd/mm/aaaa`
    - `../../....`
    - `[0-9]{2}/[0-9]{2}/[0-9]{4}`
    - `[0123][0-9]/[0-9]{2}/[0-9]{4}`
    - `[0123][0-9]/[01][0-9]/[0-9]{4}`
    - `[0123][0-9]/[01][0-9]/[12][0-9]{3}`
    - `([012][0-9]|3[01])/[01][0-9]/[12][0-9]{3}`
    - `([012][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}`
    - `(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}`

!!! info hora `hh:mm`
    - `..:..`
    - `[0-9]{2}:[0-9]{2}`
    - `[012][0-9]:[0-9]{2}`
    - `[012][0-9]:[0-5][0-9]`
    - `([01][0-9]|2[0-3]):[0-5][0-9]`

!!! info email `usu@dom.zz`
    - `.*@.*`
    - `[^@]*@[^@]*`
    - `[^@]+@[^@]+`
    - `[A-Za-z0-9_.-]+@[A-Za-z0-9_.]+`
    - `[A-Za-z0-9_.-]+@[A-Za-z0-9_]+\.[a-z]{2,3}`
    - `[A-Za-z0-9_.-]+@([A-Za-z0-9_]+\.)+[a-z]{2,3}`
    - `[A-Za-z0-9_.-]+@([A-Za-z0-9_]+\.)+[A-Za-z]{2,3}`
    - `[A-Za-z0-9_.-]+@([A-Za-z0-9_]+\.)+[A-Za-z]{2,4}`

!!! info números
    - `[0-9]`
    - `[0-9]+`
    - `-?[0-9]+`
    - `[-+]?[0-9]+`
    - `[-+]?[0-9]+,[0-9]{2}`
    - `[-+]?[0-9]+(,[0-9]{2})?`
    - `[-+]?[0-9]+\.[0-9]+(,[0-9]{2})?`
    - `[-+]?[0-9]+\.[0-9]{3}(,[0-9]{2})?`
    - `[-+]?[0-9]{3}\.[0-9]{3}(,[0-9]{2})?`
    - `[-+]?[0-9]{1,3}\.[0-9]{3}(,[0-9]{2})?`
    - `[-+]?[0-9]{1,3}(\.[0-9]{3})?(,[0-9]{2})?`

!!! info telefone
    - `...-....`
    - `[0-9]{3}-[0-9]{4}`
    - `[0-9]{4}-[0-9]{4}`
    - `\(..\)[0-9]{4}-[0-9]{4}`
    - `\(..\) ?[0-9]{4}-[0-9]{4}`
    - `\(0xx..\) ?[0-9]{4}-[0-9]{4}`
    - `\(0xx[0-9]{2}\) ?[0-9]{4}-[0-9]{4}`
    - `(\(0xx[0-9]{2}\) ?)?[0-9]{4}-[0-9]{4}`

## Comandos

!!! info PHP [[PCRE]]
    - Use \1...\9 para ['] e \\1...\\9 para retrovisores para ["]
    - `preg_match()`: Verifica se um padrão existe em uma string.
    - `preg_match_all()`: Encontra todas as ocorrências de um padrão em uma string.
    - `preg_replace()`: Substitui texto correspondente a um padrão.
    - `preg_split()`: Separa partes de uma string com base em um padrão.
    - `preg_quote()`: Garante que strings literais sejam tratadas como texto simples em padrões regex.
    - `preg_filter()`: Filtra um array com base em substituições regex.
    - `preg_grep()`: Filtra arrays usando padrões regex.
    - `preg_replace_callback()`: Permite lógica de substituição complexa.
    - `preg_replace_callback_array()`: Múltiplas substituições complexas em uma chamada.

!!! info Python [[Python]]
    - Use \\1...\\9 para retrovisores
    - `re.search()`: Verifica se um padrão existe em uma string e retorna um objeto de correspondência se encontrado.
    - `re.findall()`: Encontra todas as ocorrências de um padrão em uma string.
    - `re.sub()`: Substitui texto correspondente a um padrão.
    - `re.split()`: Separa partes de uma string com base em um padrão.

!!! info ECMAScript [[ECMAScript]]
    - Use $1...$9 para retrovisores
    - `RegExp.prototype.match()`:
      - O método `match()` retorna um array contendo as correspondências encontradas.
      - Se a expressão regular tiver o sinalizador `g` (global), `match()` retorna um array com todas as correspondências, mas os grupos de captura não são incluídos.
      - Se o sinalizador `g` não estiver presente, `match()` retorna um array com a correspondência completa na posição 0, e os grupos capturados nas posições subsequentes.
    - `RegExp.prototype.exec()`:
      - O método `exec()` retorna um objeto de resultado com informações detalhadas sobre a correspondência, incluindo os grupos capturados e a posição da correspondência.
      - Ao contrário de `match()`, `exec()` sempre retorna um objeto de resultado, mesmo com o sinalizador `g`.
      - Para obter todas as correspondências com `exec()` e o sinalizador `g`, você precisa usá-lo em um loop.
    - `RegExp.prototype.replace()`:
      - O método `replace()` permite usar grupos capturados na string de substituição.
      - Os grupos capturados são referenciados usando `$1`, `$2`, etc.
    - `RegExp.prototype.exec()`:
      - O objeto de resultado retornado por `exec()` possui a propriedade `index`, que indica a posição da correspondência na string original.
      - Você pode usar essa propriedade para obter a posição inicial da correspondência.
      - Para obter a posição final, você pode adicionar o comprimento da correspondência à propriedade `index`.
    - `RegExp.prototype.test()`:
      - Testa se uma string corresponde a um padrão Regex.

!!! info Linux
    - Use \1...\9 ou \\1...\\9 para retrovisores depedendo do comando e/ou ["']
    - `grep`: Busca linhas que correspondem a um padrão Regex.
    - `egrep`: Versão estendida do `grep` com mais metacaracteres.
      - Para obter as posições de caracteres, você pode combinar `grep` com a opção `-o` (exibir apenas a correspondência) e `sed` para manipulação adicional.
      - `grep` com a flag "-b" retorna o byte offset.
    - `sed`: Editor de fluxo para transformar texto usando Regex.
    - `awk`: Linguagem de processamento de texto que usa Regex.
    - `if`: Usando o operador "=~" dentro de um if do bash, é possível verificar se uma string bate com um padrão regex.
        - Se a correspondência for bem-sucedida, os grupos capturados são armazenados em um array chamado `BASH_REMATCH`.
    - `vi`/`vim`:
      - Procura:
        - `/padrão`: para frente.
        - `?padrão`: para trás.
        - `/\<padrão\>`: como uma palavra inteira.
        - `/padrão\c`: ignorando a diferença entre maiúsculas e minúsculas.
        - Após a procura, use `n` para ir para a próxima ocorrência e `N` para a ocorrência anterior.
      - Substitui:
        - `:s/antigo/novo/`: a primeira ocorrência de "antigo" por "novo" na linha atual.
        - `:s/antigo/novo/g`: todas as ocorrências de "antigo" por "novo" na linha atual.
        - `:%s/antigo/novo/g`: todas as ocorrências de "antigo" por "novo" em todo o arquivo.
        - `:%s/antigo/novo/gc`: todas as ocorrências de "antigo" por "novo" em todo o arquivo, pedindo confirmação antes de cada substituição.
        - `:10,20s/antigo/novo/g`: todas as ocorrências de "antigo" por "novo" nas linhas 10 a 20.
      - Grupos:
        - Você pode usar `\1`, `\2`, etc., para referenciar grupos de captura no padrão de substituição.
        - `:s/\(.*\),\s*\(.*\)/\2, \1/` - Inverte a ordem de duas palavras separadas por vírgula e espaço.
      - Exemplos Práticos:
        - `:%s/erro/aviso/g`: Substituir todas as ocorrências de "erro" por "aviso" em todo o arquivo
        - `:%s/Vim/Neovim/gi`: Substituir todas as palavras "Vim" por "Neovim", ignorando maiúsculas e minúsculas
        - `:%s/\s\+$//`: Remover todos os espaços em branco no final das linhas
        - `:s/\d\+/0&/g`: Adicionar "0" no início de todos os números de uma linha
      - Dicas:
        - Use `\c` no padrão de busca para ignorar maiúsculas e minúsculas.
        - Use `\i` no padrão de busca para procurar palavras inteiras.
        - Use `gc` no comando de substituição para pedir confirmação antes de cada substituição.
        - Você pode usar `&` no padrão de substituição para referenciar a string correspondente.
        - O Vim possui muitas outras opções e recursos para procuras e substituições. Consulte a documentação do Vim para mais detalhes.

!!! info Perl  [[PCRE]]
    - `m//`: Operador de correspondência de padrão.
      - `'texto123' =~ m/[0-9]+/;` // Verifica se há números na string.
    - `s///`: Operador de substituição.
      - `'texto123' =~ s/[0-9]+//;` // Remove todos os números.
    - `split()`: Divide uma string em uma lista usando um padrão Regex.
      - `split(/,/, 'maçã,banana,laranja');` // Divide a string por vírgulas.

!!! info MariaDB  [[sql]] [[PCRE]]
    - Use \\1...\\9 para retrovisores
    - `REGEXP_INSTR()`: Retorna a posição da primeira ocorrência de um padrão de expressão regular em uma string.
      - `REGEXP_INSTR(expr, pat[, pos[, occurrence[, return_option[, match_type]]]])`
          - `expr`: A string na qual procurar.
          - `pat`: O padrão de expressão regular.
          - Outros parâmetros são opcionais e permitem maior controle sobre a pesquisa.
    - `REGEXP_REPLACE()`: Substitui todas as ocorrências de um padrão de expressão regular em uma string por outra string.
      - `REGEXP_REPLACE(expr, pat, repl[, pos[, occurrence[, match_type]]])`
          - `expr`: A string na qual realizar a substituição.
          - `pat`: O padrão de expressão regular a ser substituído.
          - `repl`: A string de substituição.
    - `REGEXP_SUBSTR()`: Retorna a substring que corresponde a um padrão de expressão regular em uma string.
      - `REGEXP_SUBSTR(expr, pat[, pos[, occurrence[, match_type]]])`
          - `expr`: A string da qual extrair a substring.
          - `pat`: O padrão de expressão regular.
    - `[NOT] REGEXP` ou `[NOT] RLIKE`: É um como LIKE, só que com expressão regular

!!! info MySQL  [[sql]]
    - Use \\1...\\9 para retrovisores
    - tem apenas `REGEXP`/`RLIKE`
    - Use UDF (User Defined Funcions) `lib_mysqludf_preg-1.0.1.tar.gz` para obter mais funções de regex no mysql como é o default no MariaDB.

!!! info LibreOffice [[libre]]
    - Use $1...$9 para retrovisores
    - Tem poucos tokens
    - Write/Calc: Find/Replace - mode options

!!! info Notepad++ [[np++]]
    - Use \1...\9 para retrovisores
    - `CTRL+F`: find
    - `CTRL+H`: replace
    - [x] marque regular expression

!!! info VSCode [[vscode]]
    - Use \1...\9 para retrovisores
    - No Editor:
      - `CTRL+F`: Find (Procura)
      - `CTRL+H`: Replace (Subistituição)
      - `CTRL+SHIF+L`: Multi-Select
    - Na caixa de Find/Replace:
      - ícone find [[>]]: Ativa/Desativa Replace (Subistituição)
      - ícone find [[Aa]]: `ALT+C` Ativa/Desativa case sensitive (Diferenciar maiúsculas de minúsculas)
      - ícone find [[_ab_]]: `ALT+W` Ativa/Desativa full word (Coincidir palavra inteira)
      - ícone find [[.*]]: `ALT+R` Ativa/Desativa regex
      - ícone find [[↑]]: `SHIFT+ENTER` Seleciona o anterior [^FindReplBox]
      - ícone find [[↓]]: `ENTER` Seleciona o próximo [^FindReplBox]
      - ícone find [[≡]]: `ALT+J` Ativa/Desativa Encontrar na seleção
      - ícone replace [[AB]]: `ALT+P` Preserva as maiúculas e minúsculas
      - ícone replace [[![alt text](repl.png)]]: `ENTER`  Subistitui e seleciona o próximo [^FindReplBox]
      - ícone replace [[![alt text](repl_all.png)]]: `ENTER`  Subistitui e seleciona o próximo [^FindReplBox]
      - `ALT+ENTER`: Seleciona todos [^FindReplBox]

    [^FindReplBox]: Somente dentro do Text Box Find / Replace.

## Exercícios Práticos

- Validação de endereços de e-mail.
- Extração de números de telefone de um texto.
- Substituição de datas em diferentes formatos.
- Análise de logs para encontrar padrões específicos.
- Criação de expressões regulares para tarefas do dia a dia.
