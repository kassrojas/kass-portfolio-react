import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { profile } from "../data/content";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lets other fixed controls (the flower-cursor gear) make room for this button.
  useEffect(() => {
    document.documentElement.classList.toggle("has-to-top", showTop);
    return () => document.documentElement.classList.remove("has-to-top");
  }, [showTop]);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React &amp; Sass
        </p>
      </div>
      <button
        className={`to-top ${showTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
