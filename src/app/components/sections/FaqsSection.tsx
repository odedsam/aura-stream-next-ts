// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

// // Reusable FAQ Card Component
// const FAQCard = ({ question, answer, isOpen, onToggle, number }) => {
//   return (
//     <div className="border-b border-gray-800">
//       <button
//         onClick={onToggle}
//         className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-900/50 transition-colors duration-200"
//       >
//         <div className="flex items-center gap-4">
//           <span className="text-gray-500 text-lg font-medium min-w-[2rem]">
//             {String(number).padStart(2, '0')}
//           </span>
//           <h3 className="text-white text-lg font-medium">{question}</h3>
//         </div>
//         <div className="text-gray-400 flex-shrink-0 ml-4">
//           {isOpen ? (
//             <Minus className="w-5 h-5" />
//           ) : (
//             <Plus className="w-5 h-5" />
//           )}
//         </div>
//       </button>

//       {isOpen && (
//         <div className="pb-6 pl-12 pr-4">
//           <p className="text-gray-300 leading-relaxed">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // FAQ Section Component
// const FAQSection = ({ faqs = [], title = "Frequently Asked Questions", subtitle = "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe." }) => {
//   const [openIndex, setOpenIndex] = useState(0); // First item open by default

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="bg-black min-h-screen p-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-white text-3xl font-bold">{title}</h2>
//             <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
//               Ask a Question
//             </button>
//           </div>
//           <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
//         </div>

//         {/* FAQ Cards */}
//         <div className="bg-gray-900/30 rounded-xl border border-gray-800">
//           {faqs.map((faq, index) => (
//             <FAQCard
//               key={index}
//               question={faq.question}
//               answer={faq.answer}
//               number={index + 1}
//               isOpen={openIndex === index}
//               onToggle={() => handleToggle(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage with StreamVibe FAQs
// const StreamVibeFAQs = () => {
//   const faqData = [
//     {
//       question: "What is StreamVibe?",
//       answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
//     },
//     {
//       question: "How much does StreamVibe cost?",
//       answer: "StreamVibe offers three subscription plans: Basic Plan at $9.99/month, Standard Plan at $12.99/month, and Premium Plan at $14.99/month. Each plan comes with different features and content access levels."
//     },
//     {
//       question: "What content is available on StreamVibe?",
//       answer: "StreamVibe offers an extensive library of movies and TV shows across various genres, including the latest releases, classic films, documentaries, and exclusive original content."
//     },
//     {
//       question: "How can I watch StreamVibe?",
//       answer: "You can watch StreamVibe on multiple devices including smartphones, tablets, smart TVs, laptops, and desktop computers. Our platform is accessible through web browsers and dedicated mobile apps."
//     },
//     {
//       question: "How do I sign up for StreamVibe?",
//       answer: "Signing up for StreamVibe is easy! Simply visit our website, choose your preferred subscription plan, create an account with your email, and provide payment information. You can start watching immediately after registration."
//     },
//     {
//       question: "What is the StreamVibe free trial?",
//       answer: "StreamVibe offers a free trial period for new subscribers. During this trial, you can explore our full content library and features without any charges. The trial duration varies by plan."
//     },
//     {
//       question: "How do I contact StreamVibe customer support?",
//       answer: "You can reach our customer support team through multiple channels: email support, live chat on our website, or phone support. Our team is available 24/7 to assist with any questions or technical issues."
//     },
//     {
//       question: "What are the StreamVibe payment methods?",
//       answer: "StreamVibe accepts various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and digital wallets. All payments are processed securely through encrypted channels."
//     }
//   ];

//   return <FAQSection faqs={faqData} />;
// };

// export default StreamVibeFAQs;

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Types
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  number: number;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  onAskQuestion?: () => void;
}

// Reusable FAQ Card Component
const FAQCard: React.FC<FAQCardProps> = ({ question, answer, isOpen, onToggle, number }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-900/50 transition-colors duration-200 px-4"
      >
        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-lg font-medium min-w-[2rem]">
            {String(number).padStart(2, '0')}
          </span>
          <h3 className="text-white text-lg font-medium">{question}</h3>
        </div>
        <div className="text-gray-400 flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="pb-6 pl-12 pr-8">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",
  faqs,
  onAskQuestion = () => console.log('Ask a question clicked')
}) => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default

  const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-black min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - FAQ List */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-white text-4xl font-bold leading-tight">{title}</h2>
                <button
                  onClick={onAskQuestion}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap ml-4"
                >
                  Ask a Question
                </button>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">{subtitle}</p>
            </div>

            {/* FAQ Cards */}
            <div className="bg-gray-900/30 rounded-xl border border-gray-800">
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
          </div>

          {/* Right Side - Additional FAQs */}
          <div>
            <div className="mb-12">
              <h3 className="text-white text-2xl font-bold mb-6">More Questions</h3>
            </div>

            <div className="bg-gray-900/30 rounded-xl border border-gray-800">
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
      </div>
    </div>
  );
};

// Example usage with StreamVibe FAQs
const StreamVibeFAQs: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "What is StreamVibe?",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
      question: "How much does StreamVibe cost?",
      answer: "StreamVibe offers three subscription plans: Basic Plan at $9.99/month, Standard Plan at $12.99/month, and Premium Plan at $14.99/month. Each plan comes with different features and content access levels."
    },
    {
      question: "What content is available on StreamVibe?",
      answer: "StreamVibe offers an extensive library of movies and TV shows across various genres, including the latest releases, classic films, documentaries, and exclusive original content."
    },
    {
      question: "How can I watch StreamVibe?",
      answer: "You can watch StreamVibe on multiple devices including smartphones, tablets, smart TVs, laptops, and desktop computers. Our platform is accessible through web browsers and dedicated mobile apps."
    },
    {
      question: "How do I sign up for StreamVibe?",
      answer: "Signing up for StreamVibe is easy! Simply visit our website, choose your preferred subscription plan, create an account with your email, and provide payment information. You can start watching immediately after registration."
    },
    {
      question: "What is the StreamVibe free trial?",
      answer: "StreamVibe offers a free trial period for new subscribers. During this trial, you can explore our full content library and features without any charges. The trial duration varies by plan."
    },
    {
      question: "How do I contact StreamVibe customer support?",
      answer: "You can reach our customer support team through multiple channels: email support, live chat on our website, or phone support. Our team is available 24/7 to assist with any questions or technical issues."
    },
    {
      question: "What are the StreamVibe payment methods?",
      answer: "StreamVibe accepts various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and digital wallets. All payments are processed securely through encrypted channels."
    }
  ];

  return <FAQSection faqs={faqData} />;
};

export default StreamVibeFAQs;
export { FAQCard, FAQSection };
export type { FAQItem, FAQCardProps, FAQSectionProps };
