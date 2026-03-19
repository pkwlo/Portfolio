import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { posts } from "../utils/blog";
import BlogSidebar from "../components/BlogSidebar";

const POSTS_PER_PAGE = 5;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const currentPage = Math.min(page, totalPages || 1);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams);
    if (p <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(p));
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="max-w-4xl mx-auto px-6 py-6 md:py-12 md:px-8">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="hidden md:block md:w-56 shrink-0">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            {activeTag && (
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mb-8 transition-colors"
              >
                <ArrowLeft className="size-4" />
                All posts
              </Link>
            )}
            {!activeTag && <div className="mb-8" />}
            <div className="flex flex-col gap-8">
              {paginated.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-xl bg-white/5 p-6 md:p-8"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text)] mb-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block hover:text-[var(--color-accent)] transition-colors"
                    >
                      {post.title}
                    </Link>
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
                          className="px-2.5 py-1 text-xs font-medium rounded-md transition-colors bg-[var(--color-navbar-bg)] text-[var(--color-navbar-text)]"
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

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="size-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`size-8 rounded-full text-sm font-medium transition-colors ${
                      p === currentPage
                        ? "bg-[var(--color-navbar-bg)] text-[var(--color-navbar-text)]"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-white/10"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
