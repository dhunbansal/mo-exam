"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  CheckCircle2,
  Target,
  Users,
  BookOpen,
  Trophy,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

const highlights = [
  "100% free access to PYQs and daily quizzes",
  "Curated study notes for every major govt exam",
  "Expert faculty with years of exam experience",
  "Mobile-friendly platform — study anywhere, anytime",
  "Regular updates aligned with latest exam patterns",
  "Dedicated doubt-solving and community support",
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make quality government exam preparation accessible to every Indian aspirant — regardless of economic background.",
    color: "from-indigo-500 to-cyan-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "Over 50,000 students across India trust Online Kaksha for their Banking, SSC, Railway, CDS, and AFCAT preparation.",
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-400/10",
  },
  {
    icon: BookOpen,
    title: "Our Content",
    description:
      "5000+ previous year questions, chapter-wise quizzes, and concise study notes — all crafted by subject experts.",
    color: "from-purple-500 to-indigo-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Trophy,
    title: "Our Results",
    description:
      "98% of our consistent learners have successfully cleared at least one government exam within a year.",
    color: "from-emerald-400 to-cyan-400",
    bg: "bg-emerald-400/10",
  },
];
const facultyMembers = [
  {
    name: "Mayank Chauhan",
    subject: "General Studies",
    qualification: "M.Sc. Physics",
    experience: "10+ Years",
    description:
      "Mayank Chauhan is a highly experienced educator with over 10 years of teaching expertise in General Studies. Holding an M.Sc. in Physics, he brings strong analytical skills and conceptual clarity to his teaching, helping students grasp complex topics with ease. Known for his structured approach and exam-oriented guidance, he has successfully mentored numerous aspirants for competitive examinations.",
    image: "/assets/Mayank Chauhan (General Studies).png",
  },
  {
    name: "Ajay Kumar",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics",
    experience: "15+ Years",
    description:
      "Ajay Kumar is a highly dedicated Mathematics educator with over 15 years of rich teaching experience. Holding an M.Sc. in Mathematics, he is known for his strong conceptual clarity and practical approach to problem-solving. His structured teaching methodology and exam-oriented guidance have helped numerous students excel in competitive examinations.",
    image: "/assets/Ajay Kumar (Maths).png",
  },
  {
    name: "Ankush Dawra",
    subject: "General English",
    qualification: "M.A. English",
    experience: "9+ Years",
    description:
      "Ankush Dawra is an experienced and passionate educator with over 9 years of teaching expertise in General English. Holding an M.A. in English, he is known for his engaging teaching style, strong conceptual clarity, and practical approach to language learning. His exam-focused strategies and in-depth guidance have helped numerous students excel in competitive examinations.",
    image: "/assets/Ankush.jpeg",
  },
  {
    name: "Divya Samnol",
    subject: "Reasoning Ability",
    qualification: "MBA",
    experience: "4+ Years",
    description:
      "Divya Samnol is a dedicated educator with over 4 years of teaching experience in Reasoning Ability. Holding an MBA, she brings a unique blend of analytical thinking and clarity in explanation to her teaching. Her student-friendly approach and focus on logical understanding help aspirants build strong problem-solving skills for competitive examinations.",
    image: "/assets/Divya Samnol (Reasoning).png",
  },
  {
    name: "Aman Verma",
    subject: "Current Affairs & Static GK",
    qualification: "M.A. Political Science",
    experience: "3+ Years",
    description:
      "Aman Verma is a dedicated educator specializing in Current Affairs and Static GK, with 3 years of teaching experience. Holding a Master's degree in Political Science, he possesses a strong understanding of national and international issues, along with a solid foundation in static concepts. Known for his clear explanations and exam-focused approach, he helps students stay updated and build conceptual clarity essential for competitive examinations.",
    image: "/assets/Aman Verma (Current Affairs).png",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showFaculty, setShowFaculty] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facultyMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + facultyMembers.length) % facultyMembers.length,
    );
  };

  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-white relative overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_0%_60%,rgba(0,89,138,0.05),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_20%,rgba(249,115,22,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Banner Row ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-blue-100 rounded-full -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src="/assets/students.png"
                alt="About Online Kaksha"
                width={620}
                height={460}
                className="w-full h-auto object-cover"
                priority={false}
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Trusted by
                  </p>
                  <p className="text-base font-black text-slate-900 leading-tight">
                    50,000+ Students
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-orange-50 rounded-full">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              India's Most Trusted <span className="text-orange-500">Free</span>{" "}
              Exam Prep Platform
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-6 leading-relaxed">
              Online Kaksha was built with one belief — every Indian aspirant
              deserves world-class government exam preparation without paying a
              rupee. We provide meticulously crafted PYQs, daily quizzes, and
              study notes covering Banking, SSC, Railway, CDS, and AFCAT.
            </p>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              Founded by educators who cleared competitive exams themselves, we
              understand the grind. Our platform is designed to save your time,
              sharpen your knowledge, and maximise your selection chances.
            </p>

            {/* Highlights */}
            <div ref={ref} className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Know Your Faculty Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              onClick={() => setShowFaculty(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition-all"
            >
              <GraduationCap className="w-5 h-5" />
              Know Your Faculty
            </motion.button>
          </motion.div>
        </div>

        {/* Faculty Modal */}
        <AnimatePresence>
          {showFaculty && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFaculty(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowFaculty(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>

                {/* Slider Content */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="p-8 md:p-12"
                    >
                      <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
                        {/* Faculty Image */}
                        <div className="relative">
                          <div className="relative w-64 h-64 mx-auto md:w-full md:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-orange-100">
                            <Image
                              src={facultyMembers[currentSlide].image}
                              alt={facultyMembers[currentSlide].name}
                              width={280}
                              height={280}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                            {facultyMembers[currentSlide].experience}
                          </div>
                        </div>

                        {/* Faculty Details */}
                        <div>
                          <div className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full mb-3">
                            Faculty Member
                          </div>
                          <h3 className="text-3xl font-black text-slate-900 mb-2">
                            {facultyMembers[currentSlide].name}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">
                              <BookOpen className="w-4 h-4" />
                              {facultyMembers[currentSlide].subject}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 text-sm font-semibold rounded-lg">
                              <GraduationCap className="w-4 h-4" />
                              {facultyMembers[currentSlide].qualification}
                            </span>
                          </div>
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {facultyMembers[currentSlide].description}
                          </p>

                          {/* Slide Indicators */}
                          <div className="flex items-center gap-2">
                            {facultyMembers.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 rounded-full transition-all ${
                                  idx === currentSlide
                                    ? "w-8 bg-orange-500"
                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-orange-50 rounded-full shadow-lg transition-colors group"
                  >
                    <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-orange-500" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-orange-50 rounded-full shadow-lg transition-colors group"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-orange-500" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ── Four Pillars ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            What Drives Us
          </h3>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Four core pillars that define everything we do at Online Kaksha
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 ${pillar.bg} rounded-2xl flex items-center justify-center mb-5`}
              >
                <pillar.icon
                  className="w-6 h-6"
                  style={{ color: pillar.color }}
                />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {pillar.description}
              </p>
              {/* Bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                style={{ backgroundColor: pillar.color }}
                className="mt-5 h-0.5 rounded-full origin-left opacity-40"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
