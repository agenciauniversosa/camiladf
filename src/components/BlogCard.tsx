import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";

const BlogCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => (
  <article className="group relative">
    <Link to={`/blog/${post.slug}`} className="block p-6 md:p-8 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-accent">
            {post.category}
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-body text-[11px] text-muted-foreground">
            {post.date}
          </span>
        </div>

        <h3 className={`font-display font-medium text-foreground group-hover:text-secondary transition-colors duration-300 mb-3 leading-snug ${
          featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        }`}>
          {post.title}
        </h3>

        <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-body text-[11px] text-muted-foreground tracking-wide">
            {post.readTime} de leitura
          </span>
          <ArrowUpRight
            size={18}
            className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>
      </div>
    </Link>
  </article>
);

export default BlogCard;
