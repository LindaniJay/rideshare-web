import { Car, Shield, Smartphone, CreditCard, MapPin, Users, DollarSign, Zap, Award, HeadphonesIcon, TrendingUp, CheckCircle } from 'lucide-react';

export default function EnhancedFeatures() {
  const categories = [
    {
      title: "For Renters",
      description: "Everything you need for the perfect rental experience",
      features: [
        {
          icon: <Car size={32} />,
          title: "Premium Vehicle Selection",
          description: "Choose from a wide variety of verified vehicles - from economy cars to luxury SUVs",
          highlight: "All makes & models"
        },
        {
          icon: <Shield size={32} />,
          title: "Complete Protection",
          description: "24/7 roadside assistance and comprehensive insurance coverage",
          highlight: "Zero risk guarantee"
        },
        {
          icon: <Smartphone size={32} />,
          title: "Digital Experience",
          description: "Book, manage, and unlock cars entirely from your smartphone",
          highlight: "Keyless entry"
        },
        {
          icon: <DollarSign size={32} />,
          title: "Transparent Pricing",
          description: "No hidden fees. See exactly what you pay before booking",
          highlight: "Best price guarantee"
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
          icon: <Shield size={32} />,
          title: "Full Insurance Coverage",
          description: "Your car is fully insured during every rental period",
          highlight: "Comprehensive coverage"
        },
        {
          icon: <Users size={32} />,
          title: "Vetted Renters",
          description: "All renters undergo ID verification and background checks",
          highlight: "Verified community"
        },
        {
          icon: <TrendingUp size={32} />,
          title: "Smart Pricing",
          description: "AI-powered pricing to maximize your earnings based on demand",
          highlight: "Auto-optimization"
        }
      ]
    }
  ];

  const techFeatures = [
    {
      icon: <Zap size={40} />,
      title: "Instant Booking",
      description: "Book a car in under 60 seconds with our streamlined process"
    },
    {
      icon: <MapPin size={40} />,
      title: "GPS Tracking",
      description: "Real-time vehicle tracking and geofencing for security"
    },
    {
      icon: <CreditCard size={40} />,
      title: "Secure Payments",
      description: "Multiple payment options with bank-level encryption"
    },
    {
      icon: <HeadphonesIcon size={40} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support via phone, chat, and email"
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
              {" "}Perfect Car Sharing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most comprehensive car sharing platform in South Africa, 
            designed with cutting-edge technology and user-centric features.
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
              Cutting-Edge Technology
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powered by innovation, built for reliability and security
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

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">99.9%</div>
              <div className="text-white/90">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">&lt;200ms</div>
              <div className="text-white/90">Response Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">256-bit</div>
              <div className="text-white/90">Encryption</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-2">24/7</div>
              <div className="text-white/90">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
