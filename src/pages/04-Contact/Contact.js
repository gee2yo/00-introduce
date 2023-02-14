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
          fontColor="#fff"
          lineWidth="100px"
          lineHeight="3px"
          lineColor="#fff"
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
              target="responseTo"
              autoComplete="off"
            >
              <InputWithLabel
                label="Name"
                width="300px"
                height="50px"
                input={{
                  // 객체에 prop 담아 전달 (key-value 쌍)
                  id: "name",
                  placeholder: "Write your name here",
                  type: "text",
                  name: "name",
                }}
              />
              <InputWithLabel
                label="Email"
                width="300px"
                height="50px"
                input={{
                  id: "email",
                  placeholder: "Write your email here",
                  type: "text",
                  name: "email",
                }}
              />
              <TextAreaWithLabel
                name="message"
                label="Message"
                txtAreaId="message"
                width="300"
                height="104"
                placeholder="Write your message"
              />
              <button type="submit">Send Message</button>
              <iframe name="responseTo" title="responseTo" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
