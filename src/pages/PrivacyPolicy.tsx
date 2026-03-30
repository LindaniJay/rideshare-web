import { Helmet } from 'react-helmet';
import { SUPPORT_EMAIL } from '../config/contact';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | RideShare SA</title>
        <meta name="description" content="RideShare SA privacy policy — how we collect, use, and protect your personal information." />
      </Helmet>

      <div>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Privacy Policy</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        <section className="section-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">When you use RideShare SA, we may collect:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>Account information:</strong> name, email address, phone number, and profile photo.</li>
              <li><strong>Identity verification:</strong> South African ID number and driver's licence details for trust and safety purposes.</li>
              <li><strong>Vehicle information:</strong> make, model, year, registration, and photos (for hosts).</li>
              <li><strong>Booking data:</strong> rental dates, locations, and transaction history.</li>
              <li><strong>Device and usage data:</strong> browser type, IP address, and pages visited.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>To provide and improve the RideShare SA platform.</li>
              <li>To verify your identity and build trust between hosts and renters.</li>
              <li>To process bookings and payments securely.</li>
              <li>To communicate booking confirmations, updates, and support responses.</li>
              <li>To comply with South African law, including POPIA (Protection of Personal Information Act).</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">3. Data Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Other users as needed for bookings (e.g., host sees renter name and vice versa).</li>
              <li>Payment processors to complete transactions.</li>
              <li>Law enforcement when required by law.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We use industry-standard security measures to protect your data, including encryption in transit and at rest. However, no system is 100% secure and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">5. Your Rights (POPIA)</h2>
            <p className="text-gray-700 mb-4">Under the Protection of Personal Information Act, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Access your personal information we hold.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to processing of your personal information.</li>
              <li>Withdraw consent at any time.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use essential cookies to keep the platform running. We may use analytics cookies to understand how users interact with the site. You can manage cookie preferences in your browser settings.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              For privacy-related questions, email us at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                {SUPPORT_EMAIL}
              </a>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
