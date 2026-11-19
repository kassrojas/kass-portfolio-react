import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="skills">
          {skills.map((s) => (
            <div className="skills__group" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
