import { Sparkles, Crown, Gem, CircleDot } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
  {
    icon: Crown,
    title: "Gold Necklaces",
    description: "Exquisite traditional and contemporary necklace designs for every occasion",
  },
  {
    icon: CircleDot,
    title: "Bangles & Kadas",
    description: "Stunning bangles and kadas crafted with precision and artistry",
  },
  {
    icon: Gem,
    title: "Earrings",
    description: "From delicate studs to elaborate jhumkas, find your perfect pair",
  },
  {
    icon: Sparkles,
    title: "Bridal Sets",
    description: "Complete bridal collections for your most special day",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-maroon font-sans text-sm uppercase tracking-[0.2em] mb-3">
            Our Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Jewelry <span className="text-gradient-gold">Collections</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-lg p-8 shadow-elegant hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border hover:border-gold/30"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <collection.icon className="w-8 h-8 text-maroon-dark" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-maroon transition-colors">
                {collection.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                {collection.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "100%", label: "Hallmarked Gold" },
            { value: "BIS", label: "Certified Jewelry" },
            { value: "0%", label: "Making Charges*" },
            { value: "Trust", label: "Since Generations" },
          ].map((feature) => (
            <div key={feature.label} className="group">
              <div className="font-serif text-3xl md:text-4xl text-gold font-bold mb-2 group-hover:scale-110 transition-transform">
                {feature.value}
              </div>
              <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                {feature.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
