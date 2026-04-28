"use client";

import { motion } from "framer-motion";
import {
  Video,
  Award,
  Clock,
  MessageCircle,
  BookMarked,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookMarked,
      title: "Free PYQs",
      description:
        "Access 5000+ Previous Year Questions from Banking, SSC, CDS, AFCAT & Railway exams.",
      color: "from-indigo-500 to-cyan-400",
      lightColor: "bg-indigo-500/10",
    },
    {
      icon: Zap,
      title: "Daily Quizzes",
      description:
        "Fresh practice quizzes every day across all subjects to sharpen your skills.",
      color: "from-cyan-400 to-blue-500",
      lightColor: "bg-cyan-400/10",
    },
    {
      icon: Video,
      title: "Expert Video Classes",
      description:
        "HD video lectures by top faculty with detailed explanations and shortcuts.",
      color: "from-purple-500 to-indigo-500",
      lightColor: "bg-purple-500/10",
    },
    {
      icon: MessageCircle,
      title: "Doubt Resolution",
      description:
        "Get instant help from expert mentors and discuss with fellow aspirants.",
      color: "from-emerald-400 to-cyan-400",
      lightColor: "bg-emerald-400/10",
    },
    {
      icon: Award,
      title: "Mock Test Series",
      description:
        "Full-length mock tests with detailed analysis to track your performance.",
      color: "from-pink-500 to-purple-500",
      lightColor: "bg-pink-500/10",
    },
    {
      icon: Clock,
      title: "Study Anytime",
      description:
        "24/7 access to all study materials, notes, and resources on any device.",
      color: "from-amber-400 to-orange-500",
      lightColor: "bg-amber-400/10",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 md:py-40 overflow-hidden bg-[#020617]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Why MO Exam
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-8 tracking-tight leading-[1.1]">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Master Your Exams
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            India’s most powerful preparation ecosystem for Banking, SSC,
            Railways, and Defense exams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full rounded-[2rem] p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)]">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.lightColor} mb-6 group-hover:scale-110 transition`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-md`}
                  >
                    <feature.icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition cursor-pointer">
                  <span>Explore</span>
                  <div className="ml-2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition">
                    <Zap className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
