import Tag from './Tag'

type ProjectHeaderProps = {
  index: string
  name: string
  tagline: string
  meta?: { label: string; value: React.ReactNode }[]
  stack?: string[]
  highlight?: React.ReactNode
  theme?: 'light' | 'dark'
}

export default function ProjectHeader({
  index,
  name,
  tagline,
  meta = [],
  stack = [],
  highlight,
  theme = 'light',
}: ProjectHeaderProps) {
  const subtle = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
  const divider = theme === 'dark' ? 'border-white/10' : 'border-black-400/10'

  return (
    <header className={`flex flex-col gap-8 pb-10 mb-14 border-b ${divider}`}>
      <div className='flex flex-col gap-3'>
        <span className={`font-manrope text-xs tracking-[0.2em] uppercase ${subtle}`}>
          Project · {index}
        </span>
        <h2 className='font-paperlogy-800 text-4xl md:text-6xl leading-[1.05] tracking-tight'>
          {name}
        </h2>
        <p
          className={`font-pretendard-500 text-lg md:text-xl leading-relaxed ${
            theme === 'dark' ? 'text-white/85' : 'text-black-400/80'
          }`}
        >
          {tagline}
        </p>
      </div>

      {highlight && <div>{highlight}</div>}

      {(meta.length > 0 || stack.length > 0) && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {meta.length > 0 && (
            <dl className='flex flex-col gap-3'>
              {meta.map((m) => (
                <div key={m.label} className='flex gap-4 text-sm md:text-base'>
                  <dt className={`font-pretendard-500 min-w-24 ${subtle}`}>{m.label}</dt>
                  <dd className='font-pretendard-500'>{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {stack.length > 0 && (
            <div className='flex flex-col gap-3'>
              <span className={`font-pretendard-500 text-sm md:text-base ${subtle}`}>
                Tech Stack
              </span>
              <div className='flex flex-wrap gap-2'>
                {stack.map((s) => (
                  <Tag key={s} theme={theme}>
                    {s}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
