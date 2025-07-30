import React from "react";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * כיוון החץ.
   * @default 'right'
   */
  direction?: "left" | "right" | "up" | "down";

  variant?: "primary" | "ghost";

  size?: "small" | "medium" | "large";

  ariaLabel: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction = "right",
  variant = "primary",
  size = "medium",
  ariaLabel,
  className = "",
  children,
  ...rest
}) => {
  const sizeClasses = {
    small: "p-2 w-8 h-8 text-base", // קטן
    medium: "p-3 w-10 h-10 text-lg", // בינוני (ברירת מחדל)
    large: "p-4 w-12 h-12 text-xl", // גדול
  };

  // קביעת סגנון הרקע והצבעים בהתאם ל-prop 'variant'
  const variantClasses = {
    primary: "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900", // רקע כהה, טקסט לבן
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 active:bg-gray-200", // רקע שקוף, טקסט כהה
  };

  // קביעת סיבוב החץ בהתאם ל-prop 'direction'
  const directionRotation = {
    right: "rotate-0",
    down: "rotate-90",
    left: "rotate-180",
    up: "-rotate-90",
  };

  return (
    <button
      className={`
        flex items-center justify-center
        rounded-full // כפתור עגול
        transition-colors duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      aria-label={ariaLabel}
      {...rest}
    >
      {children ? (
        children
      ) : (
        // SVG של חץ ימינה, עם סיבוב מותנה
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            w-full h-full
            ${directionRotation[direction]}
            transition-transform duration-200 ease-in-out
          `}
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

export default ArrowButton;

/* Usage :
 <ArrowButton
          direction="up"
          variant="ghost"
          size="medium"
          ariaLabel="למעלה (שקוף)"
          onClick={() => console.log('חץ למעלה שקוף נלחץ')}
        />
         */
