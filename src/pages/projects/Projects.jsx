import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import solutionImage from "../../assets/solution-header.jpg";

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
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
            demoUrl: "https://demo.techrica.com",
            githubUrl: " https://github.com/floppy-piece/Unicrib",
          },
          {
            id: 2,
            title: "AI Chat Assistant",
            description:
              "Intelligent customer support chatbot with natural language processing.",
            technologies: ["Python", "TensorFlow", "React", "FastAPI"],
            category: "ai",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
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
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
            demoUrl: "https://bank.techrica.com",
            githubUrl: "https://github.com/techrica/banking-app",
          },
          {
            id: 4,
            title: "Business Management System",
            description:
              "An all-in-one ERP system for managing inventory, sales, employees, reports, and finances for SMEs.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
            category: "business",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
            demoUrl: "https://bms.techrica.com",
            githubUrl: "https://github.com/techrica/business-management-system",
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
  <div className="bg-[#020617] min-h-screen">
      {/* Hero Section */}
      {/*}
      <section
        className="py-40 md:py-32 text-center text-white bg-linear-to-r from-green-900 to-green-700"
        style={{
          backgroundImage: `url(${solutionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-4xl font-bold mb-6">
            SOLUTIONS AND WORKFLOW
          </h1>
          <p className="text-lg md:text-base max-w-xl mx-auto text-green-100">
            Explore our portfolio of innovative digital solutions
          </p>
        </div>
      </section>
      */}

      <section
        className="relative py-36 md:py-32 text-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${solutionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/70 to-green-900/70"></div>

        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Solutions & Workflow
          </h1>
          <p className="text-lg md:text-base max-w-xl mx-auto text-green-200 leading-relaxed">
            Discover how we transform ideas into powerful digital solutions through
            innovation, precision, and creativity.
          </p>
        </div>
      </section>

      {/* Projects Grid with Filters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          {/*
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilter(filter.id)}
                className={`px-6 py-2 rounded-full border-2 font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-green-600 border-green-600 text-white"
                    : "bg-white border-gray-300 text-gray-800 hover:border-green-600 hover:text-green-600"
                }`}>
                {filter.label}
              </button>
            ))}
          </div>
          */}

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-green-600 text-white shadow-lg scale-105"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-16 text-gray-500 text-lg">
              Loading projects...
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found for this category
              </h3>
              <p>Check back soon or view our other categories.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
