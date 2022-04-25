import classes from "./NewCollection.module.css";

import image1 from "../../assets/logos/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg";
import image2 from "../../assets/logos/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg";
import image3 from "../../assets/logos/giorgio-trovato-LV_4qM5Gf9c-unsplash.jpg";
import image4 from "../../assets/logos/usama-akram-s-gYAbQToXk-unsplash.jpg";

const NewCollection = () => {
  return (
    <div className={classes.collections}>
      <h1>New Collection</h1>
      <p>
        Find your shoes from our various collections. Here shoes are endless and
        profit is also endless.
      </p>
      <div className={classes["collection-container"]}>
        <img src={image1} alt="shoe" />
        <img src={image2} alt="shoe" />
        <img src={image3} alt="shoe" />
        <img src={image4} alt="shoe" />
      </div>
    </div>
  );
};

export default NewCollection;
