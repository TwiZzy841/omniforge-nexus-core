
import OmniHeader from '@/components/OmniHeader';
import OmniFooter from '@/components/OmniFooter';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ModulesSection from '@/components/ModulesSection';
import RoadmapSection from '@/components/RoadmapSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OmniHeader />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturesSection />
        <ModulesSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <OmniFooter />
    </div>
  );
};

export default Index;
