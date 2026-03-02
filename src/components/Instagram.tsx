import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Placeholder images - these can be replaced with actual Instagram posts
const instagramPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop", alt: "Gold necklace design" },
  { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop", alt: "Diamond earrings" },
  { id: 3, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop", alt: "Bridal jewelry set" },
  { id: 4, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop", alt: "Gold bangles" },
  { id: 5, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop", alt: "Traditional jewelry" },
  { id: 6, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop", alt: "Wedding jewelry" },
];

const INSTAGRAM_URL = "https://www.instagram.com/kalpatarujewellersdiva/";

const Instagram = () => {
  return (
    <section className="py-20 md:py-32 bg-maroon-dark relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-48 h-48 border border-gold rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <InstagramIcon className="w-8 h-8 text-gold" />
            <p className="text-gold font-sans text-sm uppercase tracking-[0.2em]">
              @kalpatarujewellersdiva
            </p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            Follow Us on <span className="text-gold">Instagram</span>
          </h2>
          <p className="font-sans text-cream/70 max-w-xl mx-auto">
            Stay updated with our latest collections, offers, and behind-the-scenes moments
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-cream" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="outlineGold" size="lg" asChild>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-5 h-5" />
              Follow @kalpatarujewellersdiva
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
