import './App.css'
import NavBar from './Sections/NavBar.tsx'
import Home from './Sections/Home'
import AboutSection from "./Sections/AboutSection.tsx";
import ProjectsSection from "./Sections/ProjectsSection.tsx";
import SkillsSection from "./Sections/SkillsSection.tsx";
import Certificates from "./Sections/CertificationSection.tsx";
import GallerySection from "./Sections/GalllerySection.tsx";

const App:React.FC=() => {

  return (
    <div className="min-h-screen bg-background">

        <NavBar />
        <Home />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Certificates />
        <GallerySection />
    </div>
  )
}

export default App
