import { ArrowRight, Car, Search, Shield, CreditCard, MapPin, Users, DollarSign, CheckCircle, MessageSquare, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlatformFeatures() {
  const coreFeatures = [
    {
      icon: <Car size={32} />,
      title: "Vehicle Management",
      description: "List vehicles with photos, key details, and availability — so renters can find the right match fast.",
      features: ["Photo galleries", "Key vehicle details", "Availability", "Clear pickup details"]
    },
    {
      icon: <Search size={32} />,
      title: "Advanced Search",
      description: "Find cars by location, dates, and needs — designed for quick decision-making.",
      features: ["Location search", "Date filters", "Vehicle categories", "Clear pricing"]
    },
    {
      icon: <MapPin size={32} />,
      title: "Interactive Maps",
      description: "See pickup areas and meet-up locations in a way that keeps coordination simple.",
      features: ["Pickup areas", "Meet-up points", "Local availability", "Clear directions"]
    },
    {
      icon: <CreditCard size={32} />,
      title: "Secure Payments",
      description: "Payments are handled through the platform to keep bookings clear and accountable.",
      features: ["Secure checkout", "Transparent pricing", "Receipts", "Clear cancellation rules"]
    },
    {
      icon: <Shield size={32} />,
      title: "Safety & Verification",
      description: "Trust-first onboarding and clear rules designed to keep hosts and renters protected.",
      features: ["Identity checks", "License checks", "Clear policies", "Support when needed"]
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Real-time Communication",
      description: "Message hosts and renters to confirm pickup details, handover, and questions.",
      features: ["Messaging", "Pickup coordination", "Clear expectations", "Issue reporting"]
    }
  ];

  const userFeatures = [
    {
      icon: <Users size={32} />,
      title: "User Profiles",
      description: "Profiles help both sides understand who they're dealing with and what to expect.",
      features: ["Verification status", "Basic profile details", "Clear rules", "Help & support"]
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Support",
      description: "A platform built around clear policies, verification, and support — without relying on hype.",
      features: ["Verification-first", "Clear policies", "Issue escalation", "Customer support"]
    },
    {
      icon: <DollarSign size={32} />,
      title: "Host Earnings",
      description: "Hosts can track earnings and plan availability around their schedule.",
      features: ["Earnings visibility", "Flexible availability", "Payout tracking", "Pricing guidance"]
    }
  ];

  const technicalFeatures = [
    {
      icon: <Lock size={32} />,
      title: "Security & Privacy",
      description: "Designed to protect user data and reduce fraud risks.",
      features: ["Secure handling", "Privacy-first", "Abuse prevention", "Account controls"]
    },
    {
      icon: <Shield size={32} />,
      title: "Verification-first",
      description: "Trust and verification are central to how the marketplace operates.",
      features: ["Identity checks", "License checks", "Clear handover rules", "Support"]
    }
  ];

  const businessFeatures = [
    {
      icon: <DollarSign size={32} />,
      title: "Host Tools",
      description: "Simple tools to help hosts price, schedule, and manage bookings.",
      features: ["Availability", "Pricing guidance", "Earnings tracking", "Booking management"]
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Support & Resolution",
      description: "Clear communication and a path to resolve issues if something goes wrong.",
      features: ["In-platform messaging", "Documentation", "Issue escalation", "Email support"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center motion-safe:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Platform Features
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            A clear look at how RideShare SA supports peer-to-peer car rentals — starting in Cape Town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/coming-soon"
              className="btn-primary bg-none bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Go to Platform
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 inline-flex items-center justify-center"
            >
              Join our community
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
              Built for trust
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Practical choices focused on safety, privacy, and a smooth rental experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Host-friendly tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed to help hosts manage rentals confidently.
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

      {/* CTA Section */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the RideShare SA community in Cape Town — and help shape the rollout to new cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/coming-soon"
              className="btn-primary inline-flex items-center justify-center"
            >
              Go to Platform
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center justify-center"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
