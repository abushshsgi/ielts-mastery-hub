import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic IELTS practice",
    features: [
      "3 daily practice sessions",
      "Basic speaking feedback",
      "Limited writing analysis",
      "Reading & Listening tests",
      "Community forum access",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description: "Everything you need to achieve Band 7.0+",
    features: [
      "Unlimited practice sessions",
      "Advanced AI speaking feedback",
      "Detailed writing band scoring",
      "Full-length mock tests",
      "Personalized study plan",
      "Progress analytics dashboard",
      "Priority support",
    ],
    cta: "Start 7-Day Trial",
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$39",
    period: "/month",
    description: "For serious test-takers aiming for Band 8.0+",
    features: [
      "Everything in Premium",
      "1-on-1 AI tutor sessions",
      "Band prediction with 95% accuracy",
      "Essay bank with 500+ samples",
      "Speaking recordings & playback",
      "Exam day strategy guide",
      "Money-back guarantee",
    ],
    cta: "Go Ultimate",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Choose the plan that fits your preparation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-foreground text-primary-foreground border-foreground"
                  : "bg-card border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-foreground text-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-satoshi font-bold text-xl">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-satoshi font-bold text-4xl">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`} />
                    <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                className={`mt-8 block text-center py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-primary-foreground text-foreground"
                    : "bg-foreground text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
