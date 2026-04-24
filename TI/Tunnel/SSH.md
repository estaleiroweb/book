# SSH Tunnel

## Túnel dinâmico SOCKS5

**Criar**:

```bash
ssh -f -N -D 1080 usuario@servidor
```

- `ssh usuario@servidor`: se conecta no servidor com usuario
- `-D 1080`: cria um **proxy SOCKS5 local** na porta **1080**
- `-N`: não executa comandos no servidor (Ideal para usar só como túnel)
- `-f` → joga o processo pro background(Ótimo pra scripts ou uso contínuo)
- O SSH fica aberto e o túnel ativo enquanto a sessão existir

**Matar**:

```bash
ps aux | grep "ssh -f -N -D 1080"
kill PID
```

**Usando autenticação por chave (recomendado)**:

```bash
ssh -i ~/.ssh/id_rsa -f -N -D 1080 usuario@servidor
```

**Forçar SOCKS5 (e não SOCKS4)**: Por padrão o SSH já usa SOCKS5, mas se quiser garantir:

```bash
ssh -o "ExitOnForwardFailure yes" -N -D 1080 usuario@servidor
```

**Testando o túnel (via curl)**:

```bash
curl --socks5-hostname 127.0.0.1:1080 https://ifconfig.me
```

> Se o IP retornado for o **do servidor**, o túnel está funcionando 👍

**Configurar o proxy do Linux**:

```bash
export {http,https,ftp}_proxy="socks5h://127.0.0.1:1080"
export {HTTP,HTTPS,FTP}_PROXY="socks5h://127.0.0.1:1080" # Sempre vale exportar **ambas**
export no_proxy="localhost,127.0.0.1,.local" # Ignorar destinos locais (opcional, mas recomendado)
export NO_PROXY="localhost,127.0.0.1,.local" # Ignorar destinos locais (opcional, mas recomendado)
curl https://ifconfig.me # Testando o proxy
curl --proxy socks5h://127.0.0.1:1080 https://ifconfig.me # Forçando
```

**Tornar permanente só para o usuário**:

```bash
echo 'export http_proxy="socks5h://127.0.0.1:1080"' >> ~/.bashrc
echo 'export https_proxy="socks5h://127.0.0.1:1080"' >> ~/.bashrc
```

**Tornar permanente para todo o sistema**:

```bash
sudo tee -a /etc/environment <<EOF
http_proxy=socks5h://127.0.0.1:1080
https_proxy=socks5h://127.0.0.1:1080
EOF
```

> `/etc/environment` **não aceita `export`**.

- **Use `socks5h`**, não só `socks5`, isso garante que o **DNS seja resolvido pelo servidor remoto**, não localmente.
- nem tudo respeita SOCKS
- exemplos que **funcionam bem**:
  - `curl`
  - `git`
  - `wget`
  - `apt-get`, `apt`, `yum`, `dnf` (com ressalvas)
- alguns programas:
  - ignoram `http_proxy`
  - só aceitam **HTTP proxy**, não SOCKS
- exemplos que  **não funcionam direto**: (Nesses casos, usa-se **proxychains**)
  - `ping`
  - apps Java antigos
  - alguns binários estáticos

## Dicas importantes

- O SSH **não cifra só o proxy**, ele cifra **todo o tráfego até o servidor**
- O tráfego **sai para a internet pelo servidor**, não pela sua máquina
- Ideal para:
  - Acesso seguro em Wi-Fi público
  - Testes de acesso externo
  - Bypass de restrições de rede
- Pesquise sobre:
  - persistir isso com systemd
  - limitar IPs
  - encadear com ProxyChains
  - usar com Docker / containers
