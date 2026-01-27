import { Shield, IdCard, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SafetySummary() {
  const bullets = [
    { icon: <IdCard size={18} />, text: 'Verification-first onboarding' },
    { icon: <Shield size={18} />, text: 'Clear policies and safety guidance' },
    { icon: <MapPin size={18} />, text: 'Clear pickup/return expectations' },
    { icon: <Mail size={18} />, text: 'Support via email when you need help' },
  ];

  return (
    <section className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              How we keep you safe
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Trust and safety are built into every step — from verification to support.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3 text-gray-700">
                  <div className="mt-0.5 text-primary-600">{b.icon}</div>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/safety" className="btn-outline inline-flex items-center justify-center">
                View full safety details
              </Link>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="text-sm font-semibold text-primary-600 mb-2">Learn more</div>
            <div className="text-gray-700 leading-relaxed">
              See how verification, insurance, and support work during a rental.
            </div>
            <div className="mt-6">
              <Link to="/safety" className="btn-primary inline-flex items-center justify-center">
                Safety details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
