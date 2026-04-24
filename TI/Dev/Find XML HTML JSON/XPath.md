# XPath

XPath, que significa **XML Path Language**, é uma linguagem poderosa usada para navegar e selecionar nós em um documento XML ou HTML. Pense nele como um sistema de endereçamento que permite encontrar partes específicas de um documento, como elementos, atributos e texto. Embora tenha sido originalmente projetado para XML, sua utilidade se estendeu amplamente ao HTML, especialmente em ferramentas de web scraping e automação de testes.

XPath é uma ferramenta incrivelmente versátil para navegar e extrair informações de documentos estruturados. Dominar seus conceitos e sintaxe abrirá muitas portas para automação de tarefas e análise de dados web.

## Tudo Sobre XPath

### Por que o XPath é Importante?

- **Navegação Precisa:** Ele permite que você especifique caminhos muito detalhados para encontrar exatamente o que você precisa em uma estrutura de documento complexa.
- **Flexibilidade:** Você pode selecionar nós com base em sua posição, atributos, conteúdo de texto e até mesmo a relação com outros nós.
- **Web Scraping:** É fundamental para extrair dados de páginas web, pois permite localizar elementos específicos para coleta de informações.
- **Automação de Testes:** Ferramentas de automação como Selenium usam XPath para identificar e interagir com elementos da interface do usuário.
- **XSLT e XQuery:** XPath é um componente central dessas linguagens, que são usadas para transformar e consultar documentos XML, respectivamente.

### Conceitos Fundamentais do XPath

Para entender o XPath, é importante conhecer alguns conceitos básicos:

- **Nó (Node):** Tudo em um documento XML/HTML é um nó. Existem diferentes tipos de nós:
  - **Nó Raiz (Root Node):** O elemento superior do documento.
  - **Nó de Elemento (Element Node):** Uma tag HTML/XML (ex: `<div>`, `<p>`, `<book>`).
  - **Nó de Atributo (Attribute Node):** Um atributo de um elemento (ex: `href` em `<a href="...">`).
  - **Nó de Texto (Text Node):** O texto dentro de um elemento.
  - **Nó de Comentário (Comment Node):** Um comentário no documento.
  - **Nó de Instrução de Processamento (Processing Instruction Node):** Instruções para o processador XML.
- **Item:** Um item é um nó ou um valor atômico (como uma string, número, booleano).
- **Sequência:** Uma sequência é uma coleção ordenada de zero ou mais itens.

### Sintaxe Básica do XPath

A sintaxe do XPath é composta por caminhos (paths) que se assemelham a caminhos de arquivo, usando barras para indicar a hierarquia.

- **`/` (Barra Simples):** Seleciona a partir do nó raiz.
  - Ex: `/html/body/div` - Seleciona um `div` que é filho direto de `body`, que é filho direto de `html`, que é filho direto do nó raiz.
- **`//` (Barra Dupla):** Seleciona nós em qualquer lugar no documento, independentemente de sua posição.
  - Ex: `//div` - Seleciona todos os elementos `div` no documento.
  - Ex: `//p/a` - Seleciona todos os links (`<a>`) que são filhos diretos de parágrafos (`<p>`), em qualquer lugar do documento.
- **`.` (Ponto Simples):** Seleciona o nó atual.
- **`..` (Ponto Duplo):** Seleciona o nó pai do nó atual.
- **`@` (Arroba):** Seleciona atributos.
  - Ex: `//a/@href` - Seleciona o atributo `href` de todos os elementos `<a>`.

### Predicados (Predicates)

Predicados são usados para filtrar conjuntos de nós e são colocados entre colchetes `[]`. Eles permitem que você especifique condições para a seleção.

- **Seleção por Posição:**
  - Ex: `//div[1]` - Seleciona o primeiro `div` encontrado.
  - Ex: `//li[last()]` - Seleciona o último item de lista.
  - Ex: `//p[position() < 3]` - Seleciona os dois primeiros parágrafos.
- **Seleção por Atributo:**
  - Ex: `//input[@id='username']` - Seleciona um `input` com o atributo `id` igual a 'username'.
  - Ex: `//a[@class='button' and @href='/home']` - Seleciona links com classe 'button' E href '/home'.
  - Ex: `//div[contains(@class, 'card')]` - Seleciona `div`s cuja classe contenha a string 'card'.
- **Seleção por Conteúdo de Texto:**
  - Ex: `//h1[text()='Bem-vindo']` - Seleciona um `h1` cujo texto seja 'Bem-vindo'.
  - Ex: `//p[contains(text(), 'exemplo')]` - Seleciona parágrafos que contenham a palavra 'exemplo'.

### Eixos (Axes)

Os eixos definem a relação entre o nó selecionado e o nó atual. Eles permitem navegação complexa em qualquer direção.

- **`child::` (filho):** Seleciona os filhos do nó atual. (É o padrão, então `div` é o mesmo que `child::div`).
- **`parent::` (pai):** Seleciona o pai do nó atual.
- **`ancestor::` (ancestral):** Seleciona todos os ancestrais (pai, avô, etc.) do nó atual.
- **`descendant::` (descendente):** Seleciona todos os descendentes (filhos, netos, etc.) do nó atual. (É o mesmo que `//`).
- **`following-sibling::` (irmão seguinte):** Seleciona todos os irmãos que vêm depois do nó atual.
- **`preceding-sibling::` (irmão precedente):** Seleciona todos os irmãos que vêm antes do nó atual.
- **`following::` (seguinte):** Seleciona todos os nós no documento que vêm depois do nó atual.
- **`preceding::` (precedente):** Seleciona todos os nós no documento que vêm antes do nó atual.
- **`attribute::` (atributo):** Seleciona os atributos do nó atual. (É o mesmo que `@`).
- **`self::` (próprio):** Seleciona o próprio nó atual.

Exemplo de uso de eixo:
`//div[./p]` - Seleciona `div`s que possuem um `p` como filho direto.

### Operadores XPath

XPath suporta operadores lógicos, de comparação e matemáticos:

- **Operadores Lógicos:** `and`, `or`, `not()`.
- **Operadores de Comparação:** `=`, `!=`, `<`, `<=`, `>`, `>=`.
- **Operadores Matemáticos:** `+`, `-`, `*`, `div` (divisão), `mod` (módulo).

### Funções XPath Comuns

XPath oferece várias funções para manipular strings, números, booleanos e conjuntos de nós.

- **`text()`:** Retorna o conteúdo de texto de um nó.
- **`contains(string, substring)`:** Verifica se uma string contém uma substring.
- **`starts-with(string, substring)`:** Verifica se uma string começa com uma substring.
- **`ends-with(string, substring)`:** (Disponível em XPath 2.0+) Verifica se uma string termina com uma substring.
- **`normalize-space(string)`:** Remove espaços em branco extras do início, fim e substitui múltiplos espaços por um único espaço.
- **`count(node-set)`:** Retorna o número de nós em um conjunto de nós.
- **`position()`:** Retorna a posição de um nó em um conjunto de nós.
- **`last()`:** Retorna a posição do último nó em um conjunto de nós.
- **`concat(string1, string2, ...)`:** Concatena strings.
- **`string-length(string)`:** Retorna o comprimento de uma string.
- **`substring(string, start, length)`:** Extrai uma parte de uma string.
- **`true()`, `false()`:** Retorna valores booleanos.

### Exemplo Prático

Considere o seguinte fragmento HTML:

```html
<html>
<body>
    <div id="header">
        <h1>Meu Título Principal</h1>
        <p class="intro">Bem-vindo ao meu site.</p>
    </div>
    <div id="content">
        <ul id="menu">
            <li><a href="/home">Home</a></li>
            <li><a href="/about" class="active">Sobre</a></li>
            <li><a href="/contact">Contato</a></li>
        </ul>
        <div class="article">
            <h2>Notícia Importante</h2>
            <p>Este é o primeiro parágrafo da notícia.</p>
            <p>Este é o segundo parágrafo. <span class="highlight">Detalhe</span> importante.</p>
        </div>
        <div class="footer">
            <p>Rodapé do site.</p>
        </div>
    </div>
</body>
</html>
```

Aqui estão alguns exemplos de expressões XPath para selecionar elementos nesse HTML:

- `//h1`: Seleciona o elemento `<h1>Meu Título Principal</h1>`.
- `//p[@class='intro']`: Seleciona o parágrafo `<p class="intro">Bem-vindo ao meu site.</p>`.
- `//a[@href='/about']`: Seleciona o link `<a href="/about" class="active">Sobre</a>`.
- `//ul[@id='menu']/li[2]`: Seleciona o segundo `<li>` dentro do `<ul>` com `id="menu"`: `<li><a href="/about" class="active">Sobre</a></li>`.
- `//div[@class='article']/p[last()]`: Seleciona o último parágrafo dentro do `div` com classe 'article': `<p>Este é o segundo parágrafo. <span class="highlight">Detalhe</span> importante.</p>`.
- `//span[text()='Detalhe']`: Seleciona o `<span>Detalhe</span>`.
- `//div[contains(@id, 'head')]`: Seleciona o `div` com `id="header"`.
- `//a[starts-with(@href, '/h')]`: Seleciona o link `<a href="/home">Home</a>`.
- `//p[count(./span) > 0]`: Seleciona parágrafos que contêm pelo menos um `<span>` como filho direto.

### Ferramentas para Testar XPath

Existem várias ferramentas e extensões de navegador que permitem testar expressões XPath diretamente em uma página web:

- **Navegadores (Chrome DevTools, Firefox Developer Tools):** Você pode abrir o console do desenvolvedor (F12) e usar `document.evaluate()` no JavaScript ou pesquisar diretamente na aba "Elements" (Ctrl+F no Chrome, ou use a função "Search HTML" no Firefox) com prefixo `//` para XPath.
- **Extensões de Navegador:** `XPath Helper` (Chrome) e `XPath Checker` (Firefox) são populares.
- **Ferramentas de Programação:** Bibliotecas em Python (como `lxml` ou `BeautifulSoup` com `html.parser`), Java (JAXP), C\# (XmlDocument), etc., permitem a execução de XPath programaticamente.
