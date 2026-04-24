# VRRP e LVS

O **VRRP** e o **LVS** são tecnologias diferentes que podem trabalhar em conjunto, mas têm propósitos específicos em um ambiente de alta disponibilidade e balanceamento de carga. Vamos entender cada uma delas e como instalá-las no **Red Hat Enterprise Linux (RHEL)**.

---

## 🌐 **Diferenças entre VRRP e LVS**

### 1. **VRRP (Virtual Router Redundancy Protocol)**

- **Função:** Protocolo que permite criar um **IP virtual flutuante** que pode ser automaticamente transferido entre múltiplos servidores (ou roteadores) para garantir **alta disponibilidade**.
- **Objetivo:** Garantir que sempre haja um servidor ativo respondendo pelo mesmo endereço IP, mesmo em caso de falha.
- **Implementação no Linux:** Geralmente é configurado usando a ferramenta **Keepalived**.
- **Exemplo de uso:** Em balanceadores de carga ativos/passivos, onde o IP virtual é gerenciado por VRRP e transferido para o balanceador de backup em caso de falha.

### 2. **LVS (Linux Virtual Server)**

- **Função:** Uma solução de **balanceamento de carga em nível de kernel** que distribui o tráfego de rede entre vários servidores de back-end.
- **Objetivo:** Distribuir o tráfego de forma eficiente para evitar sobrecarga em um único servidor.
- **Implementação no Linux:** LVS é parte do **kernel do Linux** e é configurado usando **`ipvsadm`**.
- **Exemplo de uso:** Em servidores web ou bancos de dados que precisam de balanceamento de carga com alta performance.

---

### 📝 **Resumo das Diferenças**

| Característica               | VRRP (Keepalived)                         | LVS (Linux Virtual Server)                       |
|-------------------------------|--------------------------------------------|--------------------------------------------------|
| **Função**                   | Alta disponibilidade com IP virtual       | Balanceamento de carga                           |
| **Papel**                    | Failover entre servidores                 | Distribuição de tráfego                          |
| **Ferramenta**               | Keepalived                                | `ipvsadm`                                        |
| **Onde atua**                | Camada de rede (L3)                       | Kernel do Linux (L4)                            |
| **Exemplo**                  | Transferir IP em caso de falha            | Balancear conexões TCP/UDP entre back-ends      |

---

## 🖥️ **Infraestrutura Necessária**

Você pode configurar VRRP e LVS em servidores Linux sem a necessidade de uma VM ou roteador adicional. No entanto:

- **Para VRRP:** Requer **dois ou mais servidores** com o **Keepalived** instalado para gerenciar o IP virtual e permitir failover automático.
- **Para LVS:** Pode ser configurado no mesmo servidor em que o VRRP está rodando ou em servidores dedicados.

---

## 🛠️ **Instalação e Configuração no Red Hat Enterprise Linux**

### 1. **Instalação do Keepalived (VRRP)**

O **Keepalived** é usado para gerenciar o IP virtual e realizar o failover.

```bash
sudo yum install keepalived
```

#### **Configuração Básica do Keepalived**

Crie ou edite o arquivo `/etc/keepalived/keepalived.conf`:

```conf
vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1234
    }
    virtual_ipaddress {
        192.168.1.100
    }
}
```

- **`interface`**: Interface de rede (ajuste para sua configuração).
- **`virtual_ipaddress`**: O IP virtual que será gerenciado pelo Keepalived.

Reinicie e habilite o Keepalived:

```bash
sudo systemctl start keepalived
sudo systemctl enable keepalived
```

---

### 2. **Instalação do LVS**

O LVS é controlado pelo utilitário `ipvsadm`.

```bash
sudo yum install ipvsadm
```

#### **Configuração Básica do LVS**

Exemplo de balanceamento em **Round-Robin** para dois servidores MariaDB (`192.168.1.1` e `192.168.1.2`):

```bash
sudo ipvsadm -A -t 192.168.1.100:3306 -s rr
sudo ipvsadm -a -t 192.168.1.100:3306 -r 192.168.1.1:3306 -m
sudo ipvsadm -a -t 192.168.1.100:3306 -r 192.168.1.2:3306 -m
```

- **`-A`**: Adiciona um serviço virtual com o IP `192.168.1.100` na porta `3306` (MariaDB).
- **`-s rr`**: Usa o algoritmo de balanceamento **Round-Robin**.
- **`-a`**: Adiciona servidores reais (`192.168.1.1` e `192.168.1.2`).
- **`-m`**: Balanceamento de carga no modo **masquerade (NAT)**.

Para visualizar a configuração:

```bash
sudo ipvsadm -L -n
```

---

## ✅ **Configuração Integrada: Keepalived + LVS**

### **Keepalived com LVS**

O Keepalived pode gerenciar o IP virtual e o balanceamento LVS. Exemplo de configuração em `/etc/keepalived/keepalived.conf`:

```conf
vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1234
    }
    virtual_ipaddress {
        192.168.1.100
    }
}

virtual_server 192.168.1.100 3306 {
    delay_loop 5
    lb_algo rr
    lb_kind DR
    protocol TCP

    real_server 192.168.1.1 3306 {
        weight 1
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
        }
    }
    real_server 192.168.1.2 3306 {
        weight 1
        TCP_CHECK {
            connect_timeout 3
            nb_get_retry 3
            delay_before_retry 3
        }
    }
}
```

---

## 🚀 **Resumo da Solução**

- **VRRP (Keepalived):** Gerencia o **IP virtual** e failover automático entre balanceadores.
- **LVS:** Realiza o **balanceamento de carga** entre os nós MariaDB.
- **Infraestrutura:** Pode ser configurado em dois ou mais servidores **Linux Red Hat** sem a necessidade de hardware adicional.

Com esta configuração, você terá uma solução de alta disponibilidade e balanceamento de carga robusta, evitando um único ponto de falha.