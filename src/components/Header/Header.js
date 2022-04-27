import classes from "./Header.module.css";
import headerImg from "../../assets/images/headerShoe.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <aside className={classes.left}>
        <h1>
          <span>NIKE AIR</span>
          <span>ZOOM SUPER</span>
          <span>REP CORAL</span>
        </h1>
        <button>
          shop now <i className="fa-solid fa-angle-right"></i>
        </button>
      </aside>

      <aside className={classes.right}>
        <h1>AIR</h1>
        <img src={headerImg} alt="headerImg" />
      </aside>
    </div>
  );
};

export default Header;
