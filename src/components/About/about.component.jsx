import React from "react";
import { Link } from 'react-router-dom';
import myself from '../../assets/images/cropped-self.jpg';
import "./about.styles.scss";

const myLinkStyle = {
  textDecoration: 'none',
  color: 'var(--lighter-beige',
  fontStyle: 'italic'
}
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
            <strong>Why web development?</strong><hr />
            In 2020, I graduated <strong>Magna Cum Laude</strong> with a <strong>Bachelor of Science in Kinesiology</strong>!<br />
            Having gradutated during a pandemic, there were incredible amounts of instability in the fitness space. This experience shifted my priorities leading to my decision of a  <strong>career switch</strong>! <hr />
            In 2023, I obtained a
            <a href="https://www.credly.com/badges/4e0b9ff6-5598-4d53-974d-54f85174f016/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              style={myLinkStyle}
            >
              <strong> Full Stack Web Developer Certification </strong>
            </a>👩🏻‍💻<br />
            I progressed from <code style={{ color: 'var(--lighter-beige' }}>console.log('hello world');</code> to building full stack web apps with teams of other learning developers!<br />
          </p>
        </section>

        <section className="about-text-container">
          <p className="about-context">
            <strong>Why should you reach out to me? 🤔</strong><hr />
            I am maintaining my skills by deep learning JavaScript and Node, building apps that you can <a href='https://www.github.com/kassrojas' target="_blank" rel="noopener noreferrer" style={myLinkStyle}>check out on my Github</a>. I also challenge myself by using coding platforms like <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" style={myLinkStyle}>HackerRank</a> and <a href='https://leetcode.com/' target="_blank" rel="noopener noreferrer" style={myLinkStyle}>LeetCode</a> to test my problem solving skills. <hr />
            Peers and coworkers would describe me as an oustanding, reliable, and resourceful team player. I thrive on structure and organization, allowing my task oriented nature to lead me to pragmatic solutions. <hr />I am committed to showing up prepared, with a positive attitude, and a curious mind.<hr />
            I would be a valuable asset to any team that is ready to invite a hungry developer with a relentless work ethic. <br /> If you believe so too, <Link to='/kass-portfolio-react/contact' style={myLinkStyle}>reach out!</Link>
          </p>
        </section>

      </div>
    </>
  );
}
