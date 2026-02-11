import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import "../styles/main.css";

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend APIs
    const fetchData = async () => {
      try {
        const [testimonialsRes, projectsRes] = await Promise.all([
          fetch("http://localhost:5000/api/testimonials"),
          fetch("http://localhost:5000/api/projects?featured=true"),
        ]);

        const testimonialsData = await testimonialsRes.json();
        const projectsData = await projectsRes.json();

        setTestimonials(testimonialsData);
        setProjects(projectsData.slice(0, 3)); // Show only 3 featured projects
      } catch (error) {
        console.error("Error fetching data:", error);
        // Fallback data
        setTestimonials([
          {
            id: 1,
            name: "Sarah Johnson",
            feedback: "Techrica delivered beyond expectations!",
            company: "TechCorp Inc.",
          },
          {
            id: 2,
            name: "Michael Chen",
            feedback: "Professional team with outstanding results.",
            company: "StartupXYZ",
          },
          {
            id: 3,
            name: "Emily Rodriguez",
            feedback: "Transformed our business with their solutions.",
            company: "GlobalBiz",
          },
        ]);
        setProjects([
          {
            id: 1,
            title: "E-commerce Platform",
            description: "Full-featured online store",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/400x250",
          },
          {
            id: 2,
            title: "AI Chat Assistant",
            description: "Intelligent customer support chatbot",
            technologies: ["Python", "TensorFlow", "React"],
            image: "https://via.placeholder.com/400x250",
          },
          {
            id: 3,
            title: "Mobile Banking App",
            description: "Secure banking application",
            technologies: ["React Native", "Node.js", "PostgreSQL"],
            image: "https://via.placeholder.com/400x250",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern responsive websites and web applications",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "iOS and Android applications with React Native",
    },
    {
      icon: "🤖",
      title: "AI Systems",
      description: "Machine learning and AI-powered solutions",
    },
    {
      icon: "🏢",
      title: "Business Systems",
      description: "Custom enterprise software solutions",
    },
  ];

  return (
    <div>
      <Hero />

      {/* What We Do Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We provide comprehensive digital solutions to help your business
            grow
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by businesses worldwide</p>

          {loading ? (
            <div className="loading">Loading testimonials...</div>
          ) : (
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card fade-in">
                  <p className="testimonial-text">"{testimonial.feedback}"</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    {testimonial.company && (
                      <span>, {testimonial.company}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore our recent work</p>
          </div>

          {loading ? (
            <div className="loading">Loading projects...</div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-preview fade-in">
                  <div className="preview-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="preview-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="preview-tech">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <a href="/projects" className="btn">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .service-card h3 {
          margin-bottom: 1rem;
          color: var(--dark);
        }
        .service-card p {
          color: var(--gray);
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
          border-left: 4px solid var(--primary);
        }
        .testimonial-text {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 1rem;
          color: var(--dark);
        }
        .testimonial-author {
          color: var(--primary);
          font-weight: 600;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-preview {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        .project-preview:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .preview-image {
          height: 200px;
          overflow: hidden;
        }
        .preview-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .project-preview:hover .preview-image img {
          transform: scale(1.05);
        }
        .preview-info {
          padding: 1.5rem;
        }
        .preview-info h3 {
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        .preview-info p {
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .preview-tech {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .preview-tech span {
          background-color: var(--light);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid var(--light-gray);
        }
        .loading {
          text-align: center;
          padding: 3rem;
          color: var(--gray);
        }
        .text-center {
          text-align: center;
        }
        @media (max-width: 768px) {
          .services-grid,
          .testimonials-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
