import React from "react";
import "./project-list.styles.scss";

export default function ProjectList({ apps, heading }) {
  return (
    <>
      <div className="project-list-heading">
        <h2 className="mb-2 text-center">{heading}</h2>
      </div>
      <div className="project-list row">
        {apps.map((app) => (
          <div className="col-12 col-md-6 col-xl-4" key={app.id}>
            <div className="card m-2">
              <section className="card-body">
                <h3 className="card-title">{app.title}</h3>
                <img src={app.img} alt="application screenshot" className="project-img" />
                <p className="card-text p-2">{app.body}</p>
                <p className="card-text p-2">Technologies Used: {app.technologies}</p>
                <a
                  href={app.deployed}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark m-2"
                >
                  Deployed Application
                </a>
                <a
                  href={app.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark m-2"
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
