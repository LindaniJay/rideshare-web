import { ArrowRight, MapPin, Users, Mail, Award, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnhancedHero() {
  const stats = [
    { value: "Cape Town", label: "Available in", icon: <MapPin size={20} /> },
    { value: "Trusted", label: "Community", icon: <Users size={20} /> },
    { value: "Clear", label: "Pricing", icon: <Award size={20} /> },
    { value: "Email", label: "Support", icon: <Mail size={20} /> },
  ];

  const features = [
    { icon: <Zap size={24} />, title: "Easy Booking", description: "Simple and quick reservation process" },
    { icon: <Shield size={24} />, title: "Safe & Secure", description: "Protected transactions and support" },
    { icon: <Award size={24} />, title: "Great Value", description: "Competitive rates and offers" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="text-yellow-300" size={16} />
            <span className="text-white font-medium text-sm">Peer-to-peer car rentals</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 animate-slide-up">
            <span className="block">Rent Cars from</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-accent-400">
              Local Owners
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
            Experience the future of car rental in South Africa. 
            Rent from local owners while supporting your community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up delay-400">
            <Link
              to="/coming-soon"
              className="group bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <span>Start Renting Now</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
            <Link
              to="/how-it-works"
              className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>See How It Works</span>
              <div className="w-5 h-5 rounded-full border-2 border-current group-hover:scale-110 transition-transform"></div>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in delay-600">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-3 text-yellow-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto animate-scale-in delay-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 text-white">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center">
                    <div className="text-yellow-300">{feature.icon}</div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{feature.title}</div>
                    <div className="text-sm text-white/80">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-white/90 animate-fade-in delay-1000">
            <div className="font-semibold">Live in Cape Town now</div>
            <div className="text-sm text-white/80">More South African cities coming soon.</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
