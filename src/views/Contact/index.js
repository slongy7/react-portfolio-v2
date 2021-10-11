import React from "react";
// import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";
import "./style.css";

function Contact() {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row">
        <div className="formDiv" id="contact">
          <h3 className="viewTitle" id="contactTitle">
            CONTACT ME
          </h3>

          <hr></hr>

          
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Contact;
