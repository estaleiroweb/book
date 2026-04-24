# Network

Testes pode ser feitos no [Emulador Core](https://coreemu.github.io/core/index.html).

## ssh

## scp

## sshpass

Cliente não 

## arp

## arp-scan

- `arp-scan -I eth0 10.0.0.0/24`: Faz varredura na rede
- `arp-scan -l`: Faz varredura na rede da primeira interface do sistema

## route

Gerencia tabela de roteamento

- `route -n`: Mostra tabela de roteamento sem resolver endereços
- `route add default gw 192.168.1.1`: Configura o gateway padrão
- `route del -net 10.0.0.0 netmask 255.255.0.0 gw 192.168.1.1`: Remove estática

## telnet

Realiza conexões TCP/UDP com protocolo telnet (emulação de terminal). Porta padrão 23

- `telnet 192.168.1.1`: Acessa servidor telnet na porta 23
- `telnet 192.168.1.1 8000`: Acessa servidor telnet na porta 8000

## nc (netcat)

Realiza conexões TCP/UDP de forma genérica cliente/servidor, ou seja, conexões raw em TCP/UDP.

- `nc -I 8000`: Criar um servidor TCP:8000
  - `nc -I 8000 > /tmp/arquivo.dat`: Redirecionamento stdout
- `nc 192.168.1.1 8000`: Conecta em um servidor TCP:8000
  - `nc 192.168.1.1 8000 < /tmp/arquivo.dat`: Redirecionamento stdin
- `nc -u -I 8000`: Criar um servidor UDP:8000
- `nc -u 192.168.1.1 8000`: Conecta em um servidor UDP:8000
