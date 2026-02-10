import { motion } from "framer-motion";
import { Database, Clock, DollarSign, Eye, Users, ShieldAlert } from "lucide-react";

const challenges = [
  { icon: <Database className="w-6 h-6" />, title: "Fragmented Data Silos", desc: "Patient information is scattered across disconnected systems, leading to manual entry errors and incomplete clinical views." },
  { icon: <Clock className="w-6 h-6" />, title: "Delayed Scheduling", desc: "Inefficient manual booking processes cause long wait times, reduced provider utilization, and patient frustration." },
  { icon: <DollarSign className="w-6 h-6" />, title: "Revenue Leakage", desc: "Fragmented legacy systems are creating data silos, reducing efficiency, and negatively impacting patient outcomes." },
  { icon: <Eye className="w-6 h-6" />, title: "Limited Visibility", desc: "Without real-time dashboards, leadership lacks the insights needed to make data-driven decisions on resource allocation." },
  { icon: <Users className="w-6 h-6" />, title: "Patient Experience Gaps", desc: "Disjointed digital touchpoints and lack of transparency lead to poor engagement and lower satisfaction scores." },
  { icon: <ShieldAlert className="w-6 h-6" />, title: "Compliance Complexity", desc: "Manual security workflows struggle to keep pace with evolving HIPAA regulations and data privacy demands." },
];

const ChallengesSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Current Landscape</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Healthcare Operations Challenge
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="text-primary/70 mb-4">{c.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-destructive/10 border border-destructive/30 rounded-2xl p-8"
        >
          <p className="text-5xl md:text-6xl font-bold font-display text-destructive mb-2">30%</p>
          <p className="text-lg font-semibold text-foreground">Lost Operational Revenue</p>
          <p className="text-sm text-muted-foreground">Due to inefficiencies and denials</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;
