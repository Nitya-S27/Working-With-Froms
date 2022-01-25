import { useState } from "react";

const SimpleInput = (props) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameIsValid = input.name.trim().length !== 0;
  const emailIsValid =
    input.email.includes("@") &&
    input.email.includes(".") &&
    input.email.trim().length !== 0;

  const nameInputIsInvalid = !nameIsValid && nameInputTouched;
  const emailInputIsInvalid = !emailIsValid && emailInputTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setInput((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };

  const emailChangeHandler = (event) => {
    setInput((prev) => {
      return {
        ...prev,
        email: event.target.value,
      };
    });
  };

  const nameInputBlurHandler = () => {
    setNameInputTouched(true);
  };

  const emailBlurHandler = () => {
    setEmailInputTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!nameIsValid && !emailIsValid) {
      return;
    }
    console.log(input);
    setInput({ name: "", email: "" });
    setNameInputTouched(false);
    setEmailInputTouched(false);
  };

  const inputClasses =
    nameInputIsInvalid && emailInputIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={input.name}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          autoComplete="off"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Entered name must be a valid string!</p>
        )}
      </div>
      <div className={inputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={input.email}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          autoComplete="off"
        />
        {emailInputIsInvalid && (
          <p className="error-text">
            Entered email must be in a required fromat!
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
