import { MapPin } from 'lucide-react';

export default function CitySpotlight() {
  const cities = ['Cape Town'];

  return (
    <section className="section-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
            <MapPin size={16} />
            <span className="font-semibold text-sm">CITY SPOTLIGHT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Now active in Cape Town
          </h2>
          <p className="text-gray-600 text-lg">
            Starting in Cape Town and expanding into other cities next.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cities.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700">
              {c}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <div className="font-semibold text-gray-900 font-heading mb-2">
              Cape Town
            </div>
            <div className="text-gray-600">
              Weekend getaways and tourism drive high demand for compact cars and SUVs.
            </div>
          </div>
          <div className="glass-card p-8">
            <div className="font-semibold text-gray-900 font-heading mb-2">
              More cities coming soon
            </div>
            <div className="text-gray-600">
              We’ll roll out to additional South African cities as supply and demand grow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
