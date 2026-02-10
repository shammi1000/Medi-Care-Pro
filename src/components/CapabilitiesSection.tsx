import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Patient Records",
    items: ["Longitudinal health history", "Customizable clinical notes", "ePrescribing & order sets"],
  },
  {
    title: "Scheduling",
    items: ["Multi-provider calendar", "Smart triage & waitlists", "Automated reminders"],
  },
  {
    title: "Billing & Invoicing",
    items: ["Automated coding assistance", "Real-time claims scrubbing", "Payer rule engine integration"],
  },
  {
    title: "Analytics Dashboard",
    items: ["Real-time operational KPIs", "Bed occupancy & throughput", "Revenue cycle visualization"],
  },
];

const enterprise = [
  {
    title: "Interoperability & Access Controls",
    items: ["HL7 & FHIR standard support", "Seamless lab & pharmacy integrations", "Secure data import/export APIs", "Role-based permissions (RBAC)", "Comprehensive audit trails", "HIPAA/GDPR compliance tools"],
  },
  {
    title: "Patient Engagement",
    items: ["Self-scheduling portal", "Secure messaging & notifications", "Telehealth integration"],
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="section-padding bg-card relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Product Overview</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
            Core Platform Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools designed to cover every aspect of modern hospital management.
          </p>
        </motion.div>

        {/* Core capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-primary mb-4">{cap.title}</h3>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enterprise capabilities */}
        <p className="text-sm text-primary font-medium tracking-widest uppercase text-center mb-6">Enterprise Capabilities</p>
        <div className="grid md:grid-cols-2 gap-6">
          {enterprise.map((ent) => (
            <div key={ent.title} className="bg-background border border-border rounded-xl p-6">
              <h3 className="font-semibold text-primary mb-4">{ent.title}</h3>
              <ul className="space-y-2">
                {ent.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
