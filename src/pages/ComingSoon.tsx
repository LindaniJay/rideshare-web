import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import brandLogo from '../assets/ChatGPT Image Jan 27, 2026, 09_43_18 AM.png';

type WaitlistInterest = 'Renter' | 'Host' | 'Both';

export default function ComingSoon() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<WaitlistInterest>('Renter');

  const mailtoHref = useMemo(() => {
    const to = 'rideshare.sasup@gmail.com';
    const subject = 'RideShare SA — Waitlist signup';
    const bodyLines = [
      'Hi RideShare SA,',
      '',
      'Please add me to the waitlist:',
      `Name: ${name || '(not provided)'}`,
      `Email: ${email || '(not provided)'}`,
      `Interest: ${interest}`,
      '',
      'Thanks,',
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join('\n'),
    });

    return `mailto:${to}?${params.toString()}`;
  }, [email, interest, name]);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="glass-card-dark p-10 text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/20 bg-white/10">
            <img src={brandLogo} alt="RideShare SA logo" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3">Coming Soon</h1>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            The RideShare SA platform is launching soon. Early access is open for profile creation, and we’ll announce when the platform becomes fully operational.
          </p>

          <div className="mx-auto max-w-lg">
            <form
              className="space-y-4 text-left"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref;
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-1">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-1">I am a…</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value as WaitlistInterest)}
                  className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="Renter">Renter</option>
                  <option value="Host">Host</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <Mail size={18} />
                  Join the waitlist
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Contact us
                </Link>
              </div>
            </form>

            <div className="flex justify-center mt-6">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white font-semibold"
              >
                <ArrowLeft size={18} />
                Back to home
              </Link>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/70">
            Tip: You can still explore the website while we launch.
          </div>
        </div>
      </div>
    </div>
  );
}
