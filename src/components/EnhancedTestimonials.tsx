import { Star, Quote, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function EnhancedTestimonials() {
  const testimonials = [
    {
      name: "Thabo Mokoena",
      role: "Business Traveler",
      location: "Johannesburg",
      avatar: "TM",
      content: "RideShare SA has completely transformed how I travel for business. The cars are always clean, well-maintained, and the booking process is seamless. I've saved significantly compared to traditional rentals.",
      rating: 5,
      tripType: "Business",
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Sarah Ndlovu",
      role: "Car Host",
      location: "Cape Town",
      avatar: "SN",
      content: "I was skeptical about renting out my car, but RideShare SA made it incredibly safe and easy. I earn extra income each month which helps cover my car payment! The insurance coverage gives me complete peace of mind.",
      rating: 5,
      tripType: "Hosting",
      date: "1 month ago",
      verified: true
    },
    {
      name: "John Peterson",
      role: "Tourist",
      location: "Durban",
      avatar: "JP",
      content: "Perfect for exploring South Africa! Got a great SUV for our Garden Route trip at a great price compared to major rental companies. The owner was super helpful and gave us local tips. Highly recommend!",
      rating: 5,
      tripType: "Leisure",
      date: "3 weeks ago",
      verified: true
    },
    {
      name: "Priya Sharma",
      role: "Student",
      location: "Pretoria",
      avatar: "PS",
      content: "As a student, I couldn't afford my own car. RideShare SA lets me rent cars for weekend trips at affordable prices. The verification process made me feel safe, and the app is so easy to use!",
      rating: 5,
      tripType: "Personal",
      date: "1 week ago",
      verified: true
    },
    {
      name: "Michael Chen",
      role: "Frequent Renter",
      location: "Port Elizabeth",
      avatar: "MC",
      content: "I use RideShare SA every month for client meetings. The variety of cars is impressive, from luxury sedans to practical hatchbacks. Customer service is excellent - they resolved an issue within minutes.",
      rating: 5,
      tripType: "Business",
      date: "4 days ago",
      verified: true
    },
    {
      name: "Amanda du Plessis",
      role: "Car Host",
      location: "Bloemfontein",
      avatar: "AP",
      content: "My car was just sitting in the garage. Now it's making money while I work! The smart pricing feature adjusts rates automatically based on demand. Best decision I've made this year!",
      rating: 5,
      tripType: "Hosting",
      date: "2 weeks ago",
      verified: true
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: <Star size={20} /> },
    { value: "Growing", label: "Verified Reviews", icon: <CheckCircle size={20} /> },
    { value: "High", label: "Would Recommend", icon: <Quote size={20} /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 rounded-full px-4 py-2 mb-6">
            <Quote size={16} />
            <span className="font-semibold text-sm">REAL STORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            What Our Community
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">
              {" "}Is Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied South Africans who are already saving money 
            and earning income with RideShare SA
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="flex justify-center mb-3 text-accent-500">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold font-heading text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent-200 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin size={12} className="mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-500 fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-accent-200 size-8" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center space-x-1 bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-sm font-medium">
                    <Calendar size={12} />
                    <span>{testimonial.tripType}</span>
                  </span>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Share Your Story?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of smart renters and successful hosts. 
            Start your journey with RideShare SA today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Renting
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300">
              List Your Car
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
