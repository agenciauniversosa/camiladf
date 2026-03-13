import { motion } from "framer-motion";
import { Scale, Gavel } from "lucide-react";
import Reveal from "@/components/Reveal";

const areas = [
  {
    title: "Direito Penal Clássico",
    desc: "Atuação estratégica em defesa criminal em todas as instâncias, com ênfase em Tribunais Superiores (STF e STJ).",
    icon: Gavel,
  },
  {
    title: "Indenização Civil",
    desc: "Busca de reparação justa por danos morais e materiais, com análise individualizada de cada caso.",
    icon: Scale,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const AreasSection = () => (
  <section id="areas" className="section-gap">
    <div className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Reveal>
          <p className="label-sm mb-3">Especialidades</p>
          <h2 className="heading-xl text-foreground mb-4">Áreas de atuação</h2>
          <p className="body-md text-muted-foreground">
            Cobertura jurídica completa com profundidade técnica em cada disciplina.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="group relative rounded-2xl border border-border/60 bg-card/50 p-8 hover:border-secondary/30 hover:bg-card transition-all duration-500 cursor-default"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-500">
              <area.icon
                size={22}
                strokeWidth={1.5}
                className="text-secondary group-hover:text-accent transition-colors duration-500"
              />
            </div>

            {/* Content */}
            <h3 className="font-display text-lg font-medium text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
              {area.title}
            </h3>
            <p className="body-sm text-muted-foreground leading-relaxed">
              {area.desc}
            </p>

            {/* Subtle accent line on hover */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-secondary/0 group-hover:bg-secondary/30 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
