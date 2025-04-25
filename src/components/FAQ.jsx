// src/components/FAQ.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is WebDrave?",
    answer:
      "WebDrave is a creative tech agency focused on UI/UX, websites, and next-gen web experiences.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Depending on complexity, most projects are delivered in 1–4 weeks with full collaboration.",
  },
  {
    question: "Can we collaborate?",
    answer: "Absolutely. Drop us a message, and let’s build something amazing!",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-white/20 p-6 rounded-xl backdrop-blur-md bg-white/5"
          >
            <button
              onClick={() => setActiveIndex(idx === activeIndex ? null : idx)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-xl font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: idx === activeIndex ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
              >
                +
              </motion.span>
            </button>

            {idx === activeIndex && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 text-gray-300"
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
