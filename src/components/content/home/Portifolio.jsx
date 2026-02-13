const sampleProjects = [
  {
        id: 1,
        title: "Project Alpha",
        description: "A comprehensive security design for a financial institution, ensuring robust protection against cyber threats and compliance with industry regulations."
    },
    {
        id: 2,
        title: "Project Beta",
        description: "A tailored security architecture for a healthcare organization, safeguarding sensitive patient data and ensuring HIPAA compliance."
    },
    {
        id: 3,
        title: "Project Gamma",
        description: "An innovative security solution for a technology company, implementing cutting-edge technologies to protect intellectual property and customer data."
    }
]

const Portifolio = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Our Portfolio</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                  {
                      sampleProjects.map((project) => (
                          <div key={project.id} className="bg-slate-800 p-4 min-h-[10em] rounded-lg">
                              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                              <p className="text-gray-300 mt-2">{project.description}</p>
                          </div>
                      ))  
                  }
              </div>
            </div>
    </section>
  )
}

export default Portifolio
