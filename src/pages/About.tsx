import { ArrowRight, Target, Users, Globe, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PLATFORM_URL } from '../config/platform';
import Team from '../components/Team';

export default function About() {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to transform car rental in South Africa through peer-to-peer sharing."
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Launched our MVP with 100 cars and 1,000 users across Johannesburg and Cape Town."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Grew to 5 major cities, 500+ cars, and secured Series A funding."
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced AI-powered pricing and enhanced safety features."
    },
    {
      year: "2024",
      title: "National Coverage",
      description: "Expanded to 15 cities with 10,000+ active users and 500+ available cars."
    }
  ];

  const values = [
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description: "We prioritize the safety and security of our community through rigorous verification processes and insurance coverage."
    },
    {
      icon: <Users size={32} />,
      title: "Community Driven",
      description: "We believe in the power of community and building trust between local car owners and renters."
    },
    {
      icon: <Heart size={32} />,
      title: "Sustainability",
      description: "We promote sustainable transportation by maximizing the use of existing vehicles and reducing the need for new cars."
    },
    {
      icon: <Globe size={32} />,
      title: "Accessibility",
      description: "We're committed to making car rental affordable and accessible to all South Africans."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            About RideShare SA
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Revolutionizing car rental in South Africa through innovative peer-to-peer sharing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary-500 hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Try Our Platform
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  RideShare SA was born from a simple observation: South Africans own millions of cars 
                  that sit idle for 95% of the time, while many people need affordable transportation options.
                </p>
                <p>
                  Founded in 2020 by Lindani Jay and Thabo Mokoena, we set out to create a platform that 
                  would connect car owners with people who need vehicles, making transportation more 
                  accessible, affordable, and sustainable.
                </p>
                <p>
                  Today, we're proud to be South Africa's leading peer-to-peer car rental platform, 
                  serving thousands of users across 15 cities and counting.
                </p>
              </div>
            </div>
            <div className="glass-card p-8">
              <div className="text-center mb-6">
                <Target className="text-primary-500 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">
                To democratize car ownership in South Africa by creating a trusted platform that 
                enables people to share vehicles safely, affordably, and conveniently, while building 
                sustainable communities and reducing transportation costs for all South Africans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-500 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="glass-card p-6">
                    <div className="text-primary-600 font-bold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're looking to rent a car or share yours, we're here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-primary-500 hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Get Started Now
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link
              to="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
