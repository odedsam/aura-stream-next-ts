import { cn } from '@/lib/utils';

type BrowseProps = {
  children?: React.ReactNode;
  className?: string;
  categoryName: string;
  categoryClassName?: string;
  showCategory?: boolean;
};

export const BrowseContainer = ({ categoryName, children, className, categoryClassName, showCategory = true }: BrowseProps) => {
  return (
    <div className={cn('relative bg-primary border-2 border-quinary w-[90%] my-24 mx-auto', className)}>
      {showCategory && (
        <div
          className={cn(
            'absolute -top-6 left-6 bg-red-def text-white px-5 py-3 text-base font-manrope font-semibold rounded-md shadow-md z-10',
            categoryClassName,
          )}>
          <p>{categoryName}</p>
        </div>
      )}
      <div className="relative z-0">{children}</div>
    </div>
  );
};
