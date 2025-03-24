import NavBarItem from './navBarItem'

export default function NavBar() {
  return (
    <nav className='text-point-green w-full flex justify-center items-center fixed top-0'>
      <div className='flex gap-7 w-fit bg-black'>
        <NavBarItem path='home'>Home</NavBarItem>
        <NavBarItem path='projects'>Projects</NavBarItem>
        <NavBarItem path='skills'>Skills</NavBarItem>
        <NavBarItem path='experience'>Experience</NavBarItem>
        <NavBarItem path='contact'>Contact</NavBarItem>
      </div>
    </nav>
  )
}
