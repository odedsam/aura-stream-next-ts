'use client';

import { navLinks } from '@/config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:inline-flex items-center space-x-8 bg-sec p-3 rounded-xl border-4 border-quaternary">
      {navLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-gray-300 px-6 py-[.875rem] hover:text-white transition-colors duration-200 font-medium ${
            pathname === item.href ? 'bg-primary rounded-xl p-2' : ''
          }`}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
