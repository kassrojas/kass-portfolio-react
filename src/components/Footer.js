import React from "react";

const styles = {
  footer: {
    margin: "auto",
    text: "black",
    background: "beige",
    width: "100%",
    height: "2.5 rem",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <h5> Footer </h5>
    </footer>
  );
}
