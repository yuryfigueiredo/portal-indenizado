"""
Ponto de entrada principal da Empresa de Agentes com CrewAI.
Orquestra a equipe para dissecar requisitos com REA, desenvolver código modular (React / Backend)
e validar a qualidade com QA.
"""

import os
import sys
from pathlib import Path
import yaml
from dotenv import load_dotenv

# Garante suporte completo a UTF-8 no Windows Console (evita erro de emojis no CP1252)
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Carrega configurações do .env
load_dotenv()

from crewai import Agent, Crew, Process, Task, LLM
from tools.custom_tool import shell_exec_tool, rea_analyzer_tool


def carregar_yaml(caminho: Path) -> dict:
    """Carrega arquivos YAML com encoding UTF-8."""
    with open(caminho, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def criar_llm() -> LLM:
    """
    Configura a conexão do modelo de IA (LLM).
    Suporta o 9router (localhost:20128), Ollama, OpenRouter ou OpenAI oficial.
    """
    api_base = os.getenv("OPENAI_API_BASE", "http://localhost:20128/v1")
    api_key = os.getenv("OPENAI_API_KEY", "dummy-key")
    model_name = os.getenv("OPENAI_MODEL_NAME", "openai/coding-leve-free")

    print(f"\n[CrewAI Config] Conectando ao Modelo: {model_name}")
    print(f"[CrewAI Config] Endpoint API: {api_base}\n")

    return LLM(
        model=model_name,
        base_url=api_base,
        api_key=api_key,
        temperature=0.2,
        max_tokens=2048
    )


def criar_equipe(objetivo: str, modo: str = "sequential") -> Crew:
    """Monta a equipe de agentes e o fluxo de trabalho."""
    base_dir = Path(__file__).parent
    agentes_config = carregar_yaml(base_dir / "config" / "agents.yaml")
    tarefas_config = carregar_yaml(base_dir / "config" / "tasks.yaml")

    llm = criar_llm()

    # 1. Agentes
    gerente = Agent(
        config=agentes_config["gerente"],
        llm=llm,
        verbose=True,
        allow_delegation=True
    )

    engenheiro_reverso = Agent(
        config=agentes_config["engenheiro_reverso"],
        llm=llm,
        tools=[rea_analyzer_tool],
        verbose=True
    )

    desenvolvedor_frontend = Agent(
        config=agentes_config["desenvolvedor_frontend"],
        llm=llm,
        verbose=True
    )

    desenvolvedor_backend = Agent(
        config=agentes_config["desenvolvedor_backend"],
        llm=llm,
        verbose=True
    )

    revisor_qa = Agent(
        config=agentes_config["revisor_qa"],
        llm=llm,
        tools=[shell_exec_tool],
        verbose=True
    )

    # 2. Tarefas
    tarefa_1 = Task(
        config=tarefas_config["tarefa_planejamento_e_rea"],
        agent=engenheiro_reverso
    )

    tarefa_2 = Task(
        config=tarefas_config["tarefa_desenvolvimento_frontend"],
        agent=desenvolvedor_frontend
    )

    tarefa_3 = Task(
        config=tarefas_config["tarefa_desenvolvimento_backend"],
        agent=desenvolvedor_backend
    )

    tarefa_4 = Task(
        config=tarefas_config["tarefa_revisao_qa"],
        agent=revisor_qa,
        output_file="relatorio_entrega.md"
    )

    tarefas = [tarefa_1, tarefa_2, tarefa_3, tarefa_4]

    # 3. Processo (Sequencial por padrão, ou Hierárquico com Gerente)
    processo = Process.hierarchical if modo == "hierarchical" else Process.sequential

    equipe = Crew(
        agents=[engenheiro_reverso, desenvolvedor_frontend, desenvolvedor_backend, revisor_qa],
        tasks=tarefas,
        process=processo,
        manager_agent=gerente if processo == Process.hierarchical else None,
        verbose=True
    )

    return equipe


def main():
    print("=" * 65)
    print(" 🚀 EMPRESA DE AGENTES CREWAI (Com REA & Desenvolvimento Modular)")
    print("=" * 65)

    if len(sys.argv) > 1:
        objetivo = " ".join(sys.argv[1:])
    else:
        objetivo = input("\n👉 Digite o objetivo ou funcionalidade que a equipe deve construir: ").strip()

    if not objetivo:
        objetivo = "Criar um componente React de Autenticação (Login) com validação visual e mock de API"
        print(f"Objetivo padrão adotado: '{objetivo}'")

    print(f"\n[Iniciando Expediente] Objetivo da Equipe: {objetivo}\n")

    equipe = criar_equipe(objetivo=objetivo, modo="sequential")
    resultado = equipe.kickoff(inputs={"objetivo": objetivo})

    print("\n" + "=" * 65)
    print(" ✅ RESULTADO FINAL DA ENTREGA:")
    print("=" * 65)
    print(resultado)
    print("\nRelatório completo salvo em 'relatorio_entrega.md'.")


if __name__ == "__main__":
    main()
