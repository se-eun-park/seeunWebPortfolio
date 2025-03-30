import Image from 'next/image'
import SocialButtonGroup from '@/components/SocialButtonGroup'
import { TypingUp } from '@/components/wordAnimations'
import sampleImage from '@/assets/img/사원증 샘플.png'

export default function HomePage() {
  return (
    <div className='w-full h-screen bg-black-500 px-8 py-10 flex gap-14 justify-center'>
      {/* left section */}
      <section className='flex flex-col gap-16 h-full justify-center'>
        <h1 className='flex flex-col gap-3'>
          <div className='text-white font-paperlogy-800 text-7xl flex gap-5'>
            <span className='text-gray-500 min-w-max'>더</span>
            <TypingUp words='섬세하게,' />
          </div>
          <div className='text-white font-paperlogy-800 text-7xl flex gap-5'>
            <span className='text-gray-500 min-w-max'>더</span>
            <TypingUp words='효율적으로.' />
          </div>
          <div className='text-white font-paperlogy-800 text-7xl flex gap-5'>
            <span className='text-gray-500 min-w-max'>사용자 경험과</span>
            <TypingUp words='개발자 경험을' />
          </div>
          <div className='text-white font-paperlogy-800 text-7xl flex gap-5'>
            <span className='text-gray-500 min-w-max'>고민하는</span>
            <TypingUp words='프론트엔드 개발자' />
          </div>
        </h1>

        <div className='flex gap-3'>
          <SocialButtonGroup name='instagram' />
          <SocialButtonGroup name='github' />
          <SocialButtonGroup name='email' />
        </div>
      </section>

      {/* middle section */}
      <section>
        {/* 임시 이미지, 추후 three.js 모델로 대체 */}
        <Image src={sampleImage} width={331} height={846} alt='사원증 샘플사진' priority />
      </section>

      {/* right section */}
      <section className='flex flex-col justify-end mb-50'>
        <h2 className='text-white font-pretendard-500 leading-11 text-4xl'>
          안녕하세요 박세은입니다.
          <br />
          아무튼 뭔가 너네가 날 뽑아야하는 이유
          <br />
          그에 대한 타당한 논리와 설명
          <br />
          멋진 문장 등등
        </h2>
      </section>
    </div>
  )
}
