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
