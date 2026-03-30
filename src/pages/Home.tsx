import CTABanner from '../components/CTABanner';
import EnhancedHero from '../components/EnhancedHero';
import HowItWorksPreview from '../components/HowItWorksPreview';
import UseCasesStrip from '../components/UseCasesStrip';
import EnhancedFeatures from '../components/EnhancedFeatures';
import HostEarningsExplainer from '../components/HostEarningsExplainer';
import HomeFAQs from '../components/HomeFAQs';

export default function Home() {
  return (
    <div>
      {/* 1. Hero — clean headline, 1 primary CTA, trust badges */}
      <EnhancedHero />

      {/* 2. How It Works — 3-step visual flow */}
      <HowItWorksPreview />

      {/* 3. Use Cases + Comparison (merged) */}
      <UseCasesStrip />

      {/* 4. Key Features — 6 cards, links to detail pages */}
      <EnhancedFeatures />

      {/* 5. Host Earnings + Social Proof (merged) */}
      <HostEarningsExplainer />

      {/* 6. FAQs — 6 questions */}
      <HomeFAQs />

      {/* 7. Final CTA */}
      <CTABanner />
    </div>
  );
}
