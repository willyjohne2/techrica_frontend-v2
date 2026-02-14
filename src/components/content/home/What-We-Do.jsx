import { services } from "../../../constants/services";
import what_we_do_img from "../../../assets/img-1.png";
import what_we_do_img_2 from "../../../assets/img-2.png";
const WhatWeDo = () => {
  return (
      <section className="min-h-screen relative bg-slate-950 px-4 py-[15em] ">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">What We Do</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                  {
                    services.map((service, index) => (
                        <div key={index} className="bg-white/10 z-40 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 mb-6">
                            <h1 className="text-3xl mb-4">{ service.icon }</h1>
                          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                          <p className="text-gray-300">{service.description}</p>
                      </div>
                    ))}
              </div>
              <img src={what_we_do_img} alt="What We Do" className="w-full max-w-[20em] hidden md:block md:max-w-[30em] top-12 -left-7 mx-auto mt-8 absolute" />
          </div>  
       
        <div className="bg-gray-900/50 z-40 backdrop-blur-sm rounded-2xl p-8 border border-green-900/20">
          <h3 className="text-2xl text-white mb-6 text-center">Who We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center ">
            <div className="py-4">
              <p className="text-gray-300">Startups</p>
              <p className="text-sm text-gray-500">Scaling operations</p>
            </div>
            <div className="py-4">
              <p className="text-gray-300">SMEs</p>
              <p className="text-sm text-gray-500">Improving efficiency</p>
            </div>
            <div className="py-4">
              <p className="text-gray-300">Enterprises</p>
              <p className="text-sm text-gray-500">Modernizing workflows</p>
            </div>
            <div className="py-4">
              <p className="text-gray-300">Financial Institutions</p>
              <p className="text-sm text-gray-500">Managing risk</p>
            </div>
            <div className="py-4">
              <p className="text-gray-300">Governments</p>
              <p className="text-sm text-gray-500">Deploying trusted AI</p>
            </div>
        </div>
      </div>
      <img src={what_we_do_img_2} alt="What We Do" className="w-full max-w-[20em] -bottom-20 right-0 md:right-130 mx-auto mt-8 z-10 absolute" />
    </section>
  )
}

export default WhatWeDo
