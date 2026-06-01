type SectionProps = {
  id?: string
  children: React.ReactNode
  theme?: 'light' | 'dark'
  className?: string
}

export default function Section({ id, children, theme = 'light', className = '' }: SectionProps) {
  const bg = theme === 'dark' ? 'bg-black-500 text-white' : 'bg-white text-black-400'
  return (
    <section id={id} className={`${bg} w-full`}>
      <div
        className={`max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 ${className}`}
      >
        {children}
      </div>
    </section>
  )
}
