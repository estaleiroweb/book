/**
 * @see https://evoice/docs/Books/TI/Dev/JS/OO_Example.html
 */
import { write } from './test_include.js';

RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/**
 * Exemplo de classe Pessoa
 * - Atributos: nome, idade, cpf
 * - Métodos: apresentar(), envelhecer()
 * - Encapsulamento: nome (public), idade (protected), cpf (private)
 * @author Helbert Fernandes
 * @version 1.0
 * @since 2026-03
 */
export class Pessoa {
    /**
     * Valor constante (simulado, pois JavaScript não tem constantes de classe nativas)
     *
     * @static pertence à classe, não ao objeto
     * @public Qualquer pessoa pode acessar
     * @readonly
     * @type {number}
     */
    static get CONSTANTE_SIMULADA1() { return 42; }

    /**
     * Valor constante imutável (simulado usando Object.freeze)
     *
     * @static pertence à classe, não ao objeto
     * @public Qualquer pessoa pode acessar
     * @readonly
     * @type {string}
     */
    static CONSTANTE_SIMULADA2 = Object.freeze("Valor Imutável");

    /**
     * Espécie da pessoa (constante)
     * @static pertence à classe, não ao objeto
     * @public Qualquer pessoa pode acessar
     * @type {string}
     */
    static species = "Humano";

    /**
     * Enumeração de status (simulado usando Object.freeze)
     * @static pertence à classe, não ao objeto
     * @public Qualquer pessoa pode acessar
     * @readonly
     * @type {object}
     */
    static ENUM = Object.freeze({
        PENDENTE: 0,
        PROCESSANDO: 1,
        FINALIZADO: 2
    });

    /**
     * Enumeração bidirecional de status (simulado usando Object.freeze)
     * @static pertence à classe, não ao objeto
     * @public Qualquer pessoa pode acessar
     * @readonly
     * @type {object}
     */
    static ENUMNome = Object.freeze(
        Object.fromEntries(
            Object.entries(Pessoa.ENUM).map(([k, v]) => [v, k])
        )
    );

    /**
     * Total de pessoas criadas
     * @static pertence à classe, não ao objeto
     * @private Somente esta classe pode acessar
     * @type {number}
     */
    static #totalPessoas = 0;

    /**
     * Para test de deepfreeze
     * @public Qualquer pessoa pode acessar
     * @type {object}
     */
    dict;

    /**
     * CPF da pessoa
     * @private Somente esta classe pode acessar
     * @type {string} pattern(NN.NNN.NNN-NN)
     */
    #cpf;

    /**
     * Idade da pessoa 
     * @protected simulated (convention)
     * @type {number} max(200)
     */
    _idade;

    /**
     * Nome da pessoa
     * @public Qualquer pessoa pode acessar
     * @type {string} maxlen(30)
     */
    nome;

    /**
     * Cria uma nova pessoa
     * @public Qualquer pessoa pode acessar
     * @param {string} nome - Nome da pessoa
     * @param {number} idade - Idade da pessoa
     * @param {string} cpf - CPF da pessoa
     */
    constructor(nome, idade, cpf) {
        write('Classe Pessoa', {
            argumentsLength: arguments.length, // mostra o número de argumentos passados na chamada
            target: new.target,// mostra a classe que está sendo instanciada (Pessoa, Funcionario ou Gerente)
            targetLength: new.target.length, // mostra o número de argumentos esperados pelo construtor
            targetName: new.target.name, // mostra o nome da classe (Pessoa, Funcionario ou Gerente)
            targetPrototype: new.target.prototype, // mostra o protótipo da classe (Pessoa, Funcionario ou Gerente)
            targetConstructor: new.target.prototype.constructor, // mostra o construtor da classe (Pessoa, Funcionario ou Gerente)
            targetConstructorLength: new.target.prototype.constructor.length, // mostra o número de argumentos esperados pelo construtor da classe (Pessoa, Funcionario ou Gerente)
            targetConstructorName: new.target.prototype.constructor.name // mostra o nome do construtor da classe (Pessoa, Funcionario ou Gerente)
        });

        this.nome = nome;
        this._idade = idade;
        this.#cpf = cpf;
        this.dict = { c: 2 };

        Pessoa.#totalPessoas++;
    }
    /**
     * Modern equivalent to PHP's __toString.
     * Handles conversion to string, number, or default.
     * @example
     * ```javascript
     * const me = new User('Gemini', 3);
     * console.log(String(me)); // "User: Gemini (ID: 3)"
     * console.log(me + 10);    // 13
     * ```
     */
    [Symbol.toPrimitive](hint) {
        write('toString', `Nome: ${this.nome} (Idade: ${this._idade}), hint: ${hint}`);
        if (hint === 'string') {
            return `Nome: ${this.nome} (Idade: ${this._idade})`;
        }
        if (hint === 'number') {
            return this._idade;
        }
        return this.nome;
    }

    // GETTERS/SETTERS
    /**
     * Obtém a idade da pessoa
     * @public Qualquer pessoa pode acessar
     * @returns {number} Idade da pessoa
     */
    get idade() {
        return this._idade;
    }

    /**
     * Define a idade da pessoa
     * @public Qualquer pessoa pode acessar
     * @param {number} valor - Nova idade
     */
    set idade(valor) {
        if (valor < 0) {
            throw new Error("Idade inválida");
        }
        this._idade = valor;
    }

    /**
     * Obtém o CPF da pessoa
     * @public Qualquer pessoa pode acessar
     * @returns {string} CPF da pessoa (mascarado)
     */
    get cpf() {
        return "*****"; // não expõe
    }

    // MÉTODOS INSTANCE
    /**
     * Apresenta a pessoa
     * @public Qualquer pessoa pode acessar
     * @returns {string} Mensagem de apresentação
     */
    apresentar() {
        return `Olá, meu nome é ${this.nome}`;
    }

    /**
     * Envelhece a pessoa
     * @public Qualquer pessoa pode acessar
     * @param {number} anos - Quantos anos a pessoa vai envelhecer
     */
    envelhecer(anos = 1) {
        this._idade += anos;
    }
    /**
     * Cria um sub-objeto Pessoa acessando o atributo privado #cpf para mostrar que mesmo sendo privado, pode ser acessado dentro da mesma classe
     * @public Qualquer pessoa pode acessar
     * @returns {string} CPF do sub-objeto
     */
    sub_objeto() {
        const filho = new Pessoa("Filho", 10, "123.456.789-00");
        return filho.#cpf; // mesmo sendo privado, pode acessar, pois é privado e estamos dentro da mesma classe
    }

    // MÉTODO PRIVATE
    /**
     * Formata o CPF para exibição
     * @private Somente esta classe pode acessar
     * @returns {string} CPF formatado
     */
    #formatarCPF() {
        return this.#cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    /**
     * Mostra o CPF formatado (método público que usa o método privado)
     * @public Qualquer pessoa pode acessar
     * @returns {string} CPF formatado
     */
    mostrarCPFInterno() {
        return this.#formatarCPF();
    }

    // =========================
    // STATIC
    // =========================

    /**
     * Obtém o total de pessoas criadas
     * @returns {number} Total de pessoas
     */
    static obterTotal() {
        return Pessoa.#totalPessoas;
    }
}
export class Funcionario extends Pessoa {
    /**
     * Salário do funcionário
     * @public Qualquer pessoa pode acessar
     * @type {number} Valor do salário
     */
    salario;

    /**
     * Cria um novo funcionário
     * @public Qualquer pessoa pode acessar
     * @param {string} nome - Nome do funcionário
     * @param {number} idade - Idade do funcionário
     * @param {string} cpf - CPF do funcionário
     * @param {number} salario - Salário do funcionário
     */
    constructor(nome, idade, cpf, salario) {
        super(nome, idade, cpf);
        this.salario = salario;
    }

    /**
     * Apresenta o funcionário - polimorfismo (override)
     * @public Qualquer pessoa pode acessar
     * @returns {string} Mensagem de apresentação do funcionário
     */
    apresentar() {
        return `${super.apresentar()} e sou funcionário`;
    }
    /**
     * Aumenta o salário do funcionário
     * @public Qualquer pessoa pode acessar
     * @param {number} valor - Valor a ser adicionado ao salário
     */
    aumentarSalario(valor) {
        this.salario += valor;
    }
}
export class Gerente extends Funcionario {
    /**
     * Bônus do gerente
     * @public Qualquer pessoa pode acessar
     * @type {number} Valor do bônus
     */
    bonus = 0;

    /**
     * Calcula o bônus do gerente
     * - Exemplo de atributo protegido
     * - Exemplo de overload
     * @public Qualquer pessoa pode acessar
     * @param {number} aliquota - Alíquota para cálculo do bônus
     * @returns {number} Valor do bônus
     */
    calcularBonus(aliquota) {
        // JavaScript não suporta overload real, então usamos **verificação de argumentos**.
        if (arguments.length === 1) {
            if (typeof aliquota === "string") {
                aliquota = parseFloat(aliquota.replace("%", "")) / 100;
            }
            if (aliquota < 0) {
                throw new Error("Aliquota inválida");
            }
            this.bonus = this.salario * aliquota;
        } else {
            // acesso ao protected (JavaScript **não possui protected**, então usamos `_`)
            if (this._idade > 40) {
                this.bonus = this.salario * 0.20;
            } else {
                this.bonus = this.salario * 0.10;
            }
        }
        return this.bonus;
    }
}
export class AbstractAnimal {
    constructor(nome) {
        if (new.target === AbstractAnimal) {
            throw new Error("AbstractAnimal é uma classe abstrata");
        }
        this.nome = nome;
    }
    /**
     * Método abstrato falar() - deve ser implementado pelas subclasses
     */
    falar() {
        throw new Error("Método falar() deve ser implementado");
    }
}
export class Cachorro extends AbstractAnimal {
    falar() {
        return `${this.nome} está latindo`;
    }
}
export class Imutavel {
    constructor(nome) {
        this.nome = nome;
        Object.freeze(this);
    }
}
export class ConfigSingleton {
    static #instance;
    api = "https://api.site.com";
    timeout = 5000;

    constructor() {
        if (ConfigSingleton.#instance) {
            return ConfigSingleton.#instance;
        }
        ConfigSingleton.#instance = this;
    }
}

const PodeVoar = (Base) => class extends Base {
    voar() {
        return `${this.nome} está voando`;
    }
};
const PodeNadar = (Base) => class extends Base {
    nadar() {
        return `${this.nome} está nadando`;
    }
};
export class Pato extends PodeNadar(PodeVoar(AbstractAnimal)) { }

const usuario = {
    nome: "Carlos",
    idade: 30
};
export const proxy = new Proxy(usuario, {
    get(obj, prop) {
        write('GET', `${prop}`);
        console.log(obj);
        return obj[prop];
    },
    set(obj, prop, valor) {
        write('SET', `${prop} = ${valor}`);
        obj[prop] = valor;
        return true;
    }
});

export function deepFreeze(obj) {
    Object.getOwnPropertyNames(obj).forEach(prop => {
        const value = obj[prop];
        if (
            value &&
            typeof value === "object" &&
            !Object.isFrozen(value)
        ) deepFreeze(value);
    });
    return Object.freeze(obj);
}