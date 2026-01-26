import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

export default function FAQ() {
  const renterFAQs = [
    {
      question: 'Do I need special insurance to rent a car?',
      answer: 'No, you don\'t need special insurance. All rentals on RideShareX include comprehensive insurance coverage during the rental period. Your personal insurance remains in effect when you\'re using your own vehicle.',
    },
    {
      question: 'What do I need to bring when picking up the car?',
      answer: 'You\'ll need to bring your valid South African driver\'s license, original ID document or passport, and a credit card for the security deposit. Make sure your license is current and not expired.',
    },
    {
      question: 'How does the security deposit work?',
      answer: 'A security deposit is held on your credit card before the rental begins. This covers potential damages or violations. The deposit is released within several business days after the rental is completed, assuming no issues.',
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late returns may incur additional charges. Most hosts offer a grace period, but after that, hourly late fees apply. Always communicate with your host if you anticipate being late.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking. Cancellation policies vary by host, but generally: free cancellation up to 24 hours before, partial refund within 24 hours, no refund for no-shows.',
    },
    {
      question: 'What if the car breaks down during my rental?',
      answer: 'Contact our 24/7 roadside assistance immediately at 0800 RIDE SA. We\'ll arrange for repairs or a replacement vehicle. All rentals include roadside assistance coverage.',
    },
  ];

  const hostFAQs = [
    {
      question: 'How much does it cost to list my car?',
      answer: 'Listing your car on RideShareX is completely free. We only charge a small commission when you successfully rent out your car. No listing fees, no monthly costs.',
    },
    {
      question: 'How do I set my pricing?',
      answer: 'You set your own daily rates. We provide pricing suggestions based on your car type, location, and market demand. You can also set different prices for weekends, holidays, and special events.',
    },
    {
      question: 'What if a renter damages my car?',
      answer: 'All rentals include comprehensive insurance coverage. The renter\'s security deposit covers minor damages, while insurance covers major incidents. Our dispute resolution team helps handle any claims fairly.',
    },
    {
      question: 'Can I reject a booking request?',
      answer: 'Yes, you have complete control over who rents your car. You can review renter profiles, ratings, and verification status before accepting or declining any booking request.',
    },
    {
      question: 'How and when do I get paid?',
      answer: 'Payments are processed securely and transferred to your bank account within a few business days after each successful rental. You can track all earnings and payouts in your dashboard.',
    },
    {
      question: 'Do I need to provide insurance?',
      answer: 'RideShareX provides insurance coverage during rental periods. You should maintain your personal insurance for when you\'re using the vehicle. We recommend checking with your insurer about any specific requirements.',
    },
  ];

  const generalFAQs = [
    {
      question: 'How does RideShareX verify users?',
      answer: 'We use a multi-step verification process including ID document verification, driver\'s license validation, facial recognition matching, and manual profile reviews. All users must be verified before participating.',
    },
    {
      question: 'What areas does RideShareX operate in?',
      answer: 'We currently operate in major cities across South Africa including Johannesburg, Cape Town, Durban, Pretoria, Port Elizabeth, and surrounding areas. We\'re continuously expanding to new locations.',
    },
    {
      question: 'How do payments work?',
      answer: 'All payments are processed securely through our platform. Renters pay online when booking, and hosts receive their earnings after successful rentals. We support credit cards, debit cards, and EFT payments.',
    },
    {
      question: 'What if there\'s a dispute between host and renter?',
      answer: 'Our dedicated dispute resolution team mediates any conflicts. We review evidence from both parties, communicate with insurance providers if needed, and work to reach fair resolutions based on our terms of service.',
    },
    {
      question: 'Is RideShareX available for businesses?',
      answer: 'Yes! We offer business accounts for companies that need regular vehicle access. Business accounts get priority support, consolidated billing, and access to our premium vehicle selection.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our support team 24/7 through the app, via email at support@ridesharex.co.za, or call us at 0800 RIDE SA for urgent matters.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Everything you need to know about RideShareX
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
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@ridesharex.co.za"
              className="btn-primary"
            >
              Email Support
            </a>
            <a
              href="tel:0800743372"
              className="btn-outline"
            >
              Call 0800 RIDE SA
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to get started?"
        subtitle="Join South Africa's trusted peer-to-peer car rental platform."
        buttonText="Go to RideShareX Platform"
      />
    </div>
  );
}
