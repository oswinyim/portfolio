import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_j0ja6qp",
      "template_wxe9was",
      form.current,
      "0_WjUt8E-LV1pj6RI"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Email to me easily</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>oswinyim@gmail.com</h5>
            <a
              href="mailto:osiwnyim@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Email me
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+16478709789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=16478709789"
              rel="noreferrer"
              target="_blank"
            >
              Whatsapp Me
            </a>
          </article>
          <article className="contact__option">
            <BiPhoneCall className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+16478709789</h5>
            <a
              href="tel:+16478709789"
              rel="noreferrer"
              target="_blank"
            >
              Call Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" />
          <button type="submit" className="btn btn-primary">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
