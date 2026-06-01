type CardProps = {
  children: React.ReactNode
  theme?: 'light' | 'dark'
  className?: string
}

export default function Card({ children, theme = 'light', className = '' }: CardProps) {
  const styles =
    theme === 'dark'
      ? 'border-white/10 bg-white/[0.03]'
      : 'border-black-400/10 bg-black-400/[0.02]'
  return (
    <div className={`rounded-2xl border p-6 md:p-8 ${styles} ${className}`}>{children}</div>
  )
}
