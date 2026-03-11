import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    { to: "/#equipe", label: "Equipe" },
    { to: "/blog", label: "Blog" },
    { to: "/#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""}`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl font-medium text-foreground">
          Oliveira & Associados
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-body text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/#contato" className="btn-primary text-[12px] px-5 py-2">
            Consulta Gratuita
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground" aria-label="Menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="section-container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="font-body text-sm text-foreground py-2">
                {l.label}
              </Link>
            ))}
            <Link to="/#contato" className="btn-primary text-[12px] px-5 py-2.5 w-fit mt-2">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
