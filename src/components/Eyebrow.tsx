type EyebrowProps = {
  children: React.ReactNode
  theme?: 'light' | 'dark'
}

export default function Eyebrow({ children, theme = 'light' }: EyebrowProps) {
  const color = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
  return (
    <span className={`font-manrope text-xs tracking-[0.2em] uppercase ${color}`}>{children}</span>
  )
}
