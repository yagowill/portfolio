import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  tags?: string[];
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-5 border border-border rounded-lg bg-surface hover:border-accent/40 transition-all duration-300">
        {/* Date */}
        <div className="md:w-32 shrink-0">
          <time className="font-mono text-xs text-muted">
            {new Date(date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
          {readingTime && (
            <p className="font-mono text-xs text-muted mt-1">{readingTime}</p>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display font-semibold text-text group-hover:text-accent transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-subtle leading-relaxed mb-3">
            {description}
          </p>
          {tags && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <span className="hidden md:block text-subtle group-hover:text-accent transition-colors text-lg">
          →
        </span>
      </article>
    </Link>
  );
}
