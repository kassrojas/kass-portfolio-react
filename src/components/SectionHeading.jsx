export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-heading__intro">{children}</p>}
    </div>
  );
}
