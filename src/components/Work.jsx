import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import { work, deliveryNote } from "../data/content";
import SectionHeading from "./SectionHeading";

const VISIBLE = 2; // cards shown before "See all"
const PEEK = 140; // px of the next row shown under the fade

export default function Work() {
  const [expanded, setExpanded] = useState(false);
  const [heights, setHeights] = useState({ collapsed: null, full: null });
  const gridRef = useRef(null);
  const sectionRef = useRef(null);
  const canCollapse = work.length > VISIBLE;

  // Measure where the last always-visible card ends so the collapsed height
  // works for any column count (two on desktop, one on mobile).
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || !canCollapse) return;

    const measure = () => {
      const items = grid.children;
      const top = grid.getBoundingClientRect().top;
      const lastVisible = items[VISIBLE - 1].getBoundingClientRect().bottom - top;
      setHeights({
        collapsed: Math.min(lastVisible + PEEK, grid.scrollHeight),
        full: grid.scrollHeight,
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [canCollapse]);

  // After "See less", bring the section back into view so the user isn't stranded.
  const prevExpanded = useRef(expanded);
  useEffect(() => {
    if (prevExpanded.current && !expanded) {
      sectionRef.current?.scrollIntoView({ block: "start" });
    }
    prevExpanded.current = expanded;
  }, [expanded]);

  const collapsed = canCollapse && !expanded;
  const maxHeight = !canCollapse || heights.full == null ? undefined : collapsed ? heights.collapsed : heights.full;

  return (
    <section className="section" id="work" ref={sectionRef}>
      <div className="container">
        <SectionHeading eyebrow="Client work · AXS (Carbonhouse)" title="Live venue websites">
          A selection of the arenas, stadiums, and performing arts centers I've built and launched. Every site is responsive,
          CMS-driven, and built to WCAG 2.1 AA.
        </SectionHeading>

        <p className="callout">{deliveryNote}</p>

        <div
          className={`work-reveal ${collapsed ? "is-collapsed" : ""}`}
          style={{ maxHeight }}
          id="work-list"
        >
          <ul className="work-grid" ref={gridRef}>
            {work.map((site, i) => {
              const hidden = collapsed && i >= VISIBLE;
              return (
                <li key={site.url} aria-hidden={hidden || undefined}>
                  <a
                    className="work-card"
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={hidden ? -1 : undefined}
                  >
                    <span className="work-card__place">{site.place}</span>
                    <h3 className="work-card__title">{site.title}</h3>
                    <p className="work-card__desc">{site.description}</p>
                    <ul className="work-card__highlights">
                      {site.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <span className="work-card__link">
                      Visit site <FaArrowRight aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {canCollapse && (
          <div className="work-toggle">
            <button
              type="button"
              className="btn btn--ghost"
              aria-expanded={expanded}
              aria-controls="work-list"
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded ? "See less" : `See all ${work.length}`}
              <FaChevronDown aria-hidden="true" className={`work-toggle__icon ${expanded ? "is-flipped" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
