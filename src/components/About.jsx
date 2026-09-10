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
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* Left Side: Modern Code Visual Component */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex justify-center sticky top-24"
        >
          <div className="relative w-full max-w-md">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 to-brand-pink/30 rounded-3xl blur-2xl -z-10 animate-pulse"></div>

            {/* Code Window UI */}
            <div className="bg-[#0f0b1e]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono">developer.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed space-y-2">
                <p>
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">name</span>: <span className="text-emerald-400">'Hedayet Ullah'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">role</span>: <span className="text-emerald-400">'Junior Web Developer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">skills</span>: [
                  <span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Next.js'</span>, <span className="text-amber-300">'Tailwind'</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">passionate</span>: <span className="text-purple-300">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">codeStatus</span>: <span className="text-emerald-400">'Building awesome Web Experiences 🚀'</span>
                </p>
                <p>&#125;;</p>

                {/* Animated Cursor */}
                <div className="flex items-center gap-1 pt-2">
                  <span className="text-pink-500">&gt;</span>
                  <span className="text-gray-400">developer.build()</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-4 bg-brand-pink inline-block ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text, Education & Services */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-brand-pink mb-4">I'm Hedayet Ullah</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Passionate and detail-oriented Junior Web Developer with a solid foundation in HTML, CSS, JavaScript, and React. Eager to continuously expand my skills in building interactive, user-friendly frontend applications and working with modern web workflow tools like Git and GitHub.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Dedicated to solving real-world problems through clean code, collaborating in team environments, and growing into a proficient full-stack developer over time.
            </p>
          </div>

          {/* Education Card */}
          <div className="pt-2">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="p-2 bg-brand-purple/20 text-brand-purple rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              Education
            </h4>

            <div className="glass-card p-5 border-l-4 border-brand-purple bg-white/5 rounded-r-xl">
              {/* <span className="text-xs font-semibold px-2.5 py-1 bg-brand-purple/20 text-brand-purple rounded-full">
                Running / Student
              </span> */}
              <h5 className="text-lg font-bold text-white mt-2">B.Sc.(Pass)</h5>
              <p className="text-gray-400 text-sm mt-1">National University</p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
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
                  <h5 className="font-semibold text-white">{service.title}</h5>
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