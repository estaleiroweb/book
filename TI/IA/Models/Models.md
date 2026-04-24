# Modelos/Algorítimos de Inteligência Artificial

## 1. Modelos Baseados em Aprendizado de Máquina (ML)

- **Aprendizado Supervisionado**: Algoritmos que aprendem a partir de dados rotulados (entrada-saída conhecidos). Dados Rotulados
  - Classificação
    - **Regressão Logística**:
      - **Definição**: Modelo estatístico para prever probabilidades binárias usando uma função logística.
      - **Exemplo**: Detectar spam em e-mails.
    - **SVM - Support Vector Machine (Máquinas de Vetores de Suporte)**:
      - **Definição**: Encontra um hiperplano ótimo para separar classes. Separa classes usando hiperplanos em espaços de alta dimensão.
      - **Exemplo**: Classificação de textos ou imagens (e.g., reconhecer dígitos manuscritos).
      - Modelos:
        - **Kernel Trick**: Separação Avançada
        - **One-Class SVM**:
          - **Funcionamento**: Aprende a fronteira de decisão dos dados "normais" e classifica outliers como fora dela.
          - **Aplicação**: Detecção de falhas em equipamentos industriais.
    - **Árvores de Decisão**:
      - **Definição**: Divide dados em nós hierárquicos com base em regras.
      - **Exemplo**: Avaliar risco de crédito.
    - **Random Forest**:
      - **Definição**: Combina múltiplas árvores de decisão para reduzir overfitting.
      - **Exemplo**: Diagnóstico médico (e.g., identificar doenças).
    - **K-NN (K-Vizinhos Mais Próximos)/KNN (K-Nearest Neighbors)**:
      - **Definição**: Classifica pontos com base na maioria dos vizinhos mais próximos.
      - **Exemplo**: Recomendar filmes baseado em preferências similares.
      - **Ideia**: Pontos com distâncias anormalmente altas para seus k vizinhos são outliers.
      - **Fórmula**:
        $$
        \text{Outlier Score} = \frac{1}{k} \sum_{i=1}^k \text{dist}(x, \text{vizinho}_i)
        $$
    - **Naive Bayes**:
      - **Definição**: Usa probabilidade condicional com suposição de independência entre features.
      - **Exemplo**: Filtragem de spam.
  - Regressão: usar [Correlação de Pearson](../Concepts/Pearson.md)
    - **Regressão Linear**:
      - **Definição**: Modela a relação linear entre variáveis independentes e dependentes.
      - **Exemplo**: Prever preços de imóveis.
    - **Regressão Polinomial**:
      - **Definição**: Estende a regressão linear para relações não lineares com termos polinomiais.
      - **Exemplo**: Prever crescimento populacional.
    - **Ridge/Lasso/ElasticNet**:
      - **Definição**: Técnicas de regularização para evitar overfitting (L1, L2 ou combinação).
      - **Exemplo**: Prever vendas com muitas variáveis correlacionadas.
  - Ensemble Learning
    - **Gradient Boosting (XGBoost, LightGBM)**:
      - **Definição**: Combina modelos fracos sequencialmente para corrigir/minimizar erros.
      - **Exemplo**: Competições de ML (Kaggle) ou previsão de cliques em anúncios.
    - **AdaBoost**:
      - **Definição**: Ajusta pesos de modelos base/fracos para focar em exemplos difíceis/erros anteriores.
      - **Exemplo**: Detecção de fraude, de objetos em imagens.
- **Aprendizado Não Supervisionado**: Algoritmos que encontram padrões em dados não rotulados.
  - Clustering
    - **K-Means**:
      - **Definição**: Agrupa dados em *k* clusters minimizando a variância intra-cluster.
      - **Exemplo**: Segmentação de clientes.
    - **DBSCAN**:
      - **Definição**: Identifica clusters baseados em densidade e detecta outliers.
      - **Funcionamento**: Identifica outliers como pontos que não pertencem a clusters densos.
      - **Vantagem**: Não requer pré-definição do número de clusters.
      - **Exemplo**: Análise de tráfego urbano, etecção de anomalias em sensores IoT.
    - **Hierarchical Clustering**:
      - **Definição**: Cria uma hierarquia de clusters (aglomerativo/divisivo).
      - **Exemplo**: Classificação de espécies biológicas.
  - Redução de Dimensionalidade
    - **PCA (Análise de Componentes Principais)**:
      - **Definição**: Projeta dados em componentes ortogonais de maior variância.
      - **Exemplo**: Compressão de imagens.
    - **t-SNE**:
      - **Definição**: Reduz dimensões preservando relações locais entre pontos.
      - **Exemplo**: Visualização de embeddings de palavras.
  - Regras de Associação
    - **Apriori**:
      - **Definição**: Encontra itens frequentes em transações.
      - **Exemplo**: Recomendar produtos em supermercados (e.g., "quem compra A também compra B").
- **Aprendizado Semi-Supervisionado**: Combina dados rotulados e não rotulados.
  - **Label Propagation**:
    - **Definição**: Propaga rótulos para dados não rotulados baseado em similaridade.
    - **Exemplo**: Classificação de documentos com poucos rótulos.
- **Aprendizado por Reforço**: Agente aprende interagindo com um ambiente para maximizar recompensas. Problemas complexos.
  - **Q-Learning**:
    - **Definição**: Aprende uma política ótima via tabela Q (estado-ação).
    - **Exemplo**: Jogos como *GridWorld*.
  - **Deep Q-Network (DQN)**:
    - **Definição**: Combina Q-Learning com redes neurais para espaços complexos.
    - **Exemplo**: Jogar Atari (e.g., *Breakout*).
- **Deep Learning**: Subcampo do ML baseado em redes neurais profundas.
  - Redes Neurais
    - FNN (FeedFoward): Segue um único fluxo da camada de entrada, camadas ocultas e camada de saída. Sem ciclo ou repetição
    - CNN (Redes Convolucionais): Reconhecer padrões. Aplicável principalemtne em imagens
    - RNN (Recorrentes)/LSTM/GRU: Aplicável em séries temporais ou sequenciais
  - Arquiteturas Especiais
    - RESNET (Residuais) e Transformers: Processamento de Linguagem Natural
    - **Transformers**:
    - **GANs (Redes Generativas Adversariais)**:
- **Outros Algoritmos**:
  - **Detecção de Anomalias**:
    - **Isolation Forest**: Identifica outliers isolando observações.
    - **Funcionamento**: Isola outliers usando árvores de decisão (pontos anômalos são isolados mais rápido).
    - **Vantagem**: Eficiente para dados de alta dimensão.
    - **Exemplo**: Detectar transações fraudulentas.
  - **Séries Temporais**:
    - **ARIMA**: Modela tendências e sazonalidades.
    - **Exemplo**: Previsão de demanda energética.
  - **Otimização**:
    - **Algoritmos Genéticos**: Inspirados na evolução para encontrar soluções.
    - **Exemplo**: Projeto de circuitos eletrônicos.
  - **Algoritmos Bioinspirados**: Técnicas inspiradas em mecanismos naturais, como evolução, comportamentos de espécies ou processos biológicos.  
    - **Algoritmos Genéticos (GA)**:  
      - **Definição**: Simula a seleção natural e evolução (crossover, mutação, seleção) para otimizar soluções.  
      - **Exemplo**: Otimização de rotas logísticas ou design de aerofólios.  
    - **Particle Swarm Optimization (PSO)**:  
      - **Definição**: Inspirado no movimento de bandos de pássaros ou cardumes; partículas "voam" no espaço de busca seguindo a melhor solução do grupo.  
      - **Exemplo**: Calibração de parâmetros em redes neurais.  
    - **Ant Colony Optimization (ACO)**:  
      - **Definição**: Baseado no comportamento de formigas buscando caminhos curtos via feromônios.  
      - **Exemplo**: Otimização de rotas em redes de transporte (e.g., GPS).  
    - **Artificial Bee Colony (ABC)**:  
      - **Definição**: Simula a busca por néctar de abelhas (operárias, exploradoras e observadoras).  
      - **Exemplo**: Escalonamento de tarefas em sistemas computacionais.  
    - **Firefly Algorithm**:  
      - **Definição**: Baseado no brilho e atração entre vaga-lumes para explorar espaços de solução.  
      - **Exemplo**: Otimização de funções multimodais complexas.  
    - **Bacterial Foraging Optimization (BFO)**:  
      - **Definição**: Inspirado na quimiotaxia de bactérias (movimento para nutrientes).  
      - **Exemplo**: Otimização de controle em sistemas industriais.  
    - **Cuckoo Search**:  
      - **Definição**: Baseado no parasitismo de ninho de cucos e voos de Lévy.  
      - **Exemplo**: Otimização de redes de energia elétrica.  
    - **Bat Algorithm**:  
      - **Definição**: Usa a ecolocalização de morcegos para busca de soluções.  
      - **Exemplo**: Segmentação de imagens médicas.  

## 2. Modelos Baseados em Redes Neurais

- FeedFoward (FNN): Segue um único fluxo da camada de entrada, camadas ocultas e camada de saída. Sem ciclo ou repetição
- Redes Neurais Artificiais (ANNs)
  - **MLP (Multilayer Perceptron)**:
    - **Definição**: Redes densamente conectadas para problemas não lineares.
    - **Exemplo**: Previsão de séries temporais (demanda de energia).
- Redes Convolucionais (CNNs - Convolutional Neural Network)
  - **LeNet, AlexNet, ResNet**:
    - **Definição**: Extraem features hierárquicas de imagens usando convoluções (camadas convolucionais).
    - **Exemplo**: Reconhecer padrões. Reconhecimento facial (ResNet) ou autenticação por impressão digital.
  - **YOLO (You Only Look Once)**:
    - **Definição**: Detecta objetos em tempo real em uma única passagem.
    - **Exemplo**: Carros autônomos (detecção de pedestres).
- Redes Recorrentes (RNNs): Aplicável em séries temporais ou sequenciais. Aprende com os dados anteriores
  - **LSTM/GRU**:
    - **Definição**: Processam sequências com memória de longo prazo (e.g., texto, séries temporais).
    - **Exemplo**: Tradução automática (Google Translate) ou previsão do preço de ações.
- Transformers: Usa atenção para processar contextos globais.
  - **BERT (Bidirectional Encoder Representations)**:
    - **Definição**: Modela contexto bidirecional em textos usando atenção.
    - **Exemplo**: Análise de sentimentos ou busca semântica.
  - **GPT (Generative Pre-trained Transformer)**:
    - **Definição**: Gera texto autoregressivo com atenção a contextos longos.
    - **Exemplo**: ChatGPT (conversas) ou criação de conteúdo automatizado.
  - **Vision Transformer (ViT)**:
    - **Definição**: Aplica transformers a imagens divididas em patches.
    - **Exemplo**: Classificação de imagens médicas (raios-X).
- RESNET (Residuais): Processamento de Linguagem Natural

## 3. Modelos de Processamento de Linguagem Natural (NLP)

- **Word2Vec/GloVe**:
  - **Definição**: Embeddings de palavras baseados em contexto local.
  - **Exemplo**: Recomendação de produtos por similaridade semântica.
- **T5 (Text-to-Text Transfer Transformer)**:
  - **Definição**: Converte todas as tarefas de NLP em formato texto-para-texto.
  - **Exemplo**: Resumo de textos ou resposta a perguntas.
- **PaLM (Pathways Language Model)**:
  - **Definição**: Modelo de linguagem de grande escala com treinamento multimodal.
  - **Exemplo**: Resolução de problemas matemáticos complexos.

## 4. Modelos Generativos

- **GANs (Redes Generativas Adversariais)**:
  - **Definição**: Duas redes (geradora e discriminadora) competem para gerar dados realistas.
  - **Exemplo**: Geração de rostos artificiais (StyleGAN) ou arte digital.
- **VAEs (Autoencoders Variacionais)**:
  - **Definição**: Gera dados novos aprendendo distribuições latentes.
  - **Exemplo**: Recomendação personalizada (e.g., Netflix).
- **Diffusion Models**:
  - **Definição**: Gera dados removendo ruído gradualmente (inspirado em termodinâmica).
  - **Exemplo**: Geração de imagens (DALL-E, Stable Diffusion).

## 5. Modelos de Aprendizado por Reforço (RL)

- **DQN (Deep Q-Network)**:
  - **Definição**: Combina Q-learning com redes neurais para ambientes complexos.
  - **Exemplo**: Jogar Atari (Breakout) ou otimizar rotas de drones.
- **PPO (Proximal Policy Optimization)**:
  - **Definição**: Algoritmo de RL para treinar políticas robustas com atualizações seguras.
  - **Exemplo**: Treinar robôs para caminhar (OpenAI Gym).
- **AlphaGo/AlphaZero**:
  - **Definição**: Combina RL com busca em árvore de Monte Carlo (MCTS).
  - **Exemplo**: Dominar jogos como Go ou xadrez.

## 6. Modelos Multimodais e de Visão Computacional

- **CLIP (Contrastive Language–Image Pre-training)**:
  - **Definição**: Conecta texto e imagem através de aprendizado contrastivo.
  - **Exemplo**: Busca de imagens por descrição textual (e.g., "gato em um chapéu").
- **DALL-E/Imagen**:
  - **Definição**: Gera imagens a partir de prompts textuais.
  - **Exemplo**: Criar ilustrações para publicidade ou design.

## 7. Modelos de IA Simbólica e Sistemas Especialistas

- **Sistemas Baseados em Regras**:
  - **Definição**: Usam regras lógicas pré-definidas para tomada de decisão.
  - **Exemplo**: Diagnóstico de falhas em máquinas industriais.
- **CBR (Case-Based Reasoning)**:
  - **Definição**: Soluciona novos problemas baseado em casos passados.
  - **Exemplo**: Sistemas de suporte jurídico.

## 8. Modelos para Ética e Explicabilidade

- **LIME (Local Interpretable Model-agnostic Explanations)**:
  - **Definição**: Explica previsões de modelos complexos localmente.
  - **Exemplo**: Justificar por que um empréstimo foi negado.
- **SHAP (SHapley Additive exPlanations)**:
  - **Definição**: Atribui importância a features baseado na teoria dos jogos.
  - **Exemplo**: Auditoria de modelos de crédito.

## 9. Modelos de IA para Robótica e Automação

- **SLAM (Simultaneous Localization and Mapping)**:
  - **Definição**: Permite que robôs mapeiem ambientes e se localizem em tempo real.
  - **Exemplo**: Aspiradores robóticos (Roomba).
- **Redes Neurais de Controle**:
  - **Definição**: Controlam movimentos de robôs usando feedback sensorial.
  - **Exemplo**: Braços robóticos em linhas de montagem.

## 10. Modelos Emergentes e de Fronteira

- **LLMs (Large Language Models)**:
  - **Definição**: Modelos de linguagem com bilhões de parâmetros (e.g., GPT-4).
  - **Exemplo**: Assistentes virtuais (Copilot) ou redação automática.
- **Modelos de Embodied AI**:
  - **Definição**: IA que interage com ambientes físicos ou simulados.
  - **Exemplo**: Agentes em metaversos ou assistentes robóticos domésticos.
- **Modelos Neuro-Simbólicos**:
  - **Definição**: Combina redes neurais com lógica simbólica.
  - **Exemplo**: Sistemas de recomendação com raciocínio explicável.

## Transfer Learning ???
