import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducerFunc = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return { value: action.val, isTouched: state.isTouched };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "INPUT_RESET") {
    return { value: "", isTouched: false };
  }
  return {
    value: "",
    isTouched: false,
  };
};

const useInput = (validateValue) => {
  const [inputState, inputDispatch] = useReducer(
    inputStateReducerFunc,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    inputDispatch({ type: "INPUT_CHANGE", val: event.target.value });
  };

  const valueBlurHandle = () => {
    inputDispatch({ type: "INPUT_BLUR" });
  };

  const reset = () => {
    inputDispatch({ type: "INPUT_RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandle,
    reset,
  };
};

export default useInput;
