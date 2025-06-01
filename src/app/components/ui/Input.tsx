'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CustomInputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  prefix?: React.ReactNode;
}



export const Input: React.FC<CustomInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  prefix = null,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-sm font-medium">{label}</label>
      <div className="flex">
        {prefix && <div className="inline-flex max-w-[4.875rem] items-center z-10">{prefix}</div>}
        {type === 'textarea' ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            rows={4}
            className={cn(
              'w-full px-4 py-3 bg-primary border border-quinary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none',
              className,
            )}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            className={cn(
              `w-full px-4 py-3 ${
                prefix ? 'ml-3' : ''
              } bg-primary border border-quinary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors`,
              className,
            )}
          />
        )}
      </div>
    </div>
  );
};
