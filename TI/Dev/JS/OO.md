# Orientação a Objeto

JavaScript moderno (ES6+) suporta **orientação a objetos** com classes, encapsulamento, herança, membros estáticos e privados. Algumas coisas como **protected** e **overload real** não existem nativamente, mas podem ser **simuladas**.

Vou montar um **exemplo completo e didático** mostrando:

- atributos **public**
- atributos **private** (`#`)
- atributos **protected (simulado)**
- atributos **static**
- métodos **instance**
- métodos **static**
- **getters / setters** (métodos “mágicos”)
- **overload de método**
- **overload de atributo via setter**
- **herança**
- **polimorfismo**

## 1. Classe Base

```javascript
class Pessoa {
    // static (pertence à classe)
    static especie = "Humano";
    static totalPessoas = 0;

    // private (somente dentro da classe)
    #cpf;

    // protected (simulado por convenção)
    _idade;

    // public
    nome;

    constructor(nome, idade, cpf) {
        this.nome = nome;
        this._idade = idade;
        this.#cpf = cpf;

        Pessoa.totalPessoas++;
    }

    // =========================
    // MÉTODOS INSTANCE
    // =========================

    apresentar() {
        return `Olá, meu nome é ${this.nome}`;
    }

    envelhecer(anos = 1) {
        this._idade += anos;
    }

    // =========================
    // GETTERS / SETTERS
    // =========================

    get idade() {
        return this._idade;
    }

    set idade(valor) {
        if (valor < 0) {
            throw new Error("Idade inválida");
        }
        this._idade = valor;
    }

    get cpf() {
        return "*****"; // não expõe
    }

    // =========================
    // MÉTODO PRIVATE
    // =========================

    #formatarCPF() {
        return this.#cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    mostrarCPFInterno() {
        return this.#formatarCPF();
    }

    // =========================
    // STATIC
    // =========================

    static obterTotal() {
        return Pessoa.totalPessoas;
    }
}
```

## 2. Herança

```javascript
class Funcionario extends Pessoa {
    salario;

    constructor(nome, idade, cpf, salario) {
        super(nome, idade, cpf);
        this.salario = salario;
    }
    // polimorfismo (override)
    apresentar() {
        return `${super.apresentar()} e sou funcionário`;
    }
    aumentarSalario(valor) {
        this.salario += valor;
    }
}
```

## 3. Protected (simulado)

JavaScript **não possui protected**, então usamos `_`.

```javascript
class Gerente extends Funcionario {
    bonus = 0;

    calcularBonus() {
        // acesso ao protected
        if (this._idade > 40) {
            this.bonus = this.salario * 0.20;
        } else {
            this.bonus = this.salario * 0.10;
        }

        return this.bonus;
    }
}
```

## 4. Overload de método (simulado)

JavaScript não suporta overload real, então usamos **verificação de argumentos**.

```javascript
class Calculadora {

    somar(a, b, c) {
        if (arguments.length === 2) {
            return a + b;
        }

        if (arguments.length === 3) {
            return a + b + c;
        }

        throw new Error("Quantidade inválida de parâmetros");
    }
}

// Uso:

const calc = new Calculadora();

console.log(calc.somar(2,3));      // 5
console.log(calc.somar(2,3,4));    // 9
```

## 5. Overload de atributo via setter

```javascript
class Produto {
    _preco;
    set preco(valor) {
        if (typeof valor === "string") {
            valor = parseFloat(valor.replace("R$", ""));
        }
        if (valor < 0) {
            throw new Error("Preço inválido");
        }
        this._preco = valor;
    }
    get preco() {
        return this._preco;
    }
}

// Uso:

const p = new Produto();

p.preco = 10;
p.preco = "R$20.50";

console.log(p.preco);
```

## 6. Exemplo de uso completo

```javascript
const p1 = new Pessoa("Carlos", 30, "12345678901");
console.log(p1.apresentar());
console.log(p1.idade);
p1.envelhecer();
console.log(p1.idade);
console.log(p1.mostrarCPFInterno());
const f1 = new Funcionario("Ana", 28, "99999999999", 5000);
console.log(f1.apresentar());
const g1 = new Gerente("Marcos", 50, "88888888888", 10000);
console.log(g1.calcularBonus());
console.log(Pessoa.obterTotal());
```

## 7. Estrutura OOP mostrada

| Recurso              | Exemplo                      |
| -------------------- | ---------------------------- |
| public attribute     | `nome`                       |
| private attribute    | `#cpf`                       |
| protected (simulado) | `_idade`                     |
| static attribute     | `Pessoa.totalPessoas`        |
| instance method      | `apresentar()`               |
| static method        | `Pessoa.obterTotal()`        |
| getter/setter        | `get idade()`                |
| private method       | `#formatarCPF()`             |
| inheritance          | `Funcionario extends Pessoa` |
| override             | `apresentar()`               |
| overload (simulado)  | `somar()`                    |
| encapsulation        | `cpf` protegido              |

💡 **Curiosidade importante**

JavaScript virou uma linguagem **fortemente orientada a objetos moderna** a partir do **ES2022**, quando adicionaram:

- `#private fields`
- `#private methods`
- `static blocks`
- `class fields`

JavaScript não tem alguns conceitos clássicos de OOP (como **abstract classes**, **interfaces** e **decorators padrão**) da mesma forma que linguagens como Java ou C#. Porém o ecossistema criou **padrões e técnicas** para simular tudo isso.

Vou mostrar **exemplos reais e completos** de cada um:

1. Abstract classes
2. Interfaces simuladas
3. Mixins
4. Proxy (métodos mágicos reais)
5. Reflection
6. Decorators

## 1️⃣ Abstract Classes (simuladas)

JavaScript não possui `abstract`, mas podemos **impedir instanciar diretamente** e **exigir implementação de métodos**.

```javascript
class Animal {

    constructor(nome) {

        if (new.target === Animal) {
            throw new Error("Animal é uma classe abstrata");
        }

        this.nome = nome;
    }

    falar() {
        throw new Error("Método falar() deve ser implementado");
    }

}
```

### Classe concreta

```javascript
class Cachorro extends Animal {
    falar() {
        return `${this.nome} está latindo`;
    }
}

const dog = new Cachorro("Rex");
console.log(dog.falar());

// Se tentar:
new Animal("teste"); // erro
```

## 2️⃣ Interfaces simuladas

JavaScript não tem `interface`, mas podemos **validar métodos obrigatórios**.

```javascript
function Interface(obj, metodos) {
    for (let metodo of metodos) {
        if (typeof obj[metodo] !== "function") {
            throw new Error(`Método ${metodo} não implementado`);
        }
    }
}

// Classe que implementa
class UsuarioRepositorio {
    salvar() {}
    buscar() {}
    remover() {}
}

const repo = new UsuarioRepositorio();
Interface.implementar(repo, ["salvar","buscar","remover"]);
```

Se faltar um método → erro.

## 3️⃣ Mixins

Mixins permitem **composição de comportamentos**, sem herança.

Muito usados em frameworks.

### mixin

```javascript
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
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}
class Pato extends PodeNadar(PodeVoar(Animal)) {}

const pato = new Pato("Donald");
console.log(pato.voar());
console.log(pato.nadar());
```

## 4️⃣ Proxy (métodos mágicos de verdade)

Proxy intercepta operações como:

- acessar atributo
- alterar atributo
- chamar função
- deletar

É equivalente a:

- `__get`
- `__set`
- `__call`

de outras linguagens.

**Exemplo**:

```javascript
const usuario = {
    nome: "Carlos",
    idade: 30
};
const proxy = new Proxy(usuario, {
    get(obj, prop) {
        console.log(`GET ${prop}`);
        return obj[prop];
    },
    set(obj, prop, valor) {
        console.log(`SET ${prop} = ${valor}`);
        obj[prop] = valor;
        return true;
    }
});

console.log(proxy.nome);
proxy.idade = 40;
```

Saída:

```text
GET nome
SET idade = 40
```

## 5️⃣ Reflection

Reflection é **inspecionar objetos em runtime**.

JavaScript possui o objeto `Reflect`.

**Exemplo**:

```javascript
class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return "Olá";
    }

}
```

### reflexão

```javascript
const p = new Pessoa("Ana");
console.log(Reflect.ownKeys(p));
console.log(Reflect.has(p, "nome"));
console.log(Reflect.get(p, "nome"));
Reflect.set(p, "nome", "Maria");
console.log(p.nome);
```

Também podemos listar métodos:

```javascript
console.log(Object.getOwnPropertyNames(Pessoa.prototype));
```

## 6️⃣ Decorators

Decorators são **metaprogramação**, permitindo modificar:

- classes
- métodos
- propriedades

Muito usados em:

- Angular
- NestJS
- TypeORM

**decorator de método**:

```javascript
function log(target, key, descriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args) {
        console.log(`Chamando ${key}`);
        return original.apply(this, args);
    };
}
```

**uso**:

```javascript
class Usuario {
    @log
    salvar() {
        console.log("Salvando usuário");
    }
}
```

Resultado:

```text
Chamando salvar
Salvando usuário
```

## 7️⃣ Decorator de classe

```javascript
function congelarClasse(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
```

Uso:

```javascript
@congelarClasse
class Config {}
```

Agora a classe não pode ser alterada.

## 8️⃣ Decorator de propriedade

```javascript
function somenteLeitura(target, key) {

    Object.defineProperty(target, key, {
        writable: false
    });

}
```

Uso:

```javascript
class Usuario {

    @somenteLeitura
    id = 10;

}
```

## ⚠️ Observação importante

Decorators ainda são **proposta ECMAScript (Stage 3)**.

Funcionam nativamente em:

- TypeScript
- Angular
- NestJS
- Babel

## 🔎 Comparação com outras linguagens

| Conceito       | JavaScript         |
| -------------- | ------------------ |
| Abstract Class | simulado           |
| Interface      | simulado           |
| Mixins         | nativo via funções |
| Proxy          | nativo             |
| Reflection     | `Reflect`          |
| Decorators     | Stage 3            |

Em **JavaScript não existe uma palavra-chave específica para “classe constante”**, como existe em algumas linguagens. Porém existem **algumas formas de obter comportamento semelhante**, dependendo do que você quer “congelar”.

Existem **3 cenários diferentes**:

1. impedir que a variável da classe seja reatribuída
2. impedir alteração da classe
3. impedir alteração das instâncias

## 1️⃣ Classe constante via `const`

A forma mais comum é declarar a classe com `const`.

```javascript
const Pessoa = class {
    constructor(nome) {
        this.nome = nome;
    }
};
```

ou

```javascript
const Pessoa = class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
};
```

ou ainda:

```javascript
const Pessoa = class {
};
```

Mais comum:

```javascript
const Pessoa = class {};
```

ou diretamente:

```javascript
class Pessoa {}
```

Mas:

```javascript
Pessoa = OutraClasse; // ERRO se Pessoa foi const
```

⚠️ Isso **não impede alterar a classe internamente**.

Exemplo:

```javascript
Pessoa.novoMetodo = function(){};
```

continua permitido.

## 2️⃣ Classe realmente “constante”

Para impedir alterações na classe usamos:

```text
Object.freeze()
```

Exemplo:

```javascript
class Pessoa {

    falar() {
        return "Olá";
    }

}

Object.freeze(Pessoa);
Object.freeze(Pessoa.prototype);
```

Agora não é possível:

```javascript
Pessoa.novoMetodo = () => {};     // erro
Pessoa.prototype.outro = () => {}; // erro
```

Isso deixa a classe **imutável**.

## 3️⃣ Classe + instâncias imutáveis

Se quiser garantir que **os objetos criados também não mudem**:

```javascript
class Pessoa {

    constructor(nome) {
        this.nome = nome;

        Object.freeze(this);
    }

}
```

Agora:

```javascript
const p = new Pessoa("Carlos");

p.nome = "Ana"; // erro
```

## 4️⃣ Classe constante com `static`

Às vezes o que se quer é **constantes dentro da classe**.

```javascript
class Config {

    static API_URL = "https://api.site.com";

    static TIMEOUT = 5000;

}

// Uso:

console.log(Config.API_URL);
```

## 5️⃣ Classe apenas de constantes

Muito comum:

```javascript
class Cores {

    static VERMELHO = "#ff0000";
    static VERDE = "#00ff00";
    static AZUL = "#0000ff";

}

// Uso:

console.log(Cores.VERMELHO);
```

## 6️⃣ Padrão mais seguro (classe constante)

```javascript
class Config {

    static API = "https://api.site.com";
    static VERSION = "1.0";

}

Object.freeze(Config);
```

## 🔎 Resumo

| Técnica                           | O que protege              |
| --------------------------------- | -------------------------- |
| `const Pessoa`                    | impede reatribuir variável |
| `Object.freeze(Pessoa)`           | impede alterar a classe    |
| `Object.freeze(Pessoa.prototype)` | impede alterar métodos     |
| `Object.freeze(this)`             | impede alterar instância   |

✅ **Padrão profissional**

```javascript
class Config {

    static API = "https://api.site.com";

}

Object.freeze(Config);
Object.freeze(Config.prototype);
```

Vou mostrar **os três padrões usados em projetos JavaScript profissionais**. Eles são comuns em **Node.js, bibliotecas e frameworks**.

## 1️⃣ Enum em JavaScript

JavaScript não possui `enum` nativo, como Java/C# exceto em TypeScript, mas podemos simular.

### Enum simples

```javascript
const Status = {
    PENDENTE: "PENDENTE",
    PROCESSANDO: "PROCESSANDO",
    FINALIZADO: "FINALIZADO"
};
```

Uso:

```javascript
if (pedido.status === Status.PENDENTE) {
    console.log("Pedido pendente");
}
```

Problema: alguém pode alterar.

### Enum seguro (imutável)

```javascript
const Status = Object.freeze({
    PENDENTE: "PENDENTE",
    PROCESSANDO: "PROCESSANDO",
    FINALIZADO: "FINALIZADO"
});
```

Agora:

```javascript
Status.PENDENTE = "X"; // ignorado
```

### Enum bidirecional (mais avançado)

```javascript
const Status = Object.freeze({
    PENDENTE: 0,
    PROCESSANDO: 1,
    FINALIZADO: 2
});

const StatusNome = Object.freeze(
    Object.fromEntries(
        Object.entries(Status).map(([k,v]) => [v,k])
    )
);
```

Uso:

```javascript
console.log(Status.PROCESSANDO); // 1
console.log(StatusNome[1]); // PROCESSANDO
```

### Enum com classe

Mais poderoso.

```javascript
class Status {
    static PENDENTE = new Status("PENDENTE");
    static PROCESSANDO = new Status("PROCESSANDO");
    static FINALIZADO = new Status("FINALIZADO");

    constructor(nome) {
        this.nome = nome;
        Object.freeze(this);
    }
    toString() {
        return this.nome;
    }
}
```

Uso:

```javascript
const s = Status.PENDENTE;

console.log(s.toString());
```

Vantagem:

- comportamento orientado a objetos
- métodos no enum

## 2️⃣ Singleton de Classe

Singleton garante que **exista apenas uma instância da classe**.

Muito usado para:

- conexão com banco
- cache
- config global
- logger

### Implementação clássica

```javascript
class Config {
    static #instance;

    constructor() {
        if (Config.#instance) return Config.#instance;
        this.api = "https://api.site.com";
        this.timeout = 5000;

        Config.#instance = this;
    }
}
class Database {
    static instance = null;

    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.conectado = true;
        Database.instance = this;
    }
    query(sql) {
        return `Executando: ${sql}`;
    }
}
```

Uso:

```javascript
const c1 = new Config();
const c2 = new Config();
console.log(c1 === c2); // true

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true
```

### Singleton moderno (mais limpo)

```javascript
class Logger {
    static instancia;

    constructor() {
        if (Logger.instancia) return Logger.instancia;
        Logger.instancia = this;
    }
    log(msg) {
        console.log("[LOG]", msg);
    }
}
const logger = new Logger();
export default logger;

// Uso:

logger.log("Sistema iniciado");
```

ou

```javascript
class Logger {
    static #instance;

    constructor() {
        if (Logger.#instance) {
            throw new Error("Use Logger.getInstance()");
        }
    }
    static getInstance() {
        if (!Logger.#instance) {
            Logger.#instance = new Logger();
        }
        return Logger.#instance;
    }
    log(msg) {
        console.log(msg);
    }
}

// Uso:

const log = Logger.getInstance();
log.log("teste");
```

## 3️⃣ Classe completamente imutável (Deep Freeze)

`Object.freeze()` é **superficial**, congela apenas **primeiro nível**.

Exemplo:

```javascript
const obj = {
    a: 1,
    b: { c: 2 }
};

Object.freeze(obj);

obj.b.c = 5; // ainda muda
```

Para congelar **tudo recursivamente**, usamos `deepFreeze`.

### função deepFreeze

```javascript
function deepFreeze(obj) {
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
```

### Classe imutável

```javascript
class Config {
    constructor() {
        this.api = "https://api.site.com";
        this.db = {
            host: "localhost",
            port: 3306
        };
        deepFreeze(this);
    }
}

// Uso:

const cfg = new Config();
cfg.api = "x"; // erro
cfg.db.port = 123; // erro
```

Nada pode ser alterado.

## 🔎 Comparação dos padrões

| Padrão      | Uso                        |
| ----------- | -------------------------- |
| Enum        | valores fixos              |
| Singleton   | única instância            |
| Deep Freeze | objeto totalmente imutável |

## 🔎 Exemplo combinando tudo (arquitetura real)

```javascript
class Environment {
    static DEV = "dev";
    static PROD = "prod";
}

class AppConfig {
    static #instance;

    constructor() {
        if (AppConfig.#instance) return AppConfig.#instance;
        this.env = Environment.DEV;
        this.database = {
            host: "localhost",
            port: 3306
        };
        deepFreeze(this);
        AppConfig.#instance = this;
    }
}

// Uso:

const config = new AppConfig();
console.log(config.env);
```

✅ Isso gera:

- **Enum seguro**
- **Singleton**
- **Config imutável**

Esse padrão é **muito comum em projetos Node.js grandes**.

## 📊 Comparação

| Padrão      | Uso comum                  |
| ----------- | -------------------------- |
| Enum        | estados, tipos, flags      |
| Singleton   | config, conexão DB, logger |
| Deep Freeze | configs imutáveis          |
