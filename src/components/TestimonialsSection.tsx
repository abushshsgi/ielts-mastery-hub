import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dilshod B.",
    country: "Uzbekistan",
    score: "Band 7.5",
    text: "I was stuck at 6.0 for months. IELTS AI's speaking module detected my pronunciation issues and gave me targeted exercises. In 6 weeks, I jumped to 7.5!",
    stars: 5,
  },
  {
    name: "Aisha R.",
    country: "Kazakhstan",
    score: "Band 8.0",
    text: "The writing analysis is incredible. It scores your essay exactly like a real examiner and tells you exactly what to fix. Best investment I made for my IELTS prep.",
    stars: 5,
  },
  {
    name: "Mohammed K.",
    country: "Saudi Arabia",
    score: "Band 7.0",
    text: "As a busy professional, I needed flexible practice times. IELTS AI let me practice at midnight, early morning — whenever I had time. Passed on my first attempt!",
    stars: 5,
  },
  {
    name: "Priya S.",
    country: "India",
    score: "Band 8.5",
    text: "The mock tests are so close to the real exam that I felt completely prepared on test day. The speaking part was almost identical to what I practiced with the AI.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
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
            Success Stories
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real students, real results. See what our community has achieved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-6 rounded-2xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-satoshi font-bold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.country}</p>
                </div>
                <span className="text-xs font-bold bg-secondary text-foreground px-3 py-1 rounded-full">
                  {t.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
