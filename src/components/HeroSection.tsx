import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="ambient-glow w-[600px] h-[600px] bg-primary -top-64 -right-64 animate-pulse-slow" />
      <div className="ambient-glow w-[500px] h-[500px] bg-accent/50 bottom-0 -left-64 animate-pulse-slow delay-300" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in mt-24">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Hackathon 2025 Project
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-slide-up">
            <span className="gradient-text">PEC Hacks:</span>
            <br />
            <span className="text-foreground">TEAM ARC's Hackathon Journey</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up delay-100">
            From Idea to Execution — Discover how we transformed a simple concept
            into a working application during an intense 36-hour sprint.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up delay-200">
            <a href="#journey">
              <Button variant="primary">
                <span>Explore Our Journey</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
            </a>
            <Link to="/how-it-works">
              <Button variant="secondary">
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto animate-fade-in delay-300">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-foreground">36</div>
              <div className="text-sm text-muted-foreground mt-1">Hours</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-3xl md:text-4xl font-serif text-foreground">4</div>
              <div className="text-sm text-muted-foreground mt-1">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-foreground">1</div>
              <div className="text-sm text-muted-foreground mt-1">Vision</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
