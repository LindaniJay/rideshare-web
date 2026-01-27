import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import CTABanner from '../components/CTABanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const phiweEmail = 'rideshare.sasup@gmail.com';

  const subjectLabel = (value: string) => {
    switch (value) {
      case 'general':
        return 'General Inquiry';
      case 'support':
        return 'Technical Support';
      case 'booking':
        return 'Booking Issue';
      case 'payment':
        return 'Payment Question';
      case 'partnership':
        return 'Partnership Inquiry';
      case 'feedback':
        return 'Feedback';
      default:
        return 'Message';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `RideShare SA — ${subjectLabel(formData.subject)}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Topic: ${subjectLabel(formData.subject)}`,
      '',
      formData.message,
    ].join('\n');

    const params = new URLSearchParams({ subject, body });
    window.location.href = `mailto:${phiweEmail}?${params.toString()}`;

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'Email Support',
      details: 'rideshare.sasup@gmail.com',
      description: 'General inquiries and support',
      icon: <Mail size={24} />,
    },
    {
      title: 'Head Office',
      details: 'Cape Town, South Africa',
      description: 'By appointment only',
      icon: <MapPin size={24} />,
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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            We're here to help. Get in touch with our team for any questions or support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach our support team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-500">{info.icon}</div>
                </div>
                <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll respond within 24 hours
            </p>
          </div>
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="booking">Booking Issue</option>
                  <option value="payment">Payment Question</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="section-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
              Business & Partnership Inquiries
            </h2>
            <p className="text-xl text-gray-600">
                Interested in partnering with RideShare SA?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Corporate Accounts
              </h3>
              <p className="text-gray-600 mb-4">
                For companies that need regular vehicle access, email us to discuss options and availability.
              </p>
              <a href="mailto:rideshare.sasup@gmail.com?subject=RideShare%20SA%20%E2%80%94%20Corporate%20Accounts" className="text-primary-600 font-semibold hover:text-primary-700">
                Email us →
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Fleet Partnerships
              </h3>
              <p className="text-gray-600 mb-4">
                Own multiple vehicles? Join our fleet partner program and maximize your earning potential with dedicated support.
              </p>
              <a href="mailto:rideshare.sasup@gmail.com?subject=RideShare%20SA%20%E2%80%94%20Fleet%20Partnership" className="text-primary-600 font-semibold hover:text-primary-700">
                Email us →
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Media & Press
              </h3>
              <p className="text-gray-600 mb-4">
                For media inquiries, press releases, and interview requests, please contact our communications team.
              </p>
              <a href="mailto:rideshare.sasup@gmail.com?subject=RideShare%20SA%20%E2%80%94%20Media%20Inquiry" className="text-primary-600 font-semibold hover:text-primary-700">
                Email us →
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Investor Relations
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in learning more about RideShare SA? Send us an email and we’ll respond with the right info.
              </p>
              <a href="mailto:rideshare.sasup@gmail.com?subject=RideShare%20SA%20%E2%80%94%20Investor%20Relations" className="text-primary-600 font-semibold hover:text-primary-700">
                Email us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to get started?"
        subtitle="Go to the platform or email us with any questions."
        buttonText="Go to RideShare SA Platform"
      />
    </div>
  );
}
