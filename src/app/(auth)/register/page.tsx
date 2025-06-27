'use client';

import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/store/useAuth';
import { AuraButton } from '@/app/components/ui/AuraButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/lib/toast';
import { ButtonFacebook, ButtonGoogle } from '@/app/components/ui/Buttons';
import Link from 'next/link';
import { useDialogStore } from '@/app/store/useDialogStore';
import MaintanceDialog from '@/app/components/feedback/Maintance';

const registerSchema = z
  .object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { register: registerUser, isLoading } = useAuth();
  const router = useRouter();
  const { open } = useDialogStore();
  const { register, handleSubmit, formState: { errors }, } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema),});



  const onSubmit = async (data: RegisterFormData) => {
    open();
    return;
    // try {
    //   await registerUser(data.email, data.password, data.name);
    //   toast.error('Sign-Up functionality will be temporarily unavailable for the next two days. We apologize for the inconvenience.');

    //   // router.push('/dashboard');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div className="h-screen flex items-center my-20 justify-center bg-primary px-4 py-12">
      <div className="w-full max-w-md space-y-8 content-block-gray rounded-none p-8  shadow-md ">
        <h2 className="text-center text-2xl aura-text tracking-widest">Create Account</h2>

        <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-[var(--gray-65)] font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              {...register('name')}
              className="w-full px-4 py-2 bg-[var(--clr-sec)] border border-[var(--black-25)] text-white placeholder-[var(--gray-def)] focus:outline-none focus:ring-2 focus:ring-[var(--red-def)]"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-sm text-[var(--red-def)] mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-[var(--gray-65)] font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              {...register('email')}
              className="w-full px-4 py-2 bg-[var(--clr-sec)] border border-[var(--black-25)] text-white placeholder-[var(--gray-def)] focus:outline-none focus:ring-2 focus:ring-[var(--red-def)]"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-sm text-[var(--red-def)] mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm text-[var(--gray-65)] font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="new-password"
              {...register('password')}
              className="w-full px-4 py-2 bg-sec border border-[var(--black-25)] text-white placeholder-gray-def focus:outline-none focus:ring-2 focus:ring-red-def"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-sm text-red-def mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-[var(--gray-65)] font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              {...register('confirmPassword')}
              className="w-full px-4 py-2 bg-[var(--clr-sec)] border border-[var(--black-25)]  text-white placeholder-[var(--gray-def)] focus:outline-none focus:ring-2 focus:ring-[var(--red-def)]"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-[var(--red-def)] mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <AuraButton
            type="submit"
            variant="primary"
            className="w-full aura-text"
            onClick={open}
            disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </AuraButton>

          <div className="flex flex-col gap-3 mt-4">
            <ButtonFacebook onClick={open} />
            <ButtonGoogle onClick={open} />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--gray-60)]">
          Already have an account?{' '}
          <Link href="/login" className="text-[var(--red-def)] hover:underline">
            Log in
          </Link>
        </p>
      </div>
      <>
        <MaintanceDialog />
      </>
    </div>
  );
}
