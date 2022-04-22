import { useSelector, useDispatch } from "react-redux";
import classes from "./FilterBar.module.css";
import { priceActions } from "../../store/price-slice";
import { brandActions } from "../../store/brand-slice";
import { useParams } from "react-router-dom";

const FilterBar = (props) => {
  const params = useParams();
  const productsType = params.type;
  const dispatch = useDispatch();
  const priceValue = useSelector((state) => state.price.priceValue);
  const brandValue = useSelector((state) => state.brand.brand);

  const changePriceHandler = (e) => {
    dispatch(priceActions.changePrice(e.target.value));
  };

  const changeBrandHandler = (e) => {
    dispatch(brandActions.changeBrand(e.target.value));
  };

  const minPriceForFilter = Math.min(...props.prices);

  const brandOptions = props.brands;
  const uniqueBrandOptions = [...new Set(brandOptions)].map((brand) => (
    <option value={brand}>{brand}</option>
  ));

  return (
    <div className={classes["filter-bar"]}>
      <div className={classes["filter-bar-container"]}>
        <div className={classes["filter-bar-item"]}>
          <label htmlFor="brand">Brand: </label>
          <select
            name="brand"
            id="brand"
            value={brandValue}
            onChange={changeBrandHandler}
          >
            {uniqueBrandOptions}
          </select>
        </div>
        <div className={classes["filter-bar-item"]}>
          <label htmlFor="filter-price">
            Shop by Price: <span>${priceValue}</span>{" "}
          </label>
          <input
            type="range"
            name="filter-price"
            id="filter-price"
            min={minPriceForFilter}
            max="3000"
            step="1"
            value={priceValue}
            onChange={changePriceHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
