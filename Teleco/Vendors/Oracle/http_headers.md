# HTTP — Headers com dissecação interna

## Content-Type

```text
Content-Type: text/html; charset=UTF-8
```

**Campos:**

- media-type:
  - type: `text`
  - subtype: `html`
- parameters:
  - charset: `UTF-8`

## Accept

```text
Accept: text/html;q=0.9, application/json;q=0.8
```

**Campos:**

- media-ranges (lista):
  - type/subtype
  - q (quality factor)

## Authorization

```text
Authorization: Bearer abc.def.ghi
```

**Campos:**

- scheme: `Bearer`
- token

OU (Basic):

```text
Authorization: Basic base64
```

## Cookie

```text
Cookie: session=abc123; theme=dark
```

**Campos:**

- cookie-list:
  - name
  - value

## Set-Cookie

```text
Set-Cookie: session=abc123; Path=/; HttpOnly; Secure
```

**Campos:**

- name
- value
- attributes:
  - Path
  - Domain
  - Expires
  - Max-Age
  - Secure (flag)
  - HttpOnly (flag)
  - SameSite

## Host

```text
Host: www.exemplo.com:8080
```

**Campos:**

- host: `www.exemplo.com`
- port: `8080`

## User-Agent

```text
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
```

**Campos (heurísticos):**

- product: `Mozilla/5.0`
- system-info:
  - OS: Windows NT 10.0
  - arch: x64

## Cache-Control

```text
Cache-Control: max-age=3600, no-cache
```

**Campos:**

- directives:
  - max-age: `3600`
  - no-cache (flag)

## Range

```text
Range: bytes=0-499
```

**Campos:**

- unit: `bytes`
- start: `0`
- end: `499`

## Location

```text
Location: https://site.com/path?x=1
```

**Campos:**

- scheme: https
- host
- path
- query
