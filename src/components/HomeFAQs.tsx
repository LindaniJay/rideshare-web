import { Link } from 'react-router-dom';
import FAQAccordion from './FAQAccordion';

export default function HomeFAQs() {
  const items = [
    {
      question: 'What happens if there is an accident?',
      answer:
        'Rentals include insurance coverage during the booking period. If something happens, you’ll get guided claim steps and support when needed.',
    },
    {
      question: 'What checks do you run on renters?',
      answer:
        'We require identity verification and driver’s licence checks, plus additional trust checks to keep hosts and renters safe.',
    },
    {
      question: 'What if a host cancels last minute?',
      answer:
        'We’ll help you find a suitable alternative when possible and continuously improve reliability with host performance standards.',
    },
  ];

  return (
    <section className="section-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Quick answers
          </h2>
          <p className="text-gray-600 text-lg">
            The most common questions we hear before booking.
          </p>
        </div>

        <FAQAccordion items={items} />

        <div className="mt-8 text-center">
          <Link to="/faq" className="btn-outline inline-flex items-center justify-center">
            Read the full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
