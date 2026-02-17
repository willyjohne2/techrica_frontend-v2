import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import hero_img_2 from "../../../assets/hero-img-2.png";
import { Link } from "react-router-dom";
import hero_img_1 from "../../../assets/hero-img-1.png";
const Hero = () => {
  return (
    <section className="min-h-screen relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4   w-60 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4   w-60 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <img
        src={hero_img_2}
        alt=""
        className="max-w-[10em] md:max-w-[20em] opacity-95 absolute top-20 left-0 "
      />
      <img
        src={hero_img_1}
        alt=""
        className="max-w-[25em] md:max-w-[30em] opacity-95 absolute -bottom-20 right-10 "
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-26  text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full mb-8 border border-green-500/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400 px-4">
            Government-Grade AI Security
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white">
          Revolutionising the World
          <br />
          Through <span className="text-green-400">Secure AI Systems</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          TECH.RICA builds intelligent, secure, and ethical AI solutions that
          automate repetitive work, empower human innovation, and meet
          government-grade trust standards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            to="/contact"
            className="px-8 py-4 bg-green-500 text-gray-950 rounded-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2 font-semibold"
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/projects"
            className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all border border-gray-700 inline-flex items-center justify-center"
          >
            Explore Our Solutions
          </Link>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl my-12 mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-900/20">
            <Shield className="w-10 h-10 text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Security-First AI
            </h3>
            <p className="text-gray-400 text-sm">
              AI systems built with data protection, compliance, and trust at
              the core.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-900/20">
            <Zap className="w-10 h-10 text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Intelligent Automation
            </h3>
            <p className="text-gray-400 text-sm">
              Eliminate repetitive tasks so teams focus on creativity and
              growth.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-green-900/20">
            <Users className="w-10 h-10 text-green-400 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Ethical & Responsible AI
            </h3>
            <p className="text-gray-400 text-sm">
              Human-centric AI that creates jobs, not replaces them.
            </p>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-gray-400 italic border-l-4 border-green-500 pl-4 text-left">
            "Our systems are designed for high-trust environments where
            security, transparency, and accountability are non-negotiable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
