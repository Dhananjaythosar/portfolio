import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Certifications } from "@/components/Certifications";
import { Resume } from "@/components/Resume";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Certifications />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
