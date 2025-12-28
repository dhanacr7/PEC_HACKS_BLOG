import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Bot, Wifi, Mic, Sparkles, Router, Key, Cloud, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

const tracks = [
  {
    icon: Bot,
    name: 'Kiro AI',
    category: 'Agentic Workflows',
    description:
      'We explored agentic AI workflows that enabled our application to make autonomous decisions and chain complex tasks together. This helped us prototype intelligent automation features faster.',
    highlights: [
      'Autonomous decision-making',
      'Task chaining',
      'Intelligent automation',
    ],
  },
  {
    icon: Wifi,
    name: 'Requestly',
    category: 'API Testing',
    description:
      'Requestly helped us test and debug API requests during development. We could modify request flows, test edge cases, and ensure our integrations worked flawlessly before deployment.',
    highlights: ['Request modification', 'API debugging', 'Integration testing'],
  },
  {
    icon: Mic,
    name: 'Eleven Labs',
    category: 'Voice & Audio AI',
    description:
      'We experimented with AI voice generation to explore audio-based features. This opened up possibilities for voice interfaces and audio content generation within our application.',
    highlights: [
      'Voice synthesis',
      'Audio generation',
      'Natural language processing',
    ],
  },
  {
    icon: Router,
    name: 'Open Router',
    category: 'AI Model Routing',
    description:
      'Open Router provided unified access to multiple AI models and APIs. This allowed us to experiment with different language models and find the best fit for our application needs.',
    highlights: [
      'Multi-model access',
      'Unified API interface',
      'Model experimentation',
    ],
  },
  {
    icon: Key,
    name: 'Gemini API Key',
    category: 'AI Integration',
    description:
      'Google\'s Gemini API provided powerful multimodal capabilities for our application. We integrated it to enhance our AI features with advanced language understanding and generation.',
    highlights: [
      'Multimodal AI',
      'Advanced language models',
      'API integration',
    ],
  },
  {
    icon: Cloud,
    name: 'Cloudflare for LLM Hosting',
    category: 'GPU-less Server Hosting',
    description:
      'Cloudflare\'s serverless platform enabled us to host and run LLM models without managing GPU infrastructure. This provided cost-effective, scalable AI hosting for our application.',
    highlights: [
      'Serverless deployment',
      'Cost-effective hosting',
      'Scalable AI infrastructure',
    ],
  },
];

const Tracks = () => {
  return (
    <>
      <Helmet>
        <title>Tracks & Extra Features Explored | PEC Hacks</title>
        <meta
          name="description"
          content="Discover the additional tools and tracks we explored during the hackathon including agentic AI, API testing, and voice generation."
        />
      </Helmet>

      <main className="min-h-screen pt-24 md:pt-32 pb-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow w-[500px] h-[500px] bg-accent/30 -top-48 -left-48 animate-pulse-slow" />
        <div className="ambient-glow w-[400px] h-[400px] bg-primary/40 bottom-20 -right-48 animate-pulse-slow delay-300" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="section-title mb-6 animate-slide-up">
              <span className="text-foreground">Tracks & </span>
              <span className="gradient-text">Features Explored</span>
            </h1>
            <p className="section-subtitle mx-auto animate-slide-up delay-100">
              Beyond our core tech stack, we explored these innovative tools and
              tracks to enhance creativity and accelerate prototyping.
            </p>
          </div>

          {/* Note */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
            <div className="glass-card p-4 border-l-2 border-primary">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Note:</span> These are
                not core tech stack items. They represent additional tools and
                experimental tracks we explored to think creatively and prototype
                faster.
              </p>
            </div>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              const isAccent = index % 2 === 1;

              return (
                <div
                  key={track.name}
                  className="group glass-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isAccent 
                        ? 'bg-accent/10 text-accent group-hover:bg-accent/20' 
                        : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Category Tag */}
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium mb-3 ${
                    isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                  }`}>
                    {track.category}
                  </span>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {track.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {track.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {track.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in delay-500">
            <p className="text-muted-foreground mb-5">
              Want to learn more about our core technologies?
            </p>
            <Link to="/tech-stack">
              <Button variant="primary">
                <span>View Tech Stack</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tracks;
