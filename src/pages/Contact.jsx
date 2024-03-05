import "./pageStyles/ContactStyles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yu0d7t5",
        "template_ku2t4io",
        form.current,
        {
          publicKey: "UsPk4XE-jYR3x4W7k",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <div>
        <h3>Contact Us</h3>
        <p>Need to get in touch?</p>
        <p>Fill out the form below to send us an email.<em> - we might reply.</em></p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="submit-button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
