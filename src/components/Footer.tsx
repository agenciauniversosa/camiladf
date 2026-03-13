import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="section-container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Reveal>
             <h3 className="font-display text-lg font-medium text-foreground mb-3">
              Dias Frazão Advocacia
            </h3>
            <p className="body-sm text-muted-foreground max-w-sm mb-6">
              Estratégia, técnica e defesa penal de alto nível. Atuação em todo o território nacional.
            </p>
            <p className="body-sm text-muted-foreground">
              contato@diasfrazao.adv.br<br />
              (11) 99999-9999
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <Reveal delay={0.1}>
            <p className="label-sm mb-4">Navegação</p>
            <ul className="space-y-2.5">
              {[
                { label: "Áreas de Atuação", to: "/#areas" },
                { label: "Equipe", to: "/#equipe" },
                { label: "Blog", to: "/blog" },
                { label: "Contato", to: "/#contato" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="body-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-3">
          <Reveal delay={0.2}>
            <p className="label-sm mb-4">Endereço</p>
            <p className="body-sm text-muted-foreground">
              Av. Paulista, 1000<br />
              15º andar — São Paulo, SP<br />
              01310-100
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="border-t border-border mt-14 pt-6">
          <p className="font-body text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Dias Frazão Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </Reveal>
    </div>
  </footer>
);

export default Footer;
