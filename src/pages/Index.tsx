import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";
import { blogPosts } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";

const practiceAreas = [
  { title: "Direito Civil", desc: "Contratos, responsabilidade civil, família e sucessões." },
  { title: "Direito Trabalhista", desc: "Defesa estratégica para empregadores e empregados." },
  { title: "Direito Empresarial", desc: "Assessoria societária, M&A e governança corporativa." },
  { title: "Direito Penal", desc: "Defesa criminal em todas as instâncias." },
  { title: "Direito Tributário", desc: "Planejamento fiscal e contencioso tributário." },
  { title: "Direito Imobiliário", desc: "Transações, regularização e due diligence." },
];

const stats = [
  { value: "20+", label: "Anos de atuação" },
  { value: "500+", label: "Clientes atendidos" },
  { value: "98%", label: "Satisfação" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroImgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImgY, scale: heroImgScale }}>
          <img
            src={heroImage}
            alt="Escritório de advocacia"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-background" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20 md:pb-28"
        >
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-6"
            >
              Advocacia · São Paulo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="heading-hero text-5xl md:text-7xl lg:text-[6rem] text-primary-foreground mb-8 text-balance"
            >
              Direito com
              <br />
              <span className="italic font-light">substância</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-sm md:text-base text-primary-foreground/60 max-w-md leading-relaxed"
            >
              Mais de duas décadas transformando complexidade jurídica em soluções claras e resultados concretos.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 right-6 md:right-12 lg:right-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} className="text-primary-foreground/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── AREAS DE ATUAÇÃO ─── */}
      <section id="areas" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-4">
            <Reveal>
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Especialidades
                </p>
                <h2 className="heading-display text-3xl md:text-5xl text-foreground">
                  Áreas de Atuação
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
                Cobertura jurídica completa com profundidade técnica em cada área.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {practiceAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group border-t border-border py-10 md:py-14 px-2 md:px-6 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    className="font-body text-[11px] text-muted-foreground/40 mt-2"
                    whileHover={{ color: "hsl(var(--accent))" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {area.desc}
                    </p>
                    <div className="h-px w-0 bg-accent mt-6 group-hover:w-16 transition-all duration-700 ease-out" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOBRE ─── */}
      <section id="sobre" className="relative overflow-hidden">
        <div className="bg-primary text-primary-foreground section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <Reveal>
                  <p className="font-body text-[11px] tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">
                    Desde 2003
                  </p>
                  <h2 className="heading-display text-3xl md:text-5xl text-primary-foreground">
                    Sobre o<br />Escritório
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                <Reveal delay={0.15}>
                  <p className="font-display text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground/80 leading-relaxed mb-8">
                    "Acreditamos que a advocacia deve ser exercida com rigor técnico e sensibilidade humana."
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="space-y-5 max-w-2xl">
                    <p className="font-body text-sm text-primary-foreground/50 leading-loose">
                      Fundado em 2003, o escritório Oliveira & Associados nasceu da convicção de que cada demanda jurídica carrega uma história que precisa ser ouvida com atenção. Nossa equipe multidisciplinar atua nas mais diversas áreas do direito.
                    </p>
                    <p className="font-body text-sm text-primary-foreground/50 leading-loose">
                      A relação entre advogado e cliente deve ser construída sobre transparência e confiança mútua. Cada processo é tratado com a dedicação que merece, porque entendemos que resultados duradouros nascem de uma compreensão profunda.
                    </p>
                  </div>
                </Reveal>
                <div className="flex gap-16 mt-12">
                  {stats.map((stat, i) => (
                    <Reveal key={stat.label} delay={0.4 + i * 0.15}>
                      <div>
                        <span className="font-display text-4xl md:text-5xl font-light text-accent">
                          {stat.value}
                        </span>
                        <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary-foreground/40 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-4">
            <Reveal>
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Publicações
                </p>
                <h2 className="heading-display text-3xl md:text-5xl text-foreground">
                  Artigos Recentes
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.1em] uppercase text-accent hover:text-foreground transition-colors"
              >
                Ver todos <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          {/* Featured post */}
          <div className="border-t border-border mb-0">
            <BlogCard post={blogPosts[0]} featured index={0} />
          </div>

          {/* Grid 5 posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1, 6).map((post, i) => (
              <div key={post.id} className="border-t border-border">
                <BlogCard post={post} index={i + 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
