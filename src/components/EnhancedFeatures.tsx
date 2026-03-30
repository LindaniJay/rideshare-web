import { Car, Shield, CreditCard, Users, Zap, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnhancedFeatures() {
  const features = [
    {
      icon: <Car size={28} />,
      title: "Browse local cars",
      description: "Explore cars from nearby owners with clear details and photos.",
      highlight: "All makes & models",
    },
    {
      icon: <Shield size={28} />,
      title: "Trust-first design",
      description: "ID verification, driver's licence checks, and clear safety policies.",
      highlight: "Peace of mind",
    },
    {
      icon: <Zap size={28} />,
      title: "Simple booking",
      description: "Reserve in a few steps and coordinate pickup with the host.",
      highlight: "Fast to book",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Secure payments",
      description: "Upfront totals processed through the platform with clear receipts.",
      highlight: "Transparent pricing",
    },
    {
      icon: <Users size={28} />,
      title: "Host with confidence",
      description: "Set your availability, pricing, and rent on your own schedule.",
      highlight: "You stay in control",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Easy coordination",
      description: "In-platform messaging to arrange pickup details and questions.",
      highlight: "Clear communication",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Everything you need for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              {" "}peer-to-peer rentals
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for a smooth experience — whether you're renting or hosting.
          </p>
        </div>

        {/* Feature Grid - 6 cards in 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>

                <h3 className="text-lg font-bold font-heading text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>

                <div className="flex items-center space-x-2 text-primary-600 font-semibold text-sm">
                  <CheckCircle size={16} />
                  <span>{feature.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links to detail pages */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/for-renters" className="btn-outline inline-flex items-center justify-center">
            For Renters
            <ArrowRight className="ml-2" size={18} />
          </Link>
          <Link to="/for-hosts" className="btn-outline inline-flex items-center justify-center">
            For Hosts
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
