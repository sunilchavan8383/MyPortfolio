import React from "react";
import "./Navbar.css";
import img from "./Group 16 (3).png";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <img id="NavImg" src={img} alt="Logo" />
      </div>
      <div className="Nav">
        <a onClick={() => scrollToSection("home")}>HOME</a>
        <a onClick={() => scrollToSection("about")}>ABOUT</a>
        <a onClick={() => scrollToSection("skills")}>SKILLS</a>
        <a onClick={() => scrollToSection("experience")}>EXPERIENCE</a>
        <a onClick={() => scrollToSection("contact")}>CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
