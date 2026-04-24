# GitHub step-by-step

1. **Faças as configurações globais no seu git:
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu_email@exemplo.com"
   git config --global credential.helper wincred
   ```
   O Gerenciador de Credenciais do Windows armazenará esse token associado ao host do seu repositório remoto (por exemplo, github.com). Para futuras interações com esse mesmo host, as credenciais serão fornecidas automaticamente, sem que você precise digitá-las novamente.
2. **Crie um Token para desenvolvimento no GitHub**:  
   Crie um token para desenvolvimento para logar nas aplicações:
   > `User`-`Settings-Developer settings`-`Personal access tokens`-`Tokens (classic)`
3. **Configure sua pasta git com esse Token**:

   !!! info Configuração para pasta Local

       1. **Navegue até a pasta do seu repositório Git no terminal.** Use o comando `cd /caminho/para/sua/pasta`.
       2. **Edite o arquivo `.git/config` que está dentro da pasta `.git`.** Você pode usar qualquer editor de texto para isso (nano, vim,    VS Code, etc.).

           ```bash
           vi .git/config
           ```
       3. **Adicione ou modifique as seguintes linhas dentro da seção `[remote "origin"]` (ou o nome do seu remoto):**
           Se você precisa especificar um usuário e token para autenticação HTTP(S), a forma mais comum é incorporá-los diretamente na URL    do remoto.

           ```ini
           [remote "origin"]
           url = https://<seu_usuario>:<seu_token>@<url_do_repositorio>
           fetch = +refs/heads/*:refs/remotes/origin/*
           ```

           - Substitua `<seu_usuario>` pelo seu nome de usuário no serviço de hospedagem (GitHub, GitLab, Bitbucket, etc.).
           - Substitua `<seu_token>` pelo seu token de acesso pessoal.
           - Substitua `<url_do_repositorio>` pela URL real do seu repositório remoto (sem o `https://` inicial, pois já está    especificado).

           **Importante:** Armazenar credenciais diretamente na URL pode ser menos seguro em alguns cenários, especialmente se você    compartilha esse arquivo `config`. Considere as implicações de segurança.
       4. **Salve e feche o arquivo.**

    ou ...

    ```bash
    cd /caminho/para/sua/pasta
    sed -ri 's/(https:\/\/)(github.com)/\1user:token@\2/' .git/config
    ```
4. Trabalhe com as branchs
5. Crie uma Release
   > `User`-`Your Repositories`-`(choice one)`-`Code-Tag`-`Create New Release`
6. Vincule com o packagist
   > `User`-`Your Repositories`-`(choice one)`-`Settings`-`Webhooks`-`AddWebhook`
