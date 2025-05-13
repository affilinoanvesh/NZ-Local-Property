import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from '../UI/FloatingCTA';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Layout;