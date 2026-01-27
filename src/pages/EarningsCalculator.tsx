import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EarningsCalculator() {
  const [dailyRate, setDailyRate] = useState(550);
  const [daysPerMonth, setDaysPerMonth] = useState(8);
  const [platformFeePct, setPlatformFeePct] = useState(20);

  const gross = useMemo(() => dailyRate * daysPerMonth, [dailyRate, daysPerMonth]);
  const net = useMemo(() => gross * (1 - platformFeePct / 100), [gross, platformFeePct]);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Host Earnings Calculator
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Estimate monthly earnings based on your pricing and availability.
          </p>
        </div>
      </section>

      <section className="section-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Daily rate (R)</label>
                <input
                  type="number"
                  min={0}
                  value={dailyRate}
                  onChange={(e) => setDailyRate(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Days rented per month</label>
                <input
                  type="number"
                  min={0}
                  max={31}
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform fee (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={platformFeePct}
                  onChange={(e) => setPlatformFeePct(Number(e.target.value) || 0)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus-ring"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="text-sm text-gray-600">Estimated gross / month</div>
                <div className="text-3xl font-bold font-heading text-gray-900 mt-2">R{gross.toLocaleString()}</div>
              </div>
              <div className="glass-card p-6">
                <div className="text-sm text-gray-600">Estimated net / month</div>
                <div className="text-3xl font-bold font-heading text-primary-700 mt-2">R{Math.round(net).toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              This is a simple estimator. Real earnings depend on demand, seasonality, pricing, vehicle type,
              cancellations, and final fee/insurance structure.
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/for-hosts" className="btn-outline inline-flex items-center justify-center">
                Back to hosting
              </Link>
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
