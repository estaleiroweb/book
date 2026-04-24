# Docker Swarm

O Docker Swarm é um orquestrador de containers nativo do Docker que permite gerenciar múltiplos nós (hosts) como um cluster, garantindo alta disponibilidade e balanceamento de carga. Ele funciona em uma arquitetura mestre-trabalhador (manager-worker), onde os nós gerenciam e executam serviços distribuídos.

### 🔹 **Arquitetura do Docker Swarm**:
1. **Manager Nodes** (Nó Gerenciador): Responsáveis por orquestrar o cluster, agendando tarefas, gerenciando o estado desejado e coordenando os nós trabalhadores.
2. **Worker Nodes** (Nó Trabalhador): Executam os containers conforme instruído pelos managers.
3. **Overlay Network**: Rede interna usada para comunicação entre os containers e nós.
4. **Service**: Um conjunto de containers distribuídos pelo cluster.
5. **Task**: Instância específica de um container dentro de um nó.

---

### **Fluxo de Funcionamento**:
1. O usuário cria um serviço (`docker service create`).
2. O manager agenda tarefas para os workers.
3. Os workers executam os containers conforme o planejamento do manager.
4. Se um nó falhar, o Swarm redistribui automaticamente os serviços para outros nós disponíveis.

Aqui está uma ilustração simples da arquitetura do Docker Swarm:

```mermaid
flowchart TB
    %% cli(("fa:fa-user Usuário <br><span class="fa-solid fa-user-gear"></span> Admin"))

    subgraph Client
        direction TB
        user@{ img: "https://www.svgrepo.com/show/274160/user.svg", label: "User", pos: "b", h: 50, constraint: "on" }
        admin@{ img: "https://www.svgrepo.com/show/449319/user-admin.svg", label: "Admin", pos: "b", h: 50, constraint: "on" }
    end

    subgraph Cluster Docker Swarm
        direction TB
        
        mng1["Manager Node 1<br>(Leader)"]
        mng2["Manager Node 2"]
        mng3["Manager Node 3"]

        wrk1>"Worker Node 1"]
        wrk2>"Worker Node 2"]
        wrk3>"Worker Node 3"]
    end
    
    servA[[Service A]]
    servB[[Service B]]
    servC[[Service C]]

    user -->|Use Service| mng1
    admin -->|Create Service| mng1

    mng1 -->|Manage jobs| wrk1
    mng1 -->|Manage jobs| wrk2
    mng1 -->|Manage jobs| wrk3

    wrk1 -->|Run Containers| servA
    wrk2 -->|Run Containers| servB
    wrk3 -->|Run Containers| servC

    mng2 & mng3 -.->|Failover| mng1
    classDef off fill:none,stroke-width:0;
    class user,admin off;
```

### 🔹 **Recursos do Docker Swarm**
✅ **Alta Disponibilidade** → Se um manager falhar, outro assume.  
✅ **Escalabilidade** → Adicione mais nós para balancear a carga.  
✅ **Auto-recuperação** → Redistribuição de containers se um nó cair.  
✅ **Balanceamento de Carga** → Requests distribuídas automaticamente.  
