import React from "react";
import InputWithLabel from "../../components/molecule/InputWithLabel";
import TextAreaWithLabel from "../../components/molecule/TextAreaWithLabel";
// import Line from "./atom/Line";
import Title from "../../components/molecule/Title";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrap">
        <Title
          title="CONTACT"
          align="center"
          width="100px"
          height="3px"
          bgColor="#fff"
        />
        <div className="contact-contents">
          <div className="contact-contents-texts">
            <span>{`LET'S TALK`}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat eget nulla morbi magna enim. Ultricies
              massa arcu ultricies quis.
            </p>
          </div>
          <div className="contact-contents-form">
            <form
              className="gform"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbyU7NmPoihmmZFeWxlK4AnXvdQvH70jRP7qZeV_HQ8jFIXbtaLgrU4neJoSwflaMqLJZg/exec"
            >
              <InputWithLabel
                label="Name"
                inputId="name"
                name="name"
                placeholder="Write your name here"
                width="300"
                height="50"
              />
              <InputWithLabel
                label="Email"
                inputId="email"
                name="email"
                placeholder="Write your email here"
                width="300"
                height="50"
              />
              <TextAreaWithLabel
                label="Message"
                txtAreaId="message"
                width="300"
                height="104"
                placeholder="Write your message"
              />
              <button type="submit">Send Message</button>
              <div className="thankyou">
                <h2>
                  <em>Thnaks</em>for contacting me! I will get back to you soon!
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
