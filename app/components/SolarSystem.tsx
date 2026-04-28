"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const SolarSystem = () => {
  const exams = [
    {
      name: "Banking",
      logo: "/assets/images/banking-exam.svg",
      orbitDuration: 20,
      orbitRadius: 120,
      size: 80,
      delay: 0,
    },
    {
      name: "SSC",
      logo: "/assets/images/ssc-exam.svg",
      orbitDuration: 25,
      orbitRadius: 180,
      size: 85,
      delay: 0.5,
    },
    {
      name: "Railway",
      logo: "/assets/images/railway-exam.svg",
      orbitDuration: 30,
      orbitRadius: 240,
      size: 90,
      delay: 1,
    },
    {
      name: "AFCAT",
      logo: "/assets/images/afcat-exam.svg",
      orbitDuration: 35,
      orbitRadius: 300,
      size: 85,
      delay: 1.5,
    },
    {
      name: "CDS",
      logo: "/assets/images/cds-exam.svg",
      orbitDuration: 40,
      orbitRadius: 360,
      size: 80,
      delay: 2,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Universe of Govt Exams
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Master all major government exams with our comprehensive
              preparation platform
            </p>
          </motion.div>
        </div>

        {/* Solar System Container */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* Central Sun - Logo */}
          <motion.div
            className="absolute z-10 w-32 h-32 bg-gradient-to-br from-[#00598A] to-[#ff6b35] rounded-full flex items-center justify-center shadow-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: 360,
            }}
            transition={{
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              boxShadow:
                "0 0 60px rgba(0, 89, 138, 0.6), 0 0 100px rgba(255, 107, 53, 0.4)",
            }}
          >
            <GraduationCap className="w-16 h-16 text-white" />
          </motion.div>

          {/* Orbit Rings */}
          {exams.map((exam, index) => (
            <div
              key={`ring-${exam.name}`}
              className="absolute rounded-full border border-blue-300/20"
              style={{
                width: `${exam.orbitRadius * 2}px`,
                height: `${exam.orbitRadius * 2}px`,
              }}
            />
          ))}

          {/* Orbiting Exam Logos */}
          {exams.map((exam) => (
            <motion.div
              key={exam.name}
              className="absolute"
              style={{
                width: `${exam.orbitRadius * 2}px`,
                height: `${exam.orbitRadius * 2}px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: exam.orbitDuration,
                repeat: Infinity,
                ease: "linear",
                delay: exam.delay,
              }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.2, zIndex: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative bg-white rounded-full shadow-2xl flex items-center justify-center group cursor-pointer"
                  style={{
                    width: `${exam.size}px`,
                    height: `${exam.size}px`,
                  }}
                >
                  <Image
                    src={exam.logo}
                    alt={`${exam.name} Exam`}
                    width={exam.size}
                    height={exam.size}
                    className="object-contain p-2"
                  />

                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {exam.name} Exams
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 89, 138, 0.6)",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-[#00598A] to-[#ff6b35] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Preparation Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarSystem;
