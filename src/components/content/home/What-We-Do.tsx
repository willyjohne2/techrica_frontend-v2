import { services } from "../../../constants/services"

const WhatWeDo = () => {
  return (
      <section className="min-h-screen bg-slate-950 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                  {
                    services.map((service, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 mb-6">
                            <h1 className="text-3xl mb-4">{ service.icon }</h1>
                          <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                          <p className="text-gray-300">{service.description}</p>
                      </div>
                    ))}
              </div>
              <div className="flex-1 relative">
                <img src="./what_we_do.png" alt="What We Do" className="w-full absolute max-w-4xl -top-12 -left-7 mx-auto mt-8" />  
              </div>
        </div>  
    </section>
  )
}

export default WhatWeDo
