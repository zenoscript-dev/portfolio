import React from "react";
import { LuSend } from "react-icons/lu";
import "./ContactPage.css";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import Navbar from "../../Components/Navbar/Navbar";

const ContactPage = () => {
  return (
    <PageWrapper>
      <Navbar />
      <div className="contant-wrapper">
        <div className="contact-left">
          <h1>
            <span className="txt-light">Let's create </span>something remarkable
            together.
          </h1>
          <form action="" method="post" name="contact-form">
            <div className="field">
              <label htmlFor="name" className="txt-light">
                *Your Name
              </label>
              <input type="text" className="field-input" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email" className="txt-light">
                *Your E-mail
              </label>
              <input type="email" className="field-input" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message" className="txt-light">
                *Your Message
              </label>
              <textarea
                type="text"
                className="field-input"
                id="message"
              ></textarea>
            </div>
            <button type="submit" className="btn-fill">
              Submit Form <LuSend />
            </button>
          </form>
        </div>
        {/* <div className="contact-right">
          <p>
            Send me a message so we can start working together. Tell me your
            vision and goals and I will create extraordinary website for you I'm
            looking forward to our cooperation.
          </p>
          <div className="contact-details">
            <div className="contact-details-item">
                <p className="label">
                    Address Email
                </p>
                <p>
                    <a href="mailto:zenoscript.dev@gmail.com">
                        zenoscript.dev@gmail.com
                    </a>
                </p>
            </div>
            <div className="contact-details-item">
                <p className="label">
                    Local Time
                </p>
                <p className="txt-light">
                UTC +5:30
                </p>
            </div>
          </div>
        </div> */}
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
