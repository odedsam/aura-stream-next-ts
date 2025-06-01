import { FAQCardProps, FaqHeaderProps } from '@/types';
import { Plus, Minus } from 'lucide-react';

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
      <p className="text-gray-400 text-lg leading-relaxed">{subtitle}</p>
    </div>
  );
};

export const FAQCard: React.FC<FAQCardProps> = ({ question, answer, isOpen, onToggle, number }) => {
  return (
    <div className="border-b border-quinary">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-900/50 transition-colors duration-200 px-4">
        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-lg font-medium min-w-[2rem]">{String(number).padStart(2, '0')}</span>
          <h3 className="text-white text-lg font-medium">{question}</h3>
        </div>
        <div className="text-gray-400 flex-shrink-0 ml-4">{isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</div>
      </button>

      {isOpen && (
        <div className="pb-6 pl-12 pr-8">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};
