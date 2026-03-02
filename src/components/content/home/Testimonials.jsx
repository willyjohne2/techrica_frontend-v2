/*
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
*/

{/* import bgImage from "../../../assets/testimonial-bg.jpg"; // optional background image */}

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, TechCorp",
    testimonial:
      "Tech Rica delivered a secure and scalable system that completely transformed our digital operations. Their professionalism and technical depth are outstanding."
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO, InnovateX",
    testimonial:
      "Their AI-driven solutions improved efficiency across all our departments. Excellent execution, clean architecture, and timely delivery."
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "IT Director, SecureTech",
    testimonial:
      "One of the most reliable technology partners we have worked with. Strong security focus and excellent system design."
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Operations Lead, DataGuard",
    testimonial:
      "Tech Rica exceeded expectations. Their solutions are powerful, user-friendly, and highly scalable."
  },
  {
    id: 5,
    name: "Daniel Otieno",
    title: "Founder, Nexa Solutions",
    testimonial:
      "The business automation system they built helped us scale rapidly and manage operations seamlessly."
  },
  {
    id: 6,
    name: "Sarah Kim",
    title: "Product Manager, CloudNet",
    testimonial:
      "Exceptional UI/UX combined with powerful backend systems. The quality of work is truly impressive."
  }
];

const Testimonials = () => {
  return (
    /*
    <section
      className="relative py-28 px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
    */
   <section className="relative py-28 px-4 bg-linear-to-br from-slate-950 via-slate-900 to-black">
      {/* Dark overlay for readability */}
      {/*<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>*/}

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Trusted by innovative companies worldwide for secure, scalable and
          intelligent digital solutions.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-full text-green-400 font-bold text-lg">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-green-400 text-sm">{t.title}</p>
                </div>
              </div>

              <p className="text-gray-200 text-sm leading-relaxed">
                “{t.testimonial}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
