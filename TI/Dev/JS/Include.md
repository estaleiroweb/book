No JavaScript "puro" (vanilla), a forma de incluir ou importar outros arquivos mudou drasticamente ao longo dos anos. Como você está explorando ambientes fora do navegador (como o `js` do Red Hat ou `gjs` do Ubuntu) e ambientes legados (como o `cscript`), a solução depende de onde o código está rodando.

Aqui estão as formas principais:

---

### 1. ECMAScript Modules (`import` / `export`) - O Padrão Moderno

Esta é a forma oficial do JavaScript moderno (ES6+). Ela funciona em navegadores e motores modernos como o **GJS** ou **QuickJS**.

* **Arquivo `math.js`:**

```javascript
/**
 * Sums two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
    return a + b;
}

```

* **Arquivo `main.js`:**

```javascript
import { add } from './math.js';

const result = add(10, 5);
print("Result: " + result);

```

> **Nota:** No GJS, você pode precisar usar extensões específicas ou flags dependendo da versão para habilitar módulos ESM.

---

### 2. O comando `load()` (Motores SpiderMonkey / GJS / QuickJS)

Diferente do Node.js, motores "puros" baseados no SpiderMonkey (como o `js` do Red Hat) geralmente não usam `require`. Eles usam uma função global chamada `load()`. Ela funciona exatamente como um **include**: ela lê o arquivo e o executa no escopo atual.

```javascript
/**
 * Loading an external file into the current scope.
 * Works in SpiderMonkey (js) and QuickJS (qjs).
 */
load('utils.js'); 

// If utils.js defined a function 'sayHi', it is now available here:
sayHi();

```

---

### 3. Usando `Imports.gi` (Exclusivo do GJS/Ubuntu)

Se você estiver usando o **GJS** no Ubuntu, ele possui um sistema de busca de módulos próprio baseado no sistema de arquivos do GNOME.

```javascript
// Adding current directory to search path
imports.searchPath.push('.');

// Importing 'tools.js' (the file must not use 'export')
const Tools = imports.tools;

Tools.performTask();

```

---

### 4. Windows Script Host (`cscript`)

No `cscript`, não existe um comando `include` ou `require` dentro do JavaScript. A única forma "nativa" de incluir arquivos é criando um arquivo XML com a extensão **.wsf** (Windows Script File).

* **Arquivo `App.wsf`:**

```xml
<job>
    <script language="JScript" src="Library.js"/>
    <script language="JScript">
        // Now you can use functions defined in Library.js
        WScript.Echo("Library loaded!");
    </script>
</job>

```

Você executa com: `cscript App.wsf`.

---

### Resumo de Compatibilidade

| Ambiente | Método | Tipo de Carregamento |
| --- | --- | --- |
| **GJS / QuickJS** | `import ... from` | Módulo (Escopo Isolado) |
| **SpiderMonkey (Red Hat `js`)** | `load('file.js')` | Include (Escopo Global) |
| **Windows (`cscript`)** | Arquivo `.wsf` | Injeção de Scripts |

---

### Qual utilizar?

* Se você está no **Linux (Ubuntu/Red Hat)**: Tente usar `load()` para scripts rápidos e simples, ou `import` para projetos mais estruturados e modernos.
* Se você está no **Windows (`cscript`)**: Você está limitado ao `.wsf` ou terá que ler o arquivo manualmente via `FileSystemObject` e usar `eval()` (o que é perigoso e não recomendado).
