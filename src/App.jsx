import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.component";
import Contact from "./components/Contact/contact.component";
import About from "./components/About/about.component";
import Portfolio from "./components/Projects/portfolio.component";
import Header from "./components/Header/header.component";
import Footer from "./components/footer.component";
import "./index.styles.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path='kass-portfolio-react/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      < Footer />
    </>
  )
}

export default App;
