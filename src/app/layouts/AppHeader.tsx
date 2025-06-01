'use client';

import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from './header/Navbar';
import MobileMenu from './header/MobileMenu';
import ActionPanel from './header/ActionPanel';
import { useToggleMobileMenu, useMobileMenuOpen } from '@/app/store/uiStore';
import Logo from './header/Logo';

interface HeaderProps {
  className?: string;
}

const AppHeader: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = useToggleMobileMenu();
  const isMobileMenuOpen = useMobileMenuOpen();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary backdrop-blur-md' : 'bg-transparent'
      } ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 lg:h-20">
          <Logo />
          <Navbar />
          <div className="flex items-center space-x-4">
            <ActionPanel />
            <button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default AppHeader;
