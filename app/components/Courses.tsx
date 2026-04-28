"use client";

import { motion } from "framer-motion";
import {
  Code,
  Star,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const Courses = () => {
  const courses = [
    {
      logo: "/assets/banking.png",
      title: "Banking Exams",
      description:
        "Complete preparation for SBI PO, IBPS Clerk, RRB Officer with PYQs, Mock Tests & Video Classes",
      students: "18,450",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Quantitative Aptitude", "Reasoning", "English", "GK"],
    },
    {
      logo: "/assets/ssc.png",
      title: "SSC Exams",
      description:
        "SSC CGL, CHSL, MTS, CPO preparation with comprehensive study material and practice tests",
      students: "24,320",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Mathematics", "Reasoning", "GK", "English"],
    },
    {
      logo: "/assets/railway.png",
      title: "Railway Exams",
      description:
        "RRB NTPC, Group D, ALP, RPF complete course with latest pattern questions",
      students: "16,890",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Mathematics", "Reasoning", "GK", "Current Affairs"],
    },
    {
      logo: "/assets/afcat.png",
      title: "AFCAT Exam",
      description:
        "Air Force Common Admission Test preparation for Flying, Technical & Ground Duty",
      students: "12,540",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Mathematics", "Reasoning", "GK", "English"],
    },
    {
      logo: "/assets/cds.png",
      title: "CDS Exam",
      description:
        "Combined Defence Services preparation for Indian Army, Navy & Air Force",
      students: "14,670",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Mathematics", "English", "GK"],
    },
    {
      logo: "/assets/banking.png",
      title: "All Exams Bundle",
      description:
        "Complete access to all exam courses - Banking, SSC, Railway, AFCAT & CDS",
      students: "21,230",
      duration: "Lifetime Access",
      rating: "4.9",
      subjects: ["All Subjects Included"],
    },
  ];

  return (
    <section
      id="courses"
      className="relative py-24 md:py-36 bg-[#020617] overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🧠 Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
            <Code className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300 font-semibold">
              Exam Categories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">
            Choose Your
            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Target Exam
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive courses for all major government exams with expert
            guidance and complete study material.
          </p>
        </div>

        {/* 📦 Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-500 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                    <Image
                      src={course.logo}
                      alt={course.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-1 text-slate-200 bg-white/10 px-3 py-1 rounded-lg text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition">
                  {course.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.subjects.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/10 text-slate-300 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm text-slate-400 border-t border-white/10 pt-4 mb-5">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-lg hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <TrendingUp className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔘 Bottom CTA */}
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.4)] transition flex items-center gap-2 mx-auto"
          >
            View All Exams
            <TrendingUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Courses;