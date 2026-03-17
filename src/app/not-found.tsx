import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 min-h-[80vh] flex items-center">
      <div>
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-text mb-4">
          Página não<br />encontrada
          <span className="text-accent cursor-blink">_</span>
        </h1>
        <p className="text-subtle text-lg mb-10 max-w-md">
          Essa rota não existe. Talvez o link esteja errado, ou a página foi
          movida.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-accent text-bg font-display font-semibold text-sm rounded hover:bg-orange-400 transition-colors"
          >
            Ir para o início →
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-border text-text font-mono text-sm rounded hover:border-accent hover:text-accent transition-colors"
          >
            Ver blog
          </Link>
        </div>
      </div>
    </div>
  );
}
