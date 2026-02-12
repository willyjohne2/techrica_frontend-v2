import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ui/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Systems" },
    { id: "business", label: "Business Systems" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback data
        const fallbackProjects = [
          {
            id: 1,
            title: "E-commerce Platform",
            description:
              "A full-featured online store with payment integration and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            category: "web",
            image: "https://via.placeholder.com/400x250/3b82f6/ffffff",
            demoUrl: "https://demo.techrica.com",
            githubUrl: "https://github.com/techrica/ecommerce",
          },
          {
            id: 2,
            title: "AI Chat Assistant",
            description:
              "Intelligent customer support chatbot with natural language processing.",
            technologies: ["Python", "TensorFlow", "React", "FastAPI"],
            category: "ai",
            image: "https://via.placeholder.com/400x250/10b981/ffffff",
            demoUrl: "https://chat.techrica.com",
            githubUrl: "https://github.com/techrica/chat-ai",
          },
          {
            id: 3,
            title: "Mobile Banking App",
            description:
              "Secure banking application with biometric authentication.",
            technologies: ["React Native", "Node.js", "PostgreSQL", "Redis"],
            category: "mobile",
            image: "https://via.placeholder.com/400x250/8b5cf6/ffffff",
            demoUrl: "https://bank.techrica.com",
            githubUrl: "https://github.com/techrica/banking-app",
          },
          {
            id: 4,
            title: "ERP System",
            description:
              "Enterprise resource planning system for manufacturing companies.",
            technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
            category: "business",
            image: "https://via.placeholder.com/400x250/ef4444/ffffff",
            demoUrl: "https://erp.techrica.com",
            githubUrl: "https://github.com/techrica/erp-system",
          },
          {
            id: 5,
            title: "Food Delivery App",
            description:
              "Mobile application for food ordering and delivery tracking.",
            technologies: ["React Native", "Firebase", "Google Maps API"],
            category: "mobile",
            image: "https://via.placeholder.com/400x250/f59e0b/ffffff",
            demoUrl: "https://food.techrica.com",
            githubUrl: "https://github.com/techrica/food-delivery",
          },
          {
            id: 6,
            title: "Analytics Dashboard",
            description:
              "Real-time business analytics and data visualization platform.",
            technologies: ["React", "D3.js", "Node.js", "MongoDB"],
            category: "web",
            image: "https://via.placeholder.com/400x250/06b6d4/ffffff",
            demoUrl: "https://analytics.techrica.com",
            githubUrl: "https://github.com/techrica/analytics-dashboard",
          },
        ];
        setProjects(fallbackProjects);
        setFilteredProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilter = (filterId) => {
    setActiveFilter(filterId);
    if (filterId === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === filterId,
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>Our Projects</h1>
            <p className="hero-subtitle">
              Explore our portfolio of innovative digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid with Filters */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => handleFilter(filter.id)}>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="loading">Loading projects...</div>
          ) : filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <h3>No projects found for this category</h3>
              <p>Check back soon or view our other categories.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .projects-hero {
          padding: 160px 0 80px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
          text-align: center;
        }
        .projects-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          color: #cbd5e1;
        }
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 10px 24px;
          background: white;
          border: 2px solid var(--light-gray);
          border-radius: 30px;
          cursor: pointer;
          font-weight: 500;
          transition: var(--transition);
          color: var(--dark);
        }
        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .filter-btn.active {
          background-color: var(--primary);
          border-color: var(--primary);
          color: white;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        .loading {
          text-align: center;
          padding: 4rem;
          color: var(--gray);
          font-size: 1.1rem;
        }
        .no-projects {
          text-align: center;
          padding: 4rem;
          color: var(--gray);
        }
        .no-projects h3 {
          margin-bottom: 1rem;
          color: var(--dark);
        }
        @media (max-width: 768px) {
          .projects-hero {
            padding: 140px 0 60px;
          }
          .projects-hero h1 {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .filter-buttons {
            gap: 0.5rem;
          }
          .filter-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
