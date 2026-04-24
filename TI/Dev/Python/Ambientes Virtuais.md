# Ambientes Virtuais em Python

Ambientes virtuais em Python permitem isolar dependências de projetos, evitando conflitos entre pacotes e versões. Abaixo, explico como instalar, usar e os arquivos de configuração relacionados para cada ferramenta: `venv`, `pyenv`, `pipenv` e `conda env`. Também incluo um comparativo com pontos positivos e negativos.

## 1. venv

- **Descrição**: Módulo padrão do Python para criar ambientes virtuais, introduzido na versão 3.3.
- **Instalação**: Já vem embutido no Python. Não requer instalação adicional.
- **Como Usar**:
  1. Crie um ambiente: `python -m venv nome_do_ambiente`.
  2. Ative o ambiente:
     - Windows: `nome_do_ambiente\Scripts\activate`.
     - Linux/Mac: `source nome_do_ambiente/bin/activate`.
  3. Instale pacotes: `pip install pacote`.
  4. Desative: `deactivate`.
- **Arquivos de Configuração Relacionados**:
  - `requirements.txt`: Lista de dependências gerada com `pip freeze > requirements.txt` para reinstalar com `pip install -r requirements.txt`.
  - O diretório do ambiente contém `pyvenv.cfg` com configurações básicas.

## 2. pyenv

- **Descrição**: Ferramenta para gerenciar múltiplas versões do Python e criar ambientes isolados.
- **Instalação**:
  - Linux/Mac: Siga as instruções em [github.com/pyenv/pyenv#installation](https://github.com/pyenv/pyenv#installation), geralmente via `curl` ou `git`.
  - Windows: Use alternativas como `pyenv-win`.
- **Como Usar**:
  1. Instale uma versão do Python: `pyenv install 3.9.0`.
  2. Defina a versão global ou local: `pyenv local 3.9.0`.
  3. Crie um ambiente virtual: `pyenv virtualenv 3.9.0 nome_do_ambiente`.
  4. Ative: `pyenv activate nome_do_ambiente`.
  5. Desative: `pyenv deactivate`.
- **Arquivos de Configuração Relacionados**:
  - `.python-version`: Define a versão do Python no diretório atual.
  - Usa `requirements.txt` para dependências, similar ao `venv`.

## 3. pipenv

- **Descrição**: Combina gerenciamento de dependências e ambientes virtuais, usando `Pipfile` e `Pipfile.lock`.
- **Instalação**: `pip install pipenv`.
- **Como Usar**:
  1. Crie um ambiente: `pipenv install` (gera `Pipfile`).
  2. Ative: `pipenv shell`.
  3. Instale pacotes: `pipenv install pacote`.
  4. Saia: `exit`.
- **Arquivos de Configuração Relacionados**:
  - `Pipfile`: Define dependências e configurações (ex.: versão do Python).
  - `Pipfile.lock`: Registra versões exatas para reprodutibilidade.

## 4. conda env

- **Descrição**: Parte do Anaconda/Miniconda, gerencia ambientes com pacotes Python e não Python.
- **Instalação**: Instale Anaconda ou Miniconda de [anaconda.com](https://www.anaconda.com/).
- **Como Usar**:
  1. Crie um ambiente: `conda create -n nome_do_ambiente python=3.9`.
  2. Ative: `conda activate nome_do_ambiente`.
  3. Instale pacotes: `conda install pacote` ou `pip install pacote`.
  4. Desative: `conda deactivate`.
- **Arquivos de Configuração Relacionados**:
  - `environment.yml`: Define o ambiente e dependências (ex.: `conda env export > environment.yml`).

### Comparativo

| Ferramenta    | Pontos Positivos                                                     | Pontos Negativos                                                          |
| ------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **venv**      | Simples, embutido no Python, leve.                                   | Manual, não gerencia versões do Python, requer `requirements.txt` manual. |
| **pyenv**     | Gerencia múltiplas versões do Python, flexível.                      | Configuração mais complexa, menos integrada para dependências.            |
| **pipenv**    | Automatiza `Pipfile` e `Pipfile.lock`, fácil de usar.                | Pode ser lento, depende de `pip`, menos suporte para pacotes não Python.  |
| **conda env** | Gerencia pacotes Python e não Python, robusto para ciência de dados. | Pesado (Anaconda), curva de aprendizado maior, depende de `conda`.        |
