'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Country } from '@/types';
import { countries } from '@/config/mock';
import Image from 'next/image';

export default function CountrySelector() {
  const [selected, setSelected] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-neutral-900 rounded-lg px-4 py-3 border border-neutral-700 hover:border-neutral-500 transition">
        <div className="flex items-center gap-2">
          <Image src={selected.flag} alt={selected.code} width={24} height={16} className="rounded-sm" />
          <span className="text-white text-sm">{selected.dialCode}</span>
        </div>
        <ChevronDown className="text-neutral-400 w-4 h-4" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-neutral-800 border border-neutral-700 rounded-md shadow-lg overflow-y-auto max-h-60">
          {countries.map((country) => (
            <li
              key={country.code}
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-neutral-700 text-sm text-white">
              <Image src={country.flag} alt={country.code} width={20} height={14} className="rounded-sm" />
              <span>{country.name}</span>
              <span className="ml-auto">{country.dialCode}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
