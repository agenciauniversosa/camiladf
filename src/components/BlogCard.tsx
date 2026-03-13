import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
  variant?: "default" | "compact";
}

const cardVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const
    }
  })
};

const BlogCard = ({ post, featured = false, index = 0, variant = "default" }: BlogCardProps) => {
  if (featured) {
    return (
      <motion.article
        className="group"
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        
        <Link to={`/blog/${post.slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="overflow-hidden rounded-lg aspect-[4/3] shadow-md group-hover:shadow-xl transition-shadow duration-500">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
            
          </div>
          <div className="flex flex-col justify-center py-4">
            <p className="label-sm text-accent mb-3">{post.category}</p>
            <h3 className="heading-lg text-foreground group-hover:text-secondary transition-colors duration-300 mb-4">
              {post.title}
            </h3>
            <p className="body-md text-muted-foreground mb-6 max-w-md">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 body-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </Link>
      </motion.article>);

  }

  if (variant === "compact") {
    return (
      <motion.article
        className="group"
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}>
        
        










        
      </motion.article>);

  }

  return (
    <motion.article
      className="group"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}>
      
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden rounded-lg aspect-[16/10] mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-500">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
          
        </div>
        <p className="label-sm text-accent mb-2">{post.category}</p>
        <h3 className="font-display text-lg md:text-xl font-medium text-foreground group-hover:text-secondary transition-colors duration-300 mb-2 leading-snug">
          {post.title}
        </h3>
        <p className="body-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
        <p className="font-body text-[11px] text-muted-foreground/60">{post.date} · {post.readTime}</p>
      </Link>
    </motion.article>);

};

export default BlogCard;