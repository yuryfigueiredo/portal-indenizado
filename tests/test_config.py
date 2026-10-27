import unittest
from pathlib import Path
import yaml


class TestCrewConfiguration(unittest.TestCase):
    def setUp(self):
        self.base_dir = Path(__file__).parent.parent
        with open(self.base_dir / "config" / "agents.yaml", "r", encoding="utf-8") as f:
            self.agents = yaml.safe_load(f)
        with open(self.base_dir / "config" / "tasks.yaml", "r", encoding="utf-8") as f:
            self.tasks = yaml.safe_load(f)

    def test_agents_structure(self):
        expected_agents = ["gerente", "engenheiro_reverso", "desenvolvedor_frontend", "desenvolvedor_backend", "revisor_qa"]
        for agent_id in expected_agents:
            self.assertIn(agent_id, self.agents, f"Agente {agent_id} ausente no YAML")
            self.assertIn("role", self.agents[agent_id])
            self.assertIn("goal", self.agents[agent_id])
            self.assertIn("backstory", self.agents[agent_id])

    def test_tasks_structure(self):
        expected_tasks = ["tarefa_planejamento_e_rea", "tarefa_desenvolvimento_frontend", "tarefa_desenvolvimento_backend", "tarefa_revisao_qa"]
        for task_id in expected_tasks:
            self.assertIn(task_id, self.tasks, f"Tarefa {task_id} ausente no YAML")
            self.assertIn("description", self.tasks[task_id])
            self.assertIn("expected_output", self.tasks[task_id])
            self.assertIn("agent", self.tasks[task_id])
            self.assertIn(self.tasks[task_id]["agent"], self.agents, f"Agente referenciado na tarefa {task_id} não existe")


if __name__ == "__main__":
    unittest.main()
