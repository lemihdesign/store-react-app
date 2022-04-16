import classes from "./Slider.module.css";
import leftArrow from "../../assets/sliderIcons/left-arrow.svg";
import rightArrow from "../../assets/sliderIcons/right-arrow.svg";
const SlideButtons = ({ moveSlide, direction }) => {
  console.log(moveSlide, direction);
  return (
    <button onClick={moveSlide} className={classes["btn-slide next"]}>
      <img src={rightArrow} alt="Right Arrow" />
    </button>
  );
};

export default SlideButtons;
