"use client";
import React, { useState } from 'react';

const ProjectCard = ({ title, description, image, repoLink }) => (
  <article className="glass-card overflow-hidden group flex flex-col h-full">
    <div className="relative aspect-video overflow-hidden">
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={image}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <a className="flex items-center gap-2 text-sm text-gray-300 hover:text-white" href={repoLink} target="_blank" rel="noopener noreferrer">
          Repository 
          <img alt="github" className="w-5 h-5" src="/github.svg" />
        </a>
        <button className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Demo</button>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState('Web Application');

  const projects = [
    {
      title: "Dragon News",
      category: "Web Application",
      description: "A comprehensive news portal providing real-time updates and categorized news articles for a seamless reading experience.",
      image: "/Dragon news.png",
      repoLink: "https://github.com/Hedayet-756/Dragon-News"
    },
    {
      title: "KeenKeeper",
      category: "Web Application",
      description: "A productivity-focused task management application designed to help users keep track of their daily goals and assignments.",
      image: "/Keen Keeper.png",
      repoLink: "https://github.com/Hedayet-756/Assignment-7"
    },
    {
      title: "Bookvibe",
      category: "Web Application",
      description: "A curated platform for book enthusiasts to discover new titles, share reviews, and manage their personal reading lists.",
      image: "/Book vibe.png",
      repoLink: "https://github.com/Hedayet-756/Book-vibe"
    }
  ];

  const filteredProjects = projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-4 md:px-12 bg-zinc-950/30" id="projects">
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 py-12 italic">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
