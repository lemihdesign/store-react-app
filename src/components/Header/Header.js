import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>
        <span>New</span>
        <span>Summer</span>
        <span>Collection</span>
        <span>2022.</span>
      </h1>
    </div>
  );
};

export default Header;
