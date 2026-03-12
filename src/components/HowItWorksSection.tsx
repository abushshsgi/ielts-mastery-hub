import { motion } from "framer-motion";
import { UserPlus, Target, BarChart3, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds and get instant access to all IELTS modules. No credit card required.",
  },
  {
    icon: Target,
    step: "02",
    title: "Set Your Target",
    description: "Tell us your target band score and exam date. We'll create a personalized study plan just for you.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Practice Daily",
    description: "Complete AI-powered practice sessions across Speaking, Writing, Listening, and Reading modules.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Achieve Your Score",
    description: "Track your progress, identify weak areas, and walk into your exam with confidence.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            From signup to success — your journey to IELTS mastery in 4 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-foreground flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                Step {step.step}
              </span>
              <h3 className="font-satoshi font-bold text-lg text-foreground mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
