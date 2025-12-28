import React from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  showParticles?: boolean;
  showShapes?: boolean;
}

export function AnimatedBackground({
  children,
  showParticles = true,
  showShapes = true
}: AnimatedBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Shapes */}
      {showShapes && (
        <>
          {/* Large floating geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float-slow blur-xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-lg animate-float-medium blur-lg" />
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-primary/5 rounded-full animate-float-fast blur-md" />
          <div className="absolute top-60 right-10 w-16 h-16 bg-accent/5 rounded-lg animate-float-slow blur-sm" />

          {/* Drifting elements */}
          <div className="absolute top-1/3 left-0 w-4 h-4 bg-primary/10 rounded-full animate-drift" />
          <div className="absolute top-2/3 right-0 w-3 h-3 bg-accent/10 rounded-full animate-drift" style={{ animationDelay: '8s' }} />
        </>
      )}

      {/* Floating Particles */}
      {showParticles && (
        <>
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-particle-float" />
          <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-particle-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-52 left-1/2 w-2 h-2 bg-primary/15 rounded-full animate-particle-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-72 right-1/4 w-1 h-1 bg-accent/15 rounded-full animate-particle-float" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-particle-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 right-1/2 w-1 h-1 bg-accent/25 rounded-full animate-particle-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-primary/10 rounded-full animate-particle-float" style={{ animationDelay: '4s' }} />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
