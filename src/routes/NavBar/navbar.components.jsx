import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MobileNavBar from './mobileNavBar.components';
import DesktopNavBar from './desktopNavBar.components';
import "./navbar.styles.scss";

const Navbar = () => {
  const tabComponents = [
    {
      "id": 1,
      "label": "Kass Rojas",
      "path": "/kass-portfolio-react"
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
      "label": "Resume",
      "path": "resume"
    },
    {
      "id": 5,
      "label": "Contact",
      "path": "contact"
    }
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  return (
    <>
      {
        window.matchMedia("(max-width: 700px)").matches ?
          <MobileNavBar tabComponents={tabComponents} /> :
          <DesktopNavBar tabComponents={tabComponents} />
      }
      <Outlet />
    </>
  )
};


export default Navbar;