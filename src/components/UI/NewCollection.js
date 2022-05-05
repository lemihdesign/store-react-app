import classes from "./NewCollection.module.css";

import image1 from "../../assets/logos/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg";
import image2 from "../../assets/logos/ryan-plomp-jvoZ-Aux9aw-unsplash.jpg";
import image3 from "../../assets/logos/giorgio-trovato-LV_4qM5Gf9c-unsplash.jpg";
import image4 from "../../assets/logos/usama-akram-s-gYAbQToXk-unsplash.jpg";

import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <div className={classes.collections}>
      <Layout>
        <h1>Latest Collection</h1>
        <div className={classes["collections-container"]}>
          <Link to="/store/men">
            <img src={image1} alt="Shoe" />
          </Link>
          <Link to="/store/women">
            <img src={image2} alt="Shoe" />
          </Link>
          <Link to="/store/men">
            <img src={image3} alt="Shoe" />
          </Link>
          <Link to="/store/child">
            <img src={image4} alt="Shoe" />
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default NewCollection;
