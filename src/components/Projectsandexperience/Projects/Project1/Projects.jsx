import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import img1 from "../Images/Group 8.png";
function Project1() {
  return (
    <div className="Project-Container">
      <div className="Project-img">
        <img src={img1} alt="" />
      </div>
      <div className="Project-txt">
        <div className="Project-txt1">Attendance Management System</div>
        <div className="Project-txt2">
          Comprehensive Educational Platform for Attendance and Academic
          Management
        </div>
        <div className="Project-txt3">
          A web-based system for secure and efficient attendance tracking with
          real-time data visualization, OTP-based validation, and a
          material-sharing feature for students and teachers.
        </div>
        <div className="Project-txt4">
          Built with: React, Node.js, JavaScript, MySQL, Power BI, Firebase
          (Authentication, Cloud Functions, Hosting)
        </div>
        <div className="Project-buts">
          <button className="See-Websiteof1">See Website</button>
          <Link to="project-2" className="See-Websiteof11">
            Next Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project1;
