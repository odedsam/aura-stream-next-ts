export interface CastMember {
  id: string | number;
  name: string;
}

interface CastCardProps {
  member: CastMember;
}

const CastCard = ({ member }: CastCardProps) => {
  return (
    <div className="flex-shrink-0">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
        {member.name
          .split(' ')
          .map((n) => n[0])
          .join('')}
      </div>
    </div>
  );
};

export default CastCard;
