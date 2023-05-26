import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobileNavBar = ({ tabComponents }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className='fixed-top'>
        <Link className='mobile-nav-title' to='/kass-portfolio-react'>
          Kass Rojas
        </Link>
        <i className='icon' onClick={toggleMenu}><FaBars /></i>
      </div>
      <div className={`nav-bar ${openMenu ? 'open fixed-top' : ''} `}>
        {openMenu && (
          <>
            <i className='icon' onClick={closeMenu}><FaBars /></i>
            <div className="nav-links-container">
              {tabComponents.map((t) => (
                <Link className='nav-link' to={t.path} key={t.id} onClick={closeMenu} >
                  {t.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
};

export default MobileNavBar;