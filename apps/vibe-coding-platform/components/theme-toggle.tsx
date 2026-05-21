'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9 cursor-pointer opacity-70">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 relative cursor-pointer group"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <div className="relative h-4 w-4 flex items-center justify-center overflow-hidden">
        {/* Sun Icon */}
        <Sun className={`absolute h-4 w-4 transition-all duration-300 transform ${
          isDark 
            ? 'rotate-90 scale-0 opacity-0 translate-y-3' 
            : 'rotate-0 scale-100 opacity-100 translate-y-0'
        }`} />
        
        {/* Moon Icon */}
        <Moon className={`absolute h-4 w-4 transition-all duration-300 transform ${
          isDark 
            ? 'rotate-0 scale-100 opacity-100 translate-y-0' 
            : '-rotate-90 scale-0 opacity-0 -translate-y-3'
        }`} />
      </div>
    </Button>
  )
}
