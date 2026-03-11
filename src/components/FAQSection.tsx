import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is IELTS AI?",
    answer: "IELTS AI is an advanced AI-powered platform designed to help you prepare for the IELTS exam. It provides real-time feedback on your speaking, writing, listening, and reading skills, helping you achieve your target band score efficiently.",
  },
  {
    question: "How does IELTS AI work?",
    answer: "IELTS AI uses advanced speech recognition and natural language processing to analyze your responses. For Speaking, it evaluates pronunciation, fluency, and grammar in real-time. For Writing, it scores your essays based on official IELTS criteria and provides improvement suggestions.",
  },
  {
    question: "Is IELTS AI free?",
    answer: "IELTS AI offers a free tier with limited daily practice sessions. For unlimited access to all features, AI-powered feedback, and personalized study plans, you can upgrade to our Premium plan.",
  },
  {
    question: "What is IELTS AI Premium?",
    answer: "IELTS AI Premium gives you unlimited access to all four skill modules, real-time AI feedback, personalized study plans, progress tracking, and full-length mock tests. It's designed for serious test-takers aiming for Band 7.0 and above.",
  },
  {
    question: "Can IELTS AI help me with Speaking practice?",
    answer: "Yes! Our AI-powered speaking module simulates real IELTS speaking test conditions. It asks you questions across all three parts of the speaking test and provides detailed feedback on pronunciation, fluency, lexical resource, and grammatical range.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-satoshi font-bold text-3xl md:text-4xl text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked 💬 Questions
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-border"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <h3 className="font-satoshi font-semibold text-base md:text-lg text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pb-5"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
