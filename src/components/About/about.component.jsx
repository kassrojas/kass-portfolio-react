import React from "react";
import myself from '../../assets/images/cropped-self.jpg';
import { FaBookReader } from "react-icons/fa";
import { GiWeightLiftingUp, GiCook, GiPlantRoots } from "react-icons/gi";
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
            Hi! 👋🏼 Nice of you to visit!<br /> I'm <strong>Kass</strong> 😝
          </p>
        </section>
        <section className="about-text-container">
          <p className="about-context">
            I'm a Full Stack Web Developer striving to create seamless web applications that exceed client expectations.
            <hr />
            As an natural problem solver with a constant awareness for organization, I feel most fulfilled when I am growing and learning.
            <hr />
            I bring a strong understanding of the complete Software Development Life Cycle as well as an adaptable, relentless, and positive attitude.
          </p>
        </section>
        <section className="about-text-container">
          <p className="about-context">In my free time I like to
            <ul>
              <li><FaBookReader /> READ</li>
              <li>LIFT <GiWeightLiftingUp /></li>
              <li><GiCook /> COOK</li>
              <li>WATER MY PLANTS <GiPlantRoots /></li>
            </ul>
          </p>
        </section>
      </div>
    </>
  );
}
