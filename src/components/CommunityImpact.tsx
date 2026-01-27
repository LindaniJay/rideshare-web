import { HeartHandshake, Banknote, Car } from 'lucide-react';
import JoinCommunityForm from './JoinCommunityForm';

export default function CommunityImpact() {
  const items = [
    {
      icon: <Banknote size={22} />,
      title: 'Extra income for hosts',
      description: 'Help South Africans earn from cars that would otherwise sit idle.',
    },
    {
      icon: <Car size={22} />,
      title: 'Cheaper mobility for renters',
      description: 'More choice and better value than traditional rental models.',
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'Community-first trust',
      description: 'Verification, clear policies, and support to build confidence over time.',
    },
  ];

  return (
    <section className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            How RideShare SA helps South Africans
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A more affordable, more flexible way to move — while supporting local owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="glass-card p-8">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                {item.icon}
              </div>
              <div className="font-semibold text-gray-900 font-heading mb-2">{item.title}</div>
              <div className="text-gray-600 leading-relaxed">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <JoinCommunityForm />
        </div>
      </div>
    </section>
  );
}
