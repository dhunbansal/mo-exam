"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const FoundersVision = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-orange-50 rounded-full">
            Meet the Founder
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Building the Future of Education
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            A mission to make quality education accessible to every aspiring
            student
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Clean Portrait */}
          <div className="relative group">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/assets/Ankush.jpeg"
                alt="Ankush Dawra"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Simple Floating Badge */}
            <div className="absolute -bottom-6 -right-2 md:right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Trusted by</p>
                <p className="text-sm font-bold text-slate-900">
                  10k+ Students
                </p>
              </div>
            </div>
          </div>

          {/* Right: Focused Content */}
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed italic">
              "I started MO Exam with one goal: to ensure that no student fails
              their dream exam just because they couldn't afford expensive
              coaching."
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="h-px w-12 bg-orange-200" />
              <div>
                <p className="font-bold text-slate-900">Ankush Dawra</p>
                <p className="text-sm text-slate-500">Founder, MO Exam</p>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg active:scale-95"
            >
              Read Full Vision
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-3 text-orange-600">
                  <Quote className="w-8 h-8 fill-current opacity-20" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Founder's Vision
                  </h3>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 underline decoration-orange-200">
                      MO Exam
                    </strong>{" "}
                    is more than just a platform—it’s a movement to make
                    competitive exam prep accessible to everyone.
                  </p>
                  <p>
                    We provide a complete ecosystem including **Free PYQs, Daily
                    Quizzes, and Professional Video Lectures**. Our focus is
                    always on clarity and results.
                  </p>
                  <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-orange-500 font-medium text-slate-800">
                    "Success shouldn't be a privilege of the few; it should be
                    an opportunity for the many."
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 text-center">
                  <p className="text-sm font-bold text-slate-900">
                    Ankush Dawra
                  </p>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter">
                    Founder & Educator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FoundersVision;
