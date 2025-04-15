import React from "react";
import "./Project3.css";
import img1 from '../Images/crop.png';

function Project3() {
  return (
    <div className="project3-container">
          <div className='project3-img'>
        <img src={img1} alt="" />
      </div>
      <div className='project3-text'>
        <div className='project3-title'>Crop Predictor</div>
        <div className='project3-subtitle'>AI-Based Crop Recommendation System</div>
        <div className='project3-description'>A predictive model that suggests the best crop to grow based on soil conditions, weather, and other environmental factors. It helps farmers maximize yield by considering real-time environmental data and historical agricultural patterns. The system optimizes decision-making, reducing losses due to unfavorable crop selection and improving overall agricultural efficiency.</div>
        <div className='project3-tech'>Built with: Python, scikit-learn, Pandas, NumPy, Flask, MySQL, React</div>
        <div className='project3-buttons'>
          <button className='project3-btn'>See Website</button>
          <button className='project3-btn'>Next Project</button>
        </div>
      </div>
  
    </div>
  );
}

export default Project3;
