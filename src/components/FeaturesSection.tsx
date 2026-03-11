import { motion } from "framer-motion";
import { Brain, BarChart3, Clock, Target, Sparkles, Shield } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms evaluate your responses and provide band-level scoring instantly.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visual dashboards show your improvement across all four modules over time.",
  },
  {
    icon: Clock,
    title: "Timed Practice",
    description: "Simulate real exam conditions with timed tests and section-specific practice.",
  },
  {
    icon: Target,
    title: "Personalized Plan",
    description: "Custom study plans adapt to your strengths and weaknesses automatically.",
  },
  {
    icon: Sparkles,
    title: "Instant Feedback",
    description: "Get detailed feedback on grammar, vocabulary, coherence, and pronunciation.",
  },
  {
    icon: Shield,
    title: "Exam Strategies",
    description: "Learn proven techniques from IELTS experts to maximize your score potential.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-4 bg-surface-sunken">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why IELTS.AI
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-foreground tracking-tight text-balance">
            Built for your success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Everything you need to prepare smarter, practice efficiently, and score higher.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-card"
              style={{
                boxShadow: "0 0 0 1px hsl(var(--border))"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.06 }}
              whileHover={{
                y: -2,
                boxShadow: "0 0 0 1px hsl(var(--border)), 0 4px 16px -4px hsl(var(--border))"
              }}
            >
              <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-satoshi font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
