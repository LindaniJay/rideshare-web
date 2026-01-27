import { Car, DollarSign, Shield, Calendar, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';

export default function ForHosts() {
  const whyHost = [
    {
      title: 'Earn Extra Income',
      description: 'Make your car work for you when you\'re not using it. Hosts earn an average of R3,500 per month.',
      icon: <DollarSign size={32} />,
      stat: 'R3,500/month avg',
    },
    {
      title: 'Flexible Schedule',
      description: 'Set your own availability and rental terms. You\'re in complete control.',
      icon: <Calendar size={32} />,
      stat: '100% flexible',
    },
    {
      title: 'Safe & Protected',
      description: 'Comprehensive insurance and verified renters give you peace of mind.',
      icon: <Shield size={32} />,
      stat: 'Fully insured',
    },
    {
      title: 'Growing Community',
      description: 'Join thousands of South Africans already earning with their cars.',
      icon: <Users size={32} />,
      stat: '5,000+ hosts',
    },
  ];

  const earningsExamples = [
    {
      car: 'Economy Car (e.g., Toyota Yaris)',
      dailyRate: 'R250 - R350',
      monthlyEarnings: 'R3,000 - R5,000',
      utilization: '60% utilization',
    },
    {
      car: 'Mid-Range Car (e.g., VW Polo)',
      dailyRate: 'R350 - R500',
      monthlyEarnings: 'R4,500 - R7,000',
      utilization: '65% utilization',
    },
    {
      car: 'SUV (e.g., Toyota RAV4)',
      dailyRate: 'R450 - R650',
      monthlyEarnings: 'R6,000 - R9,000',
      utilization: '70% utilization',
    },
    {
      car: 'Luxury Car (e.g., BMW 3 Series)',
      dailyRate: 'R600 - R900',
      monthlyEarnings: 'R8,000 - R12,000',
      utilization: '75% utilization',
    },
  ];

  const safetyFeatures = [
    {
      title: 'Renter Verification',
      description: 'Verification-first onboarding helps build trust between renters and hosts.',
      icon: <Shield size={20} />,
    },
    {
      title: 'Clear policies',
      description: 'Clear booking rules and expectations help reduce misunderstandings.',
      icon: <Award size={20} />,
    },
    {
      title: 'Secure Payments',
      description: 'All payments are processed securely through our platform.',
      icon: <DollarSign size={20} />,
    },
    {
      title: 'Trust & Support',
      description: 'Trust checks, clear policies, and support to help keep both sides safe.',
      icon: <Users size={20} />,
    },
    {
      title: 'Dispute Resolution',
      description: 'A clear path to resolve issues if something goes wrong.',
      icon: <TrendingUp size={20} />,
    },
  ];

  const faqs = [
    {
      question: 'How much can I really earn?',
      answer: 'Earnings vary by car type, location, and availability. Most hosts earn R2,500 - R6,000 per month with part-time listing. Full-time hosts can earn R8,000+ monthly.',
    },
    {
      question: 'What happens if someone damages my car?',
      answer: 'Damage handling depends on the booking terms shown in the platform. If something happens, document it with photos and contact support with the booking details.',
    },
    {
      question: 'Can I control who rents my car?',
      answer: 'Yes! You approve every booking request. You can set minimum requirements, review renter profiles, and accept or decline requests based on your preferences.',
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed securely and transferred to your bank account within 2-3 business days after each successful rental. You can track all earnings in your dashboard.',
    },
    {
      question: 'What if I need my car back during a rental?',
      answer: 'Once a booking is confirmed, the car is committed for the rental period. You can block out dates when you need your car to avoid conflicts.',
    },
    {
      question: 'Do I need special insurance?',
      answer: 'RideShare SA provides insurance coverage during rentals. Your personal insurance remains in effect when you\'re using the car. We recommend checking with your insurer for any specific requirements.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent-500 to-accent-600 text-white py-20">
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
            For Hosts
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Turn your car into an income stream. Join thousands of South Africans earning with their vehicles.
          </p>
        </div>
      </section>

      {/* Protection At A Glance */}
      <section className="section-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-card p-8">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-3">
                Protection at a glance
              </h2>
              <p className="text-gray-600 mb-6">
                A quick overview of how hosting is designed to stay safe and fair.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  Insurance coverage included during rentals
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  Renter verification (ID + driver’s licence checks)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  Clear claim steps + support if something goes wrong
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">•</span>
                  Clear coverage rules and claim steps
                </li>
              </ul>
            </div>

            <div className="glass-card p-8">
              <div className="text-sm font-semibold text-accent-700 mb-2">Want the full details?</div>
              <div className="text-gray-600 leading-relaxed mb-6">
                See verification steps and safety processes.
              </div>
              <Link to="/safety" className="btn-outline w-full inline-flex items-center justify-center">
                View safety & trust
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Host */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why List Your Car on RideShare SA?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The smart way to make your car work for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHost.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-accent-500 mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-accent-600 font-semibold">{item.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Examples */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Potential Earnings by Car Type
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what you could earn with different vehicles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {earningsExamples.map((example, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="text-accent-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">
                      {example.car}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daily Rate:</span>
                        <span className="font-semibold text-accent-600">{example.dailyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Earnings:</span>
                        <span className="font-semibold text-green-600">{example.monthlyEarnings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">At {example.utilization}:</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              *Earnings are estimates based on average utilization rates. Actual earnings may vary based on location, seasonality, and car condition.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Protection */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Safety & Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your peace of mind is our priority
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-accent-500">{feature.icon}</div>
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

      {/* Host FAQs */}
      <section className="section-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about hosting
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card border border-gray-200 overflow-hidden">
                <details className="group">
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold text-gray-900 font-heading pr-4">{faq.question}</h3>
                    <div className="text-accent-500 group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Start hosting your car"
        subtitle="Join thousands of South Africans earning with their vehicles."
        buttonText="Start Hosting Your Car"
      />
    </div>
  );
}
