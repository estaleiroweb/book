# Table Headers

- **Wireshark não usa “listas fixas”**:
  - ABNF das RFCs
  - dissectors por protocolo
  - heurística para headers desconhecidos
- **Headers podem se repetir**:
   ```text
   Via: ...
   Via: ...
   ```
- **Headers podem ter**:
  - lista (`,`)
  - parâmetros (`;`)
  - key=value
  - flags (sem valor)
- **Headers customizados**:
  - HTTP → `X-*`
  - SIP → `P-*`, `X-*`
- **Limitações**:
  - SIP → tem dezenas de RFCs de extensão (IMS, VoLTE, presence, security…)
  - HTTP → evoluiu (HTTP/1.1 → HTTP/2 → HTTP/3) + headers modernos + experimentais

## SIP — Tabela estilo Wireshark (core + extensões relevantes)

Base: RFC 3261 + RFCs principais (3311, 3327, 4028, 3515, 3891, etc.)

| Layer                      | Header                        | Campos                                                                    |
| -------------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| Endereçamento              | To                            | display-name, uri(scheme, user, host, port), uri-params, tag              |
| Endereçamento              | From                          | display-name, uri(scheme, user, host, port), uri-params, tag              |
| Endereçamento              | Contact                       | uri(user, host, port), uri-params, expires, q                             |
| Endereçamento              | Reply-To                      | uri, params                                                               |
| Roteamento                 | Via                           | protocol-name, version, transport, host, port, branch, rport, received    |
| Roteamento                 | Route                         | uri(host), lr, params                                                     |
| Roteamento                 | Record-Route                  | uri(host), lr                                                             |
| Roteamento                 | Path                          | uri, params                                                               |
| Roteamento                 | Service-Route                 | uri                                                                       |
| Sessão                     | Call-ID                       | local-id, host                                                            |
| Sessão                     | CSeq                          | sequence-number, method                                                   |
| Sessão                     | Max-Forwards                  | number                                                                    |
| Sessão                     | Session-Expires               | delta-seconds, refresher                                                  |
| Sessão                     | Min-SE                        | delta-seconds                                                             |
| Capacidade                 | Allow                         | method-list                                                               |
| Capacidade                 | Supported                     | option-tags                                                               |
| Capacidade                 | Require                       | option-tags                                                               |
| Capacidade                 | Unsupported                   | option-tags                                                               |
| Evento/Subscrição          | Event                         | event-type, id                                                            |
| Evento/Subscrição          | Allow-Events                  | event-list                                                                |
| Evento/Subscrição          | Subscription-State            | state, reason, expires                                                    |
| Autenticação               | Authorization                 | scheme, username, realm, nonce, uri, response, algorithm, qop, nc, cnonce |
| Autenticação               | Proxy-Authorization           | mesmos campos                                                             |
| Autenticação               | WWW-Authenticate              | scheme, realm, nonce, algorithm                                           |
| Autenticação               | Proxy-Authenticate            | idem                                                                      |
| Identidade (IMS/operadora) | P-Asserted-Identity           | uri                                                                       |
| Identidade (IMS/operadora) | P-Preferred-Identity          | uri                                                                       |
| Identidade (IMS/operadora) | P-Called-Party-ID             | uri                                                                       |
| Identidade (IMS/operadora) | P-Charging-Vector             | icid-value, orig-ioi, term-ioi                                            |
| Identidade (IMS/operadora) | P-Charging-Function-Addresses | ccf, ecf                                                                  |
| Controle de Chamada        | Refer-To                      | uri                                                                       |
| Controle de Chamada        | Referred-By                   | uri                                                                       |
| Controle de Chamada        | Replaces                      | call-id, to-tag, from-tag                                                 |
| Controle de Chamada        | Join                          | call-id, tags                                                             |
| Conteúdo                   | Content-Type                  | type, subtype, charset                                                    |
| Conteúdo                   | Content-Length                | length                                                                    |
| Conteúdo                   | Content-Encoding              | encoding                                                                  |
| Conteúdo                   | Content-Disposition           | type, handling                                                            |
| diversos                   | User-Agent                    | product, version                                                          |
| diversos                   | Server                        | product                                                                   |
| diversos                   | Subject                       | text                                                                      |
| diversos                   | Organization                  | text                                                                      |
| diversos                   | Priority                      | level                                                                     |
| diversos                   | Expires                       | delta-seconds                                                             |
| diversos                   | Date                          | datetime                                                                  |
| diversos                   | Warning                       | code, agent, text                                                         |

## HTTP — Tabela estilo Wireshark

RFC 9110 + comuns modernos

| Layer                   | Header                           | Campos                                                         |
| ----------------------- | -------------------------------- | -------------------------------------------------------------- |
| General                 | Cache-Control                    | directives (max-age, no-cache, no-store, etc.)                 |
| General                 | Connection                       | tokens                                                         |
| General                 | Date                             | http-date                                                      |
| General                 | Pragma                           | directives                                                     |
| General                 | Trailer                          | field-names                                                    |
| General                 | Transfer-Encoding                | coding-list                                                    |
| General                 | Upgrade                          | protocol-list                                                  |
| General                 | Via                              | protocol, host                                                 |
| Request                 | Host                             | host, port                                                     |
| Request                 | User-Agent                       | product, system                                                |
| Request                 | Accept                           | media-range(type, subtype, q)                                  |
| Request                 | Accept-Encoding                  | encoding, q                                                    |
| Request                 | Accept-Language                  | language, q                                                    |
| Request                 | Authorization                    | scheme, credentials                                            |
| Request                 | Cookie                           | name=value list                                                |
| Request                 | Expect                           | expectation                                                    |
| Request                 | From                             | email                                                          |
| Request                 | If-Match                         | etag list                                                      |
| Request                 | If-Modified-Since                | date                                                           |
| Request                 | If-None-Match                    | etag                                                           |
| Request                 | If-Range                         | etag/date                                                      |
| Request                 | If-Unmodified-Since              | date                                                           |
| Request                 | Max-Forwards                     | number                                                         |
| Request                 | Origin                           | scheme, host, port                                             |
| Request                 | Range                            | unit, start, end                                               |
| Request                 | Referer                          | URL                                                            |
| Request                 | TE                               | encoding                                                       |
| Request                 | Upgrade-Insecure-Requests        | flag                                                           |
| Response                | Server                           | product                                                        |
| Response                | Set-Cookie                       | name, value, expires, domain, path, secure, httponly, samesite |
| Response                | Location                         | URI                                                            |
| Response                | Retry-After                      | date/delta                                                     |
| Response                | Vary                             | header-list                                                    |
| Response                | WWW-Authenticate                 | scheme, realm, params                                          |
| Representation          | Content-Type                     | type, subtype, charset                                         |
| Representation          | Content-Length                   | number                                                         |
| Representation          | Content-Encoding                 | encoding                                                       |
| Representation          | Content-Language                 | language                                                       |
| Representation          | Content-Location                 | URI                                                            |
| Representation          | Content-Range                    | unit, start, end, size                                         |
| Segurança/CORS/Modernos | Authorization: Bearer            | token                                                          |
| Segurança/CORS/Modernos | Access-Control-Allow-Origin      | origin                                                         |
| Segurança/CORS/Modernos | Access-Control-Allow-Methods     | method list                                                    |
| Segurança/CORS/Modernos | Access-Control-Allow-Headers     | header list                                                    |
| Segurança/CORS/Modernos | Access-Control-Allow-Credentials | boolean                                                        |
| Segurança/CORS/Modernos | Access-Control-Max-Age           | seconds                                                        |
| Segurança/CORS/Modernos | Origin                           | scheme, host                                                   |
| Segurança/CORS/Modernos | Sec-Fetch-Site                   | value                                                          |
| Segurança/CORS/Modernos | Sec-Fetch-Mode                   | value                                                          |
| Segurança/CORS/Modernos | Sec-Fetch-Dest                   | value                                                          |
| Web/Upgrade             | Upgrade                          | websocket                                                      |
| Web/Upgrade             | Sec-WebSocket-Key                | base64                                                         |
| Web/Upgrade             | Sec-WebSocket-Version            | number                                                         |
| Web/Upgrade             | Sec-WebSocket-Accept             | base64                                                         |
