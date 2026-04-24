# Loadbalancer

Sim, há formas mais robustas de configurar o balanceamento de carga em um ambiente **MariaDB Galera Cluster** sem depender de um único ponto de falha como o **HAProxy**. Uma das alternativas envolve o uso de protocolos e técnicas nativas de rede, como o **VRRP** (Virtual Router Redundancy Protocol), combinado com outras soluções de balanceamento de carga.

Vou te apresentar algumas abordagens que eliminam o ponto único de falha.

---

## 🌐 **1. VRRP com Keepalived**

O **VRRP (Virtual Router Redundancy Protocol)** permite configurar endereços IP flutuantes (*floating IPs*) entre servidores, garantindo alta disponibilidade do balanceador de carga. Quando combinado com o **Keepalived**, é possível implementar um balanceamento de carga robusto e sem ponto único de falha.

### 🛠️ **Como funciona:**

- **Keepalived** usa VRRP para definir um IP virtual que pode ser atribuído dinamicamente a um dos balanceadores de carga.
- Se o balanceador principal falhar, o IP virtual é automaticamente atribuído ao balanceador de backup.
- Pode ser usado em conjunto com **HAProxy** ou **Nginx** para balancear a carga entre os nós do MariaDB.

### 📄 **Exemplo de configuração:**

#### **No Balanceador Principal (`lb1`):**

Arquivo `/etc/keepalived/keepalived.conf`:

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

#### **No Balanceador Secundário (`lb2`):**

Arquivo `/etc/keepalived/keepalived.conf`:

```conf
vrrp_instance VI_1 {
    state BACKUP
    interface eth0
    virtual_router_id 51
    priority 90
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

### **Explicação:**

- **`192.168.1.100`** é o IP virtual que flutua entre os balanceadores.
- Se o `lb1` falhar, `lb2` assume automaticamente o IP virtual.

---

## 🌐 **2. DNS Round-Robin**

O **DNS Round-Robin** distribui as solicitações para múltiplos IPs configurados no registro DNS. Cada vez que uma requisição é feita, o DNS responde com um IP diferente dos disponíveis, equilibrando a carga entre os nós.

### 🛠️ **Como configurar:**

Adicione múltiplos registros A no seu servidor DNS:

```
db.mariadb.example.com.   IN  A   192.168.1.1
db.mariadb.example.com.   IN  A   192.168.1.2
db.mariadb.example.com.   IN  A   192.168.1.3
```

### ✅ **Vantagens:**

- Simples e fácil de configurar.
- Sem necessidade de software adicional.

### ⚠️ **Desvantagens:**

- Não detecta automaticamente falhas nos nós.
- Pode levar a tentativas de conexão em nós inativos até que o DNS seja atualizado.

---

## 🌐 **3. LVS (Linux Virtual Server)**

O **LVS** é uma solução de balanceamento de carga em nível de kernel do Linux. Ele oferece balanceamento de alta performance e pode ser usado em conjunto com **Keepalived** para alta disponibilidade.

### 🛠️ **Como funciona:**

- LVS é configurado para distribuir conexões TCP/IP para múltiplos nós.
- **Keepalived** gerencia o IP virtual para garantir que o LVS não tenha um ponto único de falha.

### **Exemplo de configuração com LVS e Keepalived:**

Arquivo `/etc/keepalived/keepalived.conf` em um servidor LVS:

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

### ✅ **Vantagens:**

- Alta performance por ser implementado no kernel.
- Suporte a múltiplos algoritmos de balanceamento.
- Pode ser combinado com VRRP para alta disponibilidade.

---

## 🌐 **4. ProxySQL**

O **ProxySQL** é um proxy inteligente para bancos de dados MySQL/MariaDB, oferecendo balanceamento de carga, roteamento avançado e alta disponibilidade.

### 🛠️ **Como funciona:**

- O ProxySQL pode ser implantado em múltiplos servidores.
- Pode ser combinado com **Keepalived** para ter IPs flutuantes e evitar ponto único de falha.

### **Exemplo de configuração do ProxySQL:**

```sql
INSERT INTO mysql_servers (hostgroup_id, hostname, port) VALUES (0, '192.168.1.1', 3306);
INSERT INTO mysql_servers (hostgroup_id, hostname, port) VALUES (0, '192.168.1.2', 3306);
INSERT INTO mysql_servers (hostgroup_id, hostname, port) VALUES (0, '192.168.1.3', 3306);

LOAD MYSQL SERVERS TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;
```

---

## ✅ **Resumo das Soluções**

1. **VRRP com Keepalived**: IP virtual flutuante, elimina ponto único de falha.
2. **DNS Round-Robin**: Simples, mas sem detecção automática de falhas.
3. **LVS com Keepalived**: Balanceamento de carga em nível de kernel com alta disponibilidade.
4. **ProxySQL**: Proxy inteligente com recursos avançados de roteamento.

A escolha da solução depende do seu nível de complexidade, necessidade de alta disponibilidade e escalabilidade. Para uma solução robusta e sem ponto único de falha, **Keepalived com LVS** ou **ProxySQL com VRRP** são excelentes opções.