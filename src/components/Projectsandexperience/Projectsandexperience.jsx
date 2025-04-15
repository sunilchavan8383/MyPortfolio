import React from "react";
import "./Projectsandexperience.css";
import { Link } from "react-router-dom";
import img1 from "./projects.webp";
import img2 from "./experience.jpg";
import img3 from "./cv.jpg";

function Projectsandexperience() {
  const services = [
    {
      image: img1,
      title: "Projects",
      link: "/projects",
      isDownload: false, // Not a download
    },
    {
      image: img2,
      title: "Experience",
      link: "/experience",
      isDownload: false, // Not a download
    },
    {
      image: img3,
      title: "Download CV",
      link: "/SUNIL_CHAVAN_web.pdf", // Path to your CV inside the public folder
      isDownload: true, // Marked as a download link
    },
  ];

  return (
    <div id="experience" className="Container3">
      <div className="pText3">
        I have worked on a variety of projects covering different aspects of
        technology and problem-solving. I also completed internships at two
        companies, gaining valuable hands-on experience. If you'd like to see
        more examples of my work beyond what's showcased here, feel free to
        reach out!
      </div>
      <div className="pecv">
        <div className="blog-card-grid">
          {services.map((service, index) => (
            <div key={index} className="blog-article-card">
              {service.isDownload ? (
                <a href={service.link} download className="download-link">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="blog-thumbnail"
                  />
                </a>
              ) : (
                <Link to={service.link}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="blog-thumbnail"
                  />
                </Link>
              )}
              <div className="blog-details">
                <h3 className="blog-heading">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projectsandexperience;
