import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MobileNavBar from './mobileNavBar.component';
import DesktopNavBar from './desktopNavBar.component';
import "./navbar.styles.scss";

const Navbar = ({ navLabels }) => {
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
        window.matchMedia("(max-width: 768px)").matches ?
          <MobileNavBar tabComponents={navLabels} /> :
          <DesktopNavBar tabComponents={navLabels} />
      }
      <Outlet />
    </>
  )
};


export default Navbar;