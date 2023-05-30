import { NavLink } from "react-router-dom";

const DesktopNavBar = ({ tabComponents }) => {
  return (
    <div className="nav-bar">
      <div className="nav-links-container">
        {tabComponents.map((t) => (
          <NavLink
            key={t.id}
            to={t.path}
            className='nav-link'
            style={({ isActive }) => ({
              color: isActive ? 'var(--baby-blue)' : '',
              fontWeight: isActive ? '700' : '',
              backgroundColor: isActive ? 'var(--solid-blue)' : '',
            })}
          >
            {t.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
};

export default DesktopNavBar;