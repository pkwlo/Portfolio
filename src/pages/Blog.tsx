import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { posts } from "../utils/blog";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-mesh pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-12">
          Patricia's Dev Blog
        </h1>
        <div className="flex flex-col gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="block rounded-xl border border-[var(--color-border)] bg-[#e6beae] p-6 md:p-8 hover:bg-[#eee4e1] transition-colors"
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
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#ecf8f8] text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
