"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Target,
  Calendar,
  ChevronRight,
  Loader2,
  ShieldCheck,
} from "lucide-react";

// Types
const TARGETED_EXAMS = [
  "Banking (IBPS / SBI)",
  "SSC (CGL / CHSL / MTS)",
  "Railway (RRB NTPC / Group D)",
  "AFCAT",
  "CDS",
  "RBI Grade B",
  "Other",
];

const TARGET_YEARS = ["2025", "2026", "2027", "2028"];

interface StudentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  resourceLabel?: string;
}

const StudentFormModal = ({
  isOpen,
  onClose,
  onSuccess,
  resourceLabel,
}: StudentFormModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    targetedExam: "",
    targetYear: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^\d{10}$/.test(form.phone)) errs.phone = "Invalid number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.city.trim()) errs.city = "Required";
    if (!form.targetedExam) errs.targetedExam = "Select exam";
    if (!form.targetYear) errs.targetYear = "Select year";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    localStorage.setItem("ok_student_details", JSON.stringify(form));
    localStorage.setItem("ok_student_registered", "true");
    setTimeout(() => {
      setSubmitting(false);
      onSuccess();
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      icon: User,
      type: "text",
      placeholder: "Arjun Sharma",
    },
    {
      name: "phone",
      label: "Mobile Number",
      icon: Phone,
      type: "tel",
      placeholder: "98765 43210",
    },
    {
      name: "email",
      label: "Email Address",
      icon: Mail,
      type: "email",
      placeholder: "arjun@example.com",
    },
    {
      name: "city",
      label: "Current City",
      icon: MapPin,
      type: "text",
      placeholder: "New Delhi",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl"
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Get Started for Free
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Join thousands of successful students
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                {fields.map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      {f.label}
                    </label>
                    <div className="relative">
                      <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        name={f.name}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors[f.name]
                            ? "border-red-300 focus:ring-red-100"
                            : "border-slate-300 focus:border-orange-500 focus:ring-orange-100"
                        }`}
                      />
                    </div>
                    {errors[f.name] && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors[f.name]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "targetedExam",
                      label: "Target Exam",
                      icon: Target,
                      options: TARGETED_EXAMS,
                    },
                    {
                      name: "targetYear",
                      label: "Target Year",
                      icon: Calendar,
                      options: TARGET_YEARS,
                    },
                  ].map((s) => (
                    <div key={s.name}>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        {s.label}
                      </label>
                      <div className="relative">
                        <s.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <select
                          name={s.name}
                          value={form[s.name as keyof typeof form]}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm appearance-none bg-white transition-colors focus:outline-none focus:ring-2 ${
                            errors[s.name]
                              ? "border-red-300 focus:ring-red-100"
                              : "border-slate-300 focus:border-orange-500 focus:ring-orange-100"
                          }`}
                        >
                          <option value="">Select</option>
                          {s.options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                      </div>
                      {errors[s.name] && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors[s.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  "Get Instant Access"
                )}
              </button>

              <p className="text-xs text-center text-slate-500 mt-4">
                By signing up, you agree to our Terms & Privacy Policy
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StudentFormModal;
