import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos full-stack, automações e ferramentas web que desenvolvi.",
};

const projects = [
  {
    title: "SCEA - Sistema de Controle de Entrega de Água",
    description:
      "Sistema web full-stack desenvolvido para digitalizar protocolos, gerenciar demandas e otimizar a logística de distribuição de água potável.",
    tags: ["PHP", "Laravel", "Vue 3", "Inertia.js", "PostgreSQL"],
    github: "https://github.com/yagowill",
    status: "em desenvolvimento",
  },
  {
    title: "Gestão de Treinos",
    description:
      "Aplicação web responsiva voltada para personal trainers e alunos, permitindo a montagem, organização e acompanhamento de rotinas de treino.",
    tags: ["Vue 3", "Vuetify", "TypeScript"],
    github: "https://github.com/yagowill",
    status: "em desenvolvimento",
  },
  {
    title: "Utilitário Patrimônio",
    description:
      "Aplicação web SPA para otimização de rotinas patrimoniais: realiza leitura e extração de dados de PDFs, mesclagem de tabelas de ativos, validação e geração automática de documentos DOCX e relatórios formatados.",
    tags: ["Vue 3", "TypeScript", "Vite", "Vue Router"],
    github: "https://github.com/yagowill/utilitario-patrimonio",
    demo: "https://www.yagowill.com.br/utilitario-patrimonio",
    status: "em produção",
  },
  {
    title: "Robô Patrimônio",
    description:
      "Robô de automação web desenvolvido em Python para interagir com o sistema SispatWeb, otimizando tarefas repetitivas como a incorporação e o recebimento de termos de patrimônio.",
    tags: ["Python", "Playwright", "PySide6", "SQLite"],
    github: "https://github.com/yagowill/robo-patrimonio",
    status: "em uso",
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
    title: "Atualização automática de planilha de processos",
    description:
      "Bot que acessa o sistema de protocolos administrativos eletrônicos interno e atualiza automaticamente a planilha de processos importantes via Google Sheets API.",
    tags: ["Python", "Selenium", "Google Sheets API"],
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
          Uma mistura de ferramentas reais usadas no dia a dia e projetos
          full-stack desenvolvidos com Laravel, Vue e Python.
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
