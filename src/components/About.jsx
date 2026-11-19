import me from "../assets/images/cropped-self.jpg";
import { about, hobbies } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__photo">
          <img src={me} alt="Kassandra Rojas Lazette" loading="lazy" />
        </div>
        <div className="about__text">
          <SectionHeading eyebrow="About" title="Hi, I'm Kass 👋🏼" />
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="about__hobbies">
            <span>Off the clock:</span> {hobbies.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
