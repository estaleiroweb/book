# SIP — Headers com dissecação interna

## To / From

```text
To: <sip:user@domain.com:5060;transport=udp>;tag=1234
```

**Campos:**

- display-name (opcional)
- uri:
  - scheme: `sip`
  - uri-user: `user`
  - uri-host: `domain.com`
  - uri-port: `5060`
  - uri-parameters:
    - transport: `udp`
- header-parameters:
  - tag: `1234`

## Via

```text
Via: SIP/2.0/UDP 192.168.1.10:5060;branch=z9hG4bK123;rport
```

**Campos:**

- protocol-name: `SIP`
- protocol-version: `2.0`
- transport: `UDP`
- sent-by:
  - host: `192.168.1.10`
  - port: `5060`
- parameters:
  - branch: `z9hG4bK123`
  - rport: (flag ou valor)
  - received (opcional)

## Contact

```text
Contact: <sip:user@host:5060>;expires=3600;q=0.7
```

**Campos:**

- uri:
  - user
  - host
  - port
- parameters:
  - expires: `3600`
  - q: `0.7`

## CSeq

```text
CSeq: 123 INVITE
```

**Campos:**

- sequence-number: `123`
- method: `INVITE`

## Call-ID

```text
Call-ID: abc123@host
```

**Campos:**

- call-id: `abc123`
- host: `host`

## Route / Record-Route

```text
Route: <sip:proxy.domain.com;lr>
```

**Campos:**

- uri:
  - host
- uri-parameters:
  - lr (loose routing flag)

## Authorization (Digest)

```text
Authorization: Digest username="user", realm="domain", nonce="abc", uri="sip:domain", response="xyz"
```

**Campos:**

- scheme: `Digest`
- username
- realm
- nonce
- uri
- response
- algorithm (opcional)
- cnonce (opcional)
- qop (opcional)
- nc (opcional)

## Content-Type

```text
Content-Type: application/sdp
```

**Campos:**

- type: `application`
- subtype: `sdp`
- parameters:
  - charset (opcional)

## Allow

```text
Allow: INVITE, ACK, BYE, CANCEL
```

**Campos:**

- methods (lista):
  - INVITE
  - ACK
  - BYE
  - CANCEL

## Supported / Require

```text
Supported: timer, 100rel
```

**Campos:**

- option-tags (lista)
