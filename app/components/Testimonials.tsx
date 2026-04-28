"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  Trophy,
  Heart,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Animated counter component
const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 80 });
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          latest >= 1000
            ? `${(Math.floor(latest) / 1000).toFixed(latest >= 10000 ? 0 : 1)}K`
            : latest < 10
              ? latest.toFixed(1)
              : `${Math.floor(latest)}`;
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

type CategoryType = "Banking" | "SSC" | "CDS" | "AFCAT" | "Railway";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  color: string;
}

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("Banking");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const categories: CategoryType[] = [
    "Banking",
    "SSC",
    "CDS",
    "AFCAT",
    "Railway",
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const autoScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        // Reset to beginning when reached the end
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll to the right
        container.scrollTo({
          left: container.scrollLeft + 400,
          behavior: "smooth",
        });
      }
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(autoScroll, 3000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [selectedCategory]);

  // Reset scroll position when category changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  const testimonialsByCategory: Record<CategoryType, Testimonial[]> = {
    Banking: [
      {
        name: "Rajesh Kumar",
        role: "SBI PO",
        company: "State Bank of India",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
        rating: 5,
        text: "The banking exam preparation was exceptional. The PYQs and daily quizzes helped me crack SBI PO in my first attempt. The quantitative aptitude section was particularly helpful!",
        color: "#00598A",
      },
      {
        name: "Priya Sharma",
        role: "IBPS Clerk",
        company: "Punjab National Bank",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        rating: 5,
        text: "Best platform for banking exam preparation. The reasoning ability questions were exactly what I needed. Cleared IBPS Clerk with flying colors!",
        color: "#ff6b35",
      },
      {
        name: "Amit Patel",
        role: "RRB Officer",
        company: "Regional Rural Bank",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
        rating: 5,
        text: "Comprehensive study material and excellent mock tests. The English section preparation was top-notch. Highly recommend for all banking aspirants!",
        color: "#00598A",
      },
      {
        name: "Kavita Desai",
        role: "IBPS PO",
        company: "Bank of Baroda",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita",
        rating: 5,
        text: "Outstanding IBPS PO preparation material! The mock tests simulated real exam conditions perfectly. Cleared with a top score thanks to this platform!",
        color: "#ff6b35",
      },
      {
        name: "Sunil Gupta",
        role: "SBI Clerk",
        company: "State Bank of India",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunil",
        rating: 5,
        text: "The study notes and daily quizzes made preparation so easy. The reasoning section was especially well-structured. Got selected in my first attempt!",
        color: "#00598A",
      },
      {
        name: "Meera Jain",
        role: "NABARD Officer",
        company: "NABARD",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
        rating: 5,
        text: "Excellent resources for banking exams! The agriculture and rural development section for NABARD was comprehensive. Highly satisfied with the results!",
        color: "#ff6b35",
      },
    ],
    SSC: [
      {
        name: "Vikram Singh",
        role: "SSC CGL",
        company: "Income Tax Department",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
        rating: 5,
        text: "The SSC preparation material is outstanding. The general studies section and reasoning questions helped me secure a top rank in SSC CGL. Thank you!",
        color: "#00598A",
      },
      {
        name: "Sneha Reddy",
        role: "SSC CHSL",
        company: "Central Secretariat",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
        rating: 5,
        text: "Daily quizzes and PYQs made all the difference. The mathematics section was particularly well-structured. Cleared SSC CHSL in first attempt!",
        color: "#ff6b35",
      },
      {
        name: "Rahul Verma",
        role: "SSC MTS",
        company: "Government of India",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
        rating: 5,
        text: "Excellent study notes and practice questions. The general English section preparation was superb. Highly recommended for SSC aspirants!",
        color: "#00598A",
      },
      {
        name: "Anjali Bhatt",
        role: "SSC CGL",
        company: "Custom Department",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
        rating: 5,
        text: "Best SSC CGL preparation platform! The tier-1 and tier-2 mocks were exactly like the real exam. Secured a position in Customs Department!",
        color: "#ff6b35",
      },
      {
        name: "Sandeep Kumar",
        role: "SSC CPO",
        company: "Delhi Police",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandeep",
        rating: 5,
        text: "Amazing preparation for SSC CPO. Physical training tips along with academic preparation helped me clear all rounds. Now serving as Sub-Inspector!",
        color: "#00598A",
      },
      {
        name: "Pooja Agarwal",
        role: "SSC JE",
        company: "CPWD",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja",
        rating: 5,
        text: "Technical questions for SSC JE were spot-on. The civil engineering section was comprehensive. Successfully joined CPWD as Junior Engineer!",
        color: "#ff6b35",
      },
    ],
    CDS: [
      {
        name: "Captain Arjun Mehta",
        role: "Indian Army Officer",
        company: "Indian Army",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
        rating: 5,
        text: "The CDS preparation material is exceptional. The mathematics and general studies sections were incredibly helpful. Successfully cleared CDS and joined the Indian Army!",
        color: "#00598A",
      },
      {
        name: "Karan Malhotra",
        role: "Navy Officer",
        company: "Indian Navy",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karan",
        rating: 5,
        text: "Best platform for CDS preparation. The PYQs match the actual exam pattern perfectly. Cleared CDS and now serving in the Indian Navy!",
        color: "#ff6b35",
      },
      {
        name: "Siddharth Rao",
        role: "Air Force Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siddharth",
        rating: 5,
        text: "Comprehensive study material and excellent mock tests. The daily quizzes kept me consistently prepared. Achieved my dream of joining the Air Force!",
        color: "#00598A",
      },
      {
        name: "Lieutenant Ravi Shankar",
        role: "Indian Navy Officer",
        company: "Indian Navy",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi",
        rating: 5,
        text: "CDS English section preparation was excellent. The SSB interview tips were also very helpful. Proudly serving in the Indian Navy!",
        color: "#ff6b35",
      },
      {
        name: "Major Pradeep Singh",
        role: "Indian Army Officer",
        company: "Indian Army",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pradeep",
        rating: 5,
        text: "Outstanding CDS preparation! The OTA section guidance and personality tests helped immensely. Living my dream in the Indian Army!",
        color: "#00598A",
      },
      {
        name: "Flying Officer Akash Kumar",
        role: "IAF Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akash",
        rating: 5,
        text: "Best CDS coaching material online! The general knowledge section was up-to-date and comprehensive. Successfully joined IAF as Flying Officer!",
        color: "#ff6b35",
      },
    ],
    AFCAT: [
      {
        name: "Flying Officer Neha Kapoor",
        role: "IAF Pilot",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
        rating: 5,
        text: "The AFCAT preparation material is top-notch. The reasoning and general studies sections were perfectly aligned with the exam pattern. Living my dream as an IAF pilot!",
        color: "#00598A",
      },
      {
        name: "Aditya Saxena",
        role: "Technical Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
        rating: 5,
        text: "Excellent study notes and PYQs for AFCAT. The mathematics section was particularly helpful. Cleared AFCAT and joined as Technical Officer!",
        color: "#ff6b35",
      },
      {
        name: "Rohan Joshi",
        role: "Ground Duty Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
        rating: 5,
        text: "Best resource for AFCAT preparation. The daily quizzes and study material are comprehensive. Successfully cleared AFCAT and serving the nation!",
        color: "#00598A",
      },
      {
        name: "Squadron Leader Ananya Das",
        role: "IAF Logistics Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
        rating: 5,
        text: "AFCAT general awareness section was exceptional! The current affairs updates helped tremendously. Proud to be part of the IAF team!",
        color: "#ff6b35",
      },
      {
        name: "Gaurav Bhardwaj",
        role: "Meteorology Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gaurav",
        rating: 5,
        text: "Outstanding AFCAT preparation platform! The technical knowledge section for meteorology branch was very detailed. Highly recommended!",
        color: "#00598A",
      },
      {
        name: "Flight Lieutenant Shreya Pillai",
        role: "IAF Engineering Officer",
        company: "Indian Air Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shreya",
        rating: 5,
        text: "Best AFCAT study material I've used. The engineering knowledge section was comprehensive. Successfully joined IAF as Engineering Officer!",
        color: "#ff6b35",
      },
    ],
    Railway: [
      {
        name: "Suresh Yadav",
        role: "RRB NTPC",
        company: "Indian Railways",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh",
        rating: 5,
        text: "The railway exam preparation material is outstanding. The mathematics and reasoning sections helped me crack RRB NTPC. Excellent platform for aspirants!",
        color: "#00598A",
      },
      {
        name: "Deepika Nair",
        role: "RRB Group D",
        company: "Indian Railways",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepika",
        rating: 5,
        text: "Best study material and PYQs for railway exams. The general studies section was comprehensive. Cleared RRB Group D in first attempt!",
        color: "#ff6b35",
      },
      {
        name: "Manoj Tiwari",
        role: "Railway RPF",
        company: "Railway Protection Force",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Manoj",
        rating: 5,
        text: "Excellent preparation material for railway exams. The daily quizzes kept me on track. Successfully joined Railway Protection Force. Highly recommended!",
        color: "#00598A",
      },
      {
        name: "Pankaj Sharma",
        role: "RRB ALP",
        company: "Indian Railways",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pankaj",
        rating: 5,
        text: "Outstanding RRB ALP preparation! The technical section for Assistant Loco Pilot was very detailed. Successfully cleared and joined Indian Railways!",
        color: "#ff6b35",
      },
      {
        name: "Rekha Chauhan",
        role: "RRB Ticket Collector",
        company: "Indian Railways",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rekha",
        rating: 5,
        text: "Best railway exam coaching material! The customer service section and aptitude tests were spot-on. Proud to serve in Indian Railways!",
        color: "#00598A",
      },
      {
        name: "Vinod Singh",
        role: "RRB Station Master",
        company: "Indian Railways",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vinod",
        rating: 5,
        text: "Comprehensive preparation for RRB Station Master exam. The railway regulations and general knowledge sections were excellent. Achieved my dream job!",
        color: "#ff6b35",
      },
    ],
  };

  const currentTestimonials = testimonialsByCategory[selectedCategory];

  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 bg-white relative overflow-hidden"
    >
      {/* Wave divider — top, from previous section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-20"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
            fillOpacity="0.9"
          />
          <path
            d="M0,60 C360,20 720,80 1080,40 C1260,20 1380,60 1440,50 L1440,80 L0,80 Z"
            fill="#ffffff"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(249,115,22,0.06),transparent)]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(0,89,138,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-bold text-orange-500 uppercase tracking-[0.2em] mb-4 px-4 py-2 bg-orange-50 rounded-full">
            Student Success
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Thousands of aspirants have achieved their dream government jobs
            with MO Exam
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-[0_8px_20px_-5px_rgba(249,115,22,0.4)] scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 shadow-md rounded-2xl p-3 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-slate-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 shadow-md rounded-2xl p-3 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-slate-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative shrink-0 w-96"
              >
                {/* Quote Icon */}
                <div
                  className="absolute top-5 right-5 opacity-[0.08]"
                  style={{ color: testimonial.color }}
                >
                  <Quote size={52} fill="currentColor" />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-2xl"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: testimonial.color }}
                    >
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider → Resources (slate-50) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-20"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
