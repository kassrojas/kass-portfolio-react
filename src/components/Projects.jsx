import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Personal projects" title="Things I've built for fun">
          Side projects from my early days of learning and experimenting.
        </SectionHeading>

        <ul className="project-grid">
          {projects.map((p) => (
            <li className="project-card" key={p.title}>
              <div className="project-card__img">
                <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
              </div>
              <div className="project-card__body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul className="tags">
                  {p.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  {p.deployed && (
                    <a href={p.deployed} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt aria-hidden="true" /> Live
                    </a>
                  )}
                  <a href={p.gitLink} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" /> Code
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="more-link">
          More on{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
