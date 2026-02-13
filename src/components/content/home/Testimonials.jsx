const testimonialsData = [
  {
        id: 1,
        name: "John Doe",
        title: "CEO, TechCorp",
        testimonial: "Tech Rica's security design has transformed our approach to cybersecurity. Their expertise and innovative solutions have significantly enhanced our defenses against cyber threats."  
    },
    {
        id: 2,
        name: "Jane Smith",
        title: "CTO, InnovateX",
        testimonial: "The security solutions provided by Tech Rica have been instrumental in protecting our digital assets. Their proactive approach and deep expertise in cybersecurity have given us peace of mind."  
    },
    {
        id: 3,
        name: "Michael Johnson",
        title: "CISO, SecureTech",
        testimonial: "Tech Rica's security design has been a game-changer for our organization. Their comprehensive approach to cybersecurity has helped us mitigate risks and safeguard our critical data."  
    }
]

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">What Our Clients Say</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                  {
                      testimonialsData.map((item) => (
                            <div key={item.id} className="bg-slate-800 p-4 min-h-[10em] rounded-lg">
                              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                              <p className="text-gray-300 italic">{item.title}</p>
                              <p className="text-gray-300 mt-2">"{item.testimonial}"</p>
                            </div>
                      ))}
              </div>
            </div>
    </section>
  )
}

export default Testimonials
