import { Linkedin, Mail, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Lindani Jay",
    role: "CEO & Founder",
    bio: "Visionary leader with extensive experience in tech and transportation. Passionate about creating sustainable mobility solutions for South Africa.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "lindani@rideshare-sa.co.za",
    twitter: "#"
  },
  {
    name: "Thabo Mokoena",
    role: "CTO & Co-Founder",
    bio: "Full-stack developer specializing in scalable platforms. Expert in mobile app development and cloud architecture.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "thabo@rideshare-sa.co.za"
  },
  {
    name: "Sarah Ndlovu",
    role: "Head of Operations",
    bio: "Operations expert with extensive experience in logistics and customer service. Ensures smooth day-to-day operations.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "sarah@rideshare-sa.co.za"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Senior developer with expertise in mobile and backend systems. Drives technical innovation and platform reliability.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "michael@rideshare-sa.co.za"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    bio: "Marketing strategist focused on growth and brand development. Expert in digital marketing and community building.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "priya@rideshare-sa.co.za",
    twitter: "#"
  },
  {
    name: "David Williams",
    role: "Head of Finance",
    bio: "Financial expert with background in fintech and startup scaling. Manages financial strategy and investor relations.",
    image: "/api/placeholder/300/300",
    linkedin: "#",
    email: "david@rideshare-sa.co.za"
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
            The passionate individuals behind RideShare SA, dedicated to revolutionizing 
            car rental and sharing across South Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-primary-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                )}
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
              We're always looking for talented individuals who share our vision for 
              transforming transportation in South Africa. If you're passionate about 
              innovation and want to make a difference, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@rideshare-sa.co.za"
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
