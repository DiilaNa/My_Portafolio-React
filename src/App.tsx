import './App.css'
import NavBar from './Sections/NavBar.tsx'
import Home from './Sections/Home'

const App:React.FC=() => {

  return (
    <div className="min-h-screen bg-background">

        <NavBar />
        <Home />
    </div>
  )
}

export default App
