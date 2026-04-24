# Cluster MariaDB

Para configurar o MariaDB com vários nós ativos em **balanceamento de carga (load balancing)**, você pode utilizar o **MariaDB Galera Cluster**. Esse tipo de configuração permite replicação síncrona entre os nós e pode garantir alta disponibilidade e distribuição da carga.

Aqui está um guia passo a passo para configurar o MariaDB Galera Cluster com vários nós ativos e um balanceador de carga.

---

## 📝 **Requisitos:**

1. **Três ou mais servidores** (nós) com MariaDB instalados.
2. **Sistema operacional** compatível, como RHEL/CentOS ou Debian/Ubuntu.
3. **Firewall configurado** para permitir comunicação entre os nós.

---

## 1. **Instalar o MariaDB e Galera em todos os nós**

### RHEL/CentOS 7/8:

```bash
sudo yum install mariadb-server mariadb-client galera rsync
```

### Debian/Ubuntu:

```bash
sudo apt-get update
sudo apt-get install mariadb-server mariadb-client galera rsync
```

---

## 2. **Configurar o `my.cnf` em todos os nós**

Edite o arquivo de configuração do MariaDB (`/etc/my.cnf.d/server.cnf` em RHEL/CentOS ou `/etc/mysql/mariadb.conf.d/50-server.cnf` em Debian/Ubuntu):

```ini
[mysqld]
# Identificador do nó
server-id=1

# Ativar o Galera Cluster
wsrep_on=ON
wsrep_provider=/usr/lib64/galera/libgalera_smm.so  # Caminho em RHEL/CentOS

# Endereço dos nós
wsrep_cluster_address="gcomm://192.168.1.1,192.168.1.2,192.168.1.3"

# Nome do cluster
wsrep_cluster_name="my_galera_cluster"

# Endereço IP do nó atual
wsrep_node_address="192.168.1.1"

# Nome do nó (pode ser qualquer identificador único)
wsrep_node_name="node1"

# Usuário para sincronização do Galera
wsrep_sst_auth="root:senha"

# Método de sincronização (utilize rsync para simplificar)
wsrep_sst_method=rsync

# Configuração de sincronização
binlog_format=row
default_storage_engine=InnoDB
innodb_autoinc_lock_mode=2
```

> ⚠️ **Modifique os parâmetros `wsrep_node_address` e `server-id` em cada nó** para refletir seus endereços IP e identificadores únicos.

---

## 3. **Iniciar o Cluster**

### **No primeiro nó (node1):**

Inicie o cluster pela primeira vez com o seguinte comando:

```bash
sudo galera_new_cluster
```

### **Nos outros nós (node2 e node3):**

Inicie o MariaDB normalmente:

```bash
sudo systemctl start mariadb
```

---

## 4. **Verificar o status do cluster**

Em qualquer nó, execute:

```sql
SHOW STATUS LIKE 'wsrep_cluster_size';
```

O resultado deve mostrar o número total de nós ativos no cluster.

---

## 5. **Configurar o Balanceamento de Carga**

### **Usando o HAProxy**

Para distribuir a carga entre os nós, o **HAProxy** é uma solução comum e eficaz.

### **Instalação do HAProxy**

#### RHEL/CentOS:

```bash
sudo yum install haproxy
```

#### Debian/Ubuntu:

```bash
sudo apt-get install haproxy
```

### **Configuração do HAProxy**

Edite o arquivo de configuração `/etc/haproxy/haproxy.cfg`:

```cfg
frontend mariadb_front
    bind *:3306
    default_backend mariadb_cluster

backend mariadb_cluster
    balance roundrobin
    mode tcp
    server node1 192.168.1.1:3306 check
    server node2 192.168.1.2:3306 check
    server node3 192.168.1.3:3306 check
```

Reinicie o HAProxy:

```bash
sudo systemctl restart haproxy
```

---

## 6. **Testar o Balanceamento de Carga**

Conecte-se ao HAProxy em `localhost` ou no IP onde o HAProxy está rodando:

```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
```

Cada consulta será balanceada entre os nós.

---

## ✅ **Resumo**

1. **MariaDB Galera Cluster** permite replicação síncrona entre os nós.
2. **HAProxy** distribui a carga entre os nós ativos.
3. Adicione mais nós facilmente ao cluster ajustando as configurações e reiniciando o serviço.

Isso garante alta disponibilidade e escalabilidade para seu banco de dados.


Em um **MariaDB Galera Cluster**, eventos e *stored procedures* são gerenciados de forma específica devido à replicação síncrona. Vamos entender como esses elementos se comportam no cluster.

---

## 📌 **Eventos no MariaDB Galera Cluster**

Quando você cria um evento no MariaDB Galera Cluster, ele é armazenado no banco de dados no nó onde o evento foi criado. Por padrão, os eventos não são replicados automaticamente para os outros nós. Isso significa:

- **Eventos são locais ao nó onde foram criados.**
- **Eles não são executados em todos os nós automaticamente.**

### Exemplo:

Se você criar um evento no **nó 1**, esse evento só existirá e será executado no **nó 1**. Os nós **2** e **3** não terão conhecimento desse evento, a menos que você crie o evento manualmente em cada nó.

---

## 📌 **Stored Procedures e Galera Cluster**

As *stored procedures* (procedures armazenadas) têm um comportamento diferente dos eventos:

- **Stored procedures são replicadas para todos os nós**, pois fazem parte da estrutura do banco de dados.
- Ao chamar uma *stored procedure* em um nó específico, essa execução ocorre **somente nesse nó**, e **não é replicada para os outros nós**.

### Exemplo:

1. **Criação da stored procedure** em qualquer nó é replicada para todos os nós.
   
   ```sql
   DELIMITER //
   CREATE PROCEDURE exemplo_proc()
   BEGIN
       INSERT INTO minha_tabela (coluna1) VALUES ('teste');
   END //
   DELIMITER ;
   ```

2. **Execução da stored procedure** no **nó 1**:

   ```sql
   CALL exemplo_proc();
   ```

   - **Essa execução só ocorre no nó 1.**
   - A operação de inserção feita pela *stored procedure* será replicada para os outros nós por meio da replicação síncrona do Galera.

---

## 📝 **Resumo:**

- **Eventos** são locais ao nó onde foram criados e não são replicados automaticamente.
- **Stored procedures** são replicadas como parte do esquema do banco de dados, mas a execução delas ocorre apenas no nó onde são chamadas.
- Operações de manipulação de dados feitas dentro de uma *stored procedure* serão replicadas para todos os nós por meio da replicação síncrona do Galera Cluster.

### ⚠️ **Recomendação para Eventos**

Se você precisa que um evento execute em todos os nós, você deve:

1. **Criar o evento em todos os nós** manualmente.
2. **Garantir que apenas um nó esteja executando os eventos** para evitar duplicação. Isso pode ser feito configurando apenas um nó como mestre para execução de eventos.

```sql
SET GLOBAL event_scheduler = ON;
```

Configure os outros nós para manter o `event_scheduler` desativado:

```sql
SET GLOBAL event_scheduler = OFF;
```
