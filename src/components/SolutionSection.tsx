import { motion } from "framer-motion";
import { Monitor, FileText, DollarSign, UserCheck, Shield, Cloud } from "lucide-react";

const solutions = [
  { icon: <Monitor className="w-6 h-6" />, title: "Centralized Operations Hub", desc: "Seamlessly connects patient, clinical, and administrative workflows into a single command center to eliminate data fragmentation." },
  { icon: <FileText className="w-6 h-6" />, title: "Unified Patient Records", desc: "Provides a longitudinal view of patient history, ensuring clinicians have instant access to accurate data to reduce medical errors." },
  { icon: <DollarSign className="w-6 h-6" />, title: "Automated Revenue Cycle", desc: "Streamlines billing with intelligent claims scrubbing and coding assistance to improve cash flow and reduce denials." },
  { icon: <UserCheck className="w-6 h-6" />, title: "Patient-Centric Experience", desc: "Empowers patients with self-service portals, automated appointment reminders, and digital check-in capabilities." },
  { icon: <Shield className="w-6 h-6" />, title: "Enterprise-Grade Security", desc: "Built with role-based access controls and encryption to ensure full HIPAA compliance and data integrity." },
  { icon: <Cloud className="w-6 h-6" />, title: "Scalable Architecture", desc: "Cloud-native infrastructure designed to grow with your organization, from single clinics to multi-facility health systems." },
];

const SolutionSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            The <span className="text-gradient">MediCare Pro</span> Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified platform designed to dismantle silos and build a smarter, more connected healthcare ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-glow hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
