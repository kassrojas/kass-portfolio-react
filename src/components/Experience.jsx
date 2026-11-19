import { useEffect, useRef } from "react";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

// Fraction of the viewport height used as the "reading line" the timeline
// dots follow as the page scrolls.
const READING_LINE = 0.45;

export default function Experience() {
  const listRef = useRef(null);

  // Slide each entry's dot down its line as the reading line passes through
  // that entry: 0 = top of the entry, 1 = bottom. CSS reads --progress.
  useEffect(() => {
    const bodies = listRef.current.querySelectorAll(".timeline__body");
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * READING_LINE;
      bodies.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = r.height ? (line - r.top) / r.height : 0;
        el.style.setProperty("--progress", Math.min(1, Math.max(0, p)).toFixed(4));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ol className="timeline" ref={listRef}>
          {experience.map((job) => (
            <li className="timeline__item" key={job.company}>
              <div className="timeline__meta">
                <span className="timeline__dates">{job.dates}</span>
              </div>
              <div className="timeline__body">
                <h3>
                  {job.role}{" "}
                  <span>
                    @{" "}
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
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
