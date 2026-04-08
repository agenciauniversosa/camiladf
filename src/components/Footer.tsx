import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import logoDark from "@/assets/logo-dark.png";
import { Mail, ArrowUpRight, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-16 md:py-20">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <Reveal>
            <img src={logoDark} alt="Dias Frazão Advocacia" className="h-16 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="body-sm text-primary-foreground/50 max-w-sm leading-relaxed">
              Estratégia, técnica e defesa penal de alto nível. Advocacia artesanal e customizada com atuação em todo o território nacional.
            </p>
          </Reveal>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 md:col-start-7">
          <Reveal delay={0.1}>
            <p className="label-sm text-primary-foreground/40 mb-5">Navegação</p>
            <ul className="space-y-3">
              {[
                { label: "Página Inicial", to: "/" },
                { label: "Áreas de Atuação", to: "/#areas" },
                { label: "Blog", to: "/blog" },
                { label: "Contato", to: "/#contato" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="body-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    {item.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-1 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Contact & Social */}
        <div className="md:col-span-3">
          <Reveal delay={0.2}>
            <p className="label-sm text-primary-foreground/40 mb-5">Contato</p>
            <a
              href="mailto:camila@diasfrazao.com.br"
              className="body-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Mail size={14} className="opacity-60" />
              camila@diasfrazao.com.br
            </a>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom bar */}
      <Reveal>
        <div className="border-t border-primary-foreground/10 mt-14 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-[11px] text-primary-foreground/30">
            © {new Date().getFullYear()} Dias Frazão Advocacia. Todos os direitos reservados.
          </p>
          <p className="font-body text-[11px] text-primary-foreground/30">
            Camila Dias Frazão · OAB/DF 71.545
          </p>
        </div>
      </Reveal>
    </div>
  </footer>
);

export default Footer;
