import { cn } from '@/lib/utils';
import { IconLabelProps } from '@/types/components';

export const IconLabel = ({ icon: Icon, label, className }: IconLabelProps) => (
  <div className={cn('flex items-center gap-2 mb-3', className)}>
    <Icon className="w-5 h-5 text-gray-def" />
    <h3 className="text-gray-def text-sm font-medium">{label}</h3>
  </div>
);
