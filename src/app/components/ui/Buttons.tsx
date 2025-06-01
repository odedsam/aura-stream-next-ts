import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-manrope font-semibold rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        dark: 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-gray-100 transition-all duration-200 ease-in-out hover:shadow-lg',
        red: 'bg-[#E50000] text-white hover:bg-[#cc0000] font-semibold hover:text-gray-100 transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-red-500/25',
        darker:
          'bg-[#141414] text-white hover:bg-[#242424] hover:text-gray-100 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105',
        bordered:
          'bg-[#141414] text-white hover:bg-[#242424] border-3 border-quinary hover:text-gray-100 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-105',
      },
      size: {
        default: 'h-12 px-8 py-4',
        sm: 'h-9 px-6 py-3 text-base',
        lg: 'h-14 px-10 py-5 text-xl',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode | React.ReactSVGElement;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, iconPosition = 'left', children, ...props }, ref) => {
    const content = icon ? (
      iconPosition === 'right' ? (
        <>
          {children}
          <span className="flex-shrink-0">{icon}</span>
        </>
      ) : (
        <>
          <span className="flex-shrink-0">{icon}</span>
          {children}
        </>
      )
    ) : (
      children
    );

    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {content}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

/* Usages With Icon :
  <Button variant="bordered" size="default" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
            Continue
          </Button>
*/
