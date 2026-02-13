import { services } from "../../../constants/services"

const WhatWeDo = () => {
  return (
      <section className="min-h-screen bg-slate-950 px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">What We Do</h2>
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
       
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-900/20">
          <h3 className="text-2xl text-white mb-6 text-center">Who We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
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
    </section>
  )
}

export default WhatWeDo
