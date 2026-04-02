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
        {/* Global Atmosphere Layer */}
        <div className="noise-bg" />
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full mix-blend-screen animate-ambient-drift" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full mix-blend-screen animate-ambient-drift" style={{ animationDelay: '5s' }} />
        </div>

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

