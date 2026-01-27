import { Linkedin, Mail, Twitter } from 'lucide-react';
import phiweImage from '../assets/Phiwe.jpeg';
import lindaniImage from '../assets/Lindani.jpeg';
import anelithaImage from '../assets/anelitha.jpeg';
import sosoImage from '../assets/Soso.jpeg';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageObjectPosition?: string;
  imageScale?: number;
  linkedin?: string;
  email?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Phiwe Toni",
    role: "CEO & Founder",
    bio: "Founder of RideShare SA. Focused on building a trusted, locally-built peer-to-peer car rental platform for South Africa.",
    image: phiweImage,
    imageObjectPosition: '50% 20%',
    linkedin: "https://www.linkedin.com/in/phiwe-toni-90b3b323a",
    email: "phiwetoni3@gmail.com",
  },
  {
    name: "Lindani Jonase",
    role: "Co-Founder & Lead Developer",
    bio: "Co-founder and lead developer focused on building a reliable, scalable platform for hosts and renters.",
    image: lindaniImage,
    imageObjectPosition: '50% 20%',
    imageScale: 1.12,
    linkedin: "https://www.linkedin.com/in/lindani-jonase-368515304?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRhht5qlmRiWyBJqpPoxyCQ%3D%3D",
    email: "lindanijonase@gmail.com"
  },
  {
    name: "Anelitha Lubedu",
    role: "CTO",
    bio: "CTO focused on building a secure, scalable platform and a smooth product experience for hosts and renters.",
    image: anelithaImage,
    imageObjectPosition: '50% 20%',
    linkedin: "https://www.linkedin.com/in/anelitha-lubedu-1723942a2",
    email: "anelithalubedu1@gmail.com"
  },
  {
    name: "Sonwabile Banca",
    role: "Head of Finance",
    bio: "Leads financial planning and sustainability to support long-term growth for hosts, renters, and the RideShare SA community.",
    image: sosoImage,
    imageObjectPosition: '50% 20%',
    linkedin: "https://www.linkedin.com/in/sonwabile-banca-51017b20a",
    email: "sosobanca58@gmail.com"
  }
];

export default function Team() {
  return (
    <section className="section-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The people behind RideShare SA, building a trusted peer-to-peer rental experience across South Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass-card group relative overflow-hidden p-6 sm:p-7 text-left hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-primary-500/15 via-primary-400/10 to-primary-700/10"
                aria-hidden="true"
              />

              <div className="relative flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/70 ring-1 ring-gray-200 shadow-sm">
                  {member.image && !member.image.startsWith('/api/placeholder') ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover"
                      style={{
                        objectPosition: member.imageObjectPosition ?? '50% 50%',
                        transform: `scale(${member.imageScale ?? 1})`,
                        transformOrigin: 'center',
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-600">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold font-heading text-gray-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-primary-700 font-medium mt-1">{member.role}</p>
                </div>
              </div>

              <p className="relative text-gray-600 mt-5 leading-relaxed">
                {member.bio}
              </p>

              <div className="relative mt-6 flex items-center gap-3">
                {member.linkedin && member.linkedin !== '#' && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white/70 text-gray-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white/70 text-gray-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                )}
                {member.twitter && member.twitter !== '#' && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white/70 text-gray-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                )}

                <div className="ml-auto hidden sm:block text-xs text-gray-500">
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/60 px-3 py-1">
                    Verified profile
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              We're building a better way to rent cars locally. If you're passionate about product,
              operations, or trust & safety, we'd love to hear from you.
            </p>
            <a
              href="mailto:phiwetoni3@gmail.com?subject=RideShare%20SA%20%E2%80%94%20Careers"
              className="btn-primary inline-flex items-center"
            >
              Explore Career Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
