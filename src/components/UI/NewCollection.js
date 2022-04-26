import classes from "./NewCollection.module.css";

import image1 from "../../assets/logos/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg";
import image2 from "../../assets/logos/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg";
import image3 from "../../assets/logos/giorgio-trovato-LV_4qM5Gf9c-unsplash.jpg";
import image4 from "../../assets/logos/usama-akram-s-gYAbQToXk-unsplash.jpg";

const NewCollection = () => {
  return (
    <div className={classes.collections}>
      <h1>
        Check <span>The Latest</span> Collection
      </h1>
      <p>
        Our latest collection is aimed at people who value comfort and style.
        Each product is tailored to provide the best experiences during everyday
        use.
      </p>
      <div className={classes["collections-container"]}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
    </div>
  );
};

export default NewCollection;
