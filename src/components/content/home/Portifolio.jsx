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
    <section className="min-h-screen bg-slate-950 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Our Portfolio</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
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
    </section>
  )
}

export default Portifolio
