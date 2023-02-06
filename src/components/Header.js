import React, { useState } from "react";
import Navigation from "./Navigation";
import pageComponents from "./pages";

const pages = Object.keys(pageComponents);

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const Page = () => pageComponents[currentPage]();
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header className="m-3">
        <h1>Kassandra Rojas Lazette</h1>
      </header>
      <div>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          pages={pages}
        />
        <Page />
      </div>
    </>
  );
}
