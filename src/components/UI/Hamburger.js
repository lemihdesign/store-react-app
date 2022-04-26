import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  const { activeMenu, onClick } = props;
  return (
    <button className={classes.hamburger} onClick={onClick}>
      <div className={classes["hamburger-container"]}>
        <span
          className={
            activeMenu
              ? classes["hamburger-inner--active"]
              : classes["hamburger-inner"]
          }
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
