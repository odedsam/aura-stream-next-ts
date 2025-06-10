import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

interface AuraButtonProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const buttonVariants = cva(
  'group relative font-light uppercase tracking-widest transition-all duration-500 inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'text-white border border-red-600/30 hover:border-red-600 hover:bg-red-600/5',
        secondary: 'text-white border border-blue-600/30 hover:border-blue-600 hover:bg-blue-600/5',
        success:
          'text-white border border-green-600/30 hover:border-green-600 hover:bg-green-600/5',
        warning:
          'text-white border border-yellow-600/30 hover:border-yellow-600 hover:bg-yellow-600/5',
        danger: 'text-white border border-red-600/30 hover:border-red-600 hover:bg-red-600/5',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-8 py-3 text-sm',
        lg: 'px-12 py-4 text-base',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  },
);

const iconSizeMap = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
} as const;

const overlayMap = {
  primary: 'bg-red-600/10',
  secondary: 'bg-blue-600/10',
  success: 'bg-green-600/10',
  warning: 'bg-yellow-600/10',
  danger: 'bg-red-600/10',
} as const;

const AuraButton: React.FC<AuraButtonProps> = ({
  children,
  href,
  onClick,
  icon: Icon,
  variant,
  size,
  disabled = false,
  className,
  external = false,
  type = 'button',
  ...props
}) => {
  const classes = cn(buttonVariants({ variant, size, disabled }), className);
  const iconClass = iconSizeMap[size ?? 'md'];
  const overlayClass = overlayMap[variant ?? 'primary'];

  const buttonContent = (
    <>
      {Icon && <Icon className={cn(iconClass, 'inline-block mr-2')} />}
      <span className="relative z-10">{children}</span>
      <div
        className={cn(
          'absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left',
          overlayClass,
        )}
      />
    </>
  );

  const buttonStyle = {
    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
  };

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={buttonStyle}
          {...props}>
          {buttonContent}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={buttonStyle}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={buttonStyle}
      {...props}>
      {buttonContent}
    </button>
  );
};

export { AuraButton, buttonVariants };

/**
 * USAGE EXAMPLES:
 *
 * // Link with icon
 * <AuraButton href="/browse" icon={Play}>
 *   Start Watching
 * </AuraButton>
 *
 * // Click handler
 * <AuraButton onClick={() => console.log('clicked')} icon={Heart} variant="danger">
 *   Like This
 * </AuraButton>
 *
 * // Different variant and size
 * <AuraButton href="/dashboard" variant="secondary" size="lg" icon={User}>
 *   Go to Dashboard
 * </AuraButton>
 *
 * // External link
 * <AuraButton href="https://example.com" external icon={ExternalLink} variant="success">
 *   Visit Site
 * </AuraButton>
 *
 * // Submit button
 * <AuraButton type="submit" variant="primary" size="md">
 *   Submit Form
 * </AuraButton>
 *
 * // Disabled state
 * <AuraButton disabled variant="warning">
 *   Disabled Button
 * </AuraButton>
 *
 * // Absolute position with custom layout
 * <div className="absolute bottom-8 w-full flex justify-center z-10">
 *   <AuraButton className="w-fit" href="/browse" icon={Play}>
 *     Start Watching
 *   </AuraButton>
 * </div>
 */
