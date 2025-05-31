'use client';

import { navLinks } from '@/config';
import { useMobileMenuOpen, useToggleMobileMenu } from '@/app/store/uiStore';
import Link from 'next/link';

export default function MobileMenu() {
  const isMobileMenuOpen = useMobileMenuOpen();
  const toggleMobileMenu = useToggleMobileMenu();

  if (!isMobileMenuOpen) {
    return null;
  }

  return (
    <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
      <nav className="py-4 space-y-2">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 font-medium"
            onClick={toggleMobileMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
