import { cn } from '@/lib/utils';

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
    <div className={cn('text-white rounded-md text-xs font-bold px-2 py-1 inline-block max-w-fit', colorMap[color], className)}>{text}</div>
  );
};
