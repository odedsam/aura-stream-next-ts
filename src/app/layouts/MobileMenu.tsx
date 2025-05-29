import React, { useState, useEffect, useRef } from 'react';

// הגדרת הממשק עבור פריטי הניווט
interface NavLink {
  label: string;
  href: string;
}

// הגדרת ה-props עבור רכיב MobileMenu
interface MobileMenuProps {
  /**
   * מערך של אובייקטים המייצגים קישורי ניווט.
   */
  links: NavLink[];
  /**
   * פונקציה אופציונלית שנקראת כאשר לוחצים על קישור בתפריט.
   * שימושי לסגירת התפריט או לטיפול בלוגיקה נוספת.
   */
  onLinkClick?: (link: NavLink) => void;
  /**
   * קלאסים נוספים שניתן להוסיף לקונטיינר הראשי של התפריט.
   */
  className?: string;
  /**
   * תוכן שיוצג בראש התפריט (למשל, לוגו).
   */
  headerContent?: React.ReactNode;
  /**
   * תוכן שיוצג בתחתית התפריט (למשל, כפתור התחברות).
   */
  footerContent?: React.ReactNode;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  links,
  onLinkClick,
  className = '',
  headerContent,
  footerContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // רפרנס לתפריט עצמו

  // פונקציה לסגירת התפריט
  const closeMenu = () => setIsOpen(false);
  // פונקציה לפתיחת/סגירת התפריט
  const toggleMenu = () => setIsOpen(!isOpen);

  // טיפול בלחיצה מחוץ לתפריט כדי לסגור אותו
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // ניקוי event listener בעת הסרה מה-DOM
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // טיפול בלחיצת מקש Escape לסגירת התפריט
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // טיפול בלחיצה על קישור
  const handleLinkClick = (link: NavLink) => {
    closeMenu(); // סגור את התפריט לאחר לחיצה על קישור
    onLinkClick?.(link); // הפעל את פונקציית ה-callback אם סופקה
  };

  return (
    <div className={`md:hidden ${className}`}>
      {/* כפתור המבורגר לפתיחת התפריט */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        aria-label="פתח תפריט ניווט"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
      >
        {/* אייקון המבורגר SVG */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* שכבת אוברליי כהה כשהתפריט פתוח */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          aria-hidden="true"
        ></div>
      )}

      {/* תפריט הנייד עצמו */}
      <div
        ref={menuRef}
        id="mobile-menu-panel"
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 z-50
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* כפתור סגירה */}
        <div className="flex justify-between items-center mb-6">
          {headerContent ? (
            <div id="mobile-menu-title" className="text-xl font-bold text-gray-800">
              {headerContent}
            </div>
          ) : (
            <h2 id="mobile-menu-title" className="text-xl font-bold text-gray-800">תפריט</h2>
          )}
          <button
            onClick={closeMenu}
            className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="סגור תפריט ניווט"
          >
            {/* אייקון X SVG */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* קישורי ניווט */}
        <nav className="flex-grow">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link)}
                  className="block text-gray-800 hover:text-blue-600 text-lg font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* תוכן תחתון אופציונלי */}
        {footerContent && (
          <div className="mt-auto pt-6 border-t border-gray-200">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

// דוגמת שימוש בתוך רכיב App
// export function App() {
//   const navLinks = [
//     { label: 'בית', href: '/' },
//     { label: 'סרטים', href: '/movies' },
//     { label: 'סדרות', href: '/shows' },
//     { label: 'ז'אנרים', href: '/genres' },
//     { label: 'החשבון שלי', href: '/profile' },
//   ];

//   const handleMenuLinkClick = (link: NavLink) => {
//     console.log(`קישור נלחץ: ${link.label} (${link.href})`);
//     // כאן תוכל להוסיף לוגיקה לניווט, למשל:
//     // navigate(link.href);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 font-sans">
//       {/* הדמיית Header עם כפתור התפריט הנייד */}
//       <header className="w-full bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
//         <div className="text-2xl font-bold text-blue-600">MyFlix</div>
//         <MobileMenu
//           links={navLinks}
//           onLinkClick={handleMenuLinkClick}
//           headerContent={<div className="text-2xl font-bold text-blue-600">MyFlix</div>}
//           footerContent={
//             <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
//               התחבר
//             </button>
//           }
//         />
//       </header>

//       {/* תוכן הדף (יוסתר במסכים קטנים כדי להדגים את התפריט) */}
//       <div className="flex-grow flex items-center justify-center text-gray-700 text-center">
//         <h1 className="text-xl md:text-3xl">התוכן הראשי של האפליקציה</h1>
//       </div>

//       {/* הדמיית ניווט דסקטופ (יוצג רק במסכים גדולים) */}
//       <nav className="hidden md:flex bg-white shadow-sm p-4 w-full justify-center space-x-6">
//         {navLinks.map((link) => (
//           <a key={link.href} href={link.href} className="text-gray-800 hover:text-blue-600 font-medium">
//             {link.label}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// }




//usage :

//import MobileMenu from './components/MobileMenu'; // נניח שזה הנתיב

// ... בתוך רכיב ה-App או רכיב ה-Header שלך
// const navLinks = [
//   { label: 'בית', href: '/' },
//   { label: 'אודות', href: '/about' },
//   { label: 'שירותים', href: '/services' },
//   { label: 'צור קשר', href: '/contact' },
// ];

// <MobileMenu
//   links={navLinks}
//   onLinkClick={(link) => {
//     console.log(`ניווט אל: ${link.href}`);
//     // כאן תוכל להשתמש ב-React Router או בלוגיקת ניווט אחרת
//   }}
//   headerContent={<img src="https://placehold.co/80x40/000/fff?text=Logo" alt="Logo" />}
//   footerContent={<button className="w-full bg-blue-500 text-white py-2 rounded">התחבר</button>}
// />
