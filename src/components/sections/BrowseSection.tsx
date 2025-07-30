import { cn } from '@/utils';

type BrowseProps = {
  children?: React.ReactNode;
  className?: string;
  categoryName?: string;
  categoryClassName?: string;
  showCategory?: boolean;
};

export const BrowseSection = ({
  showCategory = false,
  categoryName,
  children,
  className,
  categoryClassName,
}: BrowseProps) => {
  return (
    <div
      className={cn(
        `relative bg-primary w-[95%] my-24 mx-auto`,
        className,
        showCategory && categoryName ? 'border-2 border-quinary' : '',
      )}>
      {showCategory && (
        <div
          className={cn(
            'absolute -top-6 left-6 bg-red-def text-white px-3 text-base font-manrope font-semibold rounded-md shadow-md z-10',
            categoryClassName,
          )}>
          <p>{categoryName}</p>
        </div>
      )}

      <div className="relative z-0">{children}</div>
    </div>
  );
};
