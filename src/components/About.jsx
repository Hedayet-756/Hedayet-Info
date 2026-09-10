"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      title: "Web Application Development",
      description: "Building interactive, dynamic, and clean web applications using React and Next.js.",
      borderColor: "border-brand-purple",
      textColor: "text-brand-purple",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
    },
    {
      title: "Responsive UI & Frontend Design",
      description: "Designing pixel-perfect, modern, and mobile-friendly layouts with Tailwind CSS.",
      borderColor: "border-brand-pink",
      textColor: "text-brand-pink",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
    },
    {
      title: "API Integration & Backend Basics",
      description: "Fetching external data, handling REST APIs, and working with Node.js/Express fundamentals.",
      borderColor: "border-cyan-400",
      textColor: "text-cyan-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
    },
    {
      title: "Problem Solving & Logic Development",
      description: "Writing structured JavaScript code, resolving bugs, and continuously learning new tools.",
      borderColor: "border-orange-400",
      textColor: "text-orange-400",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.674a1 1 0 00.922-.617l2.108-4.742A1 1 0 0016.446 10h-1.55l1.027-4.621A1 1 0 0014.943 4H10.337a1 1 0 00-.922.617l-2.108 4.742A1 1 0 008.254 11h1.55L8.777 15.621a1 1 0 001.201 1.201z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-brand-dark/40 overflow-hidden" id="about">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-brand-pink/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              alt="Hedayet Ullah"
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-brand-pink/50 shadow-2xl shadow-brand-pink/20"
              src="/avatar.png"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl font-bold text-brand-pink">I'm Hedayet Ullah</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Passionate and detail-oriented Junior Web Developer with a solid foundation in HTML, CSS, JavaScript, and React. Eager to continuously expand my skills in building interactive, user-friendly frontend applications and working with modern web workflow tools like Git and GitHub.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Dedicated to solving real-world problems through clean code, collaborating in team environments, and growing into a proficient full-stack developer over time.
          </p>

          {/* Service Cards */}
          <div className="space-y-4 pt-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`glass-card p-4 flex items-center border-l-4 ${service.borderColor} bg-white/5 rounded-r-xl transition-all duration-300 hover:bg-white/10`}
              >
                <span className={`mr-4 ${service.textColor}`}>
                  {service.icon}
                </span>
                <div>
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;