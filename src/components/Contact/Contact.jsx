import React from "react";
import "./Contact.css";
import img1 from './Images/globe.png';
function Contact() {
  return (
    <div id="contact" className="contactContainer">
      <div className="earth">
        <img src={img1} alt="" />
      </div>
      <div className="contact">
      <div className="contactt01">Contact Me :</div>
        <div className="contactt1">What would you do if you had a software expert available at your fingertips? </div>
        <div className="contactt2">Whether you're ready to start a new project or just want to say hi, I'm here!</div>
        
        <div className="contactt3">Feel free to connect with me—let's build something amazing together!</div>
        <div className="contactt4"t3>You can also follow me on: <a href="https://www.instagram.com/sunilchavan__18/">Instagram</a></div>
        <div className='contactform'>
       
        <form action="">
          <input  type="text" placeholder="What's Your Name" />
          <input  type="text" placeholder="What's on your mind? Got an idea brewing?" />
          <button id='input1'>Submit </button>
        </form>
      </div>
      </div>

    </div>
  );
}

export default Contact;
