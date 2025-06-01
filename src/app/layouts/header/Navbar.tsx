'use client';

import { navLinks } from '@/config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:inline-flex items-center bg-sec rounded-xl border-4 border-quaternary px-7 py-2">
      {navLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-gray-300 px-6 py-3 hover:text-white inline-block text-nowrap transition-colors duration-200 font-medium ${
            pathname === item.href ? 'bg-teriary rounded-sm' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
