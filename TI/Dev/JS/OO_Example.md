# OO Example

Test: https://evoice/docs/Books/TI/Dev/JS/OO_Example.html

> OO_Example.html

```html
<html>
    <head>
        <title>Exemplo de Orientação a Objetos em JavaScript</title>
        <script type="module" src="OO_Example.js"></script>
    </head>
    <body>
        <h1>Exemplo de Orientação a Objetos em JavaScript</h1>
        <p>Veja o código em OO_Example.js para detalhes. <a href="https://evoice/docs/Books/TI/Dev/JS/.html">Via este HTML</a></p>
    </body>
</html>
```

> test_include.js

```javascript
export function write(titulo, ...args) {
    h(titulo, 5);
    console.log(...args);
    html(
        args.map(arg => any2str(arg)).join(" "),
        'pre',
        { class: 'container' },
        'textContent'
    );
}
export function html(content = '', tag = 'div', args = { class: 'container' }, propContent = 'innerHTML') {
    const div = document.createElement(tag);
    args && Object.entries(args).forEach(([key, value]) => {
        div.setAttribute(key, value);
    });
    div[propContent] = content;
    document.body.appendChild(div);
}
export function h(content, level = 2) {
    html(content, `h${level}`);
}
export function any2str(value) {
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value);
}

```

> logger.js

```javascript
class Logger {
    static #instance = null;
    constructor() {
        if (Logger.#instance) return Logger.#instance;
        Logger.#instance = this;
    }
    log(message) { console.log("[LOG]", message); }
}
const loggerInstance = new Logger();
export default loggerInstance;
```

> OO_Example.js

```javascript
import { write, html, h, any2str } from './test_include.js';
import * as cl from './classes.js';
import logger from './logger.js';
logger.log('Started');

export class Cao {
    falar() {
        return `Cao está latindo`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    h('Protótipos e classes em JavaScript');
    write('RegExp.escape', RegExp.escape);

    h('Exemplo de classe Pessoa');
    let o = new cl.Pessoa("João", 30, "12345678901");
    write('String(o)', String(o)); // metodo mágito toString: "Nome: João (Idade: 30)"
    write('Number(o)', Number(o)); // metodo mágito toString:  30
    write('Boolean(o)', Boolean(o)); // true
    write('o + "----"', (o + '----')); // metodo mágito toString:  30
    write('o._idade', o._idade); // 30
    write('o.sub_objeto()', o.sub_objeto());

    h('Exemplo de classe Pato');
    let c = new Cao();
    write('c.falar()', c.falar());

    h('Exemplo de classe Pato com herança');
    const pato = new cl.Pato("Donald");
    write('pato.voar()', pato.voar());
    write('pato.nadar()', pato.nadar());

    h('Exemplo de classe com Proxy');
    write('Proxy nome', cl.proxy.nome);
    cl.proxy.idade = 40;

    h('Exemplo de classe Imutável');
    write('ownKeys', Reflect.ownKeys(o));
    write('getOwnPropertyDescriptor', Reflect.getOwnPropertyDescriptor(o, "nome"));
    write('isExtensible', Reflect.isExtensible(o));
    write('has', Reflect.has(o, "nome"));
    write('get', Reflect.get(o, "nome"));
    Reflect.set(o, "nome", "Maria");
    write('Nome', o.nome);
    write('getOwnPropertyNames', Object.getOwnPropertyNames(cl.Pessoa.prototype));

    h('Exemplo de classe Congelada');
    // Congela a classe não podendo alterá-la
    Object.freeze(cl.Pessoa);
    Object.freeze(cl.Pessoa.prototype);
    try {
        cl.Pessoa.nome = "Outra"; // erro
    } catch (e) {
        write('Erro ao alterar valor', e.message);
    }
    try {
        write('o.dict', o.dict);
        o.dict.c = 3;
        cl.deepFreeze(o.dict);
        o.dict.c = 4;
    } catch (e) {
        write('Erro ao alterar valor', e.message);
        write('o.dict', o.dict);
    }
    try {
        cl.Pessoa.novoMetodo = () => { };     // erro
    } catch (e) {
        write('Erro ao adicionar método', e.message);
    }
    try {
        cl.Pessoa.prototype.novoMetodo = () => { }; // erro
    } catch (e) {
        write('Erro ao adicionar método', e.message);
    }
    const p = new cl.Imutavel("Carlos");
    try {
        p.nome = "Ana"; // erro
    } catch (e) {
        write('Erro ao alterar valor', e.message);
    }
    try {
        write('Constante', cl.Pessoa.CONSTANTE_SIMULADA2);
        cl.Pessoa.CONSTANTE_SIMULADA2 = 333;
    } catch (e) {
        write('Erro ao alterar constante', e.message);
    }

    const c1 = new cl.ConfigSingleton();
    const c2 = new cl.ConfigSingleton();
    write('Comparação', c1 === c2); // true
    write('Config API1', c1.api);
    write('Config API2', c2.api);

    c1.api = 'https://nova-api.site.com';
    write('Comparação', c1 === c2); // true
    write('Config API1', c1.api);
    write('Config API2', c2.api);
});
```
