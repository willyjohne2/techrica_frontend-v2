
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      <style jsx>{`
        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          height: 100%;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .project-image {
          height: 200px;
          overflow: hidden;
        }
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        .project-info {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--dark);
        }
        .project-description {
          color: var(--gray);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          background-color: var(--light);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid var(--light-gray);
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-links .btn {
          padding: 8px 20px;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .project-links {
            flex-direction: column;
          }
          .project-links .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
