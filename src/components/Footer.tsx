export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Yago Martins
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yagowill"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yagowill"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yagowill3@gmail.com"
            className="font-mono text-xs text-subtle hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
