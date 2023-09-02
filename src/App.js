import Form from "./login-components/Form";
import "./App.css";
import { useState } from "react";
import RegistrationForm from "./registraion-components/RegistrationForm";
import LoggedIn from "./logged-component/LoggedIn";

function App() {
  const [displayRegistraion, setDisplayRegistraion] = useState(false);
  const [loginSuccessfuly, setLoginSuccessfuly] = useState(false);

  return (
    <div>
      {loginSuccessfuly && <LoggedIn onSetIsAppOpen={setLoginSuccessfuly} />}

      {!loginSuccessfuly && !displayRegistraion && (
        <Form
          onsetDisplayRegistraion={setDisplayRegistraion}
          onloginSuccessfuly={setLoginSuccessfuly}
        />
      )}
      {!loginSuccessfuly && displayRegistraion && (
        <RegistrationForm onsetDisplayRegistraion={setDisplayRegistraion} />
      )}
    </div>
  );
}

export default App;
