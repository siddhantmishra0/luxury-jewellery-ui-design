import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Crystal Plaza, Shop No. 8 & 9, Sapphire Avenue, Near First Bank, Bangalore, Karnataka 560001, India",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 91234 56789",
      link: "tel:+919123456789",
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: "Daily: 10:00 AM - 9:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
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
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Visit <span className="text-gradient-gold">Our Store</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-sans text-muted-foreground hover:text-maroon transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="font-sans text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Button variant="maroon" size="lg" asChild>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Stellar+Jewels,+Crystal+Plaza,+Sapphire+Avenue,+Bangalore,+Karnataka+560001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-elegant border border-border lg:col-span-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.123!2d77.6234567!3d12.9716198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1a0b0b0b0b0b%3A0x1234567890abcdef!2sStellar%20Jewels%20-%20Premium%20Jewelry%20In%20Bangalore!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stellar Jewels Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
