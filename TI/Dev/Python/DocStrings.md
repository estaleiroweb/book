# DocStrings


## Títulos

Os títulos padronizados em **docstrings** seguem convenções comuns, como a do **Google Style**, **NumPy Style** e **reStructuredText (reST)**. 

Aqui estão os principais títulos usados e suas atribuições:

### Definição de Parâmetros e Retornos

| Título       | Uso                                                                         |
| ------------ | --------------------------------------------------------------------------- |
| `Args`       | Lista os argumentos da função/método, explicando seus tipos e significados. |
| `Parameters` | Alternativa a `Args` usada no estilo NumPy/reST.                            |
| `Returns`    | Explica o valor retornado por uma função/método.                            |
| `Yields`     | Explica os valores gerados por um gerador (`yield`).                        |

### Exemplos e Uso

| Título     | Uso                                                                   |
| ---------- | --------------------------------------------------------------------- |
| `Examples` | Mostra como a função/método é usado, geralmente com código formatado. |
| `Usage`    | Alternativa a `Examples`, usada em algumas convenções.                |

### Tratamento de Erros e Exceções

| Título   | Uso                                                     |
| -------- | ------------------------------------------------------- |
| `Raises` | Lista as exceções que a função pode levantar (`raise`). |

### Notas e Observações

| Título           | Uso                                                            |
| ---------------- | -------------------------------------------------------------- |
| `Note` / `Notes` | Informações adicionais sobre a implementação ou comportamento. |
| `See Also`       | Referência a funções, classes ou módulos relacionados.         |

### Detalhes sobre Tipos e Atributos

| Título       | Uso                                                   |
| ------------ | ----------------------------------------------------- |
| `Attributes` | Lista os atributos de uma classe e seus significados. |
| `Methods`    | Lista os métodos de uma classe.                       |

### Depreciação e Advertências

| Título       | Uso                                                                                  |
| ------------ | ------------------------------------------------------------------------------------ |
| `Deprecated` | Indica que uma função, método ou classe está obsoleta e pode ser removida no futuro. |
| `Warnings`   | Indica possíveis problemas ao usar a função/método/classe.                           |

### Exemplo no Estilo Google
```python
def dividir(a: float, b: float) -> float:
    """Divide dois números.

    Args:
        a (float): O numerador.
        b (float): O denominador. Não pode ser zero.

    Returns:
        float: O resultado da divisão.

    Raises:
        ValueError: Se `b` for zero.

    Example:
        >>> dividir(10, 2)
        5.0
    """
    if b == 0:
        raise ValueError("O denominador não pode ser zero.")
    return a / b
```
