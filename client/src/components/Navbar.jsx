import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Invitation", href: "#invitation" },
  { label: "Details", href: "#details" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-black/80 backdrop-blur-lg border-b border-gold/10" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <motion.a href="#" className="font-serif text-xl gold-text" whileHover={{ scale: 1.05 }}>
          V & H 💍
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="font-body text-xs tracking-widest uppercase text-beige/60 hover:text-gold transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="text-gold/60 hover:text-gold text-lg" aria-label="Toggle dark mode">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="text-gold/60 text-lg" aria-label="Toggle dark mode">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gold text-2xl" aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gold/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-beige/60 hover:text-gold transition-colors py-2 border-b border-gold/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
