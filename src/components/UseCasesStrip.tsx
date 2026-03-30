import { Briefcase, Palmtree, Plane, GraduationCap, CheckCircle } from 'lucide-react';

export default function UseCasesStrip() {
  const items = [
    {
      icon: <Briefcase size={20} />,
      title: 'Business travel',
      description: 'Professional vehicles for meetings and client visits.',
    },
    {
      icon: <Palmtree size={20} />,
      title: 'Weekend getaways',
      description: 'Easy pickups for a quick escape or family weekend.',
    },
    {
      icon: <Plane size={20} />,
      title: 'Tourists',
      description: 'Rent locally without the traditional rental hassle.',
    },
    {
      icon: <GraduationCap size={20} />,
      title: 'Students',
      description: 'Affordable mobility without owning a car.',
    },
  ];

  const advantages = [
    'Better value — flexible pricing from local owners',
    'More variety — unique vehicles in your neighbourhood',
    'More flexibility — pickups, durations, and availability that suit you',
    'Community-first — support local car owners directly',
  ];

  return (
    <section className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-3">
            Perfect for every trip
          </h2>
          <p className="text-gray-600 text-lg">Real-life use cases, locally relevant.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {items.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  {item.icon}
                </div>
                <div className="font-semibold text-gray-900 font-heading">{item.title}</div>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Why RideShare SA vs traditional rentals */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-5 sm:p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-900 mb-6 text-center">
            Why choose RideShare SA over traditional rentals?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {advantages.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <CheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-700">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
