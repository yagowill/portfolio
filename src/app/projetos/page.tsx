import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de backend, automações e ferramentas que desenvolvi.",
};

const projects = [
  {
    title: "Utilitário Patrimônio",
    description:
      "Ferramenta web para formatação automática. Desenvolvida para uso interno no setor administrativo, eliminando a necessidade de copiar e formatar dados manualmente.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
    github: "https://github.com/yagowill/utilitario-patrimonio",
    demo: "https://www.yagowill.com.br/utilitario-patrimonio",
    status: "em produção",
  },
  {
    title: "Pesquisa de Preços - Dados Abertos (Compras Governamentais)",
    description:
      "Ferramenta para agilizar a pesquisa de preços de mercado usando a API de Dados Abertos de Compras do Governo Federal.",
    tags: ["Python", "Streamlit", "Pandas", "Requests"],
    github: "https://github.com/yagowill/pesquisa-preco",
    demo: "https://pesquisa-preco.streamlit.app/",
    status: "em produção",
  },
  {
    title: "Robô Patrimônio",
    description:
      "Este projeto Python é um robô de automação web desenvolvido para interagir com o sistema SispatWeb, otimizando tarefas repetitivas como a incorporação e o recebimento de termos de patrimônio.",
    tags: ["Python", "Playwright", "PySide6", "SQLite"],
    github: "https://github.com/yagowill/robo-patrimonio",
    status: "em uso",
  },
  {
    title: "Atualização automática de planilha de processos",
    description:
      "Bot que acessa o sistema de protocolos administrativos eletrônicos interno da organização e atualização automaticamente a planilha de processos importantes com api do google sheets.",
    tags: ["Python", "selenium", "Google Sheets API"],
    github: "https://github.com/yagowill/processos-importantes",
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
