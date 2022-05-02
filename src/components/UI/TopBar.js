import classes from "./TopBar.module.css";

const TopBar = (props) => {
  return (
    <div className={classes["bar"]}>
      <ul key={props.id}>
        <li>Help</li>
        <li>Sign Up</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};

export default TopBar;
