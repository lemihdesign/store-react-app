import { useState } from "react";
import classes from "./TopBar.module.css";

const TopBar = () => {
  const [fixed, setFixed] = useState(false);

  const changeBarPositionHandler = () => {
    if (window.scrollY >= 230) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBarPositionHandler);

  return (
    <div className={fixed ? classes["bar-disabled"] : classes["bar"]}>
      <ul>
        <li>Help</li>
        <li>Sign Up</li>
        <li>Sign in</li>
      </ul>
    </div>
  );
};

export default TopBar;
