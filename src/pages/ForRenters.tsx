import { Car, MapPin, DollarSign, Shield, Star, Clock, Users, CheckCircle } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function ForRenters() {
  const useCases = [
    {
      title: 'Weekend Getaways',
      description: 'Perfect for spontaneous weekend trips to the coast or mountains.',
      icon: <MapPin size={24} />,
      example: 'Cape Town to Stellenbosch weekend trip',
    },
    {
      title: 'Business Travel',
      description: 'Professional vehicles for meetings and client visits.',
      icon: <Car size={24} />,
      example: 'Cape Town business meetings',
    },
    {
      title: 'Temporary Replacement',
      description: 'When your car is in the shop or unavailable.',
      icon: <Clock size={24} />,
      example: 'Car in for service? Rent locally',
    },
    {
      title: 'Special Occasions',
      description: 'Premium cars for weddings, dates, and celebrations.',
      icon: <Star size={24} />,
      example: 'Wedding transportation',
    },
  ];

  const benefits = [
    {
      title: 'More Choice',
      description: 'Access to hundreds of vehicles in your area, from economy to luxury.',
      icon: <Car size={32} />,
    },
    {
      title: 'Better Prices',
      description: 'Often more flexible and affordable than traditional rental options.',
      icon: <DollarSign size={32} />,
    },
    {
      title: 'Flexible Pickup',
      description: 'Choose from multiple pickup locations near you.',
      icon: <MapPin size={32} />,
    },
    {
      title: 'Easy Booking',
      description: 'Book in minutes with our simple, mobile-friendly platform.',
      icon: <CheckCircle size={32} />,
    },
  ];

  const whatToExpect = [
    {
      title: 'Clear vehicle details',
      description: 'Photos, key specs, and expectations are shown upfront before you book.',
      icon: <Car size={20} />,
    },
    {
      title: 'Verified Hosts',
      description: 'Host profiles and verification status (where applicable) help you decide with confidence.',
      icon: <Shield size={20} />,
    },
    {
      title: 'Secure Payments',
      description: 'Your payment information is protected with industry-standard security.',
      icon: <DollarSign size={20} />,
    },
    {
      title: 'Support',
      description: 'Need help? Email us with your booking details and we’ll assist.',
      icon: <Users size={20} />,
    },
  ];

  const howToStart = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Create your account and verify your identity in minutes.',
    },
    {
      step: '2',
      title: 'Browse Cars',
      description: 'Search available vehicles by location, dates, and preferences.',
    },
    {
      step: '3',
      title: 'Book & Pay',
      description: 'Reserve your car with secure online payment.',
    },
    {
      step: '4',
      title: 'Drive',
      description: 'Meet your host, pick up the car, and enjoy your trip!',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70 motion-safe:block motion-reduce:hidden"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            For Renters
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Find the perfect car for any occasion. Save money, enjoy flexibility, and drive with confidence.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Perfect for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whatever your reason for needing a car, we've got you covered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-500">{useCase.icon}</div>
                </div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-3">{useCase.description}</p>
                <p className="text-sm text-primary-600 font-medium">{useCase.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why Renters Choose RideShare SA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of car rental
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-500 mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your safety and satisfaction are our priorities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatToExpect.map((item, index) => (
              <div key={index} className="glass-card p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-primary-500">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              On the road in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToStart.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Find your next ride"
        subtitle="Browse cars available in Cape Town now — more cities coming soon."
        buttonText="Find Your Next Ride"
      />
    </div>
  );
}
