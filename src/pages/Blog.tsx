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
                    {new Date(post.date).toLocaleDateString("en-US", {
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
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
