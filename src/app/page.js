import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Visions from "@/components/Visions";

export default function Home() {
  return (
    <main className="antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Visions />
      <Contact />
      <Footer />
    </main>
  );
}
