'use client';
import React, { useState, useEffect } from 'react';
// Types
interface UILoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  color?: 'blue' | 'purple' | 'green' | 'red' | 'gray';
  text?: string;
  overlay?: boolean;
  className?: string;
  duration?: number;
}

interface LoaderVariant {
  key: UILoaderProps['variant'];
  label: string;
  description: string;
}

interface ColorOption {
  key: UILoaderProps['color'];
  label: string;
  classes: string;
}

interface SizeOption {
  key: UILoaderProps['size'];
  label: string;
  classes: string;
}

// Main UI Loader Component
const UILoaders: React.FC<UILoaderProps> = ({
  size = 'md',
  variant = 'spinner',
  color = 'blue',
  text = '',
  overlay = false,
  className = '',
  duration = 2000,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses: Record<NonNullable<UILoaderProps['size']>, string> = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses: Record<NonNullable<UILoaderProps['color']>, string> = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    red: 'text-red-600',
    gray: 'text-gray-600',
  };

  const SpinnerLoader: React.FC = () => (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          className="opacity-25"
        />
        <path
          fill="currentColor"
          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          className="opacity-75"
        />
      </svg>
    </div>
  );

  const DotsLoader: React.FC = () => (
    <div className="flex space-x-1">
      {Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
          style={{
            animationDelay: `${i * 0.1}s`,
            backgroundColor: 'currentColor',
          }}
        />
      ))}
    </div>
  );

  const PulseLoader: React.FC = () => (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
      style={{ backgroundColor: 'currentColor' }}
    />
  );

  const BarsLoader: React.FC = () => (
    <div className="flex space-x-1 items-end">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className={`w-1 ${colorClasses[color]} animate-pulse rounded-sm`}
          style={{
            height: `${12 + (i % 2) * 8}px`,
            backgroundColor: 'currentColor',
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.8s',
          }}
        />
      ))}
    </div>
  );

  const RippleLoader: React.FC = () => (
    <div className="relative">
      <div className={`${sizeClasses[size]} relative`}>
        {Array.from({ length: 2 }, (_, i) => (
          <div
            key={i}
            className={`absolute inset-0 rounded-full border-2 ${colorClasses[color]} animate-ping`}
            style={{
              borderColor: 'currentColor',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '1.5s',
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderLoader = (): React.JSX.Element => {
    if (!mounted) {
      return <div className={sizeClasses[size]} />; // Prevent hydration mismatch
    }

    switch (variant) {
      case 'dots':
        return <DotsLoader />;
      case 'pulse':
        return <PulseLoader />;
      case 'bars':
        return <BarsLoader />;
      case 'ripple':
        return <RippleLoader />;
      default:
        return <SpinnerLoader />;
    }
  };

  const LoaderContent: React.FC = () => (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoader()}
      {text && <p className={`text-sm ${colorClasses[color]} font-medium animate-pulse`}>{text}</p>}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 shadow-xl">
          <LoaderContent />
        </div>
      </div>
    );
  }

  return <LoaderContent />;
};

// Demo Component
const UILoadersDemo: React.FC = () => {
  const [activeVariant, setActiveVariant] = useState<UILoaderProps['variant']>('spinner');
  const [activeColor, setActiveColor] = useState<UILoaderProps['color']>('blue');
  const [activeSize, setActiveSize] = useState<UILoaderProps['size']>('md');
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [loaderText, setLoaderText] = useState<string>('Loading...');

  const variants: LoaderVariant[] = [
    {
      key: 'spinner',
      label: 'Spinner',
      description: 'Classic spinning loader with circular animation',
    },
    { key: 'dots', label: 'Dots', description: 'Three bouncing dots in sequence' },
    { key: 'pulse', label: 'Pulse', description: 'Single pulsing circle' },
    { key: 'bars', label: 'Bars', description: 'Animated bars with varying heights' },
    { key: 'ripple', label: 'Ripple', description: 'Concentric ripple effect' },
  ];

  const colors: ColorOption[] = [
    { key: 'blue', label: 'Blue', classes: 'bg-blue-500' },
    { key: 'purple', label: 'Purple', classes: 'bg-purple-500' },
    { key: 'green', label: 'Green', classes: 'bg-green-500' },
    { key: 'red', label: 'Red', classes: 'bg-red-500' },
    { key: 'gray', label: 'Gray', classes: 'bg-gray-500' },
  ];

  const sizes: SizeOption[] = [
    { key: 'sm', label: 'Small', classes: 'w-4 h-4' },
    { key: 'md', label: 'Medium', classes: 'w-8 h-8' },
    { key: 'lg', label: 'Large', classes: 'w-12 h-12' },
    { key: 'xl', label: 'Extra Large', classes: 'w-16 h-16' },
  ];

  const handleOverlayDemo = (): void => {
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 3000); // Auto close after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">UI Client Loaders - TypeScript</h1>
          <p className="text-xl text-gray-600">Interactive loading components for your UI</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg p-6 shadow-md space-y-6">
          {/* Variant Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Loader Variants</h3>
            <div className="flex flex-wrap gap-2">
              {variants.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveVariant(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeVariant === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Colors</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map(({ key, label, classes }) => (
                <button
                  key={key}
                  onClick={() => setActiveColor(key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    activeColor === key ? 'border-gray-400' : 'border-gray-200'
                  }`}>
                  <div className={`w-4 h-4 rounded-full ${classes}`} />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveSize(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSize === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Loader Text</h3>
            <input
              type="text"
              value={loaderText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoaderText(e.target.value)}
              placeholder="Enter loading text..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Current Variant Info */}
        {variants.map(
          ({ key, label, description }) =>
            activeVariant === key && (
              <div key={key} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-900">{label} Loader</h3>
                <p className="text-blue-700">{description}</p>
              </div>
            ),
        )}

        {/* Main Loader Preview */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Current Configuration
          </h2>
          <div className="flex justify-center py-8">
            <UILoaders
              variant={activeVariant}
              color={activeColor}
              size={activeSize}
              text={loaderText}
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleOverlayDemo}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Preview Overlay Mode
            </button>
          </div>
        </div>

        {/* All Variants Grid */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {variants.map(({ key, label }) => (
              <div key={key} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">{label}</h3>
                <div className="flex justify-center py-4">
                  <UILoaders variant={key} color={activeColor} size="lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size Comparison */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Size Comparison</h2>
          <div className="flex items-center justify-around py-4">
            {sizes.map(({ key, label }) => (
              <div key={key} className="text-center space-y-3">
                <UILoaders variant={activeVariant} color={activeColor} size={key} />
                <p className="text-sm text-gray-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Usage Example:</h3>
          <pre className="text-sm text-green-400 overflow-x-auto">
            {`// Import the component
import { UILoaders } from './UILoaders';

// Basic usage
<UILoaders variant="${activeVariant}" color="${activeColor}" size="${activeSize}" />

// With text
<UILoaders
  variant="${activeVariant}"
  color="${activeColor}"
  size="${activeSize}"
  text="${loaderText}"
/>

// Overlay mode
<UILoaders
  variant="${activeVariant}"
  color="${activeColor}"
  size="${activeSize}"
  text="${loaderText}"
  overlay={true}
/>`}
          </pre>
        </div>

        {/* TypeScript Interface */}
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">TypeScript Interface:</h3>
          <pre className="text-sm text-blue-400 overflow-x-auto">
            {`interface UILoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  color?: 'blue' | 'purple' | 'green' | 'red' | 'gray';
  text?: string;
  overlay?: boolean;
  className?: string;
  duration?: number;
}`}
          </pre>
        </div>

        {/* Overlay */}
        {showOverlay && (
          <UILoaders
            variant={activeVariant}
            color={activeColor}
            size="xl"
            text={loaderText || 'Loading...'}
            overlay={true}
          />
        )}
      </div>
    </div>
  );
};

export default UILoadersDemo;
export { UILoaders };
