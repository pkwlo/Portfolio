// blog.ts
const modules = import.meta.glob<string>("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
}

function getSlug(path: string): string {
  const parts = path.replace(/\\/g, "/").split("/");
  const filename = parts[parts.length - 1] ?? "";
  return filename.replace(/\.md$/, "");
}

export const posts: Post[] = Object.entries(modules)
  .map(([path, rawContent]) => {
    const slug = getSlug(path);

    // 1. Split frontmatter from body using Regex
    // This looks for the content between the first two sets of ---
    const match = rawContent.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
    
    const frontmatterRaw = match ? match[1] : "";
    const body = match ? match[2] : rawContent;

    // 2. Simple YAML-ish parser (key: value)
    const data: Record<string, string> = {};
    frontmatterRaw.split("\n").forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
        data[key] = value;
      }
    });

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt,
      content: body.trim(),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}