import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../components/footer.styles.scss";

// const styles = {
//   footer: {
//     margin: "auto",
//     paddingBottom: "2rem",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//   },
//   a: {
//     fontSize: '3rem',
//     margin: 2,
//     color: "#ccc",
//   }
// };

export default function Footer() {
  return (
    // <footer style={styles.footer}>
    <footer>
      <a
        href="https://github.com/kassrojas"
        target="_blank" rel="noreferrer"
        title="My GitHub"
      >
        <FaGithub className="footer-ico" />
      </a>
      <a
        href="https://www.linkedin.com/in/ikassandrarojas/"
        target="_blank"
        rel="noreferrer"
        title="My LinkedIn"
      >
        <FaLinkedin className="footer-ico" />
      </a>
      <a
        href="mailto:kassandrarojass@gmail.com?subject=Message From Portfolio"
        title="My Email"
      >
        <FaEnvelope className="footer-ico" />
      </a>
    </footer>
  );
}
