import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { AnimatedBackground } from './AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatedBackground>
        <Navigation />
        {children}
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default Layout;
