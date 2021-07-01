import React, {useState} from "react";
import family from '../family.jpg'

function About() {
  
  return (
    <div className="about">
      <div class="container">
          <div style={{left: "0"}}>
            <img src={family} alt="logo"></img>
          </div>
        </div>
      </div>
  );
}

export default About;
