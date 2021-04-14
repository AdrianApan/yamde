import React, { useState, useEffect } from 'react'

const useBreakpoint = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  useEffect(() => {
    window.addEventListener('resize', (event: UIEvent) => {
      const w = event.target as Window
      setWindowWidth(w.innerWidth)
    })
  }, [])

  return { breakpoint: windowWidth }
}

export default useBreakpoint
