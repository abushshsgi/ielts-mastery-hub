import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-satoshi font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
            Your IELTS journey
            <br />
            starts <span className="underline decoration-2 underline-offset-8">today</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Don't wait for the perfect moment. Start practicing now and get closer to your dream university, career, or immigration goal.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start"
              className="inline-flex items-center justify-center gap-3 h-14 px-10 bg-foreground text-primary-foreground rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 border border-border text-foreground rounded-full text-base font-medium hover:bg-secondary transition-colors"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            No credit card required · Free for 7 days · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
