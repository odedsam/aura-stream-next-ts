import React, { useState } from "react";

interface ExpandablePanelProps {
  /**
   * המספר שמוצג בצד שמאל של הכותרת (לדוגמה, "01").
   */
  number: string;
  /**
   * הכותרת של הפאנל.
   */
  title: string;
  /**
   * תוכן הפאנל שיוצג כאשר הוא פתוח.
   */
  children: React.ReactNode;
  /**
   * קלאסים נוספים שניתן להוסיף לקונטיינר הראשי של הפאנל.
   */
  className?: string;
  /**
   * האם הפאנל פתוח כברירת מחדל.
   * @default false
   */
  defaultOpen?: boolean;
}

const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  number,
  title,
  children,
  className = "",
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-900 text-white rounded-xl p-6 ${className}`}>
      {/* כותרת הפאנל וכפתור הפלוס/מינוס */}
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-controls={`panel-content-${number}`}
      >
        <div className="flex items-center space-x-4">
          {/* מספר */}
          <div className="bg-gray-700 text-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold flex-shrink-0">
            {number}
          </div>
          {/* כותרת */}
          <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        </div>
        {/* אייקון פלוס/מינוס */}
        <div className="flex-shrink-0">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // אייקון מינוס
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            ) : (
              // אייקון פלוס
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            )}
          </svg>
        </div>
      </button>

      {/* תוכן הפאנל (מתרחב/מתכווץ) */}
      <div
        id={`panel-content-${number}`}
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
        aria-hidden={!isOpen}
      >
        <div className="text-gray-300 pl-14 pr-4">{children}</div> {/* ריפוד כדי להתיישר עם הטקסט */}
      </div>
    </div>
  );
};

export default ExpandablePanel;
