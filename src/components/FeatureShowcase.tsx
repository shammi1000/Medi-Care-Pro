import { motion } from "framer-motion";
import patientRecordsImg from "@/assets/patient-records-ui.jpg";
import billingImg from "@/assets/billing-analytics-ui.jpg";

const FeatureShowcase = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Patient Records & Scheduling */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">Feature Showcase</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
              Patient Records & Scheduling
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrated workflows that centralize patient data and optimize clinical operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Patient Records Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive patient profiles consolidating medical history, active conditions, and visit logs into a single, intuitive view.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Smart Appointment Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Visual scheduling interface enabling efficient triage, drag-and-drop booking, and real-time provider availability tracking.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-primary">35%</p>
                  <p className="text-xs text-muted-foreground">Faster info retrieval</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-primary">20%</p>
                  <p className="text-xs text-muted-foreground">Fewer no-shows</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border shadow-card"
            >
              <img src={patientRecordsImg} alt="Patient Records Dashboard" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>

        {/* Billing & Analytics */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4">
              Billing & Analytics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize revenue capture and drive operational excellence with data-driven insights.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-border shadow-card"
            >
              <img src={billingImg} alt="Billing & Analytics Dashboard" className="w-full h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Intelligent Billing & Invoicing</h3>
                <p className="text-sm text-muted-foreground">
                  Accelerate your revenue cycle with automated claims scrubbing, real-time eligibility checks, and smart coding suggestions.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Medical Analytics Suite</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive executive dashboards tracking real-time KPIs across census, occupancy, LOS, and departmental productivity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Financial Impact</p>
                  <p className="text-sm font-semibold text-foreground">Reduce claim denials by <span className="text-primary">30%</span></p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Operational Impact</p>
                  <p className="text-sm font-semibold text-foreground">Data-driven <span className="text-primary">decisions</span></p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Real-time Eligibility", "Smart Coding Assist", "Claims Scrubbing", "Executive KPIs", "One-click Invoicing"].map((f) => (
                  <span key={f} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
