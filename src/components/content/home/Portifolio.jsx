/*
import portfolio_image from "../../../assets/portifolio-image.png";
const sampleProjects = [
  {
        id: 1,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title: "Project Alpha",
        description: "A comprehensive security design for a financial institution, ensuring robust protection against cyber threats and compliance with industry regulations."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title: "Project Beta",
        description: "A tailored security architecture for a healthcare organization, safeguarding sensitive patient data and ensuring HIPAA compliance."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        title: "Project Gamma",
        description: "An innovative security solution for a technology company, implementing cutting-edge technologies to protect intellectual property and customer data."
    }
]

const Portifolio = () => {
  return (
    <section className="min-h-screen relative bg-slate-950 px-4 py-12">
      <img src={portfolio_image} alt="Portfolio" className="absolute hidden md:block left-0 bottom-0 max-w-[32em]  " />
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Our Portfolio</h2>
      <div className="flex justify-between">
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-2">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                  {
                    sampleProjects.map((project) => (
                        <div key={project.id} className="bg-slate-800 p-4 min-h-[20em] rounded-lg">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <p className="text-gray-300 mt-2">{project.description}</p>
                        </div>
                    ))  
                  }
              </div>
        </div>
            </div>
    </section>
  )
}

export default Portifolio
*/

import portfolio_image from "../../../assets/portifolio-image.png";

const sampleProjects = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=60",
    title: "Enterprise Business Management System",
    description:
      "A scalable business automation platform for operations, finance, reporting, and workflow optimization."
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    title: "Secure E-Commerce Platform",
    description:
      "A modern online store with secure payments, real-time inventory, analytics, and customer experience optimization."
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60",
    title: "AI Customer Support System",
    description:
      "Intelligent chatbot and support automation system to improve response time and customer satisfaction."
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
    title: "Smart Analytics Dashboard",
    description:
      "Real-time business intelligence dashboard with predictive insights and performance monitoring."
  }
];

const Portifolio = () => {
  return (
    <section className="bg-slate-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 text-green-400">
          Our Portfolio
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          A showcase of high-impact digital solutions engineered for performance,
          security, scalability, and business growth.
        </p>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Image */}
          <div className="hidden lg:block lg:col-span-4">
            <img
              src={portfolio_image}
              alt="Portfolio Illustration"
              className="w-full max-w-md mx-auto opacity-80"
            />
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2">
            {sampleProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portifolio;
