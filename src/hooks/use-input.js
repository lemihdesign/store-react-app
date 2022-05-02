import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialInputState;
};

const useInput = (validateFunction) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const blurChangeHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const isEnteredInputValid = validateFunction(inputState.value);
  const hasError = !isEnteredInputValid && inputState.isTouched;

  return {
    value: inputState.value,
    hasError,
    isValid: isEnteredInputValid,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInput;
