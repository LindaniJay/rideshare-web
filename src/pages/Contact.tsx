import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import CTABanner from '../components/CTABanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We\'ll get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'Email Support',
      details: 'support@ridesharex.co.za',
      description: 'General inquiries and support',
      icon: <Mail size={24} />,
    },
    {
      title: 'Phone Support',
      details: '0800 RIDE SA (0800 7433 72)',
      description: '24/7 customer support',
      icon: <Phone size={24} />,
    },
    {
      title: 'Head Office',
      details: 'Cape Town, South Africa',
      description: 'By appointment only',
      icon: <MapPin size={24} />,
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Interested in partnering with RideShareX?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Corporate Accounts
              </h3>
              <p className="text-gray-600 mb-4">
                Set up a corporate account for your business needs. Get access to our premium fleet, consolidated billing, and priority support.
              </p>
              <a href="mailto:business@ridesharex.co.za" className="text-primary-600 font-semibold hover:text-primary-700">
                business@ridesharex.co.za →
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Fleet Partnerships
              </h3>
              <p className="text-gray-600 mb-4">
                Own multiple vehicles? Join our fleet partner program and maximize your earning potential with dedicated support.
              </p>
              <a href="mailto:fleet@ridesharex.co.za" className="text-primary-600 font-semibold hover:text-primary-700">
                fleet@ridesharex.co.za →
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Media & Press
              </h3>
              <p className="text-gray-600 mb-4">
                For media inquiries, press releases, and interview requests, please contact our communications team.
              </p>
              <a href="mailto:media@ridesharex.co.za" className="text-primary-600 font-semibold hover:text-primary-700">
                media@ridesharex.co.za →
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                Investor Relations
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about investment opportunities and company growth. Access our investor portal and documentation.
              </p>
              <a href="mailto:investors@ridesharex.co.za" className="text-primary-600 font-semibold hover:text-primary-700">
                investors@ridesharex.co.za →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest news, tips, and community stories
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need immediate assistance?"
        subtitle="Our 24/7 support team is ready to help you."
        buttonText="Call 0800 RIDE SA"
      />
    </div>
  );
}
