# 📦 Composer

O **Composer** é um **gerenciador de dependências** para projetos PHP. Ele facilita a instalação, atualização e gerenciamento de bibliotecas e pacotes que seu projeto necessita, garantindo que você use versões compatíveis e simplificando o processo de desenvolvimento.

O Composer se baseia em um arquivo de configuração chamado `composer.json`, onde você define os pacotes que deseja utilizar e suas versões. Ele resolve automaticamente as dependências e instala tudo o que é necessário para o seu projeto.

O Composer facilita muito o desenvolvimento PHP, permitindo gerenciar dependências de forma eficiente e padronizada.

## 🛠️ Instalação

### Linux e macOS

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
sudo mv composer.phar /usr/local/bin/composer
composer --version
```

### Windows

1. Baixe o instalador em [https://getcomposer.org/download/](https://getcomposer.org/download/).
2. Execute o instalador e siga as instruções.
3. Verifique a instalação com:

```bash
composer --version
```

## 📚 Manual

### 📄 Criação de um Projeto

1. **Inicialize um projeto**:

   ```bash
   composer init
   ```

   Este comando vai guiá-lo na criação de um arquivo `composer.json`, que armazena as informações do projeto e dependências.

2. **Exemplo de `composer.json`**:

   ```json
   {
       "name": "meu/projeto",
       "description": "Um exemplo de projeto com Composer",
       "require": {
           "monolog/monolog": "^2.0"
       }
   }
   ```

### 📥 Instalando Pacotes

Para instalar pacotes, use:

```bash
composer require <pacote>
```

**Exemplo:**:

```bash
composer require guzzlehttp/guzzle
```

Isso vai instalar o pacote e atualizar o `composer.json`.

### 🔄 Atualizando Pacotes

Para atualizar pacotes já instalados:

```bash
composer update
```

Para atualizar um pacote específico:

```bash
composer update <pacote>
```

### 🚀 Executando `composer install`

Após clonar um projeto que já tem um `composer.json` e um `composer.lock`, instale as dependências com:

```bash
composer install
```

### 🔄 Gerando Autoload

Sempre que você fizer alterações na seção `autoload` do `composer.json`, você precisa atualizar o autoload com o seguinte comando:

```bash
composer dump-autoload
```

### 🧹 Removendo Autoload Desatualizado

Para uma limpeza completa antes de gerar o autoload novamente:

```bash
composer dump-autoload --optimize --no-dev --classmap-authoritative
```

### 📂 Estrutura de Diretórios Gerada pelo Composer

    meu-projeto/
    │-- composer.json      # Configuração das dependências
    │-- composer.lock      # Registro das versões exatas instaladas
    │-- vendor/            # Diretório das bibliotecas instaladas
    └-- index.php          # Seu arquivo principal

Para carregar as classes automaticamente:

```php
require 'vendor/autoload.php';
```

### 🧹 Comandos Úteis

- **Ver dependências instaladas**: `composer show`
- **Remover um pacote**: `composer remove <pacote>`
- **Verificar atualizações disponíveis**: `composer outdated`
- **Gerar autoload**: `composer dump-autoload`

### 🌐 Repositórios e Pacotes

O Composer utiliza o [Packagist](https://packagist.org/) como seu repositório padrão de pacotes PHP.

### ✅ Boas Práticas

1. **Sempre use o `composer.lock`** para garantir que as versões das dependências sejam consistentes.
2. **Adicione o diretório `vendor/` ao `.gitignore`**.
3. **Especifique versões de dependência com cuidado**, por exemplo: `^1.2`, `~2.0.3`.

### 📜 Seção `Scripts`

Você pode definir scripts personalizados no `composer.json` para automação de tarefas:

```json
{
    "autoload": {
        "psr-4": {
            "MyPlugin\\": "src/"
        }
    },
    "scripts": {
        "test": "phpunit",
        "start": "php -S localhost:8000",
        "post-install-cmd": [
            "php scripts/setup.php",
            "echo 'Instalação concluída!'"
        ],
        "post-update-cmd": [
            "php scripts/cleanup.php",
            "MyPlugin\\MyPlugin::postInstall"
        ],
        "pre-autoload-dump": [
            "echo 'Gerando autoload...'"
        ],
        "post-autoload-dump": [
            "php scripts/cache-clear.php"
        ],
        "start": "php -S localhost:8000 -t public",
        "test": "vendor/bin/phpunit",
        "lint": "php -l src/",
        "build": [
            "composer dump-autoload",
            "php scripts/build.php"
        ],
        "greet": "echo 'Olá, ${name}'"
    }
}
```
Execute o script com:

```bash
composer test
composer start
name="Mundo" composer greet
```

!!! info 📋 Lista Completa de Eventos

    Os eventos do Composer permitem que você execute scripts em momentos específicos, como instalação ou atualização de pacotes. Aqui estão os principais:

    | **Evento**                  | **Descrição**                                                                            |
    | --------------------------- | ---------------------------------------------------------------------------------------- |
    | `pre-install-cmd`           | Executado **antes** do `composer install`.                                               |
    | `post-install-cmd`          | Executado **depois** do `composer install`.                                              |
    | `pre-update-cmd`            | Executado **antes** do `composer update`.                                                |
    | `post-update-cmd`           | Executado **depois** do `composer update`.                                               |
    | `pre-status-cmd`            | Executado **antes** do `composer status`.                                                |
    | `post-status-cmd`           | Executado **depois** do `composer status`.                                               |
    | `pre-autoload-dump`         | Executado **antes** do `composer dump-autoload`.                                         |
    | `post-autoload-dump`        | Executado **depois** do `composer dump-autoload`.                                        |
    | `pre-archive-cmd`           | Executado **antes** de criar um arquivo `.zip` ou `.tar` com `composer archive`.         |
    | `post-archive-cmd`          | Executado **depois** de criar um arquivo `.zip` ou `.tar`.                               |
    | `pre-root-package-install`  | Executado **antes** de instalar o pacote raiz (`composer install` no projeto principal). |
    | `post-root-package-install` | Executado **depois** de instalar o pacote raiz.                                          |
    | `pre-dependencies-solving`  | Executado **antes** da resolução de dependências (instalação ou atualização).            |
    | `post-dependencies-solving` | Executado **depois** da resolução de dependências.                                       |
    | `pre-package-install`       | Executado **antes** de instalar cada pacote individualmente.                             |
    | `post-package-install`      | Executado **depois** de instalar cada pacote individualmente.                            |
    | `pre-package-update`        | Executado **antes** de atualizar cada pacote individualmente.                            |
    | `post-package-update`       | Executado **depois** de atualizar cada pacote individualmente.                           |
    | `post-create-project-cmd`   | Executado **depois** de `composer create-project`.                                       |
    | `pre-validate-cmd`          | Executado **antes** de `composer validate`.                                              |
    | `post-validate-cmd`         | Executado **depois** de `composer validate`.                                             |

!!!warning Considerações Importantes

    1. **Ordem de execução**: Scripts são executados na ordem em que aparecem na lista.
    2. **Falhas em comandos**: Se um comando em um script falhar (retornar um código diferente de 0), os comandos seguintes não serão executados.
    3. **Execução de múltiplos comandos**: Você pode definir uma lista de comandos em um único evento.

!!!tip Resumo

    - ✅ **Eventos** como `post-install-cmd` e `pre-update-cmd` automatizam ações durante o ciclo de vida do Composer.
    - ✅ **Scripts personalizados** como `start` e `test` permitem criar comandos manuais para tarefas recorrentes.
    - ✅ **Automatize tarefas** como inicialização de servidor, testes, geração de autoload e limpeza de cache diretamente via `composer.json`.

    Isso facilita a automação de processos repetitivos e melhora a eficiência no desenvolvimento de projetos PHP! 🚀

### 📜 Seção `autoload`

A seção **`autoload`** no `composer.json` é usada para definir regras de autoloading de classes e arquivos em um projeto PHP. Com ela, o Composer consegue carregar automaticamente as classes, evitando a necessidade de usar `require` ou `include` manualmente.

Quando você executa o comando `composer dump-autoload`, o Composer gera o arquivo `vendor/autoload.php`, que é responsável por carregar automaticamente as classes com base nas regras definidas na seção `autoload`.

Abaixo estão os principais tipos de autoload que podem ser definidos em `composer.json`:

#### 📚 1. PSR-4

O **PSR-4** é o padrão mais usado para autoloading. Ele mapeia namespaces para diretórios específicos.

**Exemplo de PSR-4**

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/",
            "Vendor\\Package\\": "lib/"
        }
    }
}
```

**Explicação**:

- **`App\\`** mapeia para o diretório `src/`.
- **`Vendor\\Package\\`** mapeia para o diretório `lib/`.

!!! info Estrutura de Diretórios Correspondente

    ```
    meu-projeto/
    │-- src/
    │   └-- MeuController.php  (namespace App)
    │-- lib/
    │   └-- Tools.php          (namespace Vendor\Package)
    │-- composer.json
    ```

!!! info Uso no Código

    ```php
    <?php
    require 'vendor/autoload.php';

    use App\MeuController;
    use Vendor\Package\Tools;

    $controller = new MeuController();
    $tool = new Tools();
    ```

#### 📁 2. PSR-0

O **PSR-0** é um padrão mais antigo para autoloading. Ele mapeia classes com base no namespace e no caminho do arquivo.

Na PSR-0, os underscores (`_`) nos nomes das classes são convertidos em separadores de diretório (`/`). Isso permite organizar as classes em subdiretórios sem usar namespaces.

**Exemplo de PSR-0**

```json
{
    "autoload": {
        "psr-0": {
            "Library": "src/",
            "Library2_": "src/"
        }
    }
}
```

!!! note Estrutura de Diretórios Correspondente

    ```
    meu-projeto/
    │-- src/
    │   |-- Library/
    │   |   └-- MeuClass.php  (namespace Library)
    │   └-- Library2/
    │       └-- Utils/
    │           └-- Helper.php  (contém a classe `Library_Utils_Helper`)│-- composer.json
    │-- composer.json
    ```

!!! note Arquivo 📄`src/Library/Utils/Helper.php`

    ```php
    <?php

    namespace Library;

    class MeuClass {
    }
    ```

!!! note Arquivo 📄`src/Library2/Utils/Helper.php`

    ```php
    <?php

    class Library_Utils_Helper {
        public static function sayHello() {
            echo "Olá, mundo!";
        }
    }
    ```

!!! note Uso no Código

    ```php
    <?php
    require 'vendor/autoload.php';

    $lib1 = new Library\MeuClass();
    $lib2 = new Library_Utils_Helper();
    Library_Utils_Helper::sayHello(); // Saída: Olá, mundo!
    ```



!!! warning Considerações

    - **Legado**: Trabalhar sem namespaces usando PSR-0 é considerado uma prática legada, mas pode ser útil para manter projetos antigos compatíveis.
    - **PSR-4**: Para projetos modernos, recomenda-se utilizar a PSR-4, que exige namespaces e oferece um autoload mais eficiente e padronizado.
    - **Depreciação**: A PSR-0 foi oficialmente **descontinuada** pelo PHP-FIG em favor da PSR-4 devido à sua simplicidade e eficiência.

#### 📝 3. Classmap

O **Classmap** permite que você especifique diretórios ou arquivos individuais para serem escaneados e incluídos no autoloading. É útil para projetos legados onde as classes não seguem PSR-4 ou PSR-0.

**Exemplo de Classmap**

```json
{
    "autoload": {
        "classmap": [
            "src/",
            "lib/CustomClass.php"
        ]
    }
}
```

> **Explicação**:
> - **`"src/"`**: Inclui todas as classes dentro do diretório `src/`.
> - **`"lib/CustomClass.php"`**: Inclui a classe específica `CustomClass.php` localizada em `lib/`.

!!! note Estrutura de Diretórios Correspondente

    ```
    meu-projeto/
    │-- src/
    │   └-- Utils/
    │       └-- LegacyHelper.php
    │-- lib/
    │   └-- CustomClass.php
    │-- composer.json
    │-- index.php
    ```

!!! note Arquivo 📄`src/Utils/LegacyHelper.php`

    ```php
    <?php

    class LegacyHelper
    {
        public static function greet()
        {
            return "Olá do LegacyHelper!";
        }
    }
    ```

!!! note Arquivo 📄`lib/CustomClass.php`

```php
<?php

class CustomClass
{
    public function sayGoodbye()
    {
        return "Adeus do CustomClass!";
    }
}
```

!!! info Gerando o Autoload

    Após definir o `classmap` no `composer.json`, execute o seguinte comando para gerar o autoloader:

    ```bash
    composer dump-autoload
    ```

    Isso criará o arquivo `vendor/autoload.php`, que inclui todas as classes mapeadas.

!!! note Arquivo 📄`index.php`

    Este arquivo carrega o autoloader e usa as classes definidas em `classmap`.

    ```php
    <?php
    require 'vendor/autoload.php';

    // Usando a classe LegacyHelper
    echo LegacyHelper::greet(); // Saída: Olá do LegacyHelper!

    // Usando a classe CustomClass
    $custom = new CustomClass();
    echo $custom->sayGoodbye(); // Saída: Adeus do CustomClass!
    ```

##### 🚀 Resumo do Fluxo

1. **Definimos** as classes em `src/` e `lib/`.
2. **Configuramos** o `classmap` no `composer.json` para incluir esses diretórios e arquivos.
3. **Executamos** `composer dump-autoload` para gerar o autoloader.
4. **Carregamos** o autoloader em `index.php` e usamos as classes automaticamente sem precisar de `require` manual para cada uma.

Isso é especialmente útil para projetos **legados** ou situações onde as classes não seguem os padrões PSR.

#### 📜 4. Files

O **Files** é usado para carregar arquivos específicos (por exemplo, arquivos com funções globais) que não seguem nenhuma convenção de namespace.

**Exemplo de Files**

```json
{
    "autoload": {
        "files": [
            "src/helpers.php",
            "lib/constants.php"
        ]
    }
}
```

**Explicação**

- Sempre que o `vendor/autoload.php` for carregado, os arquivos especificados serão incluídos automaticamente com `require`.

**Exemplo Completo de `autoload`**

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        },
        "psr-0": {
            "Legacy\\": "legacy/"
        },
        "classmap": [
            "models/",
            "lib/CustomClass.php"
        ],
        "files": [
            "src/helpers.php"
        ]
    }
}
```

#### ✅ **Resumo**

| **Tipo**     | **Uso**                                                                    |
| ------------ | -------------------------------------------------------------------------- |
| **PSR-4**    | Para projetos modernos que seguem namespaces.                              |
| **PSR-0**    | Para projetos legados que seguem o padrão antigo de namespaces.            |
| **Classmap** | Para incluir classes que não seguem PSR-4/PSR-0 ou diretórios específicos. |
| **Files**    | Para carregar arquivos específicos com funções ou constantes globais.      |

Com essas opções, você pode definir autoloading eficiente para qualquer tipo de projeto PHP, moderno ou legado! 🚀

### 📜 Seção `extra`

A seção **`extra`** no `composer.json` é usada para definir informações adicionais ou configurações específicas para pacotes, plugins e scripts personalizados. É uma seção **livre**, permitindo que desenvolvedores adicionem dados específicos que não são cobertos pelas demais seções do `composer.json`.

!!! info 📝 Estrutura Básica do `extra`

    ```json
    {
        "extra": {
            "chave": "valor"
        }
    }
    ```

**Exemplo Prático**

```json
{
    "name": "vendor/meu-projeto",
    "description": "Um exemplo de uso da seção extra",
    "require": {
        "php": "^7.4 || ^8.0"
    },
    "extra": {
        "branch-alias": {
            "dev-master": "1.0-dev"
        },
        "config-path": "config/"
    }
}
```

#### 🔎 Usos Comuns da Seção `extra`

    A seção `extra` é flexível e pode ser usada para várias finalidades. Abaixo estão alguns exemplos de como utilizá-la em diferentes contextos.

!!! info 1. 📌 Definir Alias de Branches

    O `branch-alias` permite que você trate branches de desenvolvimento (`dev-master`, por exemplo) como versões específicas.

    **Exemplo:**

    ```json
    {
        "extra": {
            "branch-alias": {
                "dev-master": "1.0-dev"
            }
        }
    }
    ```

    **Explicação**

    - `dev-master`: A branch `master` será tratada como `1.0-dev` na resolução de dependências.

!!! info 2. ⚙️ Configurações para Plugins

    Alguns plugins do Composer utilizam a seção `extra` para definir configurações específicas.

    **Exemplo:**

    ```json
    {
        "require": {
            "composer/installers": "^1.9"
        },
        "extra": {
            "installer-paths": {
                "plugins/{$name}/": ["type:wordpress-plugin"],
                "themes/{$name}/": ["type:wordpress-theme"]
            }
        }
    }
    ```

    **Explicação**

    - Define onde os plugins e temas do WordPress devem ser instalados.

!!! info 3. 📝 Dados Personalizados para Scripts

    Você pode adicionar dados personalizados para serem utilizados em scripts definidos na seção `scripts`.

    **Exemplo:**

    ```json
    {
        "scripts": {
            "custom-message": "echo ${COMPOSER_EXTRA_MESSAGE}"
        },
        "extra": {
            "message": "Olá do Composer!"
        }
    }
    ```

    **Executando o Script**

    ```bash
    COMPOSER_EXTRA_MESSAGE="Olá do Composer!" composer custom-message
    ```

!!! info 4. 📂 Definir Caminho de Configuração

    Use `extra` para definir caminhos personalizados para arquivos de configuração.

    **Exemplo:**

    ```json
    {
        "scripts": {
            "setup": "php setup.php --config-path=${COMPOSER_EXTRA_CONFIG_PATH}"
        },
        "extra": {
            "config-path": "config/"
        }
    }
    ```

    **Executando o Script:**

    ```bash
    COMPOSER_EXTRA_CONFIG_PATH="config/" composer setup
    ```

!!! info  5. 📝 **`class`**

    Usado por pacotes que registram comandos ou classes específicas.

    **Exemplo:**

    ```json
    {
        "extra": {
            "class": "MyVendor\\MyClass"
        }
    }
    ```

    **Explicação:**  

    - Define a classe principal para inicialização, por exemplo, em plugins ou pacotes de ferramentas.

!!! info 6. 🔌 Configurações Específicas para Frameworks

    **Exemplo:**

    ```json
    {
        "extra": {
            "symfony": {
                "allow-contrib": true,
                "require": "5.4.*"
            },
            "laravel": {
                "providers": [
                    "Vendor\\Package\\ServiceProvider"
                ],
                "aliases": {
                    "Package": "Vendor\\Package\\Facade"
                }
            }
        }
    }
    ```

    **Explicação symfony:**  
    - **`allow-contrib`**: Permite pacotes que não são oficiais do Symfony.
    - **`require`**: Define a versão do Symfony necessária.


    **Explicação laravel:**  
    - **`providers`**: Registra service providers automaticamente.
    - **`aliases`**: Define aliases de facades.


!!! info 7. 📜 `scripts-description`

    Permite adicionar descrições personalizadas para os scripts definidos na seção `scripts`.

    **Exemplo:**

    ```json
    {
        "scripts": {
            "custom-command": "echo 'Executando comando personalizado...'"
        },
        "extra": {
            "scripts-description": {
                "custom-command": "Comando que exibe uma mensagem personalizada."
            }
        }
    }
    ```

    **Explicação:**  
    - Adiciona descrições para facilitar a documentação dos comandos.

!!! info 8. 🛠️ `composer-plugin`

    Usado por plugins do Composer para definir configurações específicas.

    **Exemplo:**

    ```json
    {
        "extra": {
            "composer-plugin": {
                "implements": ["Composer\\Plugin\\PluginInterface"]
            }
        }
    }
    ```

    **Explicação:**  
    - Define que o pacote implementa uma interface específica para plugins do Composer.

!!! info 9. 📂 `config-path`

    Pode ser usado para definir caminhos personalizados para configurações.

    **Exemplo:**

    ```json
    {
        "extra": {
            "config-path": "config/"
        }
    }
    ```

    **Explicação:**  
    - Define um caminho padrão para arquivos de configuração.

!!! info 10. 🌐 `phel-config`

    Usado por pacotes específicos do **Phel Language** para configurações adicionais.

    **Exemplo:**

    ```json
    {
        "extra": {
            "phel-config": {
                "source-dirs": ["src/"],
                "test-dirs": ["tests/"]
            }
        }
    }
    ```

    **Explicação:**  
    - Define diretórios de código-fonte e testes para projetos Phel.

!!! info 11. 🔎 Contextos Personalizados

    Você pode criar qualquer chave personalizada na seção `extra` para atender às necessidades do seu projeto.

    **Exemplo:**

    ```json
    {
        "extra": {
            "custom-config": {
                "api-endpoint": "https://api.exemplo.com",
                "retry-attempts": 3
            }
        }
    }
    ```

    **Explicação:**  
    - Chaves personalizadas para armazenar informações específicas do seu projeto.


#### ✅ **Resumo**

A seção **`extra`** no `composer.json` permite:

- Adicionar configurações personalizadas.
- Definir alias para branches.
- Fornecer dados adicionais para plugins ou scripts.
- Customizar o comportamento de pacotes e frameworks.

| **Contexto**              | **Uso**                                                       |
| ------------------------- | ------------------------------------------------------------- |
| **`branch-alias`**        | Define aliases para branches de desenvolvimento.              |
| **`installer-paths`**     | Define caminhos personalizados para instalação de pacotes.    |
| **`class`**               | Especifica uma classe principal para inicialização.           |
| **`symfony`**             | Configurações específicas para pacotes do Symfony.            |
| **`laravel`**             | Define providers e aliases para pacotes do Laravel.           |
| **`scripts-description`** | Adiciona descrições personalizadas para scripts.              |
| **`composer-plugin`**     | Define configurações específicas para plugins do Composer.    |
| **`config-path`**         | Define caminhos personalizados para arquivos de configuração. |
| **`phel-config`**         | Configurações específicas para projetos Phel.                 |
| **Chaves personalizadas** | Qualquer dado específico para o seu projeto.                  |

A seção `extra` é extremamente versátil e pode ser adaptada às necessidades de pacotes, plugins e aplicações específicas. 🚀

### 📜 Seção `require` e `require-dev` 

As seções **`require`** e **`require-dev`** no `composer.json` são usadas para definir dependências do seu projeto. 

**Diferença Entre `require` e `require-dev`:**

- **`require`**: Contém as dependências necessárias para rodar a aplicação em produção.
- **`require-dev`**: Contém as dependências necessárias apenas para desenvolvimento e testes.

!!! info 📂 Estrutura do Projeto

    ```
    meu-projeto/
    │-- src/
    │   └-- App.php
    │-- tests/
    │   └-- AppTest.php
    │-- composer.json
    │-- index.php
    ```

**Exemplo:**

```json
{
    "name": "vendor/meu-projeto",
    "description": "Exemplo de require e require-dev",
    "require": {
        "monolog/monolog": "^2.0"       // Dependência para produção
    },
    "require-dev": {
        "phpunit/phpunit": "^9.0"       // Dependência para desenvolvimento/testes
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Tests\\": "tests/"
        }
    }
}
```

!!! info Arquivo 📄`src/App.php`

    Vamos criar uma classe simples que usa o **Monolog** (uma biblioteca de logging) incluída em `require`.

    ```php
    <?php

    namespace App;

    use Monolog\Logger;
    use Monolog\Handler\StreamHandler;

    class App
    {
        public function logMessage($message)
        {
            $log = new Logger('app');
            $log->pushHandler(new StreamHandler(__DIR__ . '/../app.log', Logger::INFO));
            $log->info($message);
        }
    }
    ```

!!! info Arquivo 📄`tests/AppTest.php`

    Este é um exemplo de teste usando **PHPUnit** incluído em `require-dev`.

    ```php
    <?php

    namespace Tests;

    use PHPUnit\Framework\TestCase;
    use App\App;

    class AppTest extends TestCase
    {
        public function testLogMessage()
        {
            $app = new App();
            $this->assertTrue(method_exists($app, 'logMessage'));
        }
    }
    ```

    **Após configurar o `composer.json`, instale as dependências com:**

    ```bash
    composer install
    ```

    **E gere o autoload com:**

    ```bash
    composer dump-autoload
    ```

!!! info Arquivo 📄`index.php`

    Este é o arquivo que usa a classe `App` para logar uma mensagem.

    ```php
    <?php

    require 'vendor/autoload.php';

    use App\App;

    $app = new App();
    $app->logMessage("Olá, este é um log de exemplo!");

    echo "Mensagem logada com sucesso!\n";
    ```

!!! info 🧪 Executando o Teste

    Para rodar o teste com **PHPUnit**, use o seguinte comando:

    ```bash
    vendor/bin/phpunit tests
    ```

!!! info 📝 Resumo

    **Dependências**

    - **`require`**: Inclui `monolog/monolog` para logging em produção.
    - **`require-dev`**: Inclui `phpunit/phpunit` para testes durante o desenvolvimento.

    **Fluxo de Uso**

    1. **Produção**:
    - A classe `App` usa **Monolog** para criar logs.
    - Executa-se `index.php` para gerar logs.

    2. **Desenvolvimento**:
    - **PHPUnit** é usado para testar a classe `App`.
    - Testes podem ser rodados com `vendor/bin/phpunit`.

    Esse exemplo demonstra como separar dependências para produção e desenvolvimento usando **`require`** e **`require-dev`** no Composer! 🚀

### Seção `name`

- **Descrição**: Define o nome do pacote, geralmente no formato `"vendor/package-name"`.
- **Exemplo**:
  ```json
  "name": "vendor/meu-projeto"
  ```

### Seção `description`

- **Descrição**: Uma breve descrição do projeto.
- **Exemplo**:
  ```json
  "description": "Exemplo de um projeto PHP"
  ```

### Seção `autoload-dev`

- **Descrição**: Semelhante ao `autoload`, mas para dependências de desenvolvimento.
- **Exemplo**:
  ```json
  "autoload-dev": {
      "psr-4": {
          "Tests\\": "tests/"
      }
  }
  ```

### Seção `config`

- **Descrição**: Define configurações globais que afetam o comportamento do Composer.
- **Exemplo**:
  ```json
  "config": {
      "preferred-install": "dist",
      "optimize-autoloader": true
  }
  ```

### Seção `scripts-descriptions`

- **Descrição**: Fornece **descrições** dos scripts definidos para documentação e exibição no Composer.
- **Exemplo**:
  ```json
  "scripts-descriptions": {
      "post-install-cmd": "Executado após a instalação"
  }
  ```

### Seção `support`

- **Descrição**: Define links para **suporte** ou documentação do projeto.
- **Exemplo**:
  ```json
  "support": {
      "issues": "https://github.com/vendor/meu-projeto/issues"
  }
  ```

### Seção `bin`

- **Descrição**: Define **binários** executáveis que o Composer deve colocar no diretório `vendor/bin`.
- **Exemplo**:
  ```json
  "bin": ["bin/console"]
  ```

### Seção `version`

- **Descrição**: Define a versão do pacote.
- **Exemplo**:
  ```json
  "version": "1.0.0"
  ```

### Seção `time`

- **Descrição**: Define a **data** de lançamento do pacote (geralmente não é necessário configurar manualmente).
- **Exemplo**:
  ```json
  "time": "2024-01-01T00:00:00+00:00"
  ```

### Seção `repositories`

- **Descrição**: Define repositórios adicionais para o Composer buscar pacotes.
- **Exemplo**:
  ```json
  "repositories": [
      {
          "type": "vcs",
          "url": "https://github.com/vendor/repository"
      }
  ]
  ```

### Seção `repositories`

- **Descrição**: Define os repositórios de onde o Composer pode buscar dependências.
- **Exemplo**:
  ```json
  "repositories": [
      {
          "type": "git",
          "url": "https://github.com/vendor/repo.git"
      }
  ]
  ```

### Seção `platform`

- **Descrição**: Define a **plataforma** para que o Composer use durante a resolução de dependências (por exemplo, especificar uma versão do PHP).
- **Exemplo**:
  ```json
  "config": {
      "platform": {
          "php": "7.4.3"
      }
  }
  ```

### Seção `minimum-stability`

- **Descrição**: Define o nível mínimo de estabilidade para pacotes (ex: `dev`, `alpha`, `beta`, `stable`).
- **Exemplo**:
  ```json
  "minimum-stability": "dev"
  ```

### Seção `prefer-stable`

- **Descrição**: Define se o Composer deve preferir pacotes **estáveis** (quando possível).
- **Exemplo**:
  ```json
  "prefer-stable": true
  ```

### Seção `suggest`

- **Descrição**: Define pacotes que são **sugeridos** para melhorar a funcionalidade do pacote, mas não são obrigatórios.
- **Exemplo**:
  ```json
  "suggest": {
      "symfony/console": "For better CLI functionality"
  }
  ```

### Seção `autoload-classmap`

- **Descrição**: Permite mapear **arquivos específicos** para autoloading, usando o caminho para as classes.
- **Exemplo**:
  ```json
  "autoload": {
      "classmap": [
          "src/LegacyCode/"
      ]
  }
  ```

### Seção `autoload-files`

- **Descrição**: Define arquivos que devem ser **incluídos** automaticamente pelo Composer durante a execução.
- **Exemplo**:
  ```json
  "autoload": {
      "files": [
          "src/helpers.php"
      ]
  }
  ```

### Seção `auto-generate`

- **Descrição**: Define se o Composer deve **gerar automaticamente** certos arquivos, como o autoloader.
- **Exemplo**:
  ```json
  "config": {
      "auto-generate": true
  }
  ```

### Seção****Resumo Final****


O `composer.json` oferece uma estrutura detalhada para gerenciar dependências, configurar scripts, e personalizar o comportamento do Composer. Abaixo está uma lista rápida de seções importantes:

1. **Gerenciamento de Dependências**: `require`, `require-dev`
2. **Autoloading**: `autoload`, `autoload-dev`
3. **Scripts e Configurações**: `scripts`, `config`, `extra`
4. **Outras Informações**: `name`, `description`, `support`, `bin`, `version`

Cada uma dessas seções oferece flexibilidade para configurar seu projeto conforme necessário! 🚀
