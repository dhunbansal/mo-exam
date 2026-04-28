"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Share2, Send, Heart } from "lucide-react";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const examLogos = [
    { name: "Banking", logo: "/assets/banking.png" },
    { name: "SSC", logo: "/assets/ssc.png" },
    { name: "Railway", logo: "/assets/railway.png" },
    { name: "AFCAT", logo: "/assets/afcat.png" },
    { name: "CDS", logo: "/assets/cds.png" },
  ];

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" },
    ],
    resources: [
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "FAQs", href: "#faq" },
      { name: "Privacy Policy", href: "#privacy" },
    ],
    categories: [
      { name: "Banking Exams", href: "#banking" },
      { name: "SSC Exams", href: "#ssc" },
      { name: "Railway Exams", href: "#railway" },
      { name: "AFCAT & CDS", href: "#defense" },
    ],
  };

  const socialLinks = [
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@chanakyascoachingcentre",
      color: "hover:text-red-600",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917711005520",
      color: "hover:text-green-500",
    },
    { icon: Share2, href: "#", color: "hover:text-pink-600" },
    {
      icon: Mail,
      href: "mailto:contact@onlinekaksha.com",
      color: "hover:text-blue-500",
    },
    { icon: Globe, href: "#", color: "hover:text-blue-600" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Newsletter */}

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                MO Exam
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's trusted platform for government exam preparation. Helping
              aspirants achieve their dream govt jobs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-[#ff6b35] transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@onlinekaksha.com</span>
              </div>
              <a
                href="https://wa.me/917711005520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 7711005520</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>123 Learning Street, Education City</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: colIndex * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-[#ff6b35] transition-colors inline-block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Exam Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 pb-8 border-b border-gray-700"
        >
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              We Cover All Major Government Exams
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {examLogos.map((exam, index) => (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm p-2">
                  <Image
                    src={exam.logo}
                    alt={`${exam.name} Exam`}
                    width={60}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <div className="text-xs text-gray-500">
                © 2026 - Designed and Developed by{" "}
                <a
                  href="https://innovistalabs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors font-medium"
                >
                  Innovista Labs
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-400 ${social.color} transition-colors border border-gray-700 hover:border-current`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b35]" />
    </footer>
  );
};

export default Footer;
