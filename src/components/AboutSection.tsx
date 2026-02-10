import { motion } from "framer-motion";
import { Shield, BarChart3, DollarSign, Workflow, Mail, Phone, Globe } from "lucide-react";

const capabilities = [
  { icon: <Workflow className="w-5 h-5" />, title: "EHR Integration", desc: "Deep expertise in HL7, FHIR, and API-led connectivity." },
  { icon: <Shield className="w-5 h-5" />, title: "Security & Compliance", desc: "HIPAA-compliant architecture with end-to-end encryption." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Data Analytics", desc: "Turning clinical data into actionable business intelligence." },
  { icon: <DollarSign className="w-5 h-5" />, title: "Revenue Cycle", desc: "Automating workflows to minimize leakage and denials." },
];

const steps = [
  { num: "1", title: "Schedule a Discovery Call", desc: "Let's discuss your specific operational challenges and goals." },
  { num: "2", title: "Customized Demo", desc: "See MediCare Pro in action with a tailored walkthrough." },
  { num: "3", title: "Rapid Pilot Program", desc: "Validate ROI with a 30-day pilot in select departments." },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">TechZium Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-foreground">
              Your Trusted Healthcare Technology Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We specialize in building secure, scalable, and patient-centric platforms that drive operational excellence for modern healthcare providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map((cap) => (
                <div key={cap.title} className="bg-card border border-border rounded-xl p-5">
                  <div className="text-primary mb-3">{cap.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-foreground">
              Ready to Transform Your <span className="text-gradient">Operations?</span>
            </h2>

            <div className="space-y-6 mb-10">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> sales@techzium.com</div>
              <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> techzium.com/medicarepro</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (800) 555-0199</div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["SOC 2 Type II", "HIPAA Compliant", "99.9% Uptime SLA"].map((badge) => (
                <span key={badge} className="text-xs font-medium border border-primary/30 text-primary rounded-full px-3 py-1">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
