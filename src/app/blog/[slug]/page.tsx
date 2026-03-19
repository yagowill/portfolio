import { getPost, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/blog"
        className="font-mono text-sm text-subtle hover:text-accent transition-colors mb-10 inline-block"
      >
        ← blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <time>
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-invert prose-orange max-w-none
        prose-headings:font-display prose-headings:font-bold
        prose-p:text-subtle prose-p:leading-relaxed
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent prose-code:bg-surface prose-code:px-1 prose-code:rounded
        prose-pre:bg-surface prose-pre:border prose-pre:border-border
        prose-blockquote:border-accent prose-blockquote:text-muted
        prose-strong:text-text
        prose-hr:border-border">
        <MDXRemote source={post.content} />
      </article>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="font-mono text-sm text-subtle hover:text-accent transition-colors"
        >
          ← voltar para o blog
        </Link>
      </div>
    </div>
  );
}
