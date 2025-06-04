'use client';

import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/Buttons';
import { useToggleMobileMenu, useMobileMenuOpen } from '@/app/store/uiStore';
import Navbar from '@/app/layouts/header/Navbar';
import MobileMenu from '@/app/layouts/header/MobileMenu';
import ActionPanel from '@/app/layouts/header/ActionPanel';
import Logo from '@/app/layouts/header/Logo';

const AppHeader = () => {
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
      }`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5 lg:h-20">
          <Logo />
          <Navbar />
          <div className="flex items-center space-x-4">
            <ActionPanel />
            <Button
              className="bg-transparent lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              icon={isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default AppHeader;
