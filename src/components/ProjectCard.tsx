interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  status?: string;
}

const statusColors: Record<string, string> = {
  "em produção": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  "em uso": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  portfólio: "text-accent border-accent/30 bg-accent/5",
  wip: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
};

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  status,
}: ProjectCardProps) {
  return (
    <article className="group relative bg-surface border border-border rounded-lg p-5 hover:border-accent/40 transition-all duration-300 flex flex-col gap-4">
      {/* Status badge */}
      {status && (
        <span
          className={`self-start font-mono text-[10px] px-2 py-0.5 rounded border ${
            statusColors[status] ?? "text-subtle border-border"
          }`}
        >
          {status}
        </span>
      )}

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-text group-hover:text-accent transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-subtle leading-relaxed flex-1">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1 border-t border-border">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-subtle hover:text-accent transition-colors"
          >
            Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
