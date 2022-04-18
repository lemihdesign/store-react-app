import MainNavigation from "../Header/MainNavigation";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default Layout;
