import { Shield, CheckCircle, AlertCircle, Users, Car, FileText, Mail, Lock } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function Safety() {
  const verificationSteps = [
    {
      title: 'Identity Verification',
      description: 'Identity checks help build trust between renters and hosts.',
      icon: <FileText size={24} />,
      details: ['South African ID or passport (where required)', 'Basic profile details', 'Clear contact and booking info'],
    },
    {
      title: 'Driver\'s License Check',
      description: 'Driver\'s license details are used to help ensure eligible rentals.',
      icon: <Car size={24} />,
      details: ['Valid driver\'s license (where required)', 'License expiry checks', 'Clear eligibility requirements'],
    },
    {
      title: 'Vehicle Documentation',
      description: 'Basic vehicle documents help ensure listings are legitimate.',
      icon: <Shield size={24} />,
      details: ['Vehicle registration (where applicable)', 'Listing photos and details', 'Clear condition expectations'],
    },
    {
      title: 'Profile Review',
      description: 'We focus on quality and safety signals that reduce bad experiences.',
      icon: <Users size={24} />,
      details: ['Profile completeness', 'Fraud prevention checks', 'Policy enforcement'],
    },
  ];

  const safetyFeatures = [
    {
      title: 'Secure Payments',
      description: 'All transactions are encrypted and processed through secure payment gateways.',
      icon: <Lock size={32} />,
      category: 'Financial Security',
    },
    {
      title: 'Trust & Support',
      description: 'Clear policies, verification, and support to help keep both sides safe.',
      icon: <Users size={32} />,
      category: 'Trust',
    },
    {
      title: 'Dispute Resolution',
      description: 'Fair and fast dispute resolution process managed by our team.',
      icon: <AlertCircle size={32} />,
      category: 'Support',
    },
  ];

  const guidelines = [
    {
      title: 'For Renters',
      items: [
        'Always verify the host\'s identity before pickup',
        'Inspect the vehicle thoroughly before driving',
        'Take photos of any existing damage',
        'Follow traffic laws and parking regulations',
        'Return the car on time and in the same condition',
        'Report any issues immediately to our support team',
      ],
    },
    {
      title: 'For Hosts',
      items: [
        'Maintain your vehicle regularly and keep it clean',
        'Be honest about your car\'s condition and features',
        'Meet renters in safe, public locations',
        'Verify the renter\'s identity before handing over keys',
        'Keep copies of all documentation',
        'Respond promptly to messages and booking requests',
      ],
    },
  ];

  const emergencyInfo = [
    {
      title: 'Email Support',
      description: 'Non-urgent inquiries and documentation.',
      contact: 'rideshare.sasup@gmail.com',
      icon: <Mail size={20} />,
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
            Safety & Trust
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Your safety is our highest priority. Learn how we keep our community secure.
          </p>
        </div>
      </section>

      {/* Verification Process */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Comprehensive Verification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multi-layer verification to ensure trust and safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationSteps.map((step, index) => (
              <div key={index} className="glass-card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary-500">{step.icon}</div>
                </div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-2 flex-shrink-0 mt-0.5" size={12} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Safety Features & Protections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built-in protections for peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-500">{feature.icon}</div>
                </div>
                <div className="text-sm text-primary-600 font-medium mb-2">{feature.category}</div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Safety Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Best practices for safe and successful rentals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((group, index) => (
              <div key={index} className="glass-card p-8">
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-6">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Emergency Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If you need help, contact us by email and include booking details.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xl mx-auto">
            {emergencyInfo.map((info, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-red-500">{info.icon}</div>
                </div>
                <h3 className="text-lg font-semibold font-heading text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <p className="text-primary-600 font-semibold">{info.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield size={40} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Safety and trust-first design
          </h2>
          <p className="text-lg opacity-90 mb-6">
            We build with safety, verification, and clear policies in mind — so both sides can rent with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle size={20} className="text-green-400" />
              <span>Verified Users</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle size={20} className="text-green-400" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle size={20} className="text-green-400" />
              <span>Clear policies</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle size={20} className="text-green-400" />
              <span>Email support</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to rent or host safely?"
        subtitle="Join a trust-first peer-to-peer car rental marketplace." 
        buttonText="Go to RideShare SA Platform"
      />
    </div>
  );
}
