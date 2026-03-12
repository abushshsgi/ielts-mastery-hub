import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "8.0+", label: "Average Band Score" },
  { value: "95%", label: "Success Rate" },
  { value: "120+", label: "Countries" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-satoshi font-bold text-4xl md:text-5xl text-foreground">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
