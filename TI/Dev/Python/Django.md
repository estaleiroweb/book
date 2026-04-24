# DJango

Django é um framework web em Python que segue o padrão **Model-View-Template (MVT)**, sendo projetado para criar aplicações web escaláveis, seguras e de fácil manutenção.  

### 🔹 **Arquitetura do Django**  
O Django segue a arquitetura **MVT (Model-View-Template)**, semelhante ao padrão MVC.  

1. **Model (M - Modelo)**: Representa a camada de dados, interagindo com o banco de dados via ORM (Object-Relational Mapping).  
2. **View (V - Visão)**: Lida com as requisições HTTP, processa os dados e retorna a resposta apropriada.  
3. **Template (T - Template)**: Define a estrutura HTML da interface do usuário, usando a linguagem de template do Django.  
4. **URLs (Roteamento)**: O `urls.py` mapeia as URLs para as views correspondentes.  
5. **Middleware**: Camada intermediária que processa requisições e respostas antes de chegarem às views.  
6. **Servidor WSGI/ASGI**: Responsável por conectar a aplicação Django ao servidor web (exemplo: Gunicorn, Uvicorn).  

### **Fluxo de Funcionamento do Django**
1. O usuário acessa uma URL da aplicação.  
2. O **Django URL Dispatcher** encaminha a requisição para a view correta.  
3. A **view** processa a requisição e pode interagir com o modelo (banco de dados).  
4. A view retorna os dados renderizados em um **template**.  
5. O servidor web envia a resposta ao usuário.  

### **Arquitetura do Django**

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


```mermaid
flowchart LR
    %% A@{ icon: "fa:user", form: "square", label: "User Icon", pos: "t", h: 60 }

    user@{ img: "https://www.svgrepo.com/show/165196/user.svg", label: "Usuário", pos: "t", h: 50, constraint: "on" }
    server["Servidor Django"]@{ shape: stadium }
    url["URL Dispatcher"]@{ shape: manual-input }
    subgraph MVT
        view["View Class"]@{ shape: docs }
        model["Model Class"]@{ shape: procs }
        templ["Template Class<br>(HTML)"]@{ shape: tag-doc }
    end
    db["Data Base"]@{ shape: lin-cyl }

    user-->|Requisição HTTP| server
    server -->|Roteamento| url
    url -->|Direciona para| view
    view -->|CRUD| model
    model -->|cRud| view
    model <-->|ORM| db
    view -->|Renderiza template| templ
    templ -->|Resposta HTML| user

    classDef off fill:none,stroke-width:0;
    class user off;
    style db fill:#00b,stroke:#005,stroke-width:2px,color:#fff
```


### 🔹 **Recursos do Django**
✅ **ORM Poderoso** → Facilita o acesso a bancos de dados sem escrever SQL manualmente.  
✅ **Autenticação embutida** → Gerenciamento de usuários e permissões.  
✅ **Segurança** → Proteção contra CSRF, SQL Injection, XSS, entre outros.  
✅ **Escalável** → Suporta desde pequenos projetos até aplicações complexas.  

## Comandos

### Iniciar um projeto

!!! note Nota

    Você precisará evitar nomear projetos com Python ou Django integrados Componentes. Em particular, isso significa que você deve evitar usar nomes como `django` (que entrarão em conflito com o próprio Django) ou `test` (que conflitos com um pacote Python integrado). 

```bash
cd /pasta
mkdir djangotutorial

django-admin startproject mysite djangotutorial
# Isso criará um projeto chamado `mysite` dentro do diretório `djangotutorial`. 

cd djangotutorial
python manage.py migrate
# Isso irá criar a base de dados como configurada em settings

python manage.py runserver 0.0.0.0:8000
# Isso iniciará o webserver com bind 0.0.0.0 na porta 8000
# Visite http://127.0.0.1:8000
```

!!! note Nota

    Ignore o aviso sobre migrações de banco de dados não aplicadas por enquanto; nós vamos lidar com o banco de dados em breve.

    Se não funcionou, consulte [Problemas ao executar o django-admin](https://docs.djangoproject.com/en/5.1/faq/troubleshooting/#troubleshooting-django-admin).


Vejamos o que criou:

    djangotutorial/
        manage.py
        mysite/
            __init__.py
            settings.py
            urls.py
            asgi.py
            wsgi.py


Esses arquivos são:

- `manage.py`: Um utilitário de linha de comando que permite interagir com este Projeto Django de várias maneiras. Você pode ler todos os detalhes em [django-admin e manage.py](https://docs.djangoproject.com/en/5.1/ref/django-admin/).

- `mysite/`: Um diretório que é o pacote Python real para o seu projeto. Seu nome é o nome do pacote Python que você precisará usar para importar qualquer coisa dentro dele (por exemplo `mysite.urls`).

- `mysite/__init__.py`: Um arquivo vazio que informa ao Python que este deve ser considerado um pacote Python. Se você é um iniciante em Python, leia [mais sobre pacotes](https://docs.python.org/3/tutorial/modules.html#tut-packages "(in Python v3.13)") nos documentos oficiais do Python.

- `mysite/settings.py`: Configurações/configuração para este Django projeto. [As configurações do Django](https://docs.djangoproject.com/en/5.1/topics/settings/) informarão tudo sobre como as configurações trabalho.

- `mysite/urls.py`: As declarações de URL para este projeto Django; um "índice" do seu site com Django. Você pode ler mais sobre URLs no [dispatcher de URL](https://docs.djangoproject.com/en/5.1/topics/http/urls/).

- `mysite/asgi.py`: Um ponto de entrada para servidores web compatíveis com ASGI para Sirva seu projeto. Consulte [Como implantar com ASGI](https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/) para obter mais detalhes.

- `mysite/wsgi.py`: Um ponto de entrada para servidores Web compatíveis com WSGI para Sirva seu projeto. Consulte [Como implantar com WSGI](https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/) para obter mais detalhes.


### Painel Administrativo


Visite http://127.0.0.1:8000/admin

```bash
python manage.py createsuperuser
# ou
python manage.py createsuperuser --username admin --email hfernandes@timbrasil.com.br
# Cria um super usuário para administração [admin]
```

### Iniciar uma aplicação

```bash
python manage.py startapp polls
# Inicia a aplicação polls

# crie polls/views.py
# crie polls/urls.py
# crie polls/models.py
# atualize mysite/urls.py
# atualize mysite/settings.py INSTALLED_APPS

python manage.py makemigrations polls
# prepara migrate para polls/models.py
# ou
python manage.py makemigrations && python manage.py migrate
# prepara migrate para */models.py

python manage.py migrate
# para atualizar a base de dados
```

### Modo interativo

```bash
python manage.py shell
```

    Python 3.13.2 (main, Feb  6 2025, 22:37:13) [GCC 12.2.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    (InteractiveConsole)
    >>> from mysites.models import Topic,Entry
    >>> Topic.objects.all()
    <QuerySet [<Topic: ddddddd>]>
    >>> Entry.objects.all()
    <QuerySet [<Entry: ksdjfgksdlkfg çlksdf gk...>, <Entry: ffffffff...>]>
    >>>

django-admin --version

django-admin --help


    check
    compilemessages
    createcachetable
    dbshell
    diffsettings
    dumpdata
    flush
    inspectdb
    loaddata
    makemessages
    makemigrations
    migrate
    optimizemigration
    runserver
    sendtestemail
    shell
    showmigrations
    sqlflush
    sqlmigrate
    sqlsequencereset
    squashmigrations
    startapp
    startproject
    test
    testserver
