import adidasLogo from "../../assets/logos/adidasLogo.jpg";
import nikeLogo from "../../assets/logos/nikeLogo.jpg";
import newBalanceLogo from "../../assets/logos/newBalanceLogo.jpg";
import vansLogo from "../../assets/logos/vansLogo.jpg";
import jordanLogo from "../../assets/logos/jordanLogo.jpg";
import converseLogo from "../../assets/logos/converseLogo.jpg";

import classes from "./Brands.module.css";

const Brands = () => {
  return (
    <div className={classes["brands-section"]}>
      <p className={classes["brands-header"]}>
        Top Brands at Attractive Prices
      </p>
      <div className={classes["brands-images"]}>
        <img src={adidasLogo} alt="" />
        <img src={nikeLogo} alt="" />
        <img src={newBalanceLogo} alt="" />
        <img src={vansLogo} alt="" />
        <img src={jordanLogo} alt="" />
        <img src={converseLogo} alt="" />
      </div>
    </div>
  );
};

export default Brands;
