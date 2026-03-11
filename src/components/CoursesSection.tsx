import { motion } from "framer-motion";
import { Headphones, BookOpen, Mic, PenTool, ArrowRight } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const courses = [
  {
    icon: Headphones,
    title: "Listening",
    description: "Train your ear with real exam audio and AI-powered feedback on your comprehension skills.",
    band: "Target: Band 7.0+",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Master skimming, scanning, and detailed comprehension with adaptive practice passages.",
    band: "Target: Band 7.5+",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: PenTool,
    title: "Writing",
    description: "Get instant AI feedback on Task 1 & 2 essays with band score predictions and improvement tips.",
    band: "Target: Band 7.0+",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Mic,
    title: "Speaking",
    description: "Practice with AI mock interviews and receive detailed pronunciation and fluency analysis.",
    band: "Target: Band 7.5+",
    color: "from-violet-500/10 to-purple-500/10",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Four Skill Modules
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-foreground tracking-tight text-balance">
            Every skill, one platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Comprehensive preparation for all four IELTS modules with AI-driven personalization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.08 }}
            >
              <motion.div
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${course.color} bg-card group cursor-pointer overflow-hidden`}
                style={{
                  boxShadow: "0 0 0 1px hsl(var(--border))"
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 0 1px hsl(var(--border)), 0 8px 24px -8px hsl(var(--border))"
                }}
                transition={spring}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {course.band}
                  </span>
                </div>
                <h3 className="font-satoshi font-bold text-xl text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Start Learning <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
