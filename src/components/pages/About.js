import React from "react";
import myself from "../../images/self.jpeg";

const styles = {
  myimg: {
    height: 300,
    borderRadius: 300,
  },
};

export default function About() {
  return (
    <section>
      <div className="row">
        <h1 className="text-center"> About Me </h1>
      </div>
      <div className="row">
        <img src={myself} alt="me" style={styles.myimg} className="col-auto" />
        <p className="col-auto">
          Hello! <br />
          My name is Kass and I am a recent graduate from UNC Charlotte's Full
          Stack Web Development bootcamp! <br /> I was born in Mexico and raised
          in Charlotte. I learned Spanish and English at the same time and
          consider myself a great communicator in both languages. <br /> A few
          months ago, I got married and it has been my second favorite life
          experience to meeting my husband. During the pandemic, we adopted our
          first dog and named her Kiwi. <br /> On my free time I enjoy knitting
          blankets, baking homemade bread, making pasta from scratch, reading
          romantic science fiction novels, and powerlifting in my garage gym.
        </p>
      </div>
    </section>
  );
}
