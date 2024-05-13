import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Services />
      <Contact />
      <SocialLinks />
    </>
  )
}

export default App
