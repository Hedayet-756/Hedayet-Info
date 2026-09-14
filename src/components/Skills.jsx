"use client";
import React from 'react';
import { motion } from 'framer-motion';

// আইকন পাথগুলো সরাসরি দেওয়া হলো যেন সহজে লোড হয়
const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", icon: "/html5.svg", experience: "1+ Years Experience", color: "from-orange-500 to-amber-500" },
      { name: "CSS3 / Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", experience: "Practical Project Use", color: "from-cyan-400 to-blue-500" },
      { name: "JavaScript (ES6+)", icon: "/js.svg", experience: "Core Competency", color: "from-yellow-400 to-amber-500" },
      { name: "React.js", icon: "/react.svg", experience: "Primary Framework", color: "from-cyan-400 to-teal-400" },
      { name: "Next.js", icon: "/next.svg", experience: "Modern Web Apps", color: "from-white to-gray-400" },
    ]
  },
  {
    category: "Tools & Backend Basics",
    items: [
      { name: "Git & GitHub", icon: "/github.svg", experience: "Version Control", color: "from-purple-500 to-indigo-500" },
      { name: "Node.js / Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", experience: "API & Backend Basics", color: "from-green-500 to-emerald-400" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", experience: "Primary IDE", color: "from-blue-500 to-cyan-500" },
      { name: "Vercel / Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg", experience: "Deployment & Auth", color: "from-yellow-500 to-orange-500" },
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-12 px-4 md:px-12 relative overflow-hidden" id="skills">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-3">Technical Skills</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">Technologies and tools I work with to build modern web applications.</p>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto space-y-12">
        {skillsData.map((cat, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-xl font-semibold mb-6 text-brand-pink border-l-4 border-brand-pink pl-3">{cat.category}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cat.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:border-white/20 transition-all duration-300 shadow-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 p-2.5 flex items-center justify-center border border-white/5">
                      <img alt={skill.name} className="w-full h-full object-contain" src={skill.icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base">{skill.name}</h4>
                      <span className="text-xs text-brand-pink/80 font-medium">{skill.experience}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;