import call_to_action_image from "../../../assets/call-to-action-image.png";

const CallToAction = () => {
  return (
    <section className="bg-green-600 text-white py-16 mt-[4em] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Grow Smarter with Modern Digital Solutions
        </h2>

        <p className="text-lg mb-4 max-w-2xl">
          We help businesses and individuals transform their ideas into
          powerful, scalable digital platforms. From web development and system
          design to cloud-powered solutions, our team delivers technology that
          drives real results.
        </p>

        <p className="text-lg mb-6 max-w-2xl">
          Whether you're starting a new project, improving an existing system,
          or exploring innovative tech solutions, Tech-Rica provides reliable
          expertise and forward-thinking strategies tailored to your needs.
        </p>

        <div className="space-y-2 text-base opacity-95">
          <p>✔ Custom web and mobile development</p>
          <p>✔ Scalable backend architecture</p>
          <p>✔ Cloud integration and deployment</p>
          <p>✔ Technical consulting and system optimization</p>
        </div>
      </div>

      <img
        src={call_to_action_image}
        alt="Call to Action"
        className="absolute hidden md:block right-18 bottom-0 max-w-[30em]"
      />
    </section>
  );
};

export default CallToAction;
