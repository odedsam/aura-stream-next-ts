import { devicesData } from '@/config/mock';
import DeviceCard from '../cards/DeviceCard';
import Image from 'next/image';

const DeviceSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-manrope p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold mb-4">We Provide you streaming experience across various devices.</h1>
          <p className="text-gray-def text-lg">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devicesData.map((device) => (
            <DeviceCard
              key={device.id}
              icon={<Image src={device.iconPath} alt={`${device.title} icon`} width={20} height={20} className="w-5 h-5" />}
              title={device.title}
              description={device.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceSection;
