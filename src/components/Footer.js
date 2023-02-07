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
      <a>
        <FaGithub style={styles.a} />
      </a>
      <a>
        <FaLinkedin style={styles.a} />
      </a>
      <a>
        <FaInstagramSquare style={styles.a} />
      </a>
    </footer>
  );
}
