import React from "react";
import ProfilePic from "../../img/Headshot.jpeg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={ProfilePic} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I am currently a state of Ohio Specialist who feels like his skills are being concealed. With these new powers I am currently acquiring, I feel like I will be bringing some fire power to my next group. Feel free to check out the results of my most favorite conquests.</p>
                        
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;