import { FaEnvelope, FaLinkedin, FaGithub, FaEye, FaDownload } from "react-icons/fa";
import resume from "../assets/files/kassandra_lazette_resume.pdf";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <SectionHeading eyebrow="Contact" title="Let's work together">
          I'm always happy to talk frontend, accessibility, or how AI fits into a dev workflow.
        </SectionHeading>

        <div className="contact__grid">
          <a className="contact__card" href={`mailto:${profile.email}?subject=Hello from your portfolio`}>
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
            <small>{profile.email}</small>
          </a>
          <a className="contact__card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
            <small>Connect with me</small>
          </a>
          <a className="contact__card" href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
            <small>@kassrojas</small>
          </a>
        </div>

        <div className="contact__resume">
          <a className="btn" href={resume} target="_blank" rel="noreferrer">
            <FaEye aria-hidden="true" /> View resume
          </a>
          <a className="btn btn--ghost" href={resume} download="Kassandra-Lazette-Resume.pdf">
            <FaDownload aria-hidden="true" /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
