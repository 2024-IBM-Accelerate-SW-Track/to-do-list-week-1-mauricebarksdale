import React, { Component } from 'react';
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src= "./assets/Linkedin-Photo.JPEG"
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Maurice Barksdale</div>
            <div className="brief_description">
              Hi! My name is Maurice Barksdale! I am a rising junior at the University of Maryland studying Computer Science! I'm into software engineering, application security, and web development. For summer 2024, I'm currently in IBM Accelerate, AmazonNext, and a software engineering apprenticeship at a local biotech company! Outside of tech, I'm into anime, photography, and video editing! Excited to connect with you all!
            </div>
          </div>
        </div>
      </div>
    );
  }
}