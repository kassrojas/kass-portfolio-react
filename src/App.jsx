import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlowerCursor from "./components/FlowerCursor";
import CornerLeaves from "./components/CornerLeaves";

export default function App() {
  return (
    <>
      <CornerLeaves />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FlowerCursor />
    </>
  );
}
