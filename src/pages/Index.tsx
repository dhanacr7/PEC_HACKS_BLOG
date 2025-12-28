import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PEC Hacks: TEAM ARC's Hackathon Journey | From Idea to Execution</title>
        <meta
          name="description"
          content="Discover our hackathon journey from idea to execution. Explore how our team built an innovative app in 48 hours, the challenges we faced, and the solutions we created."
        />
      </Helmet>

      <main>
        <HeroSection />
        <TimelineSection />
      </main>
    </>
  );
};

export default Index;
