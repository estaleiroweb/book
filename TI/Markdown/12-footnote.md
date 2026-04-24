# Notas de rodapé

[link](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended#markdown-it-footnote)

Parte da extensão [Markdown Extended](https://marketplace.visualstudio.com/items?itemName=jebbs.markdown-extended) do VSCode.

As notas de rodapé permitem que você adicione notas e referências sem desorganizar o corpo do documento. Quando você cria uma nota de rodapé, um número sobrescrito com um link aparece onde você adicionou a referência da nota de rodapé. Os leitores podem clicar no link para pular para o conteúdo da nota de rodapé na parte inferior da página.

Para criar uma referência de nota de rodapé, adicione um acento circunflexo e um identificador dentro de colchetes (`[^1]`). Os identificadores podem ser números ou palavras, mas não podem conter espaços ou tabulações. Os identificadores apenas correlacionam a referência de nota de rodapé com a nota de rodapé em si — na saída, as notas de rodapé são numeradas sequencialmente.

Adicione a nota de rodapé usando outro acento circunflexo e número dentro de colchetes com dois pontos e texto (`[^1]`: My footnote.). Você não precisa colocar notas de rodapé no final do documento. Você pode colocá-las em qualquer lugar, exceto dentro de outros elementos, como listas, citações em bloco e tabelas.


Here's a simple footnote,[^1] and here's a longer one.[^bignote]

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

Here's a simple footnote,[^1] and here's a longer one.[^bignote]


[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
