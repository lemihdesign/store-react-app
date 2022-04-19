import classes from "./Header.module.css";
import image3 from "../../assets/images/slider3.jpg";

const Header = () => {
  return (
    <div className={classes.header}>
      <aside className={classes.left}>
        <div>
          <p className={classes["main-bold"]}>Summer</p>
          <p className={classes["main-normal"]}>Collection</p>
          <p className={classes["main-bold-year"]}>2022.</p>
          <p className={classes["collection-description"]}>
            Introducing the new Nike Air Zoom Pegasus 39, bringing you the
            comfort and durability of your famous and loved running shoes, plus
            our latest innovations designed to help you reach a new peak of your
            own.
          </p>
          <button className={classes["shop-now-btn"]}>Shop Now</button>
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
