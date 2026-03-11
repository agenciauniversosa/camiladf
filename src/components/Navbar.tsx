import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 100) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Início" },
    { to: "/#areas", label: "Áreas de Atuação" },
    { to: "/#sobre", label: "Sobre" },
    { to: "/blog", label: "Blog" },
    { to: "/#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="font-display text-2xl font-semibold tracking-widest uppercase text-primary-foreground">
            Oliveira & Associados
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-body text-sm tracking-wide text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-primary border-t border-secondary/20 pb-6">
            <ul className="flex flex-col items-center gap-4 pt-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-sm tracking-wide text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
