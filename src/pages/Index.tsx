import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";
import camilaImage from "@/assets/team/camila.png";
import { blogPosts } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import AreasSection from "@/components/AreasSection";
import StatsBar from "@/components/StatsBar";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const heroTextVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const heroChildVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[30%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute top-[40%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-secondary/[0.03] blur-[100px]" />
        <div className="absolute -bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[600px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={heroImage} alt="Escritório" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(75,30%,8%)]/80 via-[hsl(75,30%,8%)]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(75,30%,8%)] via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex items-center section-container pb-0 md:pb-0 pt-16">
          <motion.div
            className="max-w-2xl"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={heroChildVariants} className="label-sm text-white/60 mb-5">
              Dias Frazão Advocacia · Atuação Nacional
            </motion.p>
            <motion.h1 variants={heroChildVariants} className="heading-xl text-white mb-6">
              Estratégia, técnica e
              <em className="font-normal"> defesa penal de alto nível</em>
            </motion.h1>
            <motion.p variants={heroChildVariants} className="body-md text-white/70 max-w-sm mb-8">
              Advocacia artesanal e customizada em Direito Penal Clássico, com ênfase em Tribunais Superiores.
            </motion.p>
            <motion.div variants={heroChildVariants} className="flex gap-3">
              <Link to="/#contato" className="btn-primary group">
                Agendar Consulta <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/#areas" className="inline-flex items-center gap-2 border border-white/30 text-white text-[13px] font-medium tracking-wide px-7 py-3 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-body">
                Nossas Áreas
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={18} className="text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <StatsBar />

      {/* ═══ ÁREAS ═══ */}
      <AreasSection />

      {/* ═══ SOBRE ═══ */}
      <section className="relative bg-card/60 backdrop-blur-sm">
        <div className="section-container section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)]">
                  <img
                    src={camilaImage}
                    alt="Camila Caroline Dias Frazão - Advogada Criminalista"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg">
                  <p className="font-display text-sm font-medium">Camila C. Dias Frazão</p>
                  <p className="font-body text-[11px] opacity-80">Fundadora · OAB/SP</p>
                </div>
              </div>
            </Reveal>
            <div className="flex flex-col justify-center">
              <Reveal delay={0.1}>
                <p className="label-sm mb-3">Sobre o escritório</p>
                <h2 className="heading-xl text-foreground mb-6">Advocacia <em className="font-normal">artesanal</em></h2>
              </Reveal>
              <Reveal delay={0.15}>
                <blockquote className="font-display text-xl md:text-2xl font-normal text-foreground/80 leading-relaxed mb-8 italic">
                  "Excelência técnica, confidencialidade e compromisso inegociável com a defesa de direitos e garantias fundamentais."
                </blockquote>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="space-y-4">
                  <p className="body-md text-muted-foreground">
                    Escritório boutique dedicado à atuação estratégica em Direito Penal Clássico. Sob uma atuação qualificada, busca-se construir soluções jurídicas consistentes em todas as instâncias, com ênfase em Tribunais Superiores.
                  </p>
                  <p className="body-md text-muted-foreground">
                    Fundado e conduzido pela advogada Camila Caroline Dias Frazão, o escritório atua em todo o território nacional, oferecendo uma advocacia artesanal e customizada, pautada na análise individual de cada caso.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EQUIPE ═══ */}
      <TeamSection />

      {/* ═══ BLOG ═══ */}
      <section className="section-gap relative bg-card/60 backdrop-blur-sm">
        <div className="section-container">
          <div className="flex items-end justify-between mb-14">
            <Reveal>
              <div>
                <p className="label-sm mb-3">Publicações</p>
                <h2 className="heading-xl text-foreground">Artigos recentes</h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/blog" className="btn-outline text-[12px] px-5 py-2 hidden md:inline-flex group">
                Ver todos <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <BlogCard post={blogPosts[0]} featured />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {blogPosts.slice(1, 4).map((post, i) =>
              <BlogCard key={post.id} post={post} index={i} />
            )}
          </div>

          <div className="mt-10">
            {blogPosts.slice(4, 6).map((post, i) =>
              <BlogCard key={post.id} post={post} variant="compact" index={i} />
            )}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="btn-outline text-[12px] px-5 py-2">
              Ver todos os artigos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CONTATO ═══ */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;
