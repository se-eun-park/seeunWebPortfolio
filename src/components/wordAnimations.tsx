'use client'

import { useEffect, useState } from 'react'

type TypingUpProps = {
  words: string
}

export const TypingUp = ({ words }: TypingUpProps) => {
  const delay = 100

  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    words.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleCount(index + 1)
      }, index * delay)
    })
  }, [words])

  return (
    <div className='flex'>
      {words.split('').map((word, index) => (
        <div key={index} className={`${index < visibleCount ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {word}
        </div>
      ))}
    </div>
  )
}
