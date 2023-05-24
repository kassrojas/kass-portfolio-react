import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Contact from "./components/Contact/contact.component";
import About from "./components/About/About";
import Portfolio from "./Projects/Portfolio";
import Resume from "./components/Resume/resume.component";
import Header from "./components/Header/header.component";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path='kass-portfolio-react' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Portfolio />} />
          <Route path='resume' element={<Resume />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App;
