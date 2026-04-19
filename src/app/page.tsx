import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { AboutMindset } from "../components/AboutMindset";
import { FocusAreas } from "../components/FocusAreas";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { StatsSection } from "../components/StatsSection";
import { CurrentlyBuilding } from "../components/CurrentlyBuilding";
import { Contact } from "../components/Contact";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans relative">
        {/* Lightweight noise texture */}
        <div className="noise-bg" />
        <ScrollProgress />
        <BackToTop />

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <TrustStrip />
          <AboutMindset />
          <FocusAreas />
          <Projects />
          <Skills />
          <StatsSection />
          <CurrentlyBuilding />
          <Contact />
        </div>
    </main>
  );
}
