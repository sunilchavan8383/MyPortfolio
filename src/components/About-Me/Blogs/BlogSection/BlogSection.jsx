import React from "react";
import "./BlogSection.css";
import img1 from "./images/PCCOER-210923110038 (1).jpg";
import img2 from "./images/127defda93b52e32246d4f32feac33aa.jpg";
import img3 from "./images/127defda93b52e32246d4f32feac33aa.jpg";
const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
       
        <h2 className="blog-title">Academics</h2>
      </div>

      <div className="blog-container">
        {/* Main Blog Card */}
        <div className="main-blog">
          <img src={img1} alt="Blog Post" className="main-blog-image" />
          <div className="main-blog-content">
            <p className="blog-date">Engineering (Expected Graduation: 2026)</p>
            <h3 className="blog-heading">
            Pimpri Chinchwad College of Engineering and Research, Ravet Pune
            </h3>
            <p className="blog-author">Current SGPA: 8.00</p>
            
          </div>
        </div>

        {/* Side Blog Cards */}
        <div className="side-blogs">
          <div className="side-blog-card">
            <img src={img2} alt="Blog Post" className="side-blog-image" />
            <div className="side-blog-content">
              <p className="blog-date">12th Grade (Completed: 2022)</p>
              <h3 className="blog-heading">
              S.B. Patil College of Arts and Commerce, Pune
              </h3>
              <div className="blog-author-box">
      
                <p className="blog-author">Percentage: 55.30%</p>
              </div>
              
            </div>
          </div>

          <div className="side-blog-card">
            <img src={img3} alt="Blog Post" className="side-blog-image" />
            <div className="side-blog-content">
              <p className="blog-date">10th Grade (Completed: 2020)</p>
              <h3 className="blog-heading">
            Ajara Highschool, Ajara Kolhapur
              </h3>
              <div className="blog-author-box">
              
                <p className="blog-author">Percentage: 92.00%</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
