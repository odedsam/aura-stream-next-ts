"use client";

import { Toaster as SonnerToaster } from "sonner";

export const Toaster = () => {
  return (
    <SonnerToaster
      position="bottom-right" // מיקום הטוסטים במסך
      richColors // מאפשר צבעים עשירים לטוסטים מסוגים שונים (success, error וכו')
      closeButton // מציג כפתור סגירה לכל טוסט
      // ניתן להוסיף כאן עוד הגדרות כמו duration, theme, classNames ועוד.
      // ראה תיעוד sonner לפרטים נוספים: https://sonner.emilkowalski.pl/
    />
  );
};
