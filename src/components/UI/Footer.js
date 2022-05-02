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
            <a href="https://lemiszewski.pl" target="_blank">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lemihdesign/store-react-app"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://rapidapi.com/tg4-solutions-tg4-solutions-default/api/v1-sneakers/"
              target="_blank"
            >
              API
            </a>
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
