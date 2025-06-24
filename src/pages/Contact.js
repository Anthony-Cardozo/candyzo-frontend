import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a9gqqcs',
      'template_53m6meu',
      form.current,
      'behdymbere3Fcf-im'
    ).then(
      () => {
        setSuccess(true);
        setError(false);
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      },
      () => {
        setError(true);
        setSuccess(false);
        setTimeout(() => setError(false), 5000);
      }
    );
  };

  return (
    <div className="contact-page">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>Got questions, feedback, or custom candy ideas? Reach out below!</p>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="4" placeholder="Write your message here..." required></textarea>
          </label>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button type="submit" className="contact-button">Send Message</button>

          {success && (
            <p className="success-message">🎉 Your message was sent! We'll get back to you soon.</p>
          )}

          {error && (
            <p className="error-message">❌ Oops! Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
