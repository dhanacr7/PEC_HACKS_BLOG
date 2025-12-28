import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { X, Eye, Layers, Code, Users, Workflow } from 'lucide-react';
import Button from '@/components/Button';

const galleryCategories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'ui', label: 'App UI', icon: Code },
  { id: 'process', label: 'Process', icon: Workflow },
  { id: 'team', label: 'Moments', icon: Users },
];

const galleryItems = [
  {
    id: 1,
    category: 'ui',
    title: 'Main Dashboard',
    description: 'The central hub where users interact with core features',
  },
  {
    id: 2,
    category: 'ui',
    title: 'User Flow Screen',
    description: 'Streamlined interface for seamless user experience',
  },
  {
    id: 3,
    category: 'process',
    title: 'Architecture Diagram',
    description: 'System design showing component interactions',
  },
  {
    id: 4,
    category: 'team',
    title: 'Brainstorming Session',
    description: 'Team collaboration during the ideation phase',
  },
  {
    id: 5,
    category: 'ui',
    title: 'Mobile Responsive View',
    description: 'Optimized experience across all devices',
  },
  {
    id: 6,
    category: 'process',
    title: 'Data Flow Visualization',
    description: 'How information moves through the system',
  },
  {
    id: 7,
    category: 'team',
    title: 'Late Night Coding',
    description: 'The dedication that made it all possible',
  },
  {
    id: 8,
    category: 'ui',
    title: 'Results Display',
    description: 'Clean presentation of processed outputs',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Build Gallery & Highlights | PEC Hacks</title>
        <meta
          name="description"
          content="Explore screenshots, architecture diagrams, and hackathon moments from our project development journey."
        />
      </Helmet>

      <main className="min-h-screen pt-24 md:pt-32 pb-16">
        {/* Ambient Glows */}
        <div className="ambient-glow w-[500px] h-[500px] bg-primary/50 -top-64 -right-64 animate-pulse-slow" />
        <div className="ambient-glow w-[400px] h-[400px] bg-accent/30 bottom-40 -left-48 animate-pulse-slow delay-300" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="section-title mb-6 animate-slide-up">
              <span className="text-foreground">Build </span>
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="section-subtitle mx-auto animate-slide-up delay-100">
              A visual showcase of our app's interface, development process, and
              the memorable moments from our hackathon experience.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in delay-200">
            {galleryCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'glass-card hover:border-primary/30 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className="group glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Placeholder Visual */}
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-lg bg-background/60 backdrop-blur flex items-center justify-center">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 rounded-lg glass-card hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="max-w-3xl w-full glass-card p-6 md:p-8 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedItem);
                if (!item) return null;
                return (
                  <>
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-secondary to-muted flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-background/60 backdrop-blur flex items-center justify-center">
                        <Layers className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-serif text-foreground mb-2">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground">{item.description}</p>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;
