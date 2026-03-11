import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Practice", href: "#practice" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={spring}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80"
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        <a href="/" className="font-satoshi font-bold text-xl tracking-tight text-foreground">
          IELTS<span className="text-primary">.AI</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-full transition-colors hover:text-foreground hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </a>
          <motion.a
            href="#start"
            className="px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
          >
            Start Free Trial
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
        >
          <div className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground rounded-lg hover:bg-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
              <a href="#login" className="px-4 py-3 text-sm font-medium text-muted-foreground text-center">Log in</a>
              <a href="#start" className="px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-full text-center">Start Free Trial</a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
