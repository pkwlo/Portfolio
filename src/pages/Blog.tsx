import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { posts } from "../utils/blog";

export default function Blog() {
  const [searchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="max-w-4xl mx-auto px-6 py-6 md:py-12 md:px-8">
        {activeTag && (
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            All posts
          </Link>
        )}

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-2">
          {activeTag ? `Tagged: ${activeTag}` : "Patricia's Dev Blog"}
        </h1>
        {activeTag && (
          <p className="text-sm text-[var(--color-text-muted)] mb-8">
            {filtered.length} {filtered.length === 1 ? "post" : "posts"}
          </p>
        )}
        {!activeTag && <div className="mb-8" />}

        <div className="flex flex-col gap-8">
          {filtered.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-[var(--color-border)] bg-[#e6beae] p-6 md:p-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2">
                {post.title}
              </h2>
              {post.date && (
                <time className="text-sm text-[var(--color-text-muted)]">
                  {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {post.excerpt && (
                <p className="mt-3 text-[var(--color-text-muted)]">
                  {post.excerpt}
                </p>
              )}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${encodeURIComponent(tag)}`}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors bg-[#ecf8f8] text-[var(--color-text-muted)]`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-block mt-5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:underline underline-offset-2 transition-colors"
              >
                Read more &rarr;
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
