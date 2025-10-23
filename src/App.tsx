import './App.css'
import NavBar from './Sections/NavBar.tsx'
import Home from './Sections/Home'
import AboutSection from "./Sections/AboutSection.tsx";
import ProjectsSection from "./Sections/ProjectsSection.tsx";

const App:React.FC=() => {

  return (
    <div className="min-h-screen bg-background">

        <NavBar />
        <Home />
        <AboutSection />
        <ProjectsSection />
    </div>
  )
}

export default App
