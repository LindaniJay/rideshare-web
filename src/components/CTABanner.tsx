import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLATFORM_URL } from '../config/platform';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
  showSecondaryButton?: boolean;
}

export default function CTABanner({
  title = "Ready to get started?",
  subtitle = "Join South Africans renting cars from trusted local owners.",
  buttonText = "Go to RideShare SA Platform",
  variant = 'primary',
  showSecondaryButton = true,
}: CTABannerProps) {
  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white'
    : 'bg-gray-50 text-gray-900';

  const buttonClass = variant === 'primary'
    ? 'bg-white text-primary-600 hover:bg-gray-100 shadow-lg hover:shadow-xl'
    : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl';

  return (
    <section className={bgClass}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-semibold py-4 px-8 rounded-xl transition-all duration-300 ${buttonClass}`}
          >
            {buttonText}
            <ArrowRight className="ml-2" size={20} />
          </a>
          {showSecondaryButton && (
            <Link
              to="/about"
              className={`inline-flex items-center font-semibold py-4 px-8 rounded-xl transition-all duration-300 ${
                variant === 'primary'
                  ? 'border-2 border-white text-white hover:bg-white hover:text-primary-600'
                  : 'border-2 border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-white'
              }`}
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
