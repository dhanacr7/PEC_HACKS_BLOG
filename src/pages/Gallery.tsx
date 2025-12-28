import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { X, Eye, Layers, Code, Users, Workflow, Mic, Building } from 'lucide-react';
import Button from '@/components/Button';

// Import selected images
import kiro1 from '@/assets/Kiro 1.png';
import requestly1 from '@/assets/Requestly 1.png';
import requestlyClient from '@/assets/reuestly_client.png';
import pecClg from '@/assets/pec_clg.png';
import teamArc from '@/assets/team_arc.png';
import teamMembers from '@/assets/team_members.png';
import ui from '@/assets/ui.png';
import voice from '@/assets/voice.png';

const galleryCategories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'kiro', label: 'Kiro AI', icon: Code },
  { id: 'requestly', label: 'Requestly', icon: Workflow },
  { id: 'team', label: 'Team & College', icon: Users },
  { id: 'ui', label: 'UI/UX', icon: Eye },
  { id: 'voice', label: 'Voice Tech', icon: Mic },
];

const galleryItems = [
  {
    id: 1,
    category: 'kiro',
    title: 'Kiro AI Development Interface',
    description: 'Main Kiro AI development environment and features',
    image: kiro1,
  },
  {
    id: 2,
    category: 'requestly',
    title: 'Requestly Dashboard',
    description: 'Main Requestly interface and workflow management',
    image: requestly1,
  },
  {
    id: 3,
    category: 'team',
    title: 'Team Members',
    description: 'Our hackathon team members and collaboration',
    image: teamMembers,
  },
  {
    id: 4,
    category: 'team',
    title: 'PEC College Campus',
    description: 'Punjab Engineering College - our institution',
    image: pecClg,
  },
  {
    id: 5,
    category: 'ui',
    title: 'UI Design System',
    description: 'User interface design and layout components',
    image: ui,
  },
  {
    id: 6,
    category: 'voice',
    title: 'Voice Technology',
    description: 'Voice recognition and processing capabilities',
    image: voice,
  },
  {
    id: 7,
    category: 'team',
    title: 'System Architecture',
    description: 'Technical architecture and project structure',
    image: teamArc,
  },
  {
    id: 8,
    category: 'requestly',
    title: 'Requestly Client App',
    description: 'Client-side application interface and features',
    image: requestlyClient,
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
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

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
              className="absolute top-6 right-6 p-2 rounded-lg glass-card hover:bg-secondary transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="max-w-4xl w-full glass-card p-6 md:p-8 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedItem);
                if (!item) return null;
                return (
                  <>
                    <div className="aspect-video rounded-lg overflow-hidden mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain bg-gradient-to-br from-secondary to-muted"
                      />
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
