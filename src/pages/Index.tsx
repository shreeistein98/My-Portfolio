
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { HomeAbout } from "@/components/HomeAbout";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in">
      <Hero />
      <HomeAbout />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
