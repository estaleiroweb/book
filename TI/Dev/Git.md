# Git

## Iniciando Diretório

- Global Config:
    ```bash
    git config credential.helper store # apenas para o repositório
    git config --global credential.helper store # para todos os repositórios do usuário
    git config --global user.email "helbert@dockweb.com.br"
    git config --global user.name "estaleiroweb"

    git config --global github.email "helbertfernandes@dockweb.com.br"
    git config --global github.name "HelbertFernandes"
    git config --global github.token "xxxxxxxxxxxx"

    # git config --global core.autocrlf true
    git config --global core.autocrlf input
    git config --global core.eol lf

    ```
- Clone:
    ```bash
    git clone URL
    cd FOLDER
    ```
- Init and pull:
    ```bash
    git init
    git remote add origin "https://$USER@github.com/$USER/${GIT_P_FROM}.git" # adiciona origem remota
    git config --global credential.helper cache
    git pull origin main
    # check .gitignore
    # insert codes
    # update README.md
    ```
- Listar branches
    ```bash
    git branch
    ```
- Trocar/criar branch
    ```bash
    git branch nova_branch
    git checkout nova_branch
    ```

    ou..

    ```bash
    git checkout -b nova_branch
    ```
- Trocar link remoto
    ```bash
    cd /folder/xpto
    git remote -v
    git remote set-url origin https://user@github.com/user/xpto
    git remote -v

    git remote set-url origin https://github.com/estaleiroweb/phplib
    git remote set-url origin https://github.com/estaleiroweb
    git remote set-url origin https://github.com/estaleiroweb/jslib
    git remote set-url origin https://github.com/estaleiroweb/easyData
    git remote set-url origin https://github.com/estaleiroweb/evoice
    ```
- Verificar
    ```bash
    git status
    ```
- Adicionar
    ```bash
    git add .
    ```
- Commit e upload
    ```bash
    git commit -m 'Mudança de old para normal Retirada do exit'
    git push [-u orign nova_branch]
    ```

## Zerando histórico do git

```bash
# Certifique-se de que você tem um backup do repositório
# Clone o repositório para uma nova pasta
git clone caminho_do_repositorio novo_diretorio
cd novo_diretorio

# Captura o nome da branch master/main
BRANCH=$(git branch --no-color --no-abbrev | cut -d' ' -f2)

# Crie uma nova branch temporária a partir da branch atual
git checkout --orphan temp_branch

# Adicione todos os arquivos e crie um commit inicial
git add .
git commit -m "Commit inicial com o estado atual"

# Apague a branch master antiga e renomeie a branch temporária para master
git branch -D $BRANCH
git branch -m $BRANCH

# Force o push para o repositório remoto
git push -f origin $BRANCH

```

## Comandos do Tree

| Command                         | Description                                                                |
| ------------------------------- | -------------------------------------------------------------------------- |
| git add *                       | Adicionando alterações                                                     |
| git add -i                      | Add interativo que server inclusive para reveter                           |
| git add -p                      | Add parte do arquivo                                                       |
| git status                      | Status do Tree                                                             |
| git commit -m "text"            | commit com mensagem (faz o diff)                                           |
| git commit -m "text" --amend    | renomeia a mensagem do último commit                                       |
| git branch                      | mostra todas as branchs locais                                             |
| git branch -a                   | mostra todas as branchs                                                    |
| git branch -d [branch]          | apaga um branch                                                            |
| git branch -m master main       | muda branch de master para main                                            |
| git checkout -b test            | cria uma nova branch test                                                  |
| git checkout master             | vai para branch master local                                               |
| git checkout origin/master      | vai para branch master remota origin                                       |
| git checkout -b [branch] [sha1] | cria um branch com o cenário de um log anterior [sha1]                     |
| git fetch                       | apenas baixa o conteudo remoto sem apresentar nas pastas                   |
| git merge                       | junta os commits baixados com das pastas                                   |
| git pull origin main            | git fetch && git merge                                                     |
| git push                        | envia para o repositório remoto                                            |
| git push -u origin main         | envia para remoto origin a branch main                                     |
| git push origin --all           | envia para remoto origin todas branchs                                     |
| git push -u origin --all        | -u define padrao esta config. Proximo uso = git push                       |
| git push --force                | força atualização (exceto na branch master) depois reset HEAD              |
| git reflog                      | mostra o histórico das ações de comit/push (copie o hash para cherry-pick) |
| git cherry-pick [hash_reflog]   | recupera commit (use git push após)                                        |
| git rebase                      | reescreve o histórico deixando todas as alterações locais no topo          |
| git rebase [branch]             | junta 2 branchs em um mesmo ponto de log                                   |
| git reset --soft HEAD~1         | retira os commits mas deixa as alterações (do cabeçalho até 1 para baixo)  |
| git reset --hard HEAD~1         | desfaz o commit e alterações (do cabeçalho até 1 para baixo)               |
| git reset -- [filename]         | retira um arquivo da lista de stage                                        |
| git reset --                    | retira todos arquivos da lista de stage                                    |
| git log                         | mostra log                                                                 |
| git remote -v                   | mostra todos os links remotos                                              |
| git remote show origin          | verifica se há diferenças                                                  |
| git diff                        | mostra as diferenças de cada arquivo a ser comitado                        |
| git diff --staged               | mostra as diferenças de cada arquivo do próximo commit                     |
| git gc                          | Cleanup unnecessary files and optimize the local repository                |
| git show                        |                                                                            |

## Listas

- stage: Changes to committed
- unmaped: Untracked files

## Alias Cmds

```bash
alias git-log='git log --graph --decorate --color=always --date=iso --pretty=format:"%C(14)%cd %C(3)%H %C(8)%cn %C(14)%ar%Creset %s" | cat -;echo'
alias git-log-all='git log --graph --decorate --online --all'
```

## Scripting

```bash
git clone https://github.com/estaleiroweb/old_phplib.git
git add *
if [ "$(git status 2>&1 | grep 'Changes to be committed')" ];then
 git commit -m "Auto commit"
 git push -u origin main
fi
[ "$GIT_P_TO" = 'fsc' ] && composer update -q
```

## Especiais

### Apagando arquivos ou pastas de todo histórico do repositório

Adicionar ao `.gitignore` impede que **novos commits** incluam a pasta, mas **não remove o histórico anterior** onde ela já estava.

Para **remover a pasta `xpto/` do histórico do GitHub e reduzir o tamanho do repositório**, você precisará reescrever o histórico usando ferramentas como o [`git filter-repo`](https://github.com/newren/git-filter-repo) (recomendado) ou `BFG Repo-Cleaner`.

### Recomendado: Usando `git filter-repo`

!!! warning Este procedimento **reescreve o histórico** do repositório.
    Faça **backup** antes e só use se você **tem controle** do repositório ou todos os colaboradores podem atualizar seus clones.

1. Instale `git filter-repo` (apenas em versões de git 2.2+)

   No Linux (com `pip`):

   ```bash
   pip install git-filter-repo
   ```

   Ou baixe direto: https://github.com/newren/git-filter-repo

2. Clone seu repositório (se ainda não estiver local)

   ```bash
   git clone --mirror https://github.com/usuario/repositorio.git
   cd repositorio.git
   ```

3. Remova a pasta `xpto/` do histórico

   ```bash
   # apaga a pasta xpto/
   git filter-repo --invert-paths --path xpto/
   
   # apaga tudo que é *.log
   git filter-repo --invert-paths --path-glob '*.log'

   # apaga a pasta xpto/ e *.log
   git filter-repo --invert-paths --path 'xpto/' --path-glob '*.log'
   
   # apaga a pasta xpto/*.log
   git filter-repo --invert-paths --path-glob 'xpto/*.log'
   ```

   > Isso **remove** todos os rastros da pasta `xpto/` do histórico.

4. Substitua o repositório remoto (com cuidado)

   ```bash
   git remote -v # verificar se existe repo remoto. se não, execute a linha abaixo
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

   git push origin --force --all
   git push origin --force --tags
   ```

   !!! danger Importante

       - Quem já clonou esse repositório vai precisar **reclonar** ou fazer um:
         ```bash
         git fetch --all
         git reset --hard origin/main
         ```
       - Adicione no `.gitignore` (o que você já fez):
         ```txt
         /xpto/
         .log
         ```

Para reverter um commit que já foi enviado para o repositório remoto sem usar `git revert`, você precisará usar `git reset`. O processo é um pouco mais delicado do que um `revert`, pois você estará reescrevendo o histórico do repositório, o que pode causar problemas para outros colaboradores.

Aqui está o passo a passo para fazer isso:

### 1\. Reverter o commit localmente

Primeiro, você precisa reverter o commit na sua cópia local. O comando `git reset` é a ferramenta certa para isso. Existem algumas opções, e a escolha depende do que você deseja fazer com as alterações.

- **`git reset --soft HEAD~1`**: Este comando irá desfazer o último commit, mas manterá as alterações em seus arquivos como "staged" (prontos para um novo commit). O `HEAD~1` indica o commit anterior ao atual.
- **`git reset --mixed HEAD~1`**: (Essa é a opção padrão, então você pode omitir `--mixed`). Este comando irá desfazer o último commit e mover as alterações para o seu diretório de trabalho, mas elas não estarão "staged". Você precisará usar `git add` novamente se quiser commitar.
- **`git reset --hard HEAD~1`**: Este é o comando mais drástico. Ele irá desfazer o último commit e descartar todas as alterações feitas, **apagando-as permanentemente**. Use com extrema cautela.

Para o seu caso, se você quer apenas reverter o commit e está ciente de que o HEAD atual está no remoto, a melhor opção é usar o `git reset --soft` para ter controle sobre as alterações.

### 2\. Forçar a atualização do repositório remoto

Depois de reverter o commit localmente, o histórico do seu repositório local será diferente do repositório remoto. O `git push` normal não funcionará, pois o Git irá notar que você está tentando "reverter" o histórico. Você precisará usar o comando `git push --force` ou `git push -f` para forçar a atualização do repositório remoto.

**Aviso**: `git push --force` é uma operação perigosa, especialmente em um repositório compartilhado. Ele sobrescreve o histórico do branch remoto e pode apagar os commits de outros desenvolvedores se eles tiverem trabalhado em cima do commit que você está revertendo. Certifique-se de que ninguém mais está trabalhando no mesmo branch.

### Exemplo prático

Suponha que você tenha feito um commit chamado "Adiciona nova feature" e o enviou para a branch `main`. Agora você quer desfazer esse commit.

1. **Verifique o histórico para confirmar o commit que deseja reverter:**

    ```bash
    git log --oneline
    ```

2. **Reverta o commit localmente (usando `--soft` para manter as alterações):**

    ```bash
    git reset --soft HEAD~1
    ```

3. **Forçe a atualização do repositório remoto:**

    ```bash
    git push --force origin main
    ```

    (Substitua `origin` pelo nome do seu remote e `main` pelo nome do seu branch).
