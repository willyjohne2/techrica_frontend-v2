import TestimonialCard from "../../ui/TestimonialCard"
const testimonialsData = [
  {
    id: 1,
    imgage: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "John Doe",
        title: "CEO, TechCorp",
        testimonial: "Tech Rica's security design has transformed our approach to cybersecurity. Their expertise and innovative solutions have significantly enhanced our defenses against cyber threats."  
    },
    {
      id: 2,
        imgage: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Jane Smith",
        title: "CTO, InnovateX",
        testimonial: "The security solutions provided by Tech Rica have been instrumental in protecting our digital assets. Their proactive approach and deep expertise in cybersecurity have given us peace of mind."  
    },
    {
      id: 3,
        imgage: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Michael Johnson",
        title: "CISO, SecureTech",
        testimonial: "Tech Rica's security design has been a game-changer for our organization. Their comprehensive approach to cybersecurity has helped us mitigate risks and safeguard our critical data."  
  },
  {
    id: 4,
        imgage: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Emily Davis",
        title: "Head of IT, DataGuard",
        testimonial: "Tech Rica's security design has exceeded our expectations. Their innovative solutions and commitment to excellence have significantly improved our cybersecurity posture."  
  }
]

const Testimonials = () => {
  return (
    <section className="min-h-screen my-[5em] px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">What Our Clients Say</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {
            testimonialsData.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                image={testimonial.imgage}
                name={testimonial.name}
                title={testimonial.title}
                testimonial={testimonial.testimonial}
              />
            ))}
              </div>
            </div>
    </section>
  )
}

export default Testimonials
