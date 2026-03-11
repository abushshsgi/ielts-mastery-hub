import { motion } from "framer-motion";
import neonRing from "@/assets/neon-ring.png";

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-satoshi font-bold text-4xl md:text-6xl text-primary-foreground leading-tight">
            50,000+ Students
          </h2>
          <p className="mt-3 text-xl text-primary-foreground/60">
            Achieved their target band score
          </p>
        </motion.div>

        {/* Neon ring background like Tarteel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-30">
          <img src={neonRing} alt="" className="w-full h-full object-contain" />
        </div>

        {/* Review cards */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { name: "Sardor M.", score: "Band 8.0", text: "The speaking practice with AI feedback helped me improve my pronunciation and fluency dramatically." },
            { name: "Nilufar K.", score: "Band 7.5", text: "Writing task analysis gave me exactly the feedback I needed. I went from 6.0 to 7.5 in just 2 months." },
            { name: "Jasur A.", score: "Band 8.5", text: "The timed practice tests and personalized study plan made my preparation incredibly efficient." },
          ].map((review) => (
            <div
              key={review.name}
              className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary-foreground">{review.name}</span>
                <span className="text-xs font-bold text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded-full">
                  {review.score}
                </span>
              </div>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
