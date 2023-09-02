import React from "react";
import { useState } from "react";
import RegInputs from "./RegInputs";
import "./RegistrationForm.css";

import pic from "./go-back-2.png";
const RegistrationForm = (props) => {
  const [emailPasswordValidation, setEmailPasswordValidation] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [goBack, setGoBack] = useState(false);
  const handleSpanClick = () => {
    setGoBack(true);
    props.onsetDisplayRegistraion(goBack);
  };
  return (
    <div>
      <div className="buttonh1">
        <span className="icon" onClick={handleSpanClick}>
          <img src={pic} alt="Go Back Icon" />
        </span>
        <h1>Registration</h1>
        {emailPasswordValidation && (
          <p className="emailandpasserror">{showErrorMessage}</p>
        )}
        {!emailPasswordValidation && <p className="emailandpasserror">{""}</p>}
      </div>

      <RegInputs
        onsetDisplayRegistraion={props.onsetDisplayRegistraion}
        onEmailAndPassValidation={setEmailPasswordValidation}
        onSetShowErrorMessage={setShowErrorMessage}
      />
    </div>
  );
};
export default RegistrationForm;
