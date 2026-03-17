"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "início" },
  { href: "/projetos", label: "projetos" },
  { href: "/blog", label: "blog" },
  { href: "/contato", label: "contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-sm font-medium text-text flex items-center gap-2 group">
          <span className="text-accent group-hover:text-text transition-colors">~/</span>
          <span className="group-hover:text-accent transition-colors">Yago-Martins</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-subtle hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/yagowill"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-accent transition-colors"
          >
            github ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-subtle hover:text-text transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-mono text-sm ${
                pathname === link.href ? "text-accent" : "text-subtle"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/yagowill"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-subtle"
          >
            github ↗
          </a>
        </nav>
      )}
    </header>
  );
}
