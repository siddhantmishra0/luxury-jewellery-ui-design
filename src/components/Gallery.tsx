import storeInterior1 from "@/assets/store-interior-1.png";
import storeInterior2 from "@/assets/store-interior-2.png";
import storeFront from "@/assets/store-front.png";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { src: storeFront, alt: "Kalpataru Jewellers Store Front", span: "md:col-span-2" },
    { src: storeInterior1, alt: "Gold Jewelry Display", span: "" },
    { src: storeInterior2, alt: "Jewelry Collection Display", span: "md:col-span-3" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-cream-dark">
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
            Visit Our Store
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Store <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-lg shadow-elegant ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-lg text-cream">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Store Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="font-sans text-muted-foreground leading-relaxed">
            Step into our showroom and experience the finest collection of gold, diamond, 
            and traditional jewelry. Our expert staff is dedicated to helping you find 
            the perfect piece for every celebration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
