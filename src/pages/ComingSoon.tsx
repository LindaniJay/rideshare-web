import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/ChatGPT Image Jan 27, 2026, 09_43_18 AM.png';

export default function ComingSoon() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="glass-card-dark p-10 text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/20 bg-white/10">
            <img src={brandLogo} alt="RideShare SA logo" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3">Coming Soon</h1>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            The RideShare SA platform is launching soon. We’re currently preparing our MVP and onboarding early hosts and renters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <Mail size={18} />
              Join the waitlist
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Back to home
            </Link>
          </div>

          <div className="mt-8 text-sm text-white/70">
            Tip: You can still explore the website while we launch.
          </div>
        </div>
      </div>
    </div>
  );
}
