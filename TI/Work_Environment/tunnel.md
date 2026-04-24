# Tunnel

Imagine que você quer acessar um serviço em um servidor, mas esse serviço está bloqueado ou é inseguro. Com um túnel SSH, você pode:

1. **Conectar-se ao servidor remoto usando SSH.** Isso já cria uma conexão criptografada e segura.
2. **Redirecionar o tráfego de uma porta local para uma porta no servidor remoto (ou vice-versa) através dessa conexão SSH.** É como se você estendesse a segurança da sua conexão SSH para aquele serviço específico.

**Por que usar?**

- **Segurança:** Proteger dados que passariam por uma rede não criptografada.
- **Acesso a serviços restritos:** Acessar serviços que estão atrás de um firewall ou que só podem ser alcançados de dentro de uma rede específica.

Em resumo, é uma maneira de **encapsular** tráfego de rede inseguro dentro de uma conexão SSH segura, permitindo o acesso a recursos restritos ou protegendo a comunicação.

```mermaid
flowchart TD
    subgraph tunel/proxy
      a[A]
      b[B com <br>permissão <br>de tunel]
      c[C]
      a l1@-->|Connecta via SSH|b
      b l2@-->|Connecta via Servico X|c
      a l3@<--->|conecta via <br>proxy/tunel a<br>Serviço X|c
      %% l1@{ animate: true }
    end
    subgraph normal
      A l4@-->|Connecta via SSH|B
      A l6@x-.-x|Sem conexão 
      Serviço X| C
      B l5@-->|"Connecta via Servico X"|C
    end

    classDef normal fill:#f9f,stroke:#333,stroke-width:2px;
    classDef insecure fill:#fee,stroke:#f00,stroke-width:2px;
    classDef secure fill:#ccf,stroke:#0B0,stroke-width:2px;

    A:::normal
    a:::normal
    B:::insecure
    b:::insecure
    C:::secure
    c:::secure


    classDef animate stroke-dasharray: 9,5,stroke:#0f0, stroke-width:2px,fill:none, stroke-dashoffset: 900,animation: dash 25s linear infinite;
    class l1,l2,l3,l4,l5 animate
```

## Dinâmico

```mermaid
flowchart TD
    subgraph user [Usuário]
        A[Computador Local]
    end

    subgraph web [Rede Externa / Insegura]
        B((Firewall))
        C{Servidor SSH}
    end

    subgraph internal [Rede Interna / Segura]
        D[Servidor MySQL]
    end

    A l0@-->|"1 Conexão SSH<"| C
    A l1@-->|"2 Config App proxy SOCKS5<br>127.0.0.1:porta"| A
    C l2@-->|"3 Conexão IP:porta"| D
    A l3@-->|"4 Conexão IP:Porta/Proxy"| D
    D l4@-->|"5 Resposta do DB/Proxy"| A

    classDef normal fill:#f9f,stroke:#333,stroke-width:2px;
    classDef insecure fill:#fee,stroke:#f00,stroke-width:2px;
    classDef secure fill:#ccf,stroke:#0B0,stroke-width:2px;

    A:::normal
    B:::insecure
    C:::secure
    D:::secure

    style D fill:#cfc

    classDef animate stroke-dasharray: 9,5,stroke:#0f0, stroke-width:2px,fill:none, stroke-dashoffset: 900,animation: dash 25s linear infinite;
    class l0,l1,l2,l3,l4 animate
```

Criar

![alt text](imgs/tunnel-01.png)
![alt text](imgs/tunnel-02.png)
![alt text](imgs/tunnel-03.png)

Usar:
![alt text](imgs/tunnel-04.png)
![alt text](imgs/tunnel-05.png)

## Local

```mermaid
flowchart TD
    subgraph user [Usuário]
        A[Computador Local]
    end

    subgraph web [Rede Externa / Insegura]
        B((Firewall))
        C{Servidor SSH}
    end

    subgraph internal [Rede Interna / Segura]
        D[Servidor MySQL]
    end

    A l1@-->|"1 Conexão Normal<br>127.x.x.x:porta<br>2 Conexão SSH"| C
    C l2@-->|"3 Túnel SSH <br>local 127.x.x.x:porta<br>remoto x.x.x.x:3306"| D
    D l3@-->|"4 Resposta do DB"| C
    C l4@-->|"6 Resposta Normal<br>5 Resposta via Túnel SSH"| A

    classDef normal fill:#f9f,stroke:#333,stroke-width:2px;
    classDef insecure fill:#fee,stroke:#f00,stroke-width:2px;
    classDef secure fill:#ccf,stroke:#0B0,stroke-width:2px;

    A:::normal
    B:::insecure
    C:::secure
    D:::secure

    style D fill:#cfc

    classDef animate stroke-dasharray: 9,5,stroke:#0f0, stroke-width:2px,fill:none, stroke-dashoffset: 900,animation: dash 25s linear infinite;
    class l1,l2,l3,l4 animate
```

Criar:
![alt text](imgs/tunnel-06.png)
![alt text](imgs/tunnel-07.png)

Usar:
![alt text](imgs/tunnel-08.png)
