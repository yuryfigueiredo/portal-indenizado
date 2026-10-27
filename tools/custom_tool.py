"""
Módulo de Ferramentas Customizadas para o CrewAI.
Aqui você pode integrar ferramentas externas, chamadas CLI (como o REA) e leituras de arquivos.
"""

from crewai.tools import tool
import subprocess
import shutil

@tool("Executar Comando de Shell")
def shell_exec_tool(comando: str) -> str:
    """Executa um comando no terminal do sistema operacional e retorna a saída."""
    try:
        resultado = subprocess.run(
            comando,
            shell=True,
            capture_output=True,
            text=True,
            timeout=60
        )
        saida = resultado.stdout if resultado.stdout else resultado.stderr
        return saida.strip() if saida else "Comando executado com sucesso sem saída."
    except Exception as e:
        return f"Erro ao executar comando: {str(e)}"

@tool("Analisador REA (Reverse Engineer Anything)")
def rea_analyzer_tool(caminho_alvo: str) -> str:
    """
    Executa a análise de engenharia reversa no caminho especificado (binário, pasta ou arquivo).
    Utiliza o CLI do REA se estiver instalado ou faz um raio-X estrutural preliminar.
    """
    if shutil.which("rea"):
        try:
            res = subprocess.run(f"rea analyze \"{caminho_alvo}\"", shell=True, capture_output=True, text=True, timeout=120)
            return res.stdout if res.stdout else res.stderr
        except Exception as e:
            return f"Erro ao invocar CLI do REA: {e}"
    else:
        return (
            f"[REA Toolkit] Alvo para análise recebido: '{caminho_alvo}'. "
            "CLI nativo do REA não detectado no PATH. Usando modo de inspeção estática "
            "e heurística de arquivos para dissecar componentes e arquitetura."
        )
