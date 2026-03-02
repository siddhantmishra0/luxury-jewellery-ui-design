import { MapPin, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl text-gold font-bold mb-2">
              कल्पतरु Jewellers
            </h3>
            <p className="text-cream/60 text-sm mb-4">
              ठाण्याची जुनी आणि विश्वासू पेढी
            </p>
            <p className="font-sans text-cream/70 text-sm leading-relaxed max-w-md">
              Crafting timeless elegance since generations. Your trusted destination for
              hallmarked gold, diamond, and traditional jewelry in Diva, Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Collections", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <p className="font-sans text-sm text-cream/70">
                  Om Apartment, Shop No. 2 & 3, Diva Shil Rd, Diva, Maharashtra 400612
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+919867797546"
                  className="font-sans text-sm text-cream/70 hover:text-gold transition-colors"
                >
                  +91 98677 97546
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-cream/50 text-center md:text-left">
              © {currentYear} Kalpataru Jewellers. All rights reserved.
            </p>
            <p className="font-sans text-xs text-cream/50 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-gold fill-gold" /> in Diva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
