import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import "./contact.css";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// ContactForm component for handling form state and POST
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const response = await fetch(`${API_URL}/api/contact/message/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        required
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send Message</button>
      {status && <div style={{marginTop:8, color: status.includes("success") ? "green" : "red"}}>{status}</div>}
    </form>
  );
};

const Contact = () => {
  useEffect(() => {
    fetch(`${API_URL}/api/contact/track-visit/`, { method: "POST" });
  }, []);
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Let’s Build Something Powerful Together</h1>
            {/*
            <p>
              We'd love to show you how you can get more traffic and leads,
              increase your sales productivity, provide better customer service,
              or all of the above! Here are a few ways to reach out to our team.
            </p>
            */}
            <p>
              Tell us about your project and discover how Techrica can help you build
              scalable, secure, and high-performance digital solutions.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="/techrica-logo.png"
              alt="Techrica Logo"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="cards-container">
          {/* Card 1: Direct Call */}
          <div className="contact-card">
            <div className="card-icon">
              <Phone size={32} />
            </div>
            <h3>Call us directly</h3>
            <p className="card-info">+254 712345678</p>
            {/*<a href="#" className="secondary-link">*/}
              <a href="mailto:info@techrica.com" className="btn-contact">
              See more local numbers
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="contact-card">
            <div className="card-icon">
              <MessageSquare size={32} />
            </div>
            <h3>Talk with our team</h3>
            <a
              href="https://wa.me/254118606119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contact"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 3: Demo */}
          <div className="contact-card">
            <div className="card-icon">
              <Calendar size={32} />
            </div>
            <h3>Get a product demo</h3>
            {/*
            <a href="#" className="btn-contact">
            */}
            <a href="mailto:info@techrica.com" className="btn-contact">
              Get a demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <p>Fill in the form and our team will get back to you within 24 hours.</p>
          <ContactForm />
          {/* Business Creditability Section */}
          <section className="contact-trust">
            <div className="trust-container">
              <div>
                <h3>Trusted by Businesses & Startups</h3>
                <p>We’ve delivered digital solutions across fintech, e-commerce, enterprise systems, and automation.</p>
              </div>
              <div className="trust-stats">
                <div><span>40+</span><p>Projects Delivered</p></div>
                <div><span>15+</span><p>Active Clients</p></div>
                <div><span>5+</span><p>Years Experience</p></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Contact;
  