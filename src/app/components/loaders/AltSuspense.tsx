import React from 'react';

const AltSuspense: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-extrabold text-white tracking-wide mb-4">Loading...</h2>
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 border-4 border-red-600/40 rounded-full animate-spin" />
        <div
          className="absolute inset-2 border-2 border-transparent border-t-white/60 rounded-full animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
        />
      </div>
      <div className="mt-6 w-48 h-1 bg-red-600 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-red-500 to-red-700 animate-pulse" />
      </div>
      <p className="mt-4 text-gray-300 font-light tracking-wide text-center">
        Please wait a moment
      </p>
    </div>
  );
};

export default AltSuspense;
