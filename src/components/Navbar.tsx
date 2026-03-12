import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "SAT Prep", href: "/sat" },
  { label: "For Creators", href: "/creator" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-5">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary-foreground">
            <path d="M14 2L2 8l12 6 12-6-12-6z" fill="currentColor" opacity="0.8"/>
            <path d="M2 14l12 6 12-6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            <path d="M2 20l12 6 12-6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
          <span className="font-satoshi font-bold text-lg tracking-wider text-primary-foreground">
            IELTS AI
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions - Tarteel style: Log in (outlined) + Download (filled) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="px-5 py-2 text-sm font-medium text-primary-foreground border border-primary-foreground/30 rounded-full hover:border-primary-foreground/60 transition-colors"
          >
            Log in
          </a>
          <a
            href="#start"
            className="px-5 py-2 text-sm font-medium bg-primary-foreground text-primary rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-primary-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-foreground/95 backdrop-blur-xl"
        >
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-primary-foreground/10">
              <a href="#login" className="text-sm font-medium text-primary-foreground/70 text-center">Log in</a>
              <a href="#start" className="px-5 py-2.5 text-sm font-medium bg-primary-foreground text-primary rounded-full text-center">Get Started</a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
