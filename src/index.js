import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projectsandexperience/Projects/ProjectPage";
import Project1 from "./components/Projectsandexperience/Projects/Project1/Projects";
import Project2 from "./components/Projectsandexperience/Projects/Project2/project2";
import Project3 from "./components/Projectsandexperience/Projects/Project3/Project3";
import Experience from "./components/Projectsandexperience/Experience/Experience";


import Blogspg1 from "./components/About-Me/Blogs/Blogs";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/projects",
    element: <Projects />,
    children: [
      { index: true, element: <Project1 /> }, 
      { path: "project-2", element: <Project2/> },
      { path: "project-3", element: <Project3/> },
    ],
  },

  {
    path: "/experience",
    element: <Experience/>,
  },
  {

    path: "/about-me",
    element: <Blogspg1/>,
    children: [
      { index: true, element: <Blogspg1/> }, 
      { path: "extracurricular", element: <Blogspg1/>},
   
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
