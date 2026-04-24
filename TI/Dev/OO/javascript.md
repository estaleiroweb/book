```javascript
// 1. Elementos Estruturais

// Classe: Molde para criar objetos
class Cadeira {
   // Atributos: Propriedades da classe
   #altura; // Private field
   _material; // Protected por convenção não por funcionalidade
   constructor(cor, material, altura) {
         this.cor = cor;
         this._material = material; // Protected (by convention)
         this.#altura = altura;
   }

   static get VALOR_CONSTANTE() { return 42; } para simular uma constante

   // Método: Ação do objeto
   ajustarAltura(novaAltura) {
         this.#altura = novaAltura;
         return `Altura ajustada para: ${novaAltura} cm`;
   }

   // Estado: Representado pelos valores atuais dos atributos
   getEstado() {
         return `Cor: ${this.cor}, Material: ${this._material}, Altura: ${this.#altura}`;
   }

   // Destrutor: JavaScript usa garbage collector, no destrutor explícito
   destroy() {
         console.log("Cadeira destruída");
   }
}
class BankAccount {
    #saldo; // Private field

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        console.log("Acessando saldo");
        return this.#saldo;
    }

    set saldo(valor) {
        console.log("Alterando saldo");
        if (valor < 0) {
            throw new Error("Saldo não pode ser negativo");
        }
        this.#saldo = valor;
    }

    // JavaScript não suporta deleter diretamente, mas podemos simular
    deleteSaldo() {
        console.log("Deletando saldo");
        this.#saldo = 0;
    }
}

// Objeto: Instância da classe
const cadeira = new Cadeira("Azul", "Madeira", 50);

// Mensagem: Comunicação entre objetos (chamada de método)
console.log(cadeira.ajustarAltura(60));

// Interface: Em JavaScript, simulada com classes abstratas ou objetos
class Movel {
   mover() {
         throw new Error("Método 'mover' deve ser implementado");
   }
}

class CadeiraGiratoria extends Cadeira {
   mover() {
         return "Cadeira movida para nova posição";
   }
}

// 2. Pilares

// Abstração: Representar apenas o essencial (via Movel acima)

// Encapsulamento: Proteger atributos e expor via métodos
class Encapsulada {
   #segredo = "Dado privado";
   getSegredo() {
         return this.#segredo;
   }
}

// Herança: Criar classe derivada
class CadeiraDeEscritorio extends Cadeira {
   constructor(cor, material, altura, rodas) {
         super(cor, material, altura);
         this.rodas = rodas;
   }
}

// Polimorfismo: Diferentes classes respondem ao mesmo método
class CadeiraDeJantar extends Cadeira {
   ajustarAltura(novaAltura) {
         return "Cadeira de jantar não ajusta altura";
   }
}

const cadeiraEscritorio = new CadeiraDeEscritorio("Preto", "Metal", 70, 4);
const cadeiraJantar = new CadeiraDeJantar("Vermelho", "Madeira", 50);
console.log(cadeiraEscritorio.ajustarAltura(80)); // Usa método da classe base
console.log(cadeiraJantar.ajustarAltura(80));    // Usa método sobrescrito

// 3. Outros Conceitos

// Composição: Objetos complexos formados por outros objetos
class Sala {
   constructor(cadeira) {
         this.cadeira = cadeira;
   }
   getCadeira() {
         return this.cadeira;
   }
}

// Agregação: Relação mais fraca, objetos independentes
class Conjunto {
   constructor() {
         this.cadeiras = [];
   }
   addCadeira(cadeira) {
         this.cadeiras.push(cadeira);
   }
}

// Associação: Relação genérica entre classes
class Pessoa {
   constructor(nome, cadeira) {
         this.nome = nome;
         this.cadeira = cadeira;
   }
}

// Coesão: Classe com responsabilidade única
class CalculadoraDeAltura {
   calcularAlturaMaxima(cadeira) {
         return cadeira.#altura + 20; // Não acessível diretamente, apenas para ilustração
   }
}

// Acoplamento: Baixa dependência (exemplo com CalculadoraDeAltura acima)

// Sobrecarga: JavaScript não suporta sobrecarga nativa, mas usamos argumentos rest
class Calculadora {
   somar(...numeros) {
         return numeros.reduce((a, b) => a + b, 0);
   }
}

// Sobrescrita: Redefinir método herdado (exemplo em CadeiraDeJantar acima)

// Classe Abstrata: Simulada com erro se instanciada
class MovelAbstrato {
   constructor() {
         if (this.constructor === MovelAbstrato) {
            throw new Error("Classe abstrata não pode ser instanciada");
         }
   }
   descrever() {
         throw new Error("Método 'descrever' deve ser implementado");
   }
}

// Método Abstrato: Deve ser implementado por subclasses
class Mesa extends MovelAbstrato {
   descrever() {
         return "Sou uma mesa";
   }
}

// Especialização: Classe mais específica
class CadeiraDeBalanco extends Cadeira {
   balancar() {
         return "Cadeira balançando";
   }
}

// Generalização: Classe mais genérica (exemplo com Cadeira como base)

// Modificadores de Acesso
class ExemploAcesso {
   #privado = "Acessível apenas na classe";
   constructor() {
         this.publico = "Acessível de qualquer lugar";
         this._protegido = "Acessível na classe e subclasses";
   }
   getPrivado() {
         return this.#privado;
   }
}

// Modificadores de Comportamento
class ExemploComportamento {
   // static: Pertence à classe
   static contador = 0;

   static metodoEstatico() {
         return "Método estático";
   }

   // final: JavaScript não tem 'final', mas usamos convenção
   metodoFinal() {
         return "Convencionalmente não sobrescrito";
   }

   // const: Usamos constantes
   static VALOR_CONSTANTE = 42;
}

// Exemplo de uso
const encapsulada = new Encapsulada();
console.log(encapsulada.getSegredo());

const sala = new Sala(cadeira);
const conjunto = new Conjunto();
conjunto.addCadeira(cadeira);

const pessoa = new Pessoa("João", cadeira);
const calculadora = new Calculadora();
console.log(calculadora.somar(1, 2, 3));

const mesa = new Mesa();
console.log(mesa.descrever());

const cadeiraBalanco = new CadeiraDeBalanco("Marrom", "Madeira", 60);
console.log(cadeiraBalanco.balancar());

console.log(ExemploComportamento.contador);
console.log(ExemploComportamento.metodoEstatico());
console.log(ExemploComportamento.VALOR_CONSTANTE);

cadeira.destroy();
```

### Modificadores em JavaScript e Suas Alternativas

1. **Protected**:
   - **Status**: JavaScript não possui uma palavra-chave `protected` nativa. Por convenção, propriedades ou métodos prefixados com um sublinhado (`_`) são tratados como protegidos, indicando que devem ser acessados apenas dentro da classe ou de suas subclasses.
   - **Alternativa**: Use a convenção de sublinhado (`_propriedade`) para sinalizar que uma propriedade ou método é destinado ao uso interno ou por subclasses. Essa convenção não é imposta pela linguagem, mas é amplamente seguida. Campos privados (usando `#`) podem ser usados para encapsulamento mais rigoroso, mas não são acessíveis por subclasses.
   - **Nota**: A convenção do sublinhado depende da disciplina do desenvolvedor, pois propriedades com `_` ainda são acessíveis fora da classe.
2. **Abstract**:
    - **Status**: JavaScript não possui uma palavra-chave `abstract` para classes ou métodos. Classes abstratas (que não podem ser instanciadas e exigem que subclasses implementem certos métodos) não são suportadas diretamente.
    - **Alternativa**: Simule classes abstratas lançando erros no construtor da classe base para evitar instanciação e em métodos que devem ser sobrescritos por subclasses. Isso impõe o comportamento "abstrato" por meio de verificações em tempo de execução.
    - **Exemplo**: `if (this.constructor === ClasseBase) throw new Error("Não pode instanciar classe abstrata");`.
3. **Final**:
    - **Status**: JavaScript não possui uma palavra-chave `final` para impedir a sobrescrita de métodos ou a extensão de classes.
    - **Alternativa**: Use convenções para indicar que um método ou classe não deve ser sobrescrito ou estendido, como documentação ou nomes específicos. Alternativamente, use `Object.seal()` ou `Object.freeze()` para restringir modificações em objetos, embora não sejam substitutos perfeitos para `final`. Para classes, pode-se lançar erros em subclasses que tentem estender uma classe "final", mas isso não é comum.
    - **Nota**: Impedir extensão é raro em JavaScript devido à sua natureza dinâmica, e os desenvolvedores geralmente dependem de documentação para comunicar intenções.
4. **Const**:
    - **Status**: JavaScript possui a palavra-chave `const`, mas ela é usada para declarações de variáveis, não como um modificador de classe no mesmo sentido que em outras linguagens (por exemplo, para propriedades constantes de classe). Propriedades declaradas com `const` fora do escopo da classe são imutáveis, mas dentro de uma classe, não há um modificador `const` direto para propriedades.
    - **Alternativa**: Use propriedades `static` com `Object.defineProperty()` para criar propriedades somente leitura (como constantes) ou use propriedades `static` com a convenção de que não devem ser modificadas. A palavra-chave `const` pode ser usada para valores constantes dentro de métodos ou fora da classe.
    - **Exemplo**: `static get VALOR_CONSTANTE() { return 42; }` para simular uma constante.
