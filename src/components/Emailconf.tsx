import "./Emailconf.css";
import { FaWindowClose } from "react-icons/fa";

interface EmailConfProps {
  isPressed: boolean;
  setIsPressed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Emailconf: React.FC<EmailConfProps> = ({ isPressed, setIsPressed }) => {
  const clickHandler = () => {
    setIsPressed(false);
  };
  return (
    <div className={isPressed ? "emailconf-wrapper" : "emailconf-wrappernot"}>
      <FaWindowClose id="popup-close" onClick={clickHandler}/>

      <div className="parag">
        <p>Please enter the code we sent to your email</p>
      </div>

      <div className="email-input-wrapper">
        <input type="text" placeholder="XXX-XXX" className="email-input" />
        <div className="e-button" >
          Confirm
        </div>
      </div>
    </div>
  );
};

export default Emailconf;
