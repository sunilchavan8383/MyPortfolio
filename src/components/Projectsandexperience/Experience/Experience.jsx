import React from "react";
import "./Experience.css";
import path from "./Images/path1.png";
import img1 from "./Images/web.webp";
import img2 from "./Images/pcb.webp";
import Backcon from "../../BackContainer/BackContainer";
function Experience() {
  return (
    <div className="Experience-Con">
      <Backcon />
      <div className="Experience-Container">
        <div className="Experience-txt">
          <div className="Experience-txt1">Esparse Pvt. Ltd.</div>
          <div className="exp-photo">
            <img src={img1} alt="" />
          </div>
          <div className="Experience-txt2">Frontend Web Developer Intern</div>
          <div className="Experience-txt3">
            Worked on developing a GST Management Website to streamline tax
            calculations, invoice generation, and filing processes for
            businesses. Designed and implemented an interactive and
            user-friendly interface to enhance user experience and
            accessibility. Gained hands-on experience in modern web development
            practices, optimizing performance, and ensuring seamless UI
            functionality.
          </div>
          <div className="Experience-txt4">
            Built with & Learned: React, JavaScript, HTML, CSS, Redux,
            Bootstrap, API Integration, Responsive Design
          </div>
          <div className="exp-buts">
          <button className="See-Websiteof1">See Website</button>
          <button className="See-Websiteof1">Certicate</button>
          </div>
        
        </div>

        <div className="Experience-img">
          <img src={path} alt="Path Illustration" />
        </div>

        <div className="Experience-txtof2">
          <div className="Experience-txt1">Ask Electronics</div>
          <div className="exp-photo">
            <img src={img2} alt="" />
          </div>
          <div className="Experience-txt2">
            PCB Design & Manufacturing Intern
          </div>
          <div className="Experience-txt3">
            Worked on designing and optimizing Printed Circuit Boards (PCBs) for
            various electronic applications. Assisted in schematic design,
            layout creation, and component selection to ensure efficient circuit
            performance. Gained experience in manufacturing processes, PCB
            fabrication techniques, and quality assurance to meet industry
            standards.
          </div>
          <div className="Experience-txt4">
            Tools & Technologies Used & Learned: Eagle, KiCad, Altium Designer,
            PCB Fabrication, Schematic Design, Circuit Testing, Soldering
            Techniques
          </div>
          <button className="See-Websiteof1">See Certificate</button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
