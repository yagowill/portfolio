import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre Java, Spring Boot, Python e desenvolvimento de software.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="section-label mb-4">blog</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
          Anotações de um dev em transição
        </h1>
        <p className="text-subtle text-lg max-w-xl">
          Escrevo sobre o que aprendo: Java, Spring Boot, automações com Python,
          e lições da trilha dev.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-lg">
          <p className="font-mono text-sm text-muted">
            # em breve — primeiro post chegando
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}
