'use client'

import { useState } from 'react'

type NavBarItemProps = {
  children: React.ReactNode
  path: string
}

type HoverTextMapProps = {
  [key: string]: string
}

const hoverTextMap: HoverTextMapProps = {
  home: '홈',
  projects: '프로젝트',
  experience: '활동',
  skills: '기술 스택',
  contact: '연락처',
}

export default function NavBarItem({ children, path }: NavBarItemProps) {
  const [isHover, setIsHover] = useState(false)

  const handleOnClick = () => {
    window.history.pushState(null, '', `/?section=${path}`)
  }

  const handleOnMouseEnter = () => {
    setIsHover(true)
  }

  const handleOnMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <button
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className='cursor-pointer relative'
    >
      {children}

      <div
        className={`absolute ${
          isHover ? 'opacity-100 top-11' : 'opacity-0 top-4'
        } transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 bg-black-300 px-3 py-0.5 rounded-lg text-sm pointer-events-none`}
      >
        <p className='text-white min-w-max text-center font-pretendard-400'>{hoverTextMap[path]}</p>
      </div>
    </button>
  )
}
