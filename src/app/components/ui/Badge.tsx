import { cn } from '@/utils';

type BadgeProps = {
  text: string;
  color?: 'red' | 'green' | 'blue' | 'yellow';
  className?: string;
};

const colorMap = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
};

export const Badge = ({ text, color = 'red', className }: BadgeProps) => {
  return (
    <div
      className={cn(
        'text-white rounded-md text-xs font-bold px-2 py-1 inline-block max-w-fit',
        colorMap[color],
        className,
      )}>
      {text}
    </div>
  );
};

interface AlertBadgeProps {
  count?: number;
  className?: string;
}

const AlertBadge = ({ count = 1, className }: AlertBadgeProps) => {
  if (count < 1) return null;

  return (
    <span
      className={cn(
        'absolute -top-1 -right-1 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full cursor-pointer -z-10',
        className,
      )}>
      +{count}
    </span>
  );
};

export default AlertBadge;
