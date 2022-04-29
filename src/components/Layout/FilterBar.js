import classes from "./FilterBar.module.css";

import { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { priceActions } from "../../store/price-slice";
import { filterActions } from "../../store/filter-slice";

const FilterBar = (props) => {
  const [fixed, setFixed] = useState(false);
  const [isOptionShown, setIsOptionShown] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const priceValue = useSelector((state) => state.price.priceValue);
  const brandValue = useSelector((state) => state.filter.brand);
  const genderValue = useSelector((state) => state.filter.gender);

  const changePriceHandler = (e) => {
    dispatch(priceActions.changePrice(e.target.value));
  };

  const changeBrandHandler = (e) => {
    dispatch(filterActions.changeBrand(e.target.value));
  };

  const changeSiteHandler = (value) => {
    history(`/store/${value}`);
    dispatch(filterActions.changeGender(value));
  };

  const changeBarPositionHandler = () => {
    if (window.scrollY >= 230) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeBarPositionHandler);

  const showSortOptionsHandler = () => {
    setIsOptionShown(!isOptionShown);
  };

  const minPriceForFilter = Math.min(...props.prices);

  const brandOptions = props.brands;
  const uniqueBrandOptions = [...new Set(brandOptions)].map((brand) => (
    <option value={brand}>{brand}</option>
  ));

  const genderOptions = props.genders;
  const filteredUniqueGendersOptions = genderOptions.filter(
    (option) =>
      option !== "preschool" && option !== "unisex" && option !== "toddler"
  );
  const uniqueGendersOptions = [...new Set(filteredUniqueGendersOptions)].map(
    (gender) => (
      <option className={classes["option-value"]} value={gender}>
        {gender.charAt(0).toUpperCase() + gender.slice(1)}
      </option>
    )
  );

  return (
    <Fragment>
      <div className={classes["control-bar"]}>
        <p>{props.numberOfResults} results</p>
        <button onClick={showSortOptionsHandler}>
          Filters <i className="fa-solid fa-sliders"></i>
        </button>
      </div>
      <div
        className={
          isOptionShown ? classes["filter-bar-active"] : classes["filter-bar"]
        }
      >
        <div className={classes["filter-bar-container"]}>
          <div className={classes["filter-bar-item"]}>
            <select
              name="gender"
              id="gender"
              value={genderValue}
              onChange={(e) => changeSiteHandler(e.target.value)}
            >
              <optgroup label="Filter by Gender">
                {uniqueGendersOptions}
              </optgroup>
            </select>
          </div>
          <div className={classes["filter-bar-item"]}>
            <select
              name="brand"
              id="brand"
              value={brandValue}
              onChange={changeBrandHandler}
            >
              <optgroup label="Filter by Brand">{uniqueBrandOptions}</optgroup>
            </select>
          </div>
          <div className={classes["filter-bar-item"]}>
            <select
              name="color"
              id="color"
              value={genderValue}
              onChange={(e) => changeSiteHandler(e.target.value)}
            >
              <optgroup label="Filter by Color">
                {uniqueGendersOptions}
              </optgroup>
            </select>
          </div>
          <div className={classes["filter-bar-item"]}>
            <div className={classes.range}>
              <div className={classes["range-value"]}>
                <span>{priceValue}</span>
              </div>
              <div className={classes.field}>
                <div className={classes["value-left"]}>{minPriceForFilter}</div>
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
                <div className={classes["value-right"]}>3000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterBar;
