# Azure Projects

Os Principais Serviços do Azure DevOps:

- **Azure Boards** é uma ferramenta de gerenciamento de projetos ágil que ajuda as equipes a planejar, rastrear e colaborar no trabalho.
  - **Work Items (Itens de Trabalho):** Permite criar e rastrear diferentes tipos de itens de trabalho, como User Stories, Bugs, Tasks, Features e Epics. Eles são personalizáveis para se adequar ao processo da sua equipe.
  - **Backlogs:** Visualizações priorizadas de itens de trabalho para facilitar o planejamento e a priorização.
  - **Kanban Boards:** Quadros visuais que ajudam a equipe a acompanhar o fluxo de trabalho, identificar gargalos e gerenciar o trabalho em andamento.
  - **Sprints:** Ferramentas para planejar e gerenciar o trabalho em iterações de tempo fixo (sprints), incluindo o acompanhamento do progresso com gráficos de burndown.
  - **Queries (Consultas):** Permite criar consultas personalizadas para encontrar e filtrar itens de trabalho com base em diversos critérios.
  - **Dashboards:** Painéis configuráveis com widgets que exibem métricas e status do projeto em tempo real.

- **Azure Repos** oferece repositórios de controle de versão para gerenciar seu código-fonte. Ele suporta tanto Git quanto Team Foundation Version Control (TFVC).
  - **Git Repositories:** Fornece repositórios Git privados ilimitados, permitindo workflows de desenvolvimento distribuídos.
  - **Team Foundation Version Control (TFVC):** Um sistema de controle de versão centralizado para equipes que preferem essa abordagem.
  - **Pull Requests (PRs):** Ferramenta para revisão de código, onde os desenvolvedores podem enviar suas alterações para serem revisadas por outros membros da equipe antes de serem mescladas.
  - **Branch Policies:** Permitem definir regras para proteger branches importantes, como exigir revisões de código, builds bem-sucedidos ou testes passados antes de mesclar alterações.
  - **Code Search (Busca de Código):** Funcionalidade para pesquisar código em todos os seus repositórios.

- **Azure Pipelines** é um serviço de CI/CD (Continuous Integration/Continuous Delivery) que automatiza o processo de build, teste e implantação de seus aplicativos para qualquer plataforma e nuvem.
  - **Build Automation:** Automatiza a compilação do código, a execução de testes unitários e a criação de pacotes de artefatos.
  - **Continuous Testing:** Integra testes automatizados (unitários, funcionais, de integração, etc.) nas suas pipelines para garantir a qualidade do código.
  - **Continuous Deployment (CD):** Automatiza a implantação de aplicativos para diferentes ambientes (desenvolvimento, teste, produção) e suporta várias estratégias de implantação (blue-green, canary, rolling updates).
  - **Multi-Platform Support:** Funciona com qualquer linguagem ou plataforma (Node.js, Python, Java, .NET, Go, etc.) e pode ser implantado em Azure, AWS, Google Cloud, ou ambientes on-premises.
  - **Deployment Gates & Approvals:** Permite definir condições e aprovações manuais para controlar o fluxo de implantação.

- **Azure Test Plans** fornece ferramentas abrangentes para gerenciar e executar testes, tanto manuais quanto automatizados, garantindo a qualidade do software.
  - **Manual Testing:** Permite criar planos de teste, suítes de teste e casos de teste manuais, além de rastrear o progresso e os resultados.
  - **Exploratory Testing:** Ferramentas para realizar testes exploratórios, capturando notas, capturas de tela e gravações durante o processo.
  - **Automated Testing Integration:** Integração com pipelines do Azure para executar testes automatizados e visualizar os resultados.
  - **User Acceptance Testing (UAT):** Facilita a colaboração com stakeholders externos para realizar testes de aceitação do usuário.
  - **Reporting & Analytics:** Relatórios e dashboards para monitorar o progresso do teste, identificar defeitos e analisar a qualidade do produto.

- **Azure Artifacts** é um serviço de gerenciamento de pacotes que permite hospedar, organizar e compartilhar pacotes de software (como NuGet, npm, Maven, Python, Universal Packages) dentro da sua organização.
  - **Package Management:** Hospeda feeds para diferentes tipos de pacotes, facilitando o consumo e a publicação de dependências internas e externas.
  - **Upstream Sources:** Permite configurar feeds para buscar pacotes de fontes públicas (como NuGet.org, npmjs.com) ou de outros feeds do Azure Artifacts, consolidando todas as suas dependências em um só lugar.
  - **Version Control for Packages:** Garante que as equipes usem versões consistentes de pacotes em seus projetos.
  - **Security & Permissions:** Controle de acesso granular para seus feeds e pacotes, garantindo que apenas usuários autorizados possam acessá-los.

- **Azure DevOps Wiki** é uma ferramenta de colaboração baseada em wiki para documentar o projeto, compartilhar conhecimento e manter informações importantes acessíveis à equipe.
  - **Documentação Centralizada:** Fornece um local centralizado para toda a documentação do projeto, incluindo especificações de design, guias de usuário, notas de reunião, e muito mais.
  - **Markdown Support:** Permite criar e formatar conteúdo facilmente usando Markdown.
  - **Version Control for Wiki:** O conteúdo do wiki é versionado, permitindo que você veja o histórico de alterações e reverta para versões anteriores, se necessário.
  - **Search Functionality:** Facilita a busca por informações dentro do wiki.
  - **Code Integration:** Possibilidade de incorporar trechos de código diretamente nas páginas do wiki.

## Um Ponto a Considerar: Extensions (Extensões)

Embora não seja um "serviço" independente no mesmo nível dos outros, o **Marketplace de Extensões do Azure DevOps** é fundamental e expande drasticamente as capacidades da plataforma. Ele permite que você adicione funcionalidades de terceiros ou personalizadas.

- **Funcionalidades:**
  - **Integrações:** Conecta o Azure DevOps com outras ferramentas e serviços (por exemplo, ferramentas de monitoramento, segurança, relatórios).
  - **Tarefas de Pipeline Customizadas:** Adiciona tarefas específicas para pipelines que podem não estar disponíveis nativamente.
  - **Widgets de Dashboard:** Fornece widgets adicionais para personalizar seus dashboards.
  - **Melhorias na UI:** Oferece melhorias na interface do usuário para otimizar fluxos de trabalho.
