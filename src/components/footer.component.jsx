import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const styles = {
  footer: {
    margin: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  a: {
    fontSize: '3rem',
    margin: 2,
    color: "#ccc",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <a
        href="https://github.com/kassrojas"
        target="_blank" rel="noreferrer"
        title="My GitHub"
      >
        <FaGithub style={styles.a} />
      </a>
      <a
        href="https://www.linkedin.com/in/ikassandrarojas/"
        target="_blank"
        rel="noreferrer"
        title="My LinkedIn"
      >
        <FaLinkedin style={styles.a} />
      </a>
      <a
        href="mailto:kassandrarojass@gmail.com?subject=Message From Portfolio"
        title="My Email"
      >
        <FaEnvelope style={styles.a} />
      </a>
    </footer>
  );
}
