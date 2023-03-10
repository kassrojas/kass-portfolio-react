import React, { useState } from "react";
import ProjectList from "../ProjectList";
import codeQuiz from "../../assets/images/codequiz.png";
import passwordGenerator from "../../assets/images/password.png";
import sofaKing from "../../assets/images/sofaKing.png";
import weatherDashboard from "../../assets/images/weatherDash.png";
import tasteful from "../../assets/images/tasteful.png";
import workday from "../../assets/images/workday.png";

export default function Portfolio() {
  const [apps, setApps] = useState(
    [
      {
        title: "❊ Sofa King Cool ❊",
        body: "Uses a database and API routes. Provides a user with a clean UI that allows for creation, deletion, and updating of rooms and furniture provided via the furniture database. Functionality to add custom furniture with an uploaded image is the one of the many highlights of this application.",
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
        title: "❊ Coding Quiz ❊",
        body: "Starts a timer, prompts users with questions and a set of answer choices, penalizes users for incorrect answers, moves forward through the quiz upon click, and gives a final score that is saved locally for future reference.",
        technologies: "JavaScript, HTML5",
        img: codeQuiz,
        deployed: "https://kassrojas.github.io/codeQuiz-module4Challenge/",
        gitLink: "https://github.com/kassrojas/codeQuiz-module4Challenge",
        id: 3,
      },
      {
        title: "❊ Password Generator ❊",
        body: "Uses prompts to intake user choices for a randomly generated password.",
        technologies: "JavaScript, HTML5, CSS3",
        img: passwordGenerator,
        deployed:
          "https://kassrojas.github.io/passwordGenerator-module-3-challenge/",
        gitLink:
          "https://github.com/kassrojas/passwordGenerator-module-3-challenge",
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
    ],
    []
  );
  return (
    <div className="m-2 min-vh-100">
      <h1 className="text-center p-2"> Portfolio </h1>
      <ProjectList apps={apps} heading="Projects" />
    </div>
  );
}
