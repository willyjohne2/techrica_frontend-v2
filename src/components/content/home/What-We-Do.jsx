/*
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
*/


import { services } from "../../../constants/services";
import what_we_do_img from "../../../assets/img-1.png";
import what_we_do_img_2 from "../../../assets/img-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBuilding,
  faIndustry,
  faUniversity,
  faLandmark
} from "@fortawesome/free-solid-svg-icons";

const WhatWeDo = () => {
  return (
    <section className="relative bg-slate-950 px-4 py-28 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-green-500">
        What We Do
      </h2>

      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
        {/* Services Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-900/30 hover:border-green-600/50 transition"
            >
              <h1 className="text-3xl mb-3 text-green-500">
                {service.icon}
              </h1>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <img
          src={what_we_do_img}
          alt="What We Do"
          className="hidden md:block w-full max-w-lg mx-auto"
        />
      </div>

      {/* Who We Serve */}
      <div className="max-w-7xl mx-auto mt-20 bg-slate-900/60 backdrop-blur rounded-2xl p-10 border border-green-900/30">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          Who We Serve
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { icon: faRocket, title: "Startups", desc: "Product launches & rapid scaling" },
            { icon: faBuilding, title: "SMEs", desc: "Operational automation & growth" },
            { icon: faIndustry, title: "Enterprises", desc: "System modernization" },
            { icon: faUniversity, title: "Institutions", desc: "Digital transformation" },
            { icon: faLandmark, title: "Governments", desc: "Secure public platforms" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-green-900/30 rounded-xl p-6 text-center hover:border-green-600/50 transition"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-3xl text-green-500 mb-4"
              />
              <h4 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <img
        src={what_we_do_img_2}
        alt="Decor"
        className="hidden md:block absolute -bottom-20 right-0 max-w-xs opacity-60"
      />
    </section>
  );
};

export default WhatWeDo;
