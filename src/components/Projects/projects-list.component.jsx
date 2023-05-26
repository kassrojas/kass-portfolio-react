import React from "react";
import "./project-list.styles.scss";

export default function ProjectList({ apps, heading }) {
  return (
    <>

      <h2 className="p-3 text-center project-heading">{heading}</h2>

      <div className="project-list row">
        {apps.map((app) => (
          <div className="col-12 col-md-6 col-xl-4" key={app.id}>
            <div className="card m-2 project-card">
              <section className="card-body">
                <h3 className="card-title">
                  {app.title}
                </h3>
                <img src={app.img} alt="application screenshot" className="project-img" />
                <p className="card-text app-desc p-2">
                  {app.body}
                </p>
                <p className="card-text app-tech p-2">
                  Technologies Used:<br></br> {app.technologies}
                </p>
                <a
                  href={app.deployed}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link m-2"
                >
                  Deployed App
                </a>
                <a
                  href={app.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link m-2"
                >
                  GitHub Repo
                </a>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
