import { cn } from '@/lib/utils';
import { BoxTag } from '@/app/components/ui/Tags';

interface DeviceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div
      className={cn('relative rounded-xl p-6 border border-red-900/20', className)}
      style={{
        background: 'linear-gradient(315deg, rgba(229, 0, 0, 0.5) 0%, rgba(229, 0, 0, 0) 81%, #0F0F0F 100%)',
      }}>
      <div className="flex items-center gap-3 mb-4">
        <BoxTag icon={icon} />
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>

      <p className="text-gray-def text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default DeviceCard;
