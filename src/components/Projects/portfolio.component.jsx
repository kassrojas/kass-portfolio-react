import React from "react";
import ProjectList from "./projects-list.component";
import piggame from "../../assets/images/piggame.png";
import sofaKing from "../../assets/images/sofaKing.png";
import mapty from "../../assets/images/mapty.png";
import weatherDashboard from "../../assets/images/weatherDash.png";
import forkify from "../../assets/images/forkify.png";
import porfolio from "../../assets/images/portfolio-screenshot.png";

export default function Portfolio() {
  const apps = [
    {
      title: "Portfolio",
      body: "The current application you are using leverages React.js to render information about my work, myself, and ways to contact me. This application uses React Router v6 for quick navigation and boasts a clean and mobile response UI.",
      technologies: "React.js, Sass, bootstrap",
      img: porfolio,
      deployed: "https://kassrojas.github.io/kass-portfolio-react/",
      gitLink: "https://github.com/kassrojas/kass-portfolio-react",
      id: 4,
    },
    {
      title: "Forkify 🍽️ Recipes",
      body: "Forkify uses Forkify API to search through recipes via ingredient query. Users can add custom recipes and bookmark recipes for convenient access when leaving and returning to the app.",
      technologies: "JavaScript, HTML5, Sass, Parcel, Babel, ForkifyAPI",
      img: forkify,
      deployed: "https://forkify-kass.netlify.app/",
      gitLink: "https://github.com/kassrojas/forkify-recipe-search",
      id: 6,
    },
    {
      title: "Pig 🐷 Game",
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
      title: "Mapty 📍",
      body: "Uses geolocation API to easily log cycling and running workouts.",
      technologies: "JavaScript, Leaflet.js",
      img: mapty,
      deployed: "https://kassrojas.github.io/mapty/",
      gitLink: "https://github.com/kassrojas/mapty",
      id: 2,
    },
    {
      title: "Sofa King C♔♔l",
      body: "This full stack web application allows users to create virtual rooms, add and organize furniture pieces by room, and add custom furniture to the furniture database.",
      technologies: "Node.js, Express.js, Handlebars.js, MySQL, Sequelize ORM, Cloudinary, Bcrypt",
      img: sofaKing,
      deployed: "https://quiet-river-37193.herokuapp.com/",
      gitLink: "https://github.com/kassrojas/sofa-king-cool",
      id: 1,
    },
    {
      title: "Weather ☀️ Dashboard",
      body: "API calls allows for a user to input a city name and returns a 5 day forecast with some details. Searches are saved using local storage so that users can reference or even delete older searches.",
      technologies: "JavaScript, HTML5, CSS3",
      img: weatherDashboard,
      deployed: "https://kassrojas.github.io/weatherDashboard-module06/",
      gitLink: "https://github.com/kassrojas/weatherDashboard-module06",
      id: 5,
    },
  ];
  return (
    <div className="m-2 min-vh-100">
      <ProjectList apps={apps} heading="Projects" />
    </div>
  );
}
