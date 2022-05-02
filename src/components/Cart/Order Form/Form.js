import classes from "./Form.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

import useInput from "../../../hooks/use-input";

const Form = () => {
  const dispatch = useDispatch();

  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameValueChangeHandler,
    blurChangeHandler: nameBlurChangeHandler,
    reset: nameResetHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 2);

  const {
    value: surnameInputValue,
    isValid: surnameInputIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameValueChangeHandler,
    blurChangeHandler: surnameBlurChangeHandler,
    reset: surnameResetHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 2);

  const {
    value: cityInputValue,
    isValid: cityInputIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityValueChangeHandler,
    blurChangeHandler: cityBlurChangeHandler,
    reset: cityResetHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 3);

  const {
    value: addressInputValue,
    isValid: addressInputIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressValueChangeHandler,
    blurChangeHandler: addressBlurChangeHandler,
    reset: addressResetHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 3);

  const {
    value: postalCodeInputValue,
    isValid: postalCodeInputIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeValueChangeHandler,
    blurChangeHandler: postalCodeBlurChangeHandler,
    reset: postalCodeResetHandler,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.trim().length >= 6 && value.trim().length < 7
  );

  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailValueChangeHandler,
    blurChangeHandler: emailBlurChangeHandler,
    reset: emailResetHandler,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  const {
    value: phoneInputValue,
    isValid: phoneInputIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneValueChangeHandler,
    blurChangeHandler: phoneBlurChangeHandler,
    reset: phoneResetHandler,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      value.trim().length >= 9 &&
      value.trim().length < 10
  );

  let formIsValid = false;
  if (
    nameInputIsValid &&
    surnameInputIsValid &&
    cityInputIsValid &&
    addressInputIsValid &&
    postalCodeInputIsValid &&
    emailInputIsValid &&
    phoneInputIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    nameResetHandler();
    surnameResetHandler();
    cityResetHandler();
    addressResetHandler();
    postalCodeResetHandler();
    emailResetHandler();
    phoneResetHandler();

    dispatch(cartActions.changeCompletedOrderState(true));
    dispatch(cartActions.placeOrder(false));
    dispatch(cartActions.showPlaceOrderBtn(true));
  };

  const cancelOrder = () => {
    dispatch(cartActions.placeOrder(false));
    dispatch(cartActions.showPlaceOrderBtn(true));
    dispatch(cartActions.showCart(false));

    nameResetHandler();
    surnameResetHandler();
    cityResetHandler();
    addressResetHandler();
    postalCodeResetHandler();
    emailResetHandler();
    phoneResetHandler();
  };

  const nameInputClasses = nameInputHasError ? "invalid" : "";
  const surnameInputClasses = surnameInputHasError ? "invalid" : "";
  const cityInputClasses = cityInputHasError ? "invalid" : "";
  const addressInputClasses = addressInputHasError
    ? "address-invalid"
    : "address-correct";
  const postalCodeInputClasses = postalCodeInputHasError
    ? "zip-code-invalid"
    : "zip-code-correct";
  const emailInputClasses = emailInputHasError ? "invalid" : "";
  const phoneInputClasses = phoneInputHasError ? "invalid" : "";

  return (
    <div className={classes["form-container"]}>
      <p>Submit Your Order</p>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["input-group"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              value={nameInputValue}
              onChange={nameValueChangeHandler}
              onBlur={nameBlurChangeHandler}
              className={nameInputClasses}
            />
            {nameInputHasError && (
              <p
                style={{
                  color: "crimson",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Please enter a valid first name.
              </p>
            )}
          </div>
          <div className={classes["input-item"]}>
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              value={surnameInputValue}
              onChange={surnameValueChangeHandler}
              onBlur={surnameBlurChangeHandler}
              className={surnameInputClasses}
            />
            {surnameInputHasError && (
              <p
                style={{
                  color: "crimson",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Please enter a valid last name.
              </p>
            )}
          </div>
        </div>
        <div className={classes["input-group"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={cityInputValue}
              onChange={cityValueChangeHandler}
              onBlur={cityBlurChangeHandler}
              className={cityInputClasses}
            />
            {cityInputHasError && (
              <p
                style={{
                  color: "crimson",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Please enter a valid city name.
              </p>
            )}
          </div>
          <div className={classes["mobile-input-group"]}>
            <div className={classes["input-item"]}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className={addressInputClasses}
                value={addressInputValue}
                onChange={addressValueChangeHandler}
                onBlur={addressBlurChangeHandler}
              />
              {addressInputHasError && (
                <p
                  style={{
                    color: "crimson",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Please enter a valid street name.
                </p>
              )}
            </div>
            <div className={classes["input-item"]}>
              <label htmlFor="postal-code">ZIP-Code</label>
              <input
                type="text"
                id="postal-code"
                className={postalCodeInputClasses}
                value={postalCodeInputValue}
                onChange={postalCodeValueChangeHandler}
                onBlur={postalCodeBlurChangeHandler}
              />
              {postalCodeInputHasError && (
                <p
                  style={{
                    color: "crimson",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Please enter a valid postal code (Format: AB-CDE).
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={classes["input-group"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={emailInputValue}
              onChange={emailValueChangeHandler}
              onBlur={emailBlurChangeHandler}
              className={emailInputClasses}
            />
            {emailInputHasError && (
              <p
                style={{
                  color: "crimson",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className={classes["input-item"]}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phoneInputValue}
              onChange={phoneValueChangeHandler}
              onBlur={phoneBlurChangeHandler}
              className={phoneInputClasses}
            />
            {phoneInputHasError && (
              <p
                style={{
                  color: "crimson",
                  fontWeight: "600",
                  fontSize: "13px",
                }}
              >
                Please enter a valid phone number (No area code).
              </p>
            )}
          </div>
        </div>
        <div className={classes["btn-section"]}>
          <button
            disabled={!formIsValid}
            type="submit"
            className={classes["form-btn"]}
          >
            Order
          </button>
          <button className={classes["form-btn"]} onClick={cancelOrder}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
