import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";

const BlogCard = ({ post, featured = false, index = 0 }: { post: BlogPost; featured?: boolean; index?: number }) => (
  <motion.article
    className="group relative overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  >
    <Link to={`/blog/${post.slug}`} className="block p-6 md:p-8 h-full relative">
      {/* Hover background fill */}
      <div className="absolute inset-0 bg-card origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-accent">
            {post.category}
          </span>
          <span className="h-px flex-1 bg-border group-hover:bg-accent/30 transition-colors duration-500" />
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
          <motion.div
            className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
            whileHover={{ x: 3, y: -3 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </div>
    </Link>
  </motion.article>
);

export default BlogCard;
