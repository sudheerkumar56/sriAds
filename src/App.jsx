import Navbar from "./Navbar"
import Hero from "./Hero"
import Services from "./Services"
import Work from "./Work"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import "./App.css"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
