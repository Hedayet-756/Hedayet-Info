"use client";
import React from 'react';
import { motion } from 'framer-motion';

const valuesData = [
    {
        title: "End-to-End Execution",
        description: "Capable of handling client-side architecture while seamlessly integrating backend services, REST APIs, and databases to deliver fully functional features.",
        icon: "🚀"
    },
    {
        title: "Clean & Maintainable Code",
        description: "Focused on writing modular, reusable components using React.js and Next.js, ensuring long-term code scalability and easy maintenance.",
        icon: "💻"
    },
    {
        title: "User-Centric Performance",
        description: "Dedicated to building responsive, high-performance web applications with optimized UIs that deliver exceptional user experiences across all devices.",
        icon: "⚡"
    },
    {
        title: "Proactive Problem Solver",
        description: "Equipped with strong adaptability, a quick-learning mindset, and reliable debugging practices to resolve issues and add value from day one.",
        icon: "🧩"
    }
];

const Visions = () => {
    return (
        <section className="py-20 px-4 md:px-12 relative overflow-hidden" id="visions">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold mb-3 text-white">What I Bring to the Table</h2>
                <p className="text-gray-400 text-sm max-w-lg mx-auto">
                    How I add value to your team, organization, and projects through my technical skills and dedication.
                </p>
            </motion.div>

            {/* Grid Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {valuesData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-brand-purple/50 transition-all duration-300 shadow-xl flex gap-5 items-start"
                    >
                        <div className="text-4xl p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Visions;