import { Lightbulb, Target, Users, Code, Bug, Trophy } from 'lucide-react';

const timelineSteps = [
  {
    icon: Lightbulb,
    title: 'The Spark',
    subtitle: 'How It All Started',
    description:
      'It began with a simple observation during our daily lives. We noticed a recurring problem that many people faced, and we asked ourselves: "What if we could solve this with technology?" That question sparked everything.',
    accent: 'primary',
  },
  {
    icon: Target,
    title: 'The Problem',
    subtitle: 'Understanding The Challenge',
    description:
      'We dove deep into understanding the problem. User research, pain point analysis, and countless discussions helped us define the exact challenge we wanted to tackle. The scope was ambitious but achievable.',
    accent: 'accent',
  },
  {
    icon: Users,
    title: 'Brainstorming',
    subtitle: 'Ideas Take Shape',
    description:
      'Whiteboards filled with diagrams, sticky notes everywhere, and heated debates about the best approach. We explored multiple solutions, evaluated trade-offs, and finally converged on our winning idea.',
    accent: 'primary',
  },
  {
    icon: Code,
    title: 'Building',
    subtitle: 'Code Meets Vision',
    description:
      'With caffeine as fuel and determination as our guide, we started coding. The architecture took shape, components came together, and slowly but surely, our vision started becoming reality.',
    accent: 'accent',
  },
  {
    icon: Bug,
    title: 'Challenges',
    subtitle: 'Overcoming Obstacles',
    description:
      'Not everything went smoothly. We faced bugs that seemed impossible, integration issues that tested our patience, and moments of doubt. But each challenge made us stronger and our solution better.',
    accent: 'primary',
  },
  {
    icon: Trophy,
    title: 'The Result',
    subtitle: 'Mission Accomplished',
    description:
      'Through teamwork, persistence, and a shared vision, we built something we are truly proud of. The final product exceeded our initial expectations and demonstrated what is possible when passionate minds come together.',
    accent: 'accent',
  },
];

const TimelineSection = () => {
  return (
    <section id="journey" className="py-24 md:py-32 relative">
      {/* Subtle ambient glow */}
      <div className="ambient-glow w-[400px] h-[400px] bg-primary/50 top-1/3 -right-48 animate-pulse-slow" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title mb-6">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every great project has a story. Here is ours — from the first spark
            of inspiration to the final triumphant demo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            const isPrimary = step.accent === 'primary';

            return (
              <div
                key={index}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon */}
                <div
                  className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 border transition-colors duration-300 ${
                    isPrimary 
                      ? 'bg-primary/10 border-primary/30 text-primary' 
                      : 'bg-accent/10 border-accent/30 text-accent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isEven ? 'md:pr-0' : 'md:pl-0'
                  }`}
                >
                  <div className="glass-card p-6 group hover:border-primary/30 transition-all duration-300">
                    <div className={`text-sm font-medium mb-2 ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                      {step.subtitle}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
