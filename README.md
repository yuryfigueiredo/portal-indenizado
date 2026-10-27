# 🏢 Empresa de Agentes com CrewAI (com REA & Engenharia Modular)

Estrutura multiagente profissional baseada em **CrewAI** para desenvolvimento de software colaborativo, com suporte a **Engenharia Reversa (REA)**, geração modular de código (React / Backend) e controle rigoroso de qualidade (QA).

---

## 👥 A Equipe de Funcionários Virtuais

| Funcionário | Cargo | Função Principal |
| :--- | :--- | :--- |
| 👔 **Gerente de Projetos** | Arquiteto & Gerente | Fatiar objetivos complexos em módulos entregáveis e orquestrar a equipe. |
| 🔍 **Engenheiro Reverso** | Especialista REA | Analisar interfaces, rotas, telas e códigos existentes para criar a especificação técnica do módulo. |
| ⚛️ **Desenvolvedor Frontend** | Especialista React | Criar componentes visuais modernos em React com TypeScript e Tailwind CSS. |
| ⚙️ **Desenvolvedor Backend** | Engenheiro de APIs | Implementar rotas, validações de dados e lógica de negócio. |
| 🛡️ **Revisor QA** | Engenheiro de Qualidade | Inspecionar o código gerado, testar consistência, caçar bugs e emitir relatório de aprovação. |

---

## ⚙️ Configuração dos Modelos de IA (.env)

O projeto suporta tanto APIs oficiais quanto **modelos gratuitos via 9router / LM Studio / Ollama**:

Abra o arquivo `.env` e configure conforme seu uso:

```env
# Exemplo 1: Usando 9router ou LM Studio local (Porta 1234)
OPENAI_API_BASE=http://localhost:1234/v1
OPENAI_API_KEY=dummy-key
OPENAI_MODEL_NAME=openai/gpt-4o-mini

# Exemplo 2: Usando OpenRouter ou Groq
# OPENAI_API_BASE=https://openrouter.ai/api/v1
# OPENAI_API_KEY=sua-chave-openrouter
# OPENAI_MODEL_NAME=openrouter/anthropic/claude-3.5-sonnet
```

---

## 🚀 Como Executar

### 1. Ativar o Ambiente Virtual
```powershell
.\.venv\Scripts\activate
```

### 2. Rodar a Equipe de Agentes
Você pode passar o objetivo diretamente na linha de comando:

```powershell
.\.venv\Scripts\python main.py "Criar um formulário de cadastro com validação de senha e avatar em React"
```

Ou simplesmente rodar sem argumentos para digitar interativamente:
```powershell
.\.venv\Scripts\python main.py
```

### 3. Resultado
A equipe executará o processo sequencialmente exibindo no terminal o que cada agente está pensando e fazendo. Ao final, a entrega completa e o parecer de qualidade são salvos automaticamente em `relatorio_entrega.md`.

---

## 📁 Estrutura de Arquivos

```
CrewIA/
├── config/
│   ├── agents.yaml      # Personalidade, metas e papéis de cada agente
│   └── tasks.yaml       # Definição modular de cada tarefa e saídas esperadas
├── tools/
│   ├── __init__.py
│   └── custom_tool.py   # Ferramentas extras (CLI, analisador REA, comandos de shell)
├── .env.example         # Modelo de configuração de chaves e endpoints
├── .env                 # Suas configurações ativas
├── main.py              # Script principal de execução da equipe
├── requirements.txt     # Dependências (crewai, crewai-tools, etc.)
└── README.md            # Este guia
```
