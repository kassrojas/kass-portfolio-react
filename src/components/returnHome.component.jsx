import { Link } from "react-router-dom";

const ReturnHome = () => {
  return (
    <>
      <div className="return-home-container">
        <Link className="return-home-link" to='/'>
          This path does not exist. <br />
          Please visit the homepage
        </Link>
      </div>
    </>
  )
};

export default ReturnHome;