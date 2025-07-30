import { memo } from 'react';

export type ResultsSummaryProps = {
  from: number;
  to: number;
  total: number;
};

export const ResultsSummary: React.FC<ResultsSummaryProps> = memo(({ from, to, total }) => {
  if (total === 0) return null;

  return (
    <div className="text-sm text-gray-def font-manrope select-none" aria-live="polite" role="status">
      <span>
        Showing {from}-{to} of {total}
      </span>
    </div>
  );
});
