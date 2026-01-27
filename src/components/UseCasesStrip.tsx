import { Briefcase, Palmtree, Plane, GraduationCap } from 'lucide-react';

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

  return (
    <section className="section-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-2">
            Perfect for
          </h2>
          <p className="text-gray-600">Real-life use cases, locally relevant.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}
