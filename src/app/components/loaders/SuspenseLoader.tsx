// import { useState, useEffect, useTransition } from 'react'

// interface SuspenseLoaderProps {
//   message?: string
//   minDisplayTime?: number
// }

// const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({
//   message = 'Loading',
//   minDisplayTime = 1200,
// }) => {
//   const [dots, setDots] = useState('')
//   const [visible, setVisible] = useState(true)

//   useEffect(() => {
//     const dotsInterval = setInterval(() => {
//       setDots((d) => (d.length >= 3 ? '' : d + '.'))
//     }, 400)

//     // מינימום זמן תצוגה למניעת פלאש קצר מדי
//     const timer = setTimeout(() => {
//       setVisible(false)
//     }, minDisplayTime)

//     return () => {
//       clearInterval(dotsInterval)
//       clearTimeout(timer)
//     }
//   }, [minDisplayTime])

//   if (!visible) return null

//   return (
//     <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center">
//       <div className="relative z-10 flex flex-col items-center space-y-6">
//         <svg
//           className="animate-spin h-16 w-16 text-red-600"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <circle
//             className="opacity-25"
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="currentColor"
//             strokeWidth="4"
//           />
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//           />
//         </svg>

//         <span className="text-white text-xl font-semibold tracking-wide select-none">
//           {message}
//           <span className="animate-pulse ml-1">{dots}</span>
//         </span>
//       </div>

//       {/* תחתית עם אנימציה עדינה של נקודות */}
//       <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {[0, 1, 2].map((i) => (
//           <div
//             key={i}
//             className="w-3 h-3 rounded-full bg-red-600 animate-bounce"
//             style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.2s' }}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SuspenseLoader


import { useState, useEffect } from 'react'

interface SuspenseLoaderProps {
  message?: string
  minDisplayTime?: number
}

const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({
  message = 'Loading',
  minDisplayTime = 1200,
}) => {
  const [dots, setDots] = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(d => (d.length >= 3 ? '' : d + '.'))
    }, 400)

    const timer = setTimeout(() => setVisible(false), minDisplayTime)

    return () => {
      clearInterval(dotsInterval)
      clearTimeout(timer)
    }
  }, [minDisplayTime])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <svg
          className="animate-spin h-16 w-16 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>

        <span className="text-white text-xl font-semibold tracking-wide select-none">
          {message}
          <span className="animate-pulse ml-1">{dots}</span>
        </span>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-red-600 animate-bounce"
            style={{ animationDelay: `${i * 0.2}s`, animationDuration: '1.2s' }}
          />
        ))}
      </div>
    </div>
  )
}

export default SuspenseLoader
