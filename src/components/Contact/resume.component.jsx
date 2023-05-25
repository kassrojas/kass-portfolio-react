import React from "react";
import KassRojasResume from "../../assets/files/resume.pdf";

const Resume = ({ resumeView }) => {
  return (
    <section className="resume-container">
      <h1 className="text-center">Resume</h1>
      <div className="resume-links">
        {resumeView.map((res) => (
          <aside className='resume-link'>
            <p className='resume-icon'>
              {res.icon}
            </p>
            <a
              key={res.id}
              href={KassRojasResume}
              action={res.action}
              target='_blank' rel="noreferrer"
              className='resume-link'
            >
              {res.label.toUpperCase()} RESUME
            </a>
          </aside>

        ))}
      </div>
    </section>

  );
};

export default Resume;
