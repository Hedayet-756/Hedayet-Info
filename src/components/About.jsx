

const About = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-brand-dark/40" id="about">
      <h2 className="text-4xl font-bold text-center mb-20">About Me</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-brand-pink/20 rounded-full blur-2xl"></div>
            <img alt="Hedayet Ullah" className="relative z-10 w-full h-full object-cover rounded-full border-2 border-brand-pink/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARukrJtI46do71AKNfF_yc8kJ8v0d0OlfijhFHyQ412_zWPMwio7VD9mlG9i9HYt6zuXD2IYS3XlE-htyKx86-yzi0rzM12akQHmh9N06NifVg--hE-VJ5VmqxEjZYI9B1sAb_2K73BR9rhCCmBxTOmQKyzxpczPjeM_g26YLSnRS4I2FTSJwePR-EOLXhLBV3kmaLsEi_wvRZYo2_pvECGis5Y7RZgT-tTB15Wg_ur5dPUh8odVn0BVEvzw3N3cS_KGc5aK_3sbJX" />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold text-brand-pink">I'm Hedayet Ullah</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Complete Web Development student at Programming Hero and freelance web/mobile developer in Bangladesh.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I develop customized solutions for startups and companies using Next.js, React and other technologies.
          </p>
          <div className="space-y-4 pt-4">
            {/* Service Items */}
            <div className="glass-card p-4 flex items-center border-l-4 border-brand-purple">
              <span className="mr-4 text-brand-purple">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>
              <span className="font-medium">Web Application Development</span>
            </div>
            <div className="glass-card p-4 flex items-center border-l-4 border-brand-pink">
              <span className="mr-4 text-brand-pink">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>
              <span className="font-medium">Mobile Application Development</span>
            </div>
            <div className="glass-card p-4 flex items-center border-l-4 border-orange-400">
              <span className="mr-4 text-orange-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.674a1 1 0 00.922-.617l2.108-4.742A1 1 0 0016.446 10h-1.55l1.027-4.621A1 1 0 0014.943 4H10.337a1 1 0 00-.922.617l-2.108 4.742A1 1 0 008.254 11h1.55L8.777 15.621a1 1 0 001.201 1.201z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>
              <span className="font-medium">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
