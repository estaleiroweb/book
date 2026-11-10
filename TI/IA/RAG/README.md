# RAG

RAG significa **Retrieval-Augmented Generation**.

O fluxo completo é, aproximadamente:

**Indexação**


`Documentos → Extração → Chunking → Embedding → Vector Database`

**Consulta**

`Pergunta → Embedding → Busca vetorial → Top-K chunks → Prompt → LLM → Resposta`

Um ponto importante:

> O RAG não "ensina" os documentos ao LLM. Ele encontra, em tempo de consulta, os trechos mais relevantes e os entrega ao LLM como contexto.

* * * *

1\. O que é RAG
===============

Ele combina duas capacidades:

1. **Retrieval**
        -   localizar informação relevante;
2. **Generation**
        -   usar um LLM para construir a resposta com base na informação localizada.

Imagine que você tenha milhares de documentos internos sobre Change Management, rede, OCCAS, procedimentos operacionais, APIs etc.

Você pergunta:

> "Quando uma CHANGE deve ser bloqueada por excesso de alterações no mesmo NE?"

O LLM sozinho pode não conhecer essa regra interna.

Com RAG, o sistema primeiro procura nos documentos:

Pergunta
   ↓
Busca
   ↓
Documentação interna relacionada
   ↓
Trechos relevantes
   ↓
LLM
   ↓
Resposta

* * * *

2\. Primeira fase: ingestão/indexação
=====================================

Essa fase normalmente acontece **antes das perguntas**.

Suponha que exista um documento:

regras\_changes.md

com:

Uma CHANGE deve gerar alerta quando houver quatro ou
mais CHANGES associadas à mesma função ou área executora.

A partir da segunda CHANGE com o mesmo NeId na mesma
janela de manutenção, o sistema deverá realizar validação
adicional.

O primeiro passo é carregar o documento.

* * * *

3\. Extração do conteúdo
========================

O RAG precisa transformar diferentes formatos em algo processável.

Por exemplo:

PDF
DOCX
HTML
Markdown
SharePoint
Wiki
Banco SQL
E-mails
APIs

podem acabar convertidos em texto + metadados:

{
  "text": "A partir da segunda CHANGE com o mesmo NeId...",
  "source": "regras\_changes.md",
  "section": "Validações",
  "updated\_at": "2026-10-20"
}

Os **metadados** são extremamente importantes porque posteriormente permitem filtros.

Por exemplo:

produto = "OCCAS"
tipo = "procedimento"
ano >= 2026
status = "vigente"

* * * *

4\. Chunking
============

Normalmente não fazemos embedding de um documento gigantesco inteiro.

Ele é dividido em pequenos pedaços chamados **chunks**.

Por exemplo, um documento:

10.000 tokens

poderia virar:

chunk 1 → tokens 0--499
chunk 2 → tokens 400--899
chunk 3 → tokens 800--1299
...

Observe a sobreposição:

chunk size = 500
overlap = 100

Isso ajuda a evitar que uma informação importante seja cortada exatamente na fronteira entre dois chunks.

### Exemplo

Documento original:

O sistema deve analisar as mudanças existentes.

A partir da segunda CHANGE com o mesmo NeId na mesma
janela de manutenção deverá ser realizada uma validação.

Se a validação falhar, um alerta deverá ser enviado.

Poderíamos formar:

Chunk 17

A partir da segunda CHANGE com o mesmo NeId na mesma
janela de manutenção deverá ser realizada uma validação.

e:

Chunk 18

...mesmo NeId na mesma janela de manutenção deverá ser
realizada uma validação.

Se a validação falhar, um alerta deverá ser enviado.

* * * *

5\. Aqui entra o EMBEDDING
==========================

Essa é uma das partes fundamentais do RAG.

Um **embedding é uma representação numérica de um conteúdo em um espaço vetorial multidimensional**.

Por exemplo:

"A partir da segunda CHANGE com o mesmo NeId..."

entra num modelo de embedding:

EmbeddingModel(text)

e retorna algo conceitualmente parecido com:

\[
  0.021,
 -0.187,
  0.034,
  0.912,
 -0.073,
  ...
\]

Esse vetor pode possuir centenas ou milhares de dimensões.

Portanto:

Texto
 ↓
Embedding model
 ↓
Vetor

Matematicamente:

f(texto)→Rnf(texto) \\rightarrow \\mathbb{R}^{n}

onde `n` é a dimensionalidade definida pelo modelo.

* * * *

6\. O que aqueles números significam?
=====================================

Aqui está uma sutileza importante.

Não devemos interpretar diretamente:

posição 1 = assunto
posição 2 = telecom
posição 3 = severidade

Não funciona dessa maneira.

As dimensões são aprendidas durante o treinamento do modelo e, individualmente, normalmente **não possuem um significado humano claro**.

O importante é a **posição relativa dos vetores**.

Por exemplo:

A = "Erro de autenticação no servidor"
B = "Falha ao efetuar login no sistema"
C = "Temperatura hoje no Rio de Janeiro"

Depois do embedding:

vector(A)
vector(B)
vector(C)

esperamos conceitualmente:

distância(A,B) = pequena
distância(A,C) = grande

Embora A e B utilizem palavras diferentes:

autenticação ≠ login
erro ≠ falha

semanticamente tratam de conceitos muito próximos.

Essa é uma das grandes vantagens do embedding em relação a uma busca simples com `LIKE '%palavra%'`.

* * * *

7\. Pense no embedding como coordenadas
=======================================

Em duas dimensões seria fácil imaginar:

                    Problemas de rede
                          ●
                          |
                          |
         autenticação ●  |  ● login
                          |
                          |
                 ● banco de dados

Um embedding real, entretanto, poderia estar em um espaço como:

R^768
R^1024
R^1536
R^3072
...

Não conseguimos visualizar facilmente, mas matematicamente podemos medir proximidade.

* * * *

8\. Embeddings semanticamente próximos
======================================

Considere:

Texto A:
"Falha na autenticação do usuário"

Texto B:
"Usuário não consegue fazer login"

Texto C:
"A interface Ethernet está com alto volume de tráfego"

Depois do embedding:

A → \[ ... \]
B → \[ ... \]
C → \[ ... \]

É esperado que:

similaridade(A,B) → alta
similaridade(A,C) → baixa

Essa propriedade possibilita a **busca semântica**.

* * * *

9\. Armazenamento dos embeddings
================================

Cada chunk é armazenado junto com seu vetor.

Conceitualmente:

{
  "id": 8372,
  "text": "A partir da segunda CHANGE com o mesmo NeId...",
  "embedding": \[0.021, -0.187, 0.034, "..."\],
  "source": "regras\_changes.md",
  "section": "Validações"
}

Isso pode ir para um banco/vector store como:

- PostgreSQL + pgvector
- Azure AI Search
- Elasticsearch
- OpenSearch
- Qdrant
- Milvus
- Weaviate
- Pinecone
- FAISS, para cenários locais

Para seu tipo de ambiente corporativo, teríamos algo conceitualmente como:

SharePoint / Wiki / PDFs / APIs
             ↓
         extração
             ↓
          chunks
             ↓
       embedding model
             ↓
       índice vetorial

* * * *

10\. Termina a indexação
========================

Depois disso, temos algo semelhante a:

| ID | Chunk | Vetor |
| --: | --- | --- |
| 1 | Regras de CHANGE | `[0.21,...]` |
| --: | --- | --- |
| 2 | Procedimento OCCAS | `[0.78,...]` |
| 3 | Escalonamento CGI | `[0.03,...]` |
| 4 | Validação NeId | `[0.91,...]` |

Até aqui nenhum LLM precisou gerar uma resposta.

Essa distinção é importante:

> **Embedding model e LLM normalmente exercem funções diferentes.**

O embedding model encontra conteúdo semanticamente relacionado.

O LLM interpreta os conteúdos encontrados e gera a resposta.

* * * *

11\. Segunda fase: chega uma pergunta
=====================================

Agora o usuário pergunta:

> "Quando tenho que validar alterações repetidas no mesmo equipamento?"

Talvez essa frase **não apareça em nenhum documento**.

O documento poderia dizer:

> "A partir da segunda CHANGE com o mesmo NeId na mesma JM..."

Pesquisa textual convencional pode ter dificuldade:

equipamento != NeId
alteração   != CHANGE

Mas um embedding pode reconhecer a proximidade semântica.

* * * *

12\. A pergunta também vira embedding
=====================================

A mesma família/modelo de embedding usada na indexação transforma a consulta:

"Quando tenho que validar alterações repetidas
no mesmo equipamento?"

em:

query\_embedding = \[
  0.018,
 -0.201,
  0.041,
  0.876,
 ...
\]

Agora temos:

Vetor da pergunta
        ↓
comparar
        ↓
Vetores dos chunks

* * * *

13\. Similaridade vetorial
==========================

Uma métrica muito utilizada é **cosine similarity**.

Para vetores AA e BB:

similarity(A,B)\=A⋅B∣A∣∣B∣similarity(A,B)= \\frac{A\\cdot B} {|A||B|}

Ela mede aproximadamente o ângulo entre os vetores.

Quanto mais similares semanticamente, maior tende a ser a similaridade.

Exemplo ilustrativo:

Pergunta:
"alterações repetidas no mesmo equipamento"

Chunk A
"segunda CHANGE com mesmo NeId"
similaridade = 0.91

Chunk B
"mudança deve possuir aprovador"
similaridade = 0.72

Chunk C
"procedimento de criação de usuário"
similaridade = 0.31

O sistema pode escolher:

Top-K = 3

retornando os três chunks mais próximos.

* * * *

14\. Nearest Neighbor Search
============================

Em milhões de vetores não seria eficiente calcular:

query × todos os vetores

de maneira ingênua.

Por isso bancos vetoriais utilizam algoritmos/índices de **Approximate Nearest Neighbor (ANN)**.

Um muito conhecido é:

**HNSW**

Hierarchical Navigable Small World.

Outros exemplos incluem:

IVF
IVF-PQ
HNSW
ScaNN

A ideia é localizar vetores aproximadamente mais próximos sem comparar exaustivamente com todos.

O trade-off costuma ser:

velocidade
   ↕
recall da busca

* * * *

15\. Top-K
==========

A busca retorna os `K` chunks mais próximos.

Por exemplo:

Top-K = 5

Resultado:

1\. score 0.93
2\. score 0.89
3\. score 0.85
4\. score 0.81
5\. score 0.78

Isso **ainda não é necessariamente o contexto final enviado ao LLM**.

Em RAG moderno costuma existir mais uma etapa.

* * * *

16\. Hybrid Search
==================

Embedding é excelente, mas não resolve tudo.

Imagine a pergunta:

> "Qual o procedimento do NE SPOPXYZ001?"

Um identificador como:

SPOPXYZ001

pode ser muito mais bem tratado por busca lexical do que por semântica.

Por isso uma arquitetura madura frequentemente usa:

Vector Search
       +
Keyword Search / BM25
       ↓
Hybrid Search

Exemplo:

Busca vetorial
"falha de autenticação"

-

BM25
"SPOPXYZ001"

↓

resultados combinados

No seu contexto de telecom, isso é especialmente relevante porque existem muitos identificadores que carregam pouco significado semântico:

NeId
JM
MSISDN
IMSI
CGI
APN
hostname
IP
Change ID
ticket ID

Eu evitaria uma arquitetura RAG corporativa de telecom baseada **somente em embeddings**.

* * * *

17\. Metadata filtering
=======================

Antes ou depois da busca vetorial podemos restringir:

produto = OCCAS
status = vigente
ano >= 2026

Então uma consulta poderia conceitualmente ser:

WHERE product = 'OCCAS'
  AND status = 'active'

ORDER BY vector\_similarity(
    embedding,
    query\_embedding
)

LIMIT 10

Isso reduz muito conteúdo irrelevante.

* * * *

18\. Reranker
=============

Uma arquitetura RAG robusta pode fazer:

Query
 ↓
Embedding
 ↓
Vector/Hybrid Search
 ↓
20 candidatos
 ↓
Reranker
 ↓
5 melhores

Por quê?

O embedding precisa ser rápido e pesquisar potencialmente milhões de chunks.

Já o **reranker** recebe poucos candidatos e pode fazer uma análise mais cara e precisa da relação:

pergunta ↔ documento

Então:

Retriever → prioriza recall
Reranker  → melhora precisão

Um exemplo:

Busca inicial → Top 50
Reranking     → Top 8
LLM           → recebe 8

Os números não são universais. São parâmetros que precisam ser avaliados para o corpus e a aplicação.

* * * *

19\. Construção do prompt
=========================

Agora aparecem os chunks que realmente serão fornecidos ao LLM.

Algo conceitualmente como:

SYSTEM:

Responda utilizando exclusivamente o contexto fornecido.
Se não houver informação suficiente, informe isso.

CONTEXT:

\[Documento: Regras de Changes\]

A partir da segunda CHANGE com mesmo NeId
na mesma janela de manutenção deverá ser
executada validação adicional.

\[Documento: Política de Change\]

...

USER:

Quando preciso validar alterações repetidas
no mesmo equipamento?

Finalmente entra o LLM.

* * * *

20\. O LLM gera a resposta
==========================

O LLM lê:

pergunta
+
chunks recuperados

e poderia produzir:

> A validação adicional deve ocorrer a partir da segunda CHANGE associada ao mesmo NeId dentro da mesma janela de manutenção.

Veja a diferença fundamental:

O LLM **não precisou memorizar a regra durante treinamento**.

A regra foi recuperada pelo RAG e colocada no contexto.

* * * *

21\. O ciclo inteiro
====================

Portanto existem dois pipelines.

### Pipeline offline/indexação

Documentos
   ↓
Parsing
   ↓
Limpeza/normalização
   ↓
Chunking
   ↓
Embedding
   ↓
Vetores + texto + metadata
   ↓
Índice/Banco vetorial

### Pipeline online/pergunta

Pergunta
   ↓
Embedding da pergunta
   ↓
Busca vetorial
   ↓
Busca lexical/BM25
   ↓
Hybrid Search
   ↓
Filtros de metadata
   ↓
Top-N candidatos
   ↓
Reranking
   ↓
Top-K chunks
   ↓
Montagem do contexto
   ↓
LLM
   ↓
Resposta
   ↓
Citações/fontes

* * * *

22\. Embedding não é tokenização
================================

Essa confusão é comum.

Suponha:

"erro de autenticação"

Primeiro o modelo trabalha internamente com tokens.

Em termos simplificados:

texto
 ↓
tokenizer
 ↓
tokens
 ↓
modelo neural
 ↓
representações internas
 ↓
pooling/projeção
 ↓
embedding final

Portanto:

**tokens**

são unidades que o modelo processa.

Enquanto:

**embedding**

é uma representação vetorial numérica do significado/conteúdo usado para comparação.

* * * *

23\. Embedding também não é resumo
==================================

Se tivermos:

\[0.172, -0.891, 0.023, ...\]

não existe um mecanismo simples como:

decode(vector)

que recupere exatamente:

"A partir da segunda CHANGE..."

O banco normalmente armazena **os dois**:

texto original
+
embedding

O embedding serve para **localizar** o texto.

Depois de localizado, o sistema recupera o texto original para entregá-lo ao LLM.

* * * *

24\. Embedding também não é treinamento
=======================================

Outra distinção muito importante.

Com RAG:

novo documento
↓
chunk
↓
embedding
↓
index

Você não precisa retreinar o LLM.

Isso facilita cenários nos quais a base muda diariamente.

Por exemplo:

Procedimento atualizado às 10:00
↓
reindexado às 10:05
↓
RAG já encontra a informação

É uma vantagem enorme em ambientes corporativos.

* * * *

25\. O tamanho do chunk importa bastante
========================================

Chunk muito pequeno:

"deve ser validado"

Problema:

> validado o quê?

Perde contexto.

Chunk muito grande:

20 páginas

Problema:

- aumenta ruído;
- aumenta tokens enviados ao LLM;
- piora precisão da recuperação;
- aumenta custo;
- conteúdo irrelevante compete com o relevante.

Não existe um tamanho universal. Como ponto de partida para documentação técnica, eu testaria algo na faixa de:

300--800 tokens por chunk

com overlap moderado, mas avaliaria isso empiricamente.

Melhor ainda é fazer **chunking estrutural**:

Documento
 ├── Título
 ├── Seção
 │    ├── Sub-seção
 │    ├── parágrafo
 │    └── tabela
 └── Seção

Em documentação técnica como a sua, preservar:

título
seção
tabela
nome do sistema
identificadores

normalmente vale mais do que cortar cegamente a cada `500 tokens`.

* * * *

26\. Um exemplo completo
========================

Documento:

O OCCAS deverá bloquear chamadas identificadas
como spoofing quando a política antifraude retornar
resultado BLOCK.

### Indexação

Chunk:

"O OCCAS deverá bloquear chamadas identificadas
como spoofing quando a política antifraude retornar
resultado BLOCK."

Embedding:

E1 = embedding(chunk)

Banco:

id     = 981
text   = "O OCCAS deverá..."
vector = E1
system = OCCAS
topic  = anti-spoofing

Agora usuário pergunta:

"Quando o OCCAS impede uma chamada falsa?"

Embedding:

EQ = embedding(pergunta)

Busca:

similarity(EQ, E1)

apesar de:

"impede" != "bloquear"
"chamada falsa" != "spoofing"

o espaço semântico pode aproximar esses conceitos.

Retriever encontra o chunk.

Então:

              "Quando o OCCAS impede..."
                          │
                          ▼
                    EMBEDDING
                          │
                          ▼
                  vetor da pergunta
                          │
                          ▼
                   VECTOR SEARCH
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
       chunk A          chunk B          chunk C
        0.94             0.76             0.42
          │
          ▼
       reranking
          │
          ▼
     chunk relevante
          │
          ▼
        Prompt
          │
     ┌────┴─────┐
     │          │
 pergunta    contexto
     │          │
     └────┬─────┘
          ▼
         LLM
          │
          ▼
       resposta

* * * *

27\. O conceito mais importante
===============================

Se precisar guardar uma única ideia sobre RAG, guarde esta:

> **O embedding não responde à pergunta. Ele ajuda a descobrir quais informações provavelmente têm relação semântica com a pergunta.**

Depois:

> **o LLM recebe essas informações e produz a resposta.**

Ou, de uma forma bem prática:

Embedding
   ↓
"ONDE está a informação?"

LLM
   ↓
"O QUE essa informação significa
e como respondo ao usuário?"

Para seus cenários de **Copilot + MCP + documentação técnica + eVoice/Gestão de Changes**, eu ainda acrescentaria uma terceira camada: **ferramentas/APIs**. RAG é ideal para conhecimento documental ("qual é a regra?"), enquanto MCP/API é mais adequado para estado operacional atual ("quantas CHANGES existem agora para este NeId?"). Uma arquitetura sólida pode combinar os dois:

`Pergunta → intenção → RAG documental + APIs/MCP → evidências → LLM → resposta`.
