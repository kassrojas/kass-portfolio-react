import Navbar from "../NavBar/navbar.component";
import "./header.styles.scss";


const Header = () => {
  const navLabels = [
    {
      "id": 1,
      "label": "Kass Rojas",
      "path": "/kass-portfolio-react/"
    },
    {
      "id": 2,
      "label": "About",
      "path": "about"
    },
    {
      "id": 3,
      "label": "Projects",
      "path": "projects"
    },
    {
      "id": 4,
      "label": "Contact",
      "path": "contact"
    }
  ];
  return (
    <header className="header-container">
      <Navbar navLabels={navLabels} />
    </header>
  )
};

export default Header;