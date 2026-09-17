"use client";
import { motion } from "framer-motion";
import githubIcon from '../../public/github.svg';
import linkedinIcon from '../../public/linkedin.svg';
import gmailIcon from '../../public/gmail-old.svg';
import html5Icon from '../../public/html5.svg';
import reactIcon from '../../public/react.svg';
import nextIcon from '../../public/next.svg';
import jsIcon from '../../public/js.svg';

const TechIcon = ({ src, alt, className, glowColor, animateProps }) => (
  <motion.div
    {...animateProps}
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    className={`absolute w-12 h-12 md:w-16 md:h-16 bg-[#0B0118] rounded-full flex items-center justify-center border-2 border-white/10 shadow-2xl cursor-pointer ${className}`}
    style={{ boxShadow: `0 0 25px ${glowColor}` }}
  >
    <img alt={alt} className="w-6 h-6 md:w-8 md:h-8 object-contain" src={src} />
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden" id="home">
      {/* Animated Glow background decorations */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 glow-purple -z-10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-0 w-80 h-80 glow-pink -z-10 rounded-full blur-3xl"
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 space-y-8 z-10"
      >
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-8xl font-extrabold leading-tight tracking-tight"
          >
            Hi, I'm <span className="text-white">Hedayet</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent"
          >
            Junior Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-400 max-w-lg text-lg md:text-xl leading-relaxed"
          >
            Crafting modern, responsive, and user-friendly websites with passion and precision.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center gap-6 pt-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1YS7rCGL38OqfI4VXipnc0N1ODArt7bGF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg shadow-brand-purple/20"
          >
            View Resume
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </motion.a>

          <div className="flex space-x-4 items-center">
            {[
              { alt: 'GitHub', src: githubIcon.src || githubIcon, href: 'https://github.com/Hedayet-756' },
              { alt: 'LinkedIn', src: linkedinIcon.src || linkedinIcon, href: 'https://www.linkedin.com/in/hedayet-ullah-a39525313' },
              { alt: 'Mail', src: gmailIcon.src || gmailIcon, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=uhedayet756@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={social.alt}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-brand-purple hover:bg-white/10 transition-colors"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={social.alt} className="w-5 h-5 opacity-80 hover:opacity-100" src={social.src} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Avatar & Floating Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:w-1/2 mt-20 md:mt-0 relative flex justify-center items-center"
      >
        <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
          {/* Avatar with Glow & Subtle Floating */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 blob-shape p-1 bg-gradient-to-br from-brand-purple to-brand-pink shadow-[0_0_50px_rgba(139,92,246,0.3)]"
          >
            <div className="w-full h-full bg-[#0B0118] blob-shape p-2">
              <img alt="Hedayet Ullah" className="w-full h-full object-contain blob-shape" src="/me.png" />
            </div>
          </motion.div>

          {/* Floating Tech Icons with independent animation paths */}
          <TechIcon
            src={jsIcon.src || jsIcon}
            alt="JavaScript"
            className="top-0 left-0 md:-top-4 md:-left-4"
            glowColor="rgba(250, 204, 21, 0.4)"
            animateProps={{
              animate: { y: [0, -12, 0], x: [0, 5, 0] },
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <TechIcon
            src={html5Icon.src || html5Icon}
            alt="HTML5"
            className="top-10 right-0 md:top-12 md:-right-8"
            glowColor="rgba(249, 115, 22, 0.4)"
            animateProps={{
              animate: { y: [0, 12, 0], x: [0, -5, 0] },
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />
          <TechIcon
            src={reactIcon.src || reactIcon}
            alt="React"
            className="bottom-0 right-10 md:bottom-4 md:right-4"
            glowColor="rgba(34, 211, 238, 0.4)"
            animateProps={{
              animate: { y: [0, -15, 0], x: [0, -8, 0] },
              transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          />
          <TechIcon
            src={nextIcon.src || nextIcon}
            alt="Next.js"
            className="bottom-10 left-0 md:bottom-12 md:-left-8"
            glowColor="rgba(255, 255, 255, 0.2)"
            animateProps={{
              animate: { y: [0, 10, 0], x: [0, 8, 0] },
              transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export class Hero_2 { } // fallback for naming if needed, export default Hero is used below
export default Hero;