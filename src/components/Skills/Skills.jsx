import React from "react";
import "./Skills.css";



import sicon2 from './Images/html.png'
import sicon3 from './Images/java.png'
import sicon4 from './Images/js.png'
import sicon5 from './Images/physics.png'
import sicon6 from './Images/programing.png'
import sicon7 from './Images/python.png'
import sicon8 from './Images/sql.png'
import sicon9 from './Images/text.png'
import sicon10 from './Images/figma.png'
import sicon11 from './Images/scikit-learn.png'
function Skills() {
  return (
    <div id="skills" className="Container2">
    <div   className='SkillsText'>
   
      <div className='Text2'>Skills & Tools </div>
      <div className='Text3'>Problems are just puzzles waiting to be solved.</div>
      <div className='Text3'>HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</div>
    </div>
    <div className='SkillsIcons'>
        <div  className='SkillsIconsRow1'>
        <img  src={sicon2}  alt=""  />
        <img  src={sicon10} alt=""  />
        <img  src={sicon3} alt=""  />
        <img  src={sicon4} alt=""  />
        <img  src={sicon5} alt=""  />
        </div>
        <div  className='SkillsIconsRow2'>
        <img  src={sicon6} alt=""  />
        <img  src={sicon7} alt=""  />
        <img  src={sicon8} alt=""  />
        <img  src={sicon9} alt=""  />
        <img  src={sicon11} alt=""  />
        </div>
       
    </div>
 </div>
  );
}

export default Skills;
