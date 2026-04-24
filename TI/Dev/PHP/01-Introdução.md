# PHP - Introdução

<img style='width: 200px; vertical-align: middle;' src='https://mehedidracula.gallerycdn.vsassets.io/extensions/mehedidracula/php-namespace-resolver/1.1.9/1656799011659/Microsoft.VisualStudio.Services.Icons.Default' />


O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor) é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.

Veja: <https://www.php.net/manual/pt_BR/introduction.php>

## Links

- Test Online:   - https://onlinephp.io/
- Notebook Online: https://phpsandbox.io/
- Site Oficial: https://www.php.net/
- Documentação: https://www.php.net/manual/pt_BR/
- Jupter Code: https://github.com/Coder-Spirit/Jupyter-PHP
- Artigos:
  - Jupiter: https://phpsp.org.br/artigos/notebooks-jupyter-em-php-alem-do-python-sim-e-possivel-veja-como-fazer/
  - PHP Version Benchmark: https://onlinephp.io/benchmarks

## Agenda

1. Introdução
   1. Instalação
   2. Sintaxe
2. Referência
   1. Comandos print, echo, system
   2. Tipo
   3. Variáveis
   4. Operadores
      1. Precedência de Operadores
      2. Aritméticos
      3. Incremento e Decremento
      4. Atribuição
      5. Binários
      6. Comparação
      7. Controle de Erro
      8. Execução
      9. Lógica
      10. String
      11. Arrays
      12. Tipo
      13. Data
   5. POST/GET/REQUEST/FILE
   6. Cookies
   7. Sessões
   8. Constantes
   9. Comando
   10. Funções
       1. Math
       2. String
       3. Array
       4. Date
          1. strtotime <https://www.php.net/manual/en/datetime.formats.php#datetime.formats.relative>
          2. date <https://www.php.net/manual/en/datetime.format.php>
       5. IO
           1. file_get_contents
           2. file_put_contents
           3. file_get_contents('php://input')
           4. curl
           5. socket
3. Estruturas de Controle
   1. if, else, elseif/else if
   2. switch
   3. while, do-while, for, foreach
   4. break, continue
   5. require, include, require_once, include_once
   6. return, exit, die
4. Funções
   1. Normais
   2. Anônimas
   3. Call Functions
      1. normal()
      2. normal(&referer)
      3. $var()
      4. call_user_func()
5. OO - Orientação Objeto
   1. Classe
   2. Propriedade
   3. Método
   4. Visibilidade
   5. Herança
   6. Classes e Métodos Abstratos/Finais
   7. Interfaces
   8. Métodos mágicos
   9. Clonagem
   10. Diagrama de Classes
6. Design Patterns
   1. PSR
   2. PER
   3. K&R
   4. ALLMAN
7. Composer
8. E Mais https://www.php.net/manual/pt_BR/features.php https://www.php.net/manual/pt_BR/funcref.php
9. Clean Code
10. SOLID

## O que o PHP pode fazer?

Qualquer coisa. 

## Instalação

- LAMP: [Unbuntu](https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu), [RedHat](https://www.redhat.com/en/blog/lamp-server) etc
- WAMP: https://sourceforge.net/projects/wampserver/
- Linux/Unix: https://www.php.net/manual/pt_BR/install.unix.php
- MacOS: https://www.php.net/manual/pt_BR/install.macosx.php
- Win: https://www.php.net/manual/pt_BR/install.windows.php
- Docker: https://app.docker.com/ | https://hub.docker.com/
- Cloud: [Azure App Services](https://www.php.net/manual/pt_BR/install.cloud.azure.php), [Amazon EC2](https://www.php.net/manual/pt_BR/install.cloud.ec2.php), [DigitalOcean](https://www.php.net/manual/pt_BR/install.cloud.digitalocean.php), GCP, OCI etc

*[LAMP]: Linux + Apache + MySQL + PHP
*[WAMP]: Windows + Apache + MySQL + PHP

## Sintaxe

O PHP inclui uma tag echo curta `<?=` que é uma forma abreviada da forma mais verbosa `<?php echo`.

**Exemplo #1 Tags de Abertura e Fechamento do PHP**

```php
1.  <?php echo 'Se quiser servir código PHP em documentos XHTML ou XML,
                use essas tags'; ?>
2.  A tag echo curta <?= 'imprima essa string' ?> também pode ser usada.
    Ela é equivalente a <?php echo 'imprima essa string' ?>.
3.  <? echo 'Este código está entre tags curtas, mas só funcionará '.
            'se a diretiva short_open_tag estiver habilitada'; ?>
```

!!! warning Boas práticas de Abertura e Fechamento do PHP

    É extremamente aconcelhável abrir o tag PHP na primeira linha com `<?PHP` e NÃO fechar evitando espaços indesejáveis como retorno.

    > Com exceção do item abaixo onde a abertura ficará na segunda linha

!!! warning PHP executável no Linux

    Use a primeira linha do documento para informar ao Linux qual é o interpretador do código abaixo. `#!interpretador`

    No caso do PHP use o exemplo:

    ```php
    #!/usr/bin/php
    <?PHP
    // código PHP
    ```
    não se esqueça de definir opções de execução para seu código no Linux:

    ```bash
    chmod +x arquivo.php
    ```
