import { Persona } from '@/types/components';
import { User } from 'lucide-react';

export const PersonaCard = ({ personas }: { personas: Persona[] }) => (
  <div className="space-y-6">
    {personas.map((persona, index) => (
      <div key={index} className="space-y-3">
        <h3 className="text-gray-def">{persona.job}</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-primary p-4 rounded-lg border-2 border-quinary">
            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
              {persona.profile_path ? (
                <img
                  src={persona.profile_path}
                  alt={persona.job}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
              )}
            </div>
            <div>
              <h4 className="text-white font-medium">{persona.name}</h4>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
