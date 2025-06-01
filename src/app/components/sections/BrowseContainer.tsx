import { cn } from '@/lib/utils';

type BrowseProps = {
  children?: React.ReactNode;
  className?: string;
  categoryName: string;
  categoryClassName?: string;
  showCategory?: boolean;
};

import React from 'react';

// Mock cn function for demo

export const BrowseContainer = ({ categoryName, children, className, categoryClassName, showCategory = true }: BrowseProps) => {
  return (
    <div className={cn('relative bg-slate-900 border-2 border-gray-600', className)}>
      {showCategory && (
        <div
          className={cn(
            'absolute -top-3 left-6 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-md shadow-md z-10',
            categoryClassName,
          )}>
          {categoryName}
        </div>
      )}
      <div className="relative z-0">{children}</div>
    </div>
  );
};

// Usage Examples
export function BrowseContainerExamples() {
  return (
    <div className="space-y-8 p-8 bg-gray-900 min-h-screen">
      {/* Basic Usage - Badge on top of border */}
      <BrowseContainer categoryName="Movies" className="p-6 rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 h-32 rounded flex items-center justify-center text-white">Movie 1</div>
          <div className="bg-gray-700 h-32 rounded flex items-center justify-center text-white">Movie 2</div>
          <div className="bg-gray-700 h-32 rounded flex items-center justify-center text-white">Movie 3</div>
        </div>
      </BrowseContainer>

      {/* Custom Category Styling */}
      <BrowseContainer categoryName="TV Shows" className="p-6 rounded-lg" categoryClassName="bg-blue-600 text-yellow-300 font-bold">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-sm text-white">Show 1</div>
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-sm text-white">Show 2</div>
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-sm text-white">Show 3</div>
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-sm text-white">Show 4</div>
        </div>
      </BrowseContainer>

      {/* Without Category Label */}
      <BrowseContainer categoryName="Hidden" showCategory={false} className="p-6 rounded-lg">
        <div className="text-center py-8">
          <h2 className="text-xl font-bold mb-4 text-white">Content without category label</h2>
          <p className="text-gray-400">This container doesn't show the category name</p>
        </div>
      </BrowseContainer>

      {/* With Long Category Name */}
      <BrowseContainer categoryName="Action & Adventure Movies" className="p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-700 h-40 rounded flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-lg font-bold">Action Movie</div>
              <div className="text-sm text-gray-400">High-octane thrills</div>
            </div>
          </div>
          <div className="bg-gray-700 h-40 rounded flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-lg font-bold">Adventure Film</div>
              <div className="text-sm text-gray-400">Epic journeys</div>
            </div>
          </div>
        </div>
      </BrowseContainer>

      {/* Green badge example */}
      <BrowseContainer categoryName="Documentaries" className="p-6 rounded-lg" categoryClassName="bg-green-600">
        <div className="pt-4">
          <div className="text-center py-12 text-gray-400">
            <p>Documentary content would go here</p>
            <code className="bg-gray-800 px-2 py-1 rounded text-xs mt-2 block text-green-400">
              &lt;DocumentaryCarousel items={`{docs}`} /&gt;
            </code>
          </div>
        </div>
      </BrowseContainer>

      {/* Multiple badges example - showing different positions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BrowseContainer categoryName="Comedy" className="p-4 rounded-lg" categoryClassName="bg-yellow-500 text-black font-semibold">
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-white">Comedy Content</div>
        </BrowseContainer>

        <BrowseContainer categoryName="Horror" className="p-4 rounded-lg" categoryClassName="bg-purple-600">
          <div className="bg-gray-700 h-24 rounded flex items-center justify-center text-white">Horror Content</div>
        </BrowseContainer>
      </div>
    </div>
  );
}
