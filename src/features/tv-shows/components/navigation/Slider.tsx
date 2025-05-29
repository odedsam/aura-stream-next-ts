import React from 'react';

interface SliderDotsProps {
  /**
   * מספר הנקודות בסך הכל.
   */
  count: number;
  /**
   * האינדקס של הנקודה הנוכחית (מתחיל מ-0).
   */
  currentIndex: number;
  /**
   * פונקציה שנקראת כאשר לוחצים על נקודה.
   * מקבלת את האינדקס של הנקודה שנלחצה.
   */
  onDotClick?: (index: number) => void;
  /**
   * קלאסים נוספים שניתן להוסיף לקונטיינר של הנקודות.
   */
  className?: string;
}

const SliderDots: React.FC<SliderDotsProps> = ({
  count,
  currentIndex,
  onDotClick,
  className = '',
}) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`
            w-2 h-2 rounded-full
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${index === currentIndex ? 'bg-red-500' : 'bg-gray-500'}
          `}
          aria-label={`עבור לשקופית ${index + 1}`}
          onClick={() => onDotClick?.(index)}
        />
      ))}
    </div>
  );
};

export default SliderDots;

// דוגמת שימוש בתוך רכיב App

//usage
// export function App() {
//   const [current, setCurrent] = React.useState(0);
//   const totalDots = 5;

//   const handleDotClick = (index: number) => {
//     setCurrent(index);
//     console.log(`עבור לשקופית ${index + 1}`);
//   };

//   // פונקציה לדפדוף אוטומטי (לצורך הדגמה)
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % totalDots);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [totalDots]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">מחווני סליידר</h1>
//       <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
//         <div className="w-64 h-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-md mb-4 flex items-center justify-center text-white text-xl font-bold">
//           שקופית {current + 1}
//         </div>
//         <SliderDots
//           count={totalDots}
//           currentIndex={current}
//           onDotClick={handleDotClick}
//           className="mt-4"
//         />
//       </div>
//     </div>
//   );


//usage :
{/* <SliderDots
  count={numberOfSlides}
  currentIndex={currentSlideIndex}
  onDotClick={(index) => {
    // עדכן את מצב השקופית הנוכחית שלך כאן
    console.log(`המשתמש לחץ על נקודה ${index + 1}`);
  }}
/> */}
