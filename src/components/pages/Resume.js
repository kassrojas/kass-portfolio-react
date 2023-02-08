import React from "react";
import resumeImg from "../../assets/images/resume.png";

const styles = {
  img: {
    height: 400,
    width: "auto",
  },
  shadow: {
    border: "1px solid beige",
    boxShadow: "2px 20px 18px #D6CCC2",
  },
};

export default function Resume() {
  return (
    <>
      <div>
        <h1 className="text-center p-2 m-2"> Resume </h1>
      </div>
      <div className="min-vh-100">
        <div className="row">
          <h5 className="d-flex justify-content-center">
            {" "}
            Below is a copy of my resume{" "}
          </h5>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center">
            <a
              href="https://docs.google.com/document/d/1MBujKVfDwXmNIsnOfWOvB3Lu4F13QsMAo950S_OH-Bk/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={styles.shadow}
            >
              <img src={resumeImg} alt="resume" style={styles.img} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
