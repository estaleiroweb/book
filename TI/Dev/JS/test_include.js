/**
 * Função de escrita personalizada para exibir informações no console e na página
 * @param {string} titulo - Título ou descrição do conteúdo a ser escrito
 * @param {...any} args - Argumentos a serem escritos
 * @author Helbert Fernandes
 * @version 1.0
 * @since 2026-03
 * @see https://evoice/docs/Books/TI/Dev/JS/OO_Example.html
 */
export function write(titulo, ...args) {
    h(titulo, 5);
    console.log(...args);
    // imprime na tela convertendo objetos em string (útil para debugging)
    html(
        args.map(arg => any2str(arg)).join(" "),
        'pre',
        { class: 'container' },
        'textContent'
    );
}
/**
 * Função para criar um elemento HTML personalizado
 * @param {string} content - Conteúdo a ser inserido no elemento
 * @param {string} tag - Tag HTML a ser criada (padrão: 'div')
 * @param {object} args - Atributos a serem adicionados ao elemento (padrão: { class: 'container' })
 * @param {string} propContent - Propriedade do elemento onde o conteúdo será inserido (padrão: 'innerHTML')
 */
export function html(content = '', tag = 'div', args = { class: 'container' }, propContent = 'innerHTML') {
    const div = document.createElement(tag);
    args && Object.entries(args).forEach(([key, value]) => {
        div.setAttribute(key, value);
    });
    div[propContent] = content;
    document.body.appendChild(div);
}
/**
 * Função para criar um elemento HTML de título (h1, h2, etc.)
 * @param {string} content - Conteúdo do título
 * @param {number} level - Nível do título (1 para h1, 2 para h2, etc., padrão: 2)
 */
export function h(content, level = 2) {
    html(content, `h${level}`);
}
/**
 * Função para converter qualquer valor em string, formatando objetos como JSON
 * @param {any} value - Valor a ser convertido em string
 * @returns {string} - String representando o valor, formatada para objetos
 */
export function any2str(value) {
    if (typeof value === "object") {
        return JSON.stringify(value, null, 2);
    }
    return String(value);
}
