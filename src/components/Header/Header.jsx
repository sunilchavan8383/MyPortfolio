import React, { useState } from "react";
import "./Header.css";
import img from "../images/rocket2_downward (1).png";
import img1 from "./images/img1.svg";
import img2 from "../Contact/Images/dark_cube1.png";
function Header() {
  return (
    <div id="home" className="Header-con">
      <div className="Header">
        <div className="Head">
          <h1>
            I’m Sunil, an <br />
            E&TC Engineer
          </h1>
        </div>
        <div className="Discription">
          <p>
            I am Sunil Chavan, a third-year Electronics and Telecommunication
            engineering student.
          </p>
        </div>
        <div className="Roundbutton">
          <div className="arrowdiv">
            <img id="rocket" src={img} className="pulse" />
          </div>
        </div>
      </div>

      <div className="HeaderPhoto">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Header;
