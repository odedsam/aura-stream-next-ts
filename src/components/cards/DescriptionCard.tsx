import { cn } from '@/utils';
type Props = {
  children: React.ReactNode;
  className?: string;
};


const DescriptionCard = ({ children, className }: Props) => {
  return <section className={cn('content-block-gray', className)}>{children}</section>;
};
export default DescriptionCard;
