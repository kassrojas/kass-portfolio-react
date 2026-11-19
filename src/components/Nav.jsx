import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "../assets/files/kassandra_lazette_resume.pdf";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  // { href: "#projects", label: "Projects" }, // hidden with the projects section
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={close} aria-label="Back to top">
          KRL<span>.</span>
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav id="nav-menu" className={`nav__menu ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--small" href={resume} target="_blank" rel="noreferrer" onClick={close}>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
