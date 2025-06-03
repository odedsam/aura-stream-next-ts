// app/server-test/page.tsx
'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import AppLoader from '@/app/components/loaders/AppLoader';
import StreamLoader from '@/app/components/loaders/AppLoader';

// Mock API functions
const mockFetchUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ name: 'John Doe', email: 'john@example.com' }), 2000),
  );

const mockFetchDashboardData = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ sales: 12500, users: 1250, orders: 89 }), 3000),
  );

const mockFetchAnalytics = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ views: 45000, clicks: 2300, conversions: 156 }), 2500),
  );

// Reusable Data Loader Component
function DataLoader<T>({
  children,
  fetchData,
  loadingProps,
}: {
  children: (data: T) => React.ReactNode;
  fetchData: () => Promise<T>;
  loadingProps: any;
}) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(setData)
      .finally(() => setIsLoading(false));
  }, [fetchData]);

  if (isLoading || !data) {
    return <AppLoader {...loadingProps} onLoadComplete={() => setIsLoading(false)} />;
  }

  return <>{children(data)}</>;
}

// Individual Demo Components
function GradientLoaderDemo() {
  const [showLoader, setShowLoader] = useState(false);

  const triggerLoader = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 4000);
  };

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#262626]">
      <h3 className="text-white text-xl font-semibold mb-4">Gradient Loader (Default)</h3>
      <p className="text-[#999999] mb-4">
        Dark gradient background with red accents, floating particles, and premium animations.
      </p>
      <button
        onClick={triggerLoader}
        className="bg-[#e50000] hover:bg-[#ff3333] text-white px-6 py-2 rounded-lg transition-colors">
        Show Gradient Loader
      </button>

      {showLoader && (
        <StreamLoader
          brandName="LUXE"
          tagline="Premium Experience Loading..."
          minLoadTime={3000}
          onLoadComplete={() => setShowLoader(false)}
        />
      )}
    </div>
  );
}

function GlassmorphismLoaderDemo() {
  const [showLoader, setShowLoader] = useState(false);

  const triggerLoader = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 3500);
  };

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#262626]">
      <h3 className="text-white text-xl font-semibold mb-4">Glassmorphism Loader</h3>
      <p className="text-[#999999] mb-4">
        Transparent backdrop blur effect with subtle borders and modern aesthetics.
      </p>
      <button
        onClick={triggerLoader}
        className="bg-[#e50000] hover:bg-[#ff3333] text-white px-6 py-2 rounded-lg transition-colors">
        Show Glassmorphism Loader
      </button>

      {showLoader && (
        <AppLoader
          brandName="LUXE"
          tagline="Glassmorphism Design..."
          minLoadTime={3000}
          onLoadComplete={() => setShowLoader(false)}
        />
      )}
    </div>
  );
}

function MinimalLoaderDemo() {
  const [showLoader, setShowLoader] = useState(false);

  const triggerLoader = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 3000);
  };

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#262626]">
      <h3 className="text-white text-xl font-semibold mb-4">Minimal Loader</h3>
      <p className="text-[#999999] mb-4">
        Clean, minimal design with focus on essential elements only.
      </p>
      <button
        onClick={triggerLoader}
        className="bg-[#e50000] hover:bg-[#ff3333] text-white px-6 py-2 rounded-lg transition-colors">
        Show Minimal Loader
      </button>

      {showLoader && (
        <AppLoader
          brandName="LUXE"
          tagline="Clean & Simple"
          minLoadTime={2500}
          onLoadComplete={() => setShowLoader(false)}
        />
      )}
    </div>
  );
}

function DataFetchingDemo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#262626]">
      <h3 className="text-white text-xl font-semibold mb-4">Data Fetching Loaders</h3>
      <p className="text-[#999999] mb-4">
        Real-world scenarios with different loading times and messages.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveDemo('user')}
          className="bg-[#262626] hover:bg-[#404040] text-white p-4 rounded-lg transition-colors text-left">
          <div className="font-semibold">User Profile</div>
          <div className="text-sm text-[#999999]">2s loading</div>
        </button>

        <button
          onClick={() => setActiveDemo('dashboard')}
          className="bg-[#262626] hover:bg-[#404040] text-white p-4 rounded-lg transition-colors text-left">
          <div className="font-semibold">Dashboard Data</div>
          <div className="text-sm text-[#999999]">3s loading</div>
        </button>

        <button
          onClick={() => setActiveDemo('analytics')}
          className="bg-[#262626] hover:bg-[#404040] text-white p-4 rounded-lg transition-colors text-left">
          <div className="font-semibold">Analytics</div>
          <div className="text-sm text-[#999999]">2.5s loading</div>
        </button>
      </div>

      {activeDemo === 'user' && (
        <div className="mt-6 p-4 bg-[#141414] rounded-lg">
          <DataLoader
            fetchData={mockFetchUserData}
            loadingProps={{
              brandName: 'LUXE',
              tagline: 'Loading user profile...',
              variant: 'gradient',
              minLoadTime: 1500,
            }}>
            {(data: any) => (
              <div className="text-white">
                <h4 className="text-lg font-semibold mb-2">User Profile Loaded!</h4>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="mt-4 bg-[#e50000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-lg transition-colors">
                  Close
                </button>
              </div>
            )}
          </DataLoader>
        </div>
      )}

      {activeDemo === 'dashboard' && (
        <div className="mt-6 p-4 bg-[#141414] rounded-lg">
          <DataLoader
            fetchData={mockFetchDashboardData}
            loadingProps={{
              brandName: 'LUXE',
              tagline: 'Fetching dashboard metrics...',
              variant: 'glassmorphism',
              minLoadTime: 2000,
            }}>
            {(data: any) => (
              <div className="text-white">
                <h4 className="text-lg font-semibold mb-2">Dashboard Data Loaded!</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e50000]">${data.sales}</div>
                    <div className="text-sm text-[#999999]">Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e50000]">{data.users}</div>
                    <div className="text-sm text-[#999999]">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e50000]">{data.orders}</div>
                    <div className="text-sm text-[#999999]">Orders</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="bg-[#e50000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-lg transition-colors">
                  Close
                </button>
              </div>
            )}
          </DataLoader>
        </div>
      )}

      {activeDemo === 'analytics' && (
        <div className="mt-6 p-4 bg-[#141414] rounded-lg">
          <DataLoader
            fetchData={mockFetchAnalytics}
            loadingProps={{
              brandName: 'LUXE',
              tagline: 'Processing analytics...',
              variant: 'minimal',
              minLoadTime: 2000,
              showProgress: true,
            }}>
            {(data: any) => (
              <div className="text-white">
                <h4 className="text-lg font-semibold mb-2">Analytics Loaded!</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e50000]">
                      {data.views.toLocaleString()}
                    </div>
                    <div className="text-sm text-[#999999]">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e50000]">
                      {data.clicks.toLocaleString()}
                    </div>
                    <div className="text-sm text-[#999999]">Clicks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#e50000]">{data.conversions}</div>
                    <div className="text-sm text-[#999999]">Conversions</div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="bg-[#e50000] hover:bg-[#ff3333] text-white px-4 py-2 rounded-lg transition-colors">
                  Close
                </button>
              </div>
            )}
          </DataLoader>
        </div>
      )}
    </div>
  );
}

function CustomizationDemo() {
  const [config, setConfig] = useState({
    brandName: 'LUXE',
    tagline: 'Custom Experience',
    variant: 'gradient' as 'gradient' | 'glassmorphism' | 'minimal',
    minLoadTime: 2000,
    showProgress: true,
  });
  const [showLoader, setShowLoader] = useState(false);

  const triggerCustomLoader = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), config.minLoadTime + 1000);
  };

  return (
    <div className="bg-[#1f1f1f] p-6 rounded-lg border border-[#262626]">
      <h3 className="text-white text-xl font-semibold mb-4">Customization Demo</h3>
      <p className="text-[#999999] mb-4">
        Customize loader properties and see the results in real-time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-white text-sm font-medium mb-2">Brand Name</label>
          <input
            type="text"
            value={config.brandName}
            onChange={(e) => setConfig((prev) => ({ ...prev, brandName: e.target.value }))}
            className="w-full bg-[#262626] text-white p-2 rounded-lg border border-[#404040] focus:border-[#e50000] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">Tagline</label>
          <input
            type="text"
            value={config.tagline}
            onChange={(e) => setConfig((prev) => ({ ...prev, tagline: e.target.value }))}
            className="w-full bg-[#262626] text-white p-2 rounded-lg border border-[#404040] focus:border-[#e50000] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">Variant</label>
          <select
            value={config.variant}
            onChange={(e) => setConfig((prev) => ({ ...prev, variant: e.target.value as any }))}
            className="w-full bg-[#262626] text-white p-2 rounded-lg border border-[#404040] focus:border-[#e50000] focus:outline-none">
            <option value="gradient">Gradient</option>
            <option value="glassmorphism">Glassmorphism</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Loading Time: {config.minLoadTime}ms
          </label>
          <input
            type="range"
            min="1000"
            max="5000"
            step="500"
            value={config.minLoadTime}
            onChange={(e) =>
              setConfig((prev) => ({ ...prev, minLoadTime: parseInt(e.target.value) }))
            }
            className="w-full accent-[#e50000]"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="flex items-center text-white">
          <input
            type="checkbox"
            checked={config.showProgress}
            onChange={(e) => setConfig((prev) => ({ ...prev, showProgress: e.target.checked }))}
            className="mr-2 accent-[#e50000]"
          />
          Show progress bar
        </label>
      </div>

      <button
        onClick={triggerCustomLoader}
        className="bg-[#e50000] hover:bg-[#ff3333] text-white px-6 py-2 rounded-lg transition-colors">
        Test Custom Loader
      </button>

      {showLoader && (
        <AppLoader
          brandName={config.brandName}
          tagline={config.tagline}
          minLoadTime={config.minLoadTime}
          onLoadComplete={() => setShowLoader(false)}
        />
      )}
    </div>
  );
}

export default function ServerTestPage() {
  return (
    <div className="min-h-screen bg-[#141414] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white tracking-wider mb-4">
            LUXE LOADER SHOWCASE
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#e50000] via-[#ff3333] to-[#e50000] mx-auto rounded-full mb-6" />
          <p className="text-[#999999] text-xl">
            Experience all loader variants and real-world usage scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GradientLoaderDemo />
          <GlassmorphismLoaderDemo />
          <MinimalLoaderDemo />
          <CustomizationDemo />
        </div>

        <DataFetchingDemo />

        <div className="mt-12 bg-[#1f1f1f] p-6 rounded-lg border border-[#262626]">
          <h3 className="text-white text-xl font-semibold mb-4">Usage Code Examples</h3>
          <div className="bg-[#0f0f0f] p-4 rounded-lg text-sm">
            <pre className="text-[#999999] overflow-x-auto">
              {`// Basic Usage
<AppLoader
  brandName="LUXE"
  tagline="Loading..."
  onLoadComplete={() => setLoading(false)}
/>

// With Variants
<AppLoader variant="glassmorphism" />
<AppLoader variant="minimal" showProgress={false} />

// Data Fetching Pattern
{isLoading ? (
  <AppLoader
    brandName="LUXE"
    tagline="Fetching data..."
    variant="gradient"
  />
) : (
  <YourContent data={data} />
)}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
