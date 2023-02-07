import React, { useState } from "react";

const styles = {
  img: {
    height: "100%",
    width: "100%",
  },
};

export default function ProjectList({ apps, heading }) {
  return (
    <div className="project-list">
      <h2 className="m-2">{heading}</h2>
      {apps.map((app) => (
        <div className="card m-3 p-2">
          <section key={app.id} className="card-body">
            <h3 className="card-title">{app.title}</h3>
            <img src={app.img} alt="app image" style={styles.img} />
            <p className="card-text">{app.body}</p>
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
      ))}
    </div>
  );
}
