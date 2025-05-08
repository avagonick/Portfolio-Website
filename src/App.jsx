import { useState } from "react"
import './App.css'
import { LoadingScreen } from "./components/LoadScreen"
import "./index.css"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
  {!isLoaded && <LoadingScreen onComplete={() =>setIsLoaded(true)} onClick={() => setIsLoaded(true)} />}
    {/*min-h-screen ensures div takes up entire screen even if it has no content*/}
    {/*transition-opacity means if opacity changes animate it smoothly and this animation should take 0.7 seconds*/}
    <div className={`min-h-screen max-w-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} 
    bg-black text-gray-100`}>
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Home />
      <About />
      <Projects />
    </div>
  </>
}

export default App
