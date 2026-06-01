import Eyebrow from './Eyebrow'

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  theme?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'light',
}: SectionHeadingProps) {
  const descriptionColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
  return (
    <header className='flex flex-col gap-4 mb-14 md:mb-20'>
      {eyebrow && <Eyebrow theme={theme}>{eyebrow}</Eyebrow>}
      <h2 className='font-paperlogy-800 text-4xl md:text-5xl leading-[1.1] tracking-tight'>
        {title}
      </h2>
      {description && (
        <p
          className={`font-pretendard-400 text-base md:text-lg max-w-3xl leading-relaxed ${descriptionColor}`}
        >
          {description}
        </p>
      )}
    </header>
  )
}
