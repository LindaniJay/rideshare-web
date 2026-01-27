import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import brandLogo from '../assets/ChatGPT Image Jan 27, 2026, 09_43_18 AM.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
  ];

  const secondaryNavItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'For Renters', path: '/for-renters' },
    { name: 'For Hosts', path: '/for-hosts' },
    { name: 'Safety', path: '/safety' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg shadow-lg border border-white/20' 
        : 'bg-black/60 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={brandLogo}
                  alt="RideShare SA logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-heading group-hover:text-primary-400 transition-colors">
                  RideShare SA
                </div>
                <div className="text-xs text-gray-300 font-body tracking-wide">
                  Peer-to-peer car rentals
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {/* Main Navigation */}
              <div className="flex items-center space-x-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'text-white hover:text-primary-400 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Dropdown for secondary items */}
              <div className="relative group">
                <button className="px-5 py-2.5 rounded-full font-medium text-white hover:text-primary-400 hover:bg-white/10 transition-all duration-300 flex items-center space-x-1">
                  <span>More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-black/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    {secondaryNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-3 font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'bg-primary-500 text-white'
                            : 'text-white hover:text-primary-400 hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/coming-soon"
                className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Go to Platform</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-full text-white hover:text-primary-400 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-white/20">
              <div className="space-y-2">
                {/* Main Navigation */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">
                    Main
                  </div>
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-5 py-3 rounded-full font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                          : 'text-white hover:text-primary-400 hover:bg-white/10'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Secondary Navigation */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-4">
                    More
                  </div>
                  {secondaryNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-5 py-3 rounded-full font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                          : 'text-white hover:text-primary-400 hover:bg-white/10'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="px-4">
                  <Link
                    to="/coming-soon"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Go to Platform</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
