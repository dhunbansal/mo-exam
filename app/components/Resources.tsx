"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FileQuestion,
  Brain,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import StudentFormModal from "./StudentFormModal";

type ResourceTab = "pyqs" | "quizzes" | "notes";

const exams = [
  {
    name: "Banking",
    logo: "/assets/banking.png",
    color: "#00598A",
    subjects: [
      "Quantitative Aptitude",
      "Reasoning Ability",
      "General English",
      "General Awareness",
    ],
    count: { pyqs: "1200+", quizzes: "15 / day", notes: "24 chapters" },
  },
  {
    name: "SSC",
    logo: "/assets/ssc.png",
    color: "#ff6b35",
    subjects: [
      "Mathematics",
      "Reasoning Ability",
      "General Studies",
      "General English",
    ],
    count: { pyqs: "1500+", quizzes: "12 / day", notes: "30 chapters" },
  },
  {
    name: "Railway",
    logo: "/assets/railway.png",
    color: "#059669",
    subjects: [
      "Mathematics",
      "Reasoning Ability",
      "General Science",
      "General Awareness",
    ],
    count: { pyqs: "800+", quizzes: "10 / day", notes: "20 chapters" },
  },
  {
    name: "AFCAT",
    logo: "/assets/afcat.png",
    color: "#7c3aed",
    subjects: [
      "Mathematics",
      "Reasoning Ability",
      "General Studies",
      "Military Aptitude",
    ],
    count: { pyqs: "600+", quizzes: "8 / day", notes: "16 chapters" },
  },
  {
    name: "CDS",
    logo: "/assets/cds.png",
    color: "#dc2626",
    subjects: ["Mathematics", "General Knowledge", "English Language"],
    count: { pyqs: "700+", quizzes: "8 / day", notes: "18 chapters" },
  },
  {
    name: "RBI",
    logo: "/assets/rbi.png",
    color: "#d97706",
    subjects: [
      "Quantitative Aptitude",
      "Reasoning Ability",
      "General English",
      "Finance & Management",
    ],
    count: { pyqs: "400+", quizzes: "6 / day", notes: "12 chapters" },
  },
];

const tabs: {
  id: ResourceTab;
  label: string;
  icon: React.ElementType;
  color: string;
  stat: string;
  statLabel: string;
  description: string;
}[] = [
  {
    id: "pyqs",
    label: "Free PYQs",
    icon: FileQuestion,
    color: "#00598A",
    stat: "5000+",
    statLabel: "Questions",
    description:
      "Actual exam questions from previous years, organised chapter-wise with detailed solutions.",
  },
  {
    id: "quizzes",
    label: "Daily Quizzes",
    icon: Brain,
    color: "#ff6b35",
    stat: "59+",
    statLabel: "Quizzes / Day",
    description:
      "Fresh timed practice sets released every morning to sharpen your speed and accuracy.",
  },
  {
    id: "notes",
    label: "Study Notes",
    icon: BookOpen,
    color: "#7c3aed",
    stat: "120+",
    statLabel: "Chapters",
    description:
      "Crisp, exam-focused notes written by top faculty — covering every topic in each syllabus.",
  },
];

const countKey: Record<ResourceTab, "pyqs" | "quizzes" | "notes"> = {
  pyqs: "pyqs",
  quizzes: "quizzes",
  notes: "notes",
};

const Resources = () => {
  const [activeTab, setActiveTab] = useState<ResourceTab>("pyqs");
  const activeConfig = tabs.find((t) => t.id === activeTab)!;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [pendingExam, setPendingExam] = useState<string | null>(null);

  useEffect(() => {
    setIsRegistered(localStorage.getItem("ok_student_registered") === "true");
  }, []);

  const handleAccessClick = (examName: string) => {
    if (isRegistered) {
      // Already registered — go ahead (placeholder)
      return;
    }
    setPendingExam(examName);
    setIsFormOpen(true);
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setIsRegistered(true);
    setPendingExam(null);
  };

  return (
    <section
      id="resources"
      className="py-24 md:py-36 bg-slate-50 relative overflow-hidden"
    >
      {/* Bg accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,89,138,0.06),transparent)]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-blue-50 rounded-full">
            Free Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            PYQs, daily quizzes, and study notes for every major government exam
            — 100% free
          </p>
        </motion.div>

        {/* ── Tab switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  active
                    ? "text-white shadow-lg scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
                style={
                  active
                    ? {
                        backgroundColor: tab.color,
                        boxShadow: `0 12px 30px -8px ${tab.color}66`,
                      }
                    : {}
                }
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Active tab meta strip ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-meta"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-slate-100 rounded-2xl px-7 py-5 mb-10 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: activeConfig.color + "18" }}
              >
                <activeConfig.icon
                  size={22}
                  style={{ color: activeConfig.color }}
                />
              </div>
              <p className="text-sm text-slate-600 font-medium max-w-lg">
                {activeConfig.description}
              </p>
            </div>
            <div
              className="shrink-0 text-center px-6 py-2 rounded-xl"
              style={{ backgroundColor: activeConfig.color + "12" }}
            >
              <p
                className="text-2xl font-black"
                style={{ color: activeConfig.color }}
              >
                {activeConfig.stat}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                {activeConfig.statLabel}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Exam cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-grid"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {exams.map((exam, i) => (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card header */}
                <div
                  className="px-6 pt-6 pb-4 flex items-center justify-between"
                  style={{ borderBottom: `2px solid ${exam.color}22` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: exam.color + "15" }}
                    >
                      <Image
                        src={exam.logo}
                        alt={exam.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-black text-slate-900">
                      {exam.name}
                    </h3>
                  </div>
                  {/* Count badge */}
                  <span
                    className="text-sm font-black px-3 py-1 rounded-xl"
                    style={{
                      backgroundColor: exam.color + "15",
                      color: exam.color,
                    }}
                  >
                    {exam.count[countKey[activeTab]]}
                  </span>
                </div>

                {/* Subjects */}
                <div className="px-6 py-5 space-y-2">
                  {exam.subjects.map((subject, si) => (
                    <div key={si} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="shrink-0"
                        style={{ color: exam.color }}
                      />
                      <span className="text-sm text-slate-600">{subject}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => handleAccessClick(exam.name)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl font-bold text-sm text-white transition-all duration-200 group-hover:gap-3"
                    style={{ backgroundColor: exam.color }}
                  >
                    Access {activeConfig.label}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e293b,#0f172a)]" />
          <div className="absolute top-0 left-1/3 w-96 h-48 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-48 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <p className="text-sm font-bold text-orange-400 uppercase tracking-[0.2em] mb-3">
              100% Free Access
            </p>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Start Your Exam Preparation Today
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-400 font-medium">
              Thousands of questions, daily quizzes, and comprehensive study
              notes — for every major government exam, forever free.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAccessClick("all")}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Wave divider → FAQ (white) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-20"
        >
          <path
            d="M0,20 C360,70 720,0 1080,50 C1260,70 1380,30 1440,20 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Student Details Form Modal */}
      <StudentFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSuccess={handleFormSuccess}
        resourceLabel={
          pendingExam
            ? `${pendingExam} ${activeConfig.label}`
            : activeConfig.label
        }
      />
    </section>
  );
};

export default Resources;
