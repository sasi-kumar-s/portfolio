import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { AboutMindset } from "../components/AboutMindset";
import { ExecutionApproach } from "../components/ExecutionApproach";
import { FocusAreas } from "../components/FocusAreas";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { CurrentlyBuilding } from "../components/CurrentlyBuilding";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans relative">
        {/* Lightweight noise texture */}
        <div className="noise-bg" />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <TrustStrip />
          <AboutMindset />
          <ExecutionApproach />
          <FocusAreas />
          <Projects />
          <Skills />
          <CurrentlyBuilding />
          <Contact />
        </div>
    </main>
  );
}
