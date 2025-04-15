import React from "react";
import "./Project2.css";
import img1 from '../Images/hosp.png';
import { Link } from "react-router-dom";

function Project2() {
  return (
    <div className="heart-container">
      <div className='heart-img'>
        <img src={img1} alt="" />
      </div>
      <div className='heart-text'>
        <div className='heart-title'>Heart Disease Predictor</div>
        <div className='heart-subtitle'>AI-Powered Heart Disease Prediction System</div>
        <div className='heart-description'>
          A machine learning model that predicts heart disease risk based on medical parameters, 
          helping in early diagnosis and preventive care. It analyzes key health indicators such as 
          blood pressure, cholesterol levels, and heart rate to provide accurate risk assessments.
        </div>
        <div className='heart-tech'>Built with: Python, scikit-learn, Pandas, NumPy, Flask, HTML, CSS, JavaScript</div>
        <div className='heart-buttons'>
          <button className='heart-btn'>See Website</button>
          <Link to="/projects/project-3" className='heart-btn'>Next Project</Link> {/* Absolute path */}
        </div>
      </div>
    </div>
  );
}

export default Project2;
