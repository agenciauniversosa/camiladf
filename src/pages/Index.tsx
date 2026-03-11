import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-law.jpg";
import { blogPosts } from "@/lib/blogData";
import BlogCard from "@/components/BlogCard";
import ParallaxSection from "@/components/ParallaxSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const practiceAreas = [
  { title: "Direito Civil", description: "Contratos, responsabilidade civil, família e sucessões com atenção personalizada." },
  { title: "Direito Trabalhista", description: "Defesa de empregadores e empregados com foco em soluções negociadas." },
  { title: "Direito Empresarial", description: "Assessoria societária, fusões, aquisições e governança corporativa." },
  { title: "Direito Penal", description: "Defesa criminal estratégica com atuação em todas as instâncias." },
  { title: "Direito Tributário", description: "Planejamento fiscal, contencioso administrativo e judicial tributário." },
  { title: "Direito Imobiliário", description: "Transações, regularização fundiária e due diligence imobiliária." },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={heroImage}
            alt="Escritório de advocacia moderno"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </motion.div>
      </section>

      {/* Hero title block */}
      <section className="bg-primary py-16 md:py-24 px-6 relative z-10">
        <div className="container mx-auto">
          <h1 className="heading-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground max-w-4xl leading-tight">
            Direito com substância.<br />
            Advocacia com propósito.
          </h1>
          <p className="font-body text-primary-foreground/70 mt-6 max-w-xl text-lg">
            Mais de duas décadas de atuação construindo relações de confiança e resultados concretos para nossos clientes.
          </p>
          <Link
            to="/#contato"
            className="inline-block mt-8 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-golden-olive transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <ParallaxSection speed={0.15}>
        <section id="areas" className="py-20 md:py-32 px-6">
          <div className="container mx-auto">
            <h2 className="heading-display text-2xl md:text-4xl text-foreground mb-16 text-center">
              Áreas de Atuação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-background p-8 md:p-12 group hover:bg-card transition-colors"
                >
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  <div className="h-0.5 w-8 bg-accent mt-6 group-hover:w-16 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Sobre */}
      <ParallaxSection speed={0.2} className="bg-card">
        <section id="sobre" className="py-20 md:py-32 px-6">
          <div className="container mx-auto flex justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="heading-display text-2xl md:text-4xl text-foreground mb-8">
                Sobre o Escritório
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-loose mb-6">
                Fundado em 2003, o escritório Oliveira & Associados nasceu da convicção de que a advocacia deve ser exercida com rigor técnico e sensibilidade humana. Nossa equipe multidisciplinar atua nas mais diversas áreas do direito, sempre buscando soluções que respeitem a singularidade de cada caso.
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
                Acreditamos que a relação entre advogado e cliente deve ser construída sobre transparência e confiança mútua. Cada processo é tratado com a dedicação que merece, porque entendemos que por trás de cada demanda há uma história que precisa ser ouvida.
              </p>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Blog Preview */}
      <ParallaxSection speed={0.1}>
        <section className="py-20 md:py-32 px-6">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-16">
              <h2 className="heading-display text-2xl md:text-4xl text-foreground">
                Publicações Recentes
              </h2>
              <Link
                to="/blog"
                className="hidden md:inline-block font-body text-sm tracking-wide uppercase text-accent hover:text-foreground transition-colors underline underline-offset-4"
              >
                Ver todas
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {blogPosts.slice(0, 6).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                to="/blog"
                className="font-body text-sm tracking-wide uppercase text-accent hover:text-foreground transition-colors underline underline-offset-4"
              >
                Ver todas as publicações
              </Link>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA */}
      <section className="bg-primary py-20 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <h2 className="heading-display text-2xl md:text-4xl text-primary-foreground mb-6">
            Precisa de Orientação Jurídica?
          </h2>
          <p className="font-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
            Entre em contato para uma consulta inicial. Estamos prontos para ouvir e orientar.
          </p>
          <Link
            to="/#contato"
            className="inline-block bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-golden-olive transition-colors"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
