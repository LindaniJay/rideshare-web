import { Link } from 'react-router-dom';
import FAQAccordion from './FAQAccordion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomeFAQs() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const items = [
    {
      question: 'How does RideShare SA work?',
      answer:
        'Car owners list their vehicles on the platform. Renters browse, book, and pay securely online. Then you coordinate pickup with the host and drive.',
    },
    {
      question: 'What happens if there is an accident?',
      answer:
        "Rentals include insurance coverage during the booking period. If something happens, you'll get guided claim steps and support.",
    },
    {
      question: 'What checks do you run on renters?',
      answer:
        'We require identity verification and driver licence checks, plus additional trust checks to keep both hosts and renters safe.',
    },
    {
      question: 'How much does it cost to rent?',
      answer:
        'Rates are set by individual hosts and typically range from R250 to R900+ per day depending on the vehicle. All costs are shown upfront before you book.',
    },
    {
      question: 'How do hosts get paid?',
      answer:
        'Payments are processed through the platform. Host payouts are made within 2-3 business days after the rental ends.',
    },
    {
      question: 'Where is RideShare SA available?',
      answer:
        "We're currently live in Cape Town and expanding to more South African cities soon. Sign up to be notified when we launch in your area.",
    },
  ];

  return (
    <section ref={sectionRef} className="section-light py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Common questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know before your first booking.
          </p>
        </div>

        <div className={`reveal-scale ${isVisible ? 'visible' : ''}`}>
          <FAQAccordion items={items} />
        </div>

        <div className="mt-8 text-center">
          <Link to="/faq" className="btn-outline inline-flex items-center justify-center">
            See all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}