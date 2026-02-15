import React from "react";
import { Phone, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">   
        <div className="hero-container">
          <div className="hero-text">
            <h1>Contact Us About techrica's Services</h1>
            <p>
              We'd love to show you how you can get more traffic and leads, increase your 
              sales productivity, provide better customer service, or all of the above! 
              Here are a few ways to reach out to our team.
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
            <a href="#" className="secondary-link">See more local numbers</a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="contact-card">
            <div className="card-icon">
              <MessageSquare size={32} />
            </div>
            <h3>Talk with our team</h3>
            <a 
              href="https://chat.whatsapp.com/HSqaIK1alt6Idj3LkINOdM?mode=gi_t" 
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
            <a href="#" className="btn-contact">Get a demo</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
