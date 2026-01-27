import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

export default function FAQ() {
  const renterFAQs = [
    {
      question: 'Do I need special insurance to rent a car?',
      answer: 'You don\'t need to arrange anything in advance on this site. Any protection, deposits, or coverage details are shown clearly during the booking flow on the platform.',
    },
    {
      question: 'What do I need to bring when picking up the car?',
      answer: 'You\'ll need to bring your valid South African driver\'s license, original ID document or passport, and a credit card for the security deposit. Make sure your license is current and not expired.',
    },
    {
      question: 'How does the security deposit work?',
      answer: 'Deposit and payment terms (if applicable) are shown during checkout before you confirm a booking, so you can review everything upfront.',
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late return rules are defined per booking. If you\'re running late, message the host as early as possible so you can agree on the best next step.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes. Cancellation terms are shown before you confirm a booking and are visible in your booking details after you reserve.',
    },
    {
      question: 'What if the car breaks down during my rental?',
      answer: 'First, contact the host using the platform to coordinate next steps. If you need help, email us at rideshare.sasup@gmail.com and include your booking details.',
    },
  ];

  const hostFAQs = [
    {
      question: 'How much does it cost to list my car?',
      answer: 'Listing your car on RideShare SA is completely free. We only charge a small commission when you successfully rent out your car. No listing fees, no monthly costs.',
    },
    {
      question: 'How do I set my pricing?',
      answer: 'You set your own daily rates. You can adjust pricing based on season, weekends, and local demand.',
    },
    {
      question: 'What if a renter damages my car?',
      answer: 'All rentals include comprehensive insurance coverage. The renter\'s security deposit covers minor damages, while insurance covers major incidents. Our dispute resolution team helps handle any claims fairly.',
    },
    {
      question: 'Can I reject a booking request?',
      answer: 'Yes, you have control over who rents your car. You can review renter profile details and verification status before accepting or declining a request.',
    },
    {
      question: 'How and when do I get paid?',
      answer: 'Payments are processed securely and transferred to your bank account within a few business days after each successful rental. You can track all earnings and payouts in your dashboard.',
    },
    {
      question: 'Do I need to provide insurance?',
      answer: 'RideShare SA provides insurance coverage during rental periods. You should maintain your personal insurance for when you\'re using the vehicle. We recommend checking with your insurer about any specific requirements.',
    },
  ];

  const generalFAQs = [
    {
      question: 'How does RideShare SA verify users?',
      answer: 'We prioritize identity and driver\'s license checks. The exact steps shown may vary by booking, and verification requirements are communicated clearly in the platform flow.',
    },
    {
      question: 'What areas does RideShare SA operate in?',
      answer: 'Right now we\'re available in Cape Town. We\'re expanding into other cities across South Africa next — follow our updates for new launch areas as they go live.',
    },
    {
      question: 'How do payments work?',
      answer: 'Payment and payout details are handled in the platform and shown clearly during booking so both sides know what to expect.',
    },
    {
      question: 'What if there\'s a dispute between host and renter?',
      answer: 'If there\'s a dispute, contact support with booking details and any relevant evidence. We\'ll help guide the next steps according to the platform rules.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'Email us at rideshare.sasup@gmail.com and include any relevant booking details so we can help faster.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70 motion-safe:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Everything you need to know about RideShare SA
          </p>
        </div>
      </section>

      {/* Renter FAQs */}
      <section className="section-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              For Renters
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from our car rental community
            </p>
          </div>
          <FAQAccordion items={renterFAQs} />
        </div>
      </section>

      {/* Host FAQs */}
      <section className="section-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              For Hosts
            </h2>
            <p className="text-xl text-gray-600">
              Answers for car owners looking to earn with their vehicles
            </p>
          </div>
          <FAQAccordion items={hostFAQs} />
        </div>
      </section>

      {/* General & Payment FAQs */}
      <section className="section-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              General & Payments
            </h2>
            <p className="text-xl text-gray-600">
              Platform-wide questions and payment information
            </p>
          </div>
          <FAQAccordion items={generalFAQs} />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Email us and we’ll help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rideshare.sasup@gmail.com?subject=RideShare%20SA%20%E2%80%94%20Support"
              className="btn-primary"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to get started?"
        subtitle="Join South Africa's trusted peer-to-peer car rental platform."
        buttonText="Go to RideShare SA Platform"
      />
    </div>
  );
}
