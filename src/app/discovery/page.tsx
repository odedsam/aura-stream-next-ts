import GenreGrid from '@/app/components/ui/GenreGrid';

export default async function DiscoverPage() {
  const genreIds = [
    { id: 28, label: 'Action' },
    { id: 12, label: 'Adventure' },
    { id: 35, label: 'Comedy' },
    { id: 18, label: 'Drama' },
    { id: 27, label: 'Horror' },
  ];

  return (
    <div className="space-y-6 p-6">
      {genreIds.map(({ id, label }) => (
        <div key={id}>
          <h2 className="text-xl font-bold mb-2">{label}</h2>
          <GenreGrid genreId={id} />
        </div>
      ))}
    </div>
  );
}
