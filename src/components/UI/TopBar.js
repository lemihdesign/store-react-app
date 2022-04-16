import classes from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={classes.bar}>
      <ul>
        <li>Help</li>
        <li>Sign Up</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};

export default TopBar;
