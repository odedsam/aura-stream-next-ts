// components/Header.tsx
'use client';

import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './header/Navbar';
import MobileMenu from './header/MobileMenu';
import ActionPanel from './header/ActionPanel';
import { useToggleMobileMenu, useMobileMenuOpen } from '@/app/store/uiStore';

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
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image src="/assets/LogoDesktop.svg" alt="logo-icon" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />
              <span className="text-white font-bold text-lg lg:text-xl">StreamVibe</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search and Notification Components */}
            <ActionPanel />

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default AppHeader;
