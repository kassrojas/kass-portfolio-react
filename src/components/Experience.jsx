import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={job.company}>
              <div className="timeline__meta">
                <span className="timeline__dates">{job.dates}</span>
              </div>
              <div className="timeline__body">
                <h3>
                  {job.role} <span>@ {job.company}</span>
                </h3>
                <ul>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
