import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top bar — only visible before scroll */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="bg-primary text-primary-foreground">
            <div className="section-container flex items-center justify-end h-9 gap-6">
              <a
                href="tel:+5511999999999"
                className="font-body text-[11px] tracking-wide flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone size={11} />
                (11) 99999-9999
              </a>
              <span className="font-body text-[11px] tracking-wide opacity-60 hidden sm:inline">
                Seg–Sex · 9h às 18h
              </span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "bg-background/95 backdrop-blur-2xl shadow-[0_1px_0_0_hsl(var(--border)/0.5)]"
              : "bg-background/0"
          }`}
        >
          <nav className="section-container flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="font-display text-primary-foreground text-sm font-semibold leading-none">
                  O
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[15px] font-semibold text-foreground leading-tight">
                  Oliveira
                </span>
                <span className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground leading-tight">
                  & Associados
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-0.5 bg-muted/40 rounded-full p-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="font-body text-[13px] text-muted-foreground hover:text-foreground px-4 py-1.5 rounded-full hover:bg-background hover:shadow-sm transition-all duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/#contato"
                className="btn-primary text-[12px] px-5 py-2 ml-4"
              >
                Consulta Gratuita
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/60 transition-colors"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} className="text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} className="text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>

        {/* Mobile fullscreen overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 top-[calc(theme(spacing.16)+theme(spacing.9))] bg-background z-40"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="section-container pt-8 pb-10 flex flex-col h-full"
              >
                <div className="flex flex-col gap-1 flex-1">
                  {links.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={l.to}
                        className="font-display text-3xl font-medium text-foreground py-4 block border-b border-border/50 hover:pl-2 transition-all duration-300"
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + links.length * 0.06, duration: 0.4 }}
                  className="mt-auto space-y-4"
                >
                  <Link
                    to="/#contato"
                    className="btn-primary w-full justify-center py-4 text-sm"
                  >
                    Consulta Gratuita
                  </Link>
                  <a
                    href="tel:+5511999999999"
                    className="font-body text-sm text-muted-foreground flex items-center justify-center gap-2"
                  >
                    <Phone size={14} />
                    (11) 99999-9999
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
