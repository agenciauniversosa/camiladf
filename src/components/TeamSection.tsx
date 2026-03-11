import { motion } from "framer-motion";
import advogado1 from "@/assets/team/advogado-1.jpg";
import advogada2 from "@/assets/team/advogada-2.jpg";
import advogado3 from "@/assets/team/advogado-3.jpg";
import advogada4 from "@/assets/team/advogada-4.jpg";
import Reveal from "@/components/Reveal";

const team = [
  {
    name: "Ricardo Oliveira",
    role: "Sócio Fundador",
    specialty: "Direito Empresarial · Tributário",
    bio: "Mais de 25 anos de experiência em assessoria societária e planejamento tributário para empresas de médio e grande porte.",
    image: advogado1,
    oab: "OAB/SP 123.456",
  },
  {
    name: "Mariana Costa",
    role: "Sócia",
    specialty: "Direito Civil · Família e Sucessões",
    bio: "Especialista em planejamento sucessório e direito de família, com atuação focada em mediação e soluções consensuais.",
    image: advogada2,
    oab: "OAB/SP 189.012",
  },
  {
    name: "Lucas Andrade",
    role: "Associado Sênior",
    specialty: "Direito Penal · Digital",
    bio: "Defesa criminal estratégica com foco em crimes cibernéticos e compliance. Mestre em Direito Penal pela USP.",
    image: advogado3,
    oab: "OAB/SP 234.567",
  },
  {
    name: "Camila Ferreira",
    role: "Associada",
    specialty: "Direito Trabalhista · Imobiliário",
    bio: "Atua em contencioso trabalhista e transações imobiliárias, com experiência em due diligence e contratos complexos.",
    image: advogada4,
    oab: "OAB/SP 301.234",
  },
];

const TeamSection = () => (
  <section id="equipe" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-4">
        <Reveal>
          <div>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Quem somos
            </p>
            <h2 className="heading-display text-3xl md:text-5xl text-foreground">
              Nossa Equipe
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
            Profissionais comprometidos com a excelência e a ética em cada caso.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="group bg-background"
          >
            {/* Photo */}
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Overlay info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-body text-xs text-primary-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 md:p-6">
              <h3 className="font-display text-xl font-medium text-foreground mb-0.5">
                {member.name}
              </h3>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-accent mb-2">
                {member.role}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                {member.specialty}
              </p>
              <p className="font-body text-[10px] text-muted-foreground/50 mt-3">
                {member.oab}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
