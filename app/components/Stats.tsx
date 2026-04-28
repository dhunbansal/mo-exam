"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award, Globe } from "lucide-react";

const StatsLight = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Success Stories",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: BookOpen,
      value: "5,000+",
      label: "Free PYQs",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Globe,
      value: "5+",
      label: "Exam Categories",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Colored Wave Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange Wave - Smooth curve */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f97316"
            fillOpacity="1"
            d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,165.3C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>

        {/* Pink Wave - Wave with more curves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ec4899"
            fillOpacity="1"
            d="M0,256L80,234.7C160,213,320,171,480,165.3C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>

        {/* Yellow Wave - Gentle rolling wave */}
        <svg
          className="absolute top-1/3 left-0 w-full h-full opacity-8"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fbbf24"
            fillOpacity="1"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>

        {/* Light Pink Wave - Flowing wave */}
        <svg
          className="absolute bottom-1/3 right-0 w-full h-full opacity-8"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f472b6"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-3">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Trusted by Numbers
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Real results from real students
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-slate-50 hover:shadow-md transition-shadow"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.bg} mb-4`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsLight;
