import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (currentY < 100) setVisible(true);
      else if (currentY < lastScrollY.current) setVisible(true);
      else setVisible(false);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const links = [
    { to: "/#areas", label: "Áreas" },
    { to: "/#sobre", label: "Sobre" },
    { to: "/blog", label: "Blog" },
    { to: "/#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <nav className="flex items-center justify-between py-5 px-6 md:px-12 lg:px-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-medium tracking-[0.2em] uppercase text-foreground">
          Oliveira<span className="text-secondary">&</span>Associados
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="font-body text-[13px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contato"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-body text-[13px] tracking-[0.1em] uppercase px-5 py-2.5 hover:bg-olive-medium transition-colors duration-300"
            >
              Consulta <ArrowUpRight size={14} />
            </Link>
          </li>
        </ul>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground" aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col gap-1 p-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block font-body text-sm tracking-wide py-3 text-foreground hover:text-accent transition-colors border-b border-border/50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                to="/#contato"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-body text-sm tracking-wide px-6 py-3"
              >
                Agendar Consulta <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
