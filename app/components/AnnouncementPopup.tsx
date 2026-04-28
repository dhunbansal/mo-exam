"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface Announcement {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

const CURRENT_ANNOUNCEMENT: Announcement = {
  badge: "New Launch",
  title: "SSC CGL 2026 Complete Course is LIVE!",
  description:
    "Get access to 500+ video lectures, daily quizzes, PYQs with solutions, and live doubt sessions — all at an introductory price.",
  ctaText: "Explore Course",
  ctaLink: "#courses",
};

// Change this key whenever you publish a new announcement
// so returning users see it again.
const ANNOUNCEMENT_KEY = "ok_popup_dismissed_v1";

const AnnouncementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(ANNOUNCEMENT_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem(ANNOUNCEMENT_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Decorative top */}
            <div className="h-2 bg-linear-to-r from-orange-500 via-amber-400 to-orange-500" />

            <button
              onClick={dismiss}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="px-7 py-8 text-center">
              {/* Badge */}
              {CURRENT_ANNOUNCEMENT.badge && (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  {CURRENT_ANNOUNCEMENT.badge}
                </span>
              )}

              <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight">
                {CURRENT_ANNOUNCEMENT.title}
              </h3>

              <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">
                {CURRENT_ANNOUNCEMENT.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={CURRENT_ANNOUNCEMENT.ctaLink}
                  onClick={dismiss}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-200/50 transition-colors"
                >
                  {CURRENT_ANNOUNCEMENT.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={dismiss}
                  className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementPopup;
