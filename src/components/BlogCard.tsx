import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
  variant?: "default" | "compact";
}

const BlogCard = ({ post, featured = false, index = 0, variant = "default" }: BlogCardProps) => {
  if (featured) {
    return (
      <motion.article
        className="group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            {/* Content */}
            <div className="bg-card p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="font-body text-[11px] tracking-[0.25em] uppercase text-accent mb-4">
                {post.category}
              </span>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground group-hover:text-secondary transition-colors duration-300 mb-4 leading-snug">
                {post.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-body text-[11px] text-muted-foreground tracking-wide">
                  {post.date} · {post.readTime}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        className="group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link to={`/blog/${post.slug}`} className="flex gap-5 p-5 md:p-6 h-full">
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-accent mb-1.5">
              {post.category}
            </span>
            <h3 className="font-display text-base md:text-lg font-medium text-foreground group-hover:text-secondary transition-colors duration-300 leading-snug line-clamp-2">
              {post.title}
            </h3>
            <span className="font-body text-[10px] text-muted-foreground mt-2">
              {post.date}
            </span>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default card with image
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
          <span className="absolute top-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase bg-background/90 backdrop-blur-sm text-accent px-3 py-1.5">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="font-display text-lg md:text-xl font-medium text-foreground group-hover:text-secondary transition-colors duration-300 mb-2.5 leading-snug">
            {post.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-body text-[11px] text-muted-foreground tracking-wide">
              {post.date} · {post.readTime}
            </span>
            <ArrowUpRight
              size={16}
              className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
