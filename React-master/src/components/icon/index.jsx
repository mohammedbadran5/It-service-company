import "./icon.scss";

const Icon = ({ size, icon, bg }) => {
  return (
    <div
      className="icon"
      style={{
        width: size,
        height: size,
        backgroundColor: bg === "black" ? "rgba(18, 18, 18, 0.9)" : "#FBFBFB",
      }}
    >
      <img
        src={`/assets/${icon}.svg`}
        style={{
          width: size * 0.5,
          height: size * 0.5,
        }}
        alt="icon"
      />
    </div>
  );
};

export default Icon;
