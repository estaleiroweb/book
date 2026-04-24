# Links

Para criar um link, coloque o texto do link entre colchetes (por exemplo, [Duck Duck Go]) e, em seguida, coloque imediatamente o URL entre parênteses (por exemplo, (https://duckduckgo.com)).

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

## Adicionando Dicas{#linkTitle}

Opcionalmente, você pode adicionar um título para um link. Isso aparecerá como uma dica de ferramenta quando o usuário passar o mouse sobre o link. Para adicionar um título, coloque-o entre aspas após o URL.

Ex: My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

## Endereços de URLs e Email

Para transformar rapidamente um URL ou endereço de e-mail em um link, coloque-o entre colchetes angulares.

<https://www.markdownguide.org>
<fake@example.com>

## Formatando Links
Para enfatizar links, adicione asteriscos antes e depois dos colchetes e parênteses. Para denotar links como código , adicione acentos graves nos colchetes.

- I love supporting the **[EFF](https://eff.org)**.
- This is the *[Markdown Guide](https://www.markdownguide.org)*.
- See the section on [`code`](#code).


## Links de estilo de referência

- Em vez de [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles")
- Pode fazer [hobbit-hole][1] e pode ser reaproveitado com outro item referenciando ao tópico abaixo.
- Pode fazer [Com Texto][texto_qq]

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
[texto_qq]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

- \[1\]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
- \[1\]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
- \[1\]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
- \[1\]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)
- \[1\]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
- \[1\]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'
- \[1\]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)

## Uso de HTML

Pode usar: <a href="https://www.example.com/my great page">link</a>

## Título com Link Personalizado

Veja em [01-titles.md](01-titles.md) sobre referência de títulos


[Referência com Título](#linkTitle)


## Vinculação automática de URL

Muitos processadores Markdown transformam URLs em links automaticamente. Isso significa que se você digitar http://www.example.com, seu processador Markdown o transformará automaticamente em um link, mesmo que você não tenha usado colchetes .

`http://www.example.com`

A saída renderizada se parece com isso:

http://www.example.com

## Desabilitando a vinculação automática de URL

Se não quiser que um URL seja vinculado automaticamente, você pode remover o link indicando o URL como um código com acentos graves.

`` `http://www.example.com` ``

A saída renderizada se parece com isso:

`http://www.example.com`