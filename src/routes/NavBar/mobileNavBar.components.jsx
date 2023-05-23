import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobileNavBar = ({ tabComponents }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className={`nav-bar ${openMenu ? 'open' : ''}`}>
      <p className='icon' onClick={toggleMenu}><FaBars /></p>
      {openMenu && (
        <div className="nav-links-container">
          {tabComponents.map((t) => (
            <Link className='nav-link' to={t.path} key={t.id}>
              {t.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
};

export default MobileNavBar;