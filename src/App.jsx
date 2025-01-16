import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.component";
import Contact from "./components/Contact/contact.component";
import About from "./components/About/about.component";
import Portfolio from "./components/Projects/portfolio.component";
import Header from "./components/Header/header.component";
import Footer from "./components/footer.component";
import Blog from "./components/Blog/blog.component"; // We'll create this later

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
