import "./freeTrial.scss";
import Icon from "../icon";

const FreeTrial = ({ bg }) => {
  const handleClick = () => {
    const phoneNumber = "962788603413"; // Your phone number
    const message = "Hello! I would like to know more about the free trial."; // Optional message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Opens in a new tab
  };

  return (
    <button
      className="free-trial-btn"
      style={{
        backgroundColor: bg === "black" ? "rgba(18, 18, 18, 0.9)" : "#FBFBFB",
        color: bg === "black" ? "#FBFBFB" : "rgba(18, 18, 18, 0.9)",
      }}
      onClick={handleClick} // Call the handleClick function on click
    >
      <Icon
        size={30}
        icon={`arrow-right-${bg}`}
        bg={bg === "black" ? "white" : "black"}
      />
      Contact Us Now
    </button>
  );
};

export default FreeTrial;
