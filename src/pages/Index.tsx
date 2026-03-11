import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";
import { blogPosts } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";

const areas = [
  { title: "Direito Civil", desc: "Contratos, responsabilidade civil, família e sucessões com atenção personalizada." },
  { title: "Direito Trabalhista", desc: "Defesa estratégica para empregadores e empregados com soluções negociadas." },
  { title: "Direito Empresarial", desc: "Assessoria societária, fusões, aquisições e governança corporativa." },
  { title: "Direito Penal", desc: "Defesa criminal estratégica em todas as instâncias judiciais." },
  { title: "Direito Tributário", desc: "Planejamento fiscal, contencioso administrativo e judicial tributário." },
  { title: "Direito Imobiliário", desc: "Transações, regularização fundiária e due diligence imobiliária." },
];

const stats = [
  { value: "20+", label: "anos de atuação" },
  { value: "500+", label: "clientes atendidos" },
  { value: "98%", label: "de satisfação" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex items-end section-container pb-16 md:pb-24">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="label-sm text-white/60 mb-5"
            >
              Advocacia · São Paulo · Desde 2003
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-xl text-white mb-6"
            >
              Direito com<br />
              <em className="font-normal">substância</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="body-md text-white/70 max-w-sm mb-8"
            >
              Transformamos complexidade jurídica em soluções claras e resultados concretos há mais de duas décadas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-3"
            >
              <Link to="/#contato" className="btn-primary">
                Agendar Consulta <ArrowRight size={15} />
              </Link>
              <Link to="/#areas" className="inline-flex items-center gap-2 border border-white/30 text-white text-[13px] font-medium tracking-wide px-7 py-3 rounded-full hover:bg-white/10 transition-all font-body">
                Nossas Áreas
              </Link>
            </motion.div>
          </div>
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
      <section className="border-b border-border">
        <div className="section-container py-10 md:py-14">
          <div className="flex flex-wrap justify-center md:justify-between gap-10 md:gap-0">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <span className="font-display text-3xl md:text-4xl font-medium text-foreground">{stat.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ÁREAS ═══ */}
      <section id="areas" className="section-gap">
        <div className="section-container">
          <Reveal>
            <p className="label-sm mb-3">Especialidades</p>
            <h2 className="heading-xl text-foreground mb-4">Áreas de<br />atuação</h2>
            <p className="body-md text-muted-foreground max-w-md mb-16">
              Cobertura jurídica completa com profundidade técnica em cada disciplina.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {areas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                className="group py-8 border-b border-border/60"
              >
                <h3 className="font-display text-xl font-medium text-foreground group-hover:text-secondary transition-colors mb-2">
                  {area.title}
                </h3>
                <p className="body-sm text-muted-foreground">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOBRE ═══ */}
      <section className="relative bg-card/60 backdrop-blur-sm">
        <div className="section-container section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <p className="label-sm mb-3">Sobre nós</p>
                <h2 className="heading-xl text-foreground mb-6">Advocacia com<br /><em className="font-normal">propósito</em></h2>
              </div>
            </Reveal>
            <div className="flex flex-col justify-center">
              <Reveal delay={0.15}>
                <blockquote className="font-display text-xl md:text-2xl font-normal text-foreground/80 leading-relaxed mb-8 italic">
                  "Acreditamos que a advocacia deve ser exercida com rigor técnico e sensibilidade humana."
                </blockquote>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="space-y-4">
                  <p className="body-md text-muted-foreground">
                    Fundado em 2003, o escritório Oliveira & Associados nasceu da convicção de que cada demanda jurídica carrega uma história que precisa ser ouvida com atenção.
                  </p>
                  <p className="body-md text-muted-foreground">
                    A relação entre advogado e cliente deve ser construída sobre transparência e confiança mútua. Resultados duradouros nascem de uma compreensão profunda.
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
                <h2 className="heading-xl text-foreground">Artigos<br />recentes</h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/blog" className="btn-outline text-[12px] px-5 py-2 hidden md:inline-flex">
                Ver todos <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <BlogCard post={blogPosts[0]} featured />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {blogPosts.slice(1, 4).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          <div className="mt-10">
            {blogPosts.slice(4, 6).map((post, i) => (
              <BlogCard key={post.id} post={post} variant="compact" index={i} />
            ))}
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
