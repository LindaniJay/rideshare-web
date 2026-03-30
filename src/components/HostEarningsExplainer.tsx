import { ArrowRight, Calculator, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HostEarningsExplainer() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.08 });
  const examples = [
    {
      title: 'Toyota Corolla',
      detail: '8 days/month × R550/day',
      estimate: '≈ R4,400 / month',
    },
    {
      title: 'VW Polo',
      detail: '12 days/month × R480/day',
      estimate: '≈ R5,760 / month',
    },
    {
      title: 'SUV',
      detail: '10 days/month × R750/day',
      estimate: '≈ R7,500 / month',
    },
  ];

  const testimonials = [
    {
      quote: "I was nervous at first, but the verification process gave me confidence. My car earns while I'm at work.",
      name: "Thabo M.",
      role: "Host in Cape Town",
    },
    {
      quote: "Way more affordable than traditional rentals and the booking was incredibly smooth.",
      name: "Naledi K.",
      role: "Renter",
    },
  ];

  return (
    <section ref={sectionRef} className="section-white-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Earnings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
              <TrendingUp size={16} />
              <span className="font-semibold text-sm">HOST EARNINGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              How much can hosts earn?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Earnings depend on your car type, location, and how often you rent.
              Here are illustrative examples.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/earnings-calculator" className="btn-primary inline-flex items-center justify-center">
                <Calculator className="mr-2" size={18} />
                Earnings calculator
              </Link>
              <Link to="/for-hosts" className="btn-outline inline-flex items-center justify-center">
                Learn about hosting
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-5 reveal-right ${isVisible ? 'visible' : ''}`}>
            {examples.map((ex, index) => (
              <div key={ex.title} className={`bg-gray-50 rounded-xl p-6 border border-gray-100 card-glow card-accent-top stagger-${index + 1}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-gray-900 font-heading">{ex.title}</div>
                    <div className="text-gray-500 text-sm mt-1">{ex.detail}</div>
                  </div>
                  <div className="text-primary-600 font-bold text-lg">{ex.estimate}</div>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400">Estimates are illustrative and before platform fees.</p>
          </div>
        </div>

        {/* Testimonials / Social Proof */}
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-8 text-center">
            What people are saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 card-glow reveal ${isVisible ? 'visible' : ''} stagger-${index + 1}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary-500 fill-primary-500" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
