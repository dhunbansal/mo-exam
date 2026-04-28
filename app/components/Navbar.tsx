"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  ChevronRight,
  GraduationCap,
  BookOpen,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

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

const Navbar = ({ onJoinClick }: { onJoinClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showFaculty, setShowFaculty] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "features", "courses", "about", "resources"];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Courses", href: "#courses", id: "courses", badge: "Free" },
    {
      name: "Faculty",
      href: "#",
      id: "faculty",
      onClick: () => setShowFaculty(true),
    },
    { name: "About", href: "#about", id: "about" },
    { name: "Resources", href: "#resources", id: "resources" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facultyMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + facultyMembers.length) % facultyMembers.length,
    );
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top bar */}
      <div
        className={`transition-all duration-500 ${
          isScrolled ? "py-4" : "py-2"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className={`flex justify-between items-center transition-all duration-500 rounded-2xl px-5 ${
              isScrolled
                ? "h-16 bg-white/90 backdrop-blur-2xl shadow-lg shadow-slate-200/60 border border-slate-100"
                : "h-22 bg-transparent"
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center group"
            >
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text transition-opacity group-hover:opacity-90">
                MO Exam
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                const Component = link.onClick ? "button" : "a";
                return (
                  <Component
                    key={link.name}
                    href={link.onClick ? undefined : link.href}
                    onClick={link.onClick}
                    className="relative px-4 py-2 text-base font-semibold transition-colors group flex items-center gap-1.5"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-orange-50 rounded-full border border-orange-100"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-orange-500"
                          : "text-slate-600 group-hover:text-orange-500"
                      }`}
                    >
                      {link.name}
                    </span>
                    {link.badge && (
                      <span className="relative z-10 text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded-full leading-none">
                        {link.badge}
                      </span>
                    )}
                  </Component>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href="https://www.youtube.com/@chanakyascoachingcentre"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-red-600 hover:text-white hover:bg-red-600 rounded-full bg-red-50 transition-all"
              >
                <FaYoutube className="w-5 h-5" />
                YouTube
              </motion.a>
              <motion.a
                href="https://wa.me/917711005520"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-green-600 hover:text-white hover:bg-green-600 rounded-full bg-green-50 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={onJoinClick}
                className="relative overflow-hidden flex items-center gap-1.5 px-5 py-2.5 bg-orange-500 text-white rounded-full text-base font-bold shadow-lg shadow-orange-200/70 hover:bg-orange-600 transition-colors"
              >
                Join for Free
                <span className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full hover:translate-x-[200%] transition-transform duration-700" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mx-4 mt-1 bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const Component = link.onClick ? motion.button : motion.a;
                return (
                  <Component
                    key={link.name}
                    href={link.onClick ? undefined : link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      if (link.onClick) {
                        link.onClick();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold transition-colors w-full ${
                      activeSection === link.id
                        ? "bg-orange-50 text-orange-500"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.badge && (
                        <span className="text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Component>
                );
              })}
            </div>
            <div className="px-4 pb-5 flex flex-col gap-3 border-t border-slate-50 pt-4">
              <a
                href="https://www.youtube.com/@chanakyascoachingcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 flex items-center justify-center gap-2 text-white bg-red-600 rounded-xl font-bold hover:bg-red-700 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
                YouTube
              </a>
              <a
                href="https://wa.me/917711005520"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 flex items-center justify-center gap-2 text-white bg-green-600 rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
              <button className="w-full py-3.5 text-slate-800 bg-slate-50 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                Sign In
              </button>
              <button
                onClick={onJoinClick}
                className="w-full py-3.5 bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                Join for Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  <ChevronRightIcon className="w-6 h-6 text-slate-700 group-hover:text-orange-500" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
