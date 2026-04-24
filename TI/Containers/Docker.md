# Docker

## Instalação: (<https://docs.docker.com/get-docker/>)

```bash
 yum install docker docker-compose
 systemctl enable docker
 systemctl start docker
 mkdir -p /etc/systemd/system/docker.service.d
 echo -e "[Service]\nEnvironment=\"HTTP_PROXY=http://10.221.63.200:2813\"\nEnvironment=\"HTTPS_PROXY=http://10.221.63.200:2813\"\n") /etc/systemd/system/docker.service.d/http-proxy.conf
 systemctl daemon-reload
 systemctl restart docker
 systemctl show --property=Environment docker
```

## Uso

| Options                                    | Description                                            |
| ------------------------------------------ | ------------------------------------------------------ |
| Ctrl+D                                     | Mata o container                                       |
| exit                                       | Mata o container                                       |
| logout                                     | Mata o container                                       |
| Ctrl+P,Q                                   | Sai do Container                                       |
| docker images                              | Lista todas as imagens que tem disponível              |
| docker ps [-a]                             | Lista todos os containers em execução                  |
| docker attach (containerId)                | Entra no container                                     |
| docker diff (containerId)                  | Mostra as alterações do container                      |
| docker commit (containerId) (imgName)      | Commit das alterações do container                     |
| docker run -it (imgName) (initial_process) | Executa um docker a partir de uma imagem               |
| docker stop (containerId)                  | Para um container                                      |
| docker start (containerId)                 | Inicia um container parado                             |
| docker restart (containerId)               | Reinicia um container                                  |
| docker pause (containerId)                 | Pausar todos os processos em um contêiner              |
| docker unpause (containerId)               | Retomar um contêiner pausado                           |
| docker exec (containerId) (cmd)            | Executa comandos (cmd) dentro do container             |
| docker inspect (containerId\|imgId)        | Informações do container ou image                      |
| docker build -t (imgNam) (pathDF)          | Constroe uma image de um Dockerfile                    |
| docker commit (containerId) [imgNam]       | Cria nova image baseada no container                   |
| docker pull (imgNam)                       | Carrega uma imagem ou repositório do Docker para Local |
| docker push (imgNam)                       | Salva uma imagem ou repositório para o Docker do Local |
| docker rm (containerId)                    | Remover um ou mais contêineres                         |
| docker rmi (imgId)                         | Remover uma ou mais imagens                            |
| docker history (imgNam)                    | Mostrar o histórico de uma imagem                      |
| docker version                             | Versão do Docker                                       |
| (imgNam)                                   | [domain/]name[:version]                                |
| (containerId)                              | hash Hex                                               |
| (imgId)                                    | hash Hex                                               |
| (pathDF)                                   | Caminho relativo ou completo do arquivo Dokerfile      |

## Help

    Usage: docker [OPTIONS] COMMAND [arg...]

    A self-sufficient runtime for linux containers.

    Options:

        --api-cors-header=                   Set CORS headers in the remote API
        -b, --bridge=                        Attach containers to a network bridge
        --bip=                               Specify network bridge IP
        -D, --debug=false                    Enable debug mode
        -d, --daemon=false                   Enable daemon mode
        --default-gateway=                   Container default gateway IPv4 address
        --default-gateway-v6=                Container default gateway IPv6 address
        --default-ulimit=[]                  Set default ulimits for containers
        --dns=[]                             DNS server to use
        --dns-search=[]                      DNS search domains to use
        -e, --exec-driver=native             Exec driver to use
        --exec-opt=[]                        Set exec driver options
        --exec-root=/var/run/docker          Root of the Docker execdriver
        --fixed-cidr=                        IPv4 subnet for fixed IPs
        --fixed-cidr-v6=                     IPv6 subnet for fixed IPs
        -G, --group=docker                   Group for the unix socket
        -g, --graph=/var/lib/docker          Root of the Docker runtime
        -H, --host=[]                        Daemon socket(s) to connect to
        -h, --help=false                     Print usage
        --icc=true                           Enable inter-container communication
        --insecure-registry=[]               Enable insecure registry communication
        --ip=0.0.0.0                         Default IP when binding container ports
        --ip-forward=true                    Enable net.ipv4.ip_forward
        --ip-masq=true                       Enable IP masquerading
        --iptables=true                      Enable addition of iptables rules
        --ipv6=false                         Enable IPv6 networking
        -l, --log-level=info                 Set the logging level
        --label=[]                           Set key=value labels to the daemon
        --log-driver=json-file               Default driver for container logs
        --log-opt=map[]                      Set log driver options
        --mtu=0                              Set the containers network MTU
        -p, --pidfile=/var/run/docker.pid    Path to use for daemon PID file
        --registry-mirror=[]                 Preferred Docker registry mirror
        -s, --storage-driver=                Storage driver to use
        --selinux-enabled=false              Enable selinux support
        --storage-opt=[]                     Set storage driver options
        --tls=false                          Use TLS; implied by --tlsverify
        --tlscacert=~/.docker/ca.pem         Trust certs signed only by this CA
        --tlscert=~/.docker/cert.pem         Path to TLS certificate file
        --tlskey=~/.docker/key.pem           Path to TLS key file
        --tlsverify=false                    Use TLS and verify the remote
        --userland-proxy=true                Use userland proxy for loopback traffic
        -v, --version=false                  Print version information and quit

    Commands:
        docker cp       | Copiar arquivos/pastas do sistema de arquivos de um contêiner para o caminho do host
        docker create   | Criar um novo contêiner
        docker events   | Obter eventos em tempo real do servidor
        docker export   | Transmitir o conteúdo de um contêiner como um arquivo tar
        docker import   | Criar uma nova imagem do sistema de arquivos a partir do conteúdo de um tarball
        docker info     | Exibir informações de todo o sistema
        docker kill     | Eliminar um contêiner em execução
        docker load     | Carregar uma imagem de um arquivo tar
        docker login    | Registrar ou efetuar login em um servidor de registro do Docker
        docker logout   | Fazer logout de um servidor de registro do Docker
        docker logs     | Buscar os logs de um contêiner
        docker port     | Pesquisar a porta pública que é NAT-ed para PRIVATE_PORT
        docker rename   | Renomear um contêiner existente
        docker save     | Salvar uma imagem em um arquivo tar
        docker search   | Pesquisar uma imagem no Docker Hub
        docker stats    | Exibir um fluxo de estatísticas de uso de recursos de um contêiner
        docker tag      | Marcar uma imagem em um repositório
        docker top      | Pesquisar os processos em execução de um contêiner
        docker wait     | Bloqueie até que um contêiner pare e, em seguida, imprima seu código de saída


## Use/create Image

Download, cria e executa o o container

```bash
 docker run -it -p 8080:80 ubuntu:14.10 /bin/bash
```

| Options              | Description                          |
| -------------------- | ------------------------------------ |
| -i, --interactive    | Keep STDIN open even if not attached |
| -t, --tty            | Allocate a pseudo-TTY                |
| -p <local:container> | Mapea porta local para o container   |

## Create/Load Image

```bash
DIR=/(path)/(project)/api/(container_name)
DF_NAME=Dockerfile
 mkdir -p "$DIR" #Create directory
 vim "${DIR}/${DF_NAME}" #Create Dockerfile (Veja Dockerfile)
 docker build -t new_image_local_name [-f $DF_NAME] "$DIR"
```

## Dockerfile: (<https://docs.docker.com/engine/reference/builder/>)

| Command                | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| FROM (image)           | Qual image irá começar                                  |
| RUN (commands)         | Comandos que irá executa dentro da imagem               |
| COPY (from) (to)       | Copia arquivos da máquina para o Container              |
| ENV (variavel)=(valor) | Declara variáveis ambiente                              |
| CMD (command)          | Comando que será executado quando executar "docker run" |

## Admin

| Command                                      | Description                             |
| -------------------------------------------- | --------------------------------------- |
| docker-compose up                            | Cria ambiente de acordo com o .yml      |
| docker-compose down                          | destroe ambiente                        |
| docker-compose start                         | inicia ambiente                         |
| docker-compose stop                          | para execução do ambiente               |
| docker-compose ps                            | estado dos containers                   |
| docker-compose logs                          | logs de acesso etc                      |
| docker-compose top                           | servicos de rodam                       |
| docker-compose kill                          | matar processor no container            |
| docker-compose exec (service-name) (command) | executar comandos dentro dos containers |

## Linux

- OverlayFS: (<https://docs.docker.com/storage/storagedriver/overlayfs-driver/>)
- Namespaces: (<https://man7.org/linux/man-pages/man7/namespaces.7.html>)

## Códigos Exemplo

(<https://github.com/mateusmuller/mateusmullerme-youtube/tree/main/docker/01_tudo_para_iniciar_com_docker>)

## Others

- docker-machine
- Orquestradores docker
  - kubernets
  - software_armazenamentoMesos
  - Marathon
  - Nomad
