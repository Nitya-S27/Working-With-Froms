import { useState } from "react";

const useInput = (validateValue, value) => {
  const [enteredValue, setEnteredValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue.);
  const hasError = !valueIsValid && valueIsTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandle = () => {
    setValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandle,
    reset,
  };
};

export default useInput;
