import { FAQCardProps, FaqHeaderProps } from '@/types';
import { Plus, Minus } from 'lucide-react';
import { BoxTag } from '@/app/components/ui/Tags';
import { Divider } from '@/app/components/ui/Divider'; // adjust path as needed

export const FaqHeader: React.FC<FaqHeaderProps> = ({ title, subtitle, onAskQuestion = () => console.log('Ask a question clicked') }) => {
  return (
    <div className="mb-12">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-white text-4xl font-bold leading-tight">{title}</h2>
        <button
          onClick={onAskQuestion}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap ml-4">
          Ask a Question
        </button>
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
            <span className="text-gray-def text-lg font-medium p-3">{String(number).padStart(2, '0')}</span>
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

      {/* Show divider only when collapsed */}
      {!isOpen && <Divider />}
    </div>
  );
};
