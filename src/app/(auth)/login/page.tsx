'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/store/useAuth';
import { AuraButton } from '@/components/ui/AuraButton';
import { ButtonFacebook, ButtonGoogle } from '@/components/ui/Buttons';
import { toast } from '@/lib/toast';
import { useDialogStore } from '@/app/store/useDialogStore';
import Link from 'next/link';
import MaintanceDialog from '@/components/feedback/Maintance';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const {open,close} = useDialogStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    open();
    return;
    // try {
    //   const res = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (!res.ok) {
    //     const data = await res.json();
    //     setError(data.error || 'Invalid credentials. Please try again.');
    //     return;
    //   }

    //   await login(email, password);
    //   // router.push('/dashboard');
    // } catch (err) {
    //   setError('Something went wrong. Please try again.');
    // }
  };

  // Lucide does not have a Google icon, so we use a colored Circle as a placeholder

  return (
    <div className="h-screen flex items-center justify-center bg-primary mt-8 px-4 py-12">
      <div className="w-full max-w-md space-y-8 content-block-gray rounded-none p-8 shadow-md">
        <h2 className="text-center text-2xl aura-text">Sign In</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-[var(--red-def)] text-white p-3 text-sm text-center">{error}</div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-[var(--gray-65)] font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[var(--clr-sec)] border border-[var(--black-25)] text-white placeholder-[var(--gray-def)] focus:outline-none focus:ring-2 focus:ring-[var(--red-def)]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm text-[var(--gray-65)] font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[var(--clr-sec)] border border-[var(--black-25)] text-white placeholder-[var(--gray-def)] focus:outline-none focus:ring-2 focus:ring-[var(--red-def)]"
              placeholder="••••••••"
              required
            />
          </div>

          <AuraButton
            type="submit"
            variant="primary"
            className="w-full aura-text"
            onClick={open}
            disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </AuraButton>

          <div className="flex flex-col gap-3 mt-4">
            <ButtonFacebook onClick={open} />
            <ButtonGoogle onClick={open} />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--gray-60)]">
          Don't have an account?{' '}
          <Link href="/register" className="text-[var(--red-def)] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <>
      <MaintanceDialog  />
      </>
    </div>

  );
}

// toast.error('Login functionality will be temporarily unavailable for the next two days. We apologize for the inconvenience.');
