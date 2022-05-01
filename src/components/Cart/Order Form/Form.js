import { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className={classes["form-container"]}>
      <p>Submit Your Order</p>
      <form>
        <div className={classes["input-group"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" id="firstname" />
          </div>
          <div className={classes["input-item"]}>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" />
          </div>
        </div>
        <div className={classes["input-group"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className={classes["mobile-input-group"]}>
            <div className={classes["input-item"]}>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" className={classes.address} />
            </div>
            <div className={classes["input-item"]}>
              <label htmlFor="postal-code">ZIP-Code</label>
              <input
                type="text"
                id="postal-code"
                className={classes["zip-code"]}
              />
            </div>
          </div>
        </div>
        <div className={classes["input-group"]}>
          <div className={classes["input-item"]}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" />
          </div>
          <div className={classes["input-item"]}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
