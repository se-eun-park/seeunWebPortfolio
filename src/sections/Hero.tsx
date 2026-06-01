import SocialButtonGroup from '@/components/SocialButtonGroup'
import { TypingUp } from '@/components/wordAnimations'

export default function Hero() {
  return (
    <section
      id='top'
      className='relative min-h-screen w-full bg-black-500 text-white flex items-center'
    >
      <div className='max-w-6xl mx-auto w-full px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28'>
        <div className='flex flex-col gap-4 mb-12 md:mb-20'>
          <span className='font-manrope text-xs tracking-[0.25em] uppercase text-gray-400'>
            Portfolio · 2026
          </span>
          <p className='font-pretendard-400 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed'>
            디자인 안목과 구현 능력을 동시에 다루는 프론트엔드 개발자
          </p>
        </div>

        <h1 className='flex flex-col gap-3 md:gap-4'>
          <div className='font-paperlogy-800 text-5xl md:text-7xl lg:text-8xl tracking-tight flex gap-4 md:gap-6 flex-wrap'>
            <span className='text-gray-500 min-w-max'>더</span>
            <TypingUp words='섬세하게,' />
          </div>
          <div className='font-paperlogy-800 text-5xl md:text-7xl lg:text-8xl tracking-tight flex gap-4 md:gap-6 flex-wrap'>
            <span className='text-gray-500 min-w-max'>더</span>
            <TypingUp words='효율적으로.' />
          </div>
          <div className='font-paperlogy-800 text-5xl md:text-7xl lg:text-8xl tracking-tight flex gap-4 md:gap-6 flex-wrap'>
            <span className='text-gray-500 min-w-max'>사용자 경험과</span>
            <TypingUp words='개발자 경험을' />
          </div>
          <div className='font-paperlogy-800 text-5xl md:text-7xl lg:text-8xl tracking-tight flex gap-4 md:gap-6 flex-wrap'>
            <span className='text-gray-500 min-w-max'>고민하는</span>
            <TypingUp words='프론트엔드 개발자.' />
          </div>
        </h1>

        <div className='mt-16 md:mt-24 flex items-end justify-between flex-wrap gap-10'>
          <div className='flex flex-col gap-2'>
            <span className='font-manrope text-xs tracking-[0.25em] uppercase text-gray-400'>
              Park Se-eun
            </span>
            <p className='font-pretendard-500 text-xl md:text-2xl text-white'>
              박세은 · Frontend Developer
            </p>
          </div>

          <div className='flex gap-3'>
            <SocialButtonGroup name='github' />
            <SocialButtonGroup name='instagram' />
            <SocialButtonGroup name='email' />
          </div>
        </div>
      </div>
    </section>
  )
}
