import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrap">
        <div className="contact-tit">
          <h1>CONTACT</h1>
        </div>
        <div className="contact-contents">
          <div className="contact-contents-texts">
            <span>{`LET'S TALK`}</span>
            <p>설명</p>
          </div>
          <div className="contact-contents-form">
            <form action="">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
