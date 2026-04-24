# MongoDB

<https://www.mongodb.com/pt-br/docs/manual/>


!!! warning Compatibilidade

    Você pode usar operadores de query e projeção para sistemas hospedados nos seguintes ambientes:

    - MongoDB Atlas: o serviço totalmente gerenciado para implantações MongoDB na nuvem
    - MongoDB Enterprise: a versão autogerenciada e baseada em assinatura do MongoDB
    - MongoDB Community: uma versão com código disponível, de uso gratuito e autogerenciada do MongoDB

| Tipo de Dados | Exemplos                                            |
| ------------- | --------------------------------------------------- |
| Boolean       | `true`, `false`                                     |
| String        | `"texto"`                                           |
| Interger      | `123`                                               |
| Float         | `123.12`                                            |
| Cientific     | `1.1E+10`                                           |
| Object        | `{ key: value, ... }`                               |
| Array         | `[ value, value, ... ]`                             |
| Date          | `new Date()`, `ISODate("YYYY-MM-DDTHH:MM:SS.NNNZ")` |




Comandos
: show dbs
: show collections
: use `<database>`: Entra em um banco de dados

Métodos Database
: db.dropDatabase(): Remove uma base de dados
: db.getCollection('`collection`') Retorna Objeto de Coleção collection
: db.`collection`: Retorna Objeto de Coleção collection

## Métodos

<https://www.mongodb.com/pt-br/docs/manual/reference/method/>

### Nativos em mongosh

<https://www.mongodb.com/pt-br/docs/manual/reference/method/js-native/>

| Nome do método legado | Substituição                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------- |
| cat()                 | Retorna o conteúdo do arquivo especificado                                                  |
| ^^                    | fs.readFileSync( <filename>, 'utf8' )                                                       |
| ^^                    | A opção legada useBinaryMode não é suportada. Emule a opção useBinaryMode = false com:      |
| ^^                    | fs.readFileSync( <filename>, 'utf8' ).replace( /\\r\\n/g, '\\n' )                           |
| cd()                  | Altera o diretório de trabalho atual para o caminho especificado.                           |
| ^^                    | process.chdir( <path> )                                                                     |
| getHostName()         | Retorna o nome do host do sistema que está executando o mongosh.                            |
| ^^                    | os.hostname()                                                                               |
| getMemInfo()          | Retorna um documento que relata a memória usada pelo shell.                                 |
| ^^                    | process.memoryUsage()                                                                       |
| hostname()            | Retorna o nome do host do computador que executa o shell.                                   |
| ^^                    | os.hostname()                                                                               |
| isInteractive()       | Retorna um booleano indicando se o mongosh está executando no modo interativo ou de script. |
| ^^                    | isInteractive()                                                                             |
| listFiles()           | Retorna uma array de documentos que fornecem o nome e o tipo de cada objeto no diretório.   |
| ^^                    | fs.readdirSync( <path>, { withFileTypes: true } )                                           |
| load()                | Carrega e executa um arquivo JavaScript na shell.                                           |
| ^^                    | load() está disponível em mongosh. Veja também Diferenças entre require() e load().         |
| ls()                  | Retorna uma lista dos arquivos no diretório atual.                                          |
| ^^                    | fs.readdirSync( <path> )                                                                    |
| md5sumFile()          | Retorna o hash md5 do arquivo especificado.                                                 |
| ^^                    | crypto.createHash( 'md5' ).update( fs.readFileSync( <filename> ) ).digest( 'hex' )          |
| mkdir()               | Cria um diretório no caminho especificado.                                                  |
| ^^                    | fs.mkdirSync( <path>, { recursive: true } )                                                 |
| pwd()                 | Retorna o diretório atual.                                                                  |
| ^^                    | process.cwd()                                                                               |
| quit()                | Sai da sessão de shell atual.                                                               |
| ^^                    | quit()                                                                                      |
| removeFile()          | Remove o arquivo especificado do sistema de arquivos local.                                 |
| ^^                    | fs.unlinkSync( <filename> )                                                                 |
| sleep()               | Descanse pelo número especificado de milissegundos.                                         |
| ^^                    | sleep( <number> )                                                                           |
| version()             | Retorna a versão atual da instância mongosh.                                                |
| ^^                    | version()                                                                                   |
| _isWindows()          | Retorna true se o shell estiver em execução no Windows.                                     |
| ^^                    | process.platform === 'win32'                                                                |
| _rand()               | Retorna um número aleatório entre 0 e 1.                                                    |
| ^^                    | Math.random()                                                                               |
| version()             |                                                                                             |

### Collection

<https://www.mongodb.com/pt-br/docs/manual/reference/method/js-collection/>

| Nome                                   | Descrição                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| db.collection.analyzeShardKey()        | Calcula métricas para avaliar uma chave de fragmento.                                                                                                   |
| db.collection.aggregate()              | Fornece acesso ao pipeline de agregação.                                                                                                                |
| db.collection.bulkWrite()              | Fornece funcionalidade de operação para gravação em massa.                                                                                              |
| db.collection.configureQueryAnalyzer() | Configura a amostragem de consulta para uma coleção.                                                                                                    |
| db.collection.count()                  | Envolve count para retornar uma contagem do número de documentos em uma coleção ou uma visualização.                                                    |
| db.collection.countDocuments()         | Envolve o estágio de agregação $group com uma expressão $sum para retornar uma contagem do número de documentos em uma uma coleção ou uma visualização. |
| db.collection.createIndex()            | Constrói um índice em uma coleção.                                                                                                                      |
| db.collection.createIndexes()          | Constrói um ou mais índices em uma coleção.                                                                                                             |
| db.collection.dataSize()               | Retorna o tamanho da coleção. Envolve o campo size na saída de collStats.                                                                               |
| db.collection.deleteOne()              | Exclui um único documento em uma coleção.                                                                                                               |
| db.collection.deleteMany()             | Exclui vários documentos em uma coleção.                                                                                                                |
| db.collection.distinct()               | Gera um array de documentos com valores distintos para o campo especificado.                                                                            |
| db.collection.drop()                   | Remove a coleção especificada do banco de dados.                                                                                                        |
| db.collection.dropIndex()              | Remove um índice especificado em uma coleção.                                                                                                           |
| db.collection.dropIndexes()            | Remove todos os índices de uma coleção.                                                                                                                 |
| db.collection.ensureIndex()            | Removido. Use db.collection.createIndex().                                                                                                              |
| db.collection.estimatedDocumentCount() | Envolve count para retornar uma contagem aproximada de documentos em uma coleção ou uma visualização.                                                   |
| db.collection.explain()                | Retorna informações sobre a execução de consultas de vários métodos.                                                                                    |
| db.collection.find()                   | Executa uma consulta em uma coleção ou uma visualização e retorna um objeto do cursor.                                                                  |
| db.collection.findAndModify()          | Modifica atomicamente e retorna um único documento.                                                                                                     |
| db.collection.findOne()                | Executa uma consulta e retorna um único documento.                                                                                                      |
| db.collection.findOneAndDelete()       | Localiza um único documento e o exclui.                                                                                                                 |
| db.collection.findOneAndReplace()      | Localiza um único documento e o substitui.                                                                                                              |
| db.collection.findOneAndUpdate()       | Localiza um único documento e o atualiza.                                                                                                               |
| db.collection.getIndexes()             | Retorna uma array de documentos que descrevem os índices existentes em uma coleção.                                                                     |
| db.collection.getShardDistribution()   | Para coleções em clusters fragmentados, db.collection.getShardDistribution() informa dados de distribuição de partes.                                   |
| db.collection.getShardVersion()        | Método de diagnóstico interno para cluster fragmentado.                                                                                                 |
| db.collection.hideIndex()              | Oculta um índice do planejador de consulta.                                                                                                             |
| db.collection.insertOne()              | Insere um novo documento em uma coleção.                                                                                                                |
| db.collection.insertMany()             | Insere vários novos documentos em uma coleção.                                                                                                          |
| db.collection.isCapped()               | Informa se uma coleção é uma coleção limitada.                                                                                                          |
| db.collection.latencyStats()           | Retorna estatísticas de latência para uma coleção.                                                                                                      |
| db.collection.mapReduce()              | Executa agregação de dados no estilo map-reduce.                                                                                                        |
| db.collection.reIndex()                | Reconstrói todos os índices existentes em uma coleção.                                                                                                  |
| db.collection.remove()                 | Exclui documentos de uma coleção.                                                                                                                       |
| db.collection.renameCollection()       | Altera o nome de uma coleção.                                                                                                                           |
| db.collection.replaceOne()             | Substitui um único documento em uma coleção.                                                                                                            |
| db.collection.stats()                  | Informa sobre o estado de uma coleção. Fornece um wrapper em torno do collStats                                                                         |
| db.collection.storageSize()            | Informa o tamanho total usado pela coleção em bytes. Fornece um wrapper ao redor do campo storageSize da saída collStats.                               |
| db.collection.totalIndexSize()         | Relata o tamanho total usado pelos índices em uma coleção. Fornece um wrapper ao redor do campo totalIndexSize da saída collStats.                      |
| db.collection.totalSize()              | Indica o tamanho total de uma coleção, abrangendo todos os documentos e índices associados.                                                             |
| db.collection.unhideIndex()            | Exibe um índice do planejador de consultas.                                                                                                             |
| db.collection.updateOne()              | Modifica um único documento em uma coleção.                                                                                                             |
| db.collection.updateMany()             | Modifica vários documentos em uma coleção.                                                                                                              |
| db.collection.watch()                  | Estabelece um fluxo de mudança em uma coleção.                                                                                                          |
| db.collection.validate()               | Executa operações de diagnóstico em uma coleção.                                                                                                        |

### Cursor

| Nome                         | Descrição                                                                                                                                                                                                       |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cursor.addOption()           | Adiciona sinalizadores específicos do protocolo de conexão que modificam o comportamento da consulta.                                                                                                           |
| cursor.allowDiskUse()        | Permite que o MongoDB use arquivos temporários no disco para armazenar dados que excedam o limite de memória do sistema de 100 megabytes durante o processamento de uma operação de classificação por bloqueio. |
| cursor.allowPartialResults() | Permite que operações db.collection.find() em uma coleção fragmentada retornem resultados parciais, em vez de um erro, se um ou mais fragmentos consultados não estiverem disponíveis.                          |
| cursor.batchSize()           | Controla o número de documentos que o MongoDB retornará ao cliente em uma única mensagem de rede.                                                                                                               |
| cursor.close()               | Feche um cursor e libere os recursos do servidor associado.                                                                                                                                                     |
| cursor.isClosed()            | Retorna true se o cursor estiver fechado.                                                                                                                                                                       |
| cursor.collation()           | Especifica o agrupamento do cursor retornado por db.collection.find().                                                                                                                                          |
| cursor.comment()             | Adicione um comentário à consulta para permitir o rastreamento nos registros e na coleção system.profile.                                                                                                       |
| cursor.count()               | Modifica o cursor para retornar o número de documentos no conjunto de resultados, em vez de retornar os documentos em si.                                                                                       |
| cursor.explain()             | Informa sobre o plano de execução da consulta para um cursor.                                                                                                                                                   |
| cursor.forEach()             | Aplica uma função JavaScript para cada documento em um cursor.                                                                                                                                                  |
| cursor.hasNext()             | Retorna "verdadeiro" se o cursor tiver documentos e eles puderem ser iterados.                                                                                                                                  |
| cursor.hint()                | Força o MongoDB a usar um índice específico para uma consulta.                                                                                                                                                  |
| cursor.isExhausted()         | Retorna true se o cursor estiver fechado e não houver objetos restantes no lote.                                                                                                                                |
| cursor.itcount()             | Calcula o total de documentos no cursor através da busca e iteração do conjunto de resultados no lado do cliente.                                                                                               |
| cursor.limit()               | Restringe o tamanho do conjunto de resultados de um cursor.                                                                                                                                                     |
| cursor.map()                 | Aplica uma função em cada documento em um cursor e coleta os resultados em um array.                                                                                                                            |
| cursor.max()                 | Especifica um limite do índice superior exclusivo para um cursor. Para uso com cursor.hint()                                                                                                                    |
| cursor.maxTimeMS()           | Especifica um limite de tempo cumulativo em milissegundos para operações de processamento em um cursor.                                                                                                         |
| cursor.min()                 | Especifica um limite do índice inferior inclusivo para um cursor. Para uso com cursor.hint()                                                                                                                    |
| cursor.next()                | Retorna o próximo documento em um cursor.                                                                                                                                                                       |
| cursor.noCursorTimeout()     | Instrui o servidor para evitar fechar um cursor automaticamente após um período de inatividade.                                                                                                                 |
| cursor.objsLeftInBatch()     | Retorna o número de documentos deixados no lote do cursor atual.                                                                                                                                                |
| cursor.pretty()              | Configura o cursor para exibir os resultados em um formato de leitura fácil.                                                                                                                                    |
| cursor.readConcern()         | Especifica uma referência de leitura para uma operação find().                                                                                                                                                  |
| cursor.readPref()            | Especifica uma preferência de leitura para um cursor para controlar como o cliente direciona as consultas para um conjunto de réplicas.                                                                         |
| cursor.returnKey()           | Modifica o cursor para retornar as chaves de índice em vez dos documentos.                                                                                                                                      |
| cursor.showRecordId()        | Adiciona um campo de ID do mecanismo de armazenamento interno a cada documento retornado pelo cursor.                                                                                                           |
| cursor.size()                | Retorna uma contagem dos documentos no cursor após aplicar os métodos skip() e limit().                                                                                                                         |
| cursor.skip()                | Retorna um cursor que só começa a retornar resultados após pular ou ignorar vários documentos.                                                                                                                  |
| cursor.sort()                | Retorna os resultados seguindo uma ordem específica de classificação.                                                                                                                                           |
| cursor.tailable()            | Marca o cursor como rastreável. Válido somente para cursores acima de coleções limitadas.                                                                                                                       |
| cursor.toArray()             | Retorna um array com todos os documentos obtidos pelo cursor.                                                                                                                                                   |

### Banco de dados

| Nome                               | Descrição                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| db.adminCommand()                  | Executa um comando no banco de dados do admin.                                                                                                                                       |
| db.aggregate()                     | Executa o pipeline admin/diagnóstico que não requer uma collection subjacente.                                                                                                       |
| db.commandHelp()                   | Retorna informações de ajuda para um comando de banco de dados.                                                                                                                      |
| db.createCollection()              | Cria uma nova collection ou uma visualização. Normalmente usado para criar uma capped collection.                                                                                    |
| db.createView()                    | Cria uma visualização.                                                                                                                                                               |
| db.currentOp()                     | Informa as operações atuais em andamento.                                                                                                                                            |
| db.dropDatabase()                  | Remove o banco de dados atual.                                                                                                                                                       |
| db.fsyncLock()                     | Libera as gravações em disco e bloqueia o banco de dados para evitar operações de gravação e auxiliar nas operações de backup. Envolve fsync.                                        |
| db.fsyncUnlock()                   | Permite que gravações continuem em um banco de dados bloqueado com db.fsyncLock().                                                                                                   |
| db.getCollection()                 | Retorna uma coleção ou objeto de visualização. Usado para acessar coleções com nomes inválidos em mongosh.                                                                           |
| db.getCollectionInfos()            | Retorna informações de collection para todas as collections e visualizações no banco de dados atual.                                                                                 |
| db.getCollectionNames()            | Lista todas as collections e visualizações no banco de dados atual.                                                                                                                  |
| db.getLogComponents()              | Retorna os níveis de verbosidade da mensagem de registro.                                                                                                                            |
| db.getMongo()                      | Retorna o objeto de conexão Mongo() para a conexão atual.                                                                                                                            |
| db.getName()                       | Retorna o nome do banco de dados atual.                                                                                                                                              |
| db.getProfilingStatus()            | Retorna um documento que reflete o nível de perfilamento atual e o seu limite.                                                                                                       |
| db.getReplicationInfo()            | Retorna um documento com estatísticas de replicação.                                                                                                                                 |
| db.getSiblingDB()                  | Fornece acesso ao banco de dados especificado.                                                                                                                                       |
| db.hello()                         | Retorna um documento que relata o estado do conjunto de réplicas.                                                                                                                    |
| db.help()                          | Exibe descrições de métodos de objeto db comuns.                                                                                                                                     |
| db.hostInfo()                      | Retorna um documento com informações sobre o sistema em que MongoDB é executado. Envolve hostInfo                                                                                    |
| db.killOp()                        | Termina uma operação especificada.                                                                                                                                                   |
| db.listCommands()                  | Exibe uma lista de comandos comuns de banco de dados.                                                                                                                                |
| db.logout()                        | Obsoleto. Termina uma sessão autenticada.                                                                                                                                            |
| db.printCollectionStats()          | Imprime estatísticas de cada collection. Envolve db.collection.stats().                                                                                                              |
| db.printReplicationInfo()          | Imprime um relatório do status do conjunto de réplicas sob a perspectiva do primário.                                                                                                |
| db.printSecondaryReplicationInfo() | Imprime o status do conjunto de réplicas sob a perspectiva dos secundários.                                                                                                          |
| db.printShardingStatus()           | Imprime um relatório da configuração de fragmentação e as faixas de chunks.                                                                                                          |
| db.resetError()                    | Removido no MongoDB 5.0. Redefine o último status de erro.                                                                                                                           |
| db.rotateCertificates()            | Executa rotação de certificado TLS online. Envoltórios rotateCertificates.                                                                                                           |
| db.runCommand()                    | Executa um comando do banco de dados.                                                                                                                                                |
| db.serverBuildInfo()               | Retorna um documento que exibe os parâmetros de compilação para a instância do mongod. Wraps buildInfo.                                                                              |
| db.serverCmdLineOpts()             | Retorna um documento com informações sobre o tempo de execução usado para iniciar a instância MongoDB. Envolve getCmdLineOpts.                                                       |
| db.serverStatus()                  | Retorna um documento que fornece uma visão geral do estado do processo do banco de dados.                                                                                            |
| db.setLogLevel()                   | Define um único nível de verbosidade de mensagem de registro.                                                                                                                        |
| db.setProfilingLevel()             | Modifica o nível atual do perfil do banco de dados.                                                                                                                                  |
| db.shutdownServer()                | Encerra o processo mongod ou mongos atual de maneira segura e eficiente.                                                                                                             |
| db.stats()                         | Retorna um documento que informa o estado do banco de dados atual.                                                                                                                   |
| db.version()                       | Retorna a versão da instância mongod.                                                                                                                                                |
| db.watch()                         | Abre um cursor de change stream para que um banco de dados informe todas as suas collections fora do sistema system. Não pode ser aberto nos bancos de dados admin, local ou config. |

### Cache do plano de consulta

| Nome	Descrição                                                                                                                                                                  |         |                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------ |
| db.collection.getPlanCache()	Retorna uma interface para acessar o objeto de cache do plano de consulta e os métodos associados do PlanCache para uma coleção.                   |         |                                                  |
| PlanCache.clear()	Limpa todo o cache dos planos de consulta para uma coleção. Acessível por meio do objeto de cache do plano de uma coleção específica                          | ou seja | db.collection.getPlanCache().clear().            |
| PlanCache.clearPlansByQuery()	Limpa os planos de query em cache para a forma de query especificada. Acessível por meio do objeto de cache do plano de uma collection específica | ou seja | db.collection.getPlanCache().clearPlansByQuery() |
| PlanCache.help()	Exibe os métodos disponíveis para o cache do plano de consulta de uma coleção. Acessível por meio do objeto de cache do plano de uma coleção específica        | ou seja | db.collection.getPlanCache().help().             |
| PlanCache.list()	Retorne as informações do cache de planos para uma coleção específica. Acessível por meio do objeto de cache do plano de uma coleção específica                | ou seja | db.collection.getPlanCache().list().             |

### Operação de gravação em massa

| Nome                                      | Descrição                                                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| db.collection.initializeOrderedBulkOp()   | Inicializa um construtor de operações Bulk() para uma lista ordenada de operações.                                 |
| db.collection.initializeUnorderedBulkOp() | Inicializa um construtor de operações Bulk() para uma lista não ordenada de operações.                             |
| Bulk()                                    | Construtor de operações em massa.                                                                                  |
| Bulk.execute()                            | Executa uma série de operações em massa.                                                                           |
| Bulk.find()                               | Especifica a condição de consulta para uma atualização ou uma operação de remoção.                                 |
| Bulk.find.arrayFilters()                  | Define os filtros para selecionar os elementos do array que serão atualizados em uma operação update ou updateOne. |
| Bulk.find.collation()                     | Define o agrupamento para a condição de consulta.                                                                  |
| Bulk.find.delete()                        | Adiciona uma operação de exclusão de vários documentos a uma lista de operações.                                   |
| Bulk.find.deleteOne()                     | Adiciona uma única operação de exclusão de documento a uma lista de operações.                                     |
| Bulk.find.hint()                          | Especifica o índice a ser usado para a operação de atualização/substituição.                                       |
| Bulk.find.remove()                        | Um alias para Bulk.find.delete().                                                                                  |
| Bulk.find.removeOne()                     | Um alias para Bulk.find.deleteOne().                                                                               |
| Bulk.find.replaceOne()                    | Adiciona uma operação de substituição de documento único a uma lista de operações.                                 |
| Bulk.find.updateOne()                     | Adiciona uma única operação de atualização de documento a uma lista de operações.                                  |
| Bulk.find.update()                        | Adiciona uma operação de atualização multi a uma lista de operações.                                               |
| Bulk.find.upsert()                        | Especifica upsert: true para uma operação de atualização.                                                          |
| Bulk.getOperations()                      | Retorna um array de operações de gravação executadas no objeto de operações Bulk().                                |
| Bulk.insert()                             | Adiciona uma operação de inserção a uma lista de operações.                                                        |
| Bulk.toJSON()                             | Retorna um documento JSON que contém o número de operações e lotes no objeto de operações Bulk().                  |
| Bulk.toString()                           | Retorna os resultados de Bulk.toJSON() como uma string.                                                            |

### Gerenciamento de usuários

| Nome                     | Descrição                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| db.auth()                | Autentica um usuário para um banco de dados.                                                                                               |
| db.changeUserPassword()  | Altera a senha de um usuário existente.                                                                                                    |
| db.createUser()          | Cria um novo usuário.                                                                                                                      |
| db.dropUser()            | Remove um único usuário.                                                                                                                   |
| db.dropAllUsers()        | Exclui todos os usuários associados a um banco de dados.                                                                                   |
| db.getUser()             | Retorna informações sobre o usuário especificado.                                                                                          |
| db.getUsers()            | Retorna informações sobre todos os usuários associados a um banco de dados.                                                                |
| db.grantRolesToUser()    | Concede uma função e seus privilégios para um usuário.                                                                                     |
| db.removeUser()          | Preterido. Remove um usuário de um banco de dados.                                                                                         |
| db.revokeRolesFromUser() | Remove uma função de um usuário.                                                                                                           |
| db.updateUser()          | Atualiza os dados do usuário.                                                                                                              |
| passwordPrompt()         | Solicita a senha como uma alternativa para definir senhas diretamente em vários métodos mongosh de autenticação/gerenciamento de usuários. |

### Gerenciamento de funções

| Nome                          | Descrição                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| db.createRole()               | Cria uma função e especifica seus privilégios.                                            |
| db.dropRole()                 | Exclui uma função definida pelo usuário.                                                  |
| db.dropAllRoles()             | Exclui todas as funções definidas pelo usuário associados a um banco de dados.            |
| db.getRole()                  | Retorna informações para a função especificada.                                           |
| db.getRoles()                 | Retorna informações para todas as funções definidas pelo usuário em um banco de dados.    |
| db.grantPrivilegesToRole()    | Atribui privilégios a uma função definida pelo usuário.                                   |
| db.revokePrivilegesFromRole() | Remove os privilégios especificados de uma função definida pelo usuário.                  |
| db.grantRolesToRole()         | Especifica funções a partir dos quais uma função definida pelo usuário herda privilégios. |
| db.revokeRolesFromRole()      | Remove as funções herdadas de uma função.                                                 |
| db.updateRole()               | Atualiza uma função definida pelo usuário.                                                |

### Replicação

| Nome                               | Descrição                                                                                                                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rs.add()                           | Adiciona um membro a um conjunto de réplicas.                                                                                                           |
| rs.addArb()                        | Adiciona um árbitro a um conjunto de réplicas.                                                                                                          |
| rs.conf()                          | Retorna o documento de configuração do conjunto de réplicas.                                                                                            |
| rs.freeze()                        | Impede que o membro atual busque a eleição como primário por um período de tempo.                                                                       |
| rs.help()                          | Retorna textos básicos de ajuda para funções do conjunto de réplicas.                                                                                   |
| rs.initiate()                      | Inicia um novo conjunto de réplicas.                                                                                                                    |
| rs.printReplicationInfo()          | Imprime um relatório formatado do status do conjunto de réplicas da perspectiva do primary.                                                             |
| rs.printSecondaryReplicationInfo() | Imprime um relatório formatado do status do conjunto de réplicas da perspectiva dos secundários.                                                        |
| rs.reconfig()                      | Reconfigura um conjunto de réplicas aplicando um novo objeto de configuração do conjunto de réplicas.                                                   |
| rs.remove()                        | Remove um nó de um conjunto de réplicas.                                                                                                                |
| rs.status()                        | Retorna um documento com informações sobre o estado do conjunto de réplicas.                                                                            |
| rs.stepDown()                      | Transforma o primário atual em secundário, forçando uma eleição.                                                                                        |
| rs.syncFrom()                      | Define o nó específico com o qual este nó do conjunto de réplicas se sincronizará, substituindo a lógica de escolha de destino de sincronização padrão. |

### Fragmentação

| Nome                            | Descrição                                                                                                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sh.abortReshardCollection()     | Aborta uma operação de refragmentação. Novidade na versão 5.0.                                                                                                                                                       |
| sh.addShard()                   | Adiciona um fragmento a um cluster fragmentado.                                                                                                                                                                      |
| sh.addShardTag()                | No MongoDB 3.4, este método é um alias para sh.addShardToZone()                                                                                                                                                      |
| sh.addShardToZone()             | Associa um fragmento a uma zona. Oferece suporte à configuração de zonas em clusters fragmentados.                                                                                                                   |
| sh.addTagRange()                | No MongoDB 3.4, este método é um alias para sh.updateZoneKeyRange()                                                                                                                                                  |
| sh.balancerCollectionStatus()   | Retorna informações sobre se as partes de uma coleção fragmentada estiverem balanceadas.                                                                                                                             |
| sh.commitReshardCollection()    | Força uma operação de refragmentação para bloquear gravações e concluir. Novidade na versão 5.0.                                                                                                                     |
| sh.disableBalancing()           | Desativa o balanceamento em uma única coleção em um banco de dados fragmentado. Não afeta o balanceamento de outras coleções em um cluster fragmentado.                                                              |
| sh.enableBalancing()            | Ativa o processo de balanceamento de coleções fragmentadas se ele foi desativado anteriormente usando sh.disableBalancing().                                                                                         |
| sh.disableAutoMerger()          | Desabilita mesclagens automáticas de partes para um namespace. Novidade na versão 7.0.                                                                                                                               |
| sh.disableAutoSplit()           | Desabilita a divisão automática do cluster fragmentado.                                                                                                                                                              |
| ^^                              | A partir do MongoDB 6.0.3, a divisão automática de chunks não é executada. Isso se deve às melhorias no balanceamento das políticas. Os comandos de divisão automática ainda existem, mas não executam uma operação. |
| sh.enableAutoMerger()           | Habilita mesclagens automáticas de partes para um namespace. Novidade na versão 7.0.                                                                                                                                 |
| sh.enableAutoSplit()            | Habilita a divisão automática para o cluster fragmentado.                                                                                                                                                            |
| ^^                              | A partir do MongoDB 6.0.3, a divisão automática de chunks não é executada. Isso se deve às melhorias no balanceamento das políticas. Os comandos de divisão automática ainda existem, mas não executam uma operação. |
| sh.enableSharding()             | Cria um banco de dados.                                                                                                                                                                                              |
| sh.getBalancerState()           | Retorna um valor booleano indicando se o balanceador está ativo no momento.                                                                                                                                          |
| sh.getShardedDataDistribution() | Retorna informações de distribuição de dados sobre coleções fragmentadas. sh.getShardedDataDistribution() é um assistente de shell para a fase $shardedDataDistribution do pipeline de agregação.                    |
| sh.removeTagRange()             | No MongoDB 3.4, este método é um alias para sh.removeRangeFromZone()                                                                                                                                                 |
| sh.removeRangeFromZone()        | Remove uma associação entre uma faixa de chaves de fragmento e uma zona. Oferece suporte à configuração de zonas em clusters fragmentados.                                                                           |
| sh.help()                       | Retorna o texto de ajuda para os métodos sh.                                                                                                                                                                         |
| sh.isBalancerRunning()          | Retorna um documento descrevendo o status do balanceador.                                                                                                                                                            |
| sh.moveChunk()                  | Migra uma parte em um cluster fragmentado.                                                                                                                                                                           |
| sh.removeShardTag()             | No MongoDB 3.4, este método é um alias para sh.removeShardFromZone()                                                                                                                                                 |
| sh.removeShardFromZone()        | Remove a associação entre um fragmento e uma zona. Use para gerenciar a fragmentação de zonas.                                                                                                                       |
| sh.reshardCollection()          | Inicia uma operação de refragmentação para alterar a chave de fragmento de uma coleção, mudando a distribuição de seus dados. Novidade na versão 5.0.                                                                |
| sh.setBalancerState()           | Habilita ou desabilita o balanceador que migra partes entre fragmentos                                                                                                                                               |
| sh.shardCollection()            | Ativa a fragmentação de uma coleção.                                                                                                                                                                                 |
| sh.splitAt()                    | Divide uma parte existente em duas partes usando um valor específico da chave de fragmento como ponto de divisão.                                                                                                    |
| sh.splitFind()                  | Divide uma parte existente que contém um documento correspondente a uma consulta em duas partes aproximadamente iguais.                                                                                              |
| sh.startAutoMerger()            | Habilita o AutoMerger. Novidade na versão 7.0.                                                                                                                                                                       |
| sh.startBalancer()              | Habilita o balanceador e aguarda o início do balanceamento.                                                                                                                                                          |
| sh.status()                     | Relatórios sobre o status de um agrupamento compartilhado, como db.printShardingStatus().                                                                                                                            |
| sh.stopAutoMerger()             | Desabilita o AutoMerger.Novidade na versão 7.0.                                                                                                                                                                      |
| sh.stopBalancer()               | Desabilita o balanceador e aguarda a conclusão de qualquer balanceamento em andamento.                                                                                                                               |
| sh.waitForBalancer()            | Interno. Aguarde até que o estado do balanceador mude.                                                                                                                                                               |
| sh.waitForBalancerOff()         | Interno. Aguarde até que o balanceador pare de funcionar.                                                                                                                                                            |
| sh.waitForPingChange()          | Interno. Aguarda uma mudança no estado de ping de um dos mongos no cluster fragmentado.                                                                                                                              |
| sh.updateZoneKeyRange()         | Associa uma faixa de chaves de fragmento a uma zona. Oferece suporte à configuração de zonas em clusters fragmentados.                                                                                               |
| convertShardKeyToHashed()       | Retorna o valor hasheado para a entrada.                                                                                                                                                                             |

### Construtores

| Nome                               | Descrição                                                                                       |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| Binary.createFromBase64()          | Cria um objeto binário a partir de um valor base64.                                             |
| Binary.createFromHexString()       | Cria um objeto binário a partir de um valor hexadecimal.                                        |
| BinData()                          | Retorna um objeto de dados binários.                                                            |
| BulkWriteResult()                  | Adiciona um wrapper ao redor do conjunto de resultados de Bulk.execute().                       |
| Date()                             | Cria um objeto de data. Por padrão, cria um objeto de data, incluindo a data atual.             |
| ObjectId()                         | Retorna um ObjectId.                                                                            |
| ObjectId.createFromBase64()        | Cria um ObjectId a partir de um valor base64.                                                   |
| ObjectId.createFromHexString()     | Cria um ObjectId a partir de um valor hexadecimal.                                              |
| ObjectId.getTimestamp()            | Retorna a parte do registro de data/hora de um ObjectId.                                        |
| ObjectId.toString()                | Exibe a representação de string de um ObjectId.                                                 |
| ObjectId.valueOf()                 | Exibe o atributo str de um ObjectId como uma string hexadecimal.                                |
| UUID()                             | Converte uma string hexadecimal de 32 bytes no subtipo UUID BSON.                               |
| WriteResult()                      | Adiciona um wrapper ao redor do conjunto de resultados dos métodos de gravação.                 |
| WriteResult.hasWriteError()        | Retorna um valor booleano especificando se os resultados incluem WriteResult.writeError.        |
| WriteResult.hasWriteConcernError() | Retorna um valor booleano especificando se os resultados incluem WriteResult.writeConcernError. |

### Conexão

| Nome                         | Descrição                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| connect()                    | Conecta-se a uma instância do MongoDB e ao banco de dados específico nesta instância.                                                                                                                  |
| Mongo()                      | Cria um novo objeto de conexão.                                                                                                                                                                        |
| Mongo.getDB()                | Retorna um objeto do banco de dados.                                                                                                                                                                   |
| Mongo.getReadPrefMode()      | Retorna o modo de preferência de leitura atual para a conexão do MongoDB.                                                                                                                              |
| Mongo.getReadPrefTagSet()    | Retorna o conjunto de tags da preferência de leitura para a conexão do MongoDB.                                                                                                                        |
| Mongo.setCausalConsistency() | Habilita ou desabilita a consistência causal no objeto de conexão.                                                                                                                                     |
| Mongo.setReadPref()          | Define a preferência de leitura para a conexão do MongoDB.                                                                                                                                             |
| Mongo.startSession()         | Inicia uma sessão no objeto de conexão.                                                                                                                                                                |
| Mongo.watch()                | Abre um cursor do fluxo de alterações para que uma implantação informe todas as suas coleções não system em todos os seus bancos de dados, exceto a admin interna, local, e os bancos de dados config. |
| Session()                    | O objeto da sessão.                                                                                                                                                                                    |
| SessionOptions()             | O objeto de opções da sessão.                                                                                                                                                                          |

### Criptografia no nível de campo do cliente

!!! info Observação

    Os métodos de criptografia de nível de campo do lado do cliente mongosh exigem uma conexão de banco de dados com a criptografia de nível de campo do lado do cliente ativada. Se a conexão atual do banco de dados não tiver sido iniciada com a criptografia em nível de campo do lado do cliente ativada, faça o seguinte:
    - Use o construtor Mongo() do mongosh para estabelecer uma conexão com as opções necessárias de criptografia de nível de campo no lado do cliente. O método Mongo() é compatível com os seguintes provedores de serviço de gerenciamento de chaves (KMS) para o gerenciamento da chave mestra do cliente (CMK):
      - KMS do Amazon Web Services
      - Cofre de chaves do Azure
      - KMS do Google Cloud Platform
      - Chave gerenciada localmente
    
    ou
    - Utilize as mongosh opções da linha de comando para estabelecer uma conexão com as opções exigidas. As opções de linha de comando são compatíveis apenas com o provedor Amazon Web Services KMS para gerenciamento da chave mestra do cliente.

| Nome                                         | Descrição                                                                                                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| getKeyVault()                                | Retorna o objeto cofre de chaves da conexão do MongoDB atual.                                                         |
| KeyVault.createDataKey()                     | Um alias para KeyVault.createKey().                                                                                   |
| KeyVault.createKey()                         | Cria uma chave de criptografia de dados para uso na criptografia no nível do campo no lado do cliente.                |
| KeyVault.deleteKey()                         | Exclui a chave de criptografia de dados especificada do cofre de chaves.                                              |
| KeyVault.getKey()                            | Recupera a chave de criptografia de dados especificada do cofre de chaves.                                            |
| KeyVault.getKeys()                           | Recupera todas as chaves no cofre de chaves.                                                                          |
| KeyVault.addKeyAlternateName()               | Associa um nome alternativo de uma chave à chave de criptografia de dados especificada.                               |
| KeyVault.addKeyAltName()                     | Um alias para KeyVault.addKeyAlternateName().                                                                         |
| KeyVault.removeKeyAlternateName()            | Remove um nome alternativo de uma chave da chave de criptografia de dados especificada.                               |
| KeyVault.removeKeyAltName()                  | Um alias para KeyVault.removeKeyAlternateName().                                                                      |
| KeyVault.getKeyByAltName()                   | Recupera chaves com o nome alternativo de chave especificado.                                                         |
| KeyVault.rewrapManyDataKey()                 | Descriptografa várias chaves de dados e as criptografa novamente.                                                     |
| getClientEncryption()                        | Retorna o objeto de criptografia do cliente para oferecer suporte à criptografia/descriptografia explícita de campos. |
| ClientEncryption.createEncryptedCollection() | Cria uma coleção com campos criptografados.                                                                           |
| ClientEncryption.encrypt()                   | Criptografa um campo usando uma chave de criptografia de dados especificada e o algoritmo de criptografia.            |
| ClientEncryption.decrypt()                   | Descriptografa um campo usando a chave de criptografia de dados associada e o algoritmo de criptografia.              |

## Operadores

### Consulta e projeção

!!! info Observação

    Para obter detalhes sobre um operador específico, incluindo sintaxe e exemplos, clique no link para a página de referência do operador.

!!! info Dica

    Você pode utilizar operadores ao consultar seus dados com métodos mongosh, a IU do Atlas ou Compass.

> Para comparação de diferentes valores dos tipos de BSON, consulte a ordem de comparação de BSON especificada

| Grupo             | Nome           | Exemplo                                                     | Descrição                                                                                                                                    |
| ----------------- | -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Query-Comparação  | $eq (=)        | `{ key: value}`                                             | Corresponde aos valores que são iguais a um valor especificado.                                                                              |
| Query-Comparação  | $gt (>)        | `{ key: { $gt: value} }`                                    | Corresponde aos valores que são maiores que um valor especificado.                                                                           |
| Query-Comparação  | $gte (>=)      | `{ key: { $gte: value} }`                                   | Corresponde aos valores que são maiores ou iguais a um valor especificado.                                                                   |
| Query-Comparação  | $lt (<)        | `{ key: { $lt: value} }`                                    | Corresponde a valores que são menores do que um valor especificado.                                                                          |
| Query-Comparação  | $lte (<=)      | `{ key: { $lte: value} }`                                   | Corresponde a valores menores ou iguais a um valor especificado.                                                                             |
| Query-Comparação  | $ne (!=)       | `{ key: { $ne: value} }`                                    | Corresponde a todos os valores que não são iguais a um valor especificado.                                                                   |
| Query-Lógica      | $not           | `{ key: { $not: { $exists: true} } }`                       | Inverte o efeito de uma expressão de query e retorna documentos que não correspondem à expressão de query.                                   |
| Query-Elemento    | $exists        | `{ key: { $exists: true} }`                                 | Corresponde a documentos que têm o campo especificado.                                                                                       |
| Query-Comparação  | $in            | `{ key: { $in: [value1, value2, ...]}}`                     | Corresponde a qualquer um dos valores especificados em uma array.                                                                            |
| Query-Comparação  | $nin           | `{ key: { $nin: [value1, value2, ...]}}`                    | Não corresponde a nenhum dos valores especificados em uma array.                                                                             |
| Query-Lógica      | $and           | `{ $and: [{ key: value1}, { key: value2 }]}`                | Une cláusulas de query com um AND lógico e retorna todos os documentos que correspondem às condições de ambas as cláusulas.                  |
| Query-Lógica      | $or            | `{ $or: [{ key: value1}, { key: value2}]}`                  | Une cláusulas de query com um OR lógico e retorna todos os documentos que correspondem às condições de qualquer cláusula.                    |
| Query-Lógica      | $nor           | `{ $nor: [{ key: value1}, { key: value2 }]}`                | Une cláusulas de query com um NOR lógico e retorna todos os documentos que não correspondem a ambas as cláusulas.                            |
| Query-Elemento    | $type          | `{ key: { $type: value}}`                                   | Seleciona documentos se um campo for do tipo especificado.                                                                                   |
| Query-Avaliação   | $expr          |                                                             | Permite o uso de expressões de aggregation dentro da linguagem de query.                                                                     |
| Query-Avaliação   | $jsonSchema    |                                                             | Valide documentos em relação ao esquema JSON fornecido.                                                                                      |
| Query-Avaliação   | $mod           | `{ key: { $mod: [value1, value2]}}`                         | Executa uma operação de módulo no valor de um campo e seleciona documentos com um resultado especificado.                                    |
| Query-Avaliação   | $regex         | `{ key: { $regex: value}}`                                  | Seleciona documentos onde os valores correspondem a uma expressão regular especificada.                                                      |
| Query-Avaliação   | $text          | `{ $text: { $search: "value"}}`                             | Executa pesquisa de texto.                                                                                                                   |
| Query-Avaliação   | ^^             | ^^                                                          | OBSERVAÇÃO                                                                                                                                   |
| Query-Avaliação   | ^^             | ^^                                                          | $textO Atlas Search.                                                                                                                         |
| Query-Avaliação   | $where         | `{ $where: "javascript code"}`                              | Corresponde a documentos que satisfazem uma expressão JavaScript.                                                                            |
| Query-Geoespacial | $geoIntersects | `{ key: { $geoIntersects: { $geometry: value}}}`            | Seleciona geometrias que interseccionam com uma geometria GeoJSON. O índice 2dsphere suporta $geoIntersects.                                 |
| Query-Geoespacial | $geoWithin     | `{ key: { $geoWithin: { $geometry: value}}}`                | Seleciona geometrias dentro de uma geometria GeoJSON delimitadora. Os índices 2dsphere e 2d suportam $geoWithin.                             |
| Query-Geoespacial | $near          | `{ key: { $near: value}}`                                   | Retorna objetos geoespaciais próximos a um ponto. Requer um índice geoespacial. Os índices 2dsphere e 2d suportam $near.                     |
| Query-Geoespacial | $nearSphere    | `{ key: { $nearSphere: value}}`                             | Retorna objetos geoespaciais próximos a um ponto em uma esfera. Requer um índice geoespacial. Os índices 2dsphere e 2d suportam $nearSphere. |
| Query-Array       | $all           | `{ key: { $all: [value1, value2, ...]}}`                    | Corresponde a arrays que contêm todos os elementos especificados na query.                                                                   |
| Query-Array       | $elemMatch     | `{ key: { $elemMatch: { key: value}} }`                     | Seleciona documentos se o elemento no campo de array corresponder a todas as condições $elemMatch especificadas.                             |
| Query-Array       | $size          | `{ key: { $size: value}}`                                   | Seleciona documentos se o campo de array tiver um tamanho especificado.                                                                      |
| Query-Bit a bit   | $bitsAllClear  |                                                             | Corresponde aos valores numéricos ou binários em que todos os bits em um conjunto de posições de bit têm um valor de 0.                      |
| Query-Bit a bit   | $bitsAllSet    |                                                             | Corresponde aos valores numéricos ou binários em que todos os bits em um conjunto de posições de bit têm um valor de 1.                      |
| Query-Bit a bit   | $bitsAnyClear  |                                                             | Corresponde aos valores numéricos ou binários em que qualquer bit de um conjunto de posições de bit tem um valor de 0.                       |
| Query-Bit a bit   | $bitsAnySet    |                                                             | Corresponde aos valores numéricos ou binários em que qualquer bit de um conjunto de posições de bit tem um valor de 1.                       |
|                   | maxDistance    | `{ key: { $maxDistance: value}}`                            |                                                                                                                                              |
|                   | minDistance    | `{ key: { $minDistance: value}}`                            |                                                                                                                                              |
|                   | geoNear        | `{ key: { $geoNear: { near: value, distance}}}`             |                                                                                                                                              |
|                   | within         | `{ key: { $within: { $center: [[value1,]]}}}`               |                                                                                                                                              |
|                   | centerSphere   | `{ key: { $centerSphere: [[value1,...]]}}`                  |                                                                                                                                              |
|                   | center         | `{ key: { $center: [[value1, value2], value3]}}`            |                                                                                                                                              |
|                   | box            | `{ key: { $box: [[value1, value2], [alue1, value2]]}}`      |                                                                                                                                              |
|                   | polygon        | `{ key: { $polygon: [[value1, value2], [value1, value2]]}}` |                                                                                                                                              |
|                   | geometry       | `{ key: { $geometry: value}}`                               |                                                                                                                                              |
| Projeção          | $              |                                                             | Projeta o primeiro elemento em uma array que corresponde à condição de query.                                                                |
| Projeção          | $elemMatch     |                                                             | Projeta o primeiro elemento em uma array que corresponde à condição $elemMatch especificada.                                                 |
| Projeção          | $meta          |                                                             | Projeta a pontuação do documento atribuída durante a operação $text .                                                                        |
| Projeção          | ^^             |                                                             | OBSERVAÇÃO                                                                                                                                   |
| Projeção          | ^^             |                                                             | $textO Atlas Sear ch.                                                                                                                        |
| Projeção          | $slice         |                                                             | Limita o número de elementos projetados de uma array. Suporta pular e limitar fatias.                                                        |
| Diversos          | $comment       |                                                             | Adiciona um comentário a um predicado de query.                                                                                              |
| Diversos          | $rand          |                                                             | Gera uma flutuação aleatória entre 0 e 1.                                                                                                    |

### Atualização

Os seguintes modificadores estão disponíveis para utilizar em operações de atualização, por exemplo, em db.collection.updateMany() e db.collection.findAndModify().


!!!info Sintaxe

    Especifique a expressão do operador em um documento do formato:

    ```json
    {
    <operator1>: { <field1>: <value1>, ... },
    <operator2>: { <field2>: <value2>, ... },
    ...
    }
    ```

!!!info Observação
    Para obter detalhes sobre um operador específico, incluindo sintaxe e exemplos, clique no link para a página de referência do operador.

!!!info Comportamento
    A partir do MongoDB 5.0, os operadores de atualização processam campos de documento com nomes baseados em string em ordem lexicográfica. Os campos com nomes numéricos são processados em ordem numérica.

    Considere este exemplo de comando $set:

    ```json
    { $set: { "a.2": <new value>, "a.10": <new value>, } }
    ```

    No MongoDB 5.0 e versões mais recentes, "a.2" é processado antes de "a.10" porque 2 vem antes de 10 em ordem numérica.

| Grupo               | Nome            | Descrição                                                                                                                                                                        |
| ------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Campos              | $currentDate    | Define o valor de um campo para a data atual, como data ou carimbo de data/hora.                                                                                                 |
| Campos              | $inc            | Aumenta o valor do campo no valor especificado.                                                                                                                                  |
| Campos              | $min            | Somente atualiza o campo se o valor especificado for menor que o valor de campo existente.                                                                                       |
| Campos              | $max            | Somente atualiza o campo se o valor especificado for maior que o valor de campo existente.                                                                                       |
| Campos              | $mul            | Multiplica o valor do campo pelo valor especificado.                                                                                                                             |
| Campos              | $rename         | Renomeia um campo.                                                                                                                                                               |
| Campos              | $set            | Define o valor de um campo em um documento.                                                                                                                                      |
| Campos              | $setOnInsert    | Define o valor de um campo se uma atualização resultar em uma inserção de um documento. Não tem efeito sobre as operações de atualização que modificam os documentos existentes. |
| Campos              | $unset          | Remove o campo especificado de um documento.                                                                                                                                     |
| Array-Operadores    | $               | Atua como um espaço reservado para atualizar o primeiro elemento que corresponde à condição de query.                                                                            |
| Array-Operadores    | $[]             | Atua como um espaço reservado para atualizar todos os elementos em uma array para os documentos que correspondem à condição de query.                                            |
| Array-Operadores    | $[<identifier>] | Atua como um espaço reservado para atualizar todos os elementos que correspondem à condição arrayFilters para os documentos que correspondem à condição de query.                |
| Array-Operadores    | $addToSet       | Adiciona elementos a uma array somente se eles ainda não existirem no conjunto.                                                                                                  |
| Array-Operadores    | $pop            | Remove o primeiro ou último item de uma array.                                                                                                                                   |
| Array-Operadores    | $pull           | Remove todos os elementos de array que correspondem a uma query especificada.                                                                                                    |
| Array-Operadores    | $pullAll        | Remove todos os valores correspondentes de uma array.                                                                                                                            |
| Array-Operadores    | $push           | Adiciona um item a uma array.                                                                                                                                                    |
| Array-Operadores    | $pushAll        | Adiciona todos os `<values>` ao `<field>` do `<doc>`                                                                                                                             |
| Array-Modificadores | $each           | Modifica os operadores $push e $addToSet para acrescentar vários itens para atualizações de array.                                                                               |
| Array-Modificadores | $position       | Modifica o operador $push para especificar a posição na array para adicionar elementos.                                                                                          |
| Array-Modificadores | $slice          | Modifica o operador $push para limitar o tamanho das arrays atualizadas.                                                                                                         |
| Array-Modificadores | $sort           | Modifica o operador $push para reordenar documentos armazenados em uma array.                                                                                                    |
| Bit a bit           | $bit            | Executa atualizações bitwise AND, OR e XOR de valores inteiros.                                                                                                                  |

## Aplicação CRUD

<https://www.mongodb.com/pt-br/docs/manual/crud/>

> db.`collection`[^collection].`method`(`args`)

Create
: insertOne(*doc[^doc], options[^options], callback[^callback]) [link](https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne)
  > **options**: bypassDocumentValidation, forceServerObjectId, w, wtimeout, j, writeConcern, checkKeys, serializeFunctions, ignoreUndefined, session
: insertMany(*doc[][^doc], options[^options], callback[^callback]) [link](https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertMany)
  > **options**: bypassDocumentValidation, ordere, forceServerObjectId, w, wtimeout, j, writeConcern, checkKeys, serializeFunctions, ignoreUndefined, session

Read
: findOne(query[^query], projection, options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.findOne/)
: find(query[^query], projection, options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find)

Update
: updateOne(*filter[^query], *update[^update], options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne)
: updateMany(*filter[^query], *update[^update], options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.updateMany/#mongodb-method-db.collection.updateMany)
: findAndModify(*doc[^doc]) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.findAndModify/#mongodb-method-db.collection.findAndModify)
: findOneAndUpdate(*filter[^query], *update[^update], options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.findOneAndUpdate/#mongodb-method-db.collection.findOneAndUpdate)
: findOneAndReplace(*filter[^query], *replacement[^update], options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.findOneAndReplace/#mongodb-method-db.collection.findOneAndReplace)
: bulkWrite() [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.bulkWrite/#mongodb-method-db.collection.bulkWrite)

Delete
: deleteOne(filter[^query], options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.deleteOne/)
: deleteMany(filter[^query], options) [link](https://www.mongodb.com/pt-br/docs/manual/reference/method/db.collection.deleteMany/)

```javascript
# MongoDB
use test
db.Carros.insertMany([
    { 
        marca: "Toyota", 
        modelos: [
            { 
                nome: "Corolla", 
                anos: [
                    { ano: 2020, cor: "Preto", preco: 80000 },
                    { ano: 2019, cor: "Branco", preco: 78000 }
                ]
            },
            { 
                nome: "Camry", 
                anos: [
                    { ano: 2019, cor: "Branco", preco: 95000 },
                    { ano: 2018, cor: "Preto", preco: 90000 }
                ]
            }
        ]
    },
    { 
        marca: "Honda", 
        modelos: [
            { 
                nome: "Civic", 
                anos: [
                    { ano: 2019, cor: "Branco", preco: 85000 },
                    { ano: 2018, cor: "Preto", preco: 80000 }
                ]
            },
            { 
                nome: "Accord", 
                anos: [
                    { ano: 2018, cor: "Prata", preco: 90000 },
                    { ano: 2017, cor: "Azul", preco: 87000 }
                ]
            }
        ]
    },
    { 
        marca: "Ford", 
        modelos: [
            { 
                nome: "Focus", 
                anos: [
                    { ano: 2018, cor: "Prata", preco: 75000 },
                    { ano: 2017, cor: "Branco", preco: 72000 }
                ]
            },
            { 
                nome: "Fusion", 
                anos: [
                    { ano: 2020, cor: "Preto", preco: 100000 },
                    { ano: 2019, cor: "Cinza", preco: 95000 }
                ]
            }
        ]
    },
    { 
        marca: "Chevrolet", 
        modelos: [
            { 
                nome: "Cruze", 
                anos: [
                    { ano: 2020, cor: "Azul", preco: 90000 },
                    { ano: 2019, cor: "Branco", preco: 87000 }
                ]
            },
            { 
                nome: "Malibu", 
                anos: [
                    { ano: 2019, cor: "Branco", preco: 95000 },
                    { ano: 2018, cor: "Preto", preco: 92000 }
                ]
            }
        ]
    },
    { 
        marca: "Volkswagen", 
        modelos: [
            { 
                nome: "Jetta", 
                anos: [
                    { ano: 2017, cor: "Vermelho", preco: 70000 },
                    { ano: 2016, cor: "Prata", preco: 67000 }
                ]
            },
            { 
                nome: "Passat", 
                anos: [
                    { ano: 2020, cor: "Preto", preco: 110000 },
                    { ano: 2019, cor: "Cinza", preco: 105000 }
                ]
            }
        ]
    },
    { 
        marca: "Hyundai", 
        modelos: [
            { 
                nome: "Elantra", 
                anos: [
                    { ano: 2019, cor: "Cinza", preco: 82000 },
                    { ano: 2018, cor: "Azul", preco: 78000 }
                ]
            },
            { 
                nome: "Sonata", 
                anos: [
                    { ano: 2020, cor: "Azul", preco: 95000 },
                    { ano: 2019, cor: "Branco", preco: 91000 }
                ]
            }
        ]
    },
    { 
        marca: "Nissan", 
        modelos: [
            { 
                nome: "Sentra", 
                anos: [
                    { ano: 2020, cor: "Branco", preco: 78000 },
                    { ano: 2019, cor: "Prata", preco: 75000 }
                ]
            },
            { 
                nome: "Altima", 
                anos: [
                    { ano: 2019, cor: "Prata", preco: 90000 },
                    { ano: 2018, cor: "Preto", preco: 87000 }
                ]
            }
        ]
    },
    { 
        marca: "Kia", 
        modelos: [
            { 
                nome: "Cerato", 
                anos: [
                    { ano: 2018, cor: "Preto", preco: 76000 },
                    { ano: 2017, cor: "Branco", preco: 73000 }
                ]
            },
            { 
                nome: "Optima", 
                anos: [
                    { ano: 2020, cor: "Branco", preco: 95000 },
                    { ano: 2019, cor: "Preto", preco: 92000 }
                ]
            }
        ]
    },
    { 
        marca: "BMW", 
        modelos: [
            { 
                nome: "320i", 
                anos: [
                    { ano: 2021, cor: "Branco", preco: 150000 },
                    { ano: 2020, cor: "Preto", preco: 145000 }
                ]
            },
            { 
                nome: "X5", 
                anos: [
                    { ano: 2020, cor: "Preto", preco: 250000 },
                    { ano: 2019, cor: "Branco", preco: 240000 }
                ]
            }
        ]
    },
    { 
        marca: "Mercedes-Benz", 
        modelos: [
            { 
                nome: "C180", 
                anos: [
                    { ano: 2018, cor: "Preto", preco: 140000 },
                    { ano: 2017, cor: "Prata", preco: 135000 }
                ]
            },
            { 
                nome: "E250", 
                anos: [
                    { ano: 2019, cor: "Branco", preco: 160000 },
                    { ano: 2018, cor: "Preto", preco: 155000 }
                ]
            }
        ]
    }
])
```

## Find

db.`collection`[^collection].{find|findOne}(query[^query])
: .sort({`<field>`[:`<1 or -1>`]})
: .skip(`<number of documents>`)
: .limit(`<number of documents>`)
: .count([true])
: .pretty()
: .explain()
: .hint(`<index>`)
: .maxScan(`<number of documents>`)
: .maxTimeMS(`<milliseconds>`)
: .snapshot()
: .tailable()
: .noCursorTimeout()
: .allowDiskUse()
: .batchSize(`<number of documents>`)
: .comment(`<comment>`)
: .cursorType("tailable" | "amart" | "exhaust" | "
: .readPreference("primary" | "primaryPreferred" | "secondary" | "secondaryPreferred
: .forEach(`<function>`)
: .map(`<function>`)
: .reduce(`<function>`)
: .out(`collection`)
: awaitData()
: max()
: min()
: oplogReplay()
: returnKey()
: showRecordId()

## Functions

!!!info Criar function

    ```javascript
    use sua_base_de_dados

    db.system.js.save({
        _id: "somaDoisNumeros",
        value: function (a, b) {
            return a + b;
        }
    });

    db.system.js.save({
        _id: "verificaUsuarioExiste",
        value: function (email) {
            return db.Usuarios.findOne({ email: email }) !== null;
        }
    });
    ```
!!!info Chamar function

    ```javascript
    db.eval("somaDoisNumeros(5, 3)");
    db.eval("verificaUsuarioExiste('joao.silva@example.com')");
    db.Usuarios.find({ $where: "verificaUsuarioExiste(this.email)" });

    db.Usuarios.aggregate([
        {
            $project: {
                nome: 1,
                email: 1,
                emailValido: {
                    $function: {
                        body: function(email) {
                            return email.includes('@');
                        },
                        args: ["$email"],
                        lang: "js"
                    }
                }
            }
        }
    ]);

    ```

    ```javascript
    db.runCommand(
        {
        update: <collection>,
        updates: [
            {
                q: <query>,
                u: <document or pipeline>,
                c: <document>, // Added in MongoDB 5.0
                upsert: <boolean>,
                multi: <boolean>,
                collation: <document>,
                arrayFilters: <array>,
                hint: <document|string>
            },
            ...
        ],
        ordered: <boolean>,
        maxTimeMS: <integer>,
        writeConcern: { <write concern> },
        bypassDocumentValidation: <boolean>,
        comment: <any>,
        let: <document> // Added in MongoDB 5.0
        }
    )


    db.ims.insert({
        "FnSubSe	db.ims.insert({
		"FnSubSetId": 12,
		"FnSubSet": "gggggg",
		"FnSets": [
			{
				"FnSetId": 113,
				"FnSet": "gggggg",
				"FnSetDescription": "gggggg",
				"FnSetType": "gggggg",
				"Versions": [
					"1.0.0"
				],
				"Intefaces": [
					{
						"Interface": "gggggg",
						"Periodicidades": [
							{
								"Periodicidade": 5,
								"Values":[
									{
										"date": ISODate(),
										"Value": 333
									}
								]
							}
						]
					}
				]
			},{
				"FnSetId": 114,
				"FnSet": "hhhhh",
				"FnSetDescription": "hhhhh",
				"FnSetType": "hhhhh",
				"Versions": [
					"1.0.0"
				],
				"Intefaces": [
					{
						"Interface": "hhhhh",
						"Periodicidades": [
							{
								"Periodicidade": 5,
								"Values":[
									{
										"date": ISODate(),
										"Value": 5555
									}
								]
							}
						]
					}
				]
			}
		]
	});
    db.ims.createIndex(
        {
            "FnSetId": 1,
            "FnSubSetId": 1,
            "FnSets.Intefaces.Interface": 1,
            "FnSets.Intefaces.Periodicidades.Periodicidade": 1,
            "FnSets.Intefaces.Periodicidades.Values.date": 1
        },
        {
            unique: true,
            name: "unique_index_ims"  // Nome curto para o índice
        }
    );

	db.ims.aggregate([
		{ $unwind: "$FnSets" },
		{ $unwind: "$FnSets.Intefaces" },
		{ $unwind: "$FnSets.Intefaces.Periodicidades" },
		{ $unwind: "$FnSets.Intefaces.Periodicidades.Values" },
		{
			$project: {
				_id: 0,
				FnSetId: "$FnSets.FnSetId",
				FnSubSetId: "$FnSubSetId",
				Interface: "$FnSets.Intefaces.Interface",
				Periodicidades: "$FnSets.Intefaces.Periodicidades.Periodicidade",
				date: "$FnSets.Intefaces.Periodicidades.Values.date",
				Value: "$FnSets.Intefaces.Periodicidades.Values.Value"
			}
		}
	]);
	const cursor = db.ims.find();
	const result = [];

	cursor.forEach(doc => {
		const FnSubSetId = doc.FnSubSetId;

		doc.FnSets.forEach(FnSet => {
			const FnSetId = FnSet.FnSetId;

			FnSet.Intefaces.forEach(interface => {
				const InterfaceName = interface.Interface;

				interface.Periodicidades.forEach(periodicidade => {
					periodicidade.Values.forEach(value => {
						result.push({
							FnSetId: FnSetId,
							FnSubSetId: FnSubSetId,
							Interface: InterfaceName,
							date: value.date,
							Value: value.Value
						});
					});
				});
			});
		});
	});

	printjson(result);




    db.familia.updateOne(
        { "Nome": "Felipe", "Endereco.Coordenadas": { $exists: true } },
        {
            $set: {
                "Endereco.Coordenadas": {
                    "Latitude": 123.11111111,
                    "Longitude": 123.2341234
                }
            }
        },
        { upsert: true }
    );

    ```

[^collection]: `collection` é como uma tabela do banco SQL

[^query]: `query` or `filter` is a JSON where. É do tipo `object`

    - Os critérios de seleção para a atualização. Os mesmos seletores de consulta que no método find() estão disponíveis.
    - Especifique um documento vazio { } para atualizar o primeiro documento retornado na coleção.

[^doc]: `Doc`=Document in JSON (Não é String) é do tipo `object`

[^options]: `options` é do tipo `object` é um objeto com as seguintes propriedades:

    | Options Object           | Type                   | Default | Required | Description                                                                                                               |
    | ------------------------ | ---------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
    | bypassDocumentValidation | boolean                | FALSE   | No       | Allow driver to bypass schema validation in MongoDB 3.2 or higher.                                                        |
    | ordered                  | boolean                | TRUE    | No       | If true when an insert fails don't execute the remaining writes. If false continue with remaining inserts when one fails. |
    | forceServerObjectId      | boolean                | FALSE   | No       | Force server to assign _id values instead of driver.                                                                      |
    | w                        | number \| string       |         | No       | Deprecated The write concern. Use writeConcern instead.                                                                   |
    | wtimeout                 | number                 |         | No       | Deprecated The write concern timeout. Use writeConcern instead.                                                           |
    | j                        | boolean                | FALSE   | No       | Deprecated Specify a journal write concern. Use writeConcern instead.                                                     |
    | writeConcern             | object \| WriteConcern |         | No       | Specify write concern settings.                                                                                           |
    | checkKeys                | boolean                | TRUE    | No       | If true, will throw if bson documents start with $ or include a . in any key value                                        |
    | serializeFunctions       | boolean                | FALSE   | No       | Serialize functions on any object.                                                                                        |
    | ignoreUndefined          | boolean                | FALSE   | No       | Specify if the BSON serializer should ignore undefined fields.                                                            |
    | session                  | ClientSession          |         | No       | optional session to use for this operation                                                                                |

[^callback]: `callback` is `Collection-insertOneWriteOpCallback` type. The command result callback

[^update]: update `documento ou pipeline`

    - As modificações a serem aplicadas. Podem ser uma dos seguintes:
    - Atualizar documento
        - Contém somente atualizar expressões do operador.
        - Para obter mais informações, consulte Atualize com um documento de expressões do operador de atualização
    - Aggregation pipeline
        - Contém apenas os seguintes estágios de agregação:
        - $addFields e seu apelido $set
        - $project e seu apelido $unset
        - $replaceRoot e seu nome alternativo $replaceWith.
        - Para mais informações, consulte Atualize com um pipeline de agregação.
        - Para atualizar com um documento de substituição, consulte db.collection.replaceOne().

