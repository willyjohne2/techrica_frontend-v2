import call_to_action_image from "../../../assets/call-to-action-image.png";

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white py-12 mt-[4em] relative">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-start">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Join thousands of satisfied users today.</p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
      <img src={call_to_action_image} alt="Call to Action" className="absolute hidden md:block  right-18 bottom-0 max-w-[30em]  " />
    </section>
  )
}

export default CallToAction
