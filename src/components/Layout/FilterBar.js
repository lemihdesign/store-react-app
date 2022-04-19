import { useSelector, useDispatch } from "react-redux";
import classes from "./FilterBar.module.css";
import { priceActions } from "../../store/price-slice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const priceValue = useSelector((state) => state.price.priceValue);
  // const [priceValue, setPriceValue] = useState(0);

  const changePriceHandler = (e) => {
    dispatch(priceActions.changePrice(e.target.value));
  };

  return (
    <div className={classes["filter-bar"]}>
      <div className={classes["filter-bar-container"]}>
        <div className={classes["filter-bar-item"]}>
          <label htmlFor="brand">Brand: </label>
          <select name="brand" id="brand">
            <option value="adidas">adidas</option>
            <option value="Asics">ASICS</option>
            <option value="Converse">Converse</option>
            <option value="Jordan">Jordan</option>
            <option value="New Balance">New Balance</option>
            <option value="Nike">Nike</option>
            <option value="Reebok">Reebok</option>
            <option value="Under Armour">Under Armour</option>
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
            min="0"
            max="800"
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
