import { motion } from "framer-motion";

const partners = [
  "Cambridge", "British Council", "IDP Education", "ETS", "Oxford University Press", "Pearson",
];

const PartnersSection = () => {
  return (
    <section className="py-14 px-6 border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-xs text-muted-foreground tracking-widest uppercase mb-8">
          Trusted by students preparing for exams from
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {partners.map((partner, i) => (
            <motion.span
              key={partner}
              className="font-satoshi font-bold text-lg md:text-xl text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
