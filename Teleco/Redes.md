# Redes

## Topologias de rede

## TCP vs UDP

| Tema Diferenças                      | TCP | UDP |
| ------------------------------------ | --- | --- |
| Handshake (Conexão)                  | Sim | Não |
| Full Duplex                          | Sim | Sim |
| Integridade (Checksum)               | Sim | Sim |
| Entrega Ordenada (Sequence)          | Sim | Não |
| Controle de Fluxo (Garantia Entrega) | Sim | Não |
| Confiabilidade                       | Sim | Não |
| Controle de congestionamento         | Sim | Não |
| Transminssão de 1->N                 | Não | Sim |

- Resumo:
  - TCP=Orientado a Conexão/Garantia de Entrega/Confiabilidade
  - UDP=Velocidade de Entrega/Stream
- Handshake: Three Level Handshake - Cria conexão A->B antes de Data

~~~txt
 (SYN)     A -> B
 (SYN+ACK) A <- B
 (ACK)     A -> B
 DTD       A -> B
 DTD       A <- B
 (FIN)     A -> B  ou A <- B
 (ACK)     A <- B  ou A -> B
 (FIN)     A <- B  ou A -> B
~~~

- Portas:
  - Renge:   0~65535
  - Tipos:   Origem  Destino
  - Criação: <~1024  >
  - Portas Destino Default:
    - 22   SSH
    - 53   DNS
    - 80   HTTP
    - 443  HTTPS

## NAT - Network Adress Translation

## DNAT - Destination Network Adress Translation (Port Forward)

## DHCP - Dynamic Host Configuration Protocol

## WiFi - Wireles Fidelity

- PCF - Point Coordination Function
  - AP(Access Point) Controla a vez de quem vai fazer IO
- DCF - Distributed Coordination Function
  - Infraestrutura/Estação Base: AP(Access Point) Transmissão distribuida sem fila
  - Ad Hoc: Client to/bridge Client
- Mensagens de serviço:
  - Estação: Autenticação,Desautenticação,Privacidade,Entrega de dados
  - Distribuição: Associação, Desassociação, Reassociação, Distribuição, Integração

## DNS - Domain Name System

- Hierarquia:
  - root domain(13): com[.br/pt]
    - CGI (br):
      - hosts
- Classes:
  - RESOLVER/CACHE    Name->IP  Resolve nomes para uma grande rede com TTL
  - DNS autoritativo  Última hierarquia de resolução de DNS
  - DNS Reverso:      IP->Name  
- Tipos:
  - A: Hostname->IPv4
    - Os registros A são os mais comuns e vinculam os domínios e subdomínios dos sites a protocolos de IP para facilitar o acesso a sites.
  - AAAA: Hostname->IPv6
    - Esse tipo de DNS executa as mesmas funções do tipo A, porém realizando um mapeando para os chamados endereços IPv6.
  - MX: Email(Mail Exchange)
    - Esse servidor é específico para e-mails. É ele que garante que uma mensagem seja entregue quando alguém preenche um formulário de contato em um site, por exemplo. Também é o MX que possibilita a criação de uma lista de prioridades para que haja alternativas para as entregas.
  - CNAME: 1 Alias->1 DNS(Canonical Name)
    - Direciona um endereço para outro. Dessa forma, o site <www.minhaempresa.com.br> também pode ser acessado quando alguém digita apenas minhaempresa.com.br, por exemplo.
  - DNAME:
    - Esse tipo de registro oferece a possibilidade de fazer um mapeamento dos nomes dos DNSs para outros domínios, diferente do CNAME que mapeia apenas um único namespace.
  - LOC:
    - O servidor LOC especifica dados sobre a localização de computadores pelo mundo. Ele possibilita que sejam verificadas questões como a latitude, a longitude, a altura, etc.
  - AFSDB:
    - Esse tipo de servidor faz o mapeamento de domínios para os servidores de banco de dados para que sejam utilizados em ações estratégicas de TI.
  - TXT:Registro de texto
    - Fornece informações textuais que podem ser utilizadas para associar um texto arbitrário a um host, como informações sobre um servidor, rede etc. Você pode usa-lo afim de impedir spams e ataques phising.
  - SOA:
  - NS: Name Service
- CDNs Principais:
  - 1.1.1.1 e 1.1.0.0
  - 8.8.8.8 e 8.8.4.4 Google
  - CloudFare
- Ferramentas:
  - Into DSN
  - DNS Checker

## Interconexão de redes

## Equipamentos (gateways, hubs, repetidores, bridges, switches, roteadores)

## Noções de roteamento (RIP, OSPF)

## Estrutura da Internet global

## Noções de multicast

## Domínios e entidades de registro

## Funcionamento dos principais serviços de rede

## Servidores de e-mail, servidores web, servidores proxy

## Redes sem fio: conceitos, instalação, configuração, criptografia e segurança

## Redes VPN

## VoIP - Telefonia sobre IP

## Protocolos de streaming

## Princípios de redes peer-to-peer

## Gerenciamento e monitoração de redes

## Protocolo SNMP

## Sniffer de rede

## Interpretação de pacotes

## Formato de pacotes dos principais protocolos pertencentes à família TCP/IP

## Anomalias

## Análise de desempenho e otimização

## Tipos de serviço e QoS
