import "./logo.scss";
import { useNavigate } from "react-router-dom";

const LOGO = ({ color }) => {
  const navigate = useNavigate();

  return (
    <div className="logo" style={{ color }} onClick={() => navigate("/")}>
      <img
        src={`/assets/logo.png`}
        style={{ width: 40, height: 40, borderRadius: "50%" }}
        alt="LOGO"
      />
      <p
        style={{
          color: color === "black" ? "rgba(18, 18, 18, 0.9)" : "#FDFDFD",
        }}
      >
        ITtech
      </p>
    </div>
  );
};

export default LOGO;
