import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <span className="logo-text">Techrica</span>
          </Link>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background-color: white;
          box-shadow: var(--shadow);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        .logo-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          transition: var(--transition);
          padding: 8px 0;
          position: relative;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        .nav-links a:after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          background: var(--primary);
          bottom: 0;
          left: 0;
          transition: var(--transition);
        }
        .nav-links a:hover:after {
          width: 100%;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: var(--dark);
          transition: var(--transition);
        }
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
          }
          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
