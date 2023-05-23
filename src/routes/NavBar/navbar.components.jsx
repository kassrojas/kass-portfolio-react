import { Outlet, Link } from 'react-router-dom';
import "./navbar.styles.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className='name-container' to='/kassrojas'>
          <h1 className='nav-link'>
            Kassandra Rojas
          </h1>
        </Link>
        <div className="navbar-container">
          <Link className='nav-link' to='about'>
            About
          </Link>
          <Link className='nav-link' to='projects'>
            Projects
          </Link>
          <Link className='nav-link' to='resume'>
            Resume
          </Link>
          <Link className='nav-link' to='contact'>
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Navbar;