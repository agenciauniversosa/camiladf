import { motion } from "framer-motion";
import { Users, Briefcase, Building2, Shield, Receipt, Home } from "lucide-react";
import Reveal from "@/components/Reveal";

const areas = [
  { title: "Direito Civil", desc: "Contratos, responsabilidade civil, família e sucessões com atenção personalizada.", icon: Users },
  { title: "Direito Trabalhista", desc: "Defesa estratégica para empregadores e empregados com soluções negociadas.", icon: Briefcase },
  { title: "Direito Empresarial", desc: "Assessoria societária, fusões, aquisições e governança corporativa.", icon: Building2 },
  { title: "Direito Penal", desc: "Defesa criminal estratégica em todas as instâncias judiciais.", icon: Shield },
  { title: "Direito Tributário", desc: "Planejamento fiscal, contencioso administrativo e judicial tributário.", icon: Receipt },
  { title: "Direito Imobiliário", desc: "Transações, regularização fundiária e due diligence imobiliária.", icon: Home },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const AreasSection = () => (
  <section id="areas" className="section-gap">
    <div className="section-container">
      <Reveal>
        <p className="label-sm mb-3">Especialidades</p>
        <h2 className="heading-xl text-foreground mb-4">Áreas de atuação</h2>
        <p className="body-md text-muted-foreground max-w-md mb-16">
          Cobertura jurídica completa com profundidade técnica em cada disciplina.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ x: 4, transition: { duration: 0.25, ease: "easeOut" } }}
            className="group py-8 border-b border-border/60 flex gap-4 items-start cursor-default"
          >
            <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
              <area.icon size={18} strokeWidth={1.5} className="text-secondary group-hover:text-accent transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-foreground group-hover:text-secondary transition-colors duration-300 mb-2">
                {area.title}
              </h3>
              <p className="body-sm text-muted-foreground">{area.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
