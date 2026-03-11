import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-widest uppercase mb-4">
            Oliveira & Associados
          </h3>
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Advocacia com compromisso, clareza e resultados. Há mais de 20 anos construindo relações de confiança.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold uppercase tracking-wide mb-4">Navegação</h4>
          <ul className="space-y-2">
            {["Início", "Áreas de Atuação", "Sobre", "Blog", "Contato"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Blog" ? "/blog" : "/"}
                  className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="contato">
          <h4 className="font-display text-lg font-semibold uppercase tracking-wide mb-4">Contato</h4>
          <div className="font-body text-sm text-primary-foreground/60 space-y-2">
            <p>Av. Paulista, 1000 — 15º andar</p>
            <p>São Paulo — SP, 01310-100</p>
            <p className="mt-4">contato@oliveiraadvogados.com.br</p>
            <p>(11) 3000-0000</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Oliveira & Associados. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
