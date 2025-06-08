export interface CastMember {
  id: string | number;
  name: string;
  character:string;
  profile_path?: string | null;
}


interface CastCardProps {
  member: CastMember;
}

const CastCard = ({ member }: CastCardProps) => {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  const imageUrl = member.profile_path
    ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
    : null;

  return (
    <div className="flex-shrink-0 w-20">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <p className="mt-2 text-sm text-white text-center leading-tight line-clamp-2">
        {member.name}
      </p>
    </div>
  );
};

export default CastCard;
