export default function ByTheNumbers() {
  const stats = [
    { label: 'Available now', value: 'Cape Town' },
    { label: 'Expanding to', value: 'More cities soon' },
    { label: 'Support', value: 'Email' },
    { label: 'Trust', value: 'Verification-first' },
  ];

  return (
    <section className="section-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-2">
            By the numbers
          </h2>
          <p className="text-gray-600">Context that helps you trust the experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">{s.value}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
