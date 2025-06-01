"use client";

import { Toaster as SonnerToaster } from "sonner";

export const Toaster = () => {
  return (
    <SonnerToaster
      position="top-right" // מיקום הטוסטים במסך
      richColors={true} // השבת צבעים עשירים כדי לאפשר צבעים מותאמים אישית
      closeButton // מציג כפתור סגירה לכל טוסט
      toastOptions={{
        classNames: {
          toast: "bg-primary border border-quinary rounded-lg text-white",
          // ניתן להתאים אישית גם את האלמנטים הפנימיים:
          title: "text-white font-medium",
          description: "text-white/90",
          closeButton: "text-white/70 hover:text-white border-quinary",
          // צבעים שונים לסוגי טוסט שונים:
          success: "bg-green-600 border border-green-500 rounded-lg text-white",
          error: "bg-red-600 border border-red-500 rounded-lg text-white",
          warning: "bg-yellow-600 border border-yellow-500 rounded-lg text-white",
          info: "bg-primary border border-quinary rounded-lg text-white",
        },
      }}
      // ניתן להוסיף כאן עוד הגדרות כמו duration, theme ועוד.
      // ראה תיעוד sonner לפרטים נוספים: https://sonner.emilkowalski.pl/
    />
  );
};
