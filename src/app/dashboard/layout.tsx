import type { Metadata } from 'next';
import { AuthGuard } from '../components/auth/AuthGuard';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your liked articles and personal content',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </AuthGuard>
  );
}
