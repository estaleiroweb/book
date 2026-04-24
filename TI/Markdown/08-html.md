# HTML

Muitos aplicativos Markdown permitem que você use tags HTML em texto formatado em Markdown. Isso é útil se você preferir certas tags HTML à sintaxe Markdown. Por exemplo, algumas pessoas acham mais fácil usar tags HTML para imagens. Usar HTML também é útil quando você precisa alterar os atributos de um elemento, como especificar a cor do texto ou alterar a largura de uma imagem.

Para usar HTML, coloque as tags no texto do seu arquivo formatado em Markdown.

This `**word**` is bold. This `<em>`word`</em>` is italic.
A saída renderizada se parece com isso:

Esta palavra está em negrito. Esta palavra está em itálico.

## Melhores práticas de HTML

Por motivos de segurança, nem todos os aplicativos Markdown suportam HTML em documentos Markdown. Em caso de dúvida, verifique a documentação do seu aplicativo Markdown. Alguns aplicativos suportam apenas um subconjunto de tags HTML.

Use linhas em branco para separar elementos HTML de nível de bloco como `<div>`, `<table>`, `<pre>`, e `<p>`do conteúdo ao redor. Tente não recuar as tags com tabulações ou espaços — isso pode interferir na formatação.

Você não pode usar a sintaxe Markdown dentro de tags HTML de nível de bloco. Por exemplo, `<p>`italic and `**bold**``</p>`não vai funcionar.