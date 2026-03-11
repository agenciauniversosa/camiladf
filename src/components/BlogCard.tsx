import { Link } from "react-router-dom";
import type { BlogPost } from "@/lib/blogData";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="group">
    <div className="bg-card p-6 h-full flex flex-col">
      <span className="font-body text-xs tracking-widest uppercase text-accent mb-3">
        {post.category}
      </span>
      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-body text-xs text-muted-foreground">
          {post.date} · {post.readTime}
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="font-body text-xs tracking-wide uppercase text-accent hover:text-foreground transition-colors underline underline-offset-4"
        >
          Ler mais
        </Link>
      </div>
    </div>
  </article>
);

export default BlogCard;
