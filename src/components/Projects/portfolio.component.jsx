import React from "react";
import ProjectList from "./projects-list.component";
import codeQuiz from "../../assets/images/codequiz.png";
import piggame from "../../assets/images/piggame.png";
import sofaKing from "../../assets/images/sofaKing.png";
import tasteful from "../../assets/images/tasteful.png";
import weatherDashboard from "../../assets/images/weatherDash.png";
import workday from "../../assets/images/workday.png";

export default function Portfolio() {
  const apps = [
    {
      title: "❊ Sofa King Cool ❊",
      body: "This full stack web application allows users to create virtual rooms, add and organize furniture pieces by room, and add custom furniture to the furniture database.",
      technologies: "Node.js, Express.js, Handlebars.js, MySQL, Sequelize ORM, Cloudinary, Bcrypt",
      img: sofaKing,
      deployed: "https://quiet-river-37193.herokuapp.com/",
      gitLink: "https://github.com/kassrojas/sofa-king-cool",
      id: 1,
    },
    {
      title: "❊ Tasteful Choice ❊",
      body: "Uses two server side API's to display meals and drinks that contain a user chosen ingredient",
      technologies: "JavaScript",
      img: tasteful,
      deployed: "https://alandis01.github.io/food-and-bev-project-1/",
      gitLink: "https://github.com/alandis01/food-and-bev-project-1",
      id: 2,
    },
    {
      title: "❊ Pig Game ❊",
      body: "2 player game with polished and responsive UI. User attempts to reach an overall score of 100 points by rolling a dice and holding their scores.",
      technologies: "JavaScript, HTML5, CSS3",
      img: piggame,
      deployed:
        "https://kassrojas.github.io/pig-game/",
      gitLink:
        "https://github.com/kassrojas/pig-game",
      id: 3,
    },
    {
      title: "❊ Coding Quiz ❊",
      body: "Starts a timer, prompts users with questions and a set of answer choices, penalizes users for incorrect answers, moves forward through the quiz upon click, and gives a final score that is saved locally for future reference.",
      technologies: "JavaScript, HTML5",
      img: codeQuiz,
      deployed: "https://kassrojas.github.io/codeQuiz-module4Challenge/",
      gitLink: "https://github.com/kassrojas/codeQuiz-module4Challenge",
      id: 4,
    },
    {
      title: "❊ Weather Dashboard ❊",
      body: "API calls allows for a user to input a city name and returns a 5 day forecast with some details. Searches are saved using local storage so that users can reference or even delete older searches.",
      technologies: "JavaScript, HTML5, CSS3",
      img: weatherDashboard,
      deployed: "https://kassrojas.github.io/weatherDashboard-module06/",
      gitLink: "https://github.com/kassrojas/weatherDashboard-module06",
      id: 5,
    },
    {
      title: "❊ Work Day Scheduler ❊",
      body: "This application allows users to input notes corresponding to a certain time window. The notes can be saved locally and upon refresh, rendered on the page.",
      technologies: "JavaScript, HTML5",
      img: workday,
      deployed: "https://kassrojas.github.io/scheduler-module5-challenge/",
      gitLink: "https://github.com/kassrojas/scheduler-module5-challenge",
      id: 6,
    },
  ];
  return (
    <div className="m-2 min-vh-100">
      <ProjectList apps={apps} heading="Projects" />
    </div>
  );
}
