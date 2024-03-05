import "./pageStyles/ContactStyles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID || process.env.EMAILJS_SERVICE_ID,
        TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY,
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
