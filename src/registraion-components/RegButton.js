import { useState } from "react";
import "./RegButton.css";

const RegButton = (props) => {
  const [switchToLogin, setSwitchToLogin] = useState(false);
  const handleButtonClick = async () => {
    if (
      !props.onSubmitEmail ||
      props.onSubmitEmail.length === 0 ||
      !props.onSubmitPassword ||
      props.onSubmitPassword.length === 0
    ) {
      props.onSetEmailPasswordValidation(true);
      props.onSetShowErrorMessage("Please enter both email and password");
      return;
    }
    if (!props.onSubmitEmail.includes("@")) {
      props.onSetEmailPasswordValidation(true);
      props.onSetShowErrorMessage("Please enter a valid email address");
      return;
    }

    const data = [props.onSubmitEmail, props.onSubmitPassword];
    try {
      const response = await fetch(
        "https://login-form-26d02-default-rtdb.firebaseio.com/accounts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        setSwitchToLogin(false);
        props.onsetDisplayRegistraion(switchToLogin);
        throw new Error(
          `Failed with status ${response.status}: ${response.statusText}`
        );
      } else {
        setSwitchToLogin(true);
        props.onsetDisplayRegistraion(switchToLogin);
        props.onSetEmailPasswordValidation(false);
        props.onSetShowErrorMessage("");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <button className="registraionbutton" onClick={handleButtonClick}>
        Registration
      </button>
    </>
  );
};
export default RegButton;
