# Métodos


## GET

GET é usado para solicitar dados de um recurso.

Observe que a string de consulta (pares de nome/valor) é enviada na URL de uma solicitação GET:

    /test/demo_form.php?name1=value1&name2=value2

- Obs:
  1. Podem ser armazenadas em cache
  2. Permanecem no histórico do navegador
  3. Podem ser marcadas como favoritas
  4. Nunca devem ser usadas ao lidar com dados confidenciais
  5. Têm restrições de comprimento
  6. São usadas apenas para solicitar dados (não modificar)
  7. Pode ter corpo do request

## POST

O POST é usado para enviar dados a um servidor para criar/atualizar um recurso.

Os dados enviados ao servidor com POST são armazenados no corpo da solicitação do Solicitação HTTP:

    POST /test/demo_form.php HTTP/1.1
    Host: w3schools.com

    name1=value1&name2=value2

- Obs:
  1. Nunca são armazenadas em cache
  2. Não permanecem no histórico do navegador
  3. Não podem ser marcadas como favoritas
  4. Não têm restrições quanto ao comprimento dos dados
  5. Tem corpo do request

## PUT

PUT é usado para enviar dados a um servidor para criar/atualizar um recurso.

A diferença entre POST e PUT é que as solicitações PUT são idempotentes. 
Isso é, chamar a mesma solicitação PUT várias vezes sempre produzirá o mesmo resultado. 
Por outro lado, chamar uma solicitação POST repetidamente tem efeitos colaterais de criando o mesmo recurso várias vezes.

- Obs:
  1. Idem POST

## HEAD

HEAD é quase idêntico a GET, mas sem o corpo da resposta.

Em outras palavras, se GET /users retornar uma lista de usuários, HEAD /users irá Faça a mesma solicitação, mas não retornará a lista de usuários.

Uma solicitação HEAD é útil para verificar o que uma solicitação GET retornará antes realmente fazendo uma solicitação GET - uma solicitação HEAD pode ler o Content-Length para verificar o tamanho do arquivo, sem realmente baixar o arquivo.

- Obs:
  1. Idem GET
  2. Não tem corpo da resposta


## DELETE

O método DELETE exclui o recurso especificado.

- Obs:
  1. Idem POST

## PATCH

O método PATCH é usado para aplicar modificações parciais a um recurso.
Parecido com PUT. 

- Obs:
  1. Idem PUT

## OPTIONS

O método OPTIONS descreve as opções de comunicação para o destino recurso.

## CONNECT

O método CONNECT é usado para iniciar uma comunicação bidirecional (um túnel) com o recurso solicitado.

## TRACE

O método TRACE é usado para executar um teste de loop-back de mensagem que testa o caminho para o recurso de destino (útil para fins de depuração).
