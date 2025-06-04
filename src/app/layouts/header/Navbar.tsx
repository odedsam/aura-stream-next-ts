'use client';

import { navLinks } from '@/config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:inline-flex items-center bg-sec rounded-xl border-3 border-quaternary lg:px-4 py-2 mt-2">
      {navLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-gray-300 px-2 py-2 hover:text-white inline-block text-nowrap transition-colors duration-200 font-medium ${
            pathname === item.href ? 'bg-teriary rounded-sm' : ''
          }`}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
