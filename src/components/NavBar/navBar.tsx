import NavBarItem from './navBarItem'
import { HomeIcon, FolderIcon, BagIcon, ToolIcon, AtIcon } from '@/assets/svg'

export default function NavBar() {
  return (
    <nav className='w-full flex justify-center items-center fixed top-5'>
      <div className='flex items-center gap-10 px-8 py-3 w-fit bg-black-400 rounded-2xl'>
        <NavBarItem path='home'>
          <HomeIcon width={28} height={28} fill='#FFFFFF' />
        </NavBarItem>

        <NavBarItem path='projects'>
          <FolderIcon width={28} height={28} fill='#FFFFFF' />
        </NavBarItem>

        <NavBarItem path='experience'>
          <BagIcon width={28} height={28} fill='#FFFFFF' />
        </NavBarItem>

        <NavBarItem path='skills'>
          <ToolIcon width={28} height={28} />
        </NavBarItem>

        <NavBarItem path='contact'>
          <AtIcon width={28} height={28} fill='#FFFFFF' />
        </NavBarItem>
      </div>
    </nav>
  )
}
