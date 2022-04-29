import classes from "./FilterBar.module.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { priceActions } from "../../store/price-slice";
import { filterActions } from "../../store/filter-slice";

const FilterBar = (props) => {
  const [fixed, setFixed] = useState(false);
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
    <div
      className={fixed ? classes["filter-bar-fixed"] : classes["filter-bar"]}
    >
      <div className={classes["filter-bar-container"]}>
        <div className={classes["filter-bar-item"]}>
          <select
            name="gender"
            id="gender"
            value={genderValue}
            onChange={(e) => changeSiteHandler(e.target.value)}
          >
            <optgroup label="Filter by Gender">{uniqueGendersOptions}</optgroup>
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
          <label htmlFor="filter-price">
            <span>${priceValue}</span>{" "}
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
