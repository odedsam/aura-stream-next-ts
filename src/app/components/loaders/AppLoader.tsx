import { useState, useEffect } from 'react'

interface NetflixLoaderProps {
  onLoadComplete?: () => void
  brandName?: string
  tagline?: string
  minLoadTime?: number
}

type LoadingPhase = 'loading' | 'completing' | 'fadeout'

interface AppWithLoaderProps {
  children?: React.ReactNode
}

const NetflixLoader: React.FC<NetflixLoaderProps> = ({
  onLoadComplete,
  brandName = "BRAND",
  tagline = "Premium Experience",
  minLoadTime = 2000
}) => {
  const [progress, setProgress] = useState<number>(0)
  const [phase, setPhase] = useState<LoadingPhase>('loading')
  const [dots, setDots] = useState<string>('')

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          setPhase('completing')
          return 100
        }
        // Realistic loading curve - faster at start, slower near end
        const increment = prev < 50 ? Math.random() * 15 : Math.random() * 5
        return Math.min(prev + increment, 95)
      })
    }, 100)

    // Animated dots for loading text
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 400)

    // Minimum loading time for UX
    const minTimer = setTimeout(() => {
      if (progress >= 95) {
        setPhase('completing')
      }
    }, minLoadTime)

    return () => {
      clearInterval(progressInterval)
      clearInterval(dotsInterval)
      clearTimeout(minTimer)
    }
  }, [minLoadTime, progress])

  useEffect(() => {
    if (phase === 'completing') {
      const timer = setTimeout(() => {
        setPhase('fadeout')
        setTimeout(() => {
          onLoadComplete?.()
        }, 800)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [phase, onLoadComplete])

  return (
    <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-800 ${
      phase === 'fadeout' ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-gray-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Brand Logo/Name */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider">
            {brandName}
          </h1>
          <div className="h-1 w-32 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          {/* Spinning Logo/Icon */}
          <div className="relative mx-auto w-16 h-16">
            <div className="absolute inset-0 border-4 border-red-600/30 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-red-600 rounded-full animate-spin" />
            <div className="absolute inset-2 border-2 border-transparent border-t-white/50 rounded-full animate-spin"
                 style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
          </div>

          {/* Progress Bar */}
          <div className="w-80 max-w-sm mx-auto space-y-3">
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Progress Text */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">
                Loading{dots}
              </span>
              <span className="text-white font-medium">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
            {tagline}
          </p>
        </div>

        {/* Bottom Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i: number) => (
              <div
                key={i}
                className="w-2 h-2 bg-red-600 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Netflix-style gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
    </div>
  )
}

// Main App Component with Loader Integration
const AppWithLoader: React.FC<AppWithLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showContent, setShowContent] = useState<boolean>(false)

  const handleLoadComplete = (): void => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  if (isLoading) {
    return (
      <NetflixLoader
        onLoadComplete={handleLoadComplete}
        brandName="LUXE"
        tagline="Crafting Premium Experiences"
        minLoadTime={1500}
      />
    )
  }

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`}>
      {children || (
        /* Default content if no children provided */
        <div className="relative h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome to Your App
            </h1>
            <p className="text-xl text-gray-300">
              Hero image has loaded successfully
            </p>
            <div className="mt-8">
              <button
                onClick={() => setIsLoading(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Show Loader Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { NetflixLoader, AppWithLoader }
export default NetflixLoader

// TypeScript Usage Example:
/*
import NetflixLoader from '@/components/loaders/netflix-loader'

// In your main layout or page:
const [isAppLoading, setIsAppLoading] = useState<boolean>(true)

<NetflixLoader
  onLoadComplete={() => setIsAppLoading(false)}
  brandName="YOUR BRAND"
  tagline="Premium Digital Experience"
  minLoadTime={2000}
/>
*/
