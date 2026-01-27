import { CheckCircle } from 'lucide-react';

export default function ComparisonSection() {
  const bullets = [
    'Better value with flexible pricing from local owners.',
    'More variety: unique vehicles in your neighbourhood.',
    'More flexibility: pickups, durations, and availability that fit your schedule.',
  ];

  return (
    <section className="section-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-2">
              Why RideShare SA vs traditional rentals?
            </h2>
            <p className="text-gray-600">
              Designed for local flexibility — without the usual friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-0.5" size={18} />
                <div className="text-gray-700">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
