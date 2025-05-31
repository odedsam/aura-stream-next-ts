import React, { useState } from 'react';

// TypeScript interfaces
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const Input: React.FC<CustomInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  prefix = null
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center z-10">
            {prefix}
          </div>
        )}
        {type === 'textarea' ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            rows={4}
            className={`w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none ${className}`}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            className={`w-full px-4 py-3 ${prefix ? 'pl-20' : ''} bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors ${className}`}
          />
        )}
      </div>
    </div>
  );
};
