import React from "react";
import "./index.css";

function Navigation({ currentPage, handlePageChange, pages }) {
  return (
    <nav>
      <ul className="nav nav-tabs p-2">
        {pages.map((page) => (
          <li key={page} className="nav-item">
            <a
              href={`#${page.toLowerCase()}`}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "nav-link active" : "nav-link"}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
