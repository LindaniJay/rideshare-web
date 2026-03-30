import { Search, CalendarCheck, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorksPreview() {
  const steps = [
    {
      number: '1',
      icon: <Search size={28} />,
      title: 'Find a car',
      description: 'Browse available cars near you by location, date, and vehicle type.',
    },
    {
      number: '2',
      icon: <CalendarCheck size={28} />,
      title: 'Book & pay securely',
      description: 'Reserve your dates. All payments are processed safely through the platform.',
    },
    {
      number: '3',
      icon: <Car size={28} />,
      title: 'Pick up & drive',
      description: 'Coordinate with the host, collect the car, and you\'re on the road.',
    },
  ];

  return (
    <section className="section-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three simple steps to get on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-primary-100" />
              )}

              {/* Step number + icon */}
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/how-it-works" className="btn-outline inline-flex items-center">
            See full details
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
