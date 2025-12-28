import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-serif font-bold">I</span>
              </div>
              <span className="font-serif text-lg">
                <span className="text-foreground">Inside</span>
                <span className="text-primary">The</span>
                <span className="text-foreground">Build</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              From Idea to Execution — Documenting our hackathon journey and the
              innovations we explored along the way.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-foreground">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/tracks" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tracks
              </Link>
              <Link to="/tech-stack" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tech Stack
              </Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
            </div>
          </div>

          {/* Built With */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-foreground">
              Built During
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
          Hackathon 2025 — A 36-hour sprint of innovation, creativity, and
          caffeine-fueled coding sessions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Inside The Build. Made with passion during the hackathon.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted by <span className="text-primary">Team Innovators</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
