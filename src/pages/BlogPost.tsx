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
    if (!post) navigate("/blog");
  }, [slug, post, navigate]);

  if (!post) return null;

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

          {/* Share */}
          <div className="flex items-center gap-6 mb-12">
            <span className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              Compartilhar
            </span>
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-3">
              {[
                {
                  label: "WhatsApp",
                  href: `https://wa.me/?text=${encodeURIComponent(post.title + " — " + window.location.href)}`,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  label: "X",
                  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Compartilhar no ${social.label}`}
                  className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

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
