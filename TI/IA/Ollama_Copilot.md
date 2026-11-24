# Comparação entre Ollama e Microsoft Copilot

```mermaid
graph LR
    
   subgraph llm[LLM]
      direction LR

      subgraph GPT
         direction TD
         gpt_4o[GPT 4o]
         gpt_41[GPT 4.1]
         gpt_41[GPT o1]
         gpt_5[GPT 5]
         gpt_56[GPT 5.6]
         gpt_6[GPT 6 Sol]
         gpt_61[GPT 6.1 Sol]
      end
      subgraph Claude
         direction TD
         claude_55o[Claude Opus 5.5]
         claude_56s[Claude Sonnet 5.6]
         claude_4[Claude Sonnet 4]
         claude_35[Claude Haiku 3.5]
      end
      subgraph DeepSeek
         direction TD
         ds_3[DeepSeek v3]
         ds_r1q[DeepSeek R1 Qwnen]
      end
      subgraph Gemini
         direction TD
         Gemini_25p[Gemini 2.5 Pro]
         Gemini_25f[Gemini 2.5 Flash]
      end
      subgraph Outros
         direction TD
         qw_3[Qwen 3-32B]
         qw_3c[Qwen 3 Coder]
         Gemma[Gemma 3]
         Mistral[Mistral Medium]
         Grok_4[Grok 4]
         kimi_k2[Kimi K2]
         Llama_3[Llama 4 Scout]
      end
   end
   subgraph ms_graph["Microsoft Graph"]
        ms_model[Modelos]
        ms_cloud[Cloud Microsoft]
        ms_365[Microsoft 365]
        SharePoint[SharePoint]
        copilot[MS Copilot]

        copilot --> ms_model & ms_cloud & ms_365 & SharePoint
        copilot -.->ag1[Agents] & rag1[RAG]
        ag1 -.->mcp1[MCP] & api1[API] & conn1[Connectors]
   end
   ms_model --> gpt_56 & gpt_6 & gpt_61 & claude_55o & claude_56s

   Ollama --> llm
   Ollama --> ag2[Agents]
   ag2 -.->mcp2[MCP] & api2[API] & conn2[Connectors]
```
