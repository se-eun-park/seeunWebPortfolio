'use client'

import { useState } from 'react'
import Link from 'next/link'
import SocialButtonIconMap from '@/utils/socialButtonIconMap'

type SocialButtonGroupProps = {
  name: 'github' | 'instagram' | 'email'
  theme?: 'light' | 'dark'
}

export default function SocialButtonGroup({ name, theme = 'dark' }: SocialButtonGroupProps) {
  const [isHover, setIsHover] = useState<boolean | null>(null)
  const socialButtonIconMap = SocialButtonIconMap({ theme, isHover })

  const handleOnMouseEnter = () => {
    setIsHover(true)
  }

  const handleOnMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div className='relative overflow-hidden w-16 aspect-square rounded-full'>
      <Link
        href={socialButtonIconMap[name].url}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className={`relative z-10 w-16 aspect-square border flex items-center justify-center rounded-full ${
          theme === 'dark' ? 'border-gray-500' : 'border-black-300'
        }`}
      >
        <button>{socialButtonIconMap[name].component}</button>
      </Link>

      {isHover !== null && (
        <div
          className={`absolute pointer-events-none ${
            theme === 'dark'
              ? isHover
                ? 'animate-fill-up bg-white'
                : 'animate-empty-out-white-to-black bg-black-500'
              : isHover
              ? 'animate-fill-up bg-black-500'
              : 'animate-empty-out-black-to-white bg-white'
          } top-0 z-0 w-16 aspect-square`}
        />
      )}
    </div>
  )
}
