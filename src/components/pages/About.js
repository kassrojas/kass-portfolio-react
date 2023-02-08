import React from "react";
import myself from "../../assets/images/self.jpeg";

const styles = {
  myimg: {
    height: 300,
    width: "auto",
    borderRadius: 300,
  },
  shadow: {
    border: "1px solid beige",
    boxShadow: "2px 20px 18px #D6CCC2",
  },
};

export default function About() {
  return (
    <>
      <div className="row m-2 p-3">
        <h1 className="text-center"> About Me </h1>
      </div>
      <div className="min-vh-100">
        <div className="row m-2 p-3">
          <div className="d-flex justify-content-center mb-3">
            <img src={myself} alt="me" style={styles.myimg} />
          </div>
          <div
            className="d-flex justify-content-evenly text-center"
            style={styles.shadow}
          >
            <p className="fs-4 p-2 d-flex justify-content-center">
              Hello! <br />
              My name is Kass and I am a recent graduate from UNC Charlotte's
              Full Stack Web Development bootcamp! I was born in Mexico and
              raised in Charlotte. I learned Spanish and English at the same
              time and consider myself a great communicator in both languages. A
              few months ago, I got married and it has been my second favorite
              life experience to meeting my husband. During the pandemic, we
              adopted our first dog and named her Kiwi. <br /> On my free time I
              enjoy knitting blankets, baking homemade bread, making pasta from
              scratch, reading romantic science fiction novels, and powerlifting
              in my garage gym.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
