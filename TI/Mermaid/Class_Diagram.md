# Class Diagram

[https://mermaid.js.org/syntax/classDiagram.html](https://mermaid.js.org/syntax/classDiagram.html)

## Examples

```mermaid
classDiagram

Class01 <|-- AveryLongClass : Cool
<<Interface>> Class01
Class09 --> C2 : Where am I?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}
```

## Class

```mermaid
classDiagram
    class Animal
    Vehicle <|-- Car
```

```mermaid
---
title: Bank example
---
classDiagram
    class BankAccount
    BankAccount : +String owner
    BankAccount : +Bigdecimal balance
    BankAccount : +deposit(amount)
    BankAccount : +withdrawal(amount) int

    class Square
 Square : int id
 Square : List~int~ position
 Square : -List~string~ messages
    Square : setPoints(List~int~ points)
    Square : getPoints() List~int~
 Square : +setMessages(List~string~ messages)
 Square : +getMessages() List~string~
```

```mermaid
classDiagram
class BankAccount{
    +String owner
    +BigDecimal balance
    +deposit(amount)
    +withdrawal(amount) int
}
class Square~Shape~{
    int id
    List~int~ position
 -List~string~ messages
    setPoints(List~int~ points)
    getPoints() List~int~
 +setMessages(List~string~ messages)
 +getMessages() List~string~
}
```

## Visibility

```text
before members:
   Public      e.g.: publicMethod()      publicVar
 + Public      e.g.: +publicMethod()     +publicVar
 - Private     e.g.: -privateMethod()    -privateVar
 # Protected   e.g.: #protectedMethod()  #protectedVar
 ~ Package     e.g.: ~package
 ~ Internal    e.g.: ~internal
after members:
 Abstract*     e.g.: abstractMethod()*   abstractVar*
 Static$       e.g.: staticMethod()$     staticVar$
```

## Relationship / Arrow

| Relationship Type | Description   |
| ----------------- | ------------- |
| <\|--             | Inheritance   |
| *--               | Composition   |
| o--               | Aggregation   |
| -->               | Association   |
| --                | Link (Solid)  |
| ..>               | Dependency    |
| ..\|>             | Realization   |
| ..                | Link (Dashed) |

> Relationship= \[Relation Type\]\[Link\]\[Relation Type\]

| Relation Type | Description |
| ------------- | ----------- |
| <\|           | Inheritance |
| *             | Composition |
| o             | Aggregation |
| >             | Association |
| <             | Association |
| \|>           | Realization |

| Link | Description |
| ---- | ----------- |
| --   | Solid       |
| ..   | Dashed      |

```mermaid
classDiagram
classA <|-- classB : Inheritance
classC *--  classD : Composition
classE o--  classF : Aggregation
classG -->  classH : Association
classI --   classJ : Link(Solid)
classK ..>  classL : Dependency
classM ..|> classN : Realization
classO ..   classP : Link(Dashed)
```

blending

```mermaid
classDiagram
classA <|--|> classB : Inheritance
classC *--*  classD : Composition
classE o--o  classF : Aggregation
classG <-->  classH : Association
classI --   classJ : Link(Solid)
classO ..   classP : Link(Dashed)
```

blending

```mermaid
classDiagram
classA <|..|> classB : Inheritance
classC *..*  classD : Composition
classE o--o  classF : Aggregation
classG <..>  classH : Association
```

## Cardinality / Multiplicity on relations

| Cardinality | Description |
| ----------- | ----------- |
| 1           | Only 1      |
| 0..1        | Zero or One |
| 1..*        | One or more |
| *           | Many        |
| n           | n           |
| 0..n        | zero to n   |
| 1..n        | one to n    |

> [classA] "cardinality1" [Arrow] "cardinality2" [ClassB]:LabelText

```mermaid
classDiagram
    Customer "1" --> "*" Ticket
    Student "1" --> "1..*" Course
    Galaxy --> "many" Star : Contains
    A --> "*" B
```

## Annotations on classes

| Annotations         | Description                     |
| ------------------- | ------------------------------- |
| \<\<Interface\>\>   | To represent an Interface class |
| \<\<Abstract\>\>    | To represent an abstract class  |
| \<\<Service\>\>     | To represent a service class    |
| \<\<Enumeration\>\> | To represent an enum            |

```mermaid
classDiagram
 class Shape
 <<interface>> Shape
 Shape : noOfVertices
 Shape : draw()
```

```mermaid
classDiagram
class Shape{ <<interface>>
    noOfVertices
    draw()
}
class Color{
    <<enumeration>>
    RED
    BLUE
    GREEN
    WHITE
    BLACK
}
```

## Setting the direction of the diagram

```mermaid
classDiagram
  direction RL
  class Student {
    -idCard : IdCard
  }
  class IdCard{
    -id : int
    -name : string
  }
  class Bike{
    -id : int
    -name : string
  }
  Student "1" --o "1" IdCard : carries
  Student "1" --o "1" Bike : rides
```

## Interaction

```mermaid
classDiagram
class Shape
link Shape "https://www.github.com" "This is a tooltip for a link"
class Shape2
click Shape2 href "https://www.github.com" "This is a tooltip for a link"
```

<script>
  const callbackFunction = function () {
    alert('A callback was triggered');
  };
</script>

```mermaid
classDiagram
class Shape
callback Shape "callbackFunction" "This is a tooltip for a callback"
class Shape2
click Shape2 call callbackFunction() "This is a tooltip for a callback"
```

```mermaid
classDiagram
    class Class01
    class Class02
    callback Class01 "callbackFunction" "Callback tooltip"
    link Class02 "https://www.github.com" "This is a link"
    class Class03
    class Class04
    click Class03 call callbackFunction() "Callback tooltip"
    click Class04 href "https://www.github.com" "This is a link"
```
