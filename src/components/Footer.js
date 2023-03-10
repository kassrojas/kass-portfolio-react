import React from "react";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const styles = {
  footer: {
    margin: "auto",
    text: "black",
    background: "beige",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  a: {
    fontSize: 75,
    margin: 2,
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
        href="https://www.instagram.com/imkassandrarojas.lazette/"
        target="_blank"
        rel="noreferrer"
        title="My Instagram"
      >
        <FaInstagramSquare style={styles.a} />
      </a>
    </footer>
  );
}
