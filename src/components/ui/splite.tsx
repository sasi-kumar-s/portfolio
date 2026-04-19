'use client'

import { Suspense, lazy, useRef } from 'react'
import { useInView } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { margin: "200px" })

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className ?? ''}`}>
      {isInView ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-t-white/50 border-neutral-800 animate-spin" />
            </div>
          }
        >
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </Suspense>
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}
    </div>
  )
}
