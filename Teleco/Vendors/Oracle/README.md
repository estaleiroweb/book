# Regex OCSBC

**Veja**:

- [regex101](https://regex101.com/) para testar REGEX
- [Guia RegEx](https://aurelio.net/regex/guia/) do Aurélio Jargas
- [Manual Oracle](sbc_scz830_hmr.md)
- [Sip Headers](sip_headers.md)
- [HTTP Headers](http_headers.md)
- [Resumo Headers](table_headers.md)

## Summary Regex

| Meta Character    | Group      | Function                                                    |
| ----------------- | ---------- | ----------------------------------------------------------- |
| `example`         | -          | literal                                                     |
| `│`               | -          | or                                                          |
| `[]`              | list       | allowed                                                     |
| `[^]`             | list       | denied                                                      |
| `.`               | wildcard   | any                                                         |
| `\n`              | wildcard   | LF Line Feed                                                |
| `\r`              | wildcard   | CR Carriage Return                                          |
| `\t`              | wildcard   | tab                                                         |
| `\v`              | wildcard   | vertical tab                                                |
| `\f`              | wildcard   | form feed                                                   |
| `\s`              | wildcard   | whitespace " ",`\r`, `\n` , `\t` , `\v` e `\f`              |
| `\S`              | wildcard   | non-whitespace                                              |
| `\d`              | wildcard   | digits `[0-9]`                                              |
| `\D`              | wildcard   | non-digits`[^0-9]`                                          |
| `\w`              | wildcard   | word `[a-zA-Z_-]`                                           |
| `\W`              | wildcard   | non-word `[^a-zA-Z_-]`                                      |
| `\R`              | wildcard   | any `\r`, `\n`, or `\r\n`                                   |
| `{n,m}`           | quantifier | greedy specific min-max                                     |
| `{n,}`            | quantifier | greedy specific min                                         |
| `{,m}`            | quantifier | greedy specific max = `{0,m}`                               |
| `{n}`             | quantifier | greedy specific exactly                                     |
| `?`               | quantifier | greedy opcional = 0 ou 1 `{0,1}`                            |
| `*`               | quantifier | greedy any = 0-infinito `{0,}`                              |
| `+`               | quantifier | greedy least one = 1-infinito `{1,}`                        |
| [[quantifier]]`?` | quantifier | lazy specific min-max                                       |
| `()`              | grouping   | with capture reference                                      |
| `(?:er)`          | grouping   | without capture reference                                   |
| `(?<id>er)`       | grouping   | named group and with capture reference                      |
| `(?=er)`          | grouping   | positive lookahead                                          |
| `(?!er)`          | grouping   | negative lookahead                                          |
| `(?<=er)`         | grouping   | positive lookbehind                                         |
| `(?<!er)`         | grouping   | negative lookbehind                                         |
| `\1`..`\8`        | grouping   | back reference to match `\1`..`\9` groups                   |
| `$0`..`$9`        | grouping   | back reference to replace `$0`=all match, `$1`..`$9` groups |
| `\b`              | anchor     | word borders                                                |
| `\B`              | anchor     | no word borders                                             |
| `^`               | anchor     | start line (checar multiline flag)                          |
| `$`               | anchor     | end line (checar multiline flag)                            |
| `\A`              | anchor     | start text                                                  |
| `\Z`              | anchor     | end text                                                    |

**Escaping**:

- `.`, `?`, `*`, `+`, `$`, `^`, `│`, `(`, `)`, `[`, `{`, `}` = `\`[[Meta Char]] or `[`[[Meta Char]]`]`
- `]`, `\` = `\`[[Meta Char]]

**Variáveis**:

- `$<header_name>`
- `$<header_name>,$<element_name>`

**Back reference**:

- Search/match: `\1`..`\9`
- Replace: `$0`..`$9` ou [[variable]]`.$0`..[[variable]]`.$9`

**Flags**:

Use `(?flag)`

| flag | name        | Descr                                                           |
| ---- | ----------- | --------------------------------------------------------------- |
| `i`  | insensitive | Case insensitive match                                          |
| `m`  | multi-line  | ^ and $ match start/end of line (trata o texto como multilinha) |
| `s`  | single-line | Dot matches newline (trata o texto como uma única linha)        |
| `x`  | extended    | Ignore whitespace (permite inclusão de espaços e comentários)   |
| `U`  | ungreedy    | Make quantifiers lazy                                           |
| `J`  | jchanged    | Allow duplicate subpattern names                                |

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

## Summary Boolean

| Boolean Operator | Description                               |
| ---------------- | ----------------------------------------- |
| `&`              | meaning AND                               |
| `│`              | meaning OR                                |
| `!`              | meaning NOT                               |
| `==`             | String case sensitive equality operator   |
| `~=`             | String case insensitive equality operator |
| `!=`             | String case sensitive inequality operator |
| `<=`             | Less than or equal to operator            |
| `>=`             | Greater than or equal to operator         |
| `<`              | Less than operator                        |
| `>`              | Greater than operator                     |

## Testando

**Testando Regras**:

```text
ORACLE# configure terminal
ORACLE(configure)# session-router
ORACLE(session-router)# test-pattern-rule
ORACLE(test-pattern-rule)# expression ".*(;tgid=(.+)).*"
expression made 0 matches against string
ORACLE(test-pattern-rule)# string "sip:+17024260002@KCMGGWC;user=phone SIP/2.0;tgid=Trunk1"
expression made 3 matches against string
ORACLE(test-pattern-rule)# show
Pattern Rule:
        Expression : .*(;tgid=(.+)).*
        String     : sip:+17024260002@KCMGGWC;user=phone SIP/2.0;tgid=Trunk1
        Matched    : TRUE
        Matches:
$0 sip:+17024260002@KCMGGWC;user=phone SIP/2.0;tgid=Trunk1
$1 ;tgid=Trunk1
$2 Trunk1

ORACLE(test-pattern-rule)#
```

**Exemplo de test**:

```text
configure terminal
session-router
test-pattern-rule
expression "^(0|90)(91\d{8,9}@)"
string "091999999999@domain.com"
show

```

**Testar heder sip**:

| Sub-comando           | Descrição                                                            |
| debugging             | display sip-manipulation debugging                                   |
| direction             | direction of the sip message <in, out>                               |
| display-sip-message   | shows the entered sip message                                        |
| execute               | execute the referenced sip-manipulation against the sip message      |
| load-sip-message      | enter the sip message to be parsed                                   |
| local-ip              | IP and port for local IP                                             |
| manipulation-pattern  | manipulation pattern, used in $MANIP_PATTERN                         |
| manipulation-string   | manipulation string, used in $MANIP_STRING                           |
| quit                  | quit out of configuration mode                                       |
| refresh-manipulations | reload any newly configured sip-manipulations                        |
| remote-ip             | IP and port for remote IP                                            |
| reset                 | set all parameters back to their defaults, including the SIP message |
| show                  | shows configuration parameters for this object                       |
| sip-manipulation      | sip-manipulation name                                                |
| tgrp-context          | trunk group context, used in $TRUNK_GROUP_CONTEXT                    |
| exit                  | end test                                                             |

```abnf
ORACLE# configure terminal
ORACLE(configure)# session-router
ORACLE(session-router)# test-sip-manipulation 
ORACLE(test-sip-manipulation)# load-sip-message 
Collecting Input.  Enter <CTRL-D> to stop.
INVITE sip:021999999999@domain.com SIP/2.0
Via: SIP/2.0/UDP 10.0.0.1:5060
From: "User" <sip:11988887777@domain.com>;tag=abc123
To: <sip:02191999999999@domain.com>
P-Asserted-Identity: <sip:11988887777@domain.com>
Call-ID: 223456789
CSeq: 1 INVITE
Content-Length: 0
 
Sip Message successfully parsed.
ORACLE(test-sip-manipulation)# sip-manipulation NormalizaTo24CLARO
ORACLE(test-sip-manipulation)# execute
After Manipulation[NormalizaTo24CLARO]
 
INVITE sip:021999999999@domain.com SIP/2.0
Via: SIP/2.0/UDP 10.0.0.1:5060
From: "User" <sip:11988887777@domain.com>;tag=abc123
To: <sip:5591999999999@domain.com>
P-Asserted-Identity: <sip:11988887777@domain.com>
Call-ID: 223456789
CSeq: 1 INVITE
Content-Length: 0
 
 
ORACLE(test-sip-manipulation)# 
```

**Testar No SBC**:

- [ ] case-sensitive
- [ ] se existe flags
