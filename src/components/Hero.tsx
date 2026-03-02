import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon/80 to-maroon-dark/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Tagline */}
          <p className="text-gold-light font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            ठाण्याची जुनी आणि विश्वासू पेढी
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-2">
            कल्पतरु
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-gold mb-6">
            Kalpataru Jewellers
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rotate-45 border border-gold" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting timeless elegance since generations. Discover our exquisite collection of
            gold, diamond, and traditional jewelry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#collections">Explore Collections</a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#contact">
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-maroon-dark/80 backdrop-blur-sm border border-gold/30 rounded-lg p-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-cream/90 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Diva, Maharashtra</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gold/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Open 10 AM - 9 PM</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gold/30" />
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              <span>Trusted Since Generations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
