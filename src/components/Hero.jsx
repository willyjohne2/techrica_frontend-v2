import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Building Smart Digital Solutions</h1>
          <p className="hero-description">
            We transform ideas into innovative digital products. From web
            applications to AI systems, we deliver excellence.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 160px 0 100px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: var(--dark);
          line-height: 1.2;
        }
        .hero-description {
          font-size: 1.25rem;
          color: var(--gray);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .hero {
            padding: 140px 0 80px;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .hero-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
