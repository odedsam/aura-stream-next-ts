import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { QuickActionsProps } from '@/types/components';

export interface QuickAction {
  id: string;
  label: string;
  onClick: () => void;
  variant?: VariantProps<typeof actionButtonVariants>['variant'];
  size?: VariantProps<typeof actionButtonVariants>['size'];
  icon?: LucideIcon;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const actionButtonVariants = cva(
  'px-3 py-1 text-white rounded text-sm transition-colors inline-flex items-center gap-1.5',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 hover:bg-blue-700',
        success: 'bg-green-600 hover:bg-green-700',
        warning: 'bg-yellow-600 hover:bg-yellow-700',
        danger: 'bg-red-600 hover:bg-red-700',
        secondary: 'bg-purple-600 hover:bg-purple-700',
        info: 'bg-cyan-600 hover:bg-cyan-700',
        neutral: 'bg-gray-600 hover:bg-gray-700',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export const ActionButton = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  disabled = false,
  loading = false,
  className,
  ...props
}: QuickAction) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        actionButtonVariants({ variant, size }),
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'opacity-75 cursor-wait',
        className,
      )}
      type="button"
      {...props}>
      {loading ? (
        <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        Icon && <Icon className="w-3 h-3" />
      )}
      {label}
    </button>
  );
};

export const QuickActions = ({
  title = 'Quick Actions',
  actions,
  className,
  showBorder = true,
  layout = 'horizontal',
  maxColumns = 3,
}: QuickActionsProps) => {
  const getLayoutClasses = () => {
    switch (layout) {
      case 'vertical':
        return 'flex flex-col gap-2';
      case 'grid':
        return `grid gap-2 ${maxColumns === 2 ? 'grid-cols-2' : maxColumns === 3 ? 'grid-cols-3' : 'grid-cols-4'}`;
      default:
        return 'flex flex-wrap gap-2';
    }
  };

  if (actions.length === 0) {
    return null;
  }

  return (
    <div className={cn(showBorder && 'border-t border-gray-700 pt-4', className)}>
      {title && <h4 className="text-gray-400 text-sm font-medium mb-3">{title}</h4>}
      <div className={getLayoutClasses()}>
        {actions.map((action) => (
          <ActionButton key={action.id} {...action} />
        ))}
      </div>
    </div>
  );
};
