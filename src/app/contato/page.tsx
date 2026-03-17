import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato para oportunidades ou colaborações.",
};

const links = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yagowill",
    href: "https://linkedin.com/in/yagowill",
    description: "Melhor canal para oportunidades profissionais",
  },
  {
    label: "GitHub",
    value: "github.com/yagowill",
    href: "https://github.com/yagowill",
    description: "Projetos, código e histórico de contribuições",
  },
  {
    label: "E-mail",
    value: "yagowill3@gmail.com",
    href: "mailto:yagowill3@gmail.com",
    description: "Para mensagens mais detalhadas",
  },
];

export default function ContatoPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="section-label mb-4">contato</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
          Vamos conversar
        </h1>
        <p className="text-subtle text-lg max-w-xl leading-relaxed">
          Estou aberto a oportunidades de dev backend (ou fullstack), freelas e
          colaborações em projetos interessantes. Se quiser bater um papo, é só
          mandar mensagem.
        </p>
      </div>

      {/* Status */}
      <div className="mb-14 p-5 border border-emerald-400/20 bg-emerald-400/5 rounded-lg flex items-start gap-4">
        <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
        <div>
          <p className="font-display font-semibold text-text mb-1">
            Disponível para oportunidades
          </p>
          <p className="text-subtle text-sm">
            Buscando vaga CLT ou PJ como desenvolvedor backend — Java/Spring
            Boot com abertura para fullstack.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="group flex items-center justify-between p-5 border border-border bg-surface rounded-lg hover:border-accent/40 transition-all duration-300"
          >
            <div>
              <p className="font-mono text-xs text-accent mb-1">{link.label}</p>
              <p className="font-display font-semibold text-text group-hover:text-accent transition-colors">
                {link.value}
              </p>
              <p className="font-mono text-xs text-muted mt-1">
                {link.description}
              </p>
            </div>
            <span className="text-subtle group-hover:text-accent transition-colors text-xl">
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* Nota */}
      <p className="mt-12 font-mono text-xs text-muted text-center">
        # Localização: Brasil · Pará · Belém · Aceito remoto
      </p>
    </div>
  );
}
