# Mensagens de Erro MCP

Este é um exemplo de resposta de erro quando a versão do JSON-RPC não é suportada pelo servidor.

Para um MCP Server, você normalmente terá 3 grupos de erros:

- JSON-RPC 2.0 padrão
- MCP (erros específicos de negócio/protocolo)
- Erros próprios da sua API TABLE

Para um MCP Server, você normalmente terá 3 grupos de erros:

JSON-RPC 2.0 padrão
MCP (erros específicos de negócio/protocolo)
Erros próprios da sua API TABLE

## 1. Erros padrão JSON-RPC 2.0

| error.code | error.message    | Quando usar                                            |
| ---------- | ---------------- | ------------------------------------------------------ |
| -32700     | Parse error      | JSON inválido, malformado ou impossível de interpretar |
| -32600     | Invalid Request  | Estrutura JSON-RPC inválida                            |
| -32601     | Method not found | Método MCP inexistente                                 |
| -32602     | Invalid params   | Parâmetros ausentes ou inválidos                       |
| -32603     | Internal error   | Exceção inesperada no servidor                         |

Exemplos
Parse error

Request:

```json
{ "jsonrpc":"2.0", "method":
```

Response:

```json
{
   "jsonrpc":"2.0",
   "id":null,
   "error":{
      "code":-32700,
      "message":"Parse error"
   }
}
```

Invalid Request

Request:

```json
{"id":1}
```

Response:

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "error":{
      "code":-32600,
      "message":"Invalid Request"
   }
}
```

Method not found

Request:

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "method":"inventei"
}
```

Response:

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "error":{
      "code":-32601,
      "message":"Method not found"
   }
}
```

Invalid params

Request:

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "method":"tools/call",
   "params":{}
}
```

Response:

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "error":{
      "code":-32602,
      "message":"Invalid params"
   }
}
```

Internal error

Exceção PHP:

throw new Exception("Banco indisponível");

Response:

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "error":{
      "code":-32603,
      "message":"Internal error"
   }
}
```

## 2. Faixa reservada pelo JSON-RPC

A especificação reserva: -32768 até -32000

> Não é recomendável criar códigos próprios nessa faixa.

## 3. Erros de servidor (comumente utilizados)

O JSON-RPC deixa uma faixa para erros do servidor:

-32099 até -32000

Os nomes não são obrigatórios.

Implementações costumam usar:

error.code error.message Exemplo-32000 Server error Erro genérico
-32001 Server busy Servidor sobrecarregado
-32002 Service unavailable API fora do ar
-32003 Request timeout Timeout
-32004 Rate limit exceeded Limite excedido
-32005 Authentication failed Falha de autenticação

## 4. Erros MCP típicos

MCP não impõe uma tabela oficial única para todas as ferramentas.

Normalmente aparece algo como:

error.code error.message Aplicação-32601 Tool not found tools/call
-32602 Invalid tool arguments tools/call
-32602 Resource not found resources/read
-32602 Prompt not found prompts/get
-32005 Sampling not supported sampling
-32005 Elicitation not supported elicitation
-32005 Capability not supported initialize

## 5. Sugestão para seu TABLE-MCP

Eu criaria uma faixa própria:

1000 - 1999

para erros funcionais.

Inventário
code message1001 Device not found
1002 Inventory unavailable
1003 Device ambiguity
Alarmes
code message1101 Alarm not found
1102 Alarm source unavailable
1103 Alarm query timeout
KPI
code message1201 KPI not found
1202 KPI source unavailable
ITSM
code message1301 Change not found
1302 Incident not found
1303 Ticket creation failed
Segurança
code message1401 Authentication required
1402 Invalid credentials
1403 Permission denied
1404 User not authorized
Modelo que recomendo

Sempre retornar:
```json
{
"jsonrpc":"2.0",
"id":15,
"error":{
   "code":1403,
   "message":"Permission denied",
   "data":{
      "user":"helbert",
      "tool":"network.run_command",
      "requiredRole":"CORE_ADMIN"
   }
}
}
```

Onde:

Campo Funçãocode Código tratável pela aplicação
message Mensagem curta padronizada
data Detalhes técnicos para diagnóstico
id Requisição que gerou o erro

Para um MCP corporativo como o TABLE/eVoice, costuma ser uma boa prática manter:

-32700 até -32000 -> JSON-RPC / infraestrutura

1000 até 9999 -> regras de negócio da API

porque facilita bastante o tratamento no Copilot, Claude Desktop, VSCode Agent e em logs de observabilidade.
