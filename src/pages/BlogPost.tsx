import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPost } from "../utils/blog";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-mesh flex flex-col items-center justify-center px-6 pt-24">
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
          Post not found
        </h1>
        <Link
          to="/blog"
          className="text-[var(--color-accent)] hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-mesh pt-24">
      <article className="max-w-3xl mx-auto px-6 py-12 md:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-8 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>
        <div className="prose prose-invert max-w-none rounded-xl border border-[var(--color-border)] bg-[#e6beae] p-6 md:p-8">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
              {post.title}
            </h1>
            {post.date && (
              <time className="text-sm text-[var(--color-text-muted)]">
                {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#ecf8f8] text-[var(--color-text-muted)] transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-semibold text-[var(--color-text)] mt-8 mb-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-[var(--color-text)] mt-6 mb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold text-[var(--color-text)] mt-4 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-[var(--color-text-muted)] mb-4 space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-[var(--color-text-muted)] mb-4 space-y-1">
                  {children}
                </ol>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-[#eee4e1] text-[var(--color-text)] text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="p-4 rounded-lg bg-[#eee4e1] overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
