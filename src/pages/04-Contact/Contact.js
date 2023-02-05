import React from "react";
import InputWithLabel from "../../components/molecule/InputWithLabel";
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
            <form action="">
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
              <InputWithLabel
                label="Message"
                inputId="message"
                name="message"
                placeholder="Write your message here"
                width="300"
                height="50"
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
