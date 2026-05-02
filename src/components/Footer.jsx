"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-brand-dark/80 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold">
          Hedayet<span className="text-brand-purple">&lt;/&gt;</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a className="hover:text-white" href="#home">Home</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#skills">Skills</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
