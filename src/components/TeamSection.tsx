import { motion } from "framer-motion";
import advogado1 from "@/assets/team/advogado-1.jpg";
import advogada2 from "@/assets/team/advogada-2.jpg";
import advogado3 from "@/assets/team/advogado-3.jpg";
import advogada4 from "@/assets/team/advogada-4.jpg";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Ricardo Oliveira", role: "Sócio Fundador", specialty: "Direito Empresarial · Tributário", bio: "Mais de 25 anos de experiência em assessoria societária e planejamento tributário.", image: advogado1, oab: "OAB/SP 123.456" },
  { name: "Mariana Costa", role: "Sócia", specialty: "Direito Civil · Família e Sucessões", bio: "Especialista em planejamento sucessório com foco em mediação.", image: advogada2, oab: "OAB/SP 189.012" },
  { name: "Lucas Andrade", role: "Associado Sênior", specialty: "Direito Penal · Digital", bio: "Defesa criminal com foco em crimes cibernéticos. Mestre pela USP.", image: advogado3, oab: "OAB/SP 234.567" },
  { name: "Camila Ferreira", role: "Associada", specialty: "Direito Trabalhista · Imobiliário", bio: "Contencioso trabalhista e transações imobiliárias.", image: advogada4, oab: "OAB/SP 301.234" },
];

const TeamSection = () => (
  <section id="equipe" className="section-gap">
    <div className="section-container">
      <Reveal>
        <p className="label-sm mb-3">Equipe</p>
        <h2 className="heading-xl text-foreground mb-4">Quem faz<br />acontecer</h2>
        <p className="body-md text-muted-foreground max-w-md mb-16">
          Profissionais comprometidos com a excelência técnica e a ética em cada caso.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="group"
          >
            <div className="overflow-hidden rounded-xl aspect-[3/4] mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground mb-0.5">{member.name}</h3>
            <p className="font-body text-[12px] font-medium text-accent mb-1">{member.role}</p>
            <p className="font-body text-xs text-muted-foreground">{member.specialty}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
