import { Helmet } from 'react-helmet';
import { SUPPORT_EMAIL } from '../config/contact';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | RideShare SA</title>
        <meta name="description" content="RideShare SA terms of service — rules and conditions for using our peer-to-peer car rental platform." />
      </Helmet>

      <div>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Terms of Service</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Rules and conditions for using the RideShare SA platform.
            </p>
          </div>
        </section>

        <section className="section-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
            <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using RideShare SA, you agree to these Terms of Service. If you do not agree, please do not use the platform.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">2. About the Platform</h2>
            <p className="text-gray-700 mb-6">
              RideShare SA is a peer-to-peer car rental marketplace connecting vehicle owners ("hosts") with people who need a car ("renters") in South Africa. We facilitate connections but do not own, operate, or maintain any vehicles listed on the platform.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">3. Eligibility</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>You must be at least 18 years old.</li>
              <li>Renters must hold a valid South African driver's licence.</li>
              <li>Hosts must be the legal owner (or have authorised use) of any vehicle listed.</li>
              <li>All users must complete identity verification before transacting.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">4. User Responsibilities</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Renters</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Return vehicles on time and in the same condition as received.</li>
              <li>Report any damage or incidents immediately.</li>
              <li>Follow all South African road and traffic laws.</li>
              <li>Do not sub-let or allow unauthorised drivers to use the vehicle.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Hosts</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Provide accurate, up-to-date vehicle information and photos.</li>
              <li>Ensure vehicles are roadworthy, clean, and have valid licence discs.</li>
              <li>Honour confirmed bookings.</li>
              <li>Maintain appropriate vehicle insurance.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">5. Bookings & Payments</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>All payments are processed securely through the platform.</li>
              <li>Hosts receive payouts within 2–3 business days after a completed rental.</li>
              <li>Cancellation policies are displayed on each listing.</li>
              <li>Off-platform payments are prohibited and not protected by RideShare SA.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">6. Insurance & Liability</h2>
            <p className="text-gray-700 mb-6">
              RideShare SA provides insurance coverage during active rentals. Coverage details and limits are outlined during the booking process. RideShare SA is not liable for losses, damages, or injuries beyond the scope of the provided coverage.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">7. Prohibited Conduct</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Fraudulent listings, bookings, or identity information.</li>
              <li>Using the platform for illegal activities.</li>
              <li>Harassment, discrimination, or abuse of other users.</li>
              <li>Tampering with or circumventing platform systems.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or pose a risk to the community.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of South African courts.
            </p>

            <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">10. Contact</h2>
            <p className="text-gray-700 mb-6">
              For questions about these terms, email us at{' '}
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
