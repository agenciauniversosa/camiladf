import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    useEffect(() => { navigate("/blog"); }, []);
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Cover image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-primary/20" />
      </motion.div>

      {/* Article */}
      <article className="relative -mt-32 z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="mb-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={14} /> Voltar ao blog
              </Link>

              <div className="flex items-center gap-3 mb-5">
                <span className="font-body text-[11px] tracking-[0.25em] uppercase text-accent">
                  {post.category}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="font-body text-[11px] text-muted-foreground">
                  {post.date} · {post.readTime}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight text-balance">
                {post.title}
              </h1>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={0.2}>
            <div className="space-y-6 mb-20">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`font-body text-base leading-loose ${
                    i === 0
                      ? "text-foreground text-lg leading-loose first-letter:text-5xl first-letter:font-display first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-secondary"
                      : "text-muted-foreground"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Divider */}
          <div className="h-px bg-border mb-12" />

          {/* Navigation */}
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex flex-col p-6 border border-border hover:border-accent/40 transition-colors"
              >
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                  <ArrowLeft size={12} /> Anterior
                </span>
                <span className="font-display text-lg font-medium text-foreground group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex flex-col items-end text-right p-6 border border-border hover:border-accent/40 transition-colors"
              >
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                  Próximo <ArrowRight size={12} />
                </span>
                <span className="font-display text-lg font-medium text-foreground group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* CTA */}
          <Reveal>
            <div className="text-center mb-20">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Precisa de orientação sobre este tema?
              </p>
              <Link
                to="/#contato"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-olive-medium transition-colors"
              >
                Fale Conosco <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
