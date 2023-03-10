import React from "react";
import "./index.css";

export default function ProjectList({ apps, heading }) {
  return (
    <>
      <h2 className="m-2">{heading}</h2>
      <div className="project-list row">
        {apps.map((app) => (
          <div className="col-12 col-md-6 col-xl-4">
            <div className="card m-2">
              <section key={app.id} className="card-body">
                <h3 className="card-title">{app.title}</h3>
                <img src={app.img} alt="application screenshot" />
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
