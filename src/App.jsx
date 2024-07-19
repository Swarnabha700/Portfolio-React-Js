import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

function App() {

  return (
    <>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Portfolio"><Parallax type='portfolio'/></section>
    <section><Portfolio/></section>
    <section id="Projects"><Parallax type='projects'/></section>
    <Projects/>
    <section id="Contact"><Contact/></section>
    </>
  )
}

export default App
