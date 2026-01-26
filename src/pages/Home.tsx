import CTABanner from '../components/CTABanner';
import Team from '../components/Team';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedFeatures from '../components/EnhancedFeatures';
import EnhancedTestimonials from '../components/EnhancedTestimonials';

export default function Home() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Enhanced Features Section */}
      <EnhancedFeatures />

      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonials />

      {/* Team Section */}
      <Team />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
