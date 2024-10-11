import "./header.scss";
import LOGO from "../logo";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ bg }) => {
  const [menuIcon, setMenuIcon] = useState("menu");

  return (
    <div className="header">
      <div className="header__logoWrapper">
        <LOGO color={bg === "white" ? "black" : "white"} />
      </div>
      <nav className="header__nav">
        <Anchors bg={bg} />
      </nav>
      <div className="header__btnWrapper">
      <Button
        text="Chat on WhatsApp"
        color={bg === "white" ? "black" : "white"}
        phoneNumber="962788603413" // Use your phone number here
        message="Hello! I need assistance." // Optional message
      />


      </div>
      <div className="mobileNav__menuWrapper">
        <img
          src={`/assets/${menuIcon}.png`}
          width={30}
          onClick={() => setMenuIcon((p) => (p === "menu" ? "close" : "menu"))}
          style={{
            transform: menuIcon === "menu" ? "rotateX(1)" : "rotateX(-1)",
          }}
          alt="menu icon"
        />
      </div>
      <nav
        className="header__mobileNav"
        style={menuIcon === "menu" ? { top: "-500%" } : { top: "0" }}
      >
        <Anchors bg="white" />
      </nav>
    </div>
  );
};

export default Header;

function Anchors({ bg }) {
  const navigate = new useNavigate();

  return (
    <>
      <p
        style={{
          color: bg === "black" ? "#FDFDFD" : "rgba(18, 18, 18, 0.9)",
        }}
        className="header__anchors"
        onClick={() => navigate("/")}
      >
        Home
      </p>
      <p
        style={{
          color: bg === "black" ? "#FDFDFD" : "rgba(18, 18, 18, 0.9)",
        }}
        className="header__anchors"
        onClick={() => navigate("/about")}
      >
        About
      </p>
      <p
        style={{
          color: bg === "black" ? "#FDFDFD" : "rgba(18, 18, 18, 0.9)",
        }}
        className="header__anchors"
        onClick={() => navigate("/project")}
      >
        Project
      </p>
      <p
        style={{
          color: bg === "black" ? "#FDFDFD" : "rgba(18, 18, 18, 0.9)",
        }}
        className="header__anchors"
        onClick={() => navigate("/contact")}
      >
        Contact
      </p>
    </>
  );
}
