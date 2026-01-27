import { Search, Calendar, MapPin, Shield, CreditCard, Users, Car, Clock, DollarSign } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function HowItWorks() {
  const renterSteps = [
    {
      title: 'Search Cars',
      description: 'Browse available vehicles in your area. Filter by type, price, dates, and location.',
      icon: <Search size={24} />,
      details: ['Filter by car type, price, and features', 'See real-time availability', 'Compare multiple options'],
    },
    {
      title: 'Choose Dates & Book',
      description: 'Select your rental dates and pickup location. Book instantly with secure payment.',
      icon: <Calendar size={24} />,
      details: ['Flexible booking options', 'Secure online payment', 'Instant confirmation'],
    },
    {
      title: 'Pick Up & Drive',
      description: 'Meet the verified host, inspect the car together, and start your journey.',
      icon: <MapPin size={24} />,
      details: ['Flexible pickup locations', 'Host verification process', 'Car inspection checklist'],
    },
    {
      title: 'Return the Car',
      description: 'Return the car as agreed and close out the booking smoothly.',
      icon: <Clock size={24} />,
      details: ['Easy return process', 'Simple handover checklist', 'Support if anything goes wrong'],
    },
  ];

  const hostSteps = [
    {
      title: 'List Your Car',
      description: 'Add your vehicle details, photos, and set your availability and pricing.',
      icon: <Car size={24} />,
      details: ['Simple listing process', 'Upload photos and details', 'Set your own schedule'],
    },
    {
      title: 'Set Price & Rules',
      description: 'Choose your daily rate, security deposit, and rental rules.',
      icon: <DollarSign size={24} />,
      details: ['Competitive pricing suggestions', 'Custom rental rules', 'Security deposit settings'],
    },
    {
      title: 'Approve Bookings',
      description: 'Review rental requests and approve guests who meet your requirements.',
      icon: <Users size={24} />,
      details: ['Guest verification', 'Booking request review', 'Accept or decline requests'],
    },
    {
      title: 'Get Paid',
      description: 'Receive secure payments after successful rentals. Track your earnings.',
      icon: <CreditCard size={24} />,
      details: ['Secure payment processing', 'Earnings dashboard', 'Quick payouts'],
    },
  ];

  const safetyFeatures = [
    {
      title: 'Identity Verification',
      description: 'Verification-first onboarding helps build trust between renters and hosts.',
      icon: <Shield size={24} />,
    },
    {
      title: 'Secure Payments',
      description: 'All transactions are processed securely through our platform.',
      icon: <CreditCard size={24} />,
    },
    {
      title: 'Trust & Support',
      description: 'Trust checks, clear policies, and support to help keep both sides safe.',
      icon: <Users size={24} />,
    },
    {
      title: 'Clear Handover',
      description: 'Clear pickup/return expectations help reduce misunderstandings.',
      icon: <Car size={24} />,
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
            How RideShare SA Works
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Learn how easy it is to rent cars or earn money as a host on our platform
          </p>
        </div>
      </section>

      {/* For Renters */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              For Renters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get on the road in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renterSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 h-full">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary-500">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < renterSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-primary-300">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Hosts */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              For Hosts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start earning money with your car in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 h-full">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-accent-500">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-500 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < hostSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-accent-300">
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Safety & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we keep our community safe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-500">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to get started?"
        subtitle="Join South Africans renting cars from trusted local owners."
        buttonText="Go to RideShare SA Platform"
      />
    </div>
  );
}
