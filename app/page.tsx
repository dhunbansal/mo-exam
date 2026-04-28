"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Stats from "./components/Stats";
import SolarSystem from "./components/SolarSystem";
import Testimonials from "./components/Testimonials";
import Resources from "./components/Resources";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FoundersVision from "./components/FounderVision";
import AnnouncementPopup from "./components/AnnouncementPopup";
import StudentFormModal from "./components/StudentFormModal";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onJoinClick={() => setIsFormOpen(true)} />
      <main>
        <Hero onStartClick={() => setIsFormOpen(true)} />
        <Features />
        <Courses />
        <Stats />
        <About />
        <FoundersVision />
        <Testimonials />
        <Resources />
        <FAQ />
      </main>
      <Footer />
      <AnnouncementPopup />
      <StudentFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSuccess={() => {
          setIsFormOpen(false);
          // Optional: show success message
        }}
      />
    </div>
  );
}
