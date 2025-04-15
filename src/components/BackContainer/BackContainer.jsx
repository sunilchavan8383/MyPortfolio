import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackCon.css";
import img1 from "./images/Arrow 1.svg";

function Backcon() {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="Back-con">
      <button className="Back-div" onClick={() => navigate(-1)}>
        <img src={img1} alt="Back" />
      </button>
    </div>
  );
}

export default Backcon;
