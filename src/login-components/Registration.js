import "./Registration.css";
const Registration = (props) => {
  const handleButtonClick = () => {
    props.onDisplayRegistration(true);
  };
  return (
    <div className="registraion">
      {
        <p>
          Not a member?{" "}
          <button className="singupbtn" onClick={handleButtonClick}>
            Sing up now
          </button>
        </p>
      }
    </div>
  );
};
export default Registration;
