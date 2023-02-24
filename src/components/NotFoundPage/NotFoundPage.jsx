import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <h1>Oops! This page does not exist.</h1>
      <p>Sorry, the page you were looking for could not be found.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};
export default NotFoundPage;
