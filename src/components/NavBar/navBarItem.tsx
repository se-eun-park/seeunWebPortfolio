'use client'

type NavBarItemProps = {
  children: React.ReactNode
  path: string
}

export default function NavBarItem({ children, path }: NavBarItemProps) {
  const handleOnClick = () => {
    window.history.pushState(null, '', `/?section=${path}`)
  }

  return (
    <button onClick={handleOnClick} className='cursor-pointer'>
      {children}
    </button>
  )
}
