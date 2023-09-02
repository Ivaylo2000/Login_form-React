import { useState } from "react";
import "./RegInputs.css";
import RegButton from "./RegButton";

const RegInputs = (props) => {
  const [emailIsMarked, setEmailIsMarked] = useState(false);
  const [passwordIsMarked, setPasswordIsMarked] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const handleEmailFocus = () => {
    setEmailIsMarked(true);
  };

  const handleEmailBlur = () => {
    setEmailIsMarked(false);
  };

  const handlePassFocus = () => {
    setPasswordIsMarked(true);
  };

  const handlePassBlur = () => {
    setPasswordIsMarked(false);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(enteredEmail);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(enteredPassword);
  };

  return (
    <>
      <div className="regform">
        <input
          type="email"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          placeholder={emailIsMarked ? "" : "Email"}
          onChange={emailChangeHandler}
        />

        <input
          type="password"
          onFocus={handlePassFocus}
          onBlur={handlePassBlur}
          onChange={passwordChangeHandler}
          placeholder={passwordIsMarked ? "" : "Password"}
        />
      </div>
      <div>
        <RegButton
          onSubmitEmail={enteredEmail}
          onSubmitPassword={enteredPassword}
          onsetDisplayRegistraion={props.onsetDisplayRegistraion}
          onSetEmailPasswordValidation={props.onEmailAndPassValidation}
          onSetShowErrorMessage={props.onSetShowErrorMessage}
        />
      </div>
    </>
  );
};
export default RegInputs;
