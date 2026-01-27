import { ArrowRight, Calculator, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HostEarningsExplainer() {
  const examples = [
    {
      title: 'Toyota Corolla in Sandton',
      detail: '8 days/month × R550/day',
      estimate: '≈ R4,400 / month (before platform fee)',
    },
    {
      title: 'VW Polo in Cape Town CBD',
      detail: '12 days/month × R480/day',
      estimate: '≈ R5,760 / month (before platform fee)',
    },
    {
      title: 'SUV in Durban North',
      detail: '10 days/month × R750/day',
      estimate: '≈ R7,500 / month (before platform fee)',
    },
  ];

  return (
    <section className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
              <TrendingUp size={16} />
              <span className="font-semibold text-sm">HOST EARNINGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              How much can hosts earn?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Earnings depend on your car type, location, pricing, and how often you rent.
              Here are simple local examples to set expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/for-hosts" className="btn-outline inline-flex items-center justify-center">
                Learn about hosting
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/earnings-calculator" className="btn-primary inline-flex items-center justify-center">
                <Calculator className="mr-2" size={18} />
                Host earnings calculator
              </Link>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              Estimates are illustrative and will be adjusted once real marketplace data is available.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {examples.map((ex) => (
              <div key={ex.title} className="glass-card p-6">
                <div className="font-semibold text-gray-900 font-heading">{ex.title}</div>
                <div className="text-gray-600 text-sm mt-1">{ex.detail}</div>
                <div className="text-primary-700 font-semibold mt-3">{ex.estimate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
