import { Link } from "react-router-dom";

const DesktopNavBar = ({ tabComponents }) => {
  return (
    <div className="nav-bar">
      <div className="nav-links-container">
        {tabComponents.map((t) => (
          <Link className='nav-link' to={t.path} key={t.id}>
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  )
};

export default DesktopNavBar;