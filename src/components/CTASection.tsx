import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-primary relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={spring}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-primary-foreground tracking-tight text-balance">
            Ready to achieve your target score?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto text-pretty">
            Join thousands of students who improved their IELTS band score with AI-powered practice.
          </p>
          <motion.a
            href="#start"
            className="inline-flex items-center gap-2 mt-8 h-12 px-8 bg-primary-foreground text-primary rounded-full font-semibold text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
