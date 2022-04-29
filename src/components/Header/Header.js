import classes from "./Header.module.css";

import { Link } from "react-router-dom";

import headerImg from "../../assets/images/headerShoe.png";
import LayoutHeader from "../Layout/LayoutHeader";

const Header = () => {
  return (
    <div className={classes.header}>
      <LayoutHeader>
        <aside className={classes.left}>
          <div className={classes["left-container"]}>
            <h1>
              <span>NIKE AIR</span>
              <span>ZOOM SUPER</span>
              <span>REP CORAL</span>
            </h1>
            <Link to="/store/men">
              <button>
                shop now <i className="fa-solid fa-angle-right"></i>
              </button>
            </Link>
          </div>
        </aside>

        <aside className={classes.right}>
          <h1>AIR</h1>
          <img src={headerImg} alt="headerImg" />
        </aside>
      </LayoutHeader>
    </div>
  );
};

export default Header;
