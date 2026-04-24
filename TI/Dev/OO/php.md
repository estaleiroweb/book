```php
<?php

// 1. Elementos Estruturais

// Classe: Molde para criar objetos
class Cadeira {
    // Atributos: Propriedades da classe
    public $cor;
    private $material;
    protected $altura;

    // Construtor: Inicializa o objeto
    public function __construct($cor, $material, $altura) {
        $this->cor = $cor;
        $this->material = $material;
        $this->altura = $altura;
    }

    // Método: Ação do objeto
    public function ajustarAltura($novaAltura) {
        $this->altura = $novaAltura;
        return "Altura ajustada para: $novaAltura cm";
    }

    // Destrutor: Libera recursos
    public function __destruct() {
        echo "Cadeira destruída\n";
    }

    // Estado: Representado pelos valores atuais dos atributos
    public function getEstado() {
        return "Cor: $this->cor, Material: $this->material, Altura: $this->altura";
    }
}

// Objeto: Instância da classe
$cadeira = new Cadeira("Azul", "Madeira", 50);

// Mensagem: Comunicação entre objetos (chamada de método)
echo $cadeira->ajustarAltura(60) . "\n";

// Interface: Define métodos que devem ser implementados
interface Móvel {
    public function mover();
}

class CadeiraGiratoria extends Cadeira implements Móvel {
    public function mover() {
        return "Cadeira movida para nova posição";
    }
}

// 2. Pilares

// Abstração: Representar apenas o essencial (via interface Móvel acima)

// Encapsulamento: Proteger atributos e expor via métodos
class Encapsulada {
    private $segredo = "Dado privado";

    public function getSegredo() {
        return $this->segredo;
    }
}

// Herança: Criar classe derivada
class CadeiraDeEscritorio extends Cadeira {
    public $rodas;

    public function __construct($cor, $material, $altura, $rodas) {
        parent::__construct($cor, $material, $altura);
        $this->rodas = $rodas;
    }
}

// Polimorfismo: Diferentes classes respondem ao mesmo método
class CadeiraDeJantar extends Cadeira {
    public function ajustarAltura($novaAltura) {
        return "Cadeira de jantar não ajusta altura";
    }
}

$cadeiraEscritorio = new CadeiraDeEscritorio("Preto", "Metal", 70, 4);
$cadeiraJantar = new CadeiraDeJantar("Vermelho", "Madeira", 50);
echo $cadeiraEscritorio->ajustarAltura(80) . "\n"; // Usa método da classe base
echo $cadeiraJantar->ajustarAltura(80) . "\n"; // Usa método sobrescrito

// 3. Outros Conceitos

// Composição: Objetos complexos formados por outros objetos
class Sala {
    private $cadeira;

    public function __construct(Cadeira $cadeira) {
        $this->cadeira = $cadeira;
    }

    public function getCadeira() {
        return $this->cadeira;
    }
}

// Agregação: Relação mais fraca, objetos independentes
class Conjunto {
    private $cadeiras = [];

    public function addCadeira(Cadeira $cadeira) {
        $this->cadeiras[] = $cadeira;
    }
}

// Associação: Relação genérica entre classes
class Pessoa {
    public $nome;
    public $cadeira;

    public function __construct($nome, Cadeira $cadeira) {
        $this->nome = $nome;
        $this->cadeira = $cadeira;
    }
}

// Coesão: Classe com responsabilidade única
class CalculadoraDeAltura {
    public function calcularAlturaMaxima(Cadeira $cadeira) {
        return $cadeira->altura + 20; // Exemplo simplificado
    }
}

// Acoplamento: Baixa dependência (exemplo com CalculadoraDeAltura acima)

// Sobrecarga: PHP não suporta sobrecarga nativa, mas podemos simular
class Calculadora {
    public function somar(...$numeros) {
        return array_sum($numeros);
    }
}

// Sobrescrita: Redefinir método herdado (exemplo em CadeiraDeJantar acima)

// Classe Abstrata: Não pode ser instanciada
abstract class MóvelAbstrato {
    abstract public function descrever();
}

// Método Abstrato: Deve ser implementado por subclasses
class Mesa extends MóvelAbstrato {
    public function descrever() {
        return "Sou uma mesa";
    }
}

// Especialização: Classe mais específica
class CadeiraDeBalanco extends Cadeira {
    public function balancar() {
        return "Cadeira balançando";
    }
}

// Generalização: Classe mais genérica (exemplo com Cadeira como base)

// Modificadores de Acesso
class ExemploAcesso {
    public $publico = "Acessível de qualquer lugar";
    protected $protegido = "Acessível na classe e subclasses";
    private $privado = "Acessível apenas na classe";
}

// Modificadores de Comportamento
class ExemploComportamento {
    // static: Pertence à classe
    public static $contador = 0;

    // final: Impede sobrescrita
    final public function metodoFinal() {
        return "Não pode ser sobrescrito";
    }

    // const: Valor constante
    const VALOR_CONSTANTE = 42;
}

// abstract: Exemplo já dado em MóvelAbstrato

// Exemplo de uso
$encapsulada = new Encapsulada();
echo $encapsulada->getSegredo() . "\n";

$sala = new Sala($cadeira);
$conjunto = new Conjunto();
$conjunto->addCadeira($cadeira);

$pessoa = new Pessoa("João", $cadeira);
$calculadora = new Calculadora();
echo $calculadora->somar(1, 2, 3) . "\n";

$mesa = new Mesa();
echo $mesa->descrever() . "\n";

$cadeiraBalanco = new CadeiraDeBalanco("Marrom", "Madeira", 60);
echo $cadeiraBalanco->balancar() . "\n";

echo ExemploComportamento::$contador . "\n";
echo ExemploComportamento::VALOR_CONSTANTE . "\n";



class MagicMethodsExample {
    // Propriedades para demonstração
    private $data = [];
    private $hidden = 'valor secreto';

    // __construct: Chamado ao instanciar a classe
    public function __construct() {
        echo "Objeto criado!\n";
    }

    // __destruct: Chamado quando o objeto é destruído
    public function __destruct() {
        echo "Objeto destruído!\n";
    }

    // __get: Chamado ao acessar uma propriedade inexistente ou inacessível
    public function __get($name) {
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        return "Propriedade '$name' não encontrada!\n";
    }

    // __set: Chamado ao definir uma propriedade inexistente ou inacessível
    public function __set($name, $value) {
        $this->data[$name] = $value;
        echo "Propriedade '$name' definida com valor: $value\n";
    }

    // __isset: Chamado ao verificar se uma propriedade existe com isset()
    public function __isset($name) {
        return isset($this->data[$name]);
    }

    // __unset: Chamado ao usar unset() em uma propriedade
    public function __unset($name) {
        unset($this->data[$name]);
        echo "Propriedade '$name' removida!\n";
    }

    // __call: Chamado ao invocar métodos inexistentes ou inacessíveis
    public function __call($name, $arguments) {
        echo "Método '$name' chamado com argumentos: " . implode(', ', $arguments) . "\n";
    }

    // __callStatic: Chamado ao invocar métodos estáticos inexistentes ou inacessíveis
    public static function __callStatic($name, $arguments) {
        echo "Método estático '$name' chamado com argumentos: " . implode(', ', $arguments) . "\n";
    }

    // __toString: Chamado ao tratar o objeto como string
    public function __toString() {
        return "Objeto MagicMethodsExample com dados: " . print_r($this->data, true) . "\n";
    }

    // __invoke: Chamado quando o objeto é tratado como uma função
    public function __invoke(...$arguments) {
        echo "Objeto invocado como função com argumentos: " . implode(', ', $arguments) . "\n";
    }

    // __set_state: Chamado ao usar var_export() para exportar o objeto
    public static function __set_state($array) {
        $obj = new self();
        $obj->data = $array['data'];
        return $obj;
    }

    // __clone: Chamado ao clonar o objeto
    public function __clone() {
        echo "Objeto clonado!\n";
        $this->data = array_map('unserialize', array_map('serialize', $this->data));
    }

    // __debugInfo: Chamado ao usar var_dump() no objeto
    public function __debugInfo() {
        return [
            'data' => $this->data,
            'info' => 'Informações personalizadas para debug'
        ];
    }

    // __serialize: Chamado ao serializar o objeto
    public function __serialize(): array {
        return [
            'data' => $this->data,
            'hidden' => $this->hidden
        ];
    }

    // __unserialize: Chamado ao desserializar o objeto
    public function __unserialize(array $data): void {
        $this->data = $data['data'];
        $this->hidden = $data['hidden'];
        echo "Objeto desserializado!\n";
    }

    // __sleep: Chamado ao usar serialize() no objeto
    public function __sleep() {
        echo "Preparando para serializar...\n";
        return ['data', 'hidden'];
    }

    // __wakeup: Chamado ao usar unserialize() no objeto
    public function __wakeup() {
        echo "Objeto acordado após desserialização!\n";
    }
}

// Exemplo de uso
if (php_sapi_name() === 'cli') {
    // Criação do objeto
    $obj = new MagicMethodsExample();

    // Testando __set e __get
    $obj->nome = "João"; // __set
    echo $obj->nome; // __get

    // Testando __isset e __unset
    var_dump(isset($obj->nome)); // __isset
    unset($obj->nome); // __unset
    var_dump(isset($obj->nome)); // __isset

    // Testando __call
    $obj->metodoInexistente("arg1", "arg2"); // __call

    // Testando __callStatic
    MagicMethodsExample::metodoEstatico("arg1", "arg2"); // __callStatic

    // Testando __toString
    echo $obj; // __toString

    // Testando __invoke
    $obj("teste1", "teste2"); // __invoke

    // Testando __clone
    $clone = clone $obj; // __clone

    // Testando __set_state
    $exported = var_export($obj, true);
    eval('$newObj = ' . $exported . ';');

    // Testando __debugInfo
    var_dump($obj); // __debugInfo

    // Testando __serialize e __unserialize
    $serialized = serialize($obj); // __sleep, __serialize
    unserialize($serialized); // __wakeup, __unserialize
}
```
