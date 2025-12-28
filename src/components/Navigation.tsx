import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Tracks', path: '/tracks' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Team', path: '/team' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('mobile-menu-button');
      if (isOpen && nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'nav-glass-scrolled' : 'nav-glass-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-10">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
              <span className="text-primary font-serif font-bold">P</span>
            </div>
            <span className="font-serif text-lg hidden sm:block">
              <span className="text-foreground">PEC</span>
              <span className="text-primary">Hacks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-enhanced text-sm ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-nav"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="mobile-nav-container">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-nav-link ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
