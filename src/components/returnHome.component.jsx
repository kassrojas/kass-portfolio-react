import { Link } from "react-router-dom";
import "./return-home.styles.scss";

const ReturnHome = () => {
  return (
    <>
      <div className="return-home-container">
        <Link className="return-home-link" to='kass-portfolio-react/'>
          🙈 OOPS! 🙊<br />This path does not exist <br /> Please visit the HOMEPAGE
        </Link>
      </div>
    </>
  )
};

export default ReturnHome;