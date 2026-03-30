import { ArrowRight, Shield, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLATFORM_URL } from '../config/platform';

export default function EnhancedHero() {
  const trustBadges = [
    { icon: <Shield size={18} />, label: "Verified Users" },
    { icon: <Zap size={18} />, label: "Instant Booking" },
    { icon: <MapPin size={18} />, label: "Live in Cape Town" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-heading text-white mb-6 animate-slide-up">
            <span className="block">Rent Cars from</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-400">
              Local Owners
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            South Africa's peer-to-peer car rental marketplace.
            Affordable rates, trusted owners, flexible pickups.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-400">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3"
            >
              <span>Browse Cars</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
            <Link
              to="/how-it-works"
              className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>How It Works</span>
            </Link>
          </div>

          {/* Trust Badges - compact row */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-600">
            {trustBadges.map((badge, index) => (
              <div key={index} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
                <div className="text-white">{badge.icon}</div>
                <span className="text-white text-sm font-medium">{badge.label}</span>
              </div>
            ))}
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
