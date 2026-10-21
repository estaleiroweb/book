# IAs LLMs

| Sigla                | Nome                               | Função Principal                   | Entrada                        | Saída              | Exemplos                                    |
| -------------------- | ---------------------------------- | ---------------------------------- | ------------------------------ | ------------------ | ------------------------------------------- |
| **LLM**              | Large Language Model               | Compreensão e geração de linguagem | Texto                          | Texto              | GPT-5, Claude Opus, Gemini Pro, Qwen, Llama |
| **SLM**              | Small Language Model               | IA leve para execução local        | Texto                          | Texto              | Phi-4 Mini, Gemma 4B, Llama 3.2 3B          |
| **LRM**              | Large Reasoning Model              | Raciocínio avançado e planejamento | Texto                          | Texto              | OpenAI o3, DeepSeek R1, Gemini Thinking     |
| **VLM**              | Vision Language Model              | Entendimento de imagens            | Texto + Imagem                 | Texto              | GPT-5 Vision, Claude Vision, Qwen-VL        |
| **MLLM**             | Multimodal LLM                     | Entendimento multimodal            | Texto + Imagem + Áudio + Vídeo | Texto/Áudio/Imagem | Gemini 2.5, GPT-5, Qwen Omni                |
| **ALM**              | Action Language Model              | Executar ações em sistemas         | Texto                          | Ações              | Operator, Copilot Agents                    |
| **CAMEL**            | Communicative Agent Model          | Múltiplos agentes colaborando      | Tarefas                        | Soluções           | AutoGen, CrewAI                             |
| **MoE**              | Mixture of Experts                 | Arquitetura com especialistas      | Texto                          | Texto              | DeepSeek V3, R1, Mixtral                    |
| **RAG**              | Retrieval Augmented Generation     | Busca contexto externo             | Pergunta + Documentos          | Resposta           | Copilot, Perplexity                         |
| **Agent**            | Sistema Agêntico                   | Planejar e executar tarefas        | Objetivos                      | Ações e respostas  | Copilot, Manus, Claude Computer Use         |
| **Embedding Model**  | Vetorização Semântica              | Busca por similaridade             | Texto                          | Vetores            | BGE, E5, OpenAI Embeddings                  |
| **Foundation Model** | Modelo Base                        | Base para outras soluções          | Dados diversos                 | Modelo treinado    | GPT, Claude, Llama                          |
| **Diffusion Model**  | Modelo de Difusão                  | Geração de imagens/vídeos          | Prompt                         | Imagem/Vídeo       | Flux, Stable Diffusion, DALL-E              |
| **World Model**      | Modelo de Mundo                    | Simulação física e temporal        | Multimodal                     | Predições          | Sora, Cosmos, Genie                         |
| **Speech Model**     | Modelo de Fala                     | STT/TTS                            | Áudio                          | Texto/Áudio        | Whisper, ElevenLabs                         |
| **Code LLM**         | Modelo especializado em código     | Programação                        | Código/Texto                   | Código             | MAI-Code, Codex, DeepSeek-Coder             |
| **Math LLM**         | Modelo especializado em matemática | Equações e provas                  | Texto                          | Solução matemática | DeepSeek-Math, Qwen-Math                    |

| Tipo      | Melhor em                | Mais barato  | Pode rodar local |
| --------- | ------------------------ | ------------ | ---------------- |
| SLM       | Velocidade               | barato       | Sim              |
| LLM       | Conhecimento             | caro         | Depende          |
| LRM       | Raciocínio               | muito caro   | Poucos           |
| VLM       | Imagens                  | caro         | Alguns           |
| MLLM      | Multimodalidade          | muito caro   | Alguns           |
| MoE       | Escalabilidade           | barato       | Alguns           |
| Agent     | Automação                | muito caro   | Sim              |
| RAG       | Conhecimento corporativo | barato       | Sim              |
| Embedding | Busca semântica          | muito barato | Sim              |

## Big Tech x Independentes

- **Big Tech**: Microsoft, Google, NVIDIA, Alibaba  
- **Independentes**: Anthropic, OpenAI, Mistral, Cohere, DeepSeek, Moonshot, Perplexity, xAI, Ollama

[GPT]: https://chat.openai.com/
[DeepSeek]: https://www.deepseek.ai/
[Claude]: https://claude.ai/chat/
[Gemini]: https://gemini.google.com/app/
[Qwen]: https://qwen.ai/
[Phi]: https://phi.ai/
[Gemma]: https://gemini.google.com/app/
[Mistral]: https://mistral.ai/
[Command]: https://cohere.com/command-r
[Grok]: https://x.ai/grok
[Kimi]: https://moonshot.ai/kimi
[Nemotron]: https://www.nvidia.com/en-us/ai-enterprise/nemotron/
[MAI-Code]: https://www.microsoft.com/en-us/ai/mai-code/
[Perplexity]: https://www.perplexity.ai/
[GitHub Copilot]: https://docs.github.com/copilot/using-github-copilot/using-claude-sonnet-in-github-copilot
[Copilot 365]: https://www.microsoft.com/en-us/copilot/blog/2025/09/24/expanding-model-choice-in-microsoft-365-copilot/
[Dola]: https://dola.ai/
[Ollama]: https://ollama.com/
[NotebookLM]: https://notebooklm.google.com/
[Fable]: https://fable.ai/
[HydraFusion]: https://hydrafusion.com/
[Canva]: https://www.canva.com/
[Cursor]: https://cursor.com/
[Claude Code]: https://claude.com/product/claude-code/
[Lovable]: https://lovable.dev/
[Manus]: https://manus.im/
[Kling]: https://klingai.com/global/
[Higgsfield]: https://higgsfield.ai/
[Google Veo]: https://3-veo.com/pt/veo-3-1
[Comet]: https://www.comet.com/site/
[N8N]: https://n8n.io/
[Zapier]: https://zapier.com/
[Nano Banana]: https://www.nano-banana.ai/
[Sora 2]: https://sora.com/
[TLDV]: https://tldv.com/
[Neomotronn]: https://www.nvidia.com/en-us/ai-enterprise/nemotron/
[Llama]: https://ai.meta.com/llama/
[Granite]: https://www.ibm.com/products/granite-ai
[GLM]: https://github.com/THUDM/GLM
[ChatGLM]: https://github.com/THUDM/ChatGLM

## Os melhores para

- Web: [Open WebUI]
  - Escrita: [Claude]
  - Ideias: [Claude] / [Gemini]
  - Imagens: [Nano Banana] / [Gemini] / [GPT] / [Canva]
  - Busca/Pesquisa: [Perplexity] / [GPT]
  - Dados: [Manus]
  - Apps/Código/Sites: [Cursor] + [Claude Code] / [Lovable]
  - Navegação: [Comet]
  - Estudos: [NotebookLM]
  - Integração: [Gemini]
  - Programação: [Cursor] + [Claude Code]
  - Automação: [Claude Code] / [N8N] / [Zapier]
  - Vídeos: [Kling] / [Higgsfield] / [Google Veo] / [Sora 2]
  - Reuniões: [TLDV]
- Ambiente corporativo isolado (on-premises)
  - Open source: [DeepSeek] R1
  - Apps/Código/Sites: [Qwen] Coder
  - SLM: [Phi]-4
  - RAG: [Command]-R+
  - Europeu: [Mistral]
  - on-premises NVIDIA: [Nemotron]
  - Runtime local: [Ollama]
  - Interface Web: Open WebUI
  - Integração MCP: Open WebUI + Ollama + Qwen/DeepSeek
  - Assistentes: ChatGPT, Claude, Gemini, Copilot, Grok, Kimi
  - Pesquisa: Perplexity, NotebookLM
  - Programação: GitHub Copilot, MAI-Code, Qwen Coder
  - Modelos LLM: DeepSeek, Qwen, Phi, Gemma, Mistral, Command-R, Claude, GPT, Gemini
  - Hospedagem local: Ollama, vLLM, SGLang
  - Orquestração: HydraFusion, Open WebUI, LangChain, Semantic Kernel

## Comparativo - O que e Porque

| Produto          | O que?                                           | Porque?(Melhor para)                                                     |
| ---------------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| [GPT]            | Modelo + assistente                              | Conversação geral                                                        |
| [DeepSeek]       | Família de modelos open-source                   | Raciocínio e programação                                                 |
| [Claude]         | Assistente e LLM da Anthropic                    | Raciocínio e análise de documentos                                       |
| [Gemini]         | Assistente e LLM da Google                       | Pesquisa e produtividade                                                 |
| [Qwen]           | Família de modelos da Alibaba                    | Código, RAG e agentes                                                    |
| [Phi]            | Família de modelos Microsoft                     | Edge AI e modelos compactos                                              |
| [Gemma]          | Família de modelos Google                        | Fine tuning e inferência local                                           |
| [Mistral]        | Família de modelos da Mistral AI                 | Uso corporativo e RAG                                                    |
| [Command]        | LLM da Cohere                                    | Busca documental e conhecimento                                          |
| [Grok]           | Assistente da xAI                                | Notícias e tendências em tempo real                                      |
| [Kimi]           | Assistente da Moonshot AI                        | Contexto gigante e pesquisa                                              |
| [Nemotron]       | Família de modelos NVIDIA                        | IA corporativa on-premises                                               |
| [MAI-Code]       | Modelo Microsoft para código                     | Programação                                                              |
| [Canva]          | Plataforma de design assistida por IA            | Criação de conteúdo visual                                               |
| [Cursor]         | Assistente de programação                        | Auxílio em desenvolvimento de software                                   |
| [Claude Code]    | Modelo Claude focado em código                   | Auxílio em desenvolvimento de software                                   |
| [Lovable]        | Assistente pessoal                               | Gestão de tarefas e compromissos                                         |
| [Manus]          | Assistente de escrita                            | Auxílio em criação de conteúdo                                           |
| [Kling]          | Assistente de comunicação                        | Gestão de mensagens e e-mails                                            |
| [Higgsfield]     | Plataforma de análise de dados                   | Análise e visualização de dados                                          |
| [Google Veo]     | Plataforma de vídeo assistida por IA             | Edição e análise de vídeos                                               |
| [Comet]          | Plataforma de machine learning                   | Treinamento e deploy de modelos                                          |
| [N8N]            | Automação de fluxos de trabalho                  | Integração de serviços e automação                                       |
| [Zapier]         | Automação de tarefas                             | Integração de aplicativos e automação                                    |
| [Nano Banana]    | Assistente de produtividade                      | Gestão de tarefas e otimização de tempo                                  |
| [Sora 2]         | Assistente de estudo                             | Auxílio em aprendizado e revisão                                         |
| [TLDV]           | Assistente de reuniões                           | Resumos e transcrições de reuniões                                       |
| [Perplexity]     | Motor de busca com IA                            | Pesquisa                                                                 |
| [GitHub Copilot] | IA para programação                              | Desenvolvimento                                                          |
| [Copilot 365]    | IA corporativa                                   | Produtividade empresarial                                                |
| [Dola]           | Assistente de agenda                             | Gestão de compromissos                                                   |
| [Ollama]         | Runtime local de LLM                             | Hospedar modelos                                                         |
| [NotebookLM]     | Pesquisa assistida sobre documentos              | Estudo e análise documental                                              |
| [Fable]          | Plataforma de agentes e storytelling             | Simulações e agentes                                                     |
| [HydraFusion]    | Orquestrador multi-modelo                        | Escolha dinâmica de modelos (Microsoft Copilot / MAI Platform *interno*) |
| [Neomotronn]     | Família de modelos da NVIDIA para IA empresarial | Treinamento e deploy de modelos                                          |
| [Llama]          | Família de modelos da Meta para IA               | Treinamento e deploy de modelos                                          |
| [Granite]        | Família de modelos da IBM para IA                | Treinamento e deploy de modelos                                          |
| [GLM]            | Família de modelos da THUDM para IA              | Treinamento e deploy de modelos                                          |
| [ChatGLM]        | Modelo de chat baseado em GLM                    | Conversação e assistência                                                |

## Comparativo - Como e Onde

| Produto          | LLM próprio? | Busca Web | Roda local? | Multmodal? |  Texto  | Imagem Entrada | Imagem Saída |  Áudio  |  Vídeo  | Integração Corporativa    |
| ---------------- | :----------: | :-------: | :---------: | :--------: | :-----: | :------------: | :----------: | :-----: | :-----: | ------------------------- |
| [GPT]            |     Sim      |  Parcial  |     Não     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Limitada                  |
| [DeepSeek]       |     Sim      |    Não    |     Sim     |  Parcial   |   Sim   |      Não       |     Não      |   Não   |   Não   | Via API                   |
| [Claude]         |     Sim      |  Parcial  |     Não     |    Sim     |   Sim   |      Sim       |     Não      | Parcial |   Não   | API e integrações SaaS    |
| [Gemini]         |     Sim      |    Sim    |     Não     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Workspace                 |
| [Qwen]           |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |   Parcial    |   Sim   | Parcial | Via API                   |
| [Phi]            |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Não      |   Sim   |   Não   | Azure / Copilot Studio    |
| [Gemma]          |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Não      |   Não   |   Não   | Google Cloud              |
| [Mistral]        |     Sim      |    Não    |     Sim     |    Não     |   Sim   |      Não       |     Não      |   Não   |   Não   | API / Private Deployment  |
| [Command]        |     Sim      |    Não    |     Sim     |  Parcial   |   Sim   |      Sim       |     Sim      |   Sim   |   Não   | orte para RAG empresarial |
| [Grok]           |     Sim      |    Sim    |     Não     |    Sim     |   Sim   |      Sim       |     Não      |   Não   |   Não   | X/Twitter                 |
| [Kimi]           |     Sim      |    Sim    |     Não     |    Sim     |   Sim   |      Sim       |     Não      |   Não   |   Não   | Limitada                  |
| [Nemotron]       |     Sim      |    Não    |     Sim     |  Parcial   |   Sim   |      Sim       |     Não      |   Não   |   Não   | NVIDIA AI Enterprise      |
| [MAI-Code]       |     Sim      |    Não    |     Não     |    Não     |   Sim   |      Não       |     Não      |   Não   |   Não   | GitHub / Azure            |
| [Canva]          |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Via API                   |
| [Cursor]         |     Sim      |    Não    |     Sim     |    Não     |   Sim   |      Não       |     Não      |   Não   |   Não   | Via API                   |
| [Claude Code]    |     Sim      |    Não    |     Sim     |    Não     |   Sim   |      Não       |     Não      |   Não   |   Não   | Via API                   |
| [Lovable]        |     Sim      |    Não    |     Sim     |  Parcial   |   Sim   |      Sim       |     Não      |   Não   |   Não   | Via API                   |
| [Manus]          |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Não      |   Não   |   Não   | Via API                   |
| [Kling]          |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Via API                   |
| [Higgsfield]     |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Via API                   |
| [Google Veo]     |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Google Cloud              |
| [Comet]          |     Sim      |    Não    |     Sim     |  Parcial   |   Sim   |      Sim       |     Não      |   Não   |   Não   | Via API                   |
| [N8N]            |     Sim      |    Não    |     Sim     |    Não     |   Sim   |      Não       |     Não      |   Não   |   Não   | Via API                   |
| [Zapier]         |     Sim      |    Não    |     Sim     |    Não     |   Sim   |      Não       |     Não      |   Não   |   Não   | Via API                   |
| [Nano Banana]    |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Não   |   Não   | Via API                   |
| [Sora 2]         |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Via API                   |
| [TLDV]           |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Não       |     Não      |   Sim   |   Sim   | Via API                   |
| [Perplexity]     |     Não      |    Sim    |     Não     |    Sim     |   Sim   |      Sim       |   Parcial    |   Sim   |   Não   | Não                       |
| [GitHub Copilot] |     Não      |    Não    |     Não     |    Sim     |   Sim   |      Sim       |     Não      |   Não   |   Não   | GitHub/Azure DevOps       |
| [Copilot 365]    |     Não      |  Parcial  |     Não     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Sim                       |
| [Dola]           |     Não      |    Não    |     Não     |    Não     |   Sim   |      Não       |     Não      | Parcial |   Não   | Calendário                |
| [Ollama]         |     Não      |    Não    |     Sim     |  Depende   | Depende |    Depende     |   Depende    | Depende | Depende | Via API                   |
| [NotebookLM]     |     Não      |  Parcial  |     Não     |    Sim     |   Sim   |      Sim       |     Não      |   Sim   |   Não   | Google Drive              |
| [Fable]          |     Não      |  Parcial  |     Não     |  Depende   | Depende |    Depende     |   Depende    | Depende | Depende | Via API                   |
| [HydraFusion]    |     Não      |  Depende  |   Depende   |  Depende   | Depende |    Depende     |   Depende    | Depende | Depende | Via API                   |
| [Neomotronn]     |     Sim      |    Não    |     Sim     |  Parcial   |   Sim   |      Sim       |     Não      |   Não   |   Não   | Via API                   |
| [Llama]          |     Sim      |    Não    |     Sim     |    Sim     |   Sim   |      Sim       |     Sim      |   Sim   |   Sim   | Via API                   |
| [Granite]        |     Não      |    Não    |     Sim     |  Depende   | Depende |    Depende     |   Depende    | Depende | Depende | Via API                   |
| [GLM]            |     Não      |    Não    |     Sim     |  Depende   | Depende |    Depende     |   Depende    | Depende | Depende | Via API                   |
| [ChatGLM]        |     Não      |    Não    |     Sim     |  Depende   | Depende |    Depende     |   Depende    | Depende | Depende | Via API                   |

## Comparativo - Quem

| Produto          | Fabricante / Empresa        | País              |
| ---------------- | --------------------------- | ----------------- |
| [GPT]            | OpenAI                      | EUA               |
| [DeepSeek]       | DeepSeek AI                 | China             |
| [Claude]         | Anthropic                   | EUA               |
| [Gemini]         | Google DeepMind             | EUA / Reino Unido |
| [Qwen]           | Alibaba Cloud               | China             |
| [Phi]            | Microsoft Research          | EUA               |
| [Gemma]          | Google                      | EUA               |
| [Mistral]        | Mistral AI                  | França            |
| [Command]        | Cohere                      | Canadá            |
| [Grok]           | xAI (Elon Musk)             | EUA               |
| [Kimi]           | Moonshot AI                 | China             |
| [Nemotron]       | NVIDIA                      | EUA               |
| [MAI-Code]       | Microsoft AI                | EUA               |
| [Perplexity]     | Perplexity AI               | EUA               |
| [GitHub Copilot] | GitHub + Microsoft + OpenAI | EUA               |
| [Copilot 365]    | Microsoft                   | EUA               |
| [Dola]           | Dola AI                     | Singapura         |
| [Ollama]         | Ollama, Inc.                | EUA               |
| [NotebookLM]     | Google Labs                 | EUA               |
| [Fable]          | Fable Studio                | Canadá            |
| [HydraFusion]    | Microsoft / MAI             | EUA               |
| [Canva]          | Canva                       | EUA               |
| [Cursor]         | Cursor AI                   | EUA               |
| [Claude Code]    | Anthropic                   | EUA               |
| [Lovable]        | Lovable AI                  | EUA               |
| [Manus]          | Manus AI                    | EUA               |
| [Kling]          | Kling AI                    | EUA               |
| [Higgsfield]     | Higgsfield AI               | EUA               |
| [Google Veo]     | Google VEO 3                | EUA               |
| [Comet]          | Comet AI                    | EUA               |
| [N8N]            | N8N AI                      | EUA               |
| [Zapier]         | Zapier AI                   | EUA               |
| [Nano Banana]    | Nano Banana AI              | EUA               |
| [Sora 2]         | Sora 2 AI                   | EUA               |
| [TLDV]           | TLDV AI                     | EUA               |
| [Neomotronn]     | NVIDIA Neomotronn AI        | EUA               |
| [Llama]          | Meta                        | EUA               |
| [Granite]        | IBM                         | EUA               |
| [GLM]            | THUDM                       | EUA               |
| [ChatGLM]        | THUDM                       | EUA               |

## Comparativo - Notas

> Nota de 0 a 9

| Produto          | Versão / Modelo                |        Max Context |                     Params |                   VRAM | Licença                               |  Free   | Community |  Local  | Escrita | Ideias | Imagens | Busca | Dados | Apps  |  Nav  | Estudos | Integração | Prog. | Auto. | Vídeo | Reunião | Calc. | Observações                                                                                                                                      |
| ---------------- | ------------------------------ | -----------------: | -------------------------: | ---------------------: | ------------------------------------- | :-----: | :-------: | :-----: | :-----: | :----: | :-----: | :---: | :---: | :---: | :---: | :-----: | :--------: | :---: | :---: | :---: | :-----: | :---: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [GPT]            | GPT‑4o                         |               128K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Multimodal em tempo real; voz, visão e texto com baixa latência.                                                                                 |
| [GPT]            | GPT‑4.1                        |                 1M |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Forte em instruções, contexto longo e programação; API empresarial.                                                                              |
| [GPT]            | GPT‑4.1 mini                   |                 1M |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Versão econômica de contexto longo, boa para alto volume e agentes.                                                                              |
| [GPT]            | GPT‑4.1 nano                   |                 1M |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Modelo muito barato e rápido para classificação, extração e tarefas simples.                                                                     |
| [GPT]            | o1                             |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Raciocínio deliberativo para problemas complexos; maior custo e latência.                                                                        |
| [GPT]            | o1‑mini                        |               128K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Raciocínio compacto, especialmente útil em matemática e código.                                                                                  |
| [GPT]            | o3                             |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Raciocínio avançado e uso de ferramentas; indicado para tarefas difíceis.                                                                        |
| [GPT]            | o3‑mini                        |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Raciocínio eficiente, bom equilíbrio entre custo, código e matemática.                                                                           |
| [GPT]            | o4‑mini                        |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Modelo de raciocínio pequeno com forte uso de ferramentas e visão.                                                                               |
| [GPT]            | GPT‑5                          |               400K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Flagship geral com raciocínio, agentes e programação de alto nível.                                                                              |
| [GPT]            | GPT‑5 mini                     |               400K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Versão econômica do GPT-5 para cargas de alto volume.                                                                                            |
| [GPT]            | GPT‑5 nano                     |               400K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Menor custo e latência da família GPT-5 para tarefas estruturadas.                                                                               |
| [DeepSeek]       | V3                             |               128K |    671B total / 37B ativos | ~400 GB (FP8); cluster | DeepSeek Model License + MIT (código) |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | MoE aberto de alto desempenho e baixo custo de API; exige hardware de servidor.                                                                  |
| [DeepSeek]       | V3.1                           |               128K |    671B total / 37B ativos | ~400 GB (FP8); cluster | DeepSeek Model License + MIT (código) |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Une modos com e sem raciocínio e melhora agentes e uso de ferramentas.                                                                           |
| [DeepSeek]       | R1                             |               128K |    671B total / 37B ativos | ~400 GB (FP8); cluster | MIT / DeepSeek Model License          |   Sim   |    Sim    |   Sim   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Referência aberta em raciocínio; forte em matemática e código.                                                                                   |
| [DeepSeek]       | R1 Distill Llama               |               128K |                   8B e 70B |         8--48+ GB (Q4) | Licenças Llama/DeepSeek               |   Sim   |    Sim    |   Sim   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Destila o raciocínio R1 para modelos Llama menores e executáveis localmente.                                                                     |
| [DeepSeek]       | R1 Distill Qwen                |               128K |        1.5B, 7B, 14B e 32B |          4--24 GB (Q4) | Apache 2.0 / DeepSeek                 |   Sim   |    Sim    |   Sim   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Família R1 compacta baseada em Qwen, boa para raciocínio local.                                                                                  |
| [Claude]         | Opus 4                         |     200K (1M beta) |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Máxima qualidade Claude para escrita, análise profunda e agentes.                                                                                |
| [Claude]         | Sonnet 4                       |     200K (1M beta) |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Excelente equilíbrio entre raciocínio, código, escrita e custo.                                                                                  |
| [Claude]         | Haiku 3.5                      |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Modelo Claude rápido e econômico para atendimento e automações.                                                                                  |
| [Claude]         | Sonnet 3.7                     |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Pioneiro em raciocínio híbrido e forte desempenho de programação.                                                                                |
| [Gemini]         | 2.5 Pro                        |                 1M |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Flagship multimodal com contexto longo, pesquisa e raciocínio avançado.                                                                          |
| [Gemini]         | 2.5 Flash                      |                 1M |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Alta velocidade/custo-benefício, multimodal e adequado a agentes.                                                                                |
| [Gemini]         | 2.5 Flash Lite                 |                 1M |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Opção de menor custo para classificação, extração e grande escala.                                                                               |
| [Qwen]           | Qwen3-235B-A22B                |               128K |    235B total / 22B ativos |  ~140 GB Q4; multi-GPU | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | MoE aberto flagship, multilíngue, raciocínio e uso de ferramentas.                                                                               |
| [Qwen]           | Qwen3-30B-A3B                  |               128K |      30B total / 3B ativos |              ~20 GB Q4 | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | MoE eficiente que cabe em workstation e mantém boa qualidade.                                                                                    |
| [Qwen]           | Qwen3-32B                      |               128K |                        32B |              ~24 GB Q4 | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Modelo denso forte em raciocínio e código para uma GPU de 24 GB.                                                                                 |
| [Qwen]           | Qwen3-14B                      |               128K |                        14B |              ~12 GB Q4 | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Bom equilíbrio local entre qualidade, memória e velocidade.                                                                                      |
| [Qwen]           | Qwen3-8B                       |               128K |                         8B |               ~8 GB Q4 | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Modelo local acessível e multilíngue para PCs de consumo.                                                                                        |
| [Qwen]           | Qwen3-Coder                    |               256K |          30B--480B (varia) |        20 GB a cluster | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Família especializada em engenharia de software e tarefas agentivas longas.                                                                      |
| [Qwen]           | Qwen2.5-Max                    |                32K |                      (MoE) |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Flagship fechado da Alibaba com forte desempenho geral e multilíngue.                                                                            |
| [Qwen]           | Qwen2.5-VL                     |               128K |          3B, 7B, 32B e 72B |           6--48+ GB Q4 | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Família visão-linguagem aberta para OCR, documentos, imagens e vídeo.                                                                            |
| [Phi]            | Phi‑4                          |                16K |                        14B |              ~12 GB Q4 | MIT                                   |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Modelo Microsoft compacto, forte em raciocínio, matemática e geração sintética.                                                                  |
| [Phi]            | Phi‑4 Multimodal               |               128K |                       5.6B |               ~8 GB Q4 | MIT                                   |   Sim   |    Sim    |   Sim   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Integra texto, imagem e áudio em um modelo local compacto.                                                                                       |
| [Phi]            | Phi‑4 Mini                     |               128K |                       3.8B |               ~6 GB Q4 | MIT                                   |   Sim   |    Sim    |   Sim   |    7    |   7    |    4    |   3   |   7   |   6   |   3   |    7    |     7      |   7   |   7   |   1   |    4    |   7   | Modelo pequeno para edge e dispositivos, com bom raciocínio por tamanho.                                                                         |
| [Gemma]          | Gemma 3                        |               128K |          1B, 4B, 12B e 27B |            4--24 GB Q4 | Gemma License                         |   Sim   |    Sim    |   Sim   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Família multimodal aberta e eficiente, forte ecossistema Google.                                                                                 |
| [Gemma]          | Gemma 3n                       |                32K |           2B e 4B efetivos |                4--8 GB | Gemma License                         |   Sim   |    Sim    |   Sim   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Modelo multimodal móvel, eficiente e otimizado para execução on-device.                                                                          |
| [Mistral]        | Mistral Large                  |               128K |             123B (Large 2) |        Não / ~80 GB Q4 | Proprietária/Premier                  | Parcial |    Sim    | Parcial |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Flagship europeu; forte em multilíngue, ferramentas e implantação empresarial.                                                                   |
| [Mistral]        | Mistral Medium                 |               128K |                            |                        | Proprietária/Premier                  | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Modelo empresarial intermediário focado em custo, agentes e multimodalidade.                                                                     |
| [Mistral]        | Mistral Small                  |               128K |      24B (versões abertas) |              ~16 GB Q4 | Apache 2.0 / varia por versão         |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Boa opção compacta europeia; versões recentes combinam texto, visão e código.                                                                    |
| [Mistral]        | Codestral                      |               128K | 22B (aberto antigo); atual |        ~16 GB Q4 (22B) | Mistral AI NC / Premier               | Parcial |    Sim    | Parcial |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Especialista em autocomplete, FIM e geração de código com baixa latência.                                                                        |
| [Command]        | R                              |               128K |                        35B |              ~24 GB Q4 | CC BY-NC 4.0                          | Parcial |    Sim    |   Sim   |    8    |   8    |    4    |   9   |   8   |   7   |   9   |    9    |     8      |   6   |   8   |   2   |    5    |   7   | Otimizado para RAG, citações, multilíngue e uso de ferramentas.                                                                                  |
| [Command]        | R+                             |               128K |                       104B |              ~64 GB Q4 | CC BY-NC 4.0                          | Parcial |    Sim    |   Sim   |    8    |   8    |    4    |   9   |   8   |   7   |   9   |    9    |     8      |   6   |   8   |   2   |    5    |   7   | RAG complexo e ferramentas multi-etapas para aplicações empresariais.                                                                            |
| [Command]        | A                              |               256K |    111B total / 13B ativos |              ~80 GB Q4 | CC BY-NC 4.0                          | Parcial |    Sim    |   Sim   |    8    |   8    |    6    |   8   |   8   |   9   |   9   |    8    |     9      |   8   |   9   |   4   |    7    |   8   | Flagship Cohere para agentes empresariais, RAG e contexto longo.                                                                                 |
| [Grok]           | Grok 4                         |               256K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    9    |   9    |    7    |   5   |   9   |   8   |   6   |    9    |     9      |   9   |   8   |   5   |    7    |   9   | Flagship xAI com raciocínio, ferramentas e acesso ao ecossistema X.                                                                              |
| [Grok]           | Grok 4 Heavy                   |               256K |                            |                        | Proprietária                          |   Não   |    Sim    |   Não   |    8    |   8    |    6    |   8   |   8   |   9   |   9   |    8    |     9      |   8   |   9   |   4   |    7    |   8   | Versão premium multiagente do Grok 4, voltada a problemas complexos.                                                                             |
| [Kimi]           | K2                             |               128K |      1T total / 32B ativos |    ~600 GB Q4; cluster | Modified MIT                          |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | MoE aberto muito forte em agentes e código, com grande escala total.                                                                             |
| [Nemotron]       | Nemotron‑4 340B                |                 4K |                       340B |             ~200 GB Q4 | NVIDIA Open Model License             |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Família voltada a dados sintéticos e alinhamento para modelos empresariais.                                                                      |
| [Nemotron]       | Llama Nemotron Ultra           |               128K |    253B total / 14B ativos |             ~160 GB Q4 | NVIDIA Open Model License             |   Sim   |    Sim    |   Sim   |    8    |   8    |    3    |   3   |   9   |   6   |   3   |    9    |     8      |   9   |   8   |   1   |    4    |   9   | Raciocínio aberto de grande porte, otimizado para infraestrutura NVIDIA.                                                                         |
| [Nemotron]       | Llama Nemotron Super           |               128K |    49B total / ~12B ativos |              ~32 GB Q4 | NVIDIA Open Model License             |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Modelo eficiente para agentes, RAG e execução em servidores menores.                                                                             |
| [MAI-Code]       | MAI‑Code                       |                    |                            |                        | Proprietária                          |   Não   |  Parcial  |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Modelo citado sem especificação pública suficiente; foco presumido em código.                                                                    |
| [Perplexity]     | Sonar                          |               127K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    4    |   9   |   8   |   7   |   9   |    9    |     8      |   6   |   8   |   2   |    5    |   7   | Busca web com respostas citadas e custo baixo via API.                                                                                           |
| [Perplexity]     | Sonar Pro                      |               200K |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    8    |   8    |    4    |   9   |   8   |   7   |   9   |    9    |     8      |   6   |   8   |   2   |    5    |   7   | Busca mais completa, múltiplas fontes e respostas mais detalhadas.                                                                               |
| [Perplexity]     | Sonar Deep Research            |               128K |                            |                        | Proprietária                          |   Não   |    Sim    |   Não   |    8    |   8    |    4    |   9   |   8   |   7   |   9   |    9    |     8      |   6   |   8   |   2   |    5    |   7   | Fluxo de pesquisa longa com múltiplas buscas, síntese e relatório citado.                                                                        |
| [GitHub Copilot] | GPT‑5                          |            Depende |                          - |                        | GitHub/Microsoft comercial            | Parcial |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Assistente de código integrado ao GitHub/IDE; usa GPT-5 conforme plano.                                                                          |
| [GitHub Copilot] | Claude Sonnet                  |            Depende |                          - |                        | GitHub/Microsoft comercial            | Parcial |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Copilot com Claude Sonnet para edição, agentes e revisão de código.                                                                              |
| [GitHub Copilot] | Gemini                         |            Depende |                          - |                        | GitHub/Microsoft comercial            | Parcial |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Opção Gemini no Copilot para contexto amplo e desenvolvimento multimodal.                                                                        |
| [Copilot 365]    | GPT‑5                          |            Depende |                          - |                        | Microsoft comercial                   |   Não   |    Sim    |   Não   |    8    |   8    |    6    |   8   |   9   |   9   |   8   |    9    |     9      |   8   |   9   |   3   |    9    |   9   | Copilot empresarial com GPT-5, Microsoft Graph e aplicativos 365.                                                                                |
| [Copilot 365]    | GPT‑4o                         |     128K / depende |                          - |                        | Microsoft comercial                   |   Não   |    Sim    |   Não   |    8    |   8    |    6    |   8   |   9   |   9   |   8   |    9    |     9      |   8   |   9   |   3   |    9    |   9   | Integração madura com Word, Excel, PowerPoint, Outlook e Teams.                                                                                  |
| [Copilot 365]    | Claude Sonnet                  |            Depende |                          - |                        | Microsoft comercial                   |   Não   |    Sim    |   Não   |    8    |   8    |    6    |   8   |   9   |   9   |   8   |    9    |     9      |   8   |   9   |   3   |    9    |   9   | Claude no ecossistema 365, sujeito à disponibilidade e governança do tenant.                                                                     |
| [Copilot 365]    | Claude Opus                    |            Depende |                          - |                        | Microsoft comercial                   |   Não   |    Sim    |   Não   |    8    |   8    |    6    |   8   |   9   |   9   |   8   |    9    |     9      |   8   |   9   |   3   |    9    |   9   | Opus no 365 para tarefas de alta complexidade, quando habilitado.                                                                                |
| [Dola]           |                                |                  - |                          - |                        | Proprietária                          | Parcial |  Parcial  |   Não   |    8    |   8    |    6    |   8   |   8   |   9   |   9   |    8    |     9      |   8   |   9   |   4   |    7    |   8   | Assistente de calendário/mensagens; não há modelo proprietário público identificado.                                                             |
| [Ollama]         | Framework (não é LLM)          |            Depende |                          - |                Depende | MIT (framework)                       |   Sim   |    Sim    |   Sim   |    5    |   6    |    2    |   2   |   7   |   8   |   4   |    6    |     9      |   8   |   8   |   1   |    3    |   7   | Padrão de fato para baixar e executar LLMs locais com instalação simples.                                                                        |
| [NotebookLM]     | Gemini                         |            Depende |                          - |                        | Google comercial                      | Parcial |    Sim    |   Não   |    8    |   7    |    4    |   6   |   8   |   8   |   5   |    9    |     8      |   5   |   8   |   2   |    9    |   6   | Pesquisa e estudo ancorados nas fontes do usuário, com citações e áudio.                                                                         |
| [Canva]          | Magic Studio (Gemini + outros) |            Depende |                          - |                        | Canva comercial                       | Parcial |    Sim    |   Não   |    4    |   8    |    9    |   2   |   3   |   6   |   2   |    4    |     5      |   3   |   5   |   5   |    2    |   2   | Suíte criativa integrada para imagem, design, vídeo e apresentações.                                                                             |
| [Cursor]         | GPT‑5                          |            Depende |                          - |                        | Cursor comercial                      | Parcial |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | IDE agentiva com GPT-5, edição de repositório e execução de tarefas.                                                                             |
| [Cursor]         | Claude Sonnet                  |            Depende |                          - |                        | Cursor comercial                      | Parcial |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Claude Sonnet no Cursor se destaca em refatoração e entendimento de código.                                                                      |
| [Cursor]         | Gemini                         |            Depende |                          - |                        | Cursor comercial                      | Parcial |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Gemini no Cursor oferece contexto longo e bom suporte multimodal.                                                                                |
| [Claude Code]    | Claude Sonnet                  |     200K / 1M beta |                          - |                        | Anthropic comercial                   |   Não   |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Agente oficial de terminal da Anthropic para editar, testar e operar código.                                                                     |
| [Claude Code]    | Claude Opus                    |     200K / 1M beta |                          - |                        | Anthropic comercial                   |   Não   |    Sim    |   Não   |    6    |   7    |    2    |   2   |   7   |   9   |   3   |    7    |     9      |   9   |   9   |   1   |    3    |   8   | Opus no Claude Code prioriza qualidade máxima em tarefas complexas.                                                                              |
| [Lovable]        | GPT‑5                          |            Depende |                          - |                        | Lovable comercial                     | Parcial |    Sim    |   Não   |    8    |   8    |    6    |   8   |   8   |   9   |   9   |    8    |     9      |   8   |   9   |   4   |    7    |   8   | Criação de aplicativos por linguagem natural com preview e deploy rápidos.                                                                       |
| [Lovable]        | Claude Sonnet                  |            Depende |                          - |                        | Lovable comercial                     | Parcial |    Sim    |   Não   |    8    |   8    |    6    |   8   |   8   |   9   |   9   |    8    |     9      |   8   |   9   |   4   |    7    |   8   | Claude no Lovable favorece arquitetura, depuração e geração de apps.                                                                             |
| [Manus]          | Claude Sonnet                  |            Depende |                          - |                        | Manus comercial                       | Parcial |    Sim    |   Não   |    8    |   8    |    6    |   8   |   8   |   9   |   9   |    8    |     9      |   8   |   9   |   4   |    7    |   8   | Agente autônomo generalista que executa pesquisas e tarefas em ambiente próprio.                                                                 |
| [Kling]          | Kling 2.x                      |                  - |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    3    |   8    |    8    |   2   |   2   |   6   |   2   |    3    |     5      |   2   |   5   |   9   |    2    |   1   | Geração de vídeo com forte movimento, aderência ao prompt e controles criativos.                                                                 |
| [Higgsfield]     | Higgsfield Video               |                  - |                            |                        | Proprietária                          | Parcial |    Sim    |   Não   |    3    |   8    |    8    |   2   |   2   |   6   |   2   |    3    |     5      |   2   |   5   |   9   |    2    |   1   | Foco em vídeo cinematográfico, efeitos visuais e fluxos para creators.                                                                           |
| [Google Veo]     | Veo 2                          |                  - |                            |                        | Google comercial                      | Parcial |    Sim    |   Não   |    3    |   8    |    8    |   2   |   2   |   6   |   2   |    3    |     5      |   2   |   5   |   9   |    2    |   1   | Geração de vídeo de alta qualidade; antecessor do Veo 3.                                                                                         |
| [Google Veo]     | Veo 3                          |                  - |                            |                        | Google comercial                      | Parcial |    Sim    |   Não   |    3    |   8    |    8    |   2   |   2   |   6   |   2   |    3    |     5      |   2   |   5   |   9   |    2    |   1   | Vídeo com áudio nativo, maior realismo e integração ao ecossistema Google.                                                                       |
| [Comet]          | (browser da Perplexity)        |            Depende |                          - |                        | Perplexity comercial                  | Parcial |    Sim    |   Não   |    8    |   8    |    4    |   9   |   8   |   7   |   9   |    9    |     8      |   6   |   8   |   2   |    5    |   7   | Navegador agentivo com pesquisa Perplexity integrada e automação da web.                                                                         |
| [N8N]            | Workflow Engine (não é LLM)    |                  - |                          - |      4 GB+ (self-host) | Sustainable Use License / Enterprise  |   Sim   |    Sim    |   Sim   |    5    |   7    |    2    |   6   |   8   |   9   |   8   |    6    |     9      |   8   |   9   |   1   |    5    |   8   | Automação visual extensível e self-hosted, forte para IA e integrações técnicas.                                                                 |
| [Zapier]         | Workflow Engine (não é LLM)    |                  - |                          - |                        | Proprietária                          | Parcial |    Sim    |   Não   |    5    |   7    |    2    |   6   |   8   |   9   |   8   |    6    |     9      |   8   |   9   |   1   |    5    |   8   | Maior catálogo de integrações SaaS e automações acessíveis a não programadores.                                                                  |
| [Nano Banana]    | Gemini 2.5 Flash Image         |            Depende |                            |                        | Google comercial                      | Parcial |    Sim    |   Não   |    4    |   8    |    9    |   2   |   3   |   6   |   2   |    4    |     5      |   3   |   5   |   5   |    2    |   2   | Edição e geração conversacional de imagens com consistência de personagens.                                                                      |
| [Sora]           | Sora                           |                  - |                            |                        | OpenAI comercial                      | Parcial |    Sim    |   Não   |    3    |   8    |    8    |   2   |   2   |   6   |   2   |    3    |     5      |   2   |   5   |   9   |    2    |   1   | Geração e remix de vídeo com forte compreensão de cenas e narrativa.                                                                             |
| [TLDV]           | GPT‑4o / Claude                |            Depende |                          - |                        | tl;dv comercial                       | Parcial |    Sim    |   Não   |    8    |   7    |    4    |   6   |   8   |   8   |   5   |    9    |     8      |   5   |   8   |   2   |    9    |   6   | Grava, transcreve, resume e extrai ações de reuniões com integrações CRM.                                                                        |
| [Llama]          | 3.1 8B                         |               128K |                         8B |               ~8 GB Q4 | Llama 3.1 Community License           |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Modelo popular e leve para execução local, fine-tuning e aplicações gerais.                                                                      |
| [Llama]          | 3.1 70B                        |               128K |                        70B |              ~48 GB Q4 | Llama 3.1 Community License           |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Workhorse aberto de alta qualidade; demanda múltiplas GPUs ou memória unificada.                                                                 |
| [Llama]          | 3.1 405B                       |               128K |                       405B |             ~250 GB Q4 | Llama 3.1 Community License           |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Maior Llama 3.1, qualidade de fronteira mas implantação local datacenter.                                                                        |
| [Llama]          | 3.3 70B                        |               128K |                        70B |              ~48 GB Q4 | Llama 3.3 Community License           |   Sim   |    Sim    |   Sim   |    8    |   8    |    4    |   2   |   8   |   7   |   3   |    8    |     8      |   8   |   7   |   2   |    4    |   8   | Aproxima o 405B em várias tarefas com custo de execução muito menor.                                                                             |
| [Llama]          | 4 Scout                        |                10M |    109B total / 17B ativos |              ~76 GB Q4 | Llama 4 Community License             |   Sim   |    Sim    |   Sim   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | MoE multimodal com contexto extremo; forte para documentos e agentes locais.                                                                     |
| [Llama]          | 4 Maverick                     |                 1M |    400B total / 17B ativos |             ~244 GB Q4 | Llama 4 Community License             |   Sim   |    Sim    |   Sim   |    8    |   8    |    9    |   4   |   8   |   8   |   5   |    8    |     8      |   8   |   7   |   6   |    5    |   8   | Flagship Llama 4 multimodal; alta qualidade, porém exige infraestrutura de servidor.                                                             |
| [Granite]        | Granite 4.2 30B                | 512K (128K nativo) |                        30B |              ~20 GB Q4 | Apache 2.0                            |   Sim   |    Sim    |   Sim   |    8    |   8    |    0    |   3   |   8   |   7   |   4   |    8    |     8      |   8   |   8   |   0   |    3    |   8   | Flagship aberto da IBM para raciocínio, código, ferramentas e agentes; forte foco empresarial, governança e implantação local.                   |
| [GLM]            | GLM-5.2                        |                 1M |           753B total (MoE) |             ~450 GB Q4 | MIT                                   |   Sim   |    Sim    |   Sim   |    9    |   9    |    0    |   8   |   9   |   8   |   8   |    9    |     8      |   9   |   9   |   0   |    4    |   9   | Modelo aberto de fronteira para tarefas longas, raciocínio, programação e agentes; excelente capacidade, mas exige infraestrutura multigpu.      |
| [ChatGLM]        | ChatGLM3-6B-128K               |               128K |                         6B |               ~6 GB Q4 | Model License (código Apache 2.0)     | Parcial |    Sim    |   Sim   |    6    |   6    |    0    |   2   |   6   |   5   |   2   |    6    |     5      |   6   |   5   |   0   |    3    |   6   | Modelo bilíngue leve, local e extensível, com function calling e code interpreter; pesos livres para pesquisa e uso comercial mediante registro. |

> Resumo

| Produto          | Max Context | Params      | VRAM       | Licença             | Free    | Community | Local   | Escrita | Ideias | Imagens | Busca | Dados | Apps | Nav | Estudos | Integração | Prog. | Auto. | Vídeo | Reunião | Calc. | Observações                 |
| ---------------- | ----------- | ----------- | ---------- | ------------------- | ------- | --------- | ------- | ------- | ------ | ------- | ----- | ----- | ---- | --- | ------- | ---------- | ----- | ----- | ----- | ------- | ----- | --------------------------- |
| [GPT]            | 128K-1M     | 100B+       | Cloud      | Proprietária        | Parcial | Não       | Não     | 9       | 9      | 8       | 7     | 8     | 9    | 8   | 9       | 9          | 9     | 8     | 8     | 8       | 8     | Melhor qualidade geral      |
| [Claude]         | 200K-1M     | 100B+       | Cloud      | Proprietária        | Parcial | Não       | Não     | 9       | 9      | 6       | 6     | 8     | 8    | 7   | 9       | 8          | 9     | 7     | 5     | 7       | 8     | Excelente escrita longa     |
| [Gemini]         | 1M-2M       | ND          | Cloud      | Proprietária        | Parcial | Não       | Não     | 8       | 8      | 9       | 9     | 9     | 9    | 9   | 8       | 9          | 8     | 8     | 9     | 8       | 8     | Melhor multimodal           |
| [DeepSeek]       | 128K        | 7B-671B     | 16-320GB   | MIT                 | Sim     | Sim       | Sim     | 8       | 8      | 3       | 3     | 7     | 4    | 1   | 7       | 5          | 8     | 7     | 0     | 1       | 8     | Melhor custo-benefício open |
| [Qwen]           | 128K-1M     | 3B-235B     | 8-320GB    | Apache 2.0          | Sim     | Sim       | Sim     | 8       | 8      | 8       | 3     | 7     | 5    | 1   | 8       | 6          | 8     | 7     | 5     | 1       | 7     | Multimodal open-source      |
| [Phi]            | 16K-128K    | 3B-14B      | 4-16GB     | MIT                 | Sim     | Sim       | Sim     | 6       | 6      | 5       | 1     | 6     | 3    | 0   | 6       | 5          | 7     | 4     | 0     | 0       | 7     | Excelente para edge         |
| [Gemma]          | 32K-128K    | 2B-27B      | 4-48GB     | Gemma License       | Sim     | Sim       | Sim     | 7       | 7      | 5       | 1     | 6     | 3    | 0   | 7       | 5          | 7     | 5     | 0     | 0       | 6     | Open da Google              |
| [Llama]          | 128K        | 8B-405B     | 8-300GB    | Community           | Sim     | Sim       | Sim     | 8       | 8      | 6       | 2     | 7     | 4    | 0   | 7       | 6          | 8     | 6     | 2     | 1       | 7     | Ecossistema mais amplo      |
| [Mistral]        | 32K-128K    | 7B-123B     | 8-160GB    | Apache/Proprietária | Parcial | Sim       | Parcial | 8       | 7      | 4       | 2     | 7     | 4    | 0   | 7       | 7          | 8     | 6     | 0     | 0       | 7     | Muito eficiente             |
| [Copilot 365]    | 128K-1M     | Multi-Model | Cloud      | Proprietária        | Não     | Não       | Não     | 8       | 8      | 8       | 9     | 9     | 9    | 9   | 8       | 9          | 8     | 9     | 6     | 9       | 7     | Melhor integração M365      |
| [GitHub Copilot] | 128K-1M     | Multi-Model | Cloud      | Proprietária        | Não     | Não       | Não     | 7       | 7      | 1       | 5     | 7     | 9    | 8   | 6       | 9          | 9     | 8     | 0     | 0       | 7     | Foco em programação         |
| [Cursor]         | 128K-1M     | Multi-Model | Cloud      | Proprietária        | Parcial | Não       | Não     | 7       | 8      | 1       | 5     | 8     | 9    | 8   | 7       | 8          | 9     | 8     | 0     | 0       | 7     | Melhor IDE IA               |
| [Ollama]         | Dependente  | Dependente  | Dependente | OSS                 | Sim     | Sim       | Sim     | N/A     | N/A    | N/A     | N/A   | N/A   | N/A  | N/A | N/A     | N/A        | N/A   | N/A   | N/A   | N/A     | N/A   | Runtime local               |

## Produtos por fabricante

- **OpenAI**: GPT[^treina]
- **Anthropic**: Claude[^treina]
- **Microsoft**: Phi[^treina], MAI-Code[^treina], GitHub Copilot[^usaLLM], Microsoft 365 Copilot[^usaLLM], HydraFusion[^usaLLM]
- **Google**: Gemini[^treina], Gemma[^treina], NotebookLM[^usaLLM]
- **Alibaba**: Qwen[^treina]
- **DeepSeek AI**: DeepSeek[^treina]
- **Mistral**: Mistral[^treina]
- **Cohere**: Command-R[^treina]
- **xAI**: Grok[^treina]
- **Moonshot AI**: Kimi[^treina]
- **NVIDIA**: Nemotron[^treina]
- **Meta**: Llama
- **Ollama**: Ollama[^usaLLM]
- **Perplexity AI**: Perplexity[^usaLLM]
- **Dola AI**: Dola[^usaLLM]
- **Fable Studio**: Fable[^usaLLM]

[^treina]: Indica que o modelo é treinado pela própria empresa.
[^usaLLM]: Indica que o produto utiliza modelos de terceiros.

## Produtos que usam outras LLMs (além das próprias)

| Produto          | Modelos Próprios           | Modelos de Terceiros                                        | Modelos que pode utilizar                                                                                                                                                                                                   |
| ---------------- | -------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Perplexity]     | Sonar                      | GPT, Claude, Gemini, Grok, Kimi, Nemotron, GLM              | Sonar (próprio), GPT, Claude, Gemini, Kimi, Grok, Nemotron, GLM e outros dependendo do plano. [perplexity.ai]                                                                                                               |
| [GitHub Copilot] | Nenhum                     | GPT, Claude, Gemini, MAI-Code, Kimi, Grok                   | GPT-5.x/6.x, Claude Haiku, Sonnet, Opus, Fable, Gemini, MAI-Code, Kimi, Grok, entre outros. [docs.github.com-copilot], [docs.github.com-enterprise]                                                                         |
| [Copilot 365]    | MAI, Phi (alguns cenários) | GPT, Claude                                                 | GPT (OpenAI), Claude Sonnet, Claude Opus, além de modelos Microsoft em cenários específicos (Phi/MAI). Claude Sonnet e Claude Opus foram adicionados oficialmente ao Copilot e Copilot Studio. [microsoft.com], [claude.co] |
| [NotebookLM]     | Nenhum                     | Gemini                                                      | Gemini (últimos modelos Gemini disponíveis na plataforma Google). [notebook.google.com], [workspace.google.com]                                                                                                             |
| [Ollama]         | Nenhum                     | Llama, DeepSeek, Qwen, Gemma, Phi, Mistral, Command-R, etc. | Qualquer modelo compatível hospedado localmente: Llama, DeepSeek, Qwen, Gemma, Phi, Mistral, Command-R, Nemotron, Granite, GLM etc.                                                                                         |
| [HydraFusion]    | Nenhum                     | GPT, Claude, Gemini, Phi, MAI                               | Orquestrador multi-modelo; pode selecionar GPT, Claude, Gemini, MAI-Code, Phi e outros conforme configuração.                                                                                                               |
| [Fable]          | Nenhum                     | GPT, Claude, Gemini                                         | Dependendo da implantação, costuma usar GPT e Claude; algumas integrações permitem Gemini.                                                                                                                                  |
| [Dola]           | Nenhum conhecido           | LLMs  s                                                     | Não divulga oficialmente os modelos subjacentes; utiliza LLMs de terceiros através de APIs.                                                                                                                                 |

[perplexity.ai]: https://www.perplexity.ai/help-center/en/articles/10354919-what-advanced-ai-models-are-included-in-my-subscription
[docs.github.com-copilot]: https://docs.github.com/copilot/using-github-copilot/using-claude-sonnet-in-github-copilot
[docs.github.com-enterprise]: https://docs.github.com/en/enterprise-cloud@latest/copilot/reference/ai-models/supported-models
[microsoft.com]: https://www.microsoft.com/en-us/copilot/blog/2025/09/24/expanding-model-choice-in-microsoft-365-copilot/
[claude.co]: https://claude.com/resources/articles/claude-now-available-in-microsoft-365-copilot
[notebook.google.com]: https://notebook.google.com/
[workspace.google.com]: https://workspace.google.com/products/gemini-notebook/

## Modelos que podem ser executados no Ollama

| Fabricante  | Modelos                                       |
| ----------- | --------------------------------------------- |
| [Meta]      | [Llama] 3.1, [Llama] 3.3, [Llama] 4           |
| [DeepSeek]  | [DeepSeek]-R1, [DeepSeek]-V3, versões Distill |
| [Alibaba]   | [Qwen] 2.5, [Qwen] 3, [Qwen]-Coder            |
| [Microsoft] | [Phi]-3, [Phi]-4                              |
| [Google]    | [Gemma] 2, [Gemma] 3                          |
| [Mistral]   | [Mistral], [Mixtral], Nemo                    |
| [Cohere]    | [Command]-R, [Command]-R+                     |
| [NVIDIA]    | [Nemotron]                                    |
| [IBM]       | [Granite]                                     |
| [THUDM]     | [GLM] / [ChatGLM]                             |

[Meta]: https://ai.meta.com/
[Alibaba]: https://www.alibabacloud.com/product/qwen
[Microsoft]: https://www.microsoft.com/en-us/ai/phi
[Google]: https://ai.google.com/
[Cohere]: https://cohere.ai/
[NVIDIA]: https://developer.nvidia.com/nemotron
[IBM]: https://www.ibm.com/ai/granite
[THUDM]: https://thudm.com/
