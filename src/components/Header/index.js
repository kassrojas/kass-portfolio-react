import React, { useState } from "react";
import Navigation from "../Navigation";
import pageComponents from "../pages";
import "./index.css";

const pages = Object.keys(pageComponents);

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const Page = () => pageComponents[currentPage]();
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header className="header">
        <h1 className="name text-center">Kassandra Rojas Lazette</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          pages={pages}
        />
      </header>
      <section className="m-3 p-2 d-flex container vh-100" id="pageSection">
        <Page />
      </section>
    </>
  );
}
