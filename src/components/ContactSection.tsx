import { motion } from "framer-motion";
import { Mail, Globe, Clock, MapPin } from "lucide-react";

const hubs = [
  { city: "Riyadh", country: "Saudi Arabia (KSA)" },
  { city: "Doha", country: "Qatar" },
  { city: "Manama", country: "Bahrain" },
  { city: "Muscat", country: "Oman" },
];

const ContactSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your healthcare operations? Our team is here to help you get started with MediCare Pro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-sm text-primary">support@techziumsolutions.com</p>
          </motion.div>

          {/* Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Visit Website</h3>
            <p className="text-sm text-primary">techziumsolutions.com</p>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
            <p className="text-sm text-muted-foreground">09:00 AM - 07:00 PM</p>
            <p className="text-sm text-muted-foreground">Saturday - Thursday</p>
          </motion.div>
        </div>

        {/* Regional Hubs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">Our Regional Hubs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hubs.map((hub) => (
              <div key={hub.city} className="flex items-center gap-3 bg-background border border-border rounded-xl p-4">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{hub.city}</p>
                  <p className="text-xs text-muted-foreground">{hub.country}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2026 TechZium Solutions. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
