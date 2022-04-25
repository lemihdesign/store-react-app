import classes from "./Header.module.css";
import image3 from "../../assets/logos/usama-akram-kP6knT7tjn4-unsplash.jpg";

const Header = () => {
  return (
    <div className={classes.header}>
      <aside className={classes.left}>
        <div>
          <p className={classes["main-bold"]}>Summer</p>
          <p className={classes["main-normal"]}>
            Collection <span>2022.</span>
          </p>
          {/* <p className={classes["main-bold-year"]}>2022</p> */}
          <p className={classes["collection-description"]}>
            Introducing the new <span>Nike Air Zoom Pegasus 39</span>, bringing
            you the comfort and durability of your famous and loved running
            shoes, plus our latest innovations designed to help you reach a new
            peak of your own.
          </p>
          {/* <button className={classes["shop-now-btn"]}>Shop Now</button> */}
        </div>
      </aside>
      <aside className={classes.right}>
        <div>
          <img src={image3} alt="Slider" />
        </div>
      </aside>
    </div>
  );
};

export default Header;
