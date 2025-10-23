import './App.css'
import NavBar from './Sections/NavBar.tsx'
import Home from './Sections/Home'
import AboutSection from "./Sections/AboutSection.tsx";

const App:React.FC=() => {

  return (
    <div className="min-h-screen bg-background">

        <NavBar />
        <Home />
        <AboutSection />
    </div>
  )
}

export default App
