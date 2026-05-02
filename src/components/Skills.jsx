"use client";
import React from 'react';
import html5Icon from '../../public/html5.svg';
import reactIcon from '../../public/react.svg';
import nextIcon from '../../public/next.svg';
import jsIcon from '../../public/js.svg';

const SkillItem = ({ name, icon, dots, colorClass }) => (
  <div className="flex items-center justify-between glass-card p-4 transition-all hover:scale-105 hover:border-brand-purple/50">
    <div className="flex items-center gap-4">
      <img alt={name} className="w-8 h-8 object-contain" src={icon.src || icon} />
      <div className="flex space-x-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`skill-dot ${i < dots ? colorClass : 'bg-zinc-700'}`}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: html5Icon, dots: 7, colorClass: 'bg-orange-500' },
    { name: 'JavaScript', icon: jsIcon, dots: 6, colorClass: 'bg-yellow-400' },
    { name: 'React', icon: reactIcon, dots: 6, colorClass: 'bg-cyan-400' },
    { name: 'Next.js', icon: nextIcon, dots: 5, colorClass: 'bg-white' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 relative overflow-hidden" id="skills">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-purple -z-10 opacity-20"></div>
      <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
