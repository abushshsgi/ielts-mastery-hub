import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calculator, PenTool, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const modules = [
  { icon: BookOpen, title: "Evidence-Based Reading", description: "Master passage analysis, inference questions, and vocabulary in context with AI-guided practice." },
  { icon: PenTool, title: "Writing & Language", description: "Perfect grammar, punctuation, and rhetorical skills with instant AI feedback on every answer." },
  { icon: Calculator, title: "Math (No Calculator)", description: "Build mental math fluency and algebraic reasoning with adaptive problem sets." },
  { icon: Brain, title: "Math (Calculator)", description: "Tackle advanced math, data analysis, and problem-solving with step-by-step AI explanations." },
];

const SatPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">SAT Preparation</span>
            <h1 className="font-satoshi font-bold text-5xl md:text-7xl text-foreground mt-4 leading-tight">
              Crush the SAT
              <br />
              with AI Power
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Adaptive practice, real-time scoring, and personalized study plans designed to maximize your SAT score. Join thousands of students who scored 1400+.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#start" className="inline-flex items-center gap-3 h-14 px-10 bg-foreground text-primary-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
                Start Practicing <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#modules" className="inline-flex items-center gap-2 h-14 px-10 border border-border text-foreground rounded-full text-base font-medium hover:bg-secondary transition-colors">
                Explore Modules
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: "1400+", l: "Average Score" },
            { v: "25K+", l: "Students" },
            { v: "200+", l: "Score Improvement" },
            { v: "98%", l: "Satisfaction" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-satoshi font-bold text-4xl text-foreground">{s.v}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-20 md:py-28 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-foreground mb-12">SAT Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                className="p-6 rounded-2xl border border-border hover:border-foreground/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <m.icon className="w-6 h-6 text-foreground mb-4" />
                <h3 className="font-satoshi font-bold text-xl text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-primary-foreground">
            Ready to boost your SAT score?
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-lg">
            Start your free trial today and see the difference AI-powered prep makes.
          </p>
          <a href="#start" className="mt-8 inline-flex items-center gap-3 h-14 px-10 bg-primary-foreground text-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SatPage;
