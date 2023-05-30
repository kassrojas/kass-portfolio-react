import React from "react";
import myself from '../../assets/images/self.jpeg';
import "./about.styles.scss";

export default function About() {
  return (
    <>
      <div className="about-container">
        <h2 className="p-3 text-center component-heading">About Me<hr /></h2>

        <section className="image-container">
          <img src={myself} alt="me" className="about-img" />
        </section>
        <section className="about-text-container">
          <p className="about-context">
            My name is <strong>Kass</strong> and I am a <strong>Certified Full Stack Web Development</strong> from UNC Charlotte where I also graduated Magna Cum Laude with a Bachelor of Science in Kinesiology. <br />I offer more than 7 years of exceptional leadership and customer service experience. My peers and coworkers would describe me as reliable, resourceful, and supportive. I show up for my team by being prepared and communicating my ideas and questions clearly.<br />
            As a natural born problem solver and excellent student, I would be a valuable asset to any team that is ready to invite a curious mind with a relentless work ethic.
          </p>
        </section>

      </div>
    </>
  );
}
