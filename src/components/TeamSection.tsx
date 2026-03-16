import { motion } from "framer-motion";
import camilaImage from "@/assets/team/camila.png";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Camila Caroline Dias Frazão", role: "Fundadora", specialty: "Direito Penal Clássico · Tribunais Superiores", bio: "Advogada criminalista com atuação estratégica em todas as instâncias, dedicada à defesa de direitos e garantias fundamentais.", image: camilaImage, oab: "OAB/DF 71.545" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const TeamSection = () => (
  <section id="equipe" className="section-gap">
    <div className="section-container">
      <Reveal>
        <p className="label-sm mb-3">Equipe</p>
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-16">
          <h2 className="heading-xl text-foreground">Quem faz acontecer</h2>
          <p className="body-md text-muted-foreground max-w-md md:pb-1">
            Profissionais comprometidos com a excelência técnica e a ética em cada caso.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group cursor-default"
          >
            <div className="overflow-hidden rounded-xl aspect-[3/4] mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
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
