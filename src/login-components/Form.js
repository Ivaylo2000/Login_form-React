import "./Form.css";
import Registration from "./Registration";
import Inputs from "./Inputs";
import { useState } from "react";

const Form = (props) => {
  const [isValid, setIsValid] = useState(null);
  console.log(isValid);
  return (
    <div className="Form">
      <h1>LOGIN</h1>
      {isValid === false && <p>Wrong email or password</p>}
      {isValid && <p></p>}
      <Inputs
        onSetIsValid={setIsValid}
        onloginSuccessfuly={props.onloginSuccessfuly}
      />
      <Registration onDisplayRegistration={props.onsetDisplayRegistraion} />
    </div>
  );
};

export default Form;
