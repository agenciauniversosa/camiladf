import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="px-6 md:px-12 lg:px-20 pt-20 pb-8">
      {/* Top: Large CTA */}
      <div className="mb-20">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
          Próximo passo
        </p>
        <Link
          to="/#contato"
          className="group inline-flex items-end gap-4"
        >
          <span className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground/90 group-hover:text-accent transition-colors duration-500">
            Fale conosco
          </span>
          <ArrowUpRight className="text-accent mb-2 md:mb-3" size={32} />
        </Link>
      </div>

      <div className="divider-line !bg-primary-foreground/10 mb-12" />

      {/* Bottom grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-lg font-medium tracking-[0.15em] uppercase mb-4">
            Oliveira & Associados
          </h3>
          <p className="font-body text-sm text-primary-foreground/50 leading-relaxed max-w-sm">
            Advocacia com compromisso, clareza e resultados concretos. Há mais de 20 anos construindo relações de confiança.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
            Navegação
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Início", to: "/" },
              { label: "Áreas de Atuação", to: "/#areas" },
              { label: "Sobre", to: "/#sobre" },
              { label: "Blog", to: "/blog" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div id="contato">
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-4">
            Contato
          </h4>
          <div className="font-body text-sm text-primary-foreground/60 space-y-1.5">
            <p>Av. Paulista, 1000 — 15º andar</p>
            <p>São Paulo — SP, 01310-100</p>
            <p className="mt-3">contato@oliveiraadvogados.com.br</p>
            <p>(11) 3000-0000</p>
          </div>
        </div>
      </div>

      <div className="divider-line !bg-primary-foreground/10 mt-12 mb-6" />

      <p className="font-body text-[11px] text-primary-foreground/30 tracking-wide">
        © {new Date().getFullYear()} Oliveira & Associados. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
