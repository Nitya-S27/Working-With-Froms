import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandle: nameBlurHandler,
    reset: nameResetHandler,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandle: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput(
    (value) =>
      value.includes("@") && value.includes(".") && value.trim().length !== 0
  );

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid && !emailIsValid) {
      return;
    }
    console.log(name, email);
    nameResetHandler();
    emailResetHandler();
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
          value={name}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          autoComplete="off"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Entered name must be a valid string!</p>
        )}
      </div>
      <div className={inputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={email}
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
