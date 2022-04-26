import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.links}>
        <ul>
          <li>OFFER</li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeLink" : "")}
              to="/store/men"
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeLink" : "")}
              to="/store/women"
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeLink" : "")}
              to="/store/child"
            >
              Kids
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>LINKS</li>
          <li>
            <Link to="#">API</Link>
          </li>
          <li>
            <Link to="#">Github</Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>Copyrights &copy; 2022 | lemiszewski.pl</p>
      </div>
    </footer>
  );
};

export default Footer;
