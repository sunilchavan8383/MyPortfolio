import React from "react";
import "./ProjectPage.css";
import { Link, Outlet } from "react-router-dom";

import Backcon from "../../BackContainer/BackContainer";
function ProjectPage() {
  return (
    <div className="ProjectPage">
      <Backcon />
      <Outlet />
    </div>
  );
}

export default ProjectPage;
