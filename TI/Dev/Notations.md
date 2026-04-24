# Notations

## Cases Notations

| Notation              | Example       |
| --------------------- | ------------- |
| lowercase             | primeironome  |
| UPPERCASE             | PRIMEIRONOME  |
| camelCase             | primeiroNome  |
| PascalCase            | PrimeiroNome  |
| snake_case            | primeiro_nome |
| SCREAMING_SNAKE_CASE  | PRIMEIRO_NOME |
| kebab-case            | primeiro-nome |
| SCREAMING-KEBAB-CASE  | primeiro-nome |
| domain.names          | primeiro.nome |
| path/name             | primeiro/nome |
| namespace\name        | primeiro\nome |
| Pascal\Namespace\Name | Primeiro\Nome |
| Pascal_Snake_Case     | Primeiro_Nome |
| Pascal-Kebab-Case     | Primeiro-Nome |
| Pascal/Path/Name      | Primeiro/Nome |
| SCREAMING/PATH/NAME   | PRIMEIRO/NOME |

## Java - Naming Conventions

- lowercase: domain.names
- PascalCase: classes, enum and interfaces
- camelCase: variables, attributes and methods
- SCREAMING_SNAKE_CASE: constants

```java
public class Pessoa{
 public static void main(String[] args) {
  String primeiroNome = "Maria";
  int idade = 22;
  double alturaAtual = 1.65;
  final String MENSAGEM_PADRAO = "Olá";
 }
}
```

## JavaScript - Naming Conventions

- camelCase para variáveis, constantes, funções e métodos
- PascalCase para classes

```javascript
class ClienteBanco {  
    constructor(primeiroNome, cpf) { 
      this.primeiroNome = primeiroNome;
      this.cpf = cpf;
    }

  exibirPrimeiroNome(){
     console.log(this.primeiroNome);
    }
}

var clienteUm = new ClienteBanco('Maria', 150);
var clienteDois = new ClienteBanco('João', 70);
```

## Python - Naming Conventions

- snake_case para variáveis, funções e métodos
- PascalCase para classes
- SCREAMING_SNAKE_CASE para constantes

```python
class Pessoa:
    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf

        def exibir_primeiro_nome(self):
        print(self.nome)

        pessoa_um = Pessoa('Alice', '123456789')
```

## GO - Naming Conventions

- PascalCase para exportar (acessível fora do pacote)
- camelCase para internos (não é exportado)

```go
package nome

type ExportedStruct {
    unexportedField string
}
```

## Ruby - Naming Conventions

- PascalCase para classes e módulos
- snake_case para métodos, variáveis, nomear arquivos e diretórios
- SCREAMING_SNAKE_CASE para constantes

```ruby
class Pessoa

    def initialize(primeiro_nome, cpf)    
        @primeiro_nome = primeiro_nome
        @cpf = cpf
    end

    def exibe_primeiro_nome
        @primeiro_nome
    end
end

pessoa_um = Pessoa.new('Alice', 123456789)
```

## PHP - Naming Conventions

<https://flowframework.readthedocs.io/en/stable/TheDefinitiveGuide/PartV/CodingGuideLines/PHP.html>

- Pascal\Namespace\Name: namespaces
- PascalCase: classes, Interface, Exception, Filenames
- cammelCase: Variables and Methods
  - __cammelCase:__magicMethods()
- SCREAMING_SNAKE_CASE: constantes

```php
namespace Exemplo\Name\Convention;
class PhpNotation extends Conventions {
 const CONSTANT_NOTATION=10;
 public $argumentNotation;
 public __construct(){}
 public nameMethod($parameterNotation){}
}
```

## Pear - Naming Conventions

- Pascal_Snake_Case: classes
- cammelCase: Variables and Methods
  - _cammelCase:_privateVars and _privateMethods()
- SCREAMING_SNAKE_CASE: constantes
- SCREAMING_SNAKE_CASE+_cammelCase: Global Variables and Functions

```pear
```
