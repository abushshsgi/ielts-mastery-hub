import { motion } from "framer-motion";
import { Mic, PenTool, Headphones, BookOpen, ArrowRight } from "lucide-react";

const skills = [
  {
    icon: Mic,
    title: "Speaking",
    band: "Improve by 1.5+ bands",
    description: "Practice all 3 parts of the speaking test with AI that evaluates pronunciation, fluency, vocabulary, and grammar in real-time. Get instant feedback after every response.",
    features: ["Real-time pronunciation scoring", "Part 1, 2 & 3 simulation", "Vocabulary suggestions"],
  },
  {
    icon: PenTool,
    title: "Writing",
    band: "Improve by 1.0+ bands",
    description: "Submit Task 1 and Task 2 essays and receive detailed band scoring across all 4 criteria. See exactly where you're losing marks and how to improve.",
    features: ["Task Achievement analysis", "Coherence & Cohesion feedback", "Grammar error detection"],
  },
  {
    icon: Headphones,
    title: "Listening",
    band: "Improve by 2.0+ bands",
    description: "Practice with hundreds of listening passages covering all question types. Our adaptive system focuses on the areas where you struggle most.",
    features: ["All question types covered", "Speed adjustment controls", "Transcript & explanations"],
  },
  {
    icon: BookOpen,
    title: "Reading",
    band: "Improve by 1.5+ bands",
    description: "Timed reading passages with all IELTS question types. Learn strategies for skimming, scanning, and handling tricky True/False/Not Given questions.",
    features: ["Academic & General Training", "Strategy tips per question", "Timed practice mode"],
  },
];

const SkillsBreakdownSection = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-foreground">
            Master Every Skill
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Deep-dive into each IELTS module with AI-powered practice that adapts to your level
          </p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              className="p-6 md:p-8 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-foreground">{skill.title}</h3>
                    <span className="text-xs font-bold text-muted-foreground">{skill.band}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-foreground shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBreakdownSection;
