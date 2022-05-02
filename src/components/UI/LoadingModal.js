import classes from "./LoadingModal.module.css";

import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop}></div>;
};

const LoadingModalOverlay = (props) => {
  return (
    <div className={classes.loadingModal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const LoadingModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <LoadingModalOverlay>{props.children}</LoadingModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default LoadingModal;
