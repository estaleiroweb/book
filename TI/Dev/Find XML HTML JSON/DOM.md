# DOM

O **DOM (Document Object Model)** é uma interface de programação que permite que programas e scripts (como JavaScript) acessem e manipulem o conteúdo, estrutura e estilo de documentos HTML e XML. Ele representa a página da web como uma estrutura de árvore de objetos, onde cada nó é um objeto que representa uma parte do documento, como um elemento, atributo ou texto.

O DOM é a espinha dorsal de qualquer página web interativa. Dominar seus conceitos e como manipulá-lo via JavaScript é essencial para qualquer desenvolvedor web.

## O Que É o DOM?

Imagine uma página web como uma árvore genealógica. No topo está o documento (`document`), que é o "ancestral" de tudo. Abaixo dele, vêm os filhos (como `<html>`, `<body>`, `<head>`), e assim por diante, com cada elemento, atributo e texto sendo um "membro" dessa família.

O DOM fornece uma maneira padronizada para:

- **Acessar elementos:** Encontrar elementos específicos na página (por ID, classe, nome da tag, etc.).
- **Alterar conteúdo:** Mudar o texto dentro de um parágrafo, o valor de um campo de entrada, etc.
- **Modificar estrutura:** Adicionar novos elementos, remover elementos existentes, mover elementos de um lugar para outro.
- **Alterar estilo:** Mudar as propriedades CSS (cor, tamanho da fonte, display) de um elemento.
- **Reagir a eventos:** Capturar interações do usuário, como cliques do mouse, pressionar teclas, envio de formulários, etc.

É importante notar que o DOM não é uma linguagem de programação, mas sim uma **API (Application Programming Interface)** que pode ser acessada por linguagens como JavaScript.

### Como o DOM Funciona?

Quando um navegador carrega uma página HTML, ele faz o seguinte:

1. **Parsing do HTML:** Lê o código HTML e o transforma em uma representação estruturada, o DOM.
2. **Criação da Árvore DOM:** Cada tag HTML, texto e atributo é convertido em um nó na árvore DOM.
3. **Renderização:** O navegador usa essa árvore DOM (e a árvore CSSOM - CSS Object Model, que é a representação dos estilos) para renderizar visualmente a página na tela.

Essa representação em árvore permite que o JavaScript navegue por ela, localize elementos e faça modificações. Por exemplo, se você quer mudar o texto de um parágrafo, o JavaScript primeiro "encontra" o nó correspondente a esse parágrafo na árvore DOM e depois "altera" sua propriedade de texto. O navegador então reflete essa mudança na tela.

### Principais Tipos de Nós no DOM

A árvore DOM é composta por diferentes tipos de nós:

- **Nó de Documento (Document Node):** É o nó raiz da árvore, representando o documento HTML ou XML inteiro. É o ponto de entrada para acessar qualquer outro nó.
- **Nós de Elemento (Element Nodes):** Representam as tags HTML (ex: `<div>`, `<p>`, `<a>`). Eles podem ter filhos (outros elementos, texto) e atributos.
- **Nós de Texto (Text Nodes):** Representam o texto contido dentro dos elementos HTML.
- **Nós de Atributo (Attribute Nodes):** Representam os atributos dos elementos HTML (ex: `id="meuId"`, `class="minhaClasse"`).
- **Nós de Comentário (Comment Nodes):** Representam os comentários no HTML (\`\`).

### Operações Comuns do DOM com JavaScript

Aqui estão algumas das operações mais comuns que você pode realizar com o DOM usando JavaScript:

#### 1\. Selecionar Elementos

- `document.getElementById('idDoElemento')`: Seleciona um elemento pelo seu atributo `id`. Retorna um único elemento.
- `document.getElementsByClassName('nomeDaClasse')`: Seleciona elementos pela sua classe. Retorna uma coleção de elementos (HTMLCollection).
- `document.getElementsByTagName('nomeDaTag')`: Seleciona elementos pelo nome da sua tag. Retorna uma coleção de elementos (HTMLCollection).
- `document.querySelector('seletorCSS')`: Seleciona o **primeiro** elemento que corresponde a um seletor CSS específico.
- `document.querySelectorAll('seletorCSS')`: Seleciona **todos** os elementos que correspondem a um seletor CSS específico. Retorna uma lista de nós (NodeList).

<!-- end list -->

```javascript
// Exemplo de seleção
const meuParagrafo = document.getElementById('meuParagrafo');
const botoes = document.querySelectorAll('.botao');
```

#### 2\. Modificar Conteúdo

- `elemento.innerHTML`: Obtém ou define o conteúdo HTML interno de um elemento.
- `elemento.textContent`: Obtém ou define apenas o texto interno de um elemento (ignora tags HTML).

<!-- end list -->

```javascript
// Exemplo de modificação de conteúdo
meuParagrafo.textContent = 'Novo texto para o parágrafo.';
// ou
meuDiv.innerHTML = '<h2>Um novo título!</h2><p>Com um novo parágrafo.</p>';
```

#### 3\. Modificar Atributos

- `elemento.setAttribute('nomeDoAtributo', 'valor')`: Define o valor de um atributo.
- `elemento.getAttribute('nomeDoAtributo')`: Obtém o valor de um atributo.
- `elemento.removeAttribute('nomeDoAtributo')`: Remove um atributo.

<!-- end list -->

```javascript
// Exemplo de modificação de atributos
const link = document.querySelector('a');
link.setAttribute('href', 'https://www.google.com');
console.log(link.getAttribute('target'));
```

#### 4\. Modificar Estilo (CSS)

- `elemento.style.propriedadeCSS`: Acessa e modifica propriedades CSS diretamente.

<!-- end list -->

```javascript
// Exemplo de modificação de estilo
meuParagrafo.style.color = 'blue';
meuParagrafo.style.fontSize = '20px';
```

- `elemento.classList.add('novaClasse')`: Adiciona uma classe CSS a um elemento.
- `elemento.classList.remove('classeExistente')`: Remove uma classe CSS de um elemento.
- `elemento.classList.toggle('classe')`: Alterna (adiciona se não tiver, remove se tiver) uma classe CSS.

<!-- end list -->

```javascript
// Exemplo de manipulação de classes
const botaoAtivar = document.getElementById('botaoAtivar');
botaoAtivar.addEventListener('click', () => {
    meuParagrafo.classList.toggle('ativo');
});
```

#### 5\. Criar e Remover Elementos

- `document.createElement('nomeDaTag')`: Cria um novo elemento HTML.
- `document.createTextNode('texto')`: Cria um novo nó de texto.
- `elementoPai.appendChild(elementoFilho)`: Adiciona um novo elemento filho ao final do elemento pai.
- `elementoPai.removeChild(elementoFilho)`: Remove um elemento filho do elemento pai.

<!-- end list -->

```javascript
// Exemplo de criação e remoção
const novaDiv = document.createElement('div');
novaDiv.textContent = 'Eu sou uma nova div!';
document.body.appendChild(novaDiv); // Adiciona ao final do body

// Para remover
// document.body.removeChild(novaDiv);
```

#### 6\. Manipular Eventos

- `elemento.addEventListener('nomeDoEvento', funcaoManipuladora)`: Anexa uma função que será executada quando um evento ocorrer no elemento.

<!-- end list -->

```javascript
// Exemplo de manipulação de eventos
const meuBotao = document.getElementById('meuBotao');
meuBotao.addEventListener('click', () => {
    alert('Botão clicado!');
});
```

### DOM x HTML Source Code x Browser Render

É fundamental entender a diferença entre:

- **HTML Source Code:** É o código HTML original que você escreve ou que o servidor envia. É um texto estático.
- **DOM (Document Object Model):** É a representação em memória do documento. É uma estrutura de objetos que pode ser modificada por JavaScript. O DOM pode ser diferente do HTML original se o JavaScript tiver feito alterações.
- **Browser Render (Página Renderizada):** É o que você vê na tela. É o resultado visual da interpretação do navegador do DOM (e CSSOM).

Ou seja, o HTML é a planta, o DOM é o prédio construído (que pode ser modificado após a construção), e a página renderizada é o que você vê do lado de fora do prédio.

### Vantagens do DOM

- **Interatividade:** Permite criar páginas web dinâmicas e interativas, respondendo às ações do usuário.
- **Flexibilidade:** Oferece um controle granular sobre cada parte da página.
- **Padrão:** É um padrão W3C, garantindo compatibilidade entre navegadores.

### Desvantagens e Considerações

- **Desempenho:** Manipulações excessivas ou ineficientes do DOM podem ser custosas em termos de desempenho, especialmente em aplicações complexas, pois cada alteração pode forçar o navegador a recalcular o layout e redesenhar a página (reflow e repaint).
- **Complexidade:** Para aplicações muito grandes, manipular o DOM diretamente pode se tornar complexo e difícil de manter. Isso levou ao surgimento de frameworks e bibliotecas (como React, Angular, Vue.js) que abstraem a manipulação direta do DOM, usando um "Virtual DOM" ou outras técnicas para otimizar o processo.
