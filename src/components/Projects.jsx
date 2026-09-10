"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper এর প্রয়োজনীয় CSS ফাইলসমূহ
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#0B0118] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl glass-card animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white z-10 p-2 bg-white/5 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>

        <div className="relative aspect-video w-full">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0118] via-transparent to-transparent"></div>
        </div>

        <div className="p-8 md:p-10 -mt-12 relative z-10">
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 text-brand-purple rounded-full text-xs font-semibold">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-8">
            <section>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-purple rounded-full"></span>
                Description
              </h4>
              <p className="text-gray-400 leading-relaxed">{project.details}</p>
            </section>

            <section>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-pink rounded-full"></span>
                Challenges Faced
              </h4>
              <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
            </section>

            <section>
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-400 rounded-full"></span>
                Future Plans
              </h4>
              <p className="text-gray-400 leading-relaxed">{project.futurePlans}</p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-gradient px-8 py-3 rounded-full font-bold text-sm">
              Live Project
            </a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold text-sm">
              <img src="/github.svg" className="w-5 h-5" alt="github" />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onOpenDetails }) => (
  <article className="glass-card overflow-hidden group flex flex-col h-full border border-white/10 rounded-2xl bg-zinc-900/40">
    <div className="relative aspect-video overflow-hidden">
      <img
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={project.image}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <a className="flex items-center gap-2 text-sm text-gray-300 hover:text-white" href={project.repoLink} target="_blank" rel="noopener noreferrer">
          Repository
          <img alt="github" className="w-5 h-5" src="/github.svg" />
        </a>
        <button
          onClick={() => onOpenDetails(project)}
          className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Details
        </button>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState('Web Application');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "DriveFleet",
      category: "Web Application",
      description: "A modern, luxury-driven web application designed to make premium car rentals seamless, fast, and secure. Built with cutting-edge technologies, it provides users with an elite browsing and booking experience, ensuring their journey starts with the perfect ride.",
      details: "The DriveFleet project is a comprehensive car rental platform that offers a seamless booking experience with real-time availability and pricing information.",
      image: "/DriveFleet.png",
      techStack: ["Next.js", "Tailwind CSS", "React Router", "DaisyUI"],
      liveLink: "https://drivefleet-chi.vercel.app/",
      repoLink: "https://github.com/Hedayet-756/DriveFleet",
      challenges: "One of the primary challenges was implementing a robust client-side routing system that handles dynamic category filtering while maintaining a smooth user experience.",
      futurePlans: "Plans to integrate a user-specific dashboard, dark mode toggle, and a newsletter subscription feature using Firebase."
    },
    {
      title: "StartupForge",
      category: "Web Application",
      description: "StartupForge is a comprehensive web platform designed to bridge the gap between startup founders, ambitious entrepreneurs, and job seekers. It empowers founders to register their ventures, manage applications, and post career opportunities, while allowing candidates to explore and apply seamlessly.",
      details: "The StartupForge project is a dynamic platform that connects startup founders with potential employees and investors.",
      image: "/StartupForge.png",
      techStack: ["Next.js", "Tailwind CSS", "React Router", "DaisyUI"],
      liveLink: "https://startupforge-client-tan.vercel.app/",
      repoLink: "https://github.com/Hedayet-756/StartupForge_client",
      challenges: "One of the primary challenges was implementing a robust client-side routing system that handles dynamic category filtering while maintaining a smooth user experience.",
      futurePlans: "Plans to integrate a user-specific dashboard, dark mode toggle, and a newsletter subscription feature using Firebase."
    },
    {
      title: "Dragon News",
      category: "Web Application",
      description: "A comprehensive news portal providing real-time updates and categorized news articles for a seamless reading experience.",
      details: "The Dragon News project is a dynamic news aggregation platform where users can browse articles by category, read detailed news items, and stay updated with live breaking news tickers.",
      image: "/Dragon news.png",
      techStack: ["Next.js", "Tailwind CSS", "React Router", "DaisyUI"],
      liveLink: "https://dragon-news-next-seven.vercel.app",
      repoLink: "https://github.com/Hedayet-756/Dragon-news-next",
      challenges: "One of the primary challenges was implementing a robust client-side routing system that handles dynamic category filtering while maintaining a smooth user experience.",
      futurePlans: "Plans to integrate a user-specific dashboard, dark mode toggle, and a newsletter subscription feature using Firebase."
    },
    {
      title: "KeenKeeper",
      category: "Web Application",
      description: "A productivity-focused task management application designed to help users keep track of their daily goals and assignments.",
      details: "KeenKeeper is a streamlined task management tool focused on simplicity. It allows users to organize their daily schedule, set priorities, and track progress over time.",
      image: "/Keen Keeper.png",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "LocalStorage"],
      liveLink: "https://assignment-7-keenkeeper-hedayet-ullah.netlify.app/",
      repoLink: "https://github.com/Hedayet-756/Assignment-7",
      challenges: "Managing state persistence using LocalStorage without a backend database required careful data structure planning to avoid performance lags.",
      futurePlans: "Future updates will include cloud synchronization, multi-user support, and advanced task categorization with drag-and-drop features."
    },
    {
      title: "Bookvibe",
      category: "Web Application",
      description: "A curated platform for book enthusiasts to discover new titles, share reviews, and manage their personal reading lists.",
      details: "Bookvibe serves as a digital bookshelf for avid readers. It provides a clean UI for managing a wishlist, marking books as read, and writing personalized reviews for each title.",
      image: "/Book vibe.png",
      techStack: ["React", "Tailwind CSS", "Context API", "React Hooks"],
      liveLink: "https://bookvibe-39.netlify.app/",
      repoLink: "https://github.com/Hedayet-756/Book-vibe",
      challenges: "Implementing a seamless filtering system for books based on rating, status, and genre was a complex logic task solved using React Context.",
      futurePlans: "Aiming to integrate the Google Books API for automatic metadata fetching and adding a social feature to share reading lists with friends."
    }
  ];

  const filteredProjects = projects.filter(p => p.category === filter);

  return (
    <section className="py-12 px-4 md:px-12 bg-zinc-950/30" id="projects">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex p-1 bg-zinc-900/50 rounded-full border border-gray-800">
          <button
            onClick={() => setFilter('Web Application')}
            className={`${filter === 'Web Application' ? 'tab-active' : 'text-gray-400 hover:text-white'} px-6 py-2 rounded-full text-sm font-semibold transition-colors`}
          >
            Web Application
          </button>
          <button
            onClick={() => setFilter('Mobile application')}
            className={`${filter === 'Mobile application' ? 'tab-active' : 'text-gray-400 hover:text-white'} px-6 py-2 rounded-full text-sm font-semibold transition-colors`}
          >
            Mobile application
          </button>
        </div>
      </div>

      {/* Projects Swiper Slider */}
      <div className="max-w-7xl mx-auto relative px-4">
        {filteredProjects.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14 mySwiper"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ProjectCard
                  project={project}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 py-12 italic">No projects in this category yet.</p>
        )}
      </div>

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;