'use client';
import React from 'react';

interface ToggleButtonProps {
  value: string;
  label: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ value, label, isSelected, onSelect }) => (
  <button
    onClick={() => onSelect(value)}
    className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
      isSelected ? 'bg-teriary text-white' : 'text-gray-400 hover:text-white'
    }`}>
    {label}
  </button>
);

interface ToggleGroupProps<T extends string> {
  options: { value: T; label: string }[];
  selectedValue: T;
  onValueChange: (value: T) => void;
  className?: string;
}

const ToggleGroup = <T extends string = string>({ options, selectedValue, onValueChange, className }: ToggleGroupProps<T>) => {
  return (
    <div className={`inline-flex bg-secondary border-2 border-teriary rounded-lg p-1 mb-12 ${className}`}>
      {options.map((option) => (
        <ToggleButton
          key={option.value as string}
          value={option.value as string}
          label={option.label}
          isSelected={selectedValue === option.value}
          onSelect={onValueChange as (value: string) => void}
        />
      ))}
    </div>
  );
};

export default ToggleGroup;
