import { Link } from "react-router-dom";
import Navbar from "../../routes/NavBar/navbar.components";
import "./header.styles.scss";


const Header = () => {
  const navLabels = [
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
      "label": "Resume",
      "path": "resume"
    },
    {
      "id": 5,
      "label": "Contact",
      "path": "contact"
    }
  ];
  return (
    <header className="header-container">
      <Link
        className="header-name"
        to='/kass-portfolio-react'>
        Kass Rojas
      </Link>
      <Navbar navLabels={navLabels} />
    </header>
  )
};

export default Header;