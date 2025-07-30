import { cn } from '@/utils';
import { BoxTag } from '@/components/ui/Tags';

interface DeviceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn('relative rounded-xl p-6 device-gradient', className)}>
      <div className="flex items-center gap-3 mb-4">
        <BoxTag icon={icon} />
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>

      <p className="text-gray-def text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default DeviceCard;
