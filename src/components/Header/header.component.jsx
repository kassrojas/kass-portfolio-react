// import Navbar from "../NavBar/navbar.component";
import { FaArrowCircleUp } from 'react-icons/fa';
import "./header.styles.scss";


const Header = () => {
  // const navLabels = [
  //   {
  //     "id": 1,
  //     "label": "Kass Rojas",
  //     "path": "/kass-portfolio-react/"
  //   },
  //   {
  //     "id": 2,
  //     "label": "About",
  //     "path": "about"
  //   },
  //   {
  //     "id": 3,
  //     "label": "Projects",
  //     "path": "projects"
  //   },
  //   {
  //     "id": 4,
  //     "label": "Contact",
  //     "path": "contact"
  //   }
  // ];
  console.log(window)

  return (
    <header className="header-container">
      <h2 className="component-heading">Kassandra Rojas Lazette</h2>
      {/* <Navbar navLabels={navLabels} /> */}
      <FaArrowCircleUp className='fa-arrow' onClick={() => window.scrollTo(0, 0)} />
    </header>
  )
};

export default Header;