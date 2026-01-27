import { Car, Shield, CreditCard, MapPin, Users, DollarSign, Zap, Award, CheckCircle, MessageSquare } from 'lucide-react';

export default function EnhancedFeatures() {
  const categories = [
    {
      title: "For Renters",
      description: "Everything you need for a smooth peer-to-peer rental",
      features: [
        {
          icon: <Car size={32} />,
          title: "Browse local cars",
          description: "Explore cars from nearby owners with clear details and photos so you can book confidently.",
          highlight: "All makes & models"
        },
        {
          icon: <Shield size={32} />,
          title: "Trust-first rentals",
          description: "Built around safety, verification, clear policies, and support when you need it.",
          highlight: "Peace of mind"
        },
        {
          icon: <Zap size={32} />,
          title: "Simple booking",
          description: "Reserve in a few steps and coordinate pickup details with the host.",
          highlight: "Fast to book"
        },
        {
          icon: <CreditCard size={32} />,
          title: "Clear pricing",
          description: "Upfront totals with a clean checkout experience and simple receipts.",
          highlight: "Transparent totals"
        }
      ]
    },
    {
      title: "For Hosts",
      description: "Turn your car into a money-making asset",
      features: [
        {
          icon: <DollarSign size={32} />,
          title: "Earn Monthly Income",
          description: "Make additional income renting out your car when not in use",
          highlight: "Passive income"
        },
        {
          icon: <Users size={32} />,
          title: "Control your availability",
          description: "Set availability around your schedule and decide when your car is listed.",
          highlight: "You stay in control"
        },
        {
          icon: <Shield size={32} />,
          title: "Protection & support",
          description: "Trust-first policies and support designed to help you host with confidence.",
          highlight: "Hosted with confidence"
        },
        {
          icon: <MessageSquare size={32} />,
          title: "Messaging",
          description: "Coordinate pickups and questions with clear communication.",
          highlight: "Easy coordination"
        }
      ]
    }
  ];

  const techFeatures = [
    {
      icon: <Zap size={40} />,
      title: "Instant Booking",
      description: "A streamlined booking flow designed to keep things simple"
    },
    {
      icon: <CreditCard size={40} />,
      title: "Secure Payments",
      description: "Payments handled through the platform with clear totals and receipts"
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Messaging",
      description: "Coordinate pickup details and questions with the host"
    },
    {
      icon: <MapPin size={40} />,
      title: "Cape Town-first rollout",
      description: "Available in Cape Town now — expanding to more cities next"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <Award size={16} />
            <span className="font-semibold text-sm">PLATFORM FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            Everything You Need for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              {" "}Peer-to-Peer Rentals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for a smooth rental experience with clear pricing, better coordination, and trust-first design.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {feature.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Highlight */}
                      <div className="flex items-center space-x-2 text-primary-600 font-semibold text-sm">
                        <CheckCircle size={16} />
                        <span>{feature.highlight}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Built for simplicity
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical features that help hosts and renters coordinate confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="text-xl font-bold font-heading mb-3">{feature.title}</h4>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rollout note */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-3">Cape Town now</div>
            <div className="text-white/90 text-lg">
              We’re expanding into more cities as the community grows.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
