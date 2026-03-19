import { Link } from "react-router-dom";
import { posts } from "../utils/blog";

const RECENT_COUNT = 5;

const allTags = Array.from(
  posts.reduce((map, post) => {
    post.tags.forEach((tag) => map.set(tag, (map.get(tag) ?? 0) + 1));
    return map;
  }, new Map<string, number>())
).sort((a, b) => b[1] - a[1]);

const recentPosts = posts.slice(0, RECENT_COUNT);

export default function BlogSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
          Recent Posts
        </h3>
        <ul className="flex flex-col gap-3">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="text-sm text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors leading-snug"
              >
                {post.title}
              </Link>
              {post.date && (
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map(([tag, count]) => (
            <Link
              key={tag}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-[var(--color-text-muted)] hover:bg-[var(--color-navbar-bg)] hover:text-[var(--color-navbar-text)] transition-colors"
            >
              {tag} ({count})
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
