"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { ScrollSection } from "@/components/ScrollSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen overflow-y-auto snap-y snap-mandatory">
        <ScrollSection>
          <Hero />
        </ScrollSection>

        <ScrollSection>
          <About />
        </ScrollSection>

        <ScrollSection align="start">
          <Experience />
        </ScrollSection>

        <ScrollSection>
          <Projects />
        </ScrollSection>

        <ScrollSection>
          <Skills />
        </ScrollSection>

        <ScrollSection>
          <Education />
        </ScrollSection>

        <ScrollSection>
          <Footer />
        </ScrollSection>
      </main>
    </>
  );
}
