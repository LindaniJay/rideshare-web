import { Send } from 'lucide-react';
import { useMemo, useState } from 'react';

type Interest = 'renting' | 'hosting' | 'both';

const PHIWE_EMAIL = 'phiwetoni3@gmail.com';

function buildMailtoUrl(to: string, subject: string, body: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${to}?${params.toString()}`;
}

export default function JoinCommunityForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    interest: 'renting' as Interest,
    message: '',
  });

  const canSubmit = useMemo(() => {
    return Boolean(formData.name.trim() && formData.email.trim() && formData.interest);
  }, [formData.email, formData.interest, formData.name]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = `RideShare SA — Join our community (${formData.interest})`;
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.city.trim() ? `City: ${formData.city}` : null,
      `Interested in: ${formData.interest}`,
      '',
      'Message:',
      formData.message.trim() || '(no additional message)',
    ].filter(Boolean) as string[];

    const mailtoUrl = buildMailtoUrl(PHIWE_EMAIL, subject, bodyLines.join('\n'));
    window.location.href = mailtoUrl;

    setFormData({ name: '', email: '', city: '', interest: 'renting', message: '' });
  };

  return (
    <div className="glass-card p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-heading text-gray-900">Join our community</h3>
        <p className="text-gray-600 mt-2">
          Want early access, launch updates, or to list your car? Send a note to Phiwe and we’ll get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              placeholder="Your name"
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
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
              City (optional)
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Cape Town"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
              I’m interested in *
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            >
              <option value="renting">Renting a car</option>
              <option value="hosting">Listing my car</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            placeholder="Tell us what you’re looking for (dates, vehicle type, or how you’d like to host)."
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="btn-primary flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send size={20} className="mr-2" />
          Email Phiwe
        </button>

        <p className="text-xs text-gray-500">
          This form opens your email app to send the message. If you need server-side sending, we can wire in a form provider.
        </p>
      </form>
    </div>
  );
}
