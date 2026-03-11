import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { to: "/#areas", label: "Áreas de Atuação" },
    { to: "/#equipe", label: "Equipe" },
    { to: "/blog", label: "Blog" },
    { to: "/#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Floating pill navbar */}
      <div className={`mx-auto transition-all duration-500 ${
        scrolled 
          ? "max-w-3xl mt-3 px-2" 
          : "max-w-full mt-0 px-0"
      }`}>
        <nav className={`flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "bg-foreground/90 backdrop-blur-xl rounded-full px-6 py-2.5 shadow-lg shadow-foreground/5"
            : "section-container h-20 bg-transparent"
        }`}>
          <Link 
            to="/" 
            className={`font-display text-lg font-medium transition-colors duration-300 ${
              scrolled ? "text-background" : "text-foreground"
            }`}
          >
            Oliveira & Associados
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body text-[13px] px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-background/70 hover:text-background hover:bg-background/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contato"
              className={`font-body text-[12px] font-medium ml-2 px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                scrolled
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Consulta Gratuita
              <ArrowRight size={14} />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled ? "text-background hover:bg-background/10" : "text-foreground hover:bg-muted/50"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 bg-foreground/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className="font-body text-sm text-background/80 hover:text-background py-3 px-4 rounded-xl hover:bg-background/10 transition-colors block"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
              >
                <Link
                  to="/#contato"
                  className="font-body text-[13px] font-medium bg-accent text-accent-foreground px-5 py-3 rounded-full flex items-center justify-center gap-2 mt-3 hover:bg-accent/90 transition-colors"
                >
                  Consulta Gratuita
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
