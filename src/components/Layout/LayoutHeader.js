import classes from "./LayoutHeader.module.css";

const LayoutHeader = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default LayoutHeader;
