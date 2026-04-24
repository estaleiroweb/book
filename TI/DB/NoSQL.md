# NoSQL

## objetivos

- Flexibilidade
- Complexidade adaptável
- Escalabilidade Horizontal (Clusters)
- Alta Disponibilidade (Clusterização, Replicação de - dados)
- Open source
- Infra menor e distribuida

## Tipos

- key-value (Chave-Valor)
  - Usado em: Games, Publicidade on-line, IoT
  - Pontos Fortes: Altamente Particionáveis, Escalabilidade Horizontal Melhor
  - Forma de Armazenamento: Tabelas hash
  - Exemplos: MemcacheD, Riak, REDIS, DynamoDB
- Grafos
  - Usado em: Redes sociais, detecção de fraudes em mecanismos de reconhecimento, criação de gráficos de conhecimento
  - Pontos Fortes: Aplicativos altamente conectados
  - Forma de Armazenamento: Em formas de grafos (vértices, arestas)
  - Exemplos: Property Graph, RDF (Resorce Description Framework), Neo4j, Giraph
- Colunar (Orientado a Colunas)
  - Usado em: Performance de consulta analítica
  - Pontos Fortes: Recuperação rápida de colunas de dados, reduz IO de disco
  - Forma de Armazenamento: Linhas particulares do disco
  - Exemplos: Cassandra, Hbase
- Pesquisa
  - Usado em:
  - Pontos Fortes: alta performance, baixa latência, análise de dados em tempo real
  - Forma de Armazenamento: Indexação, agregação e pesquisa de registros em dados semi estruturados
  - Exemplos: Amazon ES (Elasticsearch Server)
- Documentos (Modelo de dados semi-estruturados)
  - Usado em:
  - Pontos Fortes: São dados Independentes provendo melhor performance de leitura, distribuição em multi servers facilitada
  - Forma de Armazenamento: Estrutura complexa de dados usando key-value / JSON
  - Exemplos: MongoDB, CouchDB, DynamoDB
