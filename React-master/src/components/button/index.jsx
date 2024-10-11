import "./button.scss";

const Button = ({ text, color, phoneNumber, message }) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Opens in a new tab
  };

  return (
    <button
      className="btn"
      style={{
        backgroundColor: color === "black" ? "rgba(18, 18, 18, 0.9)" : "#FBFBFB",
        color: color === "black" ? "#FBFBFB" : "rgba(18, 18, 18, 0.9)",
      }}
      onClick={handleClick} // Call the handleClick function on click
    >
      {text}
    </button>
  );
};

export default Button;
