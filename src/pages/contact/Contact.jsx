import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p className="hero-subtitle">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="alert success">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="alert error">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>hello@techrica.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h3>Location</h3>
                    <p>San Francisco, California</p>
                    <p>United States</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9AM - 6PM PST</p>
                    <p>Saturday: 10AM - 4PM PST</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-placeholder">
                <div className="map-content">
                  <p>📍 San Francisco Office</p>
                  <p>123 Tech Street, SF 94107</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
          padding: 160px 0 80px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
          text-align: center;
        }
        .contact-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          color: #cbd5e1;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .contact-form-section h2,
        .contact-info-section h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--dark);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--dark);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid var(--light-gray);
          border-radius: 8px;
          font-size: 1rem;
          transition: var(--transition);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        .contact-form .btn {
          align-self: flex-start;
          min-width: 150px;
        }
        .alert {
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }
        .alert.success {
          background-color: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }
        .alert.error {
          background-color: #fee2e2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .info-icon {
          font-size: 1.5rem;
          background: var(--light);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-item h3 {
          margin-bottom: 0.25rem;
          color: var(--dark);
        }
        .info-item p {
          color: var(--gray);
          margin: 0.25rem 0;
        }
        .map-placeholder {
          background: var(--light);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          border: 2px dashed var(--light-gray);
        }
        .map-content p {
          color: var(--gray);
          margin: 0.5rem 0;
        }
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 768px) {
          .contact-hero {
            padding: 140px 0 60px;
          }
          .contact-hero h1 {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .contact-form .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
