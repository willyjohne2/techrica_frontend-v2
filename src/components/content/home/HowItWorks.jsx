/*
import h1 from "../../../assets/h1.gif";
import h2 from "../../../assets/h2.gif";
import h3 from "../../../assets/h3.gif";

const howItWorksData = [
  {
    step: 1,
    title: "Research & Planning",
    description: "We conduct thorough research and plan the project scope.",
    image: h1
  },
  {
    step: 2,
    title: "Design & Development",
    description: "Our team designs and develops the solution.",
    image: h2
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description: "We test thoroughly and deploy the final product.",
    image: h3
  }
]

const HowItWorks = () => {
  return (
    <section className="min-h-125 my-18 mx-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
        How It Works
      </h2>

      <div className="flex justyfy-center items-start gap-8 flex-wrap">
        <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {howItWorksData.map((item) => (
            <div key={item.step} className="bg-black border border-green-500 p-6 rounded-lg shadow-md ">
              <img
                src={item.image}
                alt={`Step ${item.step}`}
                className="w-full h-48 object-cover mb-4 rounded opacity-40"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
*/

import h1 from "../../../assets/h1.gif";
import h2 from "../../../assets/h2.gif";
import h3 from "../../../assets/h3.gif";

const howItWorksData = [
  {
    step: 1,
    title: "Research & Planning",
    description: "We analyze your requirements, research the best approaches, and plan the project roadmap.",
    image: h1
  },
  {
    step: 2,
    title: "Design & Development",
    description: "We design intuitive interfaces and develop scalable, high-performance solutions.",
    image: h2
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description: "We rigorously test, optimize, and deploy your product for production use.",
    image: h3
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-950 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-500">
        How It Works
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {howItWorksData.map((item) => (
          <div
            key={item.step}
            className="bg-linear-to-br from-slate-900 to-slate-950 border border-green-900/40 p-6 rounded-2xl shadow-lg hover:shadow-green-500/10 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-6 rounded-xl opacity-80"
            />

            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
