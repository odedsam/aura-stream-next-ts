import { toast as sonnerToast } from "sonner";

/**
 * כלי עזר מותאם אישית להצגת הודעות טוסט.
 * עוטף את ספריית 'sonner' ומספק שיטות נוחות לשימוש.
 *
 * @example
 * // שימוש בטוסט הצלחה:
 * toast.success("הפעולה בוצעה בהצלחה!");
 *
 * @example
 * // שימוש בטוסט שגיאה:
 * toast.error("אירעה שגיאה: " + error.message);
 *
 * @example
 * // שימוש בטוסט טעינה (עם עדכון מאוחר יותר):
 * const loadingToastId = toast.loading("מעבד את בקשתך...");
 * // ... לאחר פעולה אסינכרונית
 * toast.success("הנתונים נשמרו!", { id: loadingToastId });
 *
 * @example
 * // טוסט עם כותרת ותיאור:
 * toast.info("עדכון חדש זמין", {
 * description: "לחץ כאן כדי לרענן את הדף.",
 * });
 */
export const toast = {
  /**
   * מציג טוסט הצלחה.
   * @param message - הודעת ההצלחה.
   * @param options - אפשרויות נוספות לטוסט (כמו id, duration, description).
   */
  success: (message: string, options?: Parameters<typeof sonnerToast.success>[1]) => {
    return sonnerToast.success(message, options);
  },

  /**
   * מציג טוסט שגיאה.
   * @param message - הודעת השגיאה.
   * @param options - אפשרויות נוספות לטוסט.
   */
  error: (message: string, options?: Parameters<typeof sonnerToast.error>[1]) => {
    return sonnerToast.error(message, options);
  },

  /**
   * מציג טוסט מידע.
   * @param message - הודעת המידע.
   * @param options - אפשרויות נוספות לטוסט.
   */
  info: (message: string, options?: Parameters<typeof sonnerToast.info>[1]) => {
    return sonnerToast.info(message, options);
  },

  /**
   * מציג טוסט אזהרה.
   * @param message - הודעת האזהרה.
   * @param options - אפשרויות נוספות לטוסט.
   */
  warning: (message: string, options?: Parameters<typeof sonnerToast.warning>[1]) => {
    return sonnerToast.warning(message, options);
  },

  /**
   * מציג טוסט טעינה.
   * @param message - הודעת הטעינה.
   * @param options - אפשרויות נוספות לטוסט.
   * @returns ה-ID של הטוסט, שניתן להשתמש בו כדי לעדכן או לסגור את הטוסט מאוחר יותר.
   */
  loading: (message: string, options?: Parameters<typeof sonnerToast.loading>[1]) => {
    return sonnerToast.loading(message, options);
  },

  /**
   * מציג טוסט גנרי (ללא סוג מוגדר מראש).
   * @param message - הודעת הטוסט.
   * @param options - אפשרויות נוספות לטוסט.
   */
  message: (message: string, options?: Parameters<typeof sonnerToast.message>[1]) => {
    return sonnerToast.message(message, options);
  },

  /**
   * סוגר טוסט ספציפי לפי ה-ID שלו.
   * @param id - ה-ID של הטוסט לסגירה.
   */
  dismiss: (id: string | number) => {
    sonnerToast.dismiss(id);
  },
};
