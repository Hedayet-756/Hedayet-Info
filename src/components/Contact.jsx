"use client";
import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-12 relative" id="contact">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 glow-pink -z-10"></div>
      <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
      
      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12">
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          <input type="hidden" name="access_key" value="f8a6c9be-448f-4819-8cb1-1779043fc76b" />
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">Name</label>
            <input 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all outline-none" 
              id="name" 
              name="name"
              placeholder="Your Name" 
              type="text" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all outline-none" 
              id="email" 
              name="email"
              placeholder="Your Email" 
              type="email" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all outline-none" 
              id="message" 
              name="message"
              placeholder="How can I help you?" 
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="btn-gradient px-10 py-3 rounded-full font-bold text-white shadow-lg shadow-brand-purple/20" type="submit">
              Send a message
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center space-x-6 mt-16">
        {[
          { alt: 'GitHub', icon: '/github.svg', href: 'https://github.com/Hedayet-756' },
          { alt: 'Gmail', icon: '/gmail-old.svg', href: 'mailto:uhedayet756@gmail.com' },
          { alt: 'LinkedIn', icon: '/linkedin.svg', href: 'https://www.linkedin.com/in/hedayet-ullah-a39525313' },
        ].map((social, i) => (
          <a key={i} className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-brand-purple transition-all" href={social.href} target="_blank" rel="noopener noreferrer">
            <img alt={social.alt} className="w-5 h-5" src={social.icon} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
