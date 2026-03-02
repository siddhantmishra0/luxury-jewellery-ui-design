import { Award, Shield, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every piece is hallmarked and BIS certified",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Transparent pricing with no hidden charges",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Personalized service for every customer",
    },
    {
      icon: Users,
      title: "Family Legacy",
      description: "Serving families across generations",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-maroon relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border border-gold rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-sans text-sm uppercase tracking-[0.2em] mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
              A Legacy of <span className="text-gold">Trust & Excellence</span>
            </h2>
            <p className="font-sans text-cream/80 leading-relaxed mb-6">
              Kalpataru Jewellers has been a trusted name in the jewelry industry for generations.
              Located in the heart of Diva, we have been serving families with the finest gold,
              diamond, and traditional jewelry pieces.
            </p>
            <p className="font-sans text-cream/80 leading-relaxed mb-8">
              Our commitment to quality, transparency, and customer satisfaction has made us
              a preferred choice for weddings, festivals, and special occasions. We take pride
              in being "ठाण्याची जुनी आणि विश्वासू पेढी" - Thane's old and trusted jewelry store.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "30+", label: "Years Experience" },
                { value: "10K+", label: "Happy Families" },
                { value: "100%", label: "Pure Gold" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl md:text-4xl text-gold font-bold">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-cream/60 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-maroon-dark/50 backdrop-blur-sm border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-cream mb-2">{value.title}</h3>
                <p className="font-sans text-sm text-cream/60">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
