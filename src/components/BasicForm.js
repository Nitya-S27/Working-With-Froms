import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fName,
    valueIsValid: fNameIsValid,
    hasError: fNameIsInvalid,
    valueChangeHandler: fNameChangeHandler,
    valueBlurHandle: fNameBlurHandler,
    reset: fNameResetHandler,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: lName,
    valueIsValid: lNameIsValid,
    hasError: lNameIsInvalid,
    valueChangeHandler: lNameChangeHandler,
    valueBlurHandle: lNameBlurHandler,
    reset: lNameResetHandler,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandle: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput(
    (value) =>
      value.includes("@") && value.includes(".") && value.trim().length !== 0
  );

  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!fNameIsValid && !lNameIsValid && !emailIsValid) {
      return;
    }
    console.log(fName, lName, email);
    fNameResetHandler();
    lNameResetHandler();
    emailResetHandler();
  };

  const inputClasses =
    fNameIsInvalid && lNameIsInvalid && emailIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={fName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            type="text"
            id="name"
          />
          {fNameIsInvalid && <p className="error-text">Invalid name input!</p>}
        </div>
        <div className={inputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            type="text"
            id="name"
          />
          {lNameIsInvalid && <p className="error-text">Invalid name input!</p>}
        </div>
      </div>
      <div className={inputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
        />
        {emailIsInvalid && <p className="error-text">Invalid email format!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
