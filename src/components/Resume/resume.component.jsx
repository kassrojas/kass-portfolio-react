import React from "react";
import resumeImg from "../../assets/images/resume.png";
import KassRojasResume from "../../assets/files/resume.pdf";
import "./resume.css";

const styles = {
  shadow: {
    border: "1px solid beige",
    boxShadow: "2px 20px 18px #D6CCC2",
  },
};

export default function Resume() {
  return (
    <>
      <section className="min-vh-100 resume">
        <h1 className="text-center p-2 my-2">Resume</h1>
        <main className="resume-main container">
          <div className="row">
            <h5 className="d-flex col justify-content-center text-center">
              {" "}
              Click To Download Copy of Updated Resume{" "}
            </h5>
          </div>
          <div className="row">
            <div className="d-flex col justify-content-center my-3">
              <a href={KassRojasResume} download="Kassandra-Rojas-Resume" target='_blank' rel="noreferrer">
                <img src={resumeImg} alt="resume" id="resume-img" style={styles.img} />
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
