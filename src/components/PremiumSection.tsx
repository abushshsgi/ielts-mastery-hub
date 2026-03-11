import { motion } from "framer-motion";
import { Headphones, BookOpen, PenTool, Mic } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.5, bounce: 0 };

const features = [
  {
    icon: Mic,
    title: "Speaking\nMistake Detection",
    description: "Our flagship feature: IELTS AI will detect pronunciation errors, grammar mistakes, and fluency issues in your speaking AND alert you in real time!",
  },
  {
    icon: PenTool,
    title: "Writing\nAnalysis",
    description: "Tailor your writing improvement journey to your learning style and preferences using IELTS AI's intuitive scoring and feedback tools.",
  },
  {
    icon: Headphones,
    title: "Listening\nPractice",
    description: "Set goals for yourself and track your listening comprehension progress as you prepare for the IELTS exam.",
  },
];

const PremiumSection = () => {
  return (
    <section id="premium" className="py-20 md:py-28 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Tarteel layout: heading left + 3 cards right */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left heading */}
          <motion.div
            className="md:col-span-1 flex flex-col justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Practice{" "}
              <span className="underline decoration-2 underline-offset-4">smarter</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Make your IELTS preparation a Premium experience.
            </p>
            <a
              href="#start"
              className="mt-6 inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
            >
              GET STARTED
            </a>
          </motion.div>

          {/* 3 Feature cards */}
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
            >
              <div className="mb-4">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-satoshi font-bold text-lg text-foreground whitespace-pre-line leading-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
