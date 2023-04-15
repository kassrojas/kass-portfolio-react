import React, { useState } from "react";
import Navigation from "../Navigation";
import "./header.css";

export default function Header({ handlePageChange, pages, currentPage }) {
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
    </>
  );
}
