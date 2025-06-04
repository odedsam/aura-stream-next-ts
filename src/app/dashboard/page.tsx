'use client';

import { ProtectedRoute } from '../components/auth/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">Quick Stats</h2>
            <p className="text-gray-400">Your content overview</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">Recently Watched</h2>
            <p className="text-gray-400">Continue where you left off</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-white">Recommendations</h2>
            <p className="text-gray-400">New content for you</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
