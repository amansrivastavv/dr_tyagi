import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Videos", href: "#videos" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-md shadow-[0_2px_24px_rgba(14,165,233,0.08)] border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <div>
            <p className={`text-sm font-semibold leading-none transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>Dr. Gaurav Tyagi</p>
            <p className={`text-[11px] mt-0.5 transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>Senior Neurosurgeon</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors cursor-pointer ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+911234567890" className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${scrolled ? "text-primary" : "text-white"}`}>
            <Phone className="w-4 h-4" />
            +91 12345 67890
          </a>
          <Button size="sm" className="rounded-full px-5 shadow-md cursor-pointer" asChild>
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 cursor-pointer transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="rounded-full w-full mt-2 cursor-pointer" asChild>
                <a href="#contact">Book Appointment</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
