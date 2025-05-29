import { cn } from "@/lib/utils";

export const LanguageTag = () => {
  return <div className=""></div>;
};

interface BoxTagProps {
  icon?: React.ReactNode;
  className?: string;
}

export const BoxTag: React.FC<BoxTagProps> = ({ icon, className }) => {
  return <div className={cn("w-8 h-8 bg-red-600 rounded flex items-center justify-center", className)}>{icon}</div>;
};
