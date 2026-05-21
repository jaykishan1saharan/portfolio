import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />    
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Services />
      <Contact />
    </>
  );
}
