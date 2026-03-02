const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500/40">
      
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        {/* Soft overlay (not heavy) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-slate-800 text-green-400 border border-green-500/40 rounded-lg text-sm font-semibold hover:bg-slate-700 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;