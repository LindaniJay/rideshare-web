import { Link } from 'react-router-dom';
import brandLogo from '../assets/ChatGPT Image Jan 27, 2026, 09_43_18 AM.png';
import { PLATFORM_URL } from '../config/platform';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'For Renters', path: '/for-renters' },
    { name: 'For Hosts', path: '/for-hosts' },
    { name: 'Safety', path: '/safety' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/10 shadow-lg">
                <img src={brandLogo} alt="RideShare SA logo" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div className="text-2xl font-bold font-heading">RideShare SA</div>
                <div className="text-sm text-gray-400 font-body">Peer-to-peer car rentals</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Rent cars from local owners in minutes. Safe, affordable, and convenient peer-to-peer car rentals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
            >
              Go to Platform
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {year} RideShare SA. Cape Town, South Africa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
