import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navbar from "./routes/NavBar/navbar.components";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Portfolio from "./Projects/Portfolio";
import Resume from "./components/Resume/resume.component";

function App() {
  return (
    <Routes>
      <Route path='kass-portfolio-react' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App;
