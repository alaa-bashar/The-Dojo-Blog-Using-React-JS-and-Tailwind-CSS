import { Link } from "react-router-dom/";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="dark-light-text">Sorry</h2>
      <p className="dark-light-text">That page cannot be found</p>
      <Link to="/" className="dark-light-text">
        Back to the homepage...
      </Link>
    </div>
  );
};

export default NotFound;
