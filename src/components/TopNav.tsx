'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-black-400/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className='max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between'>
        <a
          href='#top'
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            window.history.replaceState(null, '', '#top')
          }}
          className={`font-paperlogy-800 text-base tracking-tight transition-colors ${
            scrolled ? 'text-black-400' : 'text-white'
          }`}
        >
          박세은
        </a>

        <ul className='flex items-center gap-1 md:gap-2'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-pretendard-500 transition-colors ${
                  scrolled
                    ? 'text-black-400/70 hover:text-black-400 hover:bg-black-400/5'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
