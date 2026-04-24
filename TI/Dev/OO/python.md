```python
# 1. Elementos Estruturais

# Classe: Molde para criar objetos
class Cadeira:
    # Atributos: Propriedades da classe
    def __init__(self, cor, material, altura):
        self.cor = cor
        self._material = material  # Protected
        self.__altura = altura     # Private

    # Método: Ação do objeto
    def ajustar_altura(self, nova_altura):
        self.__altura = nova_altura
        return f"Altura ajustada para: {nova_altura} cm"

    # Estado: Representado pelos valores atuais dos atributos
    def get_estado(self):
        return f"Cor: {self.cor}, Material: {self._material}, Altura: {self.__altura}"

    # Destrutor: Libera recursos
    def __del__(self):
        print("Cadeira destruída")

class ContaBancaria:
    def __init__(self, saldo_inicial):
        self._saldo = saldo_inicial

    @property
    def saldo(self):
        print("Acessando saldo")
        return self._saldo

    @saldo.setter
    def saldo(self, valor):
        print("Alterando saldo")
        if valor < 0:
            raise ValueError("Saldo não pode ser negativo")
        self._saldo = valor

    @saldo.deleter
    def saldo(self):
        print("Deletando saldo")
        self._saldo = 0

# Uso
conta = ContaBancaria(1000)
print(conta.saldo)  # Acessando saldo; 1000
conta.saldo = 2000  # Alterando saldo
print(conta.saldo)  # Acessando saldo; 2000
del conta.saldo     # Deletando saldo
print(conta.saldo)  # Acessando saldo; 0

# Objeto: Instância da classe
cadeira = Cadeira("Azul", "Madeira", 50)

# Mensagem: Comunicação entre objetos (chamada de método)
print(cadeira.ajustar_altura(60))

# Interface: Em Python, usamos classes abstratas com ABC
from abc import ABC, abstractmethod

class Movel(ABC):
    @abstractmethod
    def mover(self):
        pass

class CadeiraGiratoria(Cadeira, Movel):
    def mover(self):
        return "Cadeira movida para nova posição"

# 2. Pilares

# Abstração: Representar apenas o essencial (via interface Movel acima)

# Encapsulamento: Proteger atributos e expor via métodos
class Encapsulada:
    def __init__(self):
        self.__segredo = "Dado privado"

    def get_segredo(self):
        return self.__segredo

# Herança: Criar classe derivada
class CadeiraDeEscritorio(Cadeira):
    def __init__(self, cor, material, altura, rodas):
        super().__init__(cor, material, altura)
        self.rodas = rodas

# Polimorfismo: Diferentes classes respondem ao mesmo método
class CadeiraDeJantar(Cadeira):
    def ajustar_altura(self, nova_altura):
        return "Cadeira de jantar não ajusta altura"

cadeira_escritorio = CadeiraDeEscritorio("Preto", "Metal", 70, 4)
cadeira_jantar = CadeiraDeJantar("Vermelho", "Madeira", 50)
print(cadeira_escritorio.ajustar_altura(80))  # Usa método da classe base
print(cadeira_jantar.ajustar_altura(80))     # Usa método sobrescrito

# 3. Outros Conceitos

# Composição: Objetos complexos formados por outros objetos
class Sala:
    def __init__(self, cadeira):
        self.cadeira = cadeira

    def get_cadeira(self):
        return self.cadeira

# Agregação: Relação mais fraca, objetos independentes
class Conjunto:
    def __init__(self):
        self.cadeiras = []

    def add_cadeira(self, cadeira):
        self.cadeiras.append(cadeira)

# Associação: Relação genérica entre classes
class Pessoa:
    def __init__(self, nome, cadeira):
        self.nome = nome
        self.cadeira = cadeira

# Coesão: Classe com responsabilidade única
class CalculadoraDeAltura:
    def calcular_altura_maxima(self, cadeira):
        return cadeira._Cadeira__altura + 20  # Acessando atributo privado

# Acoplamento: Baixa dependência (exemplo com CalculadoraDeAltura acima)

# Sobrecarga: Python não suporta sobrecarga nativa, mas usamos argumentos padrão
class Calculadora:
    def somar(self, *numeros):
        return sum(numeros)

# Sobrescrita: Redefinir método herdado (exemplo em CadeiraDeJantar acima)

# Classe Abstrata: Não pode ser instanciada
class MovelAbstrato(ABC):
    @abstractmethod
    def descrever(self):
        pass

# Método Abstrato: Deve ser implementado por subclasses
class Mesa(MovelAbstrato):
    def descrever(self):
        return "Sou uma mesa"

# Especialização: Classe mais específica
class CadeiraDeBalanco(Cadeira):
    def balancar(self):
        return "Cadeira balançando"

# Generalização: Classe mais genérica (exemplo com Cadeira como base)

# Modificadores de Acesso
class ExemploAcesso:
    def __init__(self):
        self.publico = "Acessível de qualquer lugar"
        self._protegido = "Acessível na classe e subclasses"
        self.__privado = "Acessível apenas na classe"

# Modificadores de Comportamento
class ExemploComportamento:
    # static: Pertence à classe
    contador = 0

    @staticmethod
    def metodo_estatico():
        return "Método estático"

    @classmethod
    def metodo_de_classe(cls):
        return f"Método de classe: {cls.__name__}"

    # final: Python não tem 'final', mas usamos convenção
    def metodo_final(self):
        return "Convencionalmente não sobrescrito"

    # const: Usamos variáveis de classe para constantes
    VALOR_CONSTANTE = 42

# Exemplo de uso
encapsulada = Encapsulada()
print(encapsulada.get_segredo())

sala = Sala(cadeira)
conjunto = Conjunto()
conjunto.add_cadeira(cadeira)

pessoa = Pessoa("João", cadeira)
calculadora = Calculadora()
print(calculadora.somar(1, 2, 3))

mesa = Mesa()
print(mesa.descrever())

cadeira_balanco = CadeiraDeBalanco("Marrom", "Madeira", 60)
print(cadeira_balanco.balancar())

print(ExemploComportamento.contador)
print(ExemploComportamento.metodo_estatico())
print(ExemploComportamento.metodo_de_classe())
print(ExemploComportamento.VALOR_CONSTANTE)
```
