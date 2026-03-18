import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

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
<<<<<<< HEAD
    github: "https://github.com/yagowill/robo-patrimonio",
=======
    github: "https://github.com/seu-usuario/monitor-processos",
>>>>>>> refs/remotes/origin/main
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
            Desenvolvedor Backend em transição —<br />
            <span className="text-text">Java</span> &{" "}
            <span className="text-text">Spring Boot</span>, automações com{" "}
            <span className="text-text">Python</span>, e mais de 4 anos
            construindo coisas que funcionam.
          </p>

          <p className="font-mono text-sm text-muted mb-10 animate-fade-up-delay-3">
            # Ciência da Computação · Backend · Automação · Open to work
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
            "Java", "Spring Boot", "Python", "Node.js",
            "Docker", "PostgreSQL", "Linux", "Git",
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
              Me formei em Ciência da Computação e desde então venho construindo
              ferramentas que resolvem problemas reais — principalmente no meu
              trabalho atual como assistente administrativo, onde automatizo
              processos e economizo horas de trabalho manual com Python.
            </p>
            <p>
              Agora estou migrando para o desenvolvimento como carreira principal,
              com foco em <span className="text-text">backend Java/Spring Boot</span>.
              Tenho passagem por frontend, IoT (Arduino, ESP32), automação web,
              scripts Linux e Docker.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
