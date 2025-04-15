import React from "react";
import "./LatestPost.css";
import img1 from "./images/WhatsApp Image 2025-03-06 at 10.48.49_e8b82a93.jpg";
import img2 from "./images/trophy1.jpg";
import img3 from "./images/urc3.png";
import img4 from "./images/sih.png";
import img5 from "./images/cf9a9613-b2bc-4cab-a631-cdf6ae80988b.png";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "University-level cricket player",
    image: img1,
    author: "PCCOER",
    date: "2022, 2023, 2024",
  },
  {
    id: 2,
    title: "Headed a cricket tournament",
    image: img2,
    author: "Scorchers League",
    date: "Apr 27th, 2022",
    link: "https://www.instagram.com/scorchersleague/",
  },
  {
    id: 3,
    title: "Developed the official website for a robotics championship",
    image: img3,
    author: "URC PCCOER",
    date: "Apr 26th, 2022",
    link: "https://urc.pccoer.com/",
  },
  {
    id: 4,
    title: "Smart India Hackathon (SIH) 2024 participant",
    image: img4,
    author: "PCCOER",
    date: "May 4th, 2022",
  },
  {
    id: 5,
    title: "Avishkar 2024 (Zonal Level) participant",
    image: img5,
    author: "DY Patil College",
    date: "Apr 27th, 2022",
  },
];

const BlogSection2 = () => {
  return (
    <div className="blog-container2">
      <div className="blog-header-wrapper">
        <h2 className="blog-main-title">Extracurricular</h2>
      </div>

      <div className="blog-card-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-article-card">
            <img src={blog.image} alt={blog.title} className="blog-thumbnail" />
            <div className="blog-details">
              <h3 className="blog-heading">{blog.title}</h3>
              <div className="blog-author-info">
                <p className="author-name">{blog.author}</p>
                {blog.link && (
                  <Link to={blog.link} className="author-name1" target="_blank">
                    _check
                  </Link>
                )}
              </div>
              <span className="blog-publication-date">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection2;
