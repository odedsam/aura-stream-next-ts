'use client';
import type { FAQItem } from '@/types';
import { useState } from 'react';
import { faqData } from '@/config/mock';
import { FaqHeader, FAQCard } from '@/app/components/cards/FaqCard';
import { cn } from '@/utils';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  onAskQuestion?: () => void;
  className?: string;
}

export const FAQSection = ({
  title = 'Frequently Asked Questions',
  subtitle = "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about AuraStream.",
  faqs,
  onAskQuestion,
  className,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={cn('bg-primary grid py-16 max-w-4/5 mx-auto', className)}>
      <div className="">
        <FaqHeader title={title} subtitle={subtitle} onAskQuestion={onAskQuestion} />
      </div>

      <div className="flex flex-col items-center xl:flex-row  py-14 xl:gap-20">
        <div className="bg-primary rounded-xl w-full grow-1 ">
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

        <div className="bg-primary rounded-xl w-full grow-1 ">
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

const AuraStreamFAQs = () => {
  return <FAQSection faqs={faqData} />;
};

export default AuraStreamFAQs;
