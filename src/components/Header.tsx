import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Collections", href: "#collections" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-maroon-dark/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold text-gold">
              कल्पतरु
            </span>
            <span className="hidden sm:block font-serif text-lg text-cream/90">
              Jewellers
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm text-cream/80 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-sans text-sm">Call Now</span>
            </a>
            <Button variant="gold" size="sm" asChild>
              <a href="#contact">Visit Store</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cream p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gold/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 font-sans text-cream/80 hover:text-gold transition-colors uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gold/20 flex items-center gap-4">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-cream/70 text-sm">Diva, Maharashtra</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
