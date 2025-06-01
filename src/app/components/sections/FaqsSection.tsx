'use client';
import type { FAQItem } from '@/types';
import { useState } from 'react';
import { faqData } from '@/config/mock';
import { FaqHeader, FAQCard } from '@/app/components/cards/FaqCard';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  onAskQuestion?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",
  faqs,
  onAskQuestion = () => console.log('Ask a question clicked'),
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-primary py-16 px-8 max-w-4/5 mx-auto">
      <div>
        <FaqHeader title={title} subtitle={subtitle} onAskQuestion={onAskQuestion} />
      </div>

      <div className="flex flex-col items-center xl:flex-row gap-12 xl:gap-20">
        <div className="bg-primary rounded-xl w-full">
          {faqs.slice(0, 4).map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              number={index + 1}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="bg-primary rounded-xl w-full">
          {faqs.slice(4).map((faq, index) => (
            <FAQCard
              key={index + 4}
              question={faq.question}
              answer={faq.answer}
              number={index + 5}
              isOpen={openIndex === index + 4}
              onToggle={() => handleToggle(index + 4)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StreamVibeFAQs: React.FC = () => {
  return <FAQSection faqs={faqData} />;
};

export default StreamVibeFAQs;
