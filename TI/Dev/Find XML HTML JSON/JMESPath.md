# JMESPath

**JMESPath** (pronuncia-se "Jay-mes-path") é uma **linguagem de consulta para JSON**. Seu objetivo principal é facilitar a **extração e transformação de elementos de um documento JSON**, permitindo que você selecione e reformate os dados de forma flexível e declarativa.

Embora tenha uma finalidade semelhante ao JSONPath, o JMESPath é frequentemente considerado mais poderoso e expressivo devido à sua sintaxe e aos recursos adicionais, como a capacidade de projetar (remodelar) a estrutura dos dados resultantes, encadear operações e utilizar funções.

É amplamente utilizado em cenários de automação, pipelines de dados, e quando você precisa pegar um JSON grande e complexo e extrair apenas a pequena parte que te interessa, ou transformá-lo em um formato diferente.

## Como Funciona o JMESPath?

Um JMESPath é uma expressão que você aplica a um documento JSON. Essa expressão é avaliada e retorna um novo valor JSON. Ele opera sobre a estrutura hierárquica do JSON, permitindo que você navegue por objetos e arrays, filtre elementos, e até mesmo crie novas estruturas.

A sintaxe do JMESPath combina conceitos de seleção de objetos, arrays, fatiamento (slicing) de arrays, projeções, e funções.

### Elementos Chave da Sintaxe JMESPath

1. **Seleção de Membros de Objeto:**

      - `chave`: Seleciona o valor associado à `chave` em um objeto.
      - `foo.bar`: Encadeia seleções para acessar membros aninhados.
      - `"foo-bar"`: Para chaves com caracteres especiais, use aspas.

2. **Seleção de Elementos de Array (Índices):**

      - `[0]`: Seleciona o elemento no índice 0 de um array.
      - `[-1]`: Seleciona o último elemento de um array.

3. **Projeções (Projections):** Uma das características mais poderosas. Permitem aplicar uma expressão a cada elemento de um array ou a cada valor de um objeto.

      - `[*].chave`: Seleciona o valor de `chave` de cada objeto em um array.
      - `[].chave`: Sinônimo de `[*].chave`.
      - `*.chave`: Aplica `chave` a cada valor de um objeto (se os valores forem objetos).

4. **Filtros (Filters):** Permitem selecionar elementos de um array que atendem a uma condição.

      - `[?expressão_de_filtro]`: Filtra elementos de um array.
      - `[?chave == 'valor']`: Filtra por igualdade.
      - `[?chave > 10]`: Filtra por comparação.
      - `[?!chave]`: Filtra onde a chave não existe ou é falsa.

5. **Multiseleções (Multi-select Lists & Hashes):** Permitem selecionar múltiplos valores e criar novas estruturas.

      - `[chave1, chave2]`: Cria um array com os valores selecionados.
      - `{nova_chave: chave_original, outra_nova_chave: outra_chave_original}`: Cria um novo objeto (hash) com chaves e valores renomeados/selecionados.

6. **Funções:** O JMESPath possui várias funções embutidas para manipulação de strings, números, arrays, etc.

      - `length(array)`: Retorna o comprimento de um array.
      - `max(array_de_numeros)`: Retorna o maior número em um array.
      - `join(' ', array_de_strings)`: Junta strings.
      - `contains(array, valor)`: Verifica se um array contém um valor.
      - `to_string(valor)`: Converte um valor para string.

7. **Pipe (`|`):** Permite encadear expressões, onde a saída de uma expressão se torna a entrada da próxima.

      - `expressão1 | expressão2`: A expressão2 é aplicada ao resultado da expressão1.

## Exemplos Práticos

Vamos usar o seguinte documento JSON:

```json
{
  "nome": "Empresa ABC",
  "funcionarios": [
    {
      "id": "f001",
      "nome": "Alice",
      "cargo": "Desenvolvedora",
      "departamento": "TI",
      "salario": 70000,
      "habilidades": ["Python", "JavaScript"]
    },
    {
      "id": "f002",
      "nome": "Bob",
      "cargo": "Designer",
      "departamento": "Design",
      "salario": 65000,
      "habilidades": ["Figma", "Sketch"]
    },
    {
      "id": "f003",
      "nome": "Charlie",
      "cargo": "Desenvolvedora",
      "departamento": "TI",
      "salario": 75000,
      "habilidades": ["Java", "SQL"]
    },
    {
      "id": "f004",
      "nome": "David",
      "cargo": "Gerente",
      "departamento": "RH",
      "salario": 80000
    }
  ],
  "localizacoes": [
    "Contagem",
    "Belo Horizonte",
    "São Paulo"
  ],
  "ativo": true
}
```

(Legal ver "Contagem" na lista de localizações, não é? A gente está por aqui\! 😊)

Agora, alguns exemplos de expressões JMESPath e seus resultados:

- **Selecionar o nome da empresa:**

  - `nome`
  - Resultado: `"Empresa ABC"`

- **Selecionar o array de funcionários:**

  - `funcionarios`
  - Resultado: (o array completo de funcionários)

- **Selecionar o nome do primeiro funcionário:**

  - `funcionarios[0].nome`
  - Resultado: `"Alice"`

- **Selecionar os nomes de todos os funcionários:**

  - `funcionarios[*].nome`
  - Resultado: `["Alice", "Bob", "Charlie", "David"]`

- **Selecionar os IDs e cargos de todos os funcionários:**

  - `funcionarios[*].[id, cargo]`
  - Resultado: `[["f001", "Desenvolvedora"], ["f002", "Designer"], ["f003", "Desenvolvedora"], ["f004", "Gerente"]]`

- **Filtrar funcionários que são Desenvolvedores:**

  - `funcionarios[?cargo == 'Desenvolvedora']`
  - Resultado: (Array com os objetos de Alice e Charlie)

- **Filtrar funcionários com salário maior que 70000:**

  - ` funcionarios[?salario > `70000`]` (Note as crases para números literais)
  - Resultado: (Array com os objetos de Charlie e David)

- **Filtrar funcionários do departamento de TI e retornar seus nomes:**

  - `funcionarios[?departamento == 'TI'].nome`
  - Resultado: `["Alice", "Charlie"]`

- **Criar um novo objeto com o nome da empresa e os nomes dos funcionários:**

  - `{empresa: nome, nomes_funcionarios: funcionarios[*].nome}`
  - Resultado: `{"empresa": "Empresa ABC", "nomes_funcionarios": ["Alice", "Bob", "Charlie", "David"]}`

- **Obter o comprimento do array de habilidades do primeiro funcionário:**

  - `funcionarios[0].habilidades | length(@)` ( `@` refere-se ao elemento atual no pipe)
  - Resultado: `2`

- **Verificar se "Python" está nas habilidades de algum funcionário (e retornar o nome):**

  - `funcionarios[?contains(habilidades, 'Python')].nome`
  - Resultado: `["Alice"]`

- **Selecionar todas as localizações e juntá-las em uma string:**

  - `join(', ', localizacoes)`
  - Resultado: `"Contagem, Belo Horizonte, São Paulo"`

## Vantagens do JMESPath

- **Poder e Expressividade:** Permite consultas complexas e transformações de dados em uma única expressão.
- **Declarativo:** Você descreve o que quer, não como chegar lá.
- **Interoperabilidade:** Implementações estão disponíveis em várias linguagens de programação (Python, JavaScript, Java, PHP, Go, Ruby, etc.).
- **Legibilidade:** Para quem conhece a sintaxe, as expressões são bastante legíveis.
- **Transformação de Saída:** A capacidade de projetar e criar novas estruturas JSON diretamente na consulta é um diferencial.

## Casos de Uso Comuns

- **Automação:** Extrair dados específicos de respostas de APIs para scripts de automação.
- **CLIs (Command Line Interfaces):** Ferramentas como o AWS CLI usam JMESPath extensivamente para filtrar e formatar a saída de comandos JSON.
- **Pipelines de Dados:** Transformar dados JSON de uma etapa para a próxima.
- **Web Scraping:** Quando a resposta é JSON (e não HTML), o JMESPath é excelente para extrair as informações necessárias.
- **Testes:** Validar a estrutura e o conteúdo de respostas JSON em testes de integração ou unidade.

## JMESPath vs. JSONPath

Apesar de terem propósitos semelhantes, o JMESPath é geralmente considerado mais robusto:

- **JMESPath:** Forte em **projeções e transformações**, permitindo remodelar a saída. Sintaxe mais consistente e com funções integradas.
- **JSONPath:** Mais simples, focado em **seleção** de elementos existentes. Sua sintaxe pode variar um pouco entre as implementações.

Em muitos cenários, o JMESPath pode substituir a necessidade de escrever código extra para formatar o JSON após a seleção, tornando-o uma ferramenta muito eficiente.
