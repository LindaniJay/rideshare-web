import { Car, DollarSign, Shield, Calendar, Users, Clock, TrendingUp, Award } from 'lucide-react';
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
      description: 'All renters undergo comprehensive identity and license verification.',
      icon: <Shield size={20} />,
    },
    {
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance coverage during rental periods.',
      icon: <Award size={20} />,
    },
    {
      title: 'Secure Payments',
      description: 'All payments are processed securely through our platform.',
      icon: <DollarSign size={20} />,
    },
    {
      title: 'Reviews & Ratings',
      description: 'Build trust through transparent reviews from both hosts and renters.',
      icon: <Users size={20} />,
    },
    {
      title: '24/7 Support',
      description: 'Our support team is available around the clock for any issues.',
      icon: <Clock size={20} />,
    },
    {
      title: 'Dispute Resolution',
      description: 'Fair and fast dispute resolution process for peace of mind.',
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
      answer: 'All rentals include comprehensive insurance coverage. Renters are also required to pay a security deposit which covers minor damages. Our dispute resolution team handles any issues.',
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
      answer: 'RideShareX provides insurance coverage during rentals. Your personal insurance remains in effect when you\'re using the car. We recommend checking with your insurer for any specific requirements.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent-500 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            For Hosts
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Turn your car into an income stream. Join thousands of South Africans earning with their vehicles.
          </p>
        </div>
      </section>

      {/* Why Host */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Why List Your Car on RideShareX?
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
