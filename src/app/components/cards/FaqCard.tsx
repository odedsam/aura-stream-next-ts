import { FAQCardProps, FaqHeaderProps } from '@/types';
import { Plus, Minus } from 'lucide-react';
import { BoxTag } from '@/app/components/ui/Tags';
import { Divider } from '@/app/components/ui/Divider'; // adjust path as needed
import { Button } from '../ui/Buttons';

export const FaqHeader: React.FC<FaqHeaderProps> = ({
  title,
  subtitle,
  onAskQuestion = () => console.log('Ask a question clicked'),
}) => {
  return (
    <div className="mb-2">
      <div className="space-y-12 mb-6 flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start">
        <h2 className="text-white text-4xl font-bold leading-tight">{title}</h2>
        <Button variant="red" className="mb-6" onClick={onAskQuestion}>
          Ask a Question
        </Button>
      </div>
      <p className="text-gray-def text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
};

export const FAQCard: React.FC<FAQCardProps> = ({ question, answer, isOpen, onToggle, number }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-teriary transition-colors duration-200 px-4">
        <div className="flex items-center gap-4">
          <BoxTag className="border-quaternary border-2 hover:bg-quinary px-1">
            <span className="text-gray-def text-lg font-medium p-3">
              {String(number).padStart(2, '0')}
            </span>
          </BoxTag>

          <h3 className="text-white text-lg font-medium">{question}</h3>
        </div>
        <div className="text-gray-def flex-shrink-0 ml-4">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="pb-6 pl-12 pr-8">
          <p className="text-gray-def leading-relaxed">{answer}</p>
        </div>
      )}

      {!isOpen && <Divider />}
    </div>
  );
};
