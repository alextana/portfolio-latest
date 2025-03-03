'use client'
import { cn } from '@/lib/utils'
import { MouseEventHandler, MouseEvent, useState } from 'react'

export default function MainBackground({
  children,
}: {
  children: React.ReactNode
}) {
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent
  ) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const [position, setPosition] = useState({ x: -9999, y: -9999 })
  return (
    <div
      className={cn(
        'text-white jumbo w-full h-screen lg:h-[60vh] bg-gradient-to-br',
        ' from-neutral-950 to-neutral-900',
        'grid place-content-center relative',
        'boxes overflow-hidden'
      )}
      onMouseMove={handleMouseMove}
    >
      <div className='vignette absolute z-50 pointer-events-none' />
      <div
        className={cn(
          'absolute bg-gradient-to-br from-green-500 to-blue-500 w-[400px] h-[300px]',
          'rounded-full blur-3xl mix-blend-soft-light'
        )}
        style={{ left: position.x - 200, top: position.y - 150 }}
      />

      <div
        className={cn(
          'absolute bg-white w-[400px] h-[300px]',
          'rounded-full blur-3xl mix-blend-overlay'
        )}
        style={{ left: position.x - 200, top: position.y - 150 }}
      />
      {children}
    </div>
  )
}
