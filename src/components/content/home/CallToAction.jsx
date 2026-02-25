/*
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
*/

import call_to_action_image from "../../../assets/call-to-action-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faServer,
  faCloud,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden border-t border-green-900/20">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Grow Smarter with Modern Digital Solutions
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            We help businesses and individuals transform ideas into scalable,
            secure and high-performance digital platforms that drive real growth.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Whether you're launching a startup, scaling operations or modernizing
            systems, Techrica delivers reliable engineering and smart strategy.
          </p>

          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faGlobe} className="text-green-500 text-lg" />
              <span className="text-gray-300">Custom Web & Mobile Development</span>
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faServer} className="text-green-500 text-lg" />
              <span className="text-gray-300">Scalable Backend Systems</span>
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCloud} className="text-green-500 text-lg" />
              <span className="text-gray-300">Cloud Integration & Deployment</span>
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLightbulb} className="text-green-500 text-lg" />
              <span className="text-gray-300">Technical Consulting & Optimization</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          src={call_to_action_image}
          alt="Call to Action"
          className="hidden md:block w-full max-w-xl mx-auto"
        />
      </div>
    </section>
  );
};

export default CallToAction;
