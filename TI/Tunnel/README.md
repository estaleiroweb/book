# Túneis de Rede (Network Tunneling)

- [SSH](SSH.md)

## Conceito

**Tunelamento de rede (Network Tunneling)*- é uma técnica que permite encapsular um tipo de tráfego de rede dentro de outro protocolo, criando um **“canal lógico”*- entre dois pontos. Esse canal possibilita que dados trafeguem de forma **segura**, **transparente*- ou **controlada**, mesmo através de redes não confiáveis ou restritas.

Em termos simples, um túnel funciona como um **“tubo virtual”**:
o tráfego original entra em uma extremidade, é encapsulado, transportado pela rede intermediária e depois desencapsulado no destino, como se os dois pontos estivessem diretamente conectados.

Os túneis são amplamente utilizados para:

- Segurança e criptografia de dados
- Acesso remoto
- Bypass de restrições de rede
- Integração entre redes privadas
- Exposição controlada de serviços internos
- Observabilidade, testes e debugging

## Funcionamento Geral do Tunelamento

O processo de tunelamento envolve, em geral, quatro etapas:

1. **Encapsulamento*- do tráfego original
2. **Transporte*- através da rede intermediária
3. **Desencapsulamento*- no destino
4. **Entrega*- ao serviço final

## Diagrama Conceitual (Mermaid)

```mermaid
flowchart LR
   A[Cliente / Aplicação]
   B[Server]
   C[Destino]

   A l1@-->|SSH Tunnel Connect:port| B
   B l2@-->|Opened Firewall| C
   A l3@--x|Closed Firewall| C
   A l4@-.->|By Tunnel+Proxy| C

   classDef dash stroke-dasharray: 9,5;
   class l1,l2 dash
   classDef opend stroke: green, stroke-dashoffset: 900,animation: dash 25s linear infinite;
   class l1,l2,l4 opend
   classDef closed stroke:red;
   class l3 closed

```

## Tipos de Túneis e Suas Aplicações

### 1. Túnel SSH (SSH Tunneling)

**Descrição:**
Utiliza o protocolo SSH para encapsular e criptografar tráfego TCP.

**Tipos:**

- Local Forward (`-L`)
- Remote Forward (`-R`)
- Dynamic Forward / SOCKS (`-D`)

**Aplicações:**

- Acesso seguro a serviços internos
- Proxy SOCKS5
- Administração remota
- Bypass de firewall
- Debug e troubleshooting

**Exemplo comum:**
Encaminhar uma porta local para um banco de dados interno.

### 2. Túnel SOCKS (SOCKS4 / SOCKS5)

**Descrição:**
Proxy genérico em nível de aplicação que encaminha conexões TCP (e UDP no SOCKS5).

**Aplicações:**

- Navegação segura
- Redirecionamento de tráfego de aplicações
- Testes de saída por outro IP
- Integração com browsers, curl, git, proxychains

**Observação:**
SOCKS não cifra por si só — normalmente é combinado com SSH ou VPN.

### 3. VPN (Virtual Private Network)

**Descrição:**
Cria uma rede virtual criptografada entre dispositivos ou redes inteiras.

**Protocolos comuns:**

- OpenVPN
- WireGuard
- IPsec
- L2TP
- PPTP (legado / inseguro)

**Aplicações:**

- Interligação de filiais
- Acesso remoto corporativo
- Segurança em redes públicas
- Extensão de rede privada

### 4. Túnel IPsec

**Descrição:**
Tunelamento em nível de rede (camada 3), focado em segurança e integridade.

**Modos:**

- Transport Mode
- Tunnel Mode

**Aplicações:**

- Site-to-site VPN
- Conexões corporativas de alta segurança
- Infraestrutura crítica

### 5. Túnel GRE (Generic Routing Encapsulation)

**Descrição:**
Encapsula diversos protocolos dentro de IP, sem criptografia nativa.

**Aplicações:**

- Interligação de redes
- Transporte de protocolos não-IP
- Ambientes controlados

**Observação:**
Normalmente combinado com IPsec para segurança.

### 6. Túnel HTTP / HTTPS (HTTP CONNECT)

**Descrição:**
Encapsula conexões TCP dentro de HTTP/HTTPS.

**Aplicações:**

- Bypass de proxies restritivos
- Ambientes corporativos bloqueados
- Ferramentas como `corkscrew`, `proxytunnel`

### 7. Reverse Tunnel

**Descrição:**
O túnel é iniciado de dentro da rede privada para fora, permitindo acesso reverso.

**Aplicações:**

- Expor serviços atrás de NAT
- Acesso remoto sem IP público
- CI/CD, IoT, suporte técnico

**Exemplo:**
SSH Remote Forward (`ssh -R`).

### 8. Túnel UDP

**Descrição:**
Encapsula tráfego UDP dentro de TCP ou outro protocolo.

**Aplicações:**

- Jogos
- VoIP
- Streaming
- Ambientes com bloqueio de UDP

### 9. Túnel de Porta (Port Forwarding)

**Descrição:**
Redirecionamento direto de portas entre origem e destino.

**Aplicações:**

- Acesso a bancos de dados
- APIs internas
- Serviços legados

## Considerações Finais

O tunelamento é um **componente fundamental da engenharia de redes modernas**, permitindo flexibilidade, segurança e controle do tráfego. A escolha do tipo de túnel ideal depende de fatores como:

- Nível de segurança necessário
- Tipo de tráfego (TCP/UDP)
- Performance
- Complexidade operacional
- Ambiente (corporativo, cloud, on-premises)

## Tabela Comparativa Geral

| Tipo de Túnel      | Camada OSI | Criptografia | TCP      | UDP        | Escopo    | Casos de Uso Típicos                        |
| ------------------ | ---------- | ------------ | -------- | ---------- | --------- | ------------------------------------------- |
| **SSH Tunnel**     | L7         | ✅ Sim        | ✅        | ❌          | Aplicação | Acesso seguro, proxy SOCKS, port forwarding |
| **SOCKS4/5**       | L5/L7      | ❌ Não        | ✅        | ⚠️ (SOCKS5) | Aplicação | Proxy genérico, redirecionamento            |
| **OpenVPN**        | L3/L4      | ✅ Sim        | ✅        | ✅          | Rede      | VPN site-to-site, acesso remoto             |
| **WireGuard**      | L3         | ✅ Sim        | ❌        | ✅          | Rede      | VPN moderna, alto desempenho                |
| **IPsec**          | L3         | ✅ Sim        | ❌        | ❌          | Rede      | VPN corporativa, site-to-site               |
| **GRE**            | L3         | ❌ Não        | ❌        | ❌          | Rede      | Encapsular protocolos, roteamento           |
| **GRE + IPsec**    | L3         | ✅ Sim        | ❌        | ❌          | Rede      | Túneis corporativos seguros                 |
| **HTTP CONNECT**   | L7         | ⚠️ HTTPS      | ✅        | ❌          | Aplicação | Bypass de proxy/firewall                    |
| **Reverse Tunnel** | Variável   | Variável     | Variável | Variável   | Aplicação | Expor serviços internos                     |
| **Port Forward**   | L4/L7      | Variável     | ✅        | ❌          | Serviço   | Acesso pontual a serviços                   |

## Quando Usar Cada Um (Resumo Rápido)

| Cenário                              | Melhor Opção   |
| ------------------------------------ | -------------- |
| Acesso rápido e pontual              | SSH Tunnel     |
| Proxy para várias apps               | SOCKS5 via SSH |
| VPN moderna e rápida                 | WireGuard      |
| VPN corporativa tradicional          | IPsec          |
| Encapsular redes sem segurança       | GRE            |
| Firewall bloqueando tudo exceto HTTP | HTTP CONNECT   |
| Servidor atrás de NAT                | Reverse Tunnel |

## Diagramas por Tipo de Túnel (Mermaid)

## 🔹 SSH Tunnel – Local Port Forward (`ssh -L`)

📌 **Uso:** acessar serviço interno remotamente

```mermaid
flowchart LR
    A[<h3>A</h3> Cliente RDP]
    F[<h3>Firewall</h3>]
    B[<h3>B</h3> SSH Server<br><code>ssh -L 9090:C:3389</code>]
    C[<h3>C</h3> Host RDP:3389]

    A l1@x--x|localhost:9090| F
    F l2@x-.-x|RDP:3389| B
    A l3@<-->|tunel SSH:22| B
    B l4@<-.->|RDP:3389| C
    A l5@<-.->|RDP:9090| C

   classDef dash stroke-dasharray: 9,5;
   classDef opend stroke: green, stroke-dashoffset: 900,animation: dash 25s linear infinite;
   classDef closed stroke:red;
   class l3 dash
   class l3,l4,l5 opend
   class l1,l2 closed
```

✔ Seguro
✔ Ideal para DB, APIs internas
❌ Não escala para muitos serviços

## 🔹 SSH Tunnel – SOCKS5 (`ssh -D`)

📌 **Uso:** proxy dinâmico para múltiplos destinos

```mermaid
flowchart LR
    A["<h3>A</h3> Cliente/Aplicação SSH<br><code>ssh -D 1080 user@B<br>export http_proxy=socks5h://127.0.0.1:1080<br>curl https://C<br> mysql -h C</code>"]
    B[<h3>B</h3> SSH Server]
    F[<h3>Firewall</h3>]
    C[<h3>C</h3> Host]

    A l1@x--x|localhost:9090| F
    F l2@x-.-x|RDP:3389| C
    A l3@<-->|tunel SSH:22| B
    B l4@<-.-> C
    A l5@<-.->|tunnel| C

   classDef dash stroke-dasharray: 9,5;
   classDef opend stroke: green, stroke-dashoffset: 900,animation: dash 25s linear infinite;
   classDef closed stroke:red;
   class l3 dash
   class l3,l4,l5 opend
   class l1,l2 closed
```

✔ Muito flexível
✔ DNS remoto (`socks5h`)
⚠️ Depende do app suportar SOCKS

## 🔹 SOCKS Proxy (Sem Criptografia)

📌 **Uso:** redirecionamento simples

```mermaid
flowchart LR
    A[Aplicação] -->|SOCKS| B[Proxy SOCKS]
    B -->|Tráfego puro| C[Destino]
```

❌ Sem criptografia
✔ Leve
⚠️ Use apenas em redes confiáveis

## 🔹 VPN (OpenVPN / WireGuard)

📌 **Uso:** interligar redes inteiras

```mermaid
flowchart LR
    A[Rede Cliente] -->|Tunnel VPN| B[Internet]
    B -->|Tunnel VPN| C[Rede Remota]
```

✔ Transparente para apps
✔ Alto nível de segurança
✔ Ideal para ambientes corporativos


## 🔹 IPsec – Site to Site

📌 **Uso:** interligar datacenters/filiais

```mermaid
flowchart LR
    A[Rede A] -->|IPsec Tunnel| B[Internet]
    B -->|IPsec Tunnel| C[Rede B]
```

✔ Padrão corporativo
✔ Alto desempenho
⚠️ Configuração mais complexa

## 🔹 GRE Tunnel

📌 **Uso:** encapsular protocolos e rotas

```mermaid
flowchart LR
    A[Roteador A] -->|GRE| B[Internet]
    B -->|GRE| C[Roteador B]
```

❌ Sem criptografia
✔ Muito flexível
⚠️ Normalmente usado com IPsec

## 🔹 GRE + IPsec

📌 **Uso:** flexibilidade + segurança

```mermaid
flowchart LR
    A[Rede A] -->|GRE| B[IPsec]
    B -->|Internet| C[IPsec]
    C -->|GRE| D[Rede B]
```

✔ Seguro
✔ Roteamento avançado
✔ Ambientes complexos

## 🔹 HTTP CONNECT Tunnel

📌 **Uso:** bypass de proxy/firewall

```mermaid
flowchart LR
    A[Cliente] -->|CONNECT| B[Proxy HTTP]
    B -->|TCP| C[Destino]
```

✔ Funciona onde só HTTP passa
❌ Dependente do proxy
⚠️ Latência maior

## 🔹 Reverse Tunnel (SSH -R)

📌 **Uso:** expor serviço atrás de NAT

```mermaid
flowchart LR
    A[Servidor Público] -->|Porta Exposta| B[SSH Tunnel]
    B -->|Conexão Reversa| C[Servidor Interno]
```

✔ Ideal para IoT, suporte, CI/CD
✔ Sem IP público
✔ Muito usado em cloud

## 🔹 Port Forwarding Simples

📌 **Uso:** acesso direto a um serviço

```mermaid
flowchart LR
    A[Cliente] -->|Porta X| B[Túnel]
    B -->|Porta Y| C[Serviço]
```

✔ Simples
✔ Direto
❌ Pouca flexibilidade

## Conclusão Técnica

- **SSH** → melhor custo-benefício para acesso rápido
- **SOCKS5** → flexibilidade para apps
- **VPN** → solução definitiva e transparente
- **IPsec/GRE** → ambientes corporativos e roteamento avançado
- **Reverse Tunnel** → NAT, cloud, acesso externo controlado

Outros:

- adaptar isso para **PDF / Markdown / Wiki**
- criar **checklist de decisão**
- montar **exemplos de configuração reais**
- integrar com **Docker, Kubernetes, HAProxy ou systemd**
