"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  BookOpen,
  Zap,
  Shield,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

type Category = "All" | "Platform" | "Exams" | "Features" | "Support";

interface FAQ {
  question: string;
  answer: string;
  category: Exclude<Category, "All">;
}

const faqs: FAQ[] = [
  {
    category: "Platform",
    question: "Is the platform completely free to use?",
    answer:
      "Yes! Core features — PYQs, daily quizzes, and study notes — are 100% free forever. No credit card required, no hidden charges. Simply sign up and start preparing.",
  },
  {
    category: "Exams",
    question: "Which government exams do you cover?",
    answer:
      "We cover all major government exams: Banking (SBI PO, IBPS PO/Clerk, RBI), SSC (CGL, CHSL, MTS, CPO), Railway (NTPC, Group D, ALP), AFCAT, and CDS. New exam categories are added regularly based on demand.",
  },
  {
    category: "Features",
    question: "How are the mock tests structured?",
    answer:
      "Mock tests mirror the exact official exam pattern — same sections, question count, time limit, and marking scheme. After submission you receive a detailed scorecard with rank, accuracy percentage, time spent per question, and topic-wise weak-area analysis.",
  },
  {
    category: "Platform",
    question: "Can I access study material on mobile?",
    answer:
      "Absolutely. The platform is fully responsive and works seamlessly on all devices — desktop, tablet, and mobile browser. No app installation needed; just open and study.",
  },
  {
    category: "Features",
    question: "How frequently are new PYQs and quizzes added?",
    answer:
      "Fresh daily quizzes drop every morning before 7 AM. PYQs are updated within 48 hours of each official exam. Our content team also releases topic-wise practice sets and current-affairs quizzes every week.",
  },
  {
    category: "Support",
    question: "Is there doubt-solving support available?",
    answer:
      "Yes. Post doubts in our community forum for answers from expert mentors and fellow aspirants. Responses are typically within a few hours. We also host live doubt-clearing sessions for high-priority topics before major exam dates.",
  },
  {
    category: "Features",
    question: "Do you provide study notes and PDF downloads?",
    answer:
      "Yes — concise, exam-focused notes covering every topic in each syllabus are available as in-app reading and downloadable PDFs, completely free for all registered users.",
  },
  {
    category: "Exams",
    question: "How current is the syllabus coverage?",
    answer:
      "Our content team tracks official notifications and updates syllabus coverage within days of any change. Subject experts review and align all PYQs, notes, and quizzes to the current exam pattern.",
  },
  {
    category: "Platform",
    question: "Do I need to create an account to access content?",
    answer:
      "You can browse the homepage freely, but a free account unlocks PYQs, quizzes, notes, your personal dashboard, bookmark lists, and performance analytics — all at zero cost.",
  },
  {
    category: "Support",
    question: "How do I report an error in a question or answer?",
    answer:
      "Every question has a 'Report' button. Our editorial team reviews all reports within 24 hours and sends you a notification once the correction is published.",
  },
];

const categories: Category[] = [
  "All",
  "Platform",
  "Exams",
  "Features",
  "Support",
];

const categoryMeta: Record<
  Exclude<Category, "All">,
  { icon: React.ElementType; color: string; bg: string }
> = {
  Platform: { icon: Shield, color: "#00598A", bg: "bg-blue-50" },
  Exams: { icon: BookOpen, color: "#ff6b35", bg: "bg-orange-50" },
  Features: { icon: Zap, color: "#7c3aed", bg: "bg-purple-50" },
  Support: { icon: Users, color: "#059669", bg: "bg-emerald-50" },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = faqs.filter(
    (f) => activeCategory === "All" || f.category === activeCategory,
  );

  return (
    <section
      id="faq"
      className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2 px-3 py-1 bg-orange-50 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about MO Exam
          </p>
        </motion.div>

        {/* ── Category filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg shadow-sky-200"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 hover:border-sky-300"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold transition-all ${
                    active ? "bg-white/25 text-white" : "bg-sky-50 text-sky-700"
                  }`}
                >
                  {cat === "All"
                    ? faqs.length
                    : faqs.filter((f) => f.category === cat).length}
                </span>
                {active && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Accordion ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            {filtered.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-orange-200 shadow-md"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left"
                  >
                    <span
                      className={`flex-1 text-base font-semibold leading-snug transition-colors ${
                        isOpen ? "text-orange-600" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-orange-500 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-4 pb-4">
                          <div className="h-px bg-slate-100 mb-3" />
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Wave divider → Footer (gray-900) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-16"
        >
          <path
            d="M0,60 C240,10 480,80 720,40 C960,0 1200,70 1440,30 L1440,80 L0,80 Z"
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
