# Design Patterns

https://en.wikipedia.org/wiki/Indentation_style

Design Patterns são soluções reutilizáveis para problemas comuns no desenvolvimento de software. Eles não são código pronto, mas diretrizes sobre como estruturar seu código para resolver problemas recorrentes. No PHP, a implementação desses padrões segue boas práticas estabelecidas por meio das **PSRs (PHP Standards Recommendations)**, além de outros estilos de codificação como **PER (PHP Extension Repository)**, **K&R** e **Allman**. Vamos abordar cada um deles em detalhe:

## 1. PSR (PHP Standards Recommendations)

https://www.php-fig.org/psr/

As PSRs são padrões criados pelo **PHP-FIG (Framework Interop Group)** para padronizar o código PHP, facilitar a interoperabilidade entre frameworks e criar um ecossistema mais consistente. Os principais são:

- **PSR-1:** Padrões básicos de codificação (nomes de classes, métodos, e constantes).
- **PSR-2:** Guia de estilo de codificação (indentação, espaços, linhas em branco, etc.). Substituída pela PSR-12.
- **PSR-3:** Logger Interface, define como os logs devem ser tratados.
- **PSR-4:** Autoloading, especifica como organizar diretórios e namespaces.
- **PSR-12:** Guia atualizado de estilo de codificação, substitui PSR-2.

**Exemplo em PSR-12:**  
```php
namespace App\Controller;

class UserController
{
    public function getUserName(): string
    {
        return 'John Doe';
    }
}
```

## 2. PER (PHP Extension Repository)

O PER (também chamado de PEP em outras linguagens) não é diretamente relacionado a design patterns, mas sim um conjunto de padrões para a criação de extensões para o PHP. No contexto de desenvolvimento de aplicações, é menos usado do que as PSRs, mas pode ser relevante se você estiver desenvolvendo extensões nativas em C/C++ para o PHP.

## 3. K&R (Kernighan and Ritchie Style)

É um estilo de formatação de código que coloca as chaves de abertura na mesma linha da declaração. Muito usado em linguagens como C e JavaScript, mas aplicável ao PHP. É uma escolha popular em projetos que desejam manter o código compacto e legível.

**Exemplo em K&R:**  
```php
if ($condition) {
    echo "K&R Style!";
} else {
    echo "Different!";
}
```

## 4. Allman Style (BSD Style)

Neste estilo, as chaves são posicionadas em linhas separadas, o que pode aumentar a legibilidade, especialmente em blocos de código longos. Este estilo é frequentemente preferido em contextos corporativos ou acadêmicos.

**Exemplo em Allman:**  
```php
if ($condition)
{
    echo "Allman Style!";
}
else
{
    echo "Different!";
}
```

## Resumo Prático:

- **Design Patterns** ajudam a organizar e resolver problemas recorrentes.
- **PSRs** oferecem diretrizes amplamente aceitas para codificação em PHP.
- **K&R e Allman** são estilos visuais que podem ser aplicados conforme a preferência ou padrão do projeto.
  
Adotar uma combinação de **Design Patterns** com as **PSRs** garante um código bem estruturado e facilmente compreensível por qualquer desenvolvedor que trabalhe no projeto.
