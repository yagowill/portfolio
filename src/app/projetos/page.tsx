import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de backend, automações e ferramentas que desenvolvi.",
};

const projects = [
  {
    title: "Gerador de Relatórios",
    description:
      "Automação que consolida planilhas Excel do setor e gera relatórios formatados em PDF automaticamente, eliminando 2h de trabalho manual por semana.",
    tags: ["Python", "openpyxl", "ReportLab"],
    github: "https://github.com/seu-usuario/gerador-relatorios",
    status: "em produção",
  },
  {
    title: "API de Tarefas",
    description:
      "API REST completa com autenticação JWT, CRUD de tarefas e usuários, documentação Swagger e deploy em container Docker.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com/seu-usuario/tasks-api",
    demo: "https://tasks-api.railway.app",
    status: "portfólio",
  },
  {
    title: "Monitor de Processos",
    description:
      "Dashboard que monitora processos administrativos em andamento, envia alertas por e-mail quando prazos estão próximos.",
    tags: ["Python", "Flask", "SQLite", "SMTP"],
    github: "https://github.com/seu-usuario/monitor-processos",
    status: "em uso",
  },
  {
    title: "Scraper de Documentos",
    description:
      "Bot que acessa o portal interno da organização e baixa automaticamente documentos recém-publicados, organizando por categoria e data.",
    tags: ["Python", "Playwright", "BeautifulSoup"],
    github: "https://github.com/seu-usuario/scraper-docs",
    status: "em uso",
  },
];

export default function ProjetosPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="section-label mb-4">projetos</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
          O que construí
        </h1>
        <p className="text-subtle text-lg max-w-xl">
          Uma mistura de ferramentas reais usadas no trabalho e projetos de
          portfólio para backend.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
