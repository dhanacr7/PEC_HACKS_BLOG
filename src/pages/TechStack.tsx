import { Helmet } from 'react-helmet-async';
import { Smartphone, Server, Database, Brain, Wrench, Bluetooth } from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    icon: Smartphone,
    technologies: [
      { name: 'Flutter', description: 'Cross-platform mobile framework for iOS and Android' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Spring Boot', description: 'Java framework for building robust backend services' },
      { name: 'Flask', description: 'Python micro-framework for AI model APIs handling' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', description: 'Advanced relational database for data persistence' },
    ],
  },
  {
    title: 'AI & Face Recognition',
    icon: Brain,
    technologies: [
      { name: 'Google MediaPipe', description: 'Face liveness detection and tracking' },
      { name: 'ArcFace', description: 'Advanced face recognition model' },
      { name: 'Gemini (RAG)', description: 'Retrieval-Augmented Generation for AI learning' },
    ],
  },
  {
    title: 'Connectivity',
    icon: Bluetooth,
    technologies: [
      { name: 'BLE Mesh Bluetooth', description: 'Mesh networking for proximity-based attendance activation' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    technologies: [
      { name: 'Kiro AI', description: 'Agentic AI workflows and automation' },
      { name: 'Eleven Labs', description: 'AI voice synthesis and audio generation' },
      { name: 'Requestly', description: 'API testing and debugging tools' },
      { name: 'Cloudflare', description: 'GPU-less server hosting for LLM models' },
    ],
  },
];

const TechStack = () => {
  return (
    <>
      <Helmet>
        <title>Technology Stack | PEC Hacks</title>
        <meta
          name="description"
          content="Explore the technologies powering our hackathon project: frontend, backend, database, AI/ML, and development tools."
        />
      </Helmet>

      <main className="min-h-screen pt-24 md:pt-32 pb-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow w-[500px] h-[500px] bg-accent/40 -top-64 -right-64 animate-pulse-slow" />
        <div className="ambient-glow w-[400px] h-[400px] bg-primary/30 bottom-40 -left-48 animate-pulse-slow delay-200" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-title mb-6 animate-slide-up">
              <span className="text-foreground">Technology </span>
              <span className="gradient-text">Stack</span>
            </h1>
            <p className="section-subtitle mx-auto animate-slide-up delay-100">
              The foundation of our project — a carefully selected stack of modern
              technologies that power every feature of our application.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              const isAccent = index % 2 === 1;

              return (
                <div
                  key={category.title}
                  className="group glass-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isAccent 
                        ? 'bg-accent/10 text-accent group-hover:bg-accent/20' 
                        : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    {category.technologies.map((tech) => (
                      <div key={tech.name} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 ${isAccent ? 'bg-accent' : 'bg-primary'}`} />
                        <div>
                          <div className="font-medium text-foreground text-sm">
                            {tech.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tech.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in delay-500">
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-serif text-foreground mb-1">12+</div>
              <div className="text-xs text-muted-foreground">Technologies</div>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-serif text-foreground mb-1">6</div>
              <div className="text-xs text-muted-foreground">Categories</div>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-serif text-foreground mb-1">4</div>
              <div className="text-xs text-muted-foreground">AI/ML Tools</div>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="text-2xl font-serif text-foreground mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Modern Stack</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TechStack;
