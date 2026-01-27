import CTABanner from '../components/CTABanner';
import Team from '../components/Team';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedFeatures from '../components/EnhancedFeatures';
import UseCasesStrip from '../components/UseCasesStrip';
import SafetySummary from '../components/SafetySummary';
import ComparisonSection from '../components/ComparisonSection';
import HostEarningsExplainer from '../components/HostEarningsExplainer';
import ByTheNumbers from '../components/ByTheNumbers';
import HomeFAQs from '../components/HomeFAQs';
import CitySpotlight from '../components/CitySpotlight';
import CommunityImpact from '../components/CommunityImpact';

export default function Home() {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Trusted By */}
      {/* Use Cases */}
      <UseCasesStrip />

      {/* Safety & Objections */}
      <SafetySummary />
      <ComparisonSection />

      {/* Enhanced Features Section */}
      <EnhancedFeatures />

      {/* Host Earnings */}
      <HostEarningsExplainer />

      {/* By The Numbers */}
      <ByTheNumbers />

      {/* Quick FAQs */}
      <HomeFAQs />

      {/* City Spotlight */}
      <CitySpotlight />

      {/* Community Impact */}
      <CommunityImpact />

      {/* Team Section */}
      <Team />

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
