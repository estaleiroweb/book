# Algorítimos e suas Aplicações

https://github.com/ahirtonlopes/TIM-AI-Academy

## Processo de Machine Learning

![Processo de Machine Learning](https://miro.medium.com/v2/resize:fit:720/format:webp/1*YABS2NEU2vUyslUHi6NN1w.png)

1. Definição do caso de uso
2. Aquisição e exploraçãodos Dados
3. Seleção do [Algorítimos/Modelo](../Models/Models.md)
4. Pipeline de dados e Feature Engineering
5. Construção do Modelo de Machine Learning
6. Validação
7. Apresentação dos resultados
8. Planejamento da implantação
9. Operacionalização do modelo
10. Monitoramento do modelo

## Estrutura Básica ML-Machine Learning (Aprendizado de Máquina)

1. Definição do caso de uso
2. Aquisição e exploraçãodos Dados
3. Sanitização dos Dados
4. Seleção do [Algorítimos/Modelo](../Models/Models.md) de Treinamento
5. [Métricas](../Metrics.md) de Avaliação
6. Treinamento do Modelo
7. Teste do Modelo
8. Implementação do Modelo

## Método Científico

```mermaid
  flowchart LR

    Estudo --> Hipótese -->Teste -->Avaliação -->Relatório --> Questionamento
```

![Método Científico](https://i0.wp.com/colaborae.com.br/wp-content/uploads/2025/02/metodo_cientifico_fluxo_mapa.webp?ssl=1)

```mermaid
  flowchart TB

    subgraph sd[Solução Desconhecida]
        direction LR
      hu[História de Usuários]
      as["Arquitetura de <br>Spikes (XP)"] 
      pr[Planejamento de Release]
      i[Iterações]
      ta[Testes de Aceitação]
      pa[Pequenos Releases]

      hu ---|Requirements| pr
      hu ---|Cenários de Teste| ta
      as --- pr --- i ---|Bugs<br>Versão mais Recente| ta --- pa
      i ---|Próxima Iteração| ta
    end 

    subgraph pd[Problema Desconhecido]
      subgraph Customer [Customer Development]
        direction LR
        subgraph Customer_tips [Hipóteses / Experimentos / Insigths]
          cd((Customer Discovery)) -->
          cv((Customer Validation))
        end 
        cv -->
        cc((Customer Creation)) -->
        sc((Scale Company))
      end 
    end 

    pd --> sd --> pd
```

## Método Lean Startup

- Customer Development
- Problem (Hipóteses, Esperimentos, Insights) -> Solution (Dados, Feedback, Insights)
- Cenários de Teste
- História de Usuários

![Ciclo de feedback “Construir-Medir-Aprender”](https://via.ufsc.br/wp-content/uploads/ideias-e1626288387881-768x619.png)

![Design Thinking, Lean Startup e Agile](https://miro.medium.com/v2/resize:fit:828/format:webp/0*55N9tMk7qlVGcmVF)

## Processo de Descoberta de Conhecimento / KDD: Knowledge Discovery In Databases

1. Obtenção de Dados
2. Pré-processamento de dados
3. Processamento de dados / Mineração de dados
4. Pós-processamento

![Processo de Descoberta de Conhecimento](https://www.researchgate.net/profile/Rodrigo-Moraes-6/publication/330170667/figure/fig1/AS:711778744938496@1546712685087/Figura-1-Processo-de-Descoberta-do-Conhecimento.jpg)

## CRISP-DM

1. Entendimento de Negócios
2. Entendimento de Dados
3. Preparação dos Dados
4. Modelagem
5. Avaliação
6. Deploy

![CRISP-DM](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/CRISP-DM_Process_Diagram.png/1280px-CRISP-DM_Process_Diagram.png)

## Os 7 Padrões da Inteligência Artificial

![Os 7 Padrões da Inteligência Artificial](https://neigrando.com/wp-content/uploads/2020/08/os-7-padroes-da-inteligencia-artificial-1.png)

## Desenvolvimento de Sistem de IA

```mermaid
  flowchart LR

  c((Ciclos <br>Rápidos)) ---
  f((Foco no <br>Cliente)) ---
  m((Métricas)) ---
  a((Aprendizagem <br>Validada)) ---
  c

```

## Método Lean

![Princípios Lean](https://blog.runrun.it/wp-content/uploads/2023/05/infografico_5_principios_do_lean.png.webp)

![Aplicação Lean](https://lh5.googleusercontent.com/qmBbSHPnlWwK-AcWl47umVHAzu1Ssg_ujQSEQuWiF7KwbjWH8wo0KcwCBbAyL8D9S50ZWyEieCeym-DDhn1tbGiV5iuYnyubz16UOHTj6dDsNdUGIVWxR_Fv_MmoTIFijypDJz0s)

## Maturidade de Dados IA no Cenário Global

![MODELO 1 – DELL DATA MATURITY MODEL](https://jorgeaudy.com/wp-content/uploads/2021/01/untitled-100664038-large.idge_.png)

![MODELO 2 – OS 5 NÍVEIS x 10 DIMENSÕES PARA ORIENTAÇÃO À DADOS](https://jorgeaudy.com/wp-content/uploads/2021/01/data-driven-maturity-model.png)

![MODELO 3](https://jorgeaudy.com/wp-content/uploads/2021/01/image-25.png)

```mermaid
  flowchart LR

    d1[Dados & IA <br>Experimentais] -->
    d2[Dados & IA <br>em Produção] -->
    d3[Dados & IA <br>Integrados] -->
    d4[Dados & IA <br>em Escala] -->
    d5[Orientado por <br>Inteligência]
```

## Machine learning Canvas

https://www.ownml.co/machine-learning-canvas

![Canvas](https://images.squarespace-cdn.com/content/v1/5206b718e4b0bdc26006bae2/18b3fbc6-b9b9-4a35-a5c1-1625fcfe3c0f/Machine+Learning+Canvas+v1.1.jpg?format=1500w)

## Hype Cycle (garther)

https://www.gartner.com.br/pt-br/artigos/novidades-no-gartner-hype-cycle-for-emerging-technologies-de-2022

![garther](https://emt.gartnerweb.com/ngw/globalassets/intl-br/artigos/tecnologias-emergentes-hype-cycle.png)

## Análise Exploratória de Dados / EDA - Explore Data Analise

![EDA](https://media.licdn.com/dms/image/v2/D4D12AQGWYPs9GKNVvA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1696569898957?e=2147483647&v=beta&t=1xhkWfy15w4GT_587ZFyJduKDj6ts8gzHQzP9kefGtY)

![Conhecimento](https://miro.medium.com/v2/resize:fit:828/format:webp/1*9G1KwI1fjvYr0ZuHPTAk9A.png)

![Classico vs Exploratória](https://miro.medium.com/v2/resize:fit:828/format:webp/1*bUbGv79uv6dR2x3s2JmHgA.png)

![EDA](https://miro.medium.com/v2/resize:fit:828/format:webp/1*2nr25VRpZG5WlL6WSzFRaw.jpeg)

Vantagens:
- Identificação de Padrões e Tendências
- Detecção de Outliers e Valores Ausentes
- Insights Preliminares
- Qaulidade dos Processos

## Coleta de Dados

- Fontes:
  - Dispositivos IoT
  - Aplicativos Móveis
  - Sistemas Operacionais
  - Mídias Sociais
  - Multimídias
  - Transações
  - Parcerias
- Métodos:
  - Primários: Fontes originais
    - Estatísticas
    - Questionários
    - Pesquisas
    - Entrevistas
    - Grupos Focais
  - Secundários: Fontes preexistentes
    - Relatórios
      - Financeiros
      - Comerciais
      - Governamentais
    - Missão e Visão de Negócios
    - Internet
- Passos:
  1. Planejamento e Identificação das Necessidades
     - Estudo:
       - Tipos de Dados
       - Variáveis de Interesse
         - Identificação de Dados Faltantes
         - Tratamento de Variáveis Categóricas
         - Levantamento de Hipóteses
         - Entendimento da Distribuição
         - Detecção de Valores Inesperados
         - Magnitude dos Atributos
       - Viabilidade
     - Recursos:
       - Orçamento
       - Ressoal
       - Requisitos de Coelta
     - Conclusões de Correlação e Acurácia:
       - Lidar com Dados Insuficientes ou Inapropiados
     - Testes Estatísticos:
       - Metodologias
       - Avaliação
     - Consiterações Éticas:
       - Concentimento
       - Privacidade
       - Confidencialidade
  2. Design e Preparação
     - Nomenclatura
     - Tipo de Dados
     - Definição Operacional
     - Fatores de Estratificação
     - Amostragem
     - Quem e Como
  3. Garantia de Qualidade
  4. Armazenamento dos Dados
  5. Anotação dos Exemplos
  6. Documentação do Processo
- Técnicas de Tratamento para Dados Faltantes
  ```mermaid
    flowchart LR

      dados[Dados Faltantes]
      perc((%))
      subgraph del[Remoção de Valores]
        direction TB
        Lista
        Pares
        Col[Remoção de Colunas]
      end 
      input[Input de Valores]
      uni[Univariada]
      mult[Multivariada]

      subgraph uni_num[Numéricos]
        direction TB
        Média
        Mediana
        Distribuição
        Aleatório
      end 
      subgraph uni_cat[Categóricos]
        direction TB
        Moda
        Arbitrário
      end 
      subgraph mult_knn[KNN]
        direction TB
        len[Distâncias mais próximas]
      end 
      subgraph mult_mice[MICE]
        direction TB
        mice[" "]
      end 

      dados & del --> perc --> input --> uni & mult
      uni --> uni_num & uni_cat
      mult --> mult_knn & mult_mice

  ```

## Fluxo da Engenharia de Atributos

```mermaid
  flowchart LR

    alg@{ shape: notch-rect, label: "Algorítimo <br>de Aprendizagem <br>de Máquina" }
    dataset[(Datasets)]
    extract[Extração de Dados]
    subgraph prepare[Preparação de Dados]
      pre1[Processamento <br>e Wrangling]
      pre2[Extração <br>e engenharia <br>de Atributos]
      pre3[Padronização <br>e Seleção]
    end
    model[Modelagem]
    Aval{Avaliação <br>e Ajuste <br>do Modelo}
    deploy[Implatanção <br>e Monitoramento]

    dataset --> extract --> prepare --> model --> Aval --> deploy
    alg -->model
    Aval -->|Reiterar até desempenho satisfatório do modelo| prepare
```
