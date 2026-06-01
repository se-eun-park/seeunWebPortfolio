import TopNav from '@/components/TopNav'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import ProjectsIntro from '@/sections/ProjectsIntro'
import DcampUi from '@/sections/projects/DcampUi'
import Dawnstreet from '@/sections/projects/Dawnstreet'
import SeedanceStudio from '@/sections/projects/SeedanceStudio'
import Lips from '@/sections/projects/Lips'
import Ssafice from '@/sections/projects/Ssafice'
import PickCha from '@/sections/projects/PickCha'
import Contact from '@/sections/Contact'

export default function Page() {
  return (
    <main className='bg-white text-black-400'>
      <TopNav />
      <Hero />
      <About />
      <Skills />
      <ProjectsIntro />
      <DcampUi />
      <Dawnstreet />
      <SeedanceStudio />
      <Lips />
      <Ssafice />
      <PickCha />
      <Contact />
    </main>
  )
}
