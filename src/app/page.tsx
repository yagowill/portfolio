import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

const projects = [
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
    title: "SCEA - Controle de Entrega de Água",
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
    title: "Robô Patrimônio",
    description:
      "Robô de automação web desenvolvido em Python para interagir com o sistema SispatWeb, otimizando tarefas repetitivas como incorporação e recebimento de termos.",
    tags: ["Python", "Playwright", "PySide6", "SQLite"],
    github: "https://github.com/yagowill/robo-patrimonio",
    status: "em uso",
  },
];

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* Hero */}
      <section className="min-h-[88vh] flex flex-col justify-center py-20">
        <div className="max-w-3xl">
          <p className="section-label mb-6 animate-fade-up">
            disponível para oportunidades
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-text mb-6 animate-fade-up-delay-1">
            Yago Martins
            <span className="text-accent">.</span>
          </h1>

          <p className="font-sans text-xl md:text-2xl text-subtle font-light leading-relaxed mb-4 animate-fade-up-delay-2">
            Desenvolvedor Full-Stack em transição —<br />
            <span className="text-text">Laravel</span> &{" "}
            <span className="text-text">Vue.js</span>, automações com{" "}
            <span className="text-text">Python</span>, e mais de 4 anos
            construindo coisas que funcionam.
          </p>

          <p className="font-mono text-sm text-muted mb-10 animate-fade-up-delay-3">
            # Ciência da Computação · Full-Stack · Automação · Open to work
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up-delay-4">
            <Link
              href="/projetos"
              className="px-6 py-3 bg-accent text-bg font-display font-semibold text-sm rounded hover:bg-accent-dim hover:text-text transition-colors"
            >
              Ver projetos →
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-border text-text font-mono text-sm rounded hover:border-accent hover:text-accent transition-colors"
            >
              Ler blog
            </Link>
          </div>
        </div>

        {/* Stack pills */}
        <div className="mt-16 flex flex-wrap gap-2 animate-fade-up-delay-5">
          {[
            "PHP", "Laravel", "Vue 3", "Inertia.js", "Vuetify",
            "Python", "PostgreSQL", "Docker", "Linux", "Git",
          ].map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">sobre mim</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-6">
              4 anos de código,<br />
              zero medo de terminal.
            </h2>
          </div>
          <div className="space-y-4 text-subtle leading-relaxed">
            <p>
              Sou bacharel em Ciência da Computação e construo ferramentas que
              resolvem problemas reais — aplicando tecnologia no dia a dia
              administrativo para digitalizar rotinas e economizar horas de
              trabalho manual com automações em Python e sistemas web.
            </p>
            <p>
              Atualmente foco no desenvolvimento full-stack com{" "}
              <span className="text-text">PHP/Laravel e Vue.js (Inertia.js e Vuetify)</span>.
              Também tenho experiência sólida com bancos relacionais (PostgreSQL, MySQL, SQLite),
              Java/Spring Boot, automação web, scripts Linux e Docker.
            </p>
            <p>
              Aprendo melhor construindo coisas reais — e é exatamente isso que
              você vai encontrar aqui.
            </p>
          </div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section className="py-20 border-t border-border">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">projetos</p>
            <h2 className="font-display text-3xl font-bold text-text">
              O que estou construindo
            </h2>
          </div>
          <Link
            href="/projetos"
            className="font-mono text-sm text-subtle hover:text-accent transition-colors"
          >
            ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Blog em destaque */}
      {recentPosts.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">blog</p>
              <h2 className="font-display text-3xl font-bold text-text">
                Últimos posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-mono text-sm text-subtle hover:text-accent transition-colors"
            >
              ver todos →
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
