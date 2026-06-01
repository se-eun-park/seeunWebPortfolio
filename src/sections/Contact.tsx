import SocialButtonGroup from '@/components/SocialButtonGroup'

const CONTACTS = [
  { label: 'Email', value: 'seeunbag30@gmail.com', href: 'mailto:seeunbag30@gmail.com' },
  { label: 'GitHub', value: 'github.com/se-eun-park', href: 'https://github.com/se-eun-park' },
  { label: 'Instagram', value: '@seeunn2', href: 'https://www.instagram.com/seeunn2/' },
]

export default function Contact() {
  return (
    <section id='contact' className='w-full bg-black-500 text-white'>
      <div className='max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-40'>
        <span className='font-manrope text-xs tracking-[0.25em] uppercase text-gray-400'>
          Contact
        </span>
        <h2 className='mt-4 font-paperlogy-800 text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]'>
          읽어주셔서
          <br />
          감사합니다.
        </h2>

        <div className='mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-end'>
          <dl className='flex flex-col divide-y divide-white/10'>
            {CONTACTS.map((c) => (
              <div
                key={c.label}
                className='grid grid-cols-[120px_1fr] gap-4 py-4 first:pt-0 items-center'
              >
                <dt className='font-pretendard-500 text-sm text-gray-400'>{c.label}</dt>
                <dd>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='font-pretendard-500 text-base md:text-lg text-white hover:text-point-green transition-colors'
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className='flex gap-3 md:justify-end'>
            <SocialButtonGroup name='github' />
            <SocialButtonGroup name='instagram' />
            <SocialButtonGroup name='email' />
          </div>
        </div>

        <div className='mt-24 md:mt-32 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-2'>
          <span className='font-manrope text-xs tracking-widest text-gray-500'>
            © 2026 박세은 · Park Se-eun
          </span>
          <span className='font-manrope text-xs tracking-widest text-gray-500'>
            Frontend Developer · Portfolio
          </span>
        </div>
      </div>
    </section>
  )
}
