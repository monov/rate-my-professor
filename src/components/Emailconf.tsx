import "./Emailconf.css";

interface EmailConfProps {
  isPressed: boolean; 
}

const Emailconf: React.FC<EmailConfProps> = ({ isPressed }) => {
  return (
    <div className={isPressed ? "emailconf-wrapper": "emailconf-wrappernot"}>
      <div className="parag">
        <p>Please enter the code we sent to your email</p>
      </div>

      <div className="email-input-wrapper">
        <input type="text" className="email-input" />
        <div className="e-button">Confirm</div>
      </div>
    </div>
  );
};

export default Emailconf;
