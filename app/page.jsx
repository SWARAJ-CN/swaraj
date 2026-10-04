import AwardSection from "./components/AwardSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HobbiesSection from "./components/HobbiesSection";
import InternshipsSection from "./components/InternshipsSection";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AwardSection />
        <InternshipsSection />
        <EducationSection />
        <CertificationsSection />
        <SkillsSection />
        <ProjectsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
