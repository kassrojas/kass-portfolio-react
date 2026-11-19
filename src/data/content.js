import forkify from "../assets/images/forkify.png";
import hackerNews from "../assets/images/hacker_news_webscrap.gif";
import piggame from "../assets/images/piggame.png";
import jsInterview from "../assets/images/jsinterview.png";
import sofaKing from "../assets/images/sofaKing.png";

export const profile = {
  name: "Kassandra Rojas Lazette",
  role: "Frontend Developer",
  location: "Charlotte, NC",
  email: "kassandra.lazette@gmail.com",
  linkedin: "https://www.linkedin.com/in/ikassandrarojas/",
  github: "https://github.com/kassrojas",
  tagline:
    "I build accessible, responsive websites and user-first interfaces — and I use AI-assisted workflows to ship them faster without cutting corners.",
};

export const about = [
  "I'm a frontend developer who cares about the details people actually feel: fast pages, clear interfaces, and sites that work for everyone, including keyboard and screen reader users.",
  "Today I build venue websites at AXS (Carbonhouse) for arenas, stadiums, and performing arts centers across the country, taking projects from kickoff to launch alongside designers and clients. Before that I built data-heavy React interfaces at Onward Platforms that visualized cloud infrastructure in real time.",
  "I lean on AI-assisted tooling like Claude Code and MCPs to speed up delivery, tighten code quality, and improve how I verify work. That's taken my full-site delivery time from about six weeks to under two.",
];

export const hobbies = ["Hanging out with my dog, Kiwi", "Lifting", "Cooking", "Practicing yoga"];

export const stats = [
  { value: "~70%", label: "faster full-site delivery with AI-assisted workflows" },
  { value: "10+", label: "live venue websites shipped at AXS" },
  { value: "WCAG 2.1 AA", label: "accessibility standard on every page" },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "AXS (Carbonhouse)",
    dates: "May 2025 – Present",
    points: [
      "Develop responsive websites and front-end components with HTML, CSS/SCSS, JavaScript, and PHP.",
      "Ensure every page meets WCAG 2.1 AA: semantic HTML, color contrast, keyboard navigation, and screen reader support.",
      "Partner with designers and clients from kickoff to launch, and support existing clients with new products and upgrades.",
      "Cut full-site delivery time by about 70%, from 6–8 weeks to 2 weeks per project, using AI-assisted workflows.",
      "Automated the developer docs into the company's starter projects using Yeoman.",
      "Implement content in CMS applications and debug front-end CSS and JavaScript issues.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Onward Platforms",
    dates: "Feb 2024 – Feb 2025",
    points: [
      "Built interactive UI components with ReactFlow and Remix to visualize cloud infrastructure configurations in real time.",
      "Boosted performance by 25% by optimizing server-side data fetching and load times for large projects.",
      "Refactored Remix and ReactFlow data synchronization, reducing application crashes and improving reliability.",
      "Built a real-time chat feature with PartyKit and implemented CRUD operations with dynamic JSON parsing.",
      "Collaborated with founders, product managers, designers, and backend engineers on user-centered features.",
    ],
  },
  {
    role: "Full Stack Web Developer Certification",
    company: "UNC Charlotte",
    dates: "Nov 2022 – Mar 2023",
    points: [
      "Built full-stack MERN applications in teams, including a virtual home management app backed by SQL.",
      "Created an interactive Chart.js visualization of quiz results by category.",
      "Applied lazy loading and code splitting to improve speed and responsiveness.",
    ],
  },
];

export const deliveryNote =
  "These sites shipped on a roughly six-week timeline, with KeyBank Center done in three. My newest builds, not yet live while clients finalize content, have taken under two weeks thanks to AI-assisted workflows and custom skills.";

export const work = [
  {
    title: "M&T Bank Stadium",
    place: "Baltimore, MD",
    url: "https://www.mandtbankstadium.com/",
    description:
      "Home of the Baltimore Ravens and a major destination for concerts and events.",
    highlights: ["Lazy loading on the events page for faster loads"],
  },
  {
    title: "Acrisure Arena",
    place: "Greater Palm Springs, CA",
    url: "https://www.acrisurearena.com/",
    description:
      "Home of the Coachella Valley Firebirds and Coachella Valley Lakers.",
    highlights: ["Dynamic background image changes throughout the site"],
  },
  {
    title: "Rams Head On Stage",
    place: "Annapolis, MD",
    url: "https://www.ramsheadonstage.com/",
    description: "An intimate concert venue and restaurant.",
    highlights: ["Events pulled from an API and displayed automatically based on client-defined rules"],
  },
  {
    title: "KeyBank Center",
    place: "Buffalo, NY",
    url: "https://www.keybankcenter.com/",
    description: "Home of the Buffalo Sabres and Buffalo Bandits.",
    highlights: ["Delivered in 3 weeks, about half the standard timeline"],
  },
  {
    title: "Oxford Performing Arts Center",
    place: "Oxford, AL",
    url: "https://www.opac.org/",
    description: "Broadway tours, legendary artists, and rising stars.",
    highlights: ["Built from design to launch with accessible, CMS-managed content"],
  },
  {
    title: "Stage Red Fontana",
    place: "Fontana, CA",
    url: "https://www.stageredfontana.com/",
    description: "A live music and entertainment venue.",
    highlights: ["Built from design to launch with accessible, CMS-managed content"],
  },
];

export const projects = [
  {
    title: "Forkify Recipes",
    body: "Search recipes by ingredient, add your own, and bookmark favorites that persist between visits.",
    technologies: ["JavaScript", "Sass", "Parcel", "Babel", "Forkify API"],
    img: forkify,
    deployed: "https://forkify-kass.netlify.app/",
    gitLink: "https://github.com/kassrojas/forkify-recipe-search",
  },
  {
    title: "Sofa King Cool",
    body: "Full-stack app for creating virtual rooms, organizing furniture by room, and adding custom pieces to a shared database.",
    technologies: ["Node.js", "Express", "Handlebars", "MySQL", "Sequelize"],
    img: sofaKing,
    deployed: "https://quiet-river-37193.herokuapp.com/",
    gitLink: "https://github.com/kassrojas/sofa-king-cool",
  },
  {
    title: "Hacker News Scraper",
    body: "Python script that collects and curates articles from Hacker News based on how many votes each one receives.",
    technologies: ["Python"],
    img: hackerNews,
    deployed: null,
    gitLink: "https://github.com/kassrojas/hacker_rank_web_scraping",
  },
  {
    title: "Pig Game",
    body: "Two-player dice game with a polished, responsive UI: roll, hold, and race to 100 points.",
    technologies: ["JavaScript", "HTML", "CSS"],
    img: piggame,
    deployed: "https://kassrojas.github.io/pig-game/",
    gitLink: "https://github.com/kassrojas/pig-game",
  },
  {
    title: "JS Interview Cards",
    body: "Flashcard app for adding questions and quizzing yourself on JavaScript concepts.",
    technologies: ["JavaScript", "Express", "Node.js"],
    img: jsInterview,
    deployed: null,
    gitLink: "https://github.com/kassrojas/practicing-express-js",
  },
];

export const skills = [
  { group: "Languages & Frameworks", items: ["JavaScript (ES6+)", "TypeScript", "React", "Remix", "PHP", "SQL", "HTML", "CSS / SCSS"] },
  { group: "Accessibility & Performance", items: ["WCAG 2.1 AA", "Semantic HTML", "Lazy Loading", "Code Splitting", "Image Optimization", "Caching"] },
  { group: "Tools", items: ["Claude Code", "MCPs", "Figma", "shadcn/ui", "PartyKit", "Node.js", "Yeoman", "Git & GitHub", "Bun", "npm"] },
  { group: "Ways of Working", items: ["Agile / Scrum", "User-Centered Design", "Unit Testing", "Continuous Integration", "Functional Programming", "OOP"] },
];
