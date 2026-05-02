"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home', className: 'text-xl md:text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] py-6 px-4 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#0B0118]/80 border-b border-white/10">
        <div className="text-2xl font-bold tracking-tight">
          <span className="">Hedayet</span>
          <span className="text-brand-purple">&lt;/&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="hover:text-brand-purple transition-colors"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none p-2 hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu Overlay */}
      <div className={`
        fixed inset-0 bg-[#0B0118] z-[90] flex flex-col items-center justify-center pt-24 transition-all duration-500 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        {/* Glow Effects for the menu background */}
        <div className="absolute top-0 right-0 w-64 h-64 glow-purple opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 glow-pink opacity-20 -z-10"></div>

        <nav className="flex flex-col items-center space-y-8 w-full px-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              onClick={() => setIsOpen(false)}
              className={`
                text-4xl font-bold text-white hover:text-brand-purple transition-all duration-300 transform
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Links in Mobile Menu */}
        <div className={`
          flex space-x-6 mt-16 transition-all duration-500 delay-500 transform
          ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}>
          <a href="https://github.com/Hedayet-756" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-brand-purple transition-all">
            <img alt="GitHub" className="w-6 h-6" src="/github.svg" />
          </a>
          <a href="https://www.linkedin.com/in/hedayet-ullah-a39525313" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-brand-purple transition-all">
            <img alt="LinkedIn" className="w-6 h-6" src="/linkedin.svg" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uhedayet756@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-brand-purple transition-all">
            <img alt="Gmail" className="w-6 h-6" src="/gmail-old.svg" />
          </a>
          <a href="https://wa.me/8801518792967" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-brand-purple transition-all">
            <img alt="WhatsApp" className="w-6 h-6" src="/whatsapp.svg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
