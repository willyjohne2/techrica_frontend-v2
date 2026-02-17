import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Techrica</h3>
            <p className="footer-description">
              Building innovative digital solutions for the modern world.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📧 techrica2@gmail.com</li>
              <li>📱 +254 118 606 119</li>
              <li>📍 Kirinyaga, Kenya</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              {/* <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a> */}
              {/* <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a> */}
              <a href="https://github.com/TECH-RICA" aria-label="GitHub">
                🐙
              </a>
              <a
                href="https://chat.whatsapp.com/HSqaIK1alt6Idj3LkINOdM?mode=gi_t"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              {/* <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Techrica. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--dark);
          color: white;
          padding: 60px 0 20px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-section h3,
        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
        }
        .footer-logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-description {
          color: #cbd5e1;
          line-height: 1.6;
        }
        .footer-links {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }
        .contact-info {
          list-style: none;
          color: #cbd5e1;
        }
        .contact-info li {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #334155;
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: var(--transition);
          font-size: 1.2rem;
        }
        .social-links a:hover {
          background-color: var(--primary);
          transform: translateY(-3px);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          color: #94a3b8;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
