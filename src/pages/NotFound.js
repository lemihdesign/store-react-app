import classes from "./NotFound.module.css";

import { Link } from "react-router-dom";

import image from "../assets/icons/website-maintenance.svg";

const NotFound = () => {
  return (
    <div className={classes["not-found-container"]}>
      <img src={image} alt="notFoundImage" />
      <p>
        <span>404</span> Page Not Found.
      </p>
      <button>
        <Link to="/">Go to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFound;
