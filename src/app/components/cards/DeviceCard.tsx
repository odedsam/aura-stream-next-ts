import { cn } from "@/lib/utils";
import { BoxTag } from "@/app/components/ui/Tags";
import { devicesData } from "@/config/mock";
import Image from "next/image";

interface DeviceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div
      className={cn("relative rounded-xl p-6 border border-red-900/20", className)}
      style={{
        background: "linear-gradient(315deg, rgba(229, 0, 0, 0.5) 0%, rgba(229, 0, 0, 0) 81%, #0F0F0F 100%)",
      }}
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-3 mb-4">
        <BoxTag icon={icon} />
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default DeviceCard;

export const DeviceCardGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold mb-4">
            We Provide you streaming experience across various devices.
          </h1>
          <p className="text-gray-400 text-lg">
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.
          </p>
        </div>

        {/* Grid of Device Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devicesData.map((device) => (
            <DeviceCard
              key={device.id}
              icon={
                <Image src={device.iconPath} alt={`${device.title} icon`} width={20} height={20} className="w-5 h-5" />
              }
              title={device.title}
              description={device.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
