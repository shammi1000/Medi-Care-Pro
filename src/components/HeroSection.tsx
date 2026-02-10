import { motion } from "framer-motion";
import { Activity, BarChart3, Users, Heart } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroDashboard}
          alt="Healthcare Management Dashboard"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(174, 72%, 46%) 1px, transparent 1px), linear-gradient(90deg, hsl(174, 72%, 46%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Healthcare Management Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] mb-6">
            <span className="text-gradient">MediCare</span>
            <br />
            <span className="text-foreground">Pro</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
            Centralize. Optimize. Personalize. The unified platform for modern healthcare operations.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-4 mb-12">
            <FeaturePill icon={<Users className="w-4 h-4" />} label="Patient Records" sub="Unified View" />
            <FeaturePill icon={<BarChart3 className="w-4 h-4" />} label="Analytics" sub="+24% Efficiency" />
            <FeaturePill icon={<Heart className="w-4 h-4" />} label="Personalize" sub="Patient-Centric" />
          </div>

          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            TechZium Solutions | Enterprise Sales Deck 2026
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

const FeaturePill = ({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl px-5 py-3"
  >
    <div className="text-primary">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  </motion.div>
);

export default HeroSection;
