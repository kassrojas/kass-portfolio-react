import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { profile, stats } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero__eyebrow">
          <FaMapMarkerAlt aria-hidden="true" /> {profile.location}
        </p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn" href="#work">See my work</a>
          <a className="btn btn--ghost" href="#contact">Get in touch</a>
          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <dl className="stats">
          {stats.map((s) => (
            <div className="stats__item" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
