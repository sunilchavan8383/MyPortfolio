import React from "react";
import "./Blogs.css";

import BlogSection from "./BlogSection/BlogSection";
import BlogSection2 from "./LatestPost/LatestPost";
import Quote from "./Quote/Quote";
import Backcon from "../../BackContainer/BackContainer";
function Blogspg1() {
  return (
    <div className="blogs-pg1-container">
      <Backcon />
      <BlogSection />
      <BlogSection2 />
      <Quote />
    </div>
  );
}

export default Blogspg1;
