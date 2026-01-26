import { ArrowRight, Car, Search, Smartphone, Shield, CreditCard, MapPin, Users, Star, DollarSign, CheckCircle, FileText, MessageSquare, TrendingUp, Award, Zap, Lock, Globe, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLATFORM_URL } from '../config/platform';

export default function PlatformFeatures() {
  const coreFeatures = [
    {
      icon: <Car size={32} />,
      title: "Vehicle Management",
      description: "Comprehensive vehicle listing system with photos, specifications, availability calendars, and real-time status updates.",
      features: ["Photo galleries", "Detailed specifications", "Availability calendar", "Real-time status"]
    },
    {
      icon: <Search size={32} />,
      title: "Advanced Search",
      description: "Powerful search functionality with filters for location, dates, vehicle type, price range, and specific requirements.",
      features: ["Location-based search", "Date availability", "Vehicle categories", "Price filtering"]
    },
    {
      icon: <MapPin size={32} />,
      title: "Interactive Maps",
      description: "Integrated mapping system showing vehicle locations, pickup points, and coverage areas across South Africa.",
      features: ["Live location tracking", "Coverage areas", "Pickup points", "Route planning"]
    },
    {
      icon: <CreditCard size={32} />,
      title: "Secure Payments",
      description: "Multiple payment options including Stripe, PayFast, with secure processing and instant confirmations.",
      features: ["Stripe integration", "PayFast support", "Secure processing", "Instant confirmation"]
    },
    {
      icon: <Shield size={32} />,
      title: "Safety & Verification",
      description: "Multi-layer verification system for users and vehicles, including ID verification, vehicle inspections, and insurance coverage.",
      features: ["ID verification", "Vehicle inspections", "Insurance coverage", "Background checks"]
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Real-time Communication",
      description: "In-app messaging system between renters and hosts, with notifications and chat history.",
      features: ["In-app messaging", "Push notifications", "Chat history", "File sharing"]
    }
  ];

  const userFeatures = [
    {
      icon: <Users size={32} />,
      title: "User Profiles",
      description: "Comprehensive user profiles with verification status, reviews, ratings, and rental history.",
      features: ["Verification badges", "Review system", "Rental history", "Profile customization"]
    },
    {
      icon: <Star size={32} />,
      title: "Rating & Reviews",
      description: "Two-way rating system with detailed reviews, photos, and feedback for continuous improvement.",
      features: ["Two-way ratings", "Detailed reviews", "Photo feedback", "Quality assurance"]
    },
    {
      icon: <Award size={32} />,
      title: "Loyalty Program",
      description: "Rewards system for frequent users with discounts, priority access, and exclusive benefits.",
      features: ["Points system", "Tier rewards", "Exclusive discounts", "Priority booking"]
    }
  ];

  const technicalFeatures = [
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      description: "Native iOS and Android apps with full platform functionality, offline support, and push notifications.",
      features: ["iOS & Android apps", "Offline support", "Push notifications", "Biometric login"]
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Updates",
      description: "Live booking updates, availability changes, and instant notifications for all platform activities.",
      features: ["Live updates", "Instant notifications", "Real-time sync", "Activity tracking"]
    },
    {
      icon: <Lock size={32} />,
      title: "Security & Privacy",
      description: "Enterprise-grade security with data encryption, GDPR compliance, and privacy controls.",
      features: ["Data encryption", "GDPR compliance", "Privacy controls", "Security audits"]
    },
    {
      icon: <Globe size={32} />,
      title: "Scalable Infrastructure",
      description: "Cloud-based architecture with auto-scaling, CDN integration, and 99.9% uptime guarantee.",
      features: ["Auto-scaling", "CDN integration", "99.9% uptime", "Global deployment"]
    }
  ];

  const businessFeatures = [
    {
      icon: <TrendingUp size={32} />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for hosts and administrators with insights, trends, and performance metrics.",
      features: ["Revenue tracking", "Usage analytics", "Performance metrics", "Custom reports"]
    },
    {
      icon: <DollarSign size={32} />,
      title: "Dynamic Pricing",
      description: "AI-powered pricing optimization based on demand, seasonality, location, and market trends.",
      features: ["AI optimization", "Demand pricing", "Seasonal adjustments", "Market analysis"]
    },
    {
      icon: <FileText size={32} />,
      title: "Automated Paperwork",
      description: "Digital contracts, agreements, and document management with e-signature capabilities.",
      features: ["Digital contracts", "E-signatures", "Document storage", "Automated generation"]
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support with live chat, phone support, and comprehensive help center.",
      features: ["24/7 availability", "Live chat", "Phone support", "Help center"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Platform Features
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover the comprehensive features that make RideShare SA the leading 
            peer-to-peer car rental platform in South Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary-500 hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Try Platform Features
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 inline-flex items-center justify-center"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential functionality that powers our peer-to-peer car rental ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-8 group hover:shadow-xl transition-all duration-300">
                <div className="text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Experience Features */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              User Experience Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed to provide exceptional experiences for both renters and hosts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-primary-500">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {feature.features.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology for reliability, security, and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-1">
                  {feature.features.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-500">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Business & Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to grow your business and optimize operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="text-primary-500 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="text-green-500 mr-2" size={14} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">
              Platform Performance
            </h2>
            <p className="text-primary-100">
              Real numbers from our production platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">99.9%</div>
              <div className="text-primary-100">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">&lt;200ms</div>
              <div className="text-primary-100">Response Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">256-bit</div>
              <div className="text-primary-100">Encryption</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">24/7</div>
              <div className="text-primary-100">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of South Africans who are already using our platform 
            to rent and share cars safely and conveniently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              Start Using Platform
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center justify-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
