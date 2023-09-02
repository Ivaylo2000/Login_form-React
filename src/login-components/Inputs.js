import { useState } from "react";
import "./Inputs.css";
import LoginButton from "./LoginButton";
const Inputs = (props) => {
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
      <div className="inputs">
        <input
          className="email"
          type="email"
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          placeholder={emailIsMarked ? "" : "Email"}
          onChange={emailChangeHandler}
        />

        <input
          className="passwordinp"
          type="password"
          onFocus={handlePassFocus}
          onBlur={handlePassBlur}
          onChange={passwordChangeHandler}
          placeholder={passwordIsMarked ? "" : "Password"}
        />
      </div>
      <div>
        <LoginButton
          onSentEmail={enteredEmail}
          onSentPassword={enteredPassword}
          onSetIsValid={props.onSetIsValid}
          onloginSuccessfuly={props.onloginSuccessfuly}
        />
      </div>
    </>
  );
};
export default Inputs;
