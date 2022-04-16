import MainNavigation from "../Header/MainNavigation";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.wrapper}>
      <MainNavigation />
      {props.children}
    </div>
  );
};

export default Layout;
