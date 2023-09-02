import "./LoginButton.css";

const LoginButton = (props) => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        "https://login-form-26d02-default-rtdb.firebaseio.com/accounts.json"
      );
      const data = await response.json();
      const dataArray = Object.entries(data);
      // console.log(dataArray);
      const email = props.onSentEmail;
      const password = props.onSentPassword;

      dataArray.some((array) => {
        console.log(array[1]);
        if (array[1].includes(email) && array[1].includes(password)) {
          props.onSetIsValid(true);

          props.onloginSuccessfuly(true);
          return true;
        } else {
          props.onSetIsValid(false);
          props.onloginSuccessfuly(false);
          return false;
        }
      });
    } catch (error) {
      console.error("Error checking email:", error);
    }
  };

  return (
    <>
      <button onClick={handleButtonClick} className="btn">
        LOGIN
      </button>
    </>
  );
};
export default LoginButton;
