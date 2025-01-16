import React from "react";
import myself from '../../assets/images/cropped-self.jpg';
import { FaBookReader } from "react-icons/fa";
import { GiWeightLiftingUp, GiCook, GiPlantRoots } from "react-icons/gi";

const About = () => {
  return (
    <section className="about-container py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
      <hr className="border-gray-700 mb-6" />

      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src={myself} alt="me" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        {/* Text */}
        <div className="md:w-2/3 md:pl-8">
          <p className="about-context mb-4">
            Hi! 👋🏼 Nice of you to visit!<br /> I'm <strong>Kass</strong> 😝
          </p>
          <p className="about-context mb-4">
            I'm a Full Stack Web Developer striving to create seamless web applications that exceed client expectations.
            <br />
            As a natural problem solver with a constant awareness for organization, I feel most fulfilled when I am growing and learning.
            <br />
            I bring a strong understanding of the complete Software Development Life Cycle as well as an adaptable, relentless, and positive attitude.
          </p>
          <p className="about-context">
            In my free time I like to:
            <ul className="list-disc list-inside mt-2">
              <li><FaBookReader className="inline-block mr-2" />READ</li>
              <li>LIFT <GiWeightLiftingUp className="inline-block ml-2" /></li>
              <li><GiCook className="inline-block mr-2" />COOK</li>
              <li>WATER MY PLANTS <GiPlantRoots className="inline-block ml-2" /></li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
