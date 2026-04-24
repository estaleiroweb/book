# robots.txt

O arquivo `robots.txt` é um documento de texto simples que os webmasters colocam na raiz de seus sites para guiar os **rastreadores da web** (também conhecidos como **spiders**, **bots** ou **crawlers**) sobre quais partes do site eles podem ou não acessar e indexar. É como um conjunto de regras que diz aos robôs onde eles podem ir e onde não devem.

É importante notar que o `robots.txt` é apenas uma **diretriz**, não um mecanismo de segurança. Rastreadores mal-intencionados ou não conformes podem ignorar essas regras. No entanto, os principais rastreadores de mecanismos de busca (como Googlebot, Bingbot, etc.) respeitam as diretrizes do `robots.txt`.

## Por que usar `robots.txt`?

Existem várias razões para usar um arquivo `robots.txt`:

- **Evitar sobrecarga do servidor:** Ao impedir que os rastreadores acessem certas partes do seu site, você pode reduzir a carga no seu servidor, especialmente em áreas que consomem muitos recursos.
- **Otimizar o rastreamento:** Direcionar os rastreadores para o conteúdo mais importante do seu site pode ajudar a garantir que as páginas mais relevantes sejam indexadas primeiro.
- **Impedir a indexação de conteúdo indesejado:** Você pode evitar que páginas sensíveis, conteúdo duplicado ou páginas de baixo valor (como carrinhos de compra, resultados de pesquisa internos, páginas de login) apareçam nos resultados de pesquisa.
- **Gerenciar o orçamento de rastreamento:** Para sites grandes, o `robots.txt` ajuda a "orçar" o rastreamento, focando os esforços dos bots nas páginas mais importantes.

## Regras do `robots.txt`

O arquivo `robots.txt` usa uma sintaxe específica com diretrizes que os rastreadores interpretam. Cada diretriz consiste em um **campo** seguido por um **valor**.

Aqui estão as principais diretrizes e suas explicações:

### `User-agent`

Esta diretriz especifica a qual rastreador a regra subsequente se aplica. Você pode ter várias diretrizes `User-agent` em um único arquivo `robots.txt`, cada uma com um conjunto diferente de regras.

- **Sintaxe:** `User-agent: [nome-do-rastreador]`
- **Exemplos:**
  - `User-agent: *`: Aplica-se a todos os rastreadores. O asterisco (`*`) é um curinga.
  - `User-agent: Googlebot`: Aplica-se apenas ao rastreador principal do Google.
  - `User-agent: Bingbot`: Aplica-se apenas ao rastreador do Bing.

### `Disallow`

Esta é a diretriz mais comum. Ela informa aos rastreadores para **não** acessarem um determinado caminho ou diretório.

- **Sintaxe:** `Disallow: [caminho]`
- **Exemplos:**
  - `Disallow: /`: Impede o acesso a todo o site. (Use com extrema cautela, pois isso pode desindexar seu site inteiro\!)
  - `Disallow: /privado/`: Impede o acesso ao diretório `/privado/` e a todos os seus subdiretórios e arquivos.
  - `Disallow: /admin/login.html`: Impede o acesso apenas ao arquivo `login.html` dentro do diretório `/admin/`.
  - `Disallow: /temp`: Impede o acesso a qualquer URL que comece com `/temp`. Por exemplo, `/temp.html`, `/temporary/`, `/temp/page.html` seriam todos bloqueados.

### `Allow` (Somente Googlebot e alguns outros rastreadores)

Esta diretriz é usada para permitir explicitamente o rastreamento de um subdiretório ou arquivo dentro de um diretório que foi previamente desautorizado. Isso é útil quando você desautoriza um diretório inteiro, mas quer permitir o acesso a algumas de suas partes.

- **Sintaxe:** `Allow: [caminho]`
- **Exemplo:**

  ```http
    User-agent: *
    Disallow: /privado/
    Allow: /privado/publico.html
  ```

  Neste exemplo, o diretório `/privado/` é desautorizado, mas o arquivo `publico.html` dentro dele é permitido.

### `Sitemap`

Esta diretora aponta para o local do seu arquivo Sitemap XML. Embora não seja uma diretriz de controle de rastreamento no sentido de `Disallow` ou `Allow`, ela é crucial para os mecanismos de busca descobrirem todas as páginas do seu site.

- **Sintaxe:** `Sitemap: [URL-completa-do-sitemap]`
- **Exemplo:**
  - `Sitemap: https://www.example.com/sitemap.xml`
  - Você pode incluir vários sitemaps se tiver mais de um.

### `Crawl-delay` (Não suportado pelo Google)

Esta diretriz especifica um atraso em segundos entre as solicitações de rastreamento que o rastreador deve fazer ao seu servidor. O objetivo é evitar sobrecarregar o servidor. O Google não suporta essa diretriz.

- **Sintaxe:** `Crawl-delay: [segundos]`
- **Exemplo:**
  - `Crawl-delay: 10` (significa um atraso de 10 segundos entre cada solicitação)

### Outras considerações e caracteres curinga

- **Curinga `*` (asterisco):** Representa zero ou mais caracteres em um caminho.
  - Exemplo: `Disallow: /*.pdf$` bloqueia todos os arquivos PDF.
- **Curinga `$` (sinal de dólar):** Marca o final de uma URL.
  - Exemplo: `Disallow: /page$` bloqueia apenas `/page`, mas não `/page.html` ou `/page/subpage`.
- **Comentários:** Linhas que começam com `#` são consideradas comentários e são ignoradas pelos rastreadores.
  - Exemplo: `# Isso é um comentário`
- **Case-sensitivity:** Os caminhos no `robots.txt` são sensíveis a maiúsculas e minúsculas. `/Pasta/` é diferente de `/pasta/`.
- **Localização:** O arquivo `robots.txt` deve estar na raiz do seu domínio (ex: `https://www.example.com/robots.txt`).

## Exemplo de um arquivo `robots.txt` completo

```http
# Exemplo de arquivo robots.txt para um site
User-agent: *
# Desautoriza o diretório de administração
Disallow: /admin/
# Desautoriza o diretório de arquivos temporários
Disallow: /tmp/
# Desautoriza páginas de carrinho de compras e checkout
Disallow: /carrinho/
Disallow: /checkout/
# Desautoriza arquivos PDF específicos
Disallow: /docs/secret.pdf
# Permite uma página específica dentro de um diretório desautorizado (se aplicável)
# User-agent: Googlebot
# Disallow: /privado/
# Allow: /privado/public.html

# Define o local do sitemap
Sitemap: https://www.seusite.com.br/sitemap.xml
Sitemap: https://www.seusite.com.br/blog/sitemap.xml
```

## Ferramentas para validar seu `robots.txt`

É fundamental testar seu arquivo `robots.txt` para garantir que ele esteja funcionando conforme o esperado e que você não esteja bloqueando inadvertidamente conteúdo importante.

- **Google Search Console:** O Google oferece uma ferramenta de teste de `robots.txt` dentro do Search Console, que permite verificar se uma URL específica é bloqueada pelo seu arquivo `robots.txt` para o Googlebot.

Ao entender e implementar corretamente o `robots.txt`, você pode gerenciar melhor como os rastreadores interagem com o seu site, otimizando sua visibilidade nos mecanismos de busca e protegendo seu servidor.
