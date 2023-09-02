import "./LoggedIn.css";

import picture from "../registraion-components/go-back-2.png";
const LoggedIn = (props) => {
  console.log(props);
  const handleImageClick = () => {
    props.onSetIsAppOpen(false);
  };
  return (
    <div className="youarein">
      <img src={picture} alt="Go Back Icon" onClick={handleImageClick} />
      <h3 className="in"> You are in</h3>
    </div>
  );
};
export default LoggedIn;
