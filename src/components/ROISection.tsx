import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";

const outcomes = [
  {
    title: "Operational Efficiency",
    desc: "Eliminate redundant data entry and streamline handoffs between departments.",
    stats: [
      { value: "25%", label: "Admin Efficiency", sub: "Reduction in manual documentation time" },
      { value: "15%", label: "Faster Reimbursements", sub: "Improved Days Sales Outstanding (DSO)" },
    ],
  },
  {
    title: "Patient Experience",
    desc: "Shorter wait times, transparent billing, and proactive digital engagement.",
    stats: [
      { value: "20%", label: "No-Show Reduction", sub: "Via automated reminders & smart fill" },
      { value: "10%", label: "Higher Throughput", sub: "More patients seen per provider hour" },
    ],
  },
  {
    title: "Risk & Compliance",
    desc: "Audit-ready workflows with automated HIPAA compliance checks and security logging.",
    stats: [],
  },
];

const ROISection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Business Value & ROI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tangible operational improvements and financial returns that drive organizational growth.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 bg-primary/10 border border-primary/30 rounded-full px-5 py-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">ROI in &lt; 8 Months</span>
          </div>
        </motion.div>

        <div className="space-y-8">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{o.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{o.desc}</p>
                </div>
              </div>

              {o.stats.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 mt-6 ml-8">
                  {o.stats.map((stat) => (
                    <div key={stat.label} className="bg-card border border-border rounded-xl p-5">
                      <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                      <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
