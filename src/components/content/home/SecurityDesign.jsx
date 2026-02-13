import {
  Shield,
  Lock,
  Eye,
  FileCheck,
  Database,
  CheckCircle,
} from "lucide-react";

export function Security() {
  const securityFeatures = [
    {
      icon: Database,
      title: "Secure Data Handling",
      description:
        "End-to-end encryption for all data in transit and at rest with enterprise-grade security protocols.",
    },
    {
      icon: Lock,
      title: "Privacy-First Architecture",
      description:
        "Built with privacy by design principles. Your data stays yours, always.",
    },
    {
      icon: FileCheck,
      title: "Compliance-Aware Systems",
      description:
        "Pre-configured for GDPR, HIPAA, SOC 2, and other regulatory requirements.",
    },
    {
      icon: Eye,
      title: "Continuous Risk Evaluation",
      description:
        "Real-time monitoring and assessment of security threats and vulnerabilities.",
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full mb-6 border border-green-500/20">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400">
              Government-Grade Protection
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">
            Security <span className="text-green-400">by Design</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            TECH.RICA integrates security at every layer of AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-950/50 backdrop-blur-sm rounded-xl p-8 border border-green-900/20 hover:border-green-500/30 transition-all">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-2xl text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Designed For */}
        <div className="bg-linear-to-br from-green-950/30 to-gray-950/30 rounded-2xl p-12 border border-green-500/20">
          <h3 className="text-3xl text-white mb-8 text-center">
            Designed For High-Trust Environments
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl text-white mb-2">
                Financial Institutions
              </h4>
              <p className="text-gray-400">
                Banking-grade security for sensitive financial data and
                transactions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl text-white mb-2">Government Systems</h4>
              <p className="text-gray-400">
                Compliance with national security and data sovereignty
                requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl text-white mb-2">
                High-Risk Environments
              </h4>
              <p className="text-gray-400">
                Healthcare, legal, and critical infrastructure protection
              </p>
            </div>
          </div>
        </div>

        {/* Security Commitment */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Security isn't an afterthought—it's the foundation of everything we
            build. Every line of code, every model, every deployment is designed
            with security first.
          </p>
        </div>
      </div>
    </section>
  );
}
