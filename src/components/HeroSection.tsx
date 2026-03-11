import { motion } from "framer-motion";
import { ArrowRight, Mic, BookOpen, Headphones } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            AI-Powered IELTS Preparation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-satoshi font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground text-balance leading-[1.05]"
        >
          Master Every Band.
          <br />
          <span className="text-primary">Achieve Your Score.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          The AI-powered platform designed to analyze your skills, perfect your technique,
          and guide you to your target IELTS score.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#start"
            className="flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground rounded-full font-semibold text-base shadow-lg shadow-primary/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            Start Practicing
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#speaking"
            className="flex items-center gap-2 h-12 px-8 bg-surface-elevated text-foreground rounded-full font-semibold text-base"
            style={{
              boxShadow: "0 0 0 1px hsl(var(--border)), 0 1px 3px -1px hsl(var(--border))"
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 0 0 1px hsl(var(--border)), 0 4px 12px -2px hsl(var(--border))"
            }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            <Mic className="w-4 h-4 text-primary" />
            Speaking Test
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "50K+", label: "Active Students" },
            { value: "8.5", label: "Avg Band Score" },
            { value: "4", label: "Skill Modules" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-satoshi font-bold text-2xl md:text-3xl text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Floating skill icons */}
        <motion.div
          variants={item}
          className="mt-16 flex items-center justify-center gap-4"
        >
          {[
            { icon: Headphones, label: "Listening" },
            { icon: BookOpen, label: "Reading" },
            { icon: Mic, label: "Speaking" },
          ].map((skill, i) => (
            <motion.div
              key={skill.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card text-card-foreground text-sm font-medium"
              style={{
                boxShadow: "0 0 0 1px hsl(var(--border)), 0 2px 8px -2px hsl(var(--border))"
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <skill.icon className="w-4 h-4 text-primary" />
              {skill.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
