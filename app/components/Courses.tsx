"use client";

import { motion } from "framer-motion";
import {
  Code,
  Star,
  Users,
  Clock,
  TrendingUp,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Shield,
  Building2,
  School,
  FlaskConical,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-400/10",
      title: "CBSE Class 8th",
      description:
        "Complete CBSE Class 8 preparation with chapter-wise notes, practice questions and mock tests for all subjects.",
      students: "8,200",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
    },
    {
      icon: BookOpen,
      iconColor: "text-violet-400",
      iconBg: "bg-violet-400/10",
      title: "CBSE Class 9th",
      description:
        "Build a strong foundation for Class 9 with NCERT-aligned content, PYQs and subject-wise quizzes.",
      students: "9,450",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Mathematics", "Science", "English", "Hindi"],
    },
    {
      icon: GraduationCap,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-400/10",
      title: "CBSE Class 10th",
      description:
        "Ace your Board Exams with our complete Class 10 course — sample papers, chapter tests & expert guidance.",
      students: "21,600",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
    },
    {
      icon: FlaskConical,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-400/10",
      title: "CBSE Class 11th",
      description:
        "Transition smoothly to senior secondary with in-depth coverage of Science & Commerce streams.",
      students: "11,300",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },
    {
      icon: GraduationCap,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-400/10",
      title: "CBSE Class 12th",
      description:
        "Comprehensive Board prep with previous year papers, revision notes and full-length mock tests.",
      students: "19,800",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    },
    {
      icon: Briefcase,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-400/10",
      title: "OSSC Exams",
      description:
        "Odisha Staff Selection Commission exams preparation with Odia GK, Reasoning and quantitative sections.",
      students: "14,700",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Odia GK", "Reasoning", "Mathematics", "English"],
    },
    {
      icon: Briefcase,
      iconColor: "text-yellow-400",
      iconBg: "bg-yellow-400/10",
      title: "OSSSC Exams",
      description:
        "Odisha Subordinate Staff Selection Commission complete course with latest pattern and syllabus.",
      students: "12,400",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["General Studies", "Reasoning", "Mathematics", "Odia"],
    },
    {
      icon: Building2,
      iconColor: "text-rose-400",
      iconBg: "bg-rose-400/10",
      title: "OPSC Exams",
      description:
        "Odisha Public Service Commission — OAS, OFS & other state service exams with comprehensive study material.",
      students: "10,900",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["History", "Geography", "Polity", "Current Affairs"],
    },
    {
      icon: Award,
      iconColor: "text-teal-400",
      iconBg: "bg-teal-400/10",
      title: "OTET Exams",
      description:
        "Odisha Teacher Eligibility Test preparation for Paper I & Paper II with CDPs and subject content.",
      students: "16,200",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["CDP", "Language I & II", "Mathematics", "EVS"],
    },
    {
      icon: Award,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-400/10",
      title: "OSSTET Exams",
      description:
        "Odisha Secondary School Teacher Eligibility Test with subject-specific and pedagogy preparation.",
      students: "9,800",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Pedagogy", "Language", "Subject Content", "Reasoning"],
    },
    {
      icon: Shield,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-400/10",
      title: "Police Exams",
      description:
        "Odisha Police SI, Constable & other police recruitment exams with physical & written test prep.",
      students: "18,500",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Odia GK", "Reasoning", "Mathematics", "General English"],
    },
    {
      icon: School,
      iconColor: "text-pink-400",
      iconBg: "bg-pink-400/10",
      title: "B.Ed Exams",
      description:
        "Bachelor of Education entrance exam preparation for Odisha universities with mock tests and notes.",
      students: "7,600",
      duration: "Full Course",
      rating: "4.8",
      subjects: ["Teaching Aptitude", "GK", "Reasoning", "English"],
    },
    {
      icon: School,
      iconColor: "text-lime-400",
      iconBg: "bg-lime-400/10",
      title: "Teaching Exams",
      description:
        "All Odisha teaching recruitment exams including CT, BEd, DEd and school teacher posts preparation.",
      students: "13,400",
      duration: "Full Course",
      rating: "4.9",
      subjects: ["Pedagogy", "Subject Content", "Odia", "GK"],
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
                  <div
                    className={`w-14 h-14 ${course.iconBg} rounded-xl flex items-center justify-center`}
                  >
                    <course.icon className={`w-7 h-7 ${course.iconColor}`} />
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
