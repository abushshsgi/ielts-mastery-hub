import { motion } from "framer-motion";
import { Zap, Shield, Clock, Globe, Brain, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI-Powered Feedback",
    description: "Get instant, detailed feedback on your speaking and writing. Our AI analyzes pronunciation, grammar, vocabulary, and coherence like a real examiner.",
  },
  {
    icon: Clock,
    title: "Practice Anytime",
    description: "No scheduling needed. Practice 24/7 from anywhere in the world. Your AI tutor is always available when you're ready to study.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Detailed analytics show your improvement over time. See your predicted band score update in real-time as you practice more.",
  },
  {
    icon: Zap,
    title: "10x Faster Prep",
    description: "Our adaptive algorithm focuses on your weak areas, so you improve faster. Students achieve their target scores 3x quicker than traditional methods.",
  },
  {
    icon: Shield,
    title: "Exam-Accurate Tests",
    description: "Full-length mock tests that mirror the real IELTS exam. Practice under timed conditions to build confidence and stamina.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Instructions and tips available in Uzbek, Russian, Turkish, Arabic, and 15+ other languages for non-native English speakers.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-foreground text-primary-foreground">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-primary-foreground">
            Why Choose IELTS AI?
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Join 50,000+ students who've already transformed their IELTS preparation with cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary-foreground/25 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <reason.icon className="w-6 h-6 text-primary-foreground mb-4" />
              <h3 className="font-satoshi font-bold text-lg text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
